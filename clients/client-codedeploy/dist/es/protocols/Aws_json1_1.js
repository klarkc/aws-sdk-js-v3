import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
        };
        body = JSON.stringify(serializeAws_json1_1AddTagsToOnPremisesInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetApplicationRevisionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetApplicationRevisions",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetApplicationRevisionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetApplications",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetApplicationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetDeploymentGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentGroups",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetDeploymentInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentInstances",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetDeploymentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetDeployments",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetDeploymentTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentTargets",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentTargetsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1BatchGetOnPremisesInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.BatchGetOnPremisesInstances",
        };
        body = JSON.stringify(serializeAws_json1_1BatchGetOnPremisesInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ContinueDeploymentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ContinueDeployment",
        };
        body = JSON.stringify(serializeAws_json1_1ContinueDeploymentInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.CreateApplication",
        };
        body = JSON.stringify(serializeAws_json1_1CreateApplicationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDeploymentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.CreateDeployment",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDeploymentInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDeploymentConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.CreateDeploymentConfig",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDeploymentConfigInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateDeploymentGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.CreateDeploymentGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateDeploymentGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.DeleteApplication",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteApplicationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDeploymentConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.DeleteDeploymentConfig",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDeploymentConfigInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteDeploymentGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.DeleteDeploymentGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteDeploymentGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteGitHubAccountTokenCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.DeleteGitHubAccountToken",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteGitHubAccountTokenInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteResourcesByExternalIdCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.DeleteResourcesByExternalId",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteResourcesByExternalIdInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeregisterOnPremisesInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.DeregisterOnPremisesInstance",
        };
        body = JSON.stringify(serializeAws_json1_1DeregisterOnPremisesInstanceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetApplication",
        };
        body = JSON.stringify(serializeAws_json1_1GetApplicationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetApplicationRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetApplicationRevision",
        };
        body = JSON.stringify(serializeAws_json1_1GetApplicationRevisionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDeploymentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetDeployment",
        };
        body = JSON.stringify(serializeAws_json1_1GetDeploymentInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDeploymentConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetDeploymentConfig",
        };
        body = JSON.stringify(serializeAws_json1_1GetDeploymentConfigInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDeploymentGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetDeploymentGroup",
        };
        body = JSON.stringify(serializeAws_json1_1GetDeploymentGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDeploymentInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetDeploymentInstance",
        };
        body = JSON.stringify(serializeAws_json1_1GetDeploymentInstanceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetDeploymentTargetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetDeploymentTarget",
        };
        body = JSON.stringify(serializeAws_json1_1GetDeploymentTargetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetOnPremisesInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.GetOnPremisesInstance",
        };
        body = JSON.stringify(serializeAws_json1_1GetOnPremisesInstanceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListApplicationRevisionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListApplicationRevisions",
        };
        body = JSON.stringify(serializeAws_json1_1ListApplicationRevisionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListApplications",
        };
        body = JSON.stringify(serializeAws_json1_1ListApplicationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDeploymentConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListDeploymentConfigs",
        };
        body = JSON.stringify(serializeAws_json1_1ListDeploymentConfigsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDeploymentGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListDeploymentGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListDeploymentGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDeploymentInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListDeploymentInstances",
        };
        body = JSON.stringify(serializeAws_json1_1ListDeploymentInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDeploymentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListDeployments",
        };
        body = JSON.stringify(serializeAws_json1_1ListDeploymentsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListDeploymentTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListDeploymentTargets",
        };
        body = JSON.stringify(serializeAws_json1_1ListDeploymentTargetsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListGitHubAccountTokenNamesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListGitHubAccountTokenNames",
        };
        body = JSON.stringify(serializeAws_json1_1ListGitHubAccountTokenNamesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListOnPremisesInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListOnPremisesInstances",
        };
        body = JSON.stringify(serializeAws_json1_1ListOnPremisesInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus",
        };
        body = JSON.stringify(serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterApplicationRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.RegisterApplicationRevision",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterApplicationRevisionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterOnPremisesInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.RegisterOnPremisesInstance",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterOnPremisesInstanceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination",
        };
        body = JSON.stringify(serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopDeploymentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.StopDeployment",
        };
        body = JSON.stringify(serializeAws_json1_1StopDeploymentInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.UpdateApplication",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateApplicationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateDeploymentGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "CodeDeploy_20141006.UpdateDeploymentGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateDeploymentGroupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(output, context)];
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
var deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InstanceLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InstanceLimitExceededException": return [3 /*break*/, 2];
                    case "InstanceNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InstanceNameRequiredException": return [3 /*break*/, 4];
                    case "InstanceNotRegisteredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InstanceNotRegisteredException": return [3 /*break*/, 6];
                    case "InvalidInstanceNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 8];
                    case "InvalidTagException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidTagException": return [3 /*break*/, 10];
                    case "TagLimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#TagLimitExceededException": return [3 /*break*/, 12];
                    case "TagRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#TagRequiredException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetApplicationRevisionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetApplicationRevisionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetApplicationRevisionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "BatchLimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#BatchLimitExceededException": return [3 /*break*/, 6];
                    case "InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "InvalidRevisionException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidRevisionException": return [3 /*break*/, 10];
                    case "RevisionRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#RevisionRequiredException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetApplicationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetApplicationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "BatchLimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#BatchLimitExceededException": return [3 /*break*/, 6];
                    case "InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetDeploymentGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetDeploymentGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetDeploymentGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "BatchLimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#BatchLimitExceededException": return [3 /*break*/, 6];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 10];
                    case "InvalidApplicationNameException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 12];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetDeploymentInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetDeploymentInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetDeploymentInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BatchLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#BatchLimitExceededException": return [3 /*break*/, 2];
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 6];
                    case "InstanceIdRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InstanceIdRequiredException": return [3 /*break*/, 8];
                    case "InvalidComputePlatformException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidComputePlatformException": return [3 /*break*/, 10];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 12];
                    case "InvalidInstanceNameException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetDeploymentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetDeploymentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetDeploymentsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetDeploymentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BatchLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#BatchLimitExceededException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetDeploymentTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetDeploymentTargetsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetDeploymentTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "DeploymentTargetDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentTargetIdRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException": return [3 /*break*/, 10];
                    case "DeploymentTargetListSizeExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException": return [3 /*break*/, 12];
                    case "InstanceDoesNotExistException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InstanceDoesNotExistException": return [3 /*break*/, 14];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 16];
                    case "InvalidDeploymentTargetIdException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1BatchGetOnPremisesInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1BatchGetOnPremisesInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BatchLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#BatchLimitExceededException": return [3 /*break*/, 2];
                    case "InstanceNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InstanceNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidInstanceNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ContinueDeploymentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ContinueDeploymentCommandError(output, context)];
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
var deserializeAws_json1_1ContinueDeploymentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentAlreadyCompletedException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException": return [3 /*break*/, 2];
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 6];
                    case "DeploymentIsNotInReadyStateException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException": return [3 /*break*/, 8];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "InvalidDeploymentStatusException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException": return [3 /*break*/, 12];
                    case "InvalidDeploymentWaitTypeException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException": return [3 /*break*/, 14];
                    case "UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateApplicationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException": return [3 /*break*/, 2];
                    case "ApplicationLimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationLimitExceededException": return [3 /*break*/, 4];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "InvalidComputePlatformException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidComputePlatformException": return [3 /*break*/, 10];
                    case "InvalidTagsToAddException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidTagsToAddException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDeploymentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDeploymentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDeploymentOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDeploymentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, parsedBody, message;
    var _2;
    return __generator(this, function (_3) {
        switch (_3.label) {
            case 0:
                _a = [__assign({}, output)];
                _2 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_2.body = _3.sent(), _2)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 10];
                    case "DeploymentLimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#DeploymentLimitExceededException": return [3 /*break*/, 12];
                    case "DescriptionTooLongException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#DescriptionTooLongException": return [3 /*break*/, 14];
                    case "InvalidApplicationNameException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 16];
                    case "InvalidAutoRollbackConfigException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException": return [3 /*break*/, 18];
                    case "InvalidAutoScalingGroupException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException": return [3 /*break*/, 20];
                    case "InvalidDeploymentConfigNameException": return [3 /*break*/, 22];
                    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException": return [3 /*break*/, 22];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 24];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 24];
                    case "InvalidFileExistsBehaviorException": return [3 /*break*/, 26];
                    case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException": return [3 /*break*/, 26];
                    case "InvalidGitHubAccountTokenException": return [3 /*break*/, 28];
                    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException": return [3 /*break*/, 28];
                    case "InvalidIgnoreApplicationStopFailuresValueException": return [3 /*break*/, 30];
                    case "com.amazonaws.codedeploy#InvalidIgnoreApplicationStopFailuresValueException": return [3 /*break*/, 30];
                    case "InvalidLoadBalancerInfoException": return [3 /*break*/, 32];
                    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException": return [3 /*break*/, 32];
                    case "InvalidRevisionException": return [3 /*break*/, 34];
                    case "com.amazonaws.codedeploy#InvalidRevisionException": return [3 /*break*/, 34];
                    case "InvalidRoleException": return [3 /*break*/, 36];
                    case "com.amazonaws.codedeploy#InvalidRoleException": return [3 /*break*/, 36];
                    case "InvalidTargetInstancesException": return [3 /*break*/, 38];
                    case "com.amazonaws.codedeploy#InvalidTargetInstancesException": return [3 /*break*/, 38];
                    case "InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 40];
                    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 40];
                    case "InvalidUpdateOutdatedInstancesOnlyValueException": return [3 /*break*/, 42];
                    case "com.amazonaws.codedeploy#InvalidUpdateOutdatedInstancesOnlyValueException": return [3 /*break*/, 42];
                    case "RevisionDoesNotExistException": return [3 /*break*/, 44];
                    case "com.amazonaws.codedeploy#RevisionDoesNotExistException": return [3 /*break*/, 44];
                    case "RevisionRequiredException": return [3 /*break*/, 46];
                    case "com.amazonaws.codedeploy#RevisionRequiredException": return [3 /*break*/, 46];
                    case "ThrottlingException": return [3 /*break*/, 48];
                    case "com.amazonaws.codedeploy#ThrottlingException": return [3 /*break*/, 48];
                }
                return [3 /*break*/, 50];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentLimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTargetInstancesExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_3.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 51];
            case 50:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _3.label = 51;
            case 51:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateDeploymentConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDeploymentConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDeploymentConfigOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDeploymentConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentConfigAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException": return [3 /*break*/, 2];
                    case "DeploymentConfigLimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException": return [3 /*break*/, 4];
                    case "DeploymentConfigNameRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException": return [3 /*break*/, 6];
                    case "InvalidComputePlatformException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidComputePlatformException": return [3 /*break*/, 8];
                    case "InvalidDeploymentConfigNameException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException": return [3 /*break*/, 10];
                    case "InvalidMinimumHealthyHostValueException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException": return [3 /*break*/, 12];
                    case "InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateDeploymentGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateDeploymentGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateDeploymentGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateDeploymentGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, parsedBody, message;
    var _11;
    return __generator(this, function (_12) {
        switch (_12.label) {
            case 0:
                _a = [__assign({}, output)];
                _11 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_11.body = _12.sent(), _11)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlarmsLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#AlarmsLimitExceededException": return [3 /*break*/, 2];
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 4];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentGroupAlreadyExistsException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException": return [3 /*break*/, 10];
                    case "DeploymentGroupLimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException": return [3 /*break*/, 12];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 14];
                    case "ECSServiceMappingLimitExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException": return [3 /*break*/, 16];
                    case "InvalidAlarmConfigException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidAlarmConfigException": return [3 /*break*/, 18];
                    case "InvalidApplicationNameException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 20];
                    case "InvalidAutoRollbackConfigException": return [3 /*break*/, 22];
                    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException": return [3 /*break*/, 22];
                    case "InvalidAutoScalingGroupException": return [3 /*break*/, 24];
                    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException": return [3 /*break*/, 24];
                    case "InvalidBlueGreenDeploymentConfigurationException": return [3 /*break*/, 26];
                    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException": return [3 /*break*/, 26];
                    case "InvalidDeploymentConfigNameException": return [3 /*break*/, 28];
                    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException": return [3 /*break*/, 28];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 30];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 30];
                    case "InvalidDeploymentStyleException": return [3 /*break*/, 32];
                    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException": return [3 /*break*/, 32];
                    case "InvalidEC2TagCombinationException": return [3 /*break*/, 34];
                    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException": return [3 /*break*/, 34];
                    case "InvalidEC2TagException": return [3 /*break*/, 36];
                    case "com.amazonaws.codedeploy#InvalidEC2TagException": return [3 /*break*/, 36];
                    case "InvalidECSServiceException": return [3 /*break*/, 38];
                    case "com.amazonaws.codedeploy#InvalidECSServiceException": return [3 /*break*/, 38];
                    case "InvalidInputException": return [3 /*break*/, 40];
                    case "com.amazonaws.codedeploy#InvalidInputException": return [3 /*break*/, 40];
                    case "InvalidLoadBalancerInfoException": return [3 /*break*/, 42];
                    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException": return [3 /*break*/, 42];
                    case "InvalidOnPremisesTagCombinationException": return [3 /*break*/, 44];
                    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException": return [3 /*break*/, 44];
                    case "InvalidRoleException": return [3 /*break*/, 46];
                    case "com.amazonaws.codedeploy#InvalidRoleException": return [3 /*break*/, 46];
                    case "InvalidTagException": return [3 /*break*/, 48];
                    case "com.amazonaws.codedeploy#InvalidTagException": return [3 /*break*/, 48];
                    case "InvalidTagsToAddException": return [3 /*break*/, 50];
                    case "com.amazonaws.codedeploy#InvalidTagsToAddException": return [3 /*break*/, 50];
                    case "InvalidTargetGroupPairException": return [3 /*break*/, 52];
                    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException": return [3 /*break*/, 52];
                    case "InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 54];
                    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 54];
                    case "InvalidTriggerConfigException": return [3 /*break*/, 56];
                    case "com.amazonaws.codedeploy#InvalidTriggerConfigException": return [3 /*break*/, 56];
                    case "LifecycleHookLimitExceededException": return [3 /*break*/, 58];
                    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException": return [3 /*break*/, 58];
                    case "RoleRequiredException": return [3 /*break*/, 60];
                    case "com.amazonaws.codedeploy#RoleRequiredException": return [3 /*break*/, 60];
                    case "TagSetListLimitExceededException": return [3 /*break*/, 62];
                    case "com.amazonaws.codedeploy#TagSetListLimitExceededException": return [3 /*break*/, 62];
                    case "ThrottlingException": return [3 /*break*/, 64];
                    case "com.amazonaws.codedeploy#ThrottlingException": return [3 /*break*/, 64];
                    case "TriggerTargetsLimitExceededException": return [3 /*break*/, 66];
                    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException": return [3 /*break*/, 66];
                }
                return [3 /*break*/, 68];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 50:
                _2 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)];
            case 51:
                response = __assign.apply(void 0, [__assign.apply(void 0, _2.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 52:
                _3 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context)];
            case 53:
                response = __assign.apply(void 0, [__assign.apply(void 0, _3.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 54:
                _4 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)];
            case 55:
                response = __assign.apply(void 0, [__assign.apply(void 0, _4.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 56:
                _5 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context)];
            case 57:
                response = __assign.apply(void 0, [__assign.apply(void 0, _5.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 58:
                _6 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context)];
            case 59:
                response = __assign.apply(void 0, [__assign.apply(void 0, _6.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 60:
                _7 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RoleRequiredExceptionResponse(parsedOutput, context)];
            case 61:
                response = __assign.apply(void 0, [__assign.apply(void 0, _7.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 62:
                _8 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context)];
            case 63:
                response = __assign.apply(void 0, [__assign.apply(void 0, _8.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 64:
                _9 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 65:
                response = __assign.apply(void 0, [__assign.apply(void 0, _9.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 66:
                _10 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context)];
            case 67:
                response = __assign.apply(void 0, [__assign.apply(void 0, _10.concat([(_12.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 69];
            case 68:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _12.label = 69;
            case 69:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1DeleteApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteApplicationCommandError(output, context)];
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
var deserializeAws_json1_1DeleteApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationNameRequiredException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 2];
                    case "InvalidApplicationNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 4];
                    case "InvalidRoleException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidRoleException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteDeploymentConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDeploymentConfigCommandError(output, context)];
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
var deserializeAws_json1_1DeleteDeploymentConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentConfigInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentConfigInUseException": return [3 /*break*/, 2];
                    case "DeploymentConfigNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidDeploymentConfigNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException": return [3 /*break*/, 6];
                    case "InvalidOperationException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidOperationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteDeploymentGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteDeploymentGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteDeploymentGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteDeploymentGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationNameRequiredException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 2];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 8];
                    case "InvalidRoleException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidRoleException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteGitHubAccountTokenCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteGitHubAccountTokenOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteGitHubAccountTokenCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GitHubAccountTokenDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException": return [3 /*break*/, 2];
                    case "GitHubAccountTokenNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidGitHubAccountTokenNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException": return [3 /*break*/, 6];
                    case "OperationNotSupportedException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#OperationNotSupportedException": return [3 /*break*/, 8];
                    case "ResourceValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#ResourceValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteResourcesByExternalIdCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteResourcesByExternalIdCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteResourcesByExternalIdOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteResourcesByExternalIdCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1DeregisterOnPremisesInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(output, context)];
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
var deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InstanceNameRequiredException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InstanceNameRequiredException": return [3 /*break*/, 2];
                    case "InvalidInstanceNameException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetApplicationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetApplicationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetApplicationRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetApplicationRevisionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetApplicationRevisionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetApplicationRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "InvalidRevisionException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidRevisionException": return [3 /*break*/, 8];
                    case "RevisionDoesNotExistException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#RevisionDoesNotExistException": return [3 /*break*/, 10];
                    case "RevisionRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#RevisionRequiredException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDeploymentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDeploymentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDeploymentOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDeploymentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDeploymentConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDeploymentConfigCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDeploymentConfigOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDeploymentConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentConfigNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidComputePlatformException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidComputePlatformException": return [3 /*break*/, 6];
                    case "InvalidDeploymentConfigNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDeploymentGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDeploymentGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDeploymentGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDeploymentGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 10];
                    case "InvalidApplicationNameException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 12];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDeploymentInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDeploymentInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDeploymentInstanceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDeploymentInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "InstanceDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InstanceDoesNotExistException": return [3 /*break*/, 6];
                    case "InstanceIdRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InstanceIdRequiredException": return [3 /*break*/, 8];
                    case "InvalidComputePlatformException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidComputePlatformException": return [3 /*break*/, 10];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 12];
                    case "InvalidInstanceNameException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetDeploymentTargetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetDeploymentTargetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetDeploymentTargetOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetDeploymentTargetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "DeploymentTargetDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentTargetIdRequiredException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException": return [3 /*break*/, 10];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 12];
                    case "InvalidDeploymentTargetIdException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException": return [3 /*break*/, 14];
                    case "InvalidInstanceNameException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetOnPremisesInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetOnPremisesInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetOnPremisesInstanceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetOnPremisesInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InstanceNameRequiredException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InstanceNameRequiredException": return [3 /*break*/, 2];
                    case "InstanceNotRegisteredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InstanceNotRegisteredException": return [3 /*break*/, 4];
                    case "InvalidInstanceNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListApplicationRevisionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListApplicationRevisionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListApplicationRevisionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListApplicationRevisionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "BucketNameFilterRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#BucketNameFilterRequiredException": return [3 /*break*/, 6];
                    case "InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "InvalidBucketNameFilterException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidBucketNameFilterException": return [3 /*break*/, 10];
                    case "InvalidDeployedStateFilterException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException": return [3 /*break*/, 12];
                    case "InvalidKeyPrefixFilterException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException": return [3 /*break*/, 14];
                    case "InvalidNextTokenException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 16];
                    case "InvalidSortByException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidSortByException": return [3 /*break*/, 18];
                    case "InvalidSortOrderException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#InvalidSortOrderException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSortOrderExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListApplicationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListApplicationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDeploymentConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDeploymentConfigsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDeploymentConfigsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDeploymentConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDeploymentGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDeploymentGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDeploymentGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDeploymentGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 6];
                    case "InvalidNextTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListDeploymentInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDeploymentInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDeploymentInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDeploymentInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "InvalidComputePlatformException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidComputePlatformException": return [3 /*break*/, 8];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "InvalidDeploymentInstanceTypeException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException": return [3 /*break*/, 12];
                    case "InvalidInstanceStatusException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidInstanceStatusException": return [3 /*break*/, 14];
                    case "InvalidInstanceTypeException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidInstanceTypeException": return [3 /*break*/, 16];
                    case "InvalidNextTokenException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 18];
                    case "InvalidTargetFilterNameException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#InvalidTargetFilterNameException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListDeploymentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDeploymentsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDeploymentsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDeploymentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 6];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 8];
                    case "InvalidApplicationNameException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 10];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 12];
                    case "InvalidDeploymentStatusException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException": return [3 /*break*/, 14];
                    case "InvalidExternalIdException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidExternalIdException": return [3 /*break*/, 16];
                    case "InvalidInputException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidInputException": return [3 /*break*/, 18];
                    case "InvalidNextTokenException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 20];
                    case "InvalidTimeRangeException": return [3 /*break*/, 22];
                    case "com.amazonaws.codedeploy#InvalidTimeRangeException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidExternalIdExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListDeploymentTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListDeploymentTargetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListDeploymentTargetsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListDeploymentTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentNotStartedException": return [3 /*break*/, 6];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 8];
                    case "InvalidDeploymentInstanceTypeException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException": return [3 /*break*/, 10];
                    case "InvalidInstanceStatusException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidInstanceStatusException": return [3 /*break*/, 12];
                    case "InvalidInstanceTypeException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidInstanceTypeException": return [3 /*break*/, 14];
                    case "InvalidNextTokenException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListGitHubAccountTokenNamesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListGitHubAccountTokenNamesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "OperationNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#OperationNotSupportedException": return [3 /*break*/, 4];
                    case "ResourceValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#ResourceValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListOnPremisesInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListOnPremisesInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListOnPremisesInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListOnPremisesInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidNextTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InvalidNextTokenException": return [3 /*break*/, 2];
                    case "InvalidRegistrationStatusException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InvalidRegistrationStatusException": return [3 /*break*/, 4];
                    case "InvalidTagFilterException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidTagFilterException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagFilterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsForResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ArnNotSupportedException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ArnNotSupportedException": return [3 /*break*/, 2];
                    case "InvalidArnException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InvalidArnException": return [3 /*break*/, 4];
                    case "ResourceArnRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#ResourceArnRequiredException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 2];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 4];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 6];
                    case "InvalidLifecycleEventHookExecutionIdException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException": return [3 /*break*/, 8];
                    case "InvalidLifecycleEventHookExecutionStatusException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionStatusException": return [3 /*break*/, 10];
                    case "LifecycleEventAlreadyCompletedException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException": return [3 /*break*/, 12];
                    case "UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterApplicationRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterApplicationRevisionCommandError(output, context)];
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
var deserializeAws_json1_1RegisterApplicationRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 4];
                    case "DescriptionTooLongException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DescriptionTooLongException": return [3 /*break*/, 6];
                    case "InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "InvalidRevisionException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidRevisionException": return [3 /*break*/, 10];
                    case "RevisionRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#RevisionRequiredException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterOnPremisesInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(output, context)];
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
var deserializeAws_json1_1RegisterOnPremisesInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IamArnRequiredException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#IamArnRequiredException": return [3 /*break*/, 2];
                    case "IamSessionArnAlreadyRegisteredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException": return [3 /*break*/, 4];
                    case "IamUserArnAlreadyRegisteredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException": return [3 /*break*/, 6];
                    case "IamUserArnRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#IamUserArnRequiredException": return [3 /*break*/, 8];
                    case "InstanceNameAlreadyRegisteredException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException": return [3 /*break*/, 10];
                    case "InstanceNameRequiredException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InstanceNameRequiredException": return [3 /*break*/, 12];
                    case "InvalidIamSessionArnException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#InvalidIamSessionArnException": return [3 /*break*/, 14];
                    case "InvalidIamUserArnException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#InvalidIamUserArnException": return [3 /*break*/, 16];
                    case "InvalidInstanceNameException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 18];
                    case "MultipleIamArnsProvidedException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IamArnRequiredExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1IamUserArnRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidIamSessionArnExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidIamUserArnExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(output, context)];
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
var deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InstanceLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#InstanceLimitExceededException": return [3 /*break*/, 2];
                    case "InstanceNameRequiredException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#InstanceNameRequiredException": return [3 /*break*/, 4];
                    case "InstanceNotRegisteredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#InstanceNotRegisteredException": return [3 /*break*/, 6];
                    case "InvalidInstanceNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidInstanceNameException": return [3 /*break*/, 8];
                    case "InvalidTagException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidTagException": return [3 /*break*/, 10];
                    case "TagLimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#TagLimitExceededException": return [3 /*break*/, 12];
                    case "TagRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#TagRequiredException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(output, context)];
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
var deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentAlreadyCompletedException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException": return [3 /*break*/, 2];
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 6];
                    case "DeploymentNotStartedException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentNotStartedException": return [3 /*break*/, 8];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopDeploymentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopDeploymentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopDeploymentOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopDeploymentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DeploymentAlreadyCompletedException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException": return [3 /*break*/, 2];
                    case "DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException": return [3 /*break*/, 4];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 6];
                    case "DeploymentIdRequiredException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentIdRequiredException": return [3 /*break*/, 8];
                    case "InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidDeploymentIdException": return [3 /*break*/, 10];
                    case "UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1TagResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ArnNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ArnNotSupportedException": return [3 /*break*/, 4];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "InvalidArnException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidArnException": return [3 /*break*/, 10];
                    case "InvalidTagsToAddException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidTagsToAddException": return [3 /*break*/, 12];
                    case "ResourceArnRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#ResourceArnRequiredException": return [3 /*break*/, 14];
                    case "TagRequiredException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#TagRequiredException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1UntagResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 2];
                    case "ArnNotSupportedException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ArnNotSupportedException": return [3 /*break*/, 4];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 6];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 8];
                    case "InvalidArnException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#InvalidArnException": return [3 /*break*/, 10];
                    case "InvalidTagsToAddException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#InvalidTagsToAddException": return [3 /*break*/, 12];
                    case "ResourceArnRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#ResourceArnRequiredException": return [3 /*break*/, 14];
                    case "TagRequiredException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#TagRequiredException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateApplicationCommandError(output, context)];
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
var deserializeAws_json1_1UpdateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ApplicationAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException": return [3 /*break*/, 2];
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 4];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "InvalidApplicationNameException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateDeploymentGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateDeploymentGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateDeploymentGroupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateDeploymentGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, parsedBody, message;
    var _9;
    return __generator(this, function (_10) {
        switch (_10.label) {
            case 0:
                _a = [__assign({}, output)];
                _9 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_9.body = _10.sent(), _9)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AlarmsLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.codedeploy#AlarmsLimitExceededException": return [3 /*break*/, 2];
                    case "ApplicationDoesNotExistException": return [3 /*break*/, 4];
                    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException": return [3 /*break*/, 4];
                    case "ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "com.amazonaws.codedeploy#ApplicationNameRequiredException": return [3 /*break*/, 6];
                    case "DeploymentConfigDoesNotExistException": return [3 /*break*/, 8];
                    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException": return [3 /*break*/, 8];
                    case "DeploymentGroupAlreadyExistsException": return [3 /*break*/, 10];
                    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException": return [3 /*break*/, 10];
                    case "DeploymentGroupDoesNotExistException": return [3 /*break*/, 12];
                    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException": return [3 /*break*/, 12];
                    case "DeploymentGroupNameRequiredException": return [3 /*break*/, 14];
                    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException": return [3 /*break*/, 14];
                    case "ECSServiceMappingLimitExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException": return [3 /*break*/, 16];
                    case "InvalidAlarmConfigException": return [3 /*break*/, 18];
                    case "com.amazonaws.codedeploy#InvalidAlarmConfigException": return [3 /*break*/, 18];
                    case "InvalidApplicationNameException": return [3 /*break*/, 20];
                    case "com.amazonaws.codedeploy#InvalidApplicationNameException": return [3 /*break*/, 20];
                    case "InvalidAutoRollbackConfigException": return [3 /*break*/, 22];
                    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException": return [3 /*break*/, 22];
                    case "InvalidAutoScalingGroupException": return [3 /*break*/, 24];
                    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException": return [3 /*break*/, 24];
                    case "InvalidBlueGreenDeploymentConfigurationException": return [3 /*break*/, 26];
                    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException": return [3 /*break*/, 26];
                    case "InvalidDeploymentConfigNameException": return [3 /*break*/, 28];
                    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException": return [3 /*break*/, 28];
                    case "InvalidDeploymentGroupNameException": return [3 /*break*/, 30];
                    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException": return [3 /*break*/, 30];
                    case "InvalidDeploymentStyleException": return [3 /*break*/, 32];
                    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException": return [3 /*break*/, 32];
                    case "InvalidEC2TagCombinationException": return [3 /*break*/, 34];
                    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException": return [3 /*break*/, 34];
                    case "InvalidEC2TagException": return [3 /*break*/, 36];
                    case "com.amazonaws.codedeploy#InvalidEC2TagException": return [3 /*break*/, 36];
                    case "InvalidECSServiceException": return [3 /*break*/, 38];
                    case "com.amazonaws.codedeploy#InvalidECSServiceException": return [3 /*break*/, 38];
                    case "InvalidInputException": return [3 /*break*/, 40];
                    case "com.amazonaws.codedeploy#InvalidInputException": return [3 /*break*/, 40];
                    case "InvalidLoadBalancerInfoException": return [3 /*break*/, 42];
                    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException": return [3 /*break*/, 42];
                    case "InvalidOnPremisesTagCombinationException": return [3 /*break*/, 44];
                    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException": return [3 /*break*/, 44];
                    case "InvalidRoleException": return [3 /*break*/, 46];
                    case "com.amazonaws.codedeploy#InvalidRoleException": return [3 /*break*/, 46];
                    case "InvalidTagException": return [3 /*break*/, 48];
                    case "com.amazonaws.codedeploy#InvalidTagException": return [3 /*break*/, 48];
                    case "InvalidTargetGroupPairException": return [3 /*break*/, 50];
                    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException": return [3 /*break*/, 50];
                    case "InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 52];
                    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException": return [3 /*break*/, 52];
                    case "InvalidTriggerConfigException": return [3 /*break*/, 54];
                    case "com.amazonaws.codedeploy#InvalidTriggerConfigException": return [3 /*break*/, 54];
                    case "LifecycleHookLimitExceededException": return [3 /*break*/, 56];
                    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException": return [3 /*break*/, 56];
                    case "TagSetListLimitExceededException": return [3 /*break*/, 58];
                    case "com.amazonaws.codedeploy#TagSetListLimitExceededException": return [3 /*break*/, 58];
                    case "ThrottlingException": return [3 /*break*/, 60];
                    case "com.amazonaws.codedeploy#ThrottlingException": return [3 /*break*/, 60];
                    case "TriggerTargetsLimitExceededException": return [3 /*break*/, 62];
                    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException": return [3 /*break*/, 62];
                }
                return [3 /*break*/, 64];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 50:
                _2 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context)];
            case 51:
                response = __assign.apply(void 0, [__assign.apply(void 0, _2.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 52:
                _3 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)];
            case 53:
                response = __assign.apply(void 0, [__assign.apply(void 0, _3.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 54:
                _4 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context)];
            case 55:
                response = __assign.apply(void 0, [__assign.apply(void 0, _4.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 56:
                _5 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context)];
            case 57:
                response = __assign.apply(void 0, [__assign.apply(void 0, _5.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 58:
                _6 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context)];
            case 59:
                response = __assign.apply(void 0, [__assign.apply(void 0, _6.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 60:
                _7 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)];
            case 61:
                response = __assign.apply(void 0, [__assign.apply(void 0, _7.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 62:
                _8 = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context)];
            case 63:
                response = __assign.apply(void 0, [__assign.apply(void 0, _8.concat([(_10.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 65];
            case 64:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _10.label = 65;
            case 65:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_1AlarmsLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AlarmsLimitExceededException(body, context);
        contents = __assign({ name: "AlarmsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ApplicationAlreadyExistsException(body, context);
        contents = __assign({ name: "ApplicationAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ApplicationDoesNotExistException(body, context);
        contents = __assign({ name: "ApplicationDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ApplicationLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ApplicationLimitExceededException(body, context);
        contents = __assign({ name: "ApplicationLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ApplicationNameRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ApplicationNameRequiredException(body, context);
        contents = __assign({ name: "ApplicationNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ArnNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ArnNotSupportedException(body, context);
        contents = __assign({ name: "ArnNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BatchLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BatchLimitExceededException(body, context);
        contents = __assign({ name: "BatchLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BucketNameFilterRequiredException(body, context);
        contents = __assign({ name: "BucketNameFilterRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentAlreadyCompletedException(body, context);
        contents = __assign({ name: "DeploymentAlreadyCompletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentConfigAlreadyExistsException(body, context);
        contents = __assign({ name: "DeploymentConfigAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentConfigDoesNotExistException(body, context);
        contents = __assign({ name: "DeploymentConfigDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentConfigInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentConfigInUseException(body, context);
        contents = __assign({ name: "DeploymentConfigInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentConfigLimitExceededException(body, context);
        contents = __assign({ name: "DeploymentConfigLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentConfigNameRequiredException(body, context);
        contents = __assign({ name: "DeploymentConfigNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentDoesNotExistException(body, context);
        contents = __assign({ name: "DeploymentDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentGroupAlreadyExistsException(body, context);
        contents = __assign({ name: "DeploymentGroupAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentGroupDoesNotExistException(body, context);
        contents = __assign({ name: "DeploymentGroupDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentGroupLimitExceededException(body, context);
        contents = __assign({ name: "DeploymentGroupLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentGroupNameRequiredException(body, context);
        contents = __assign({ name: "DeploymentGroupNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentIdRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentIdRequiredException(body, context);
        contents = __assign({ name: "DeploymentIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentIsNotInReadyStateException(body, context);
        contents = __assign({ name: "DeploymentIsNotInReadyStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentLimitExceededException(body, context);
        contents = __assign({ name: "DeploymentLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentNotStartedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentNotStartedException(body, context);
        contents = __assign({ name: "DeploymentNotStartedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentTargetDoesNotExistException(body, context);
        contents = __assign({ name: "DeploymentTargetDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentTargetIdRequiredException(body, context);
        contents = __assign({ name: "DeploymentTargetIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DeploymentTargetListSizeExceededException(body, context);
        contents = __assign({ name: "DeploymentTargetListSizeExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1DescriptionTooLongExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1DescriptionTooLongException(body, context);
        contents = __assign({ name: "DescriptionTooLongException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ECSServiceMappingLimitExceededException(body, context);
        contents = __assign({ name: "ECSServiceMappingLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1GitHubAccountTokenDoesNotExistException(body, context);
        contents = __assign({ name: "GitHubAccountTokenDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1GitHubAccountTokenNameRequiredException(body, context);
        contents = __assign({ name: "GitHubAccountTokenNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IamArnRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IamArnRequiredException(body, context);
        contents = __assign({ name: "IamArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IamSessionArnAlreadyRegisteredException(body, context);
        contents = __assign({ name: "IamSessionArnAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IamUserArnAlreadyRegisteredException(body, context);
        contents = __assign({ name: "IamUserArnAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1IamUserArnRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1IamUserArnRequiredException(body, context);
        contents = __assign({ name: "IamUserArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InstanceDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InstanceDoesNotExistException(body, context);
        contents = __assign({ name: "InstanceDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InstanceIdRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InstanceIdRequiredException(body, context);
        contents = __assign({ name: "InstanceIdRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InstanceLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InstanceLimitExceededException(body, context);
        contents = __assign({ name: "InstanceLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InstanceNameAlreadyRegisteredException(body, context);
        contents = __assign({ name: "InstanceNameAlreadyRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InstanceNameRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InstanceNameRequiredException(body, context);
        contents = __assign({ name: "InstanceNameRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InstanceNotRegisteredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InstanceNotRegisteredException(body, context);
        contents = __assign({ name: "InstanceNotRegisteredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidAlarmConfigExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidAlarmConfigException(body, context);
        contents = __assign({ name: "InvalidAlarmConfigException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidApplicationNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidApplicationNameException(body, context);
        contents = __assign({ name: "InvalidApplicationNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidArnException(body, context);
        contents = __assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidAutoRollbackConfigException(body, context);
        contents = __assign({ name: "InvalidAutoRollbackConfigException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidAutoScalingGroupException(body, context);
        contents = __assign({ name: "InvalidAutoScalingGroupException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException(body, context);
        contents = __assign({ name: "InvalidBlueGreenDeploymentConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidBucketNameFilterException(body, context);
        contents = __assign({ name: "InvalidBucketNameFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidComputePlatformExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidComputePlatformException(body, context);
        contents = __assign({ name: "InvalidComputePlatformException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeployedStateFilterException(body, context);
        contents = __assign({ name: "InvalidDeployedStateFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentConfigNameException(body, context);
        contents = __assign({ name: "InvalidDeploymentConfigNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentGroupNameException(body, context);
        contents = __assign({ name: "InvalidDeploymentGroupNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentIdException(body, context);
        contents = __assign({ name: "InvalidDeploymentIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentInstanceTypeException(body, context);
        contents = __assign({ name: "InvalidDeploymentInstanceTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentStatusException(body, context);
        contents = __assign({ name: "InvalidDeploymentStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentStyleException(body, context);
        contents = __assign({ name: "InvalidDeploymentStyleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentTargetIdException(body, context);
        contents = __assign({ name: "InvalidDeploymentTargetIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidDeploymentWaitTypeException(body, context);
        contents = __assign({ name: "InvalidDeploymentWaitTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidEC2TagCombinationException(body, context);
        contents = __assign({ name: "InvalidEC2TagCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidEC2TagExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidEC2TagException(body, context);
        contents = __assign({ name: "InvalidEC2TagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidECSServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidECSServiceException(body, context);
        contents = __assign({ name: "InvalidECSServiceException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidExternalIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidExternalIdException(body, context);
        contents = __assign({ name: "InvalidExternalIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidFileExistsBehaviorException(body, context);
        contents = __assign({ name: "InvalidFileExistsBehaviorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidGitHubAccountTokenException(body, context);
        contents = __assign({ name: "InvalidGitHubAccountTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidGitHubAccountTokenNameException(body, context);
        contents = __assign({ name: "InvalidGitHubAccountTokenNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidIamSessionArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidIamSessionArnException(body, context);
        contents = __assign({ name: "InvalidIamSessionArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidIamUserArnExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidIamUserArnException(body, context);
        contents = __assign({ name: "InvalidIamUserArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException(body, context);
        contents = __assign({ name: "InvalidIgnoreApplicationStopFailuresValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInputExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInputException(body, context);
        contents = __assign({ name: "InvalidInputException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInstanceNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInstanceNameException(body, context);
        contents = __assign({ name: "InvalidInstanceNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInstanceStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInstanceStatusException(body, context);
        contents = __assign({ name: "InvalidInstanceStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidInstanceTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidInstanceTypeException(body, context);
        contents = __assign({ name: "InvalidInstanceTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidKeyPrefixFilterException(body, context);
        contents = __assign({ name: "InvalidKeyPrefixFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException(body, context);
        contents = __assign({ name: "InvalidLifecycleEventHookExecutionIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException(body, context);
        contents = __assign({ name: "InvalidLifecycleEventHookExecutionStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidLoadBalancerInfoException(body, context);
        contents = __assign({ name: "InvalidLoadBalancerInfoException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidMinimumHealthyHostValueException(body, context);
        contents = __assign({ name: "InvalidMinimumHealthyHostValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidNextTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
        contents = __assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidOnPremisesTagCombinationException(body, context);
        contents = __assign({ name: "InvalidOnPremisesTagCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
        contents = __assign({ name: "InvalidOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRegistrationStatusException(body, context);
        contents = __assign({ name: "InvalidRegistrationStatusException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRevisionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRevisionException(body, context);
        contents = __assign({ name: "InvalidRevisionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRoleExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
        contents = __assign({ name: "InvalidRoleException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSortByExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSortByException(body, context);
        contents = __assign({ name: "InvalidSortByException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSortOrderExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSortOrderException(body, context);
        contents = __assign({ name: "InvalidSortOrderException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTagExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTagException(body, context);
        contents = __assign({ name: "InvalidTagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTagFilterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTagFilterException(body, context);
        contents = __assign({ name: "InvalidTagFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTagsToAddExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTagsToAddException(body, context);
        contents = __assign({ name: "InvalidTagsToAddException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTargetFilterNameException(body, context);
        contents = __assign({ name: "InvalidTargetFilterNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTargetGroupPairException(body, context);
        contents = __assign({ name: "InvalidTargetGroupPairException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTargetInstancesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTargetInstancesException(body, context);
        contents = __assign({ name: "InvalidTargetInstancesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTimeRangeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
        contents = __assign({ name: "InvalidTimeRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTrafficRoutingConfigurationException(body, context);
        contents = __assign({ name: "InvalidTrafficRoutingConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidTriggerConfigExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidTriggerConfigException(body, context);
        contents = __assign({ name: "InvalidTriggerConfigException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException(body, context);
        contents = __assign({ name: "InvalidUpdateOutdatedInstancesOnlyValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LifecycleEventAlreadyCompletedException(body, context);
        contents = __assign({ name: "LifecycleEventAlreadyCompletedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LifecycleHookLimitExceededException(body, context);
        contents = __assign({ name: "LifecycleHookLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MultipleIamArnsProvidedException(body, context);
        contents = __assign({ name: "MultipleIamArnsProvidedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1OperationNotSupportedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
        contents = __assign({ name: "OperationNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceArnRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceArnRequiredException(body, context);
        contents = __assign({ name: "ResourceArnRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceValidationException(body, context);
        contents = __assign({ name: "ResourceValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1RevisionDoesNotExistExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RevisionDoesNotExistException(body, context);
        contents = __assign({ name: "RevisionDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1RevisionRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RevisionRequiredException(body, context);
        contents = __assign({ name: "RevisionRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1RoleRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1RoleRequiredException(body, context);
        contents = __assign({ name: "RoleRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
        contents = __assign({ name: "TagLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagRequiredExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagRequiredException(body, context);
        contents = __assign({ name: "TagRequiredException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagSetListLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagSetListLimitExceededException(body, context);
        contents = __assign({ name: "TagSetListLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ThrottlingException(body, context);
        contents = __assign({ name: "ThrottlingException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TriggerTargetsLimitExceededException(body, context);
        contents = __assign({ name: "TriggerTargetsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedActionForDeploymentTypeException(body, context);
        contents = __assign({ name: "UnsupportedActionForDeploymentTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddTagsToOnPremisesInstancesInput = function (input, context) {
    return __assign(__assign({}, (input.instanceNames !== undefined &&
        input.instanceNames !== null && {
        instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1Alarm = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1AlarmConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.alarms !== undefined &&
        input.alarms !== null && { alarms: serializeAws_json1_1AlarmList(input.alarms, context) })), (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled })), (input.ignorePollAlarmFailure !== undefined &&
        input.ignorePollAlarmFailure !== null && { ignorePollAlarmFailure: input.ignorePollAlarmFailure }));
};
var serializeAws_json1_1AlarmList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Alarm(entry, context);
    });
};
var serializeAws_json1_1ApplicationsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AppSpecContent = function (input, context) {
    return __assign(__assign({}, (input.content !== undefined && input.content !== null && { content: input.content })), (input.sha256 !== undefined && input.sha256 !== null && { sha256: input.sha256 }));
};
var serializeAws_json1_1AutoRollbackConfiguration = function (input, context) {
    return __assign(__assign({}, (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled })), (input.events !== undefined &&
        input.events !== null && { events: serializeAws_json1_1AutoRollbackEventsList(input.events, context) }));
};
var serializeAws_json1_1AutoRollbackEventsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1AutoScalingGroupNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1BatchGetApplicationRevisionsInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.revisions !== undefined &&
        input.revisions !== null && { revisions: serializeAws_json1_1RevisionLocationList(input.revisions, context) }));
};
var serializeAws_json1_1BatchGetApplicationsInput = function (input, context) {
    return __assign({}, (input.applicationNames !== undefined &&
        input.applicationNames !== null && {
        applicationNames: serializeAws_json1_1ApplicationsList(input.applicationNames, context),
    }));
};
var serializeAws_json1_1BatchGetDeploymentGroupsInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.deploymentGroupNames !== undefined &&
        input.deploymentGroupNames !== null && {
        deploymentGroupNames: serializeAws_json1_1DeploymentGroupsList(input.deploymentGroupNames, context),
    }));
};
var serializeAws_json1_1BatchGetDeploymentInstancesInput = function (input, context) {
    return __assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.instanceIds !== undefined &&
        input.instanceIds !== null && { instanceIds: serializeAws_json1_1InstancesList(input.instanceIds, context) }));
};
var serializeAws_json1_1BatchGetDeploymentsInput = function (input, context) {
    return __assign({}, (input.deploymentIds !== undefined &&
        input.deploymentIds !== null && {
        deploymentIds: serializeAws_json1_1DeploymentsList(input.deploymentIds, context),
    }));
};
var serializeAws_json1_1BatchGetDeploymentTargetsInput = function (input, context) {
    return __assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.targetIds !== undefined &&
        input.targetIds !== null && { targetIds: serializeAws_json1_1TargetIdList(input.targetIds, context) }));
};
var serializeAws_json1_1BatchGetOnPremisesInstancesInput = function (input, context) {
    return __assign({}, (input.instanceNames !== undefined &&
        input.instanceNames !== null && {
        instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
    }));
};
var serializeAws_json1_1BlueGreenDeploymentConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.deploymentReadyOption !== undefined &&
        input.deploymentReadyOption !== null && {
        deploymentReadyOption: serializeAws_json1_1DeploymentReadyOption(input.deploymentReadyOption, context),
    })), (input.greenFleetProvisioningOption !== undefined &&
        input.greenFleetProvisioningOption !== null && {
        greenFleetProvisioningOption: serializeAws_json1_1GreenFleetProvisioningOption(input.greenFleetProvisioningOption, context),
    })), (input.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
        input.terminateBlueInstancesOnDeploymentSuccess !== null && {
        terminateBlueInstancesOnDeploymentSuccess: serializeAws_json1_1BlueInstanceTerminationOption(input.terminateBlueInstancesOnDeploymentSuccess, context),
    }));
};
var serializeAws_json1_1BlueInstanceTerminationOption = function (input, context) {
    return __assign(__assign({}, (input.action !== undefined && input.action !== null && { action: input.action })), (input.terminationWaitTimeInMinutes !== undefined &&
        input.terminationWaitTimeInMinutes !== null && {
        terminationWaitTimeInMinutes: input.terminationWaitTimeInMinutes,
    }));
};
var serializeAws_json1_1ContinueDeploymentInput = function (input, context) {
    return __assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.deploymentWaitType !== undefined &&
        input.deploymentWaitType !== null && { deploymentWaitType: input.deploymentWaitType }));
};
var serializeAws_json1_1CreateApplicationInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.computePlatform !== undefined &&
        input.computePlatform !== null && { computePlatform: input.computePlatform })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1CreateDeploymentConfigInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.computePlatform !== undefined &&
        input.computePlatform !== null && { computePlatform: input.computePlatform })), (input.deploymentConfigName !== undefined &&
        input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName })), (input.minimumHealthyHosts !== undefined &&
        input.minimumHealthyHosts !== null && {
        minimumHealthyHosts: serializeAws_json1_1MinimumHealthyHosts(input.minimumHealthyHosts, context),
    })), (input.trafficRoutingConfig !== undefined &&
        input.trafficRoutingConfig !== null && {
        trafficRoutingConfig: serializeAws_json1_1TrafficRoutingConfig(input.trafficRoutingConfig, context),
    }));
};
var serializeAws_json1_1CreateDeploymentGroupInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.alarmConfiguration !== undefined &&
        input.alarmConfiguration !== null && {
        alarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context),
    })), (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.autoRollbackConfiguration !== undefined &&
        input.autoRollbackConfiguration !== null && {
        autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
    })), (input.autoScalingGroups !== undefined &&
        input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
    })), (input.blueGreenDeploymentConfiguration !== undefined &&
        input.blueGreenDeploymentConfiguration !== null && {
        blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(input.blueGreenDeploymentConfiguration, context),
    })), (input.deploymentConfigName !== undefined &&
        input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName })), (input.deploymentGroupName !== undefined &&
        input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName })), (input.deploymentStyle !== undefined &&
        input.deploymentStyle !== null && {
        deploymentStyle: serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context),
    })), (input.ec2TagFilters !== undefined &&
        input.ec2TagFilters !== null && {
        ec2TagFilters: serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context),
    })), (input.ec2TagSet !== undefined &&
        input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) })), (input.ecsServices !== undefined &&
        input.ecsServices !== null && { ecsServices: serializeAws_json1_1ECSServiceList(input.ecsServices, context) })), (input.loadBalancerInfo !== undefined &&
        input.loadBalancerInfo !== null && {
        loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context),
    })), (input.onPremisesInstanceTagFilters !== undefined &&
        input.onPremisesInstanceTagFilters !== null && {
        onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context),
    })), (input.onPremisesTagSet !== undefined &&
        input.onPremisesTagSet !== null && {
        onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context),
    })), (input.outdatedInstancesStrategy !== undefined &&
        input.outdatedInstancesStrategy !== null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy })), (input.serviceRoleArn !== undefined &&
        input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) })), (input.triggerConfigurations !== undefined &&
        input.triggerConfigurations !== null && {
        triggerConfigurations: serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context),
    }));
};
var serializeAws_json1_1CreateDeploymentInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.autoRollbackConfiguration !== undefined &&
        input.autoRollbackConfiguration !== null && {
        autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
    })), (input.deploymentConfigName !== undefined &&
        input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName })), (input.deploymentGroupName !== undefined &&
        input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.fileExistsBehavior !== undefined &&
        input.fileExistsBehavior !== null && { fileExistsBehavior: input.fileExistsBehavior })), (input.ignoreApplicationStopFailures !== undefined &&
        input.ignoreApplicationStopFailures !== null && {
        ignoreApplicationStopFailures: input.ignoreApplicationStopFailures,
    })), (input.revision !== undefined &&
        input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) })), (input.targetInstances !== undefined &&
        input.targetInstances !== null && {
        targetInstances: serializeAws_json1_1TargetInstances(input.targetInstances, context),
    })), (input.updateOutdatedInstancesOnly !== undefined &&
        input.updateOutdatedInstancesOnly !== null && { updateOutdatedInstancesOnly: input.updateOutdatedInstancesOnly }));
};
var serializeAws_json1_1DeleteApplicationInput = function (input, context) {
    return __assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName }));
};
var serializeAws_json1_1DeleteDeploymentConfigInput = function (input, context) {
    return __assign({}, (input.deploymentConfigName !== undefined &&
        input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }));
};
var serializeAws_json1_1DeleteDeploymentGroupInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.deploymentGroupName !== undefined &&
        input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }));
};
var serializeAws_json1_1DeleteGitHubAccountTokenInput = function (input, context) {
    return __assign({}, (input.tokenName !== undefined && input.tokenName !== null && { tokenName: input.tokenName }));
};
var serializeAws_json1_1DeleteResourcesByExternalIdInput = function (input, context) {
    return __assign({}, (input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }));
};
var serializeAws_json1_1DeploymentGroupsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeploymentReadyOption = function (input, context) {
    return __assign(__assign({}, (input.actionOnTimeout !== undefined &&
        input.actionOnTimeout !== null && { actionOnTimeout: input.actionOnTimeout })), (input.waitTimeInMinutes !== undefined &&
        input.waitTimeInMinutes !== null && { waitTimeInMinutes: input.waitTimeInMinutes }));
};
var serializeAws_json1_1DeploymentsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeploymentStatusList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DeploymentStyle = function (input, context) {
    return __assign(__assign({}, (input.deploymentOption !== undefined &&
        input.deploymentOption !== null && { deploymentOption: input.deploymentOption })), (input.deploymentType !== undefined &&
        input.deploymentType !== null && { deploymentType: input.deploymentType }));
};
var serializeAws_json1_1DeregisterOnPremisesInstanceInput = function (input, context) {
    return __assign({}, (input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }));
};
var serializeAws_json1_1EC2TagFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1EC2TagFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EC2TagFilter(entry, context);
    });
};
var serializeAws_json1_1EC2TagSet = function (input, context) {
    return __assign({}, (input.ec2TagSetList !== undefined &&
        input.ec2TagSetList !== null && {
        ec2TagSetList: serializeAws_json1_1EC2TagSetList(input.ec2TagSetList, context),
    }));
};
var serializeAws_json1_1EC2TagSetList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EC2TagFilterList(entry, context);
    });
};
var serializeAws_json1_1ECSService = function (input, context) {
    return __assign(__assign({}, (input.clusterName !== undefined && input.clusterName !== null && { clusterName: input.clusterName })), (input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }));
};
var serializeAws_json1_1ECSServiceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ECSService(entry, context);
    });
};
var serializeAws_json1_1ELBInfo = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1ELBInfoList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ELBInfo(entry, context);
    });
};
var serializeAws_json1_1FilterValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1GetApplicationInput = function (input, context) {
    return __assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName }));
};
var serializeAws_json1_1GetApplicationRevisionInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.revision !== undefined &&
        input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }));
};
var serializeAws_json1_1GetDeploymentConfigInput = function (input, context) {
    return __assign({}, (input.deploymentConfigName !== undefined &&
        input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }));
};
var serializeAws_json1_1GetDeploymentGroupInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.deploymentGroupName !== undefined &&
        input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }));
};
var serializeAws_json1_1GetDeploymentInput = function (input, context) {
    return __assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }));
};
var serializeAws_json1_1GetDeploymentInstanceInput = function (input, context) {
    return __assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.instanceId !== undefined && input.instanceId !== null && { instanceId: input.instanceId }));
};
var serializeAws_json1_1GetDeploymentTargetInput = function (input, context) {
    return __assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.targetId !== undefined && input.targetId !== null && { targetId: input.targetId }));
};
var serializeAws_json1_1GetOnPremisesInstanceInput = function (input, context) {
    return __assign({}, (input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }));
};
var serializeAws_json1_1GitHubLocation = function (input, context) {
    return __assign(__assign({}, (input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId })), (input.repository !== undefined && input.repository !== null && { repository: input.repository }));
};
var serializeAws_json1_1GreenFleetProvisioningOption = function (input, context) {
    return __assign({}, (input.action !== undefined && input.action !== null && { action: input.action }));
};
var serializeAws_json1_1InstanceNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1InstancesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1InstanceStatusList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1InstanceTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ListApplicationRevisionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.deployed !== undefined && input.deployed !== null && { deployed: input.deployed })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket })), (input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix })), (input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy })), (input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }));
};
var serializeAws_json1_1ListApplicationsInput = function (input, context) {
    return __assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDeploymentConfigsInput = function (input, context) {
    return __assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDeploymentGroupsInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDeploymentInstancesInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.instanceStatusFilter !== undefined &&
        input.instanceStatusFilter !== null && {
        instanceStatusFilter: serializeAws_json1_1InstanceStatusList(input.instanceStatusFilter, context),
    })), (input.instanceTypeFilter !== undefined &&
        input.instanceTypeFilter !== null && {
        instanceTypeFilter: serializeAws_json1_1InstanceTypeList(input.instanceTypeFilter, context),
    })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDeploymentsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.createTimeRange !== undefined &&
        input.createTimeRange !== null && {
        createTimeRange: serializeAws_json1_1TimeRange(input.createTimeRange, context),
    })), (input.deploymentGroupName !== undefined &&
        input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName })), (input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId })), (input.includeOnlyStatuses !== undefined &&
        input.includeOnlyStatuses !== null && {
        includeOnlyStatuses: serializeAws_json1_1DeploymentStatusList(input.includeOnlyStatuses, context),
    })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListDeploymentTargetsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.targetFilters !== undefined &&
        input.targetFilters !== null && {
        targetFilters: serializeAws_json1_1TargetFilters(input.targetFilters, context),
    }));
};
var serializeAws_json1_1ListenerArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ListGitHubAccountTokenNamesInput = function (input, context) {
    return __assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListOnPremisesInstancesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.registrationStatus !== undefined &&
        input.registrationStatus !== null && { registrationStatus: input.registrationStatus })), (input.tagFilters !== undefined &&
        input.tagFilters !== null && { tagFilters: serializeAws_json1_1TagFilterList(input.tagFilters, context) }));
};
var serializeAws_json1_1ListTagsForResourceInput = function (input, context) {
    return __assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_1LoadBalancerInfo = function (input, context) {
    return __assign(__assign(__assign({}, (input.elbInfoList !== undefined &&
        input.elbInfoList !== null && { elbInfoList: serializeAws_json1_1ELBInfoList(input.elbInfoList, context) })), (input.targetGroupInfoList !== undefined &&
        input.targetGroupInfoList !== null && {
        targetGroupInfoList: serializeAws_json1_1TargetGroupInfoList(input.targetGroupInfoList, context),
    })), (input.targetGroupPairInfoList !== undefined &&
        input.targetGroupPairInfoList !== null && {
        targetGroupPairInfoList: serializeAws_json1_1TargetGroupPairInfoList(input.targetGroupPairInfoList, context),
    }));
};
var serializeAws_json1_1MinimumHealthyHosts = function (input, context) {
    return __assign(__assign({}, (input.type !== undefined && input.type !== null && { type: input.type })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1OnPremisesTagSet = function (input, context) {
    return __assign({}, (input.onPremisesTagSetList !== undefined &&
        input.onPremisesTagSetList !== null && {
        onPremisesTagSetList: serializeAws_json1_1OnPremisesTagSetList(input.onPremisesTagSetList, context),
    }));
};
var serializeAws_json1_1OnPremisesTagSetList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TagFilterList(entry, context);
    });
};
var serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId })), (input.lifecycleEventHookExecutionId !== undefined &&
        input.lifecycleEventHookExecutionId !== null && {
        lifecycleEventHookExecutionId: input.lifecycleEventHookExecutionId,
    })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1RawString = function (input, context) {
    return __assign(__assign({}, (input.content !== undefined && input.content !== null && { content: input.content })), (input.sha256 !== undefined && input.sha256 !== null && { sha256: input.sha256 }));
};
var serializeAws_json1_1RegisterApplicationRevisionInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.revision !== undefined &&
        input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }));
};
var serializeAws_json1_1RegisterOnPremisesInstanceInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.iamSessionArn !== undefined && input.iamSessionArn !== null && { iamSessionArn: input.iamSessionArn })), (input.iamUserArn !== undefined && input.iamUserArn !== null && { iamUserArn: input.iamUserArn })), (input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }));
};
var serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput = function (input, context) {
    return __assign(__assign({}, (input.instanceNames !== undefined &&
        input.instanceNames !== null && {
        instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }));
};
var serializeAws_json1_1RevisionLocation = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.appSpecContent !== undefined &&
        input.appSpecContent !== null && {
        appSpecContent: serializeAws_json1_1AppSpecContent(input.appSpecContent, context),
    })), (input.gitHubLocation !== undefined &&
        input.gitHubLocation !== null && {
        gitHubLocation: serializeAws_json1_1GitHubLocation(input.gitHubLocation, context),
    })), (input.revisionType !== undefined && input.revisionType !== null && { revisionType: input.revisionType })), (input.s3Location !== undefined &&
        input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) })), (input.string !== undefined &&
        input.string !== null && { string: serializeAws_json1_1RawString(input.string, context) }));
};
var serializeAws_json1_1RevisionLocationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RevisionLocation(entry, context);
    });
};
var serializeAws_json1_1S3Location = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket })), (input.bundleType !== undefined && input.bundleType !== null && { bundleType: input.bundleType })), (input.eTag !== undefined && input.eTag !== null && { eTag: input.eTag })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput = function (input, context) {
    return __assign({}, (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }));
};
var serializeAws_json1_1StopDeploymentInput = function (input, context) {
    return __assign(__assign({}, (input.autoRollbackEnabled !== undefined &&
        input.autoRollbackEnabled !== null && { autoRollbackEnabled: input.autoRollbackEnabled })), (input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }));
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TagFilter(entry, context);
    });
};
var serializeAws_json1_1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var serializeAws_json1_1TagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1TargetFilters = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_1FilterValueList(value, context), _b));
    }, {});
};
var serializeAws_json1_1TargetGroupInfo = function (input, context) {
    return __assign({}, (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1TargetGroupInfoList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetGroupInfo(entry, context);
    });
};
var serializeAws_json1_1TargetGroupPairInfo = function (input, context) {
    return __assign(__assign(__assign({}, (input.prodTrafficRoute !== undefined &&
        input.prodTrafficRoute !== null && {
        prodTrafficRoute: serializeAws_json1_1TrafficRoute(input.prodTrafficRoute, context),
    })), (input.targetGroups !== undefined &&
        input.targetGroups !== null && {
        targetGroups: serializeAws_json1_1TargetGroupInfoList(input.targetGroups, context),
    })), (input.testTrafficRoute !== undefined &&
        input.testTrafficRoute !== null && {
        testTrafficRoute: serializeAws_json1_1TrafficRoute(input.testTrafficRoute, context),
    }));
};
var serializeAws_json1_1TargetGroupPairInfoList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetGroupPairInfo(entry, context);
    });
};
var serializeAws_json1_1TargetIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TargetInstances = function (input, context) {
    return __assign(__assign(__assign({}, (input.autoScalingGroups !== undefined &&
        input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
    })), (input.ec2TagSet !== undefined &&
        input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) })), (input.tagFilters !== undefined &&
        input.tagFilters !== null && { tagFilters: serializeAws_json1_1EC2TagFilterList(input.tagFilters, context) }));
};
var serializeAws_json1_1TimeBasedCanary = function (input, context) {
    return __assign(__assign({}, (input.canaryInterval !== undefined &&
        input.canaryInterval !== null && { canaryInterval: input.canaryInterval })), (input.canaryPercentage !== undefined &&
        input.canaryPercentage !== null && { canaryPercentage: input.canaryPercentage }));
};
var serializeAws_json1_1TimeBasedLinear = function (input, context) {
    return __assign(__assign({}, (input.linearInterval !== undefined &&
        input.linearInterval !== null && { linearInterval: input.linearInterval })), (input.linearPercentage !== undefined &&
        input.linearPercentage !== null && { linearPercentage: input.linearPercentage }));
};
var serializeAws_json1_1TimeRange = function (input, context) {
    return __assign(__assign({}, (input.end !== undefined && input.end !== null && { end: Math.round(input.end.getTime() / 1000) })), (input.start !== undefined && input.start !== null && { start: Math.round(input.start.getTime() / 1000) }));
};
var serializeAws_json1_1TrafficRoute = function (input, context) {
    return __assign({}, (input.listenerArns !== undefined &&
        input.listenerArns !== null && {
        listenerArns: serializeAws_json1_1ListenerArnList(input.listenerArns, context),
    }));
};
var serializeAws_json1_1TrafficRoutingConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.timeBasedCanary !== undefined &&
        input.timeBasedCanary !== null && {
        timeBasedCanary: serializeAws_json1_1TimeBasedCanary(input.timeBasedCanary, context),
    })), (input.timeBasedLinear !== undefined &&
        input.timeBasedLinear !== null && {
        timeBasedLinear: serializeAws_json1_1TimeBasedLinear(input.timeBasedLinear, context),
    })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1TriggerConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.triggerEvents !== undefined &&
        input.triggerEvents !== null && {
        triggerEvents: serializeAws_json1_1TriggerEventTypeList(input.triggerEvents, context),
    })), (input.triggerName !== undefined && input.triggerName !== null && { triggerName: input.triggerName })), (input.triggerTargetArn !== undefined &&
        input.triggerTargetArn !== null && { triggerTargetArn: input.triggerTargetArn }));
};
var serializeAws_json1_1TriggerConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TriggerConfig(entry, context);
    });
};
var serializeAws_json1_1TriggerEventTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1UntagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateApplicationInput = function (input, context) {
    return __assign(__assign({}, (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.newApplicationName !== undefined &&
        input.newApplicationName !== null && { newApplicationName: input.newApplicationName }));
};
var serializeAws_json1_1UpdateDeploymentGroupInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.alarmConfiguration !== undefined &&
        input.alarmConfiguration !== null && {
        alarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context),
    })), (input.applicationName !== undefined &&
        input.applicationName !== null && { applicationName: input.applicationName })), (input.autoRollbackConfiguration !== undefined &&
        input.autoRollbackConfiguration !== null && {
        autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
    })), (input.autoScalingGroups !== undefined &&
        input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
    })), (input.blueGreenDeploymentConfiguration !== undefined &&
        input.blueGreenDeploymentConfiguration !== null && {
        blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(input.blueGreenDeploymentConfiguration, context),
    })), (input.currentDeploymentGroupName !== undefined &&
        input.currentDeploymentGroupName !== null && { currentDeploymentGroupName: input.currentDeploymentGroupName })), (input.deploymentConfigName !== undefined &&
        input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName })), (input.deploymentStyle !== undefined &&
        input.deploymentStyle !== null && {
        deploymentStyle: serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context),
    })), (input.ec2TagFilters !== undefined &&
        input.ec2TagFilters !== null && {
        ec2TagFilters: serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context),
    })), (input.ec2TagSet !== undefined &&
        input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) })), (input.ecsServices !== undefined &&
        input.ecsServices !== null && { ecsServices: serializeAws_json1_1ECSServiceList(input.ecsServices, context) })), (input.loadBalancerInfo !== undefined &&
        input.loadBalancerInfo !== null && {
        loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context),
    })), (input.newDeploymentGroupName !== undefined &&
        input.newDeploymentGroupName !== null && { newDeploymentGroupName: input.newDeploymentGroupName })), (input.onPremisesInstanceTagFilters !== undefined &&
        input.onPremisesInstanceTagFilters !== null && {
        onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context),
    })), (input.onPremisesTagSet !== undefined &&
        input.onPremisesTagSet !== null && {
        onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context),
    })), (input.outdatedInstancesStrategy !== undefined &&
        input.outdatedInstancesStrategy !== null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy })), (input.serviceRoleArn !== undefined &&
        input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn })), (input.triggerConfigurations !== undefined &&
        input.triggerConfigurations !== null && {
        triggerConfigurations: serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context),
    }));
};
var deserializeAws_json1_1Alarm = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1AlarmConfiguration = function (output, context) {
    return {
        alarms: output.alarms !== undefined && output.alarms !== null
            ? deserializeAws_json1_1AlarmList(output.alarms, context)
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        ignorePollAlarmFailure: output.ignorePollAlarmFailure !== undefined && output.ignorePollAlarmFailure !== null
            ? output.ignorePollAlarmFailure
            : undefined,
    };
};
var deserializeAws_json1_1AlarmList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alarm(entry, context);
    });
};
var deserializeAws_json1_1AlarmsLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ApplicationAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ApplicationDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ApplicationInfo = function (output, context) {
    return {
        applicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        computePlatform: output.computePlatform !== undefined && output.computePlatform !== null ? output.computePlatform : undefined,
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        gitHubAccountName: output.gitHubAccountName !== undefined && output.gitHubAccountName !== null
            ? output.gitHubAccountName
            : undefined,
        linkedToGitHub: output.linkedToGitHub !== undefined && output.linkedToGitHub !== null ? output.linkedToGitHub : undefined,
    };
};
var deserializeAws_json1_1ApplicationLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ApplicationNameRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ApplicationsInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationInfo(entry, context);
    });
};
var deserializeAws_json1_1ApplicationsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AppSpecContent = function (output, context) {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        sha256: output.sha256 !== undefined && output.sha256 !== null ? output.sha256 : undefined,
    };
};
var deserializeAws_json1_1ArnNotSupportedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1AutoRollbackConfiguration = function (output, context) {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1AutoRollbackEventsList(output.events, context)
            : undefined,
    };
};
var deserializeAws_json1_1AutoRollbackEventsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AutoScalingGroup = function (output, context) {
    return {
        hook: output.hook !== undefined && output.hook !== null ? output.hook : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1AutoScalingGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutoScalingGroup(entry, context);
    });
};
var deserializeAws_json1_1AutoScalingGroupNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1BatchGetApplicationRevisionsOutput = function (output, context) {
    return {
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        revisions: output.revisions !== undefined && output.revisions !== null
            ? deserializeAws_json1_1RevisionInfoList(output.revisions, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetApplicationsOutput = function (output, context) {
    return {
        applicationsInfo: output.applicationsInfo !== undefined && output.applicationsInfo !== null
            ? deserializeAws_json1_1ApplicationsInfoList(output.applicationsInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetDeploymentGroupsOutput = function (output, context) {
    return {
        deploymentGroupsInfo: output.deploymentGroupsInfo !== undefined && output.deploymentGroupsInfo !== null
            ? deserializeAws_json1_1DeploymentGroupInfoList(output.deploymentGroupsInfo, context)
            : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
var deserializeAws_json1_1BatchGetDeploymentInstancesOutput = function (output, context) {
    return {
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        instancesSummary: output.instancesSummary !== undefined && output.instancesSummary !== null
            ? deserializeAws_json1_1InstanceSummaryList(output.instancesSummary, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetDeploymentsOutput = function (output, context) {
    return {
        deploymentsInfo: output.deploymentsInfo !== undefined && output.deploymentsInfo !== null
            ? deserializeAws_json1_1DeploymentsInfoList(output.deploymentsInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetDeploymentTargetsOutput = function (output, context) {
    return {
        deploymentTargets: output.deploymentTargets !== undefined && output.deploymentTargets !== null
            ? deserializeAws_json1_1DeploymentTargetList(output.deploymentTargets, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchGetOnPremisesInstancesOutput = function (output, context) {
    return {
        instanceInfos: output.instanceInfos !== undefined && output.instanceInfos !== null
            ? deserializeAws_json1_1InstanceInfoList(output.instanceInfos, context)
            : undefined,
    };
};
var deserializeAws_json1_1BatchLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1BlueGreenDeploymentConfiguration = function (output, context) {
    return {
        deploymentReadyOption: output.deploymentReadyOption !== undefined && output.deploymentReadyOption !== null
            ? deserializeAws_json1_1DeploymentReadyOption(output.deploymentReadyOption, context)
            : undefined,
        greenFleetProvisioningOption: output.greenFleetProvisioningOption !== undefined && output.greenFleetProvisioningOption !== null
            ? deserializeAws_json1_1GreenFleetProvisioningOption(output.greenFleetProvisioningOption, context)
            : undefined,
        terminateBlueInstancesOnDeploymentSuccess: output.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
            output.terminateBlueInstancesOnDeploymentSuccess !== null
            ? deserializeAws_json1_1BlueInstanceTerminationOption(output.terminateBlueInstancesOnDeploymentSuccess, context)
            : undefined,
    };
};
var deserializeAws_json1_1BlueInstanceTerminationOption = function (output, context) {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        terminationWaitTimeInMinutes: output.terminationWaitTimeInMinutes !== undefined && output.terminationWaitTimeInMinutes !== null
            ? output.terminationWaitTimeInMinutes
            : undefined,
    };
};
var deserializeAws_json1_1BucketNameFilterRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CloudFormationTarget = function (output, context) {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        lifecycleEvents: output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
            ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
            : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
        targetVersionWeight: output.targetVersionWeight !== undefined && output.targetVersionWeight !== null
            ? output.targetVersionWeight
            : undefined,
    };
};
var deserializeAws_json1_1CreateApplicationOutput = function (output, context) {
    return {
        applicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
    };
};
var deserializeAws_json1_1CreateDeploymentConfigOutput = function (output, context) {
    return {
        deploymentConfigId: output.deploymentConfigId !== undefined && output.deploymentConfigId !== null
            ? output.deploymentConfigId
            : undefined,
    };
};
var deserializeAws_json1_1CreateDeploymentGroupOutput = function (output, context) {
    return {
        deploymentGroupId: output.deploymentGroupId !== undefined && output.deploymentGroupId !== null
            ? output.deploymentGroupId
            : undefined,
    };
};
var deserializeAws_json1_1CreateDeploymentOutput = function (output, context) {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    };
};
var deserializeAws_json1_1DeleteDeploymentGroupOutput = function (output, context) {
    return {
        hooksNotCleanedUp: output.hooksNotCleanedUp !== undefined && output.hooksNotCleanedUp !== null
            ? deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteGitHubAccountTokenOutput = function (output, context) {
    return {
        tokenName: output.tokenName !== undefined && output.tokenName !== null ? output.tokenName : undefined,
    };
};
var deserializeAws_json1_1DeleteResourcesByExternalIdOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DeploymentAlreadyCompletedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigInfo = function (output, context) {
    return {
        computePlatform: output.computePlatform !== undefined && output.computePlatform !== null ? output.computePlatform : undefined,
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        deploymentConfigId: output.deploymentConfigId !== undefined && output.deploymentConfigId !== null
            ? output.deploymentConfigId
            : undefined,
        deploymentConfigName: output.deploymentConfigName !== undefined && output.deploymentConfigName !== null
            ? output.deploymentConfigName
            : undefined,
        minimumHealthyHosts: output.minimumHealthyHosts !== undefined && output.minimumHealthyHosts !== null
            ? deserializeAws_json1_1MinimumHealthyHosts(output.minimumHealthyHosts, context)
            : undefined,
        trafficRoutingConfig: output.trafficRoutingConfig !== undefined && output.trafficRoutingConfig !== null
            ? deserializeAws_json1_1TrafficRoutingConfig(output.trafficRoutingConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigNameRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfigsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeploymentDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentGroupAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentGroupDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentGroupInfo = function (output, context) {
    return {
        alarmConfiguration: output.alarmConfiguration !== undefined && output.alarmConfiguration !== null
            ? deserializeAws_json1_1AlarmConfiguration(output.alarmConfiguration, context)
            : undefined,
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        autoRollbackConfiguration: output.autoRollbackConfiguration !== undefined && output.autoRollbackConfiguration !== null
            ? deserializeAws_json1_1AutoRollbackConfiguration(output.autoRollbackConfiguration, context)
            : undefined,
        autoScalingGroups: output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
            ? deserializeAws_json1_1AutoScalingGroupList(output.autoScalingGroups, context)
            : undefined,
        blueGreenDeploymentConfiguration: output.blueGreenDeploymentConfiguration !== undefined && output.blueGreenDeploymentConfiguration !== null
            ? deserializeAws_json1_1BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context)
            : undefined,
        computePlatform: output.computePlatform !== undefined && output.computePlatform !== null ? output.computePlatform : undefined,
        deploymentConfigName: output.deploymentConfigName !== undefined && output.deploymentConfigName !== null
            ? output.deploymentConfigName
            : undefined,
        deploymentGroupId: output.deploymentGroupId !== undefined && output.deploymentGroupId !== null
            ? output.deploymentGroupId
            : undefined,
        deploymentGroupName: output.deploymentGroupName !== undefined && output.deploymentGroupName !== null
            ? output.deploymentGroupName
            : undefined,
        deploymentStyle: output.deploymentStyle !== undefined && output.deploymentStyle !== null
            ? deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context)
            : undefined,
        ec2TagFilters: output.ec2TagFilters !== undefined && output.ec2TagFilters !== null
            ? deserializeAws_json1_1EC2TagFilterList(output.ec2TagFilters, context)
            : undefined,
        ec2TagSet: output.ec2TagSet !== undefined && output.ec2TagSet !== null
            ? deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context)
            : undefined,
        ecsServices: output.ecsServices !== undefined && output.ecsServices !== null
            ? deserializeAws_json1_1ECSServiceList(output.ecsServices, context)
            : undefined,
        lastAttemptedDeployment: output.lastAttemptedDeployment !== undefined && output.lastAttemptedDeployment !== null
            ? deserializeAws_json1_1LastDeploymentInfo(output.lastAttemptedDeployment, context)
            : undefined,
        lastSuccessfulDeployment: output.lastSuccessfulDeployment !== undefined && output.lastSuccessfulDeployment !== null
            ? deserializeAws_json1_1LastDeploymentInfo(output.lastSuccessfulDeployment, context)
            : undefined,
        loadBalancerInfo: output.loadBalancerInfo !== undefined && output.loadBalancerInfo !== null
            ? deserializeAws_json1_1LoadBalancerInfo(output.loadBalancerInfo, context)
            : undefined,
        onPremisesInstanceTagFilters: output.onPremisesInstanceTagFilters !== undefined && output.onPremisesInstanceTagFilters !== null
            ? deserializeAws_json1_1TagFilterList(output.onPremisesInstanceTagFilters, context)
            : undefined,
        onPremisesTagSet: output.onPremisesTagSet !== undefined && output.onPremisesTagSet !== null
            ? deserializeAws_json1_1OnPremisesTagSet(output.onPremisesTagSet, context)
            : undefined,
        outdatedInstancesStrategy: output.outdatedInstancesStrategy !== undefined && output.outdatedInstancesStrategy !== null
            ? output.outdatedInstancesStrategy
            : undefined,
        serviceRoleArn: output.serviceRoleArn !== undefined && output.serviceRoleArn !== null ? output.serviceRoleArn : undefined,
        targetRevision: output.targetRevision !== undefined && output.targetRevision !== null
            ? deserializeAws_json1_1RevisionLocation(output.targetRevision, context)
            : undefined,
        triggerConfigurations: output.triggerConfigurations !== undefined && output.triggerConfigurations !== null
            ? deserializeAws_json1_1TriggerConfigList(output.triggerConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentGroupInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeploymentGroupInfo(entry, context);
    });
};
var deserializeAws_json1_1DeploymentGroupLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentGroupNameRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentGroupsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeploymentIdRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentInfo = function (output, context) {
    return {
        additionalDeploymentStatusInfo: output.additionalDeploymentStatusInfo !== undefined && output.additionalDeploymentStatusInfo !== null
            ? output.additionalDeploymentStatusInfo
            : undefined,
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        autoRollbackConfiguration: output.autoRollbackConfiguration !== undefined && output.autoRollbackConfiguration !== null
            ? deserializeAws_json1_1AutoRollbackConfiguration(output.autoRollbackConfiguration, context)
            : undefined,
        blueGreenDeploymentConfiguration: output.blueGreenDeploymentConfiguration !== undefined && output.blueGreenDeploymentConfiguration !== null
            ? deserializeAws_json1_1BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context)
            : undefined,
        completeTime: output.completeTime !== undefined && output.completeTime !== null
            ? new Date(Math.round(output.completeTime * 1000))
            : undefined,
        computePlatform: output.computePlatform !== undefined && output.computePlatform !== null ? output.computePlatform : undefined,
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        creator: output.creator !== undefined && output.creator !== null ? output.creator : undefined,
        deploymentConfigName: output.deploymentConfigName !== undefined && output.deploymentConfigName !== null
            ? output.deploymentConfigName
            : undefined,
        deploymentGroupName: output.deploymentGroupName !== undefined && output.deploymentGroupName !== null
            ? output.deploymentGroupName
            : undefined,
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        deploymentOverview: output.deploymentOverview !== undefined && output.deploymentOverview !== null
            ? deserializeAws_json1_1DeploymentOverview(output.deploymentOverview, context)
            : undefined,
        deploymentStatusMessages: output.deploymentStatusMessages !== undefined && output.deploymentStatusMessages !== null
            ? deserializeAws_json1_1DeploymentStatusMessageList(output.deploymentStatusMessages, context)
            : undefined,
        deploymentStyle: output.deploymentStyle !== undefined && output.deploymentStyle !== null
            ? deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        errorInformation: output.errorInformation !== undefined && output.errorInformation !== null
            ? deserializeAws_json1_1ErrorInformation(output.errorInformation, context)
            : undefined,
        externalId: output.externalId !== undefined && output.externalId !== null ? output.externalId : undefined,
        fileExistsBehavior: output.fileExistsBehavior !== undefined && output.fileExistsBehavior !== null
            ? output.fileExistsBehavior
            : undefined,
        ignoreApplicationStopFailures: output.ignoreApplicationStopFailures !== undefined && output.ignoreApplicationStopFailures !== null
            ? output.ignoreApplicationStopFailures
            : undefined,
        instanceTerminationWaitTimeStarted: output.instanceTerminationWaitTimeStarted !== undefined && output.instanceTerminationWaitTimeStarted !== null
            ? output.instanceTerminationWaitTimeStarted
            : undefined,
        loadBalancerInfo: output.loadBalancerInfo !== undefined && output.loadBalancerInfo !== null
            ? deserializeAws_json1_1LoadBalancerInfo(output.loadBalancerInfo, context)
            : undefined,
        previousRevision: output.previousRevision !== undefined && output.previousRevision !== null
            ? deserializeAws_json1_1RevisionLocation(output.previousRevision, context)
            : undefined,
        relatedDeployments: output.relatedDeployments !== undefined && output.relatedDeployments !== null
            ? deserializeAws_json1_1RelatedDeployments(output.relatedDeployments, context)
            : undefined,
        revision: output.revision !== undefined && output.revision !== null
            ? deserializeAws_json1_1RevisionLocation(output.revision, context)
            : undefined,
        rollbackInfo: output.rollbackInfo !== undefined && output.rollbackInfo !== null
            ? deserializeAws_json1_1RollbackInfo(output.rollbackInfo, context)
            : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetInstances: output.targetInstances !== undefined && output.targetInstances !== null
            ? deserializeAws_json1_1TargetInstances(output.targetInstances, context)
            : undefined,
        updateOutdatedInstancesOnly: output.updateOutdatedInstancesOnly !== undefined && output.updateOutdatedInstancesOnly !== null
            ? output.updateOutdatedInstancesOnly
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentIsNotInReadyStateException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentNotStartedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentOverview = function (output, context) {
    return {
        Failed: output.Failed !== undefined && output.Failed !== null ? output.Failed : undefined,
        InProgress: output.InProgress !== undefined && output.InProgress !== null ? output.InProgress : undefined,
        Pending: output.Pending !== undefined && output.Pending !== null ? output.Pending : undefined,
        Ready: output.Ready !== undefined && output.Ready !== null ? output.Ready : undefined,
        Skipped: output.Skipped !== undefined && output.Skipped !== null ? output.Skipped : undefined,
        Succeeded: output.Succeeded !== undefined && output.Succeeded !== null ? output.Succeeded : undefined,
    };
};
var deserializeAws_json1_1DeploymentReadyOption = function (output, context) {
    return {
        actionOnTimeout: output.actionOnTimeout !== undefined && output.actionOnTimeout !== null ? output.actionOnTimeout : undefined,
        waitTimeInMinutes: output.waitTimeInMinutes !== undefined && output.waitTimeInMinutes !== null
            ? output.waitTimeInMinutes
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentsInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeploymentInfo(entry, context);
    });
};
var deserializeAws_json1_1DeploymentsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeploymentStatusMessageList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DeploymentStyle = function (output, context) {
    return {
        deploymentOption: output.deploymentOption !== undefined && output.deploymentOption !== null ? output.deploymentOption : undefined,
        deploymentType: output.deploymentType !== undefined && output.deploymentType !== null ? output.deploymentType : undefined,
    };
};
var deserializeAws_json1_1DeploymentTarget = function (output, context) {
    return {
        cloudFormationTarget: output.cloudFormationTarget !== undefined && output.cloudFormationTarget !== null
            ? deserializeAws_json1_1CloudFormationTarget(output.cloudFormationTarget, context)
            : undefined,
        deploymentTargetType: output.deploymentTargetType !== undefined && output.deploymentTargetType !== null
            ? output.deploymentTargetType
            : undefined,
        ecsTarget: output.ecsTarget !== undefined && output.ecsTarget !== null
            ? deserializeAws_json1_1ECSTarget(output.ecsTarget, context)
            : undefined,
        instanceTarget: output.instanceTarget !== undefined && output.instanceTarget !== null
            ? deserializeAws_json1_1InstanceTarget(output.instanceTarget, context)
            : undefined,
        lambdaTarget: output.lambdaTarget !== undefined && output.lambdaTarget !== null
            ? deserializeAws_json1_1LambdaTarget(output.lambdaTarget, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentTargetDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentTargetIdRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DeploymentTargetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeploymentTarget(entry, context);
    });
};
var deserializeAws_json1_1DeploymentTargetListSizeExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1DescriptionTooLongException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Diagnostics = function (output, context) {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        logTail: output.logTail !== undefined && output.logTail !== null ? output.logTail : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        scriptName: output.scriptName !== undefined && output.scriptName !== null ? output.scriptName : undefined,
    };
};
var deserializeAws_json1_1EC2TagFilter = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1EC2TagFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EC2TagFilter(entry, context);
    });
};
var deserializeAws_json1_1EC2TagSet = function (output, context) {
    return {
        ec2TagSetList: output.ec2TagSetList !== undefined && output.ec2TagSetList !== null
            ? deserializeAws_json1_1EC2TagSetList(output.ec2TagSetList, context)
            : undefined,
    };
};
var deserializeAws_json1_1EC2TagSetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EC2TagFilterList(entry, context);
    });
};
var deserializeAws_json1_1ECSService = function (output, context) {
    return {
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    };
};
var deserializeAws_json1_1ECSServiceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ECSService(entry, context);
    });
};
var deserializeAws_json1_1ECSServiceMappingLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ECSTarget = function (output, context) {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        lifecycleEvents: output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
            ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
        targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
        taskSetsInfo: output.taskSetsInfo !== undefined && output.taskSetsInfo !== null
            ? deserializeAws_json1_1ECSTaskSetList(output.taskSetsInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1ECSTaskSet = function (output, context) {
    return {
        desiredCount: output.desiredCount !== undefined && output.desiredCount !== null ? output.desiredCount : undefined,
        identifer: output.identifer !== undefined && output.identifer !== null ? output.identifer : undefined,
        pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
        runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetGroup: output.targetGroup !== undefined && output.targetGroup !== null
            ? deserializeAws_json1_1TargetGroupInfo(output.targetGroup, context)
            : undefined,
        taskSetLabel: output.taskSetLabel !== undefined && output.taskSetLabel !== null ? output.taskSetLabel : undefined,
        trafficWeight: output.trafficWeight !== undefined && output.trafficWeight !== null ? output.trafficWeight : undefined,
    };
};
var deserializeAws_json1_1ECSTaskSetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ECSTaskSet(entry, context);
    });
};
var deserializeAws_json1_1ELBInfo = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1ELBInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ELBInfo(entry, context);
    });
};
var deserializeAws_json1_1ErrorInformation = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1GenericRevisionInfo = function (output, context) {
    return {
        deploymentGroups: output.deploymentGroups !== undefined && output.deploymentGroups !== null
            ? deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        firstUsedTime: output.firstUsedTime !== undefined && output.firstUsedTime !== null
            ? new Date(Math.round(output.firstUsedTime * 1000))
            : undefined,
        lastUsedTime: output.lastUsedTime !== undefined && output.lastUsedTime !== null
            ? new Date(Math.round(output.lastUsedTime * 1000))
            : undefined,
        registerTime: output.registerTime !== undefined && output.registerTime !== null
            ? new Date(Math.round(output.registerTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1GetApplicationOutput = function (output, context) {
    return {
        application: output.application !== undefined && output.application !== null
            ? deserializeAws_json1_1ApplicationInfo(output.application, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetApplicationRevisionOutput = function (output, context) {
    return {
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        revision: output.revision !== undefined && output.revision !== null
            ? deserializeAws_json1_1RevisionLocation(output.revision, context)
            : undefined,
        revisionInfo: output.revisionInfo !== undefined && output.revisionInfo !== null
            ? deserializeAws_json1_1GenericRevisionInfo(output.revisionInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetDeploymentConfigOutput = function (output, context) {
    return {
        deploymentConfigInfo: output.deploymentConfigInfo !== undefined && output.deploymentConfigInfo !== null
            ? deserializeAws_json1_1DeploymentConfigInfo(output.deploymentConfigInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetDeploymentGroupOutput = function (output, context) {
    return {
        deploymentGroupInfo: output.deploymentGroupInfo !== undefined && output.deploymentGroupInfo !== null
            ? deserializeAws_json1_1DeploymentGroupInfo(output.deploymentGroupInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetDeploymentInstanceOutput = function (output, context) {
    return {
        instanceSummary: output.instanceSummary !== undefined && output.instanceSummary !== null
            ? deserializeAws_json1_1InstanceSummary(output.instanceSummary, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetDeploymentOutput = function (output, context) {
    return {
        deploymentInfo: output.deploymentInfo !== undefined && output.deploymentInfo !== null
            ? deserializeAws_json1_1DeploymentInfo(output.deploymentInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetDeploymentTargetOutput = function (output, context) {
    return {
        deploymentTarget: output.deploymentTarget !== undefined && output.deploymentTarget !== null
            ? deserializeAws_json1_1DeploymentTarget(output.deploymentTarget, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetOnPremisesInstanceOutput = function (output, context) {
    return {
        instanceInfo: output.instanceInfo !== undefined && output.instanceInfo !== null
            ? deserializeAws_json1_1InstanceInfo(output.instanceInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1GitHubAccountTokenDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1GitHubAccountTokenNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1GitHubAccountTokenNameRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1GitHubLocation = function (output, context) {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        repository: output.repository !== undefined && output.repository !== null ? output.repository : undefined,
    };
};
var deserializeAws_json1_1GreenFleetProvisioningOption = function (output, context) {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
    };
};
var deserializeAws_json1_1IamArnRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1IamSessionArnAlreadyRegisteredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1IamUserArnAlreadyRegisteredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1IamUserArnRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstanceDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstanceIdRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstanceInfo = function (output, context) {
    return {
        deregisterTime: output.deregisterTime !== undefined && output.deregisterTime !== null
            ? new Date(Math.round(output.deregisterTime * 1000))
            : undefined,
        iamSessionArn: output.iamSessionArn !== undefined && output.iamSessionArn !== null ? output.iamSessionArn : undefined,
        iamUserArn: output.iamUserArn !== undefined && output.iamUserArn !== null ? output.iamUserArn : undefined,
        instanceArn: output.instanceArn !== undefined && output.instanceArn !== null ? output.instanceArn : undefined,
        instanceName: output.instanceName !== undefined && output.instanceName !== null ? output.instanceName : undefined,
        registerTime: output.registerTime !== undefined && output.registerTime !== null
            ? new Date(Math.round(output.registerTime * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1TagList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceInfo(entry, context);
    });
};
var deserializeAws_json1_1InstanceLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstanceNameAlreadyRegisteredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstanceNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InstanceNameRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstanceNotRegisteredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InstancesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InstanceSummary = function (output, context) {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        instanceId: output.instanceId !== undefined && output.instanceId !== null ? output.instanceId : undefined,
        instanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        lifecycleEvents: output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
            ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1InstanceSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceSummary(entry, context);
    });
};
var deserializeAws_json1_1InstanceTarget = function (output, context) {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        instanceLabel: output.instanceLabel !== undefined && output.instanceLabel !== null ? output.instanceLabel : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        lifecycleEvents: output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
            ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
        targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
    };
};
var deserializeAws_json1_1InvalidAlarmConfigException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidApplicationNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidArnException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidAutoRollbackConfigException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidAutoScalingGroupException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidBucketNameFilterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidComputePlatformException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeployedStateFilterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentConfigNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentGroupNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentIdException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentInstanceTypeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentStatusException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentStyleException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentTargetIdException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidDeploymentWaitTypeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidEC2TagCombinationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidEC2TagException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidECSServiceException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidExternalIdException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidFileExistsBehaviorException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidGitHubAccountTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidGitHubAccountTokenNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidIamSessionArnException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidIamUserArnException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidInputException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidInstanceNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidInstanceStatusException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidInstanceTypeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidKeyPrefixFilterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidLoadBalancerInfoException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidMinimumHealthyHostValueException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidNextTokenException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidOnPremisesTagCombinationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidOperationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidRegistrationStatusException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidRevisionException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidRoleException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSortByException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSortOrderException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTagException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTagFilterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTagsToAddException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTargetFilterNameException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTargetGroupPairException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTargetInstancesException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTimeRangeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTrafficRoutingConfigurationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidTriggerConfigException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LambdaFunctionInfo = function (output, context) {
    return {
        currentVersion: output.currentVersion !== undefined && output.currentVersion !== null ? output.currentVersion : undefined,
        functionAlias: output.functionAlias !== undefined && output.functionAlias !== null ? output.functionAlias : undefined,
        functionName: output.functionName !== undefined && output.functionName !== null ? output.functionName : undefined,
        targetVersion: output.targetVersion !== undefined && output.targetVersion !== null ? output.targetVersion : undefined,
        targetVersionWeight: output.targetVersionWeight !== undefined && output.targetVersionWeight !== null
            ? output.targetVersionWeight
            : undefined,
    };
};
var deserializeAws_json1_1LambdaTarget = function (output, context) {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        lambdaFunctionInfo: output.lambdaFunctionInfo !== undefined && output.lambdaFunctionInfo !== null
            ? deserializeAws_json1_1LambdaFunctionInfo(output.lambdaFunctionInfo, context)
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        lifecycleEvents: output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
            ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
        targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
    };
};
var deserializeAws_json1_1LastDeploymentInfo = function (output, context) {
    return {
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1LifecycleEvent = function (output, context) {
    return {
        diagnostics: output.diagnostics !== undefined && output.diagnostics !== null
            ? deserializeAws_json1_1Diagnostics(output.diagnostics, context)
            : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        lifecycleEventName: output.lifecycleEventName !== undefined && output.lifecycleEventName !== null
            ? output.lifecycleEventName
            : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_json1_1LifecycleEventAlreadyCompletedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LifecycleEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LifecycleEvent(entry, context);
    });
};
var deserializeAws_json1_1LifecycleHookLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListApplicationRevisionsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        revisions: output.revisions !== undefined && output.revisions !== null
            ? deserializeAws_json1_1RevisionLocationList(output.revisions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListApplicationsOutput = function (output, context) {
    return {
        applications: output.applications !== undefined && output.applications !== null
            ? deserializeAws_json1_1ApplicationsList(output.applications, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDeploymentConfigsOutput = function (output, context) {
    return {
        deploymentConfigsList: output.deploymentConfigsList !== undefined && output.deploymentConfigsList !== null
            ? deserializeAws_json1_1DeploymentConfigsList(output.deploymentConfigsList, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDeploymentGroupsOutput = function (output, context) {
    return {
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        deploymentGroups: output.deploymentGroups !== undefined && output.deploymentGroups !== null
            ? deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDeploymentInstancesOutput = function (output, context) {
    return {
        instancesList: output.instancesList !== undefined && output.instancesList !== null
            ? deserializeAws_json1_1InstancesList(output.instancesList, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDeploymentsOutput = function (output, context) {
    return {
        deployments: output.deployments !== undefined && output.deployments !== null
            ? deserializeAws_json1_1DeploymentsList(output.deployments, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListDeploymentTargetsOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        targetIds: output.targetIds !== undefined && output.targetIds !== null
            ? deserializeAws_json1_1TargetIdList(output.targetIds, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListenerArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ListGitHubAccountTokenNamesOutput = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tokenNameList: output.tokenNameList !== undefined && output.tokenNameList !== null
            ? deserializeAws_json1_1GitHubAccountTokenNameList(output.tokenNameList, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListOnPremisesInstancesOutput = function (output, context) {
    return {
        instanceNames: output.instanceNames !== undefined && output.instanceNames !== null
            ? deserializeAws_json1_1InstanceNameList(output.instanceNames, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1LoadBalancerInfo = function (output, context) {
    return {
        elbInfoList: output.elbInfoList !== undefined && output.elbInfoList !== null
            ? deserializeAws_json1_1ELBInfoList(output.elbInfoList, context)
            : undefined,
        targetGroupInfoList: output.targetGroupInfoList !== undefined && output.targetGroupInfoList !== null
            ? deserializeAws_json1_1TargetGroupInfoList(output.targetGroupInfoList, context)
            : undefined,
        targetGroupPairInfoList: output.targetGroupPairInfoList !== undefined && output.targetGroupPairInfoList !== null
            ? deserializeAws_json1_1TargetGroupPairInfoList(output.targetGroupPairInfoList, context)
            : undefined,
    };
};
var deserializeAws_json1_1MinimumHealthyHosts = function (output, context) {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1MultipleIamArnsProvidedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1OnPremisesTagSet = function (output, context) {
    return {
        onPremisesTagSetList: output.onPremisesTagSetList !== undefined && output.onPremisesTagSetList !== null
            ? deserializeAws_json1_1OnPremisesTagSetList(output.onPremisesTagSetList, context)
            : undefined,
    };
};
var deserializeAws_json1_1OnPremisesTagSetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagFilterList(entry, context);
    });
};
var deserializeAws_json1_1OperationNotSupportedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput = function (output, context) {
    return {
        lifecycleEventHookExecutionId: output.lifecycleEventHookExecutionId !== undefined && output.lifecycleEventHookExecutionId !== null
            ? output.lifecycleEventHookExecutionId
            : undefined,
    };
};
var deserializeAws_json1_1RawString = function (output, context) {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        sha256: output.sha256 !== undefined && output.sha256 !== null ? output.sha256 : undefined,
    };
};
var deserializeAws_json1_1RelatedDeployments = function (output, context) {
    return {
        autoUpdateOutdatedInstancesDeploymentIds: output.autoUpdateOutdatedInstancesDeploymentIds !== undefined &&
            output.autoUpdateOutdatedInstancesDeploymentIds !== null
            ? deserializeAws_json1_1DeploymentsList(output.autoUpdateOutdatedInstancesDeploymentIds, context)
            : undefined,
        autoUpdateOutdatedInstancesRootDeploymentId: output.autoUpdateOutdatedInstancesRootDeploymentId !== undefined &&
            output.autoUpdateOutdatedInstancesRootDeploymentId !== null
            ? output.autoUpdateOutdatedInstancesRootDeploymentId
            : undefined,
    };
};
var deserializeAws_json1_1ResourceArnRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceValidationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RevisionDoesNotExistException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RevisionInfo = function (output, context) {
    return {
        genericRevisionInfo: output.genericRevisionInfo !== undefined && output.genericRevisionInfo !== null
            ? deserializeAws_json1_1GenericRevisionInfo(output.genericRevisionInfo, context)
            : undefined,
        revisionLocation: output.revisionLocation !== undefined && output.revisionLocation !== null
            ? deserializeAws_json1_1RevisionLocation(output.revisionLocation, context)
            : undefined,
    };
};
var deserializeAws_json1_1RevisionInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RevisionInfo(entry, context);
    });
};
var deserializeAws_json1_1RevisionLocation = function (output, context) {
    return {
        appSpecContent: output.appSpecContent !== undefined && output.appSpecContent !== null
            ? deserializeAws_json1_1AppSpecContent(output.appSpecContent, context)
            : undefined,
        gitHubLocation: output.gitHubLocation !== undefined && output.gitHubLocation !== null
            ? deserializeAws_json1_1GitHubLocation(output.gitHubLocation, context)
            : undefined,
        revisionType: output.revisionType !== undefined && output.revisionType !== null ? output.revisionType : undefined,
        s3Location: output.s3Location !== undefined && output.s3Location !== null
            ? deserializeAws_json1_1S3Location(output.s3Location, context)
            : undefined,
        string: output.string !== undefined && output.string !== null
            ? deserializeAws_json1_1RawString(output.string, context)
            : undefined,
    };
};
var deserializeAws_json1_1RevisionLocationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RevisionLocation(entry, context);
    });
};
var deserializeAws_json1_1RevisionRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RoleRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1RollbackInfo = function (output, context) {
    return {
        rollbackDeploymentId: output.rollbackDeploymentId !== undefined && output.rollbackDeploymentId !== null
            ? output.rollbackDeploymentId
            : undefined,
        rollbackMessage: output.rollbackMessage !== undefined && output.rollbackMessage !== null ? output.rollbackMessage : undefined,
        rollbackTriggeringDeploymentId: output.rollbackTriggeringDeploymentId !== undefined && output.rollbackTriggeringDeploymentId !== null
            ? output.rollbackTriggeringDeploymentId
            : undefined,
    };
};
var deserializeAws_json1_1S3Location = function (output, context) {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        bundleType: output.bundleType !== undefined && output.bundleType !== null ? output.bundleType : undefined,
        eTag: output.eTag !== undefined && output.eTag !== null ? output.eTag : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1StopDeploymentOutput = function (output, context) {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
    };
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagFilter = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagFilter(entry, context);
    });
};
var deserializeAws_json1_1TagLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
var deserializeAws_json1_1TagRequiredException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TagResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1TagSetListLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TargetGroupInfo = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1TargetGroupInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetGroupInfo(entry, context);
    });
};
var deserializeAws_json1_1TargetGroupPairInfo = function (output, context) {
    return {
        prodTrafficRoute: output.prodTrafficRoute !== undefined && output.prodTrafficRoute !== null
            ? deserializeAws_json1_1TrafficRoute(output.prodTrafficRoute, context)
            : undefined,
        targetGroups: output.targetGroups !== undefined && output.targetGroups !== null
            ? deserializeAws_json1_1TargetGroupInfoList(output.targetGroups, context)
            : undefined,
        testTrafficRoute: output.testTrafficRoute !== undefined && output.testTrafficRoute !== null
            ? deserializeAws_json1_1TrafficRoute(output.testTrafficRoute, context)
            : undefined,
    };
};
var deserializeAws_json1_1TargetGroupPairInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetGroupPairInfo(entry, context);
    });
};
var deserializeAws_json1_1TargetIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1TargetInstances = function (output, context) {
    return {
        autoScalingGroups: output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
            ? deserializeAws_json1_1AutoScalingGroupNameList(output.autoScalingGroups, context)
            : undefined,
        ec2TagSet: output.ec2TagSet !== undefined && output.ec2TagSet !== null
            ? deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context)
            : undefined,
        tagFilters: output.tagFilters !== undefined && output.tagFilters !== null
            ? deserializeAws_json1_1EC2TagFilterList(output.tagFilters, context)
            : undefined,
    };
};
var deserializeAws_json1_1ThrottlingException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TimeBasedCanary = function (output, context) {
    return {
        canaryInterval: output.canaryInterval !== undefined && output.canaryInterval !== null ? output.canaryInterval : undefined,
        canaryPercentage: output.canaryPercentage !== undefined && output.canaryPercentage !== null ? output.canaryPercentage : undefined,
    };
};
var deserializeAws_json1_1TimeBasedLinear = function (output, context) {
    return {
        linearInterval: output.linearInterval !== undefined && output.linearInterval !== null ? output.linearInterval : undefined,
        linearPercentage: output.linearPercentage !== undefined && output.linearPercentage !== null ? output.linearPercentage : undefined,
    };
};
var deserializeAws_json1_1TrafficRoute = function (output, context) {
    return {
        listenerArns: output.listenerArns !== undefined && output.listenerArns !== null
            ? deserializeAws_json1_1ListenerArnList(output.listenerArns, context)
            : undefined,
    };
};
var deserializeAws_json1_1TrafficRoutingConfig = function (output, context) {
    return {
        timeBasedCanary: output.timeBasedCanary !== undefined && output.timeBasedCanary !== null
            ? deserializeAws_json1_1TimeBasedCanary(output.timeBasedCanary, context)
            : undefined,
        timeBasedLinear: output.timeBasedLinear !== undefined && output.timeBasedLinear !== null
            ? deserializeAws_json1_1TimeBasedLinear(output.timeBasedLinear, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1TriggerConfig = function (output, context) {
    return {
        triggerEvents: output.triggerEvents !== undefined && output.triggerEvents !== null
            ? deserializeAws_json1_1TriggerEventTypeList(output.triggerEvents, context)
            : undefined,
        triggerName: output.triggerName !== undefined && output.triggerName !== null ? output.triggerName : undefined,
        triggerTargetArn: output.triggerTargetArn !== undefined && output.triggerTargetArn !== null ? output.triggerTargetArn : undefined,
    };
};
var deserializeAws_json1_1TriggerConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TriggerConfig(entry, context);
    });
};
var deserializeAws_json1_1TriggerEventTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1TriggerTargetsLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UnsupportedActionForDeploymentTypeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateDeploymentGroupOutput = function (output, context) {
    return {
        hooksNotCleanedUp: output.hooksNotCleanedUp !== undefined && output.hooksNotCleanedUp !== null
            ? deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context)
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