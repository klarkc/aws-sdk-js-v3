import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateAppCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateApp",
        };
        body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateReplicationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateReplicationJob",
        };
        body = JSON.stringify(serializeAws_json1_1CreateReplicationJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAppCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteApp",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAppLaunchConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAppLaunchConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAppReplicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAppReplicationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAppValidationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAppValidationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteReplicationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteReplicationJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteServerCatalogCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteServerCatalogRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DisassociateConnectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.DisassociateConnector",
        };
        body = JSON.stringify(serializeAws_json1_1DisassociateConnectorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateChangeSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateChangeSet",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateChangeSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GenerateTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateTemplate",
        };
        body = JSON.stringify(serializeAws_json1_1GenerateTemplateRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAppCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetApp",
        };
        body = JSON.stringify(serializeAws_json1_1GetAppRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAppLaunchConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1GetAppLaunchConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAppReplicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1GetAppReplicationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAppValidationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1GetAppValidationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetAppValidationOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput",
        };
        body = JSON.stringify(serializeAws_json1_1GetAppValidationOutputRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetConnectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetConnectors",
        };
        body = JSON.stringify(serializeAws_json1_1GetConnectorsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetReplicationJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationJobs",
        };
        body = JSON.stringify(serializeAws_json1_1GetReplicationJobsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetReplicationRunsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationRuns",
        };
        body = JSON.stringify(serializeAws_json1_1GetReplicationRunsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetServersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetServers",
        };
        body = JSON.stringify(serializeAws_json1_1GetServersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ImportAppCatalogCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportAppCatalog",
        };
        body = JSON.stringify(serializeAws_json1_1ImportAppCatalogRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ImportServerCatalogCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportServerCatalog",
        };
        body = JSON.stringify(serializeAws_json1_1ImportServerCatalogRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1LaunchAppCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.LaunchApp",
        };
        body = JSON.stringify(serializeAws_json1_1LaunchAppRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAppsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.ListApps",
        };
        body = JSON.stringify(serializeAws_json1_1ListAppsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1NotifyAppValidationOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput",
        };
        body = JSON.stringify(serializeAws_json1_1NotifyAppValidationOutputRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAppLaunchConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1PutAppLaunchConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAppReplicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1PutAppReplicationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAppValidationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1PutAppValidationConfigurationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartAppReplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartAppReplication",
        };
        body = JSON.stringify(serializeAws_json1_1StartAppReplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartOnDemandAppReplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication",
        };
        body = JSON.stringify(serializeAws_json1_1StartOnDemandAppReplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartOnDemandReplicationRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun",
        };
        body = JSON.stringify(serializeAws_json1_1StartOnDemandReplicationRunRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopAppReplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.StopAppReplication",
        };
        body = JSON.stringify(serializeAws_json1_1StopAppReplicationRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TerminateAppCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.TerminateApp",
        };
        body = JSON.stringify(serializeAws_json1_1TerminateAppRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateAppCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateApp",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateReplicationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateReplicationJobRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CreateAppCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateAppCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateAppResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateAppCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateReplicationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateReplicationJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateReplicationJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateReplicationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "NoConnectorsAvailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#NoConnectorsAvailableException": return [3 /*break*/, 8];
                    case "OperationNotPermittedException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 10];
                    case "ReplicationJobAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.sms#ReplicationJobAlreadyExistsException": return [3 /*break*/, 12];
                    case "ServerCannotBeReplicatedException": return [3 /*break*/, 14];
                    case "com.amazonaws.sms#ServerCannotBeReplicatedException": return [3 /*break*/, 14];
                    case "TemporarilyUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.sms#TemporarilyUnavailableException": return [3 /*break*/, 16];
                    case "UnauthorizedOperationException": return [3 /*break*/, 18];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAppCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAppCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAppResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAppCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAppLaunchConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAppLaunchConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAppReplicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAppReplicationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAppValidationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAppValidationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAppValidationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAppValidationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteReplicationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteReplicationJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteReplicationJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteReplicationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "OperationNotPermittedException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 6];
                    case "ReplicationJobNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#ReplicationJobNotFoundException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteServerCatalogCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteServerCatalogCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteServerCatalogResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteServerCatalogCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "OperationNotPermittedException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 6];
                    case "UnauthorizedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DisassociateConnectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DisassociateConnectorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DisassociateConnectorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DisassociateConnectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "OperationNotPermittedException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 6];
                    case "UnauthorizedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateChangeSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateChangeSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateChangeSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateChangeSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GenerateTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GenerateTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GenerateTemplateResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GenerateTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAppCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAppCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAppResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAppCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAppLaunchConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAppLaunchConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAppLaunchConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAppLaunchConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAppReplicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAppReplicationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAppReplicationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAppReplicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAppValidationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAppValidationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAppValidationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAppValidationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetAppValidationOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetAppValidationOutputCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetAppValidationOutputResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetAppValidationOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetConnectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetConnectorsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetConnectorsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetConnectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "UnauthorizedOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1GetReplicationJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetReplicationJobsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetReplicationJobsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetReplicationJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "UnauthorizedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetReplicationRunsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetReplicationRunsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetReplicationRunsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetReplicationRunsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "UnauthorizedOperationException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetServersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetServersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetServersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetServersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "UnauthorizedOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ImportAppCatalogCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ImportAppCatalogCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ImportAppCatalogResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ImportAppCatalogCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ImportServerCatalogCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ImportServerCatalogCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ImportServerCatalogResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ImportServerCatalogCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 2];
                    case "MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 4];
                    case "NoConnectorsAvailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#NoConnectorsAvailableException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1LaunchAppCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1LaunchAppCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1LaunchAppResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1LaunchAppCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAppsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAppsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAppsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAppsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1NotifyAppValidationOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1NotifyAppValidationOutputCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1NotifyAppValidationOutputResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1NotifyAppValidationOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAppLaunchConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAppLaunchConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAppLaunchConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAppLaunchConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAppReplicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAppReplicationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAppReplicationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAppReplicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAppValidationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAppValidationConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAppValidationConfigurationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAppValidationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartAppReplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartAppReplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartAppReplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartAppReplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartOnDemandAppReplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartOnDemandAppReplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartOnDemandAppReplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartOnDemandAppReplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartOnDemandReplicationRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartOnDemandReplicationRunCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartOnDemandReplicationRunResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartOnDemandReplicationRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DryRunOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#DryRunOperationException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "ReplicationRunLimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#ReplicationRunLimitExceededException": return [3 /*break*/, 10];
                    case "UnauthorizedOperationException": return [3 /*break*/, 12];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DryRunOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopAppReplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopAppReplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopAppReplicationResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopAppReplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TerminateAppCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TerminateAppCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TerminateAppResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TerminateAppCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateAppCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateAppCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateAppResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateAppCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "UnauthorizedOperationException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateReplicationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateReplicationJobCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateReplicationJobResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateReplicationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalError": return [3 /*break*/, 2];
                    case "com.amazonaws.sms#InternalError": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.sms#InvalidParameterException": return [3 /*break*/, 4];
                    case "MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.sms#MissingRequiredParameterException": return [3 /*break*/, 6];
                    case "OperationNotPermittedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sms#OperationNotPermittedException": return [3 /*break*/, 8];
                    case "ReplicationJobNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.sms#ReplicationJobNotFoundException": return [3 /*break*/, 10];
                    case "ServerCannotBeReplicatedException": return [3 /*break*/, 12];
                    case "com.amazonaws.sms#ServerCannotBeReplicatedException": return [3 /*break*/, 12];
                    case "TemporarilyUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.sms#TemporarilyUnavailableException": return [3 /*break*/, 14];
                    case "UnauthorizedOperationException": return [3 /*break*/, 16];
                    case "com.amazonaws.sms#UnauthorizedOperationException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1DryRunOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DryRunOperationException(body, context);
        contents = __assign({ name: "DryRunOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalError(body, context);
        contents = __assign({ name: "InternalError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
        contents = __assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MissingRequiredParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MissingRequiredParameterException(body, context);
        contents = __assign({ name: "MissingRequiredParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoConnectorsAvailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoConnectorsAvailableException(body, context);
        contents = __assign({ name: "NoConnectorsAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OperationNotPermittedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
        contents = __assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ReplicationJobAlreadyExistsException(body, context);
        contents = __assign({ name: "ReplicationJobAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ReplicationJobNotFoundException(body, context);
        contents = __assign({ name: "ReplicationJobNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ReplicationRunLimitExceededException(body, context);
        contents = __assign({ name: "ReplicationRunLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServerCannotBeReplicatedException(body, context);
        contents = __assign({ name: "ServerCannotBeReplicatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TemporarilyUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TemporarilyUnavailableException(body, context);
        contents = __assign({ name: "TemporarilyUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnauthorizedOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnauthorizedOperationException(body, context);
        contents = __assign({ name: "UnauthorizedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AppIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AppValidationConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.appValidationStrategy !== undefined &&
        input.appValidationStrategy !== null && { appValidationStrategy: input.appValidationStrategy })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.ssmValidationParameters !== undefined &&
        input.ssmValidationParameters !== null && {
        ssmValidationParameters: serializeAws_json1_1SSMValidationParameters(input.ssmValidationParameters, context),
    })), (input.validationId !== undefined && input.validationId !== null && { validationId: input.validationId }));
};
var serializeAws_json1_1AppValidationConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AppValidationConfiguration(entry, context);
    });
};
var serializeAws_json1_1CreateAppRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName })), (input.serverGroups !== undefined &&
        input.serverGroups !== null && { serverGroups: serializeAws_json1_1ServerGroups(input.serverGroups, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }));
};
var serializeAws_json1_1CreateReplicationJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted })), (input.frequency !== undefined && input.frequency !== null && { frequency: input.frequency })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.licenseType !== undefined && input.licenseType !== null && { licenseType: input.licenseType })), (input.numberOfRecentAmisToKeep !== undefined &&
        input.numberOfRecentAmisToKeep !== null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep })), (input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName })), (input.runOnce !== undefined && input.runOnce !== null && { runOnce: input.runOnce })), (input.seedReplicationTime !== undefined &&
        input.seedReplicationTime !== null && {
        seedReplicationTime: Math.round(input.seedReplicationTime.getTime() / 1000),
    })), (input.serverId !== undefined && input.serverId !== null && { serverId: input.serverId }));
};
var serializeAws_json1_1DeleteAppLaunchConfigurationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1DeleteAppReplicationConfigurationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1DeleteAppRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.forceStopAppReplication !== undefined &&
        input.forceStopAppReplication !== null && { forceStopAppReplication: input.forceStopAppReplication })), (input.forceTerminateApp !== undefined &&
        input.forceTerminateApp !== null && { forceTerminateApp: input.forceTerminateApp }));
};
var serializeAws_json1_1DeleteAppValidationConfigurationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1DeleteReplicationJobRequest = function (input, context) {
    return __assign({}, (input.replicationJobId !== undefined &&
        input.replicationJobId !== null && { replicationJobId: input.replicationJobId }));
};
var serializeAws_json1_1DeleteServerCatalogRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1DisassociateConnectorRequest = function (input, context) {
    return __assign({}, (input.connectorId !== undefined && input.connectorId !== null && { connectorId: input.connectorId }));
};
var serializeAws_json1_1GenerateChangeSetRequest = function (input, context) {
    return __assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.changesetFormat !== undefined &&
        input.changesetFormat !== null && { changesetFormat: input.changesetFormat }));
};
var serializeAws_json1_1GenerateTemplateRequest = function (input, context) {
    return __assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.templateFormat !== undefined &&
        input.templateFormat !== null && { templateFormat: input.templateFormat }));
};
var serializeAws_json1_1GetAppLaunchConfigurationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1GetAppReplicationConfigurationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1GetAppRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1GetAppValidationConfigurationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1GetAppValidationOutputRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1GetConnectorsRequest = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1GetReplicationJobsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.replicationJobId !== undefined &&
        input.replicationJobId !== null && { replicationJobId: input.replicationJobId }));
};
var serializeAws_json1_1GetReplicationRunsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.replicationJobId !== undefined &&
        input.replicationJobId !== null && { replicationJobId: input.replicationJobId }));
};
var serializeAws_json1_1GetServersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.vmServerAddressList !== undefined &&
        input.vmServerAddressList !== null && {
        vmServerAddressList: serializeAws_json1_1VmServerAddressList(input.vmServerAddressList, context),
    }));
};
var serializeAws_json1_1ImportAppCatalogRequest = function (input, context) {
    return __assign({}, (input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }));
};
var serializeAws_json1_1ImportServerCatalogRequest = function (input, context) {
    return {};
};
var serializeAws_json1_1LaunchAppRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1ListAppsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.appIds !== undefined &&
        input.appIds !== null && { appIds: serializeAws_json1_1AppIds(input.appIds, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1NotificationContext = function (input, context) {
    return __assign(__assign(__assign({}, (input.status !== undefined && input.status !== null && { status: input.status })), (input.statusMessage !== undefined && input.statusMessage !== null && { statusMessage: input.statusMessage })), (input.validationId !== undefined && input.validationId !== null && { validationId: input.validationId }));
};
var serializeAws_json1_1NotifyAppValidationOutputRequest = function (input, context) {
    return __assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.notificationContext !== undefined &&
        input.notificationContext !== null && {
        notificationContext: serializeAws_json1_1NotificationContext(input.notificationContext, context),
    }));
};
var serializeAws_json1_1PutAppLaunchConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.autoLaunch !== undefined && input.autoLaunch !== null && { autoLaunch: input.autoLaunch })), (input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName })), (input.serverGroupLaunchConfigurations !== undefined &&
        input.serverGroupLaunchConfigurations !== null && {
        serverGroupLaunchConfigurations: serializeAws_json1_1ServerGroupLaunchConfigurations(input.serverGroupLaunchConfigurations, context),
    }));
};
var serializeAws_json1_1PutAppReplicationConfigurationRequest = function (input, context) {
    return __assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.serverGroupReplicationConfigurations !== undefined &&
        input.serverGroupReplicationConfigurations !== null && {
        serverGroupReplicationConfigurations: serializeAws_json1_1ServerGroupReplicationConfigurations(input.serverGroupReplicationConfigurations, context),
    }));
};
var serializeAws_json1_1PutAppValidationConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.appValidationConfigurations !== undefined &&
        input.appValidationConfigurations !== null && {
        appValidationConfigurations: serializeAws_json1_1AppValidationConfigurations(input.appValidationConfigurations, context),
    })), (input.serverGroupValidationConfigurations !== undefined &&
        input.serverGroupValidationConfigurations !== null && {
        serverGroupValidationConfigurations: serializeAws_json1_1ServerGroupValidationConfigurations(input.serverGroupValidationConfigurations, context),
    }));
};
var serializeAws_json1_1S3Location = function (input, context) {
    return __assign(__assign({}, (input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket })), (input.key !== undefined && input.key !== null && { key: input.key }));
};
var serializeAws_json1_1Server = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.replicationJobId !== undefined &&
        input.replicationJobId !== null && { replicationJobId: input.replicationJobId })), (input.replicationJobTerminated !== undefined &&
        input.replicationJobTerminated !== null && { replicationJobTerminated: input.replicationJobTerminated })), (input.serverId !== undefined && input.serverId !== null && { serverId: input.serverId })), (input.serverType !== undefined && input.serverType !== null && { serverType: input.serverType })), (input.vmServer !== undefined &&
        input.vmServer !== null && { vmServer: serializeAws_json1_1VmServer(input.vmServer, context) }));
};
var serializeAws_json1_1ServerGroup = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId })), (input.serverList !== undefined &&
        input.serverList !== null && { serverList: serializeAws_json1_1ServerList(input.serverList, context) }));
};
var serializeAws_json1_1ServerGroupLaunchConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.launchOrder !== undefined && input.launchOrder !== null && { launchOrder: input.launchOrder })), (input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId })), (input.serverLaunchConfigurations !== undefined &&
        input.serverLaunchConfigurations !== null && {
        serverLaunchConfigurations: serializeAws_json1_1ServerLaunchConfigurations(input.serverLaunchConfigurations, context),
    }));
};
var serializeAws_json1_1ServerGroupLaunchConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroupLaunchConfiguration(entry, context);
    });
};
var serializeAws_json1_1ServerGroupReplicationConfiguration = function (input, context) {
    return __assign(__assign({}, (input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId })), (input.serverReplicationConfigurations !== undefined &&
        input.serverReplicationConfigurations !== null && {
        serverReplicationConfigurations: serializeAws_json1_1ServerReplicationConfigurations(input.serverReplicationConfigurations, context),
    }));
};
var serializeAws_json1_1ServerGroupReplicationConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroupReplicationConfiguration(entry, context);
    });
};
var serializeAws_json1_1ServerGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroup(entry, context);
    });
};
var serializeAws_json1_1ServerGroupValidationConfiguration = function (input, context) {
    return __assign(__assign({}, (input.serverGroupId !== undefined && input.serverGroupId !== null && { serverGroupId: input.serverGroupId })), (input.serverValidationConfigurations !== undefined &&
        input.serverValidationConfigurations !== null && {
        serverValidationConfigurations: serializeAws_json1_1ServerValidationConfigurations(input.serverValidationConfigurations, context),
    }));
};
var serializeAws_json1_1ServerGroupValidationConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerGroupValidationConfiguration(entry, context);
    });
};
var serializeAws_json1_1ServerLaunchConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.associatePublicIpAddress !== undefined &&
        input.associatePublicIpAddress !== null && { associatePublicIpAddress: input.associatePublicIpAddress })), (input.configureScript !== undefined &&
        input.configureScript !== null && {
        configureScript: serializeAws_json1_1S3Location(input.configureScript, context),
    })), (input.configureScriptType !== undefined &&
        input.configureScriptType !== null && { configureScriptType: input.configureScriptType })), (input.ec2KeyName !== undefined && input.ec2KeyName !== null && { ec2KeyName: input.ec2KeyName })), (input.iamInstanceProfileName !== undefined &&
        input.iamInstanceProfileName !== null && { iamInstanceProfileName: input.iamInstanceProfileName })), (input.instanceType !== undefined && input.instanceType !== null && { instanceType: input.instanceType })), (input.logicalId !== undefined && input.logicalId !== null && { logicalId: input.logicalId })), (input.securityGroup !== undefined && input.securityGroup !== null && { securityGroup: input.securityGroup })), (input.server !== undefined &&
        input.server !== null && { server: serializeAws_json1_1Server(input.server, context) })), (input.subnet !== undefined && input.subnet !== null && { subnet: input.subnet })), (input.userData !== undefined &&
        input.userData !== null && { userData: serializeAws_json1_1UserData(input.userData, context) })), (input.vpc !== undefined && input.vpc !== null && { vpc: input.vpc }));
};
var serializeAws_json1_1ServerLaunchConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerLaunchConfiguration(entry, context);
    });
};
var serializeAws_json1_1ServerList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Server(entry, context);
    });
};
var serializeAws_json1_1ServerReplicationConfiguration = function (input, context) {
    return __assign(__assign({}, (input.server !== undefined &&
        input.server !== null && { server: serializeAws_json1_1Server(input.server, context) })), (input.serverReplicationParameters !== undefined &&
        input.serverReplicationParameters !== null && {
        serverReplicationParameters: serializeAws_json1_1ServerReplicationParameters(input.serverReplicationParameters, context),
    }));
};
var serializeAws_json1_1ServerReplicationConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerReplicationConfiguration(entry, context);
    });
};
var serializeAws_json1_1ServerReplicationParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted })), (input.frequency !== undefined && input.frequency !== null && { frequency: input.frequency })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.licenseType !== undefined && input.licenseType !== null && { licenseType: input.licenseType })), (input.numberOfRecentAmisToKeep !== undefined &&
        input.numberOfRecentAmisToKeep !== null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep })), (input.runOnce !== undefined && input.runOnce !== null && { runOnce: input.runOnce })), (input.seedTime !== undefined &&
        input.seedTime !== null && { seedTime: Math.round(input.seedTime.getTime() / 1000) }));
};
var serializeAws_json1_1ServerValidationConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.server !== undefined &&
        input.server !== null && { server: serializeAws_json1_1Server(input.server, context) })), (input.serverValidationStrategy !== undefined &&
        input.serverValidationStrategy !== null && { serverValidationStrategy: input.serverValidationStrategy })), (input.userDataValidationParameters !== undefined &&
        input.userDataValidationParameters !== null && {
        userDataValidationParameters: serializeAws_json1_1UserDataValidationParameters(input.userDataValidationParameters, context),
    })), (input.validationId !== undefined && input.validationId !== null && { validationId: input.validationId }));
};
var serializeAws_json1_1ServerValidationConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerValidationConfiguration(entry, context);
    });
};
var serializeAws_json1_1Source = function (input, context) {
    return __assign({}, (input.s3Location !== undefined &&
        input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }));
};
var serializeAws_json1_1SSMValidationParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.command !== undefined && input.command !== null && { command: input.command })), (input.executionTimeoutSeconds !== undefined &&
        input.executionTimeoutSeconds !== null && { executionTimeoutSeconds: input.executionTimeoutSeconds })), (input.instanceId !== undefined && input.instanceId !== null && { instanceId: input.instanceId })), (input.outputS3BucketName !== undefined &&
        input.outputS3BucketName !== null && { outputS3BucketName: input.outputS3BucketName })), (input.scriptType !== undefined && input.scriptType !== null && { scriptType: input.scriptType })), (input.source !== undefined &&
        input.source !== null && { source: serializeAws_json1_1Source(input.source, context) }));
};
var serializeAws_json1_1StartAppReplicationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1StartOnDemandAppReplicationRequest = function (input, context) {
    return __assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.description !== undefined && input.description !== null && { description: input.description }));
};
var serializeAws_json1_1StartOnDemandReplicationRunRequest = function (input, context) {
    return __assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.replicationJobId !== undefined &&
        input.replicationJobId !== null && { replicationJobId: input.replicationJobId }));
};
var serializeAws_json1_1StopAppReplicationRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TerminateAppRequest = function (input, context) {
    return __assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId }));
};
var serializeAws_json1_1UpdateAppRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.appId !== undefined && input.appId !== null && { appId: input.appId })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName })), (input.serverGroups !== undefined &&
        input.serverGroups !== null && { serverGroups: serializeAws_json1_1ServerGroups(input.serverGroups, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }));
};
var serializeAws_json1_1UpdateReplicationJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.description !== undefined && input.description !== null && { description: input.description })), (input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted })), (input.frequency !== undefined && input.frequency !== null && { frequency: input.frequency })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.licenseType !== undefined && input.licenseType !== null && { licenseType: input.licenseType })), (input.nextReplicationRunStartTime !== undefined &&
        input.nextReplicationRunStartTime !== null && {
        nextReplicationRunStartTime: Math.round(input.nextReplicationRunStartTime.getTime() / 1000),
    })), (input.numberOfRecentAmisToKeep !== undefined &&
        input.numberOfRecentAmisToKeep !== null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep })), (input.replicationJobId !== undefined &&
        input.replicationJobId !== null && { replicationJobId: input.replicationJobId })), (input.roleName !== undefined && input.roleName !== null && { roleName: input.roleName }));
};
var serializeAws_json1_1UserData = function (input, context) {
    return __assign({}, (input.s3Location !== undefined &&
        input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }));
};
var serializeAws_json1_1UserDataValidationParameters = function (input, context) {
    return __assign(__assign({}, (input.scriptType !== undefined && input.scriptType !== null && { scriptType: input.scriptType })), (input.source !== undefined &&
        input.source !== null && { source: serializeAws_json1_1Source(input.source, context) }));
};
var serializeAws_json1_1VmServer = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.vmManagerName !== undefined && input.vmManagerName !== null && { vmManagerName: input.vmManagerName })), (input.vmManagerType !== undefined && input.vmManagerType !== null && { vmManagerType: input.vmManagerType })), (input.vmName !== undefined && input.vmName !== null && { vmName: input.vmName })), (input.vmPath !== undefined && input.vmPath !== null && { vmPath: input.vmPath })), (input.vmServerAddress !== undefined &&
        input.vmServerAddress !== null && {
        vmServerAddress: serializeAws_json1_1VmServerAddress(input.vmServerAddress, context),
    }));
};
var serializeAws_json1_1VmServerAddress = function (input, context) {
    return __assign(__assign({}, (input.vmId !== undefined && input.vmId !== null && { vmId: input.vmId })), (input.vmManagerId !== undefined && input.vmManagerId !== null && { vmManagerId: input.vmManagerId }));
};
var serializeAws_json1_1VmServerAddressList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VmServerAddress(entry, context);
    });
};
var deserializeAws_json1_1Apps = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AppSummary(entry, context);
    });
};
var deserializeAws_json1_1AppSummary = function (output, context) {
    return {
        appId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        importedAppId: output.importedAppId !== undefined && output.importedAppId !== null ? output.importedAppId : undefined,
        lastModified: output.lastModified !== undefined && output.lastModified !== null
            ? new Date(Math.round(output.lastModified * 1000))
            : undefined,
        latestReplicationTime: output.latestReplicationTime !== undefined && output.latestReplicationTime !== null
            ? new Date(Math.round(output.latestReplicationTime * 1000))
            : undefined,
        launchConfigurationStatus: output.launchConfigurationStatus !== undefined && output.launchConfigurationStatus !== null
            ? output.launchConfigurationStatus
            : undefined,
        launchDetails: output.launchDetails !== undefined && output.launchDetails !== null
            ? deserializeAws_json1_1LaunchDetails(output.launchDetails, context)
            : undefined,
        launchStatus: output.launchStatus !== undefined && output.launchStatus !== null ? output.launchStatus : undefined,
        launchStatusMessage: output.launchStatusMessage !== undefined && output.launchStatusMessage !== null
            ? output.launchStatusMessage
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        replicationConfigurationStatus: output.replicationConfigurationStatus !== undefined && output.replicationConfigurationStatus !== null
            ? output.replicationConfigurationStatus
            : undefined,
        replicationStatus: output.replicationStatus !== undefined && output.replicationStatus !== null
            ? output.replicationStatus
            : undefined,
        replicationStatusMessage: output.replicationStatusMessage !== undefined && output.replicationStatusMessage !== null
            ? output.replicationStatusMessage
            : undefined,
        roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        totalServerGroups: output.totalServerGroups !== undefined && output.totalServerGroups !== null
            ? output.totalServerGroups
            : undefined,
        totalServers: output.totalServers !== undefined && output.totalServers !== null ? output.totalServers : undefined,
    };
};
var deserializeAws_json1_1AppValidationConfiguration = function (output, context) {
    return {
        appValidationStrategy: output.appValidationStrategy !== undefined && output.appValidationStrategy !== null
            ? output.appValidationStrategy
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        ssmValidationParameters: output.ssmValidationParameters !== undefined && output.ssmValidationParameters !== null
            ? deserializeAws_json1_1SSMValidationParameters(output.ssmValidationParameters, context)
            : undefined,
        validationId: output.validationId !== undefined && output.validationId !== null ? output.validationId : undefined,
    };
};
var deserializeAws_json1_1AppValidationConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AppValidationConfiguration(entry, context);
    });
};
var deserializeAws_json1_1AppValidationOutput = function (output, context) {
    return {
        ssmOutput: output.ssmOutput !== undefined && output.ssmOutput !== null
            ? deserializeAws_json1_1SSMOutput(output.ssmOutput, context)
            : undefined,
    };
};
var deserializeAws_json1_1Connector = function (output, context) {
    return {
        associatedOn: output.associatedOn !== undefined && output.associatedOn !== null
            ? new Date(Math.round(output.associatedOn * 1000))
            : undefined,
        capabilityList: output.capabilityList !== undefined && output.capabilityList !== null
            ? deserializeAws_json1_1ConnectorCapabilityList(output.capabilityList, context)
            : undefined,
        connectorId: output.connectorId !== undefined && output.connectorId !== null ? output.connectorId : undefined,
        ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
        macAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
        vmManagerId: output.vmManagerId !== undefined && output.vmManagerId !== null ? output.vmManagerId : undefined,
        vmManagerName: output.vmManagerName !== undefined && output.vmManagerName !== null ? output.vmManagerName : undefined,
        vmManagerType: output.vmManagerType !== undefined && output.vmManagerType !== null ? output.vmManagerType : undefined,
    };
};
var deserializeAws_json1_1ConnectorCapabilityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ConnectorList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connector(entry, context);
    });
};
var deserializeAws_json1_1CreateAppResponse = function (output, context) {
    return {
        appSummary: output.appSummary !== undefined && output.appSummary !== null
            ? deserializeAws_json1_1AppSummary(output.appSummary, context)
            : undefined,
        serverGroups: output.serverGroups !== undefined && output.serverGroups !== null
            ? deserializeAws_json1_1ServerGroups(output.serverGroups, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
var deserializeAws_json1_1CreateReplicationJobResponse = function (output, context) {
    return {
        replicationJobId: output.replicationJobId !== undefined && output.replicationJobId !== null ? output.replicationJobId : undefined,
    };
};
var deserializeAws_json1_1DeleteAppLaunchConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteAppReplicationConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteAppResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteAppValidationConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteReplicationJobResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeleteServerCatalogResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DisassociateConnectorResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1DryRunOperationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1GenerateChangeSetResponse = function (output, context) {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
var deserializeAws_json1_1GenerateTemplateResponse = function (output, context) {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetAppLaunchConfigurationResponse = function (output, context) {
    return {
        appId: output.appId !== undefined && output.appId !== null ? output.appId : undefined,
        autoLaunch: output.autoLaunch !== undefined && output.autoLaunch !== null ? output.autoLaunch : undefined,
        roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        serverGroupLaunchConfigurations: output.serverGroupLaunchConfigurations !== undefined && output.serverGroupLaunchConfigurations !== null
            ? deserializeAws_json1_1ServerGroupLaunchConfigurations(output.serverGroupLaunchConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetAppReplicationConfigurationResponse = function (output, context) {
    return {
        serverGroupReplicationConfigurations: output.serverGroupReplicationConfigurations !== undefined && output.serverGroupReplicationConfigurations !== null
            ? deserializeAws_json1_1ServerGroupReplicationConfigurations(output.serverGroupReplicationConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetAppResponse = function (output, context) {
    return {
        appSummary: output.appSummary !== undefined && output.appSummary !== null
            ? deserializeAws_json1_1AppSummary(output.appSummary, context)
            : undefined,
        serverGroups: output.serverGroups !== undefined && output.serverGroups !== null
            ? deserializeAws_json1_1ServerGroups(output.serverGroups, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
var deserializeAws_json1_1GetAppValidationConfigurationResponse = function (output, context) {
    return {
        appValidationConfigurations: output.appValidationConfigurations !== undefined && output.appValidationConfigurations !== null
            ? deserializeAws_json1_1AppValidationConfigurations(output.appValidationConfigurations, context)
            : undefined,
        serverGroupValidationConfigurations: output.serverGroupValidationConfigurations !== undefined && output.serverGroupValidationConfigurations !== null
            ? deserializeAws_json1_1ServerGroupValidationConfigurations(output.serverGroupValidationConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetAppValidationOutputResponse = function (output, context) {
    return {
        validationOutputList: output.validationOutputList !== undefined && output.validationOutputList !== null
            ? deserializeAws_json1_1ValidationOutputList(output.validationOutputList, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetConnectorsResponse = function (output, context) {
    return {
        connectorList: output.connectorList !== undefined && output.connectorList !== null
            ? deserializeAws_json1_1ConnectorList(output.connectorList, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1GetReplicationJobsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        replicationJobList: output.replicationJobList !== undefined && output.replicationJobList !== null
            ? deserializeAws_json1_1ReplicationJobList(output.replicationJobList, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetReplicationRunsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        replicationJob: output.replicationJob !== undefined && output.replicationJob !== null
            ? deserializeAws_json1_1ReplicationJob(output.replicationJob, context)
            : undefined,
        replicationRunList: output.replicationRunList !== undefined && output.replicationRunList !== null
            ? deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetServersResponse = function (output, context) {
    return {
        lastModifiedOn: output.lastModifiedOn !== undefined && output.lastModifiedOn !== null
            ? new Date(Math.round(output.lastModifiedOn * 1000))
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        serverCatalogStatus: output.serverCatalogStatus !== undefined && output.serverCatalogStatus !== null
            ? output.serverCatalogStatus
            : undefined,
        serverList: output.serverList !== undefined && output.serverList !== null
            ? deserializeAws_json1_1ServerList(output.serverList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ImportAppCatalogResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ImportServerCatalogResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1InternalError = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LaunchAppResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1LaunchDetails = function (output, context) {
    return {
        latestLaunchTime: output.latestLaunchTime !== undefined && output.latestLaunchTime !== null
            ? new Date(Math.round(output.latestLaunchTime * 1000))
            : undefined,
        stackId: output.stackId !== undefined && output.stackId !== null ? output.stackId : undefined,
        stackName: output.stackName !== undefined && output.stackName !== null ? output.stackName : undefined,
    };
};
var deserializeAws_json1_1ListAppsResponse = function (output, context) {
    return {
        apps: output.apps !== undefined && output.apps !== null ? deserializeAws_json1_1Apps(output.apps, context) : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1MissingRequiredParameterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NoConnectorsAvailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NotifyAppValidationOutputResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1OperationNotPermittedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PutAppLaunchConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1PutAppReplicationConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1PutAppValidationConfigurationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1ReplicationJob = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        frequency: output.frequency !== undefined && output.frequency !== null ? output.frequency : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        latestAmiId: output.latestAmiId !== undefined && output.latestAmiId !== null ? output.latestAmiId : undefined,
        licenseType: output.licenseType !== undefined && output.licenseType !== null ? output.licenseType : undefined,
        nextReplicationRunStartTime: output.nextReplicationRunStartTime !== undefined && output.nextReplicationRunStartTime !== null
            ? new Date(Math.round(output.nextReplicationRunStartTime * 1000))
            : undefined,
        numberOfRecentAmisToKeep: output.numberOfRecentAmisToKeep !== undefined && output.numberOfRecentAmisToKeep !== null
            ? output.numberOfRecentAmisToKeep
            : undefined,
        replicationJobId: output.replicationJobId !== undefined && output.replicationJobId !== null ? output.replicationJobId : undefined,
        replicationRunList: output.replicationRunList !== undefined && output.replicationRunList !== null
            ? deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context)
            : undefined,
        roleName: output.roleName !== undefined && output.roleName !== null ? output.roleName : undefined,
        runOnce: output.runOnce !== undefined && output.runOnce !== null ? output.runOnce : undefined,
        seedReplicationTime: output.seedReplicationTime !== undefined && output.seedReplicationTime !== null
            ? new Date(Math.round(output.seedReplicationTime * 1000))
            : undefined,
        serverId: output.serverId !== undefined && output.serverId !== null ? output.serverId : undefined,
        serverType: output.serverType !== undefined && output.serverType !== null ? output.serverType : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        vmServer: output.vmServer !== undefined && output.vmServer !== null
            ? deserializeAws_json1_1VmServer(output.vmServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1ReplicationJobAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ReplicationJobList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationJob(entry, context);
    });
};
var deserializeAws_json1_1ReplicationJobNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ReplicationRun = function (output, context) {
    return {
        amiId: output.amiId !== undefined && output.amiId !== null ? output.amiId : undefined,
        completedTime: output.completedTime !== undefined && output.completedTime !== null
            ? new Date(Math.round(output.completedTime * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        replicationRunId: output.replicationRunId !== undefined && output.replicationRunId !== null ? output.replicationRunId : undefined,
        scheduledStartTime: output.scheduledStartTime !== undefined && output.scheduledStartTime !== null
            ? new Date(Math.round(output.scheduledStartTime * 1000))
            : undefined,
        stageDetails: output.stageDetails !== undefined && output.stageDetails !== null
            ? deserializeAws_json1_1ReplicationRunStageDetails(output.stageDetails, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ReplicationRunLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ReplicationRunList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ReplicationRun(entry, context);
    });
};
var deserializeAws_json1_1ReplicationRunStageDetails = function (output, context) {
    return {
        stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
        stageProgress: output.stageProgress !== undefined && output.stageProgress !== null ? output.stageProgress : undefined,
    };
};
var deserializeAws_json1_1S3Location = function (output, context) {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
var deserializeAws_json1_1Server = function (output, context) {
    return {
        replicationJobId: output.replicationJobId !== undefined && output.replicationJobId !== null ? output.replicationJobId : undefined,
        replicationJobTerminated: output.replicationJobTerminated !== undefined && output.replicationJobTerminated !== null
            ? output.replicationJobTerminated
            : undefined,
        serverId: output.serverId !== undefined && output.serverId !== null ? output.serverId : undefined,
        serverType: output.serverType !== undefined && output.serverType !== null ? output.serverType : undefined,
        vmServer: output.vmServer !== undefined && output.vmServer !== null
            ? deserializeAws_json1_1VmServer(output.vmServer, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServerCannotBeReplicatedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ServerGroup = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverList: output.serverList !== undefined && output.serverList !== null
            ? deserializeAws_json1_1ServerList(output.serverList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServerGroupLaunchConfiguration = function (output, context) {
    return {
        launchOrder: output.launchOrder !== undefined && output.launchOrder !== null ? output.launchOrder : undefined,
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverLaunchConfigurations: output.serverLaunchConfigurations !== undefined && output.serverLaunchConfigurations !== null
            ? deserializeAws_json1_1ServerLaunchConfigurations(output.serverLaunchConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServerGroupLaunchConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroupLaunchConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ServerGroupReplicationConfiguration = function (output, context) {
    return {
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverReplicationConfigurations: output.serverReplicationConfigurations !== undefined && output.serverReplicationConfigurations !== null
            ? deserializeAws_json1_1ServerReplicationConfigurations(output.serverReplicationConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServerGroupReplicationConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroupReplicationConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ServerGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroup(entry, context);
    });
};
var deserializeAws_json1_1ServerGroupValidationConfiguration = function (output, context) {
    return {
        serverGroupId: output.serverGroupId !== undefined && output.serverGroupId !== null ? output.serverGroupId : undefined,
        serverValidationConfigurations: output.serverValidationConfigurations !== undefined && output.serverValidationConfigurations !== null
            ? deserializeAws_json1_1ServerValidationConfigurations(output.serverValidationConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServerGroupValidationConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerGroupValidationConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ServerLaunchConfiguration = function (output, context) {
    return {
        associatePublicIpAddress: output.associatePublicIpAddress !== undefined && output.associatePublicIpAddress !== null
            ? output.associatePublicIpAddress
            : undefined,
        configureScript: output.configureScript !== undefined && output.configureScript !== null
            ? deserializeAws_json1_1S3Location(output.configureScript, context)
            : undefined,
        configureScriptType: output.configureScriptType !== undefined && output.configureScriptType !== null
            ? output.configureScriptType
            : undefined,
        ec2KeyName: output.ec2KeyName !== undefined && output.ec2KeyName !== null ? output.ec2KeyName : undefined,
        iamInstanceProfileName: output.iamInstanceProfileName !== undefined && output.iamInstanceProfileName !== null
            ? output.iamInstanceProfileName
            : undefined,
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        logicalId: output.logicalId !== undefined && output.logicalId !== null ? output.logicalId : undefined,
        securityGroup: output.securityGroup !== undefined && output.securityGroup !== null ? output.securityGroup : undefined,
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
        subnet: output.subnet !== undefined && output.subnet !== null ? output.subnet : undefined,
        userData: output.userData !== undefined && output.userData !== null
            ? deserializeAws_json1_1UserData(output.userData, context)
            : undefined,
        vpc: output.vpc !== undefined && output.vpc !== null ? output.vpc : undefined,
    };
};
var deserializeAws_json1_1ServerLaunchConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerLaunchConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ServerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Server(entry, context);
    });
};
var deserializeAws_json1_1ServerReplicationConfiguration = function (output, context) {
    return {
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
        serverReplicationParameters: output.serverReplicationParameters !== undefined && output.serverReplicationParameters !== null
            ? deserializeAws_json1_1ServerReplicationParameters(output.serverReplicationParameters, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServerReplicationConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerReplicationConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ServerReplicationParameters = function (output, context) {
    return {
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        frequency: output.frequency !== undefined && output.frequency !== null ? output.frequency : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        licenseType: output.licenseType !== undefined && output.licenseType !== null ? output.licenseType : undefined,
        numberOfRecentAmisToKeep: output.numberOfRecentAmisToKeep !== undefined && output.numberOfRecentAmisToKeep !== null
            ? output.numberOfRecentAmisToKeep
            : undefined,
        runOnce: output.runOnce !== undefined && output.runOnce !== null ? output.runOnce : undefined,
        seedTime: output.seedTime !== undefined && output.seedTime !== null
            ? new Date(Math.round(output.seedTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1ServerValidationConfiguration = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
        serverValidationStrategy: output.serverValidationStrategy !== undefined && output.serverValidationStrategy !== null
            ? output.serverValidationStrategy
            : undefined,
        userDataValidationParameters: output.userDataValidationParameters !== undefined && output.userDataValidationParameters !== null
            ? deserializeAws_json1_1UserDataValidationParameters(output.userDataValidationParameters, context)
            : undefined,
        validationId: output.validationId !== undefined && output.validationId !== null ? output.validationId : undefined,
    };
};
var deserializeAws_json1_1ServerValidationConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerValidationConfiguration(entry, context);
    });
};
var deserializeAws_json1_1ServerValidationOutput = function (output, context) {
    return {
        server: output.server !== undefined && output.server !== null
            ? deserializeAws_json1_1Server(output.server, context)
            : undefined,
    };
};
var deserializeAws_json1_1Source = function (output, context) {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
var deserializeAws_json1_1SSMOutput = function (output, context) {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
var deserializeAws_json1_1SSMValidationParameters = function (output, context) {
    return {
        command: output.command !== undefined && output.command !== null ? output.command : undefined,
        executionTimeoutSeconds: output.executionTimeoutSeconds !== undefined && output.executionTimeoutSeconds !== null
            ? output.executionTimeoutSeconds
            : undefined,
        instanceId: output.instanceId !== undefined && output.instanceId !== null ? output.instanceId : undefined,
        outputS3BucketName: output.outputS3BucketName !== undefined && output.outputS3BucketName !== null
            ? output.outputS3BucketName
            : undefined,
        scriptType: output.scriptType !== undefined && output.scriptType !== null ? output.scriptType : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1Source(output.source, context)
            : undefined,
    };
};
var deserializeAws_json1_1StartAppReplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1StartOnDemandAppReplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1StartOnDemandReplicationRunResponse = function (output, context) {
    return {
        replicationRunId: output.replicationRunId !== undefined && output.replicationRunId !== null ? output.replicationRunId : undefined,
    };
};
var deserializeAws_json1_1StopAppReplicationResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TemporarilyUnavailableException = function (output, context) {
    return {};
};
var deserializeAws_json1_1TerminateAppResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UnauthorizedOperationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UpdateAppResponse = function (output, context) {
    return {
        appSummary: output.appSummary !== undefined && output.appSummary !== null
            ? deserializeAws_json1_1AppSummary(output.appSummary, context)
            : undefined,
        serverGroups: output.serverGroups !== undefined && output.serverGroups !== null
            ? deserializeAws_json1_1ServerGroups(output.serverGroups, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
var deserializeAws_json1_1UpdateReplicationJobResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UserData = function (output, context) {
    return {
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
    };
};
var deserializeAws_json1_1UserDataValidationParameters = function (output, context) {
    return {
        scriptType: output.scriptType !== undefined && output.scriptType !== null ? output.scriptType : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_json1_1Source(output.source, context)
            : undefined,
    };
};
var deserializeAws_json1_1ValidationOutput = function (output, context) {
    return {
        appValidationOutput: output.appValidationOutput !== undefined && output.appValidationOutput !== null
            ? deserializeAws_json1_1AppValidationOutput(output.appValidationOutput, context)
            : undefined,
        latestValidationTime: output.latestValidationTime !== undefined && output.latestValidationTime !== null
            ? new Date(Math.round(output.latestValidationTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        serverValidationOutput: output.serverValidationOutput !== undefined && output.serverValidationOutput !== null
            ? deserializeAws_json1_1ServerValidationOutput(output.serverValidationOutput, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        validationId: output.validationId !== undefined && output.validationId !== null ? output.validationId : undefined,
    };
};
var deserializeAws_json1_1ValidationOutputList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationOutput(entry, context);
    });
};
var deserializeAws_json1_1VmServer = function (output, context) {
    return {
        vmManagerName: output.vmManagerName !== undefined && output.vmManagerName !== null ? output.vmManagerName : undefined,
        vmManagerType: output.vmManagerType !== undefined && output.vmManagerType !== null ? output.vmManagerType : undefined,
        vmName: output.vmName !== undefined && output.vmName !== null ? output.vmName : undefined,
        vmPath: output.vmPath !== undefined && output.vmPath !== null ? output.vmPath : undefined,
        vmServerAddress: output.vmServerAddress !== undefined && output.vmServerAddress !== null
            ? deserializeAws_json1_1VmServerAddress(output.vmServerAddress, context)
            : undefined,
    };
};
var deserializeAws_json1_1VmServerAddress = function (output, context) {
    return {
        vmId: output.vmId !== undefined && output.vmId !== null ? output.vmId : undefined,
        vmManagerId: output.vmManagerId !== undefined && output.vmManagerId !== null ? output.vmManagerId : undefined,
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