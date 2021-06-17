import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAbortEnvironmentUpdateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAbortEnvironmentUpdateMessage(input, context)), { Action: "AbortEnvironmentUpdate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryApplyEnvironmentManagedActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryApplyEnvironmentManagedActionRequest(input, context)), { Action: "ApplyEnvironmentManagedAction", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAssociateEnvironmentOperationsRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAssociateEnvironmentOperationsRoleMessage(input, context)), { Action: "AssociateEnvironmentOperationsRole", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCheckDNSAvailabilityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCheckDNSAvailabilityMessage(input, context)), { Action: "CheckDNSAvailability", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryComposeEnvironmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryComposeEnvironmentsMessage(input, context)), { Action: "ComposeEnvironments", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateApplicationMessage(input, context)), { Action: "CreateApplication", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateApplicationVersionMessage(input, context)), { Action: "CreateApplicationVersion", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateConfigurationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateConfigurationTemplateMessage(input, context)), { Action: "CreateConfigurationTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateEnvironmentMessage(input, context)), { Action: "CreateEnvironment", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreatePlatformVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreatePlatformVersionRequest(input, context)), { Action: "CreatePlatformVersion", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateStorageLocationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "CreateStorageLocation",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteApplicationMessage(input, context)), { Action: "DeleteApplication", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteApplicationVersionMessage(input, context)), { Action: "DeleteApplicationVersion", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteConfigurationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteConfigurationTemplateMessage(input, context)), { Action: "DeleteConfigurationTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteEnvironmentConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteEnvironmentConfigurationMessage(input, context)), { Action: "DeleteEnvironmentConfiguration", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeletePlatformVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeletePlatformVersionRequest(input, context)), { Action: "DeletePlatformVersion", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeAccountAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "DescribeAccountAttributes",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeApplicationsMessage(input, context)), { Action: "DescribeApplications", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeApplicationVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeApplicationVersionsMessage(input, context)), { Action: "DescribeApplicationVersions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeConfigurationOptionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeConfigurationOptionsMessage(input, context)), { Action: "DescribeConfigurationOptions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeConfigurationSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeConfigurationSettingsMessage(input, context)), { Action: "DescribeConfigurationSettings", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEnvironmentHealthCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEnvironmentHealthRequest(input, context)), { Action: "DescribeEnvironmentHealth", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest(input, context)), { Action: "DescribeEnvironmentManagedActionHistory", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEnvironmentManagedActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEnvironmentManagedActionsRequest(input, context)), { Action: "DescribeEnvironmentManagedActions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEnvironmentResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEnvironmentResourcesMessage(input, context)), { Action: "DescribeEnvironmentResources", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEnvironmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEnvironmentsMessage(input, context)), { Action: "DescribeEnvironments", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventsMessage(input, context)), { Action: "DescribeEvents", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeInstancesHealthCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeInstancesHealthRequest(input, context)), { Action: "DescribeInstancesHealth", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribePlatformVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribePlatformVersionRequest(input, context)), { Action: "DescribePlatformVersion", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisassociateEnvironmentOperationsRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDisassociateEnvironmentOperationsRoleMessage(input, context)), { Action: "DisassociateEnvironmentOperationsRole", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAvailableSolutionStacksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString({
            Action: "ListAvailableSolutionStacks",
            Version: "2010-12-01",
        });
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListPlatformBranchesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListPlatformBranchesRequest(input, context)), { Action: "ListPlatformBranches", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListPlatformVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListPlatformVersionsRequest(input, context)), { Action: "ListPlatformVersions", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListTagsForResourceMessage(input, context)), { Action: "ListTagsForResource", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRebuildEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRebuildEnvironmentMessage(input, context)), { Action: "RebuildEnvironment", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRequestEnvironmentInfoCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRequestEnvironmentInfoMessage(input, context)), { Action: "RequestEnvironmentInfo", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRestartAppServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRestartAppServerMessage(input, context)), { Action: "RestartAppServer", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRetrieveEnvironmentInfoCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRetrieveEnvironmentInfoMessage(input, context)), { Action: "RetrieveEnvironmentInfo", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_querySwapEnvironmentCNAMEsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_querySwapEnvironmentCNAMEsMessage(input, context)), { Action: "SwapEnvironmentCNAMEs", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTerminateEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTerminateEnvironmentMessage(input, context)), { Action: "TerminateEnvironment", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateApplicationMessage(input, context)), { Action: "UpdateApplication", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateApplicationResourceLifecycleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateApplicationResourceLifecycleMessage(input, context)), { Action: "UpdateApplicationResourceLifecycle", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateApplicationVersionMessage(input, context)), { Action: "UpdateApplicationVersion", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateConfigurationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateConfigurationTemplateMessage(input, context)), { Action: "UpdateConfigurationTemplate", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateEnvironmentMessage(input, context)), { Action: "UpdateEnvironment", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryUpdateTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryUpdateTagsForResourceMessage(input, context)), { Action: "UpdateTagsForResource", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryValidateConfigurationSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryValidateConfigurationSettingsMessage(input, context)), { Action: "ValidateConfigurationSettings", Version: "2010-12-01" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAbortEnvironmentUpdateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAbortEnvironmentUpdateCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAbortEnvironmentUpdateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryApplyEnvironmentManagedActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryApplyEnvironmentManagedActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplyEnvironmentManagedActionResult(data.ApplyEnvironmentManagedActionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryApplyEnvironmentManagedActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "ManagedActionInvalidStateException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#ManagedActionInvalidStateException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryManagedActionInvalidStateExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAssociateEnvironmentOperationsRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAssociateEnvironmentOperationsRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCheckDNSAvailabilityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCheckDNSAvailabilityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCheckDNSAvailabilityResultMessage(data.CheckDNSAvailabilityResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCheckDNSAvailabilityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryComposeEnvironmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryComposeEnvironmentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.ComposeEnvironmentsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryComposeEnvironmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "TooManyEnvironmentsException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationDescriptionMessage(data.CreateApplicationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "TooManyApplicationsException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateApplicationVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.CreateApplicationVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeBuildNotInServiceRegionException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#CodeBuildNotInServiceRegionException": return [3 /*break*/, 2];
                    case "InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "S3LocationNotInServiceRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException": return [3 /*break*/, 6];
                    case "TooManyApplicationsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticbeanstalk#TooManyApplicationsException": return [3 /*break*/, 8];
                    case "TooManyApplicationVersionsException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticbeanstalk#TooManyApplicationVersionsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyApplicationsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyApplicationVersionsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateConfigurationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateConfigurationTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryConfigurationSettingsDescription(data.CreateConfigurationTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateConfigurationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "TooManyBucketsException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 4];
                    case "TooManyConfigurationTemplatesException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#TooManyConfigurationTemplatesException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateEnvironmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnvironmentDescription(data.CreateEnvironmentResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "TooManyEnvironmentsException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#TooManyEnvironmentsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyEnvironmentsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreatePlatformVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreatePlatformVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreatePlatformVersionResult(data.CreatePlatformVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreatePlatformVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "TooManyPlatformsException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#TooManyPlatformsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyPlatformsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateStorageLocationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateStorageLocationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateStorageLocationResultMessage(data.CreateStorageLocationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateStorageLocationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "S3SubscriptionRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#S3SubscriptionRequiredException": return [3 /*break*/, 4];
                    case "TooManyBucketsException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryS3SubscriptionRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "OperationInProgressException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#OperationInProgressException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteApplicationVersionCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "OperationInProgressException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#OperationInProgressException": return [3 /*break*/, 4];
                    case "S3LocationNotInServiceRegionException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#S3LocationNotInServiceRegionException": return [3 /*break*/, 6];
                    case "SourceBundleDeletionException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticbeanstalk#SourceBundleDeletionException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySourceBundleDeletionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteConfigurationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteConfigurationTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteConfigurationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "OperationInProgressException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#OperationInProgressException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteEnvironmentConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteEnvironmentConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteEnvironmentConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeletePlatformVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeletePlatformVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeletePlatformVersionResult(data.DeletePlatformVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeletePlatformVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "OperationInProgressException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#OperationInProgressException": return [3 /*break*/, 6];
                    case "PlatformVersionStillReferencedException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticbeanstalk#PlatformVersionStillReferencedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryPlatformVersionStillReferencedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeAccountAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeAccountAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeAccountAttributesResult(data.DescribeAccountAttributesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeAccountAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeApplicationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationDescriptionsMessage(data.DescribeApplicationsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeApplicationVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeApplicationVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationVersionDescriptionsMessage(data.DescribeApplicationVersionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeApplicationVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeConfigurationOptionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeConfigurationOptionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryConfigurationOptionsDescription(data.DescribeConfigurationOptionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeConfigurationOptionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "TooManyBucketsException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeConfigurationSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeConfigurationSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryConfigurationSettingsDescriptions(data.DescribeConfigurationSettingsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeConfigurationSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "TooManyBucketsException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEnvironmentHealthCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEnvironmentHealthCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeEnvironmentHealthResult(data.DescribeEnvironmentHealthResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEnvironmentHealthCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult(data.DescribeEnvironmentManagedActionHistoryResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEnvironmentManagedActionHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEnvironmentManagedActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEnvironmentManagedActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeEnvironmentManagedActionsResult(data.DescribeEnvironmentManagedActionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEnvironmentManagedActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEnvironmentResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEnvironmentResourcesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnvironmentResourceDescriptionsMessage(data.DescribeEnvironmentResourcesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEnvironmentResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEnvironmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEnvironmentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnvironmentDescriptionsMessage(data.DescribeEnvironmentsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEnvironmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEventDescriptionsMessage(data.DescribeEventsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribeInstancesHealthCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeInstancesHealthCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeInstancesHealthResult(data.DescribeInstancesHealthResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeInstancesHealthCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDescribePlatformVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribePlatformVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribePlatformVersionResult(data.DescribePlatformVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribePlatformVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisassociateEnvironmentOperationsRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAvailableSolutionStacksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAvailableSolutionStacksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListAvailableSolutionStacksResultMessage(data.ListAvailableSolutionStacksResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAvailableSolutionStacksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListPlatformBranchesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListPlatformBranchesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListPlatformBranchesResult(data.ListPlatformBranchesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListPlatformBranchesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListPlatformVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListPlatformVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryListPlatformVersionsResult(data.ListPlatformVersionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListPlatformVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#ElasticBeanstalkServiceException": return [3 /*break*/, 2];
                    case "InsufficientPrivilegesException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryElasticBeanstalkServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryResourceTagsDescriptionMessage(data.ListTagsForResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ResourceTypeNotSupportedException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRebuildEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRebuildEnvironmentCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRebuildEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRequestEnvironmentInfoCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRequestEnvironmentInfoCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRequestEnvironmentInfoCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRestartAppServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRestartAppServerCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRestartAppServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryRetrieveEnvironmentInfoCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRetrieveEnvironmentInfoCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRetrieveEnvironmentInfoResultMessage(data.RetrieveEnvironmentInfoResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRetrieveEnvironmentInfoCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_querySwapEnvironmentCNAMEsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_querySwapEnvironmentCNAMEsCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_querySwapEnvironmentCNAMEsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryTerminateEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTerminateEnvironmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnvironmentDescription(data.TerminateEnvironmentResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryTerminateEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationDescriptionMessage(data.UpdateApplicationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateApplicationResourceLifecycleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateApplicationResourceLifecycleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationResourceLifecycleDescriptionMessage(data.UpdateApplicationResourceLifecycleResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateApplicationResourceLifecycleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateApplicationVersionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryApplicationVersionDescriptionMessage(data.UpdateApplicationVersionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                        response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateConfigurationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateConfigurationTemplateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryConfigurationSettingsDescription(data.UpdateConfigurationTemplateResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateConfigurationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "TooManyBucketsException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateEnvironmentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryEnvironmentDescription(data.UpdateEnvironmentResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "TooManyBucketsException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryUpdateTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryUpdateTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryUpdateTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "OperationInProgressException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#OperationInProgressException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticbeanstalk#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ResourceTypeNotSupportedException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticbeanstalk#ResourceTypeNotSupportedException": return [3 /*break*/, 8];
                    case "TooManyTagsException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticbeanstalk#TooManyTagsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryOperationInProgressExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryResourceTypeNotSupportedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyTagsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryValidateConfigurationSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryValidateConfigurationSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryConfigurationSettingsValidationMessages(data.ValidateConfigurationSettingsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryValidateConfigurationSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticbeanstalk#InsufficientPrivilegesException": return [3 /*break*/, 2];
                    case "TooManyBucketsException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticbeanstalk#TooManyBucketsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientPrivilegesExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryTooManyBucketsExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryCodeBuildNotInServiceRegionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCodeBuildNotInServiceRegionException(body.Error, context);
        contents = __assign({ name: "CodeBuildNotInServiceRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryElasticBeanstalkServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryElasticBeanstalkServiceException(body.Error, context);
        contents = __assign({ name: "ElasticBeanstalkServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientPrivilegesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientPrivilegesException(body.Error, context);
        contents = __assign({ name: "InsufficientPrivilegesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidRequestException(body.Error, context);
        contents = __assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryManagedActionInvalidStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryManagedActionInvalidStateException(body.Error, context);
        contents = __assign({ name: "ManagedActionInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryOperationInProgressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryOperationInProgressException(body.Error, context);
        contents = __assign({ name: "OperationInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPlatformVersionStillReferencedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPlatformVersionStillReferencedException(body.Error, context);
        contents = __assign({ name: "PlatformVersionStillReferencedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryResourceTypeNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryResourceTypeNotSupportedException(body.Error, context);
        contents = __assign({ name: "ResourceTypeNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryS3LocationNotInServiceRegionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryS3LocationNotInServiceRegionException(body.Error, context);
        contents = __assign({ name: "S3LocationNotInServiceRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryS3SubscriptionRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryS3SubscriptionRequiredException(body.Error, context);
        contents = __assign({ name: "S3SubscriptionRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySourceBundleDeletionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySourceBundleDeletionException(body.Error, context);
        contents = __assign({ name: "SourceBundleDeletionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyApplicationsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyApplicationsException(body.Error, context);
        contents = __assign({ name: "TooManyApplicationsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyApplicationVersionsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyApplicationVersionsException(body.Error, context);
        contents = __assign({ name: "TooManyApplicationVersionsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyBucketsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyBucketsException(body.Error, context);
        contents = __assign({ name: "TooManyBucketsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyConfigurationTemplatesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyConfigurationTemplatesException(body.Error, context);
        contents = __assign({ name: "TooManyConfigurationTemplatesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyEnvironmentsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyEnvironmentsException(body.Error, context);
        contents = __assign({ name: "TooManyEnvironmentsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyPlatformsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyPlatformsException(body.Error, context);
        contents = __assign({ name: "TooManyPlatformsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTooManyTagsException(body.Error, context);
        contents = __assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAbortEnvironmentUpdateMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryApplicationNamesList = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryApplicationResourceLifecycleConfig = function (input, context) {
    var entries = {};
    if (input.ServiceRole !== undefined && input.ServiceRole !== null) {
        entries["ServiceRole"] = input.ServiceRole;
    }
    if (input.VersionLifecycleConfig !== undefined && input.VersionLifecycleConfig !== null) {
        var memberEntries = serializeAws_queryApplicationVersionLifecycleConfig(input.VersionLifecycleConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VersionLifecycleConfig." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryApplicationVersionLifecycleConfig = function (input, context) {
    var entries = {};
    if (input.MaxCountRule !== undefined && input.MaxCountRule !== null) {
        var memberEntries = serializeAws_queryMaxCountRule(input.MaxCountRule, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MaxCountRule." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxAgeRule !== undefined && input.MaxAgeRule !== null) {
        var memberEntries = serializeAws_queryMaxAgeRule(input.MaxAgeRule, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "MaxAgeRule." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryApplyEnvironmentManagedActionRequest = function (input, context) {
    var entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.ActionId !== undefined && input.ActionId !== null) {
        entries["ActionId"] = input.ActionId;
    }
    return entries;
};
var serializeAws_queryAssociateEnvironmentOperationsRoleMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OperationsRole !== undefined && input.OperationsRole !== null) {
        entries["OperationsRole"] = input.OperationsRole;
    }
    return entries;
};
var serializeAws_queryBuildConfiguration = function (input, context) {
    var entries = {};
    if (input.ArtifactName !== undefined && input.ArtifactName !== null) {
        entries["ArtifactName"] = input.ArtifactName;
    }
    if (input.CodeBuildServiceRole !== undefined && input.CodeBuildServiceRole !== null) {
        entries["CodeBuildServiceRole"] = input.CodeBuildServiceRole;
    }
    if (input.ComputeType !== undefined && input.ComputeType !== null) {
        entries["ComputeType"] = input.ComputeType;
    }
    if (input.Image !== undefined && input.Image !== null) {
        entries["Image"] = input.Image;
    }
    if (input.TimeoutInMinutes !== undefined && input.TimeoutInMinutes !== null) {
        entries["TimeoutInMinutes"] = input.TimeoutInMinutes;
    }
    return entries;
};
var serializeAws_queryCheckDNSAvailabilityMessage = function (input, context) {
    var entries = {};
    if (input.CNAMEPrefix !== undefined && input.CNAMEPrefix !== null) {
        entries["CNAMEPrefix"] = input.CNAMEPrefix;
    }
    return entries;
};
var serializeAws_queryComposeEnvironmentsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.VersionLabels !== undefined && input.VersionLabels !== null) {
        var memberEntries = serializeAws_queryVersionLabels(input.VersionLabels, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VersionLabels." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryConfigurationOptionSetting = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OptionName !== undefined && input.OptionName !== null) {
        entries["OptionName"] = input.OptionName;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryConfigurationOptionSettingsList = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryConfigurationOptionSetting(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_queryCreateApplicationMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.ResourceLifecycleConfig !== undefined && input.ResourceLifecycleConfig !== null) {
        var memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceLifecycleConfig." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateApplicationVersionMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.SourceBuildInformation !== undefined && input.SourceBuildInformation !== null) {
        var memberEntries = serializeAws_querySourceBuildInformation(input.SourceBuildInformation, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceBuildInformation." + key;
            entries[loc] = value;
        });
    }
    if (input.SourceBundle !== undefined && input.SourceBundle !== null) {
        var memberEntries = serializeAws_queryS3Location(input.SourceBundle, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceBundle." + key;
            entries[loc] = value;
        });
    }
    if (input.BuildConfiguration !== undefined && input.BuildConfiguration !== null) {
        var memberEntries = serializeAws_queryBuildConfiguration(input.BuildConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "BuildConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.AutoCreateApplication !== undefined && input.AutoCreateApplication !== null) {
        entries["AutoCreateApplication"] = input.AutoCreateApplication;
    }
    if (input.Process !== undefined && input.Process !== null) {
        entries["Process"] = input.Process;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateConfigurationTemplateMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.SourceConfiguration !== undefined && input.SourceConfiguration !== null) {
        var memberEntries = serializeAws_querySourceConfiguration(input.SourceConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SourceConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        var memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionSettings." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateEnvironmentMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.CNAMEPrefix !== undefined && input.CNAMEPrefix !== null) {
        entries["CNAMEPrefix"] = input.CNAMEPrefix;
    }
    if (input.Tier !== undefined && input.Tier !== null) {
        var memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tier." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        var memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionSettings." + key;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        var memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionsToRemove." + key;
            entries[loc] = value;
        });
    }
    if (input.OperationsRole !== undefined && input.OperationsRole !== null) {
        entries["OperationsRole"] = input.OperationsRole;
    }
    return entries;
};
var serializeAws_queryCreatePlatformVersionRequest = function (input, context) {
    var entries = {};
    if (input.PlatformName !== undefined && input.PlatformName !== null) {
        entries["PlatformName"] = input.PlatformName;
    }
    if (input.PlatformVersion !== undefined && input.PlatformVersion !== null) {
        entries["PlatformVersion"] = input.PlatformVersion;
    }
    if (input.PlatformDefinitionBundle !== undefined && input.PlatformDefinitionBundle !== null) {
        var memberEntries = serializeAws_queryS3Location(input.PlatformDefinitionBundle, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PlatformDefinitionBundle." + key;
            entries[loc] = value;
        });
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        var memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionSettings." + key;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_queryTags(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDeleteApplicationMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TerminateEnvByForce !== undefined && input.TerminateEnvByForce !== null) {
        entries["TerminateEnvByForce"] = input.TerminateEnvByForce;
    }
    return entries;
};
var serializeAws_queryDeleteApplicationVersionMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.DeleteSourceBundle !== undefined && input.DeleteSourceBundle !== null) {
        entries["DeleteSourceBundle"] = input.DeleteSourceBundle;
    }
    return entries;
};
var serializeAws_queryDeleteConfigurationTemplateMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
var serializeAws_queryDeleteEnvironmentConfigurationMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryDeletePlatformVersionRequest = function (input, context) {
    var entries = {};
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    return entries;
};
var serializeAws_queryDescribeApplicationsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationNames !== undefined && input.ApplicationNames !== null) {
        var memberEntries = serializeAws_queryApplicationNamesList(input.ApplicationNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ApplicationNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeApplicationVersionsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabels !== undefined && input.VersionLabels !== null) {
        var memberEntries = serializeAws_queryVersionLabelsList(input.VersionLabels, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "VersionLabels." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryDescribeConfigurationOptionsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.Options !== undefined && input.Options !== null) {
        var memberEntries = serializeAws_queryOptionsSpecifierList(input.Options, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Options." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeConfigurationSettingsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryDescribeEnvironmentHealthRequest = function (input, context) {
    var entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        var memberEntries = serializeAws_queryEnvironmentHealthAttributes(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AttributeNames." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDescribeEnvironmentManagedActionHistoryRequest = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems !== undefined && input.MaxItems !== null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
var serializeAws_queryDescribeEnvironmentManagedActionsRequest = function (input, context) {
    var entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.Status !== undefined && input.Status !== null) {
        entries["Status"] = input.Status;
    }
    return entries;
};
var serializeAws_queryDescribeEnvironmentResourcesMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryDescribeEnvironmentsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.EnvironmentIds !== undefined && input.EnvironmentIds !== null) {
        var memberEntries = serializeAws_queryEnvironmentIdList(input.EnvironmentIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnvironmentIds." + key;
            entries[loc] = value;
        });
    }
    if (input.EnvironmentNames !== undefined && input.EnvironmentNames !== null) {
        var memberEntries = serializeAws_queryEnvironmentNamesList(input.EnvironmentNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "EnvironmentNames." + key;
            entries[loc] = value;
        });
    }
    if (input.IncludeDeleted !== undefined && input.IncludeDeleted !== null) {
        entries["IncludeDeleted"] = input.IncludeDeleted;
    }
    if (input.IncludedDeletedBackTo !== undefined && input.IncludedDeletedBackTo !== null) {
        entries["IncludedDeletedBackTo"] = input.IncludedDeletedBackTo.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryDescribeEventsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.RequestId !== undefined && input.RequestId !== null) {
        entries["RequestId"] = input.RequestId;
    }
    if (input.Severity !== undefined && input.Severity !== null) {
        entries["Severity"] = input.Severity;
    }
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryDescribeInstancesHealthRequest = function (input, context) {
    var entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        var memberEntries = serializeAws_queryInstancesHealthAttributes(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "AttributeNames." + key;
            entries[loc] = value;
        });
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryDescribePlatformVersionRequest = function (input, context) {
    var entries = {};
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    return entries;
};
var serializeAws_queryDisassociateEnvironmentOperationsRoleMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryEnvironmentHealthAttributes = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var serializeAws_queryEnvironmentIdList = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (input_4_1 && !input_4_1.done && (_a = input_4.return)) _a.call(input_4);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return entries;
};
var serializeAws_queryEnvironmentNamesList = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (input_5_1 && !input_5_1.done && (_a = input_5.return)) _a.call(input_5);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return entries;
};
var serializeAws_queryEnvironmentTier = function (input, context) {
    var entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.Version !== undefined && input.Version !== null) {
        entries["Version"] = input.Version;
    }
    return entries;
};
var serializeAws_queryInstancesHealthAttributes = function (input, context) {
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (input_6_1 && !input_6_1.done && (_a = input_6.return)) _a.call(input_6);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return entries;
};
var serializeAws_queryListPlatformBranchesRequest = function (input, context) {
    var entries = {};
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_querySearchFilters(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryListPlatformVersionsRequest = function (input, context) {
    var entries = {};
    if (input.Filters !== undefined && input.Filters !== null) {
        var memberEntries = serializeAws_queryPlatformFilters(input.Filters, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Filters." + key;
            entries[loc] = value;
        });
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
var serializeAws_queryListTagsForResourceMessage = function (input, context) {
    var entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
var serializeAws_queryMaxAgeRule = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MaxAgeInDays !== undefined && input.MaxAgeInDays !== null) {
        entries["MaxAgeInDays"] = input.MaxAgeInDays;
    }
    if (input.DeleteSourceFromS3 !== undefined && input.DeleteSourceFromS3 !== null) {
        entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
    }
    return entries;
};
var serializeAws_queryMaxCountRule = function (input, context) {
    var entries = {};
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MaxCount !== undefined && input.MaxCount !== null) {
        entries["MaxCount"] = input.MaxCount;
    }
    if (input.DeleteSourceFromS3 !== undefined && input.DeleteSourceFromS3 !== null) {
        entries["DeleteSourceFromS3"] = input.DeleteSourceFromS3;
    }
    return entries;
};
var serializeAws_queryOptionSpecification = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Namespace !== undefined && input.Namespace !== null) {
        entries["Namespace"] = input.Namespace;
    }
    if (input.OptionName !== undefined && input.OptionName !== null) {
        entries["OptionName"] = input.OptionName;
    }
    return entries;
};
var serializeAws_queryOptionsSpecifierList = function (input, context) {
    var e_7, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_7 = __values(input), input_7_1 = input_7.next(); !input_7_1.done; input_7_1 = input_7.next()) {
            var entry = input_7_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryOptionSpecification(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (input_7_1 && !input_7_1.done && (_a = input_7.return)) _a.call(input_7);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return entries;
};
var serializeAws_queryPlatformFilter = function (input, context) {
    var entries = {};
    if (input.Type !== undefined && input.Type !== null) {
        entries["Type"] = input.Type;
    }
    if (input.Operator !== undefined && input.Operator !== null) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_queryPlatformFilterValueList(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryPlatformFilters = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryPlatformFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (input_8_1 && !input_8_1.done && (_a = input_8.return)) _a.call(input_8);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return entries;
};
var serializeAws_queryPlatformFilterValueList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (input_9_1 && !input_9_1.done && (_a = input_9.return)) _a.call(input_9);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return entries;
};
var serializeAws_queryRebuildEnvironmentMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryRequestEnvironmentInfoMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.InfoType !== undefined && input.InfoType !== null) {
        entries["InfoType"] = input.InfoType;
    }
    return entries;
};
var serializeAws_queryRestartAppServerMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    return entries;
};
var serializeAws_queryRetrieveEnvironmentInfoMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.InfoType !== undefined && input.InfoType !== null) {
        entries["InfoType"] = input.InfoType;
    }
    return entries;
};
var serializeAws_queryS3Location = function (input, context) {
    var entries = {};
    if (input.S3Bucket !== undefined && input.S3Bucket !== null) {
        entries["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3Key !== undefined && input.S3Key !== null) {
        entries["S3Key"] = input.S3Key;
    }
    return entries;
};
var serializeAws_querySearchFilter = function (input, context) {
    var entries = {};
    if (input.Attribute !== undefined && input.Attribute !== null) {
        entries["Attribute"] = input.Attribute;
    }
    if (input.Operator !== undefined && input.Operator !== null) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined && input.Values !== null) {
        var memberEntries = serializeAws_querySearchFilterValues(input.Values, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Values." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySearchFilters = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_querySearchFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (input_10_1 && !input_10_1.done && (_a = input_10.return)) _a.call(input_10);
        }
        finally { if (e_10) throw e_10.error; }
    }
    return entries;
};
var serializeAws_querySearchFilterValues = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (input_11_1 && !input_11_1.done && (_a = input_11.return)) _a.call(input_11);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return entries;
};
var serializeAws_querySourceBuildInformation = function (input, context) {
    var entries = {};
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.SourceRepository !== undefined && input.SourceRepository !== null) {
        entries["SourceRepository"] = input.SourceRepository;
    }
    if (input.SourceLocation !== undefined && input.SourceLocation !== null) {
        entries["SourceLocation"] = input.SourceLocation;
    }
    return entries;
};
var serializeAws_querySourceConfiguration = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
var serializeAws_querySwapEnvironmentCNAMEsMessage = function (input, context) {
    var entries = {};
    if (input.SourceEnvironmentId !== undefined && input.SourceEnvironmentId !== null) {
        entries["SourceEnvironmentId"] = input.SourceEnvironmentId;
    }
    if (input.SourceEnvironmentName !== undefined && input.SourceEnvironmentName !== null) {
        entries["SourceEnvironmentName"] = input.SourceEnvironmentName;
    }
    if (input.DestinationEnvironmentId !== undefined && input.DestinationEnvironmentId !== null) {
        entries["DestinationEnvironmentId"] = input.DestinationEnvironmentId;
    }
    if (input.DestinationEnvironmentName !== undefined && input.DestinationEnvironmentName !== null) {
        entries["DestinationEnvironmentName"] = input.DestinationEnvironmentName;
    }
    return entries;
};
var serializeAws_queryTag = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_queryTagKeyList = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_12_1) { e_12 = { error: e_12_1 }; }
    finally {
        try {
            if (input_12_1 && !input_12_1.done && (_a = input_12.return)) _a.call(input_12);
        }
        finally { if (e_12) throw e_12.error; }
    }
    return entries;
};
var serializeAws_queryTagList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (input_13_1 && !input_13_1.done && (_a = input_13.return)) _a.call(input_13);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return entries;
};
var serializeAws_queryTags = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_14_1) { e_14 = { error: e_14_1 }; }
    finally {
        try {
            if (input_14_1 && !input_14_1.done && (_a = input_14.return)) _a.call(input_14);
        }
        finally { if (e_14) throw e_14.error; }
    }
    return entries;
};
var serializeAws_queryTerminateEnvironmentMessage = function (input, context) {
    var entries = {};
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.TerminateResources !== undefined && input.TerminateResources !== null) {
        entries["TerminateResources"] = input.TerminateResources;
    }
    if (input.ForceTerminate !== undefined && input.ForceTerminate !== null) {
        entries["ForceTerminate"] = input.ForceTerminate;
    }
    return entries;
};
var serializeAws_queryUpdateApplicationMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    return entries;
};
var serializeAws_queryUpdateApplicationResourceLifecycleMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.ResourceLifecycleConfig !== undefined && input.ResourceLifecycleConfig !== null) {
        var memberEntries = serializeAws_queryApplicationResourceLifecycleConfig(input.ResourceLifecycleConfig, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ResourceLifecycleConfig." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateApplicationVersionMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    return entries;
};
var serializeAws_queryUpdateConfigurationTemplateMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        var memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionSettings." + key;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        var memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionsToRemove." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateEnvironmentMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.EnvironmentId !== undefined && input.EnvironmentId !== null) {
        entries["EnvironmentId"] = input.EnvironmentId;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.GroupName !== undefined && input.GroupName !== null) {
        entries["GroupName"] = input.GroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Tier !== undefined && input.Tier !== null) {
        var memberEntries = serializeAws_queryEnvironmentTier(input.Tier, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tier." + key;
            entries[loc] = value;
        });
    }
    if (input.VersionLabel !== undefined && input.VersionLabel !== null) {
        entries["VersionLabel"] = input.VersionLabel;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SolutionStackName !== undefined && input.SolutionStackName !== null) {
        entries["SolutionStackName"] = input.SolutionStackName;
    }
    if (input.PlatformArn !== undefined && input.PlatformArn !== null) {
        entries["PlatformArn"] = input.PlatformArn;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        var memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionSettings." + key;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        var memberEntries = serializeAws_queryOptionsSpecifierList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionsToRemove." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryUpdateTagsForResourceMessage = function (input, context) {
    var entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagsToAdd !== undefined && input.TagsToAdd !== null) {
        var memberEntries = serializeAws_queryTagList(input.TagsToAdd, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagsToAdd." + key;
            entries[loc] = value;
        });
    }
    if (input.TagsToRemove !== undefined && input.TagsToRemove !== null) {
        var memberEntries = serializeAws_queryTagKeyList(input.TagsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TagsToRemove." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryValidateConfigurationSettingsMessage = function (input, context) {
    var entries = {};
    if (input.ApplicationName !== undefined && input.ApplicationName !== null) {
        entries["ApplicationName"] = input.ApplicationName;
    }
    if (input.TemplateName !== undefined && input.TemplateName !== null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.EnvironmentName !== undefined && input.EnvironmentName !== null) {
        entries["EnvironmentName"] = input.EnvironmentName;
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        var memberEntries = serializeAws_queryConfigurationOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "OptionSettings." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryVersionLabels = function (input, context) {
    var e_15, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
            var entry = input_15_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_15_1) { e_15 = { error: e_15_1 }; }
    finally {
        try {
            if (input_15_1 && !input_15_1.done && (_a = input_15.return)) _a.call(input_15);
        }
        finally { if (e_15) throw e_15.error; }
    }
    return entries;
};
var serializeAws_queryVersionLabelsList = function (input, context) {
    var e_16, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
            var entry = input_16_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_16_1) { e_16 = { error: e_16_1 }; }
    finally {
        try {
            if (input_16_1 && !input_16_1.done && (_a = input_16.return)) _a.call(input_16);
        }
        finally { if (e_16) throw e_16.error; }
    }
    return entries;
};
var deserializeAws_queryApplicationDescription = function (output, context) {
    var contents = {
        ApplicationArn: undefined,
        ApplicationName: undefined,
        Description: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Versions: undefined,
        ConfigurationTemplates: undefined,
        ResourceLifecycleConfig: undefined,
    };
    if (output["ApplicationArn"] !== undefined) {
        contents.ApplicationArn = output["ApplicationArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output.Versions === "") {
        contents.Versions = [];
    }
    if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
        contents.Versions = deserializeAws_queryVersionLabelsList(__getArrayIfSingleItem(output["Versions"]["member"]), context);
    }
    if (output.ConfigurationTemplates === "") {
        contents.ConfigurationTemplates = [];
    }
    if (output["ConfigurationTemplates"] !== undefined && output["ConfigurationTemplates"]["member"] !== undefined) {
        contents.ConfigurationTemplates = deserializeAws_queryConfigurationTemplateNamesList(__getArrayIfSingleItem(output["ConfigurationTemplates"]["member"]), context);
    }
    if (output["ResourceLifecycleConfig"] !== undefined) {
        contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(output["ResourceLifecycleConfig"], context);
    }
    return contents;
};
var deserializeAws_queryApplicationDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryApplicationDescription(entry, context);
    });
};
var deserializeAws_queryApplicationDescriptionMessage = function (output, context) {
    var contents = {
        Application: undefined,
    };
    if (output["Application"] !== undefined) {
        contents.Application = deserializeAws_queryApplicationDescription(output["Application"], context);
    }
    return contents;
};
var deserializeAws_queryApplicationDescriptionsMessage = function (output, context) {
    var contents = {
        Applications: undefined,
    };
    if (output.Applications === "") {
        contents.Applications = [];
    }
    if (output["Applications"] !== undefined && output["Applications"]["member"] !== undefined) {
        contents.Applications = deserializeAws_queryApplicationDescriptionList(__getArrayIfSingleItem(output["Applications"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryApplicationMetrics = function (output, context) {
    var contents = {
        Duration: undefined,
        RequestCount: undefined,
        StatusCodes: undefined,
        Latency: undefined,
    };
    if (output["Duration"] !== undefined) {
        contents.Duration = parseInt(output["Duration"]);
    }
    if (output["RequestCount"] !== undefined) {
        contents.RequestCount = parseInt(output["RequestCount"]);
    }
    if (output["StatusCodes"] !== undefined) {
        contents.StatusCodes = deserializeAws_queryStatusCodes(output["StatusCodes"], context);
    }
    if (output["Latency"] !== undefined) {
        contents.Latency = deserializeAws_queryLatency(output["Latency"], context);
    }
    return contents;
};
var deserializeAws_queryApplicationResourceLifecycleConfig = function (output, context) {
    var contents = {
        ServiceRole: undefined,
        VersionLifecycleConfig: undefined,
    };
    if (output["ServiceRole"] !== undefined) {
        contents.ServiceRole = output["ServiceRole"];
    }
    if (output["VersionLifecycleConfig"] !== undefined) {
        contents.VersionLifecycleConfig = deserializeAws_queryApplicationVersionLifecycleConfig(output["VersionLifecycleConfig"], context);
    }
    return contents;
};
var deserializeAws_queryApplicationResourceLifecycleDescriptionMessage = function (output, context) {
    var contents = {
        ApplicationName: undefined,
        ResourceLifecycleConfig: undefined,
    };
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["ResourceLifecycleConfig"] !== undefined) {
        contents.ResourceLifecycleConfig = deserializeAws_queryApplicationResourceLifecycleConfig(output["ResourceLifecycleConfig"], context);
    }
    return contents;
};
var deserializeAws_queryApplicationVersionDescription = function (output, context) {
    var contents = {
        ApplicationVersionArn: undefined,
        ApplicationName: undefined,
        Description: undefined,
        VersionLabel: undefined,
        SourceBuildInformation: undefined,
        BuildArn: undefined,
        SourceBundle: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Status: undefined,
    };
    if (output["ApplicationVersionArn"] !== undefined) {
        contents.ApplicationVersionArn = output["ApplicationVersionArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["SourceBuildInformation"] !== undefined) {
        contents.SourceBuildInformation = deserializeAws_querySourceBuildInformation(output["SourceBuildInformation"], context);
    }
    if (output["BuildArn"] !== undefined) {
        contents.BuildArn = output["BuildArn"];
    }
    if (output["SourceBundle"] !== undefined) {
        contents.SourceBundle = deserializeAws_queryS3Location(output["SourceBundle"], context);
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryApplicationVersionDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryApplicationVersionDescription(entry, context);
    });
};
var deserializeAws_queryApplicationVersionDescriptionMessage = function (output, context) {
    var contents = {
        ApplicationVersion: undefined,
    };
    if (output["ApplicationVersion"] !== undefined) {
        contents.ApplicationVersion = deserializeAws_queryApplicationVersionDescription(output["ApplicationVersion"], context);
    }
    return contents;
};
var deserializeAws_queryApplicationVersionDescriptionsMessage = function (output, context) {
    var contents = {
        ApplicationVersions: undefined,
        NextToken: undefined,
    };
    if (output.ApplicationVersions === "") {
        contents.ApplicationVersions = [];
    }
    if (output["ApplicationVersions"] !== undefined && output["ApplicationVersions"]["member"] !== undefined) {
        contents.ApplicationVersions = deserializeAws_queryApplicationVersionDescriptionList(__getArrayIfSingleItem(output["ApplicationVersions"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryApplicationVersionLifecycleConfig = function (output, context) {
    var contents = {
        MaxCountRule: undefined,
        MaxAgeRule: undefined,
    };
    if (output["MaxCountRule"] !== undefined) {
        contents.MaxCountRule = deserializeAws_queryMaxCountRule(output["MaxCountRule"], context);
    }
    if (output["MaxAgeRule"] !== undefined) {
        contents.MaxAgeRule = deserializeAws_queryMaxAgeRule(output["MaxAgeRule"], context);
    }
    return contents;
};
var deserializeAws_queryApplyEnvironmentManagedActionResult = function (output, context) {
    var contents = {
        ActionId: undefined,
        ActionDescription: undefined,
        ActionType: undefined,
        Status: undefined,
    };
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryAutoScalingGroup = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_queryAutoScalingGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAutoScalingGroup(entry, context);
    });
};
var deserializeAws_queryAvailableSolutionStackDetailsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySolutionStackDescription(entry, context);
    });
};
var deserializeAws_queryAvailableSolutionStackNamesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryBuilder = function (output, context) {
    var contents = {
        ARN: undefined,
    };
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryCauses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryCheckDNSAvailabilityResultMessage = function (output, context) {
    var contents = {
        Available: undefined,
        FullyQualifiedCNAME: undefined,
    };
    if (output["Available"] !== undefined) {
        contents.Available = output["Available"] == "true";
    }
    if (output["FullyQualifiedCNAME"] !== undefined) {
        contents.FullyQualifiedCNAME = output["FullyQualifiedCNAME"];
    }
    return contents;
};
var deserializeAws_queryCodeBuildNotInServiceRegionException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryConfigurationOptionDescription = function (output, context) {
    var contents = {
        Namespace: undefined,
        Name: undefined,
        DefaultValue: undefined,
        ChangeSeverity: undefined,
        UserDefined: undefined,
        ValueType: undefined,
        ValueOptions: undefined,
        MinValue: undefined,
        MaxValue: undefined,
        MaxLength: undefined,
        Regex: undefined,
    };
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["ChangeSeverity"] !== undefined) {
        contents.ChangeSeverity = output["ChangeSeverity"];
    }
    if (output["UserDefined"] !== undefined) {
        contents.UserDefined = output["UserDefined"] == "true";
    }
    if (output["ValueType"] !== undefined) {
        contents.ValueType = output["ValueType"];
    }
    if (output.ValueOptions === "") {
        contents.ValueOptions = [];
    }
    if (output["ValueOptions"] !== undefined && output["ValueOptions"]["member"] !== undefined) {
        contents.ValueOptions = deserializeAws_queryConfigurationOptionPossibleValues(__getArrayIfSingleItem(output["ValueOptions"]["member"]), context);
    }
    if (output["MinValue"] !== undefined) {
        contents.MinValue = parseInt(output["MinValue"]);
    }
    if (output["MaxValue"] !== undefined) {
        contents.MaxValue = parseInt(output["MaxValue"]);
    }
    if (output["MaxLength"] !== undefined) {
        contents.MaxLength = parseInt(output["MaxLength"]);
    }
    if (output["Regex"] !== undefined) {
        contents.Regex = deserializeAws_queryOptionRestrictionRegex(output["Regex"], context);
    }
    return contents;
};
var deserializeAws_queryConfigurationOptionDescriptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationOptionDescription(entry, context);
    });
};
var deserializeAws_queryConfigurationOptionPossibleValues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryConfigurationOptionsDescription = function (output, context) {
    var contents = {
        SolutionStackName: undefined,
        PlatformArn: undefined,
        Options: undefined,
    };
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output.Options === "") {
        contents.Options = [];
    }
    if (output["Options"] !== undefined && output["Options"]["member"] !== undefined) {
        contents.Options = deserializeAws_queryConfigurationOptionDescriptionsList(__getArrayIfSingleItem(output["Options"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryConfigurationOptionSetting = function (output, context) {
    var contents = {
        ResourceName: undefined,
        Namespace: undefined,
        OptionName: undefined,
        Value: undefined,
    };
    if (output["ResourceName"] !== undefined) {
        contents.ResourceName = output["ResourceName"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryConfigurationOptionSettingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationOptionSetting(entry, context);
    });
};
var deserializeAws_queryConfigurationSettingsDescription = function (output, context) {
    var contents = {
        SolutionStackName: undefined,
        PlatformArn: undefined,
        ApplicationName: undefined,
        TemplateName: undefined,
        Description: undefined,
        EnvironmentName: undefined,
        DeploymentStatus: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        OptionSettings: undefined,
    };
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["DeploymentStatus"] !== undefined) {
        contents.DeploymentStatus = output["DeploymentStatus"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output.OptionSettings === "") {
        contents.OptionSettings = [];
    }
    if (output["OptionSettings"] !== undefined && output["OptionSettings"]["member"] !== undefined) {
        contents.OptionSettings = deserializeAws_queryConfigurationOptionSettingsList(__getArrayIfSingleItem(output["OptionSettings"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryConfigurationSettingsDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryConfigurationSettingsDescription(entry, context);
    });
};
var deserializeAws_queryConfigurationSettingsDescriptions = function (output, context) {
    var contents = {
        ConfigurationSettings: undefined,
    };
    if (output.ConfigurationSettings === "") {
        contents.ConfigurationSettings = [];
    }
    if (output["ConfigurationSettings"] !== undefined && output["ConfigurationSettings"]["member"] !== undefined) {
        contents.ConfigurationSettings = deserializeAws_queryConfigurationSettingsDescriptionList(__getArrayIfSingleItem(output["ConfigurationSettings"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryConfigurationSettingsValidationMessages = function (output, context) {
    var contents = {
        Messages: undefined,
    };
    if (output.Messages === "") {
        contents.Messages = [];
    }
    if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
        contents.Messages = deserializeAws_queryValidationMessagesList(__getArrayIfSingleItem(output["Messages"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryConfigurationTemplateNamesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryCPUUtilization = function (output, context) {
    var contents = {
        User: undefined,
        Nice: undefined,
        System: undefined,
        Idle: undefined,
        IOWait: undefined,
        IRQ: undefined,
        SoftIRQ: undefined,
        Privileged: undefined,
    };
    if (output["User"] !== undefined) {
        contents.User = parseFloat(output["User"]);
    }
    if (output["Nice"] !== undefined) {
        contents.Nice = parseFloat(output["Nice"]);
    }
    if (output["System"] !== undefined) {
        contents.System = parseFloat(output["System"]);
    }
    if (output["Idle"] !== undefined) {
        contents.Idle = parseFloat(output["Idle"]);
    }
    if (output["IOWait"] !== undefined) {
        contents.IOWait = parseFloat(output["IOWait"]);
    }
    if (output["IRQ"] !== undefined) {
        contents.IRQ = parseFloat(output["IRQ"]);
    }
    if (output["SoftIRQ"] !== undefined) {
        contents.SoftIRQ = parseFloat(output["SoftIRQ"]);
    }
    if (output["Privileged"] !== undefined) {
        contents.Privileged = parseFloat(output["Privileged"]);
    }
    return contents;
};
var deserializeAws_queryCreatePlatformVersionResult = function (output, context) {
    var contents = {
        PlatformSummary: undefined,
        Builder: undefined,
    };
    if (output["PlatformSummary"] !== undefined) {
        contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
    }
    if (output["Builder"] !== undefined) {
        contents.Builder = deserializeAws_queryBuilder(output["Builder"], context);
    }
    return contents;
};
var deserializeAws_queryCreateStorageLocationResultMessage = function (output, context) {
    var contents = {
        S3Bucket: undefined,
    };
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    return contents;
};
var deserializeAws_queryCustomAmi = function (output, context) {
    var contents = {
        VirtualizationType: undefined,
        ImageId: undefined,
    };
    if (output["VirtualizationType"] !== undefined) {
        contents.VirtualizationType = output["VirtualizationType"];
    }
    if (output["ImageId"] !== undefined) {
        contents.ImageId = output["ImageId"];
    }
    return contents;
};
var deserializeAws_queryCustomAmiList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCustomAmi(entry, context);
    });
};
var deserializeAws_queryDeletePlatformVersionResult = function (output, context) {
    var contents = {
        PlatformSummary: undefined,
    };
    if (output["PlatformSummary"] !== undefined) {
        contents.PlatformSummary = deserializeAws_queryPlatformSummary(output["PlatformSummary"], context);
    }
    return contents;
};
var deserializeAws_queryDeployment = function (output, context) {
    var contents = {
        VersionLabel: undefined,
        DeploymentId: undefined,
        Status: undefined,
        DeploymentTime: undefined,
    };
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["DeploymentId"] !== undefined) {
        contents.DeploymentId = parseInt(output["DeploymentId"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["DeploymentTime"] !== undefined) {
        contents.DeploymentTime = new Date(output["DeploymentTime"]);
    }
    return contents;
};
var deserializeAws_queryDescribeAccountAttributesResult = function (output, context) {
    var contents = {
        ResourceQuotas: undefined,
    };
    if (output["ResourceQuotas"] !== undefined) {
        contents.ResourceQuotas = deserializeAws_queryResourceQuotas(output["ResourceQuotas"], context);
    }
    return contents;
};
var deserializeAws_queryDescribeEnvironmentHealthResult = function (output, context) {
    var contents = {
        EnvironmentName: undefined,
        HealthStatus: undefined,
        Status: undefined,
        Color: undefined,
        Causes: undefined,
        ApplicationMetrics: undefined,
        InstancesHealth: undefined,
        RefreshedAt: undefined,
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Color"] !== undefined) {
        contents.Color = output["Color"];
    }
    if (output.Causes === "") {
        contents.Causes = [];
    }
    if (output["Causes"] !== undefined && output["Causes"]["member"] !== undefined) {
        contents.Causes = deserializeAws_queryCauses(__getArrayIfSingleItem(output["Causes"]["member"]), context);
    }
    if (output["ApplicationMetrics"] !== undefined) {
        contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
    }
    if (output["InstancesHealth"] !== undefined) {
        contents.InstancesHealth = deserializeAws_queryInstanceHealthSummary(output["InstancesHealth"], context);
    }
    if (output["RefreshedAt"] !== undefined) {
        contents.RefreshedAt = new Date(output["RefreshedAt"]);
    }
    return contents;
};
var deserializeAws_queryDescribeEnvironmentManagedActionHistoryResult = function (output, context) {
    var contents = {
        ManagedActionHistoryItems: undefined,
        NextToken: undefined,
    };
    if (output.ManagedActionHistoryItems === "") {
        contents.ManagedActionHistoryItems = [];
    }
    if (output["ManagedActionHistoryItems"] !== undefined &&
        output["ManagedActionHistoryItems"]["member"] !== undefined) {
        contents.ManagedActionHistoryItems = deserializeAws_queryManagedActionHistoryItems(__getArrayIfSingleItem(output["ManagedActionHistoryItems"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryDescribeEnvironmentManagedActionsResult = function (output, context) {
    var contents = {
        ManagedActions: undefined,
    };
    if (output.ManagedActions === "") {
        contents.ManagedActions = [];
    }
    if (output["ManagedActions"] !== undefined && output["ManagedActions"]["member"] !== undefined) {
        contents.ManagedActions = deserializeAws_queryManagedActions(__getArrayIfSingleItem(output["ManagedActions"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeInstancesHealthResult = function (output, context) {
    var contents = {
        InstanceHealthList: undefined,
        RefreshedAt: undefined,
        NextToken: undefined,
    };
    if (output.InstanceHealthList === "") {
        contents.InstanceHealthList = [];
    }
    if (output["InstanceHealthList"] !== undefined && output["InstanceHealthList"]["member"] !== undefined) {
        contents.InstanceHealthList = deserializeAws_queryInstanceHealthList(__getArrayIfSingleItem(output["InstanceHealthList"]["member"]), context);
    }
    if (output["RefreshedAt"] !== undefined) {
        contents.RefreshedAt = new Date(output["RefreshedAt"]);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryDescribePlatformVersionResult = function (output, context) {
    var contents = {
        PlatformDescription: undefined,
    };
    if (output["PlatformDescription"] !== undefined) {
        contents.PlatformDescription = deserializeAws_queryPlatformDescription(output["PlatformDescription"], context);
    }
    return contents;
};
var deserializeAws_queryElasticBeanstalkServiceException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEnvironmentDescription = function (output, context) {
    var contents = {
        EnvironmentName: undefined,
        EnvironmentId: undefined,
        ApplicationName: undefined,
        VersionLabel: undefined,
        SolutionStackName: undefined,
        PlatformArn: undefined,
        TemplateName: undefined,
        Description: undefined,
        EndpointURL: undefined,
        CNAME: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        Status: undefined,
        AbortableOperationInProgress: undefined,
        Health: undefined,
        HealthStatus: undefined,
        Resources: undefined,
        Tier: undefined,
        EnvironmentLinks: undefined,
        EnvironmentArn: undefined,
        OperationsRole: undefined,
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["EnvironmentId"] !== undefined) {
        contents.EnvironmentId = output["EnvironmentId"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EndpointURL"] !== undefined) {
        contents.EndpointURL = output["EndpointURL"];
    }
    if (output["CNAME"] !== undefined) {
        contents.CNAME = output["CNAME"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["AbortableOperationInProgress"] !== undefined) {
        contents.AbortableOperationInProgress = output["AbortableOperationInProgress"] == "true";
    }
    if (output["Health"] !== undefined) {
        contents.Health = output["Health"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["Resources"] !== undefined) {
        contents.Resources = deserializeAws_queryEnvironmentResourcesDescription(output["Resources"], context);
    }
    if (output["Tier"] !== undefined) {
        contents.Tier = deserializeAws_queryEnvironmentTier(output["Tier"], context);
    }
    if (output.EnvironmentLinks === "") {
        contents.EnvironmentLinks = [];
    }
    if (output["EnvironmentLinks"] !== undefined && output["EnvironmentLinks"]["member"] !== undefined) {
        contents.EnvironmentLinks = deserializeAws_queryEnvironmentLinks(__getArrayIfSingleItem(output["EnvironmentLinks"]["member"]), context);
    }
    if (output["EnvironmentArn"] !== undefined) {
        contents.EnvironmentArn = output["EnvironmentArn"];
    }
    if (output["OperationsRole"] !== undefined) {
        contents.OperationsRole = output["OperationsRole"];
    }
    return contents;
};
var deserializeAws_queryEnvironmentDescriptionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEnvironmentDescription(entry, context);
    });
};
var deserializeAws_queryEnvironmentDescriptionsMessage = function (output, context) {
    var contents = {
        Environments: undefined,
        NextToken: undefined,
    };
    if (output.Environments === "") {
        contents.Environments = [];
    }
    if (output["Environments"] !== undefined && output["Environments"]["member"] !== undefined) {
        contents.Environments = deserializeAws_queryEnvironmentDescriptionsList(__getArrayIfSingleItem(output["Environments"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryEnvironmentInfoDescription = function (output, context) {
    var contents = {
        InfoType: undefined,
        Ec2InstanceId: undefined,
        SampleTimestamp: undefined,
        Message: undefined,
    };
    if (output["InfoType"] !== undefined) {
        contents.InfoType = output["InfoType"];
    }
    if (output["Ec2InstanceId"] !== undefined) {
        contents.Ec2InstanceId = output["Ec2InstanceId"];
    }
    if (output["SampleTimestamp"] !== undefined) {
        contents.SampleTimestamp = new Date(output["SampleTimestamp"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryEnvironmentInfoDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEnvironmentInfoDescription(entry, context);
    });
};
var deserializeAws_queryEnvironmentLink = function (output, context) {
    var contents = {
        LinkName: undefined,
        EnvironmentName: undefined,
    };
    if (output["LinkName"] !== undefined) {
        contents.LinkName = output["LinkName"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    return contents;
};
var deserializeAws_queryEnvironmentLinks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEnvironmentLink(entry, context);
    });
};
var deserializeAws_queryEnvironmentResourceDescription = function (output, context) {
    var contents = {
        EnvironmentName: undefined,
        AutoScalingGroups: undefined,
        Instances: undefined,
        LaunchConfigurations: undefined,
        LaunchTemplates: undefined,
        LoadBalancers: undefined,
        Triggers: undefined,
        Queues: undefined,
    };
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output.AutoScalingGroups === "") {
        contents.AutoScalingGroups = [];
    }
    if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
        contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroupList(__getArrayIfSingleItem(output["AutoScalingGroups"]["member"]), context);
    }
    if (output.Instances === "") {
        contents.Instances = [];
    }
    if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
        contents.Instances = deserializeAws_queryInstanceList(__getArrayIfSingleItem(output["Instances"]["member"]), context);
    }
    if (output.LaunchConfigurations === "") {
        contents.LaunchConfigurations = [];
    }
    if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
        contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurationList(__getArrayIfSingleItem(output["LaunchConfigurations"]["member"]), context);
    }
    if (output.LaunchTemplates === "") {
        contents.LaunchTemplates = [];
    }
    if (output["LaunchTemplates"] !== undefined && output["LaunchTemplates"]["member"] !== undefined) {
        contents.LaunchTemplates = deserializeAws_queryLaunchTemplateList(__getArrayIfSingleItem(output["LaunchTemplates"]["member"]), context);
    }
    if (output.LoadBalancers === "") {
        contents.LoadBalancers = [];
    }
    if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
        contents.LoadBalancers = deserializeAws_queryLoadBalancerList(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
    }
    if (output.Triggers === "") {
        contents.Triggers = [];
    }
    if (output["Triggers"] !== undefined && output["Triggers"]["member"] !== undefined) {
        contents.Triggers = deserializeAws_queryTriggerList(__getArrayIfSingleItem(output["Triggers"]["member"]), context);
    }
    if (output.Queues === "") {
        contents.Queues = [];
    }
    if (output["Queues"] !== undefined && output["Queues"]["member"] !== undefined) {
        contents.Queues = deserializeAws_queryQueueList(__getArrayIfSingleItem(output["Queues"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryEnvironmentResourceDescriptionsMessage = function (output, context) {
    var contents = {
        EnvironmentResources: undefined,
    };
    if (output["EnvironmentResources"] !== undefined) {
        contents.EnvironmentResources = deserializeAws_queryEnvironmentResourceDescription(output["EnvironmentResources"], context);
    }
    return contents;
};
var deserializeAws_queryEnvironmentResourcesDescription = function (output, context) {
    var contents = {
        LoadBalancer: undefined,
    };
    if (output["LoadBalancer"] !== undefined) {
        contents.LoadBalancer = deserializeAws_queryLoadBalancerDescription(output["LoadBalancer"], context);
    }
    return contents;
};
var deserializeAws_queryEnvironmentTier = function (output, context) {
    var contents = {
        Name: undefined,
        Type: undefined,
        Version: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
var deserializeAws_queryEventDescription = function (output, context) {
    var contents = {
        EventDate: undefined,
        Message: undefined,
        ApplicationName: undefined,
        VersionLabel: undefined,
        TemplateName: undefined,
        EnvironmentName: undefined,
        PlatformArn: undefined,
        RequestId: undefined,
        Severity: undefined,
    };
    if (output["EventDate"] !== undefined) {
        contents.EventDate = new Date(output["EventDate"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["ApplicationName"] !== undefined) {
        contents.ApplicationName = output["ApplicationName"];
    }
    if (output["VersionLabel"] !== undefined) {
        contents.VersionLabel = output["VersionLabel"];
    }
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = output["TemplateName"];
    }
    if (output["EnvironmentName"] !== undefined) {
        contents.EnvironmentName = output["EnvironmentName"];
    }
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["RequestId"] !== undefined) {
        contents.RequestId = output["RequestId"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    return contents;
};
var deserializeAws_queryEventDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventDescription(entry, context);
    });
};
var deserializeAws_queryEventDescriptionsMessage = function (output, context) {
    var contents = {
        Events: undefined,
        NextToken: undefined,
    };
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined && output["Events"]["member"] !== undefined) {
        contents.Events = deserializeAws_queryEventDescriptionList(__getArrayIfSingleItem(output["Events"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryInstance = function (output, context) {
    var contents = {
        Id: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
var deserializeAws_queryInstanceHealthList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySingleInstanceHealth(entry, context);
    });
};
var deserializeAws_queryInstanceHealthSummary = function (output, context) {
    var contents = {
        NoData: undefined,
        Unknown: undefined,
        Pending: undefined,
        Ok: undefined,
        Info: undefined,
        Warning: undefined,
        Degraded: undefined,
        Severe: undefined,
    };
    if (output["NoData"] !== undefined) {
        contents.NoData = parseInt(output["NoData"]);
    }
    if (output["Unknown"] !== undefined) {
        contents.Unknown = parseInt(output["Unknown"]);
    }
    if (output["Pending"] !== undefined) {
        contents.Pending = parseInt(output["Pending"]);
    }
    if (output["Ok"] !== undefined) {
        contents.Ok = parseInt(output["Ok"]);
    }
    if (output["Info"] !== undefined) {
        contents.Info = parseInt(output["Info"]);
    }
    if (output["Warning"] !== undefined) {
        contents.Warning = parseInt(output["Warning"]);
    }
    if (output["Degraded"] !== undefined) {
        contents.Degraded = parseInt(output["Degraded"]);
    }
    if (output["Severe"] !== undefined) {
        contents.Severe = parseInt(output["Severe"]);
    }
    return contents;
};
var deserializeAws_queryInstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstance(entry, context);
    });
};
var deserializeAws_queryInsufficientPrivilegesException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidRequestException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryLatency = function (output, context) {
    var contents = {
        P999: undefined,
        P99: undefined,
        P95: undefined,
        P90: undefined,
        P85: undefined,
        P75: undefined,
        P50: undefined,
        P10: undefined,
    };
    if (output["P999"] !== undefined) {
        contents.P999 = parseFloat(output["P999"]);
    }
    if (output["P99"] !== undefined) {
        contents.P99 = parseFloat(output["P99"]);
    }
    if (output["P95"] !== undefined) {
        contents.P95 = parseFloat(output["P95"]);
    }
    if (output["P90"] !== undefined) {
        contents.P90 = parseFloat(output["P90"]);
    }
    if (output["P85"] !== undefined) {
        contents.P85 = parseFloat(output["P85"]);
    }
    if (output["P75"] !== undefined) {
        contents.P75 = parseFloat(output["P75"]);
    }
    if (output["P50"] !== undefined) {
        contents.P50 = parseFloat(output["P50"]);
    }
    if (output["P10"] !== undefined) {
        contents.P10 = parseFloat(output["P10"]);
    }
    return contents;
};
var deserializeAws_queryLaunchConfiguration = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_queryLaunchConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLaunchConfiguration(entry, context);
    });
};
var deserializeAws_queryLaunchTemplate = function (output, context) {
    var contents = {
        Id: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = output["Id"];
    }
    return contents;
};
var deserializeAws_queryLaunchTemplateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLaunchTemplate(entry, context);
    });
};
var deserializeAws_queryListAvailableSolutionStacksResultMessage = function (output, context) {
    var contents = {
        SolutionStacks: undefined,
        SolutionStackDetails: undefined,
    };
    if (output.SolutionStacks === "") {
        contents.SolutionStacks = [];
    }
    if (output["SolutionStacks"] !== undefined && output["SolutionStacks"]["member"] !== undefined) {
        contents.SolutionStacks = deserializeAws_queryAvailableSolutionStackNamesList(__getArrayIfSingleItem(output["SolutionStacks"]["member"]), context);
    }
    if (output.SolutionStackDetails === "") {
        contents.SolutionStackDetails = [];
    }
    if (output["SolutionStackDetails"] !== undefined && output["SolutionStackDetails"]["member"] !== undefined) {
        contents.SolutionStackDetails = deserializeAws_queryAvailableSolutionStackDetailsList(__getArrayIfSingleItem(output["SolutionStackDetails"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryListener = function (output, context) {
    var contents = {
        Protocol: undefined,
        Port: undefined,
    };
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    return contents;
};
var deserializeAws_queryListPlatformBranchesResult = function (output, context) {
    var contents = {
        PlatformBranchSummaryList: undefined,
        NextToken: undefined,
    };
    if (output.PlatformBranchSummaryList === "") {
        contents.PlatformBranchSummaryList = [];
    }
    if (output["PlatformBranchSummaryList"] !== undefined &&
        output["PlatformBranchSummaryList"]["member"] !== undefined) {
        contents.PlatformBranchSummaryList = deserializeAws_queryPlatformBranchSummaryList(__getArrayIfSingleItem(output["PlatformBranchSummaryList"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryListPlatformVersionsResult = function (output, context) {
    var contents = {
        PlatformSummaryList: undefined,
        NextToken: undefined,
    };
    if (output.PlatformSummaryList === "") {
        contents.PlatformSummaryList = [];
    }
    if (output["PlatformSummaryList"] !== undefined && output["PlatformSummaryList"]["member"] !== undefined) {
        contents.PlatformSummaryList = deserializeAws_queryPlatformSummaryList(__getArrayIfSingleItem(output["PlatformSummaryList"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
var deserializeAws_queryLoadAverage = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return parseFloat(entry);
    });
};
var deserializeAws_queryLoadBalancer = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_queryLoadBalancerDescription = function (output, context) {
    var contents = {
        LoadBalancerName: undefined,
        Domain: undefined,
        Listeners: undefined,
    };
    if (output["LoadBalancerName"] !== undefined) {
        contents.LoadBalancerName = output["LoadBalancerName"];
    }
    if (output["Domain"] !== undefined) {
        contents.Domain = output["Domain"];
    }
    if (output.Listeners === "") {
        contents.Listeners = [];
    }
    if (output["Listeners"] !== undefined && output["Listeners"]["member"] !== undefined) {
        contents.Listeners = deserializeAws_queryLoadBalancerListenersDescription(__getArrayIfSingleItem(output["Listeners"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryLoadBalancerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLoadBalancer(entry, context);
    });
};
var deserializeAws_queryLoadBalancerListenersDescription = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryListener(entry, context);
    });
};
var deserializeAws_queryManagedAction = function (output, context) {
    var contents = {
        ActionId: undefined,
        ActionDescription: undefined,
        ActionType: undefined,
        Status: undefined,
        WindowStartTime: undefined,
    };
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["WindowStartTime"] !== undefined) {
        contents.WindowStartTime = new Date(output["WindowStartTime"]);
    }
    return contents;
};
var deserializeAws_queryManagedActionHistoryItem = function (output, context) {
    var contents = {
        ActionId: undefined,
        ActionType: undefined,
        ActionDescription: undefined,
        FailureType: undefined,
        Status: undefined,
        FailureDescription: undefined,
        ExecutedTime: undefined,
        FinishedTime: undefined,
    };
    if (output["ActionId"] !== undefined) {
        contents.ActionId = output["ActionId"];
    }
    if (output["ActionType"] !== undefined) {
        contents.ActionType = output["ActionType"];
    }
    if (output["ActionDescription"] !== undefined) {
        contents.ActionDescription = output["ActionDescription"];
    }
    if (output["FailureType"] !== undefined) {
        contents.FailureType = output["FailureType"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["FailureDescription"] !== undefined) {
        contents.FailureDescription = output["FailureDescription"];
    }
    if (output["ExecutedTime"] !== undefined) {
        contents.ExecutedTime = new Date(output["ExecutedTime"]);
    }
    if (output["FinishedTime"] !== undefined) {
        contents.FinishedTime = new Date(output["FinishedTime"]);
    }
    return contents;
};
var deserializeAws_queryManagedActionHistoryItems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryManagedActionHistoryItem(entry, context);
    });
};
var deserializeAws_queryManagedActionInvalidStateException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryManagedActions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryManagedAction(entry, context);
    });
};
var deserializeAws_queryMaxAgeRule = function (output, context) {
    var contents = {
        Enabled: undefined,
        MaxAgeInDays: undefined,
        DeleteSourceFromS3: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["MaxAgeInDays"] !== undefined) {
        contents.MaxAgeInDays = parseInt(output["MaxAgeInDays"]);
    }
    if (output["DeleteSourceFromS3"] !== undefined) {
        contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
    }
    return contents;
};
var deserializeAws_queryMaxCountRule = function (output, context) {
    var contents = {
        Enabled: undefined,
        MaxCount: undefined,
        DeleteSourceFromS3: undefined,
    };
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["MaxCount"] !== undefined) {
        contents.MaxCount = parseInt(output["MaxCount"]);
    }
    if (output["DeleteSourceFromS3"] !== undefined) {
        contents.DeleteSourceFromS3 = output["DeleteSourceFromS3"] == "true";
    }
    return contents;
};
var deserializeAws_queryOperationInProgressException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryOptionRestrictionRegex = function (output, context) {
    var contents = {
        Pattern: undefined,
        Label: undefined,
    };
    if (output["Pattern"] !== undefined) {
        contents.Pattern = output["Pattern"];
    }
    if (output["Label"] !== undefined) {
        contents.Label = output["Label"];
    }
    return contents;
};
var deserializeAws_queryPlatformBranchSummary = function (output, context) {
    var contents = {
        PlatformName: undefined,
        BranchName: undefined,
        LifecycleState: undefined,
        BranchOrder: undefined,
        SupportedTierList: undefined,
    };
    if (output["PlatformName"] !== undefined) {
        contents.PlatformName = output["PlatformName"];
    }
    if (output["BranchName"] !== undefined) {
        contents.BranchName = output["BranchName"];
    }
    if (output["LifecycleState"] !== undefined) {
        contents.LifecycleState = output["LifecycleState"];
    }
    if (output["BranchOrder"] !== undefined) {
        contents.BranchOrder = parseInt(output["BranchOrder"]);
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
        contents.SupportedTierList = deserializeAws_querySupportedTierList(__getArrayIfSingleItem(output["SupportedTierList"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryPlatformBranchSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformBranchSummary(entry, context);
    });
};
var deserializeAws_queryPlatformDescription = function (output, context) {
    var contents = {
        PlatformArn: undefined,
        PlatformOwner: undefined,
        PlatformName: undefined,
        PlatformVersion: undefined,
        SolutionStackName: undefined,
        PlatformStatus: undefined,
        DateCreated: undefined,
        DateUpdated: undefined,
        PlatformCategory: undefined,
        Description: undefined,
        Maintainer: undefined,
        OperatingSystemName: undefined,
        OperatingSystemVersion: undefined,
        ProgrammingLanguages: undefined,
        Frameworks: undefined,
        CustomAmiList: undefined,
        SupportedTierList: undefined,
        SupportedAddonList: undefined,
        PlatformLifecycleState: undefined,
        PlatformBranchName: undefined,
        PlatformBranchLifecycleState: undefined,
    };
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["PlatformOwner"] !== undefined) {
        contents.PlatformOwner = output["PlatformOwner"];
    }
    if (output["PlatformName"] !== undefined) {
        contents.PlatformName = output["PlatformName"];
    }
    if (output["PlatformVersion"] !== undefined) {
        contents.PlatformVersion = output["PlatformVersion"];
    }
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output["PlatformStatus"] !== undefined) {
        contents.PlatformStatus = output["PlatformStatus"];
    }
    if (output["DateCreated"] !== undefined) {
        contents.DateCreated = new Date(output["DateCreated"]);
    }
    if (output["DateUpdated"] !== undefined) {
        contents.DateUpdated = new Date(output["DateUpdated"]);
    }
    if (output["PlatformCategory"] !== undefined) {
        contents.PlatformCategory = output["PlatformCategory"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["Maintainer"] !== undefined) {
        contents.Maintainer = output["Maintainer"];
    }
    if (output["OperatingSystemName"] !== undefined) {
        contents.OperatingSystemName = output["OperatingSystemName"];
    }
    if (output["OperatingSystemVersion"] !== undefined) {
        contents.OperatingSystemVersion = output["OperatingSystemVersion"];
    }
    if (output.ProgrammingLanguages === "") {
        contents.ProgrammingLanguages = [];
    }
    if (output["ProgrammingLanguages"] !== undefined && output["ProgrammingLanguages"]["member"] !== undefined) {
        contents.ProgrammingLanguages = deserializeAws_queryPlatformProgrammingLanguages(__getArrayIfSingleItem(output["ProgrammingLanguages"]["member"]), context);
    }
    if (output.Frameworks === "") {
        contents.Frameworks = [];
    }
    if (output["Frameworks"] !== undefined && output["Frameworks"]["member"] !== undefined) {
        contents.Frameworks = deserializeAws_queryPlatformFrameworks(__getArrayIfSingleItem(output["Frameworks"]["member"]), context);
    }
    if (output.CustomAmiList === "") {
        contents.CustomAmiList = [];
    }
    if (output["CustomAmiList"] !== undefined && output["CustomAmiList"]["member"] !== undefined) {
        contents.CustomAmiList = deserializeAws_queryCustomAmiList(__getArrayIfSingleItem(output["CustomAmiList"]["member"]), context);
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
        contents.SupportedTierList = deserializeAws_querySupportedTierList(__getArrayIfSingleItem(output["SupportedTierList"]["member"]), context);
    }
    if (output.SupportedAddonList === "") {
        contents.SupportedAddonList = [];
    }
    if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
        contents.SupportedAddonList = deserializeAws_querySupportedAddonList(__getArrayIfSingleItem(output["SupportedAddonList"]["member"]), context);
    }
    if (output["PlatformLifecycleState"] !== undefined) {
        contents.PlatformLifecycleState = output["PlatformLifecycleState"];
    }
    if (output["PlatformBranchName"] !== undefined) {
        contents.PlatformBranchName = output["PlatformBranchName"];
    }
    if (output["PlatformBranchLifecycleState"] !== undefined) {
        contents.PlatformBranchLifecycleState = output["PlatformBranchLifecycleState"];
    }
    return contents;
};
var deserializeAws_queryPlatformFramework = function (output, context) {
    var contents = {
        Name: undefined,
        Version: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
var deserializeAws_queryPlatformFrameworks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformFramework(entry, context);
    });
};
var deserializeAws_queryPlatformProgrammingLanguage = function (output, context) {
    var contents = {
        Name: undefined,
        Version: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    return contents;
};
var deserializeAws_queryPlatformProgrammingLanguages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformProgrammingLanguage(entry, context);
    });
};
var deserializeAws_queryPlatformSummary = function (output, context) {
    var contents = {
        PlatformArn: undefined,
        PlatformOwner: undefined,
        PlatformStatus: undefined,
        PlatformCategory: undefined,
        OperatingSystemName: undefined,
        OperatingSystemVersion: undefined,
        SupportedTierList: undefined,
        SupportedAddonList: undefined,
        PlatformLifecycleState: undefined,
        PlatformVersion: undefined,
        PlatformBranchName: undefined,
        PlatformBranchLifecycleState: undefined,
    };
    if (output["PlatformArn"] !== undefined) {
        contents.PlatformArn = output["PlatformArn"];
    }
    if (output["PlatformOwner"] !== undefined) {
        contents.PlatformOwner = output["PlatformOwner"];
    }
    if (output["PlatformStatus"] !== undefined) {
        contents.PlatformStatus = output["PlatformStatus"];
    }
    if (output["PlatformCategory"] !== undefined) {
        contents.PlatformCategory = output["PlatformCategory"];
    }
    if (output["OperatingSystemName"] !== undefined) {
        contents.OperatingSystemName = output["OperatingSystemName"];
    }
    if (output["OperatingSystemVersion"] !== undefined) {
        contents.OperatingSystemVersion = output["OperatingSystemVersion"];
    }
    if (output.SupportedTierList === "") {
        contents.SupportedTierList = [];
    }
    if (output["SupportedTierList"] !== undefined && output["SupportedTierList"]["member"] !== undefined) {
        contents.SupportedTierList = deserializeAws_querySupportedTierList(__getArrayIfSingleItem(output["SupportedTierList"]["member"]), context);
    }
    if (output.SupportedAddonList === "") {
        contents.SupportedAddonList = [];
    }
    if (output["SupportedAddonList"] !== undefined && output["SupportedAddonList"]["member"] !== undefined) {
        contents.SupportedAddonList = deserializeAws_querySupportedAddonList(__getArrayIfSingleItem(output["SupportedAddonList"]["member"]), context);
    }
    if (output["PlatformLifecycleState"] !== undefined) {
        contents.PlatformLifecycleState = output["PlatformLifecycleState"];
    }
    if (output["PlatformVersion"] !== undefined) {
        contents.PlatformVersion = output["PlatformVersion"];
    }
    if (output["PlatformBranchName"] !== undefined) {
        contents.PlatformBranchName = output["PlatformBranchName"];
    }
    if (output["PlatformBranchLifecycleState"] !== undefined) {
        contents.PlatformBranchLifecycleState = output["PlatformBranchLifecycleState"];
    }
    return contents;
};
var deserializeAws_queryPlatformSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformSummary(entry, context);
    });
};
var deserializeAws_queryPlatformVersionStillReferencedException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryQueue = function (output, context) {
    var contents = {
        Name: undefined,
        URL: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["URL"] !== undefined) {
        contents.URL = output["URL"];
    }
    return contents;
};
var deserializeAws_queryQueueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryQueue(entry, context);
    });
};
var deserializeAws_queryResourceNotFoundException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryResourceQuota = function (output, context) {
    var contents = {
        Maximum: undefined,
    };
    if (output["Maximum"] !== undefined) {
        contents.Maximum = parseInt(output["Maximum"]);
    }
    return contents;
};
var deserializeAws_queryResourceQuotas = function (output, context) {
    var contents = {
        ApplicationQuota: undefined,
        ApplicationVersionQuota: undefined,
        EnvironmentQuota: undefined,
        ConfigurationTemplateQuota: undefined,
        CustomPlatformQuota: undefined,
    };
    if (output["ApplicationQuota"] !== undefined) {
        contents.ApplicationQuota = deserializeAws_queryResourceQuota(output["ApplicationQuota"], context);
    }
    if (output["ApplicationVersionQuota"] !== undefined) {
        contents.ApplicationVersionQuota = deserializeAws_queryResourceQuota(output["ApplicationVersionQuota"], context);
    }
    if (output["EnvironmentQuota"] !== undefined) {
        contents.EnvironmentQuota = deserializeAws_queryResourceQuota(output["EnvironmentQuota"], context);
    }
    if (output["ConfigurationTemplateQuota"] !== undefined) {
        contents.ConfigurationTemplateQuota = deserializeAws_queryResourceQuota(output["ConfigurationTemplateQuota"], context);
    }
    if (output["CustomPlatformQuota"] !== undefined) {
        contents.CustomPlatformQuota = deserializeAws_queryResourceQuota(output["CustomPlatformQuota"], context);
    }
    return contents;
};
var deserializeAws_queryResourceTagsDescriptionMessage = function (output, context) {
    var contents = {
        ResourceArn: undefined,
        ResourceTags: undefined,
    };
    if (output["ResourceArn"] !== undefined) {
        contents.ResourceArn = output["ResourceArn"];
    }
    if (output.ResourceTags === "") {
        contents.ResourceTags = [];
    }
    if (output["ResourceTags"] !== undefined && output["ResourceTags"]["member"] !== undefined) {
        contents.ResourceTags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["ResourceTags"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryResourceTypeNotSupportedException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryRetrieveEnvironmentInfoResultMessage = function (output, context) {
    var contents = {
        EnvironmentInfo: undefined,
    };
    if (output.EnvironmentInfo === "") {
        contents.EnvironmentInfo = [];
    }
    if (output["EnvironmentInfo"] !== undefined && output["EnvironmentInfo"]["member"] !== undefined) {
        contents.EnvironmentInfo = deserializeAws_queryEnvironmentInfoDescriptionList(__getArrayIfSingleItem(output["EnvironmentInfo"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryS3Location = function (output, context) {
    var contents = {
        S3Bucket: undefined,
        S3Key: undefined,
    };
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    if (output["S3Key"] !== undefined) {
        contents.S3Key = output["S3Key"];
    }
    return contents;
};
var deserializeAws_queryS3LocationNotInServiceRegionException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryS3SubscriptionRequiredException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySingleInstanceHealth = function (output, context) {
    var contents = {
        InstanceId: undefined,
        HealthStatus: undefined,
        Color: undefined,
        Causes: undefined,
        LaunchedAt: undefined,
        ApplicationMetrics: undefined,
        System: undefined,
        Deployment: undefined,
        AvailabilityZone: undefined,
        InstanceType: undefined,
    };
    if (output["InstanceId"] !== undefined) {
        contents.InstanceId = output["InstanceId"];
    }
    if (output["HealthStatus"] !== undefined) {
        contents.HealthStatus = output["HealthStatus"];
    }
    if (output["Color"] !== undefined) {
        contents.Color = output["Color"];
    }
    if (output.Causes === "") {
        contents.Causes = [];
    }
    if (output["Causes"] !== undefined && output["Causes"]["member"] !== undefined) {
        contents.Causes = deserializeAws_queryCauses(__getArrayIfSingleItem(output["Causes"]["member"]), context);
    }
    if (output["LaunchedAt"] !== undefined) {
        contents.LaunchedAt = new Date(output["LaunchedAt"]);
    }
    if (output["ApplicationMetrics"] !== undefined) {
        contents.ApplicationMetrics = deserializeAws_queryApplicationMetrics(output["ApplicationMetrics"], context);
    }
    if (output["System"] !== undefined) {
        contents.System = deserializeAws_querySystemStatus(output["System"], context);
    }
    if (output["Deployment"] !== undefined) {
        contents.Deployment = deserializeAws_queryDeployment(output["Deployment"], context);
    }
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["InstanceType"] !== undefined) {
        contents.InstanceType = output["InstanceType"];
    }
    return contents;
};
var deserializeAws_querySolutionStackDescription = function (output, context) {
    var contents = {
        SolutionStackName: undefined,
        PermittedFileTypes: undefined,
    };
    if (output["SolutionStackName"] !== undefined) {
        contents.SolutionStackName = output["SolutionStackName"];
    }
    if (output.PermittedFileTypes === "") {
        contents.PermittedFileTypes = [];
    }
    if (output["PermittedFileTypes"] !== undefined && output["PermittedFileTypes"]["member"] !== undefined) {
        contents.PermittedFileTypes = deserializeAws_querySolutionStackFileTypeList(__getArrayIfSingleItem(output["PermittedFileTypes"]["member"]), context);
    }
    return contents;
};
var deserializeAws_querySolutionStackFileTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_querySourceBuildInformation = function (output, context) {
    var contents = {
        SourceType: undefined,
        SourceRepository: undefined,
        SourceLocation: undefined,
    };
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output["SourceRepository"] !== undefined) {
        contents.SourceRepository = output["SourceRepository"];
    }
    if (output["SourceLocation"] !== undefined) {
        contents.SourceLocation = output["SourceLocation"];
    }
    return contents;
};
var deserializeAws_querySourceBundleDeletionException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryStatusCodes = function (output, context) {
    var contents = {
        Status2xx: undefined,
        Status3xx: undefined,
        Status4xx: undefined,
        Status5xx: undefined,
    };
    if (output["Status2xx"] !== undefined) {
        contents.Status2xx = parseInt(output["Status2xx"]);
    }
    if (output["Status3xx"] !== undefined) {
        contents.Status3xx = parseInt(output["Status3xx"]);
    }
    if (output["Status4xx"] !== undefined) {
        contents.Status4xx = parseInt(output["Status4xx"]);
    }
    if (output["Status5xx"] !== undefined) {
        contents.Status5xx = parseInt(output["Status5xx"]);
    }
    return contents;
};
var deserializeAws_querySupportedAddonList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_querySupportedTierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_querySystemStatus = function (output, context) {
    var contents = {
        CPUUtilization: undefined,
        LoadAverage: undefined,
    };
    if (output["CPUUtilization"] !== undefined) {
        contents.CPUUtilization = deserializeAws_queryCPUUtilization(output["CPUUtilization"], context);
    }
    if (output.LoadAverage === "") {
        contents.LoadAverage = [];
    }
    if (output["LoadAverage"] !== undefined && output["LoadAverage"]["member"] !== undefined) {
        contents.LoadAverage = deserializeAws_queryLoadAverage(__getArrayIfSingleItem(output["LoadAverage"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryTag = function (output, context) {
    var contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryTagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
var deserializeAws_queryTooManyApplicationsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTooManyApplicationVersionsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTooManyBucketsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTooManyConfigurationTemplatesException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTooManyEnvironmentsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTooManyPlatformsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTooManyTagsException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTrigger = function (output, context) {
    var contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
var deserializeAws_queryTriggerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTrigger(entry, context);
    });
};
var deserializeAws_queryValidationMessage = function (output, context) {
    var contents = {
        Message: undefined,
        Severity: undefined,
        Namespace: undefined,
        OptionName: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    if (output["Namespace"] !== undefined) {
        contents.Namespace = output["Namespace"];
    }
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    return contents;
};
var deserializeAws_queryValidationMessagesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryValidationMessage(entry, context);
    });
};
var deserializeAws_queryVersionLabelsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
            var parsedObj = xmlParse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val, tagName) { return (val.trim() === "" ? "" : decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return __getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map