import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1AddInstanceFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.AddInstanceFleet",
        };
        body = JSON.stringify(serializeAws_json1_1AddInstanceFleetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddInstanceGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.AddInstanceGroups",
        };
        body = JSON.stringify(serializeAws_json1_1AddInstanceGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddJobFlowStepsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.AddJobFlowSteps",
        };
        body = JSON.stringify(serializeAws_json1_1AddJobFlowStepsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1AddTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.AddTags",
        };
        body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CancelStepsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.CancelSteps",
        };
        body = JSON.stringify(serializeAws_json1_1CancelStepsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSecurityConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.CreateSecurityConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateStudioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.CreateStudio",
        };
        body = JSON.stringify(serializeAws_json1_1CreateStudioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateStudioSessionMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.CreateStudioSessionMapping",
        };
        body = JSON.stringify(serializeAws_json1_1CreateStudioSessionMappingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteSecurityConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DeleteSecurityConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteStudioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DeleteStudio",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteStudioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteStudioSessionMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DeleteStudioSessionMapping",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteStudioSessionMappingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DescribeCluster",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeClusterInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeJobFlowsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DescribeJobFlows",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeJobFlowsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeNotebookExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DescribeNotebookExecution",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeNotebookExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSecurityConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DescribeSecurityConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSecurityConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeStepCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DescribeStep",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeStepInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeStudioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.DescribeStudio",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeStudioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.GetBlockPublicAccessConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetManagedScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.GetManagedScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1GetManagedScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1GetStudioSessionMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.GetStudioSessionMapping",
        };
        body = JSON.stringify(serializeAws_json1_1GetStudioSessionMappingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListBootstrapActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListBootstrapActions",
        };
        body = JSON.stringify(serializeAws_json1_1ListBootstrapActionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListClusters",
        };
        body = JSON.stringify(serializeAws_json1_1ListClustersInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListInstanceFleetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListInstanceFleets",
        };
        body = JSON.stringify(serializeAws_json1_1ListInstanceFleetsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListInstanceGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListInstanceGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ListInstanceGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListInstances",
        };
        body = JSON.stringify(serializeAws_json1_1ListInstancesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListNotebookExecutionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListNotebookExecutions",
        };
        body = JSON.stringify(serializeAws_json1_1ListNotebookExecutionsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListSecurityConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListSecurityConfigurations",
        };
        body = JSON.stringify(serializeAws_json1_1ListSecurityConfigurationsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListStepsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListSteps",
        };
        body = JSON.stringify(serializeAws_json1_1ListStepsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListStudiosCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListStudios",
        };
        body = JSON.stringify(serializeAws_json1_1ListStudiosInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListStudioSessionMappingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ListStudioSessionMappings",
        };
        body = JSON.stringify(serializeAws_json1_1ListStudioSessionMappingsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ModifyCluster",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyClusterInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyInstanceFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ModifyInstanceFleet",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyInstanceFleetInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ModifyInstanceGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.ModifyInstanceGroups",
        };
        body = JSON.stringify(serializeAws_json1_1ModifyInstanceGroupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAutoScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.PutAutoScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutAutoScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.PutBlockPublicAccessConfiguration",
        };
        body = JSON.stringify(serializeAws_json1_1PutBlockPublicAccessConfigurationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutManagedScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.PutManagedScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1PutManagedScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveAutoScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.RemoveAutoScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveManagedScalingPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.RemoveManagedScalingPolicy",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveManagedScalingPolicyInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RemoveTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.RemoveTags",
        };
        body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RunJobFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.RunJobFlow",
        };
        body = JSON.stringify(serializeAws_json1_1RunJobFlowInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetTerminationProtectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.SetTerminationProtection",
        };
        body = JSON.stringify(serializeAws_json1_1SetTerminationProtectionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SetVisibleToAllUsersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.SetVisibleToAllUsers",
        };
        body = JSON.stringify(serializeAws_json1_1SetVisibleToAllUsersInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartNotebookExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.StartNotebookExecution",
        };
        body = JSON.stringify(serializeAws_json1_1StartNotebookExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopNotebookExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.StopNotebookExecution",
        };
        body = JSON.stringify(serializeAws_json1_1StopNotebookExecutionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TerminateJobFlowsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.TerminateJobFlows",
        };
        body = JSON.stringify(serializeAws_json1_1TerminateJobFlowsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateStudioCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.UpdateStudio",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateStudioInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateStudioSessionMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "ElasticMapReduce.UpdateStudioSessionMapping",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateStudioSessionMappingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1AddInstanceFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddInstanceFleetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddInstanceFleetOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddInstanceFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AddInstanceGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddInstanceGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddInstanceGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddInstanceGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AddJobFlowStepsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddJobFlowStepsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddJobFlowStepsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddJobFlowStepsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1AddTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1AddTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1AddTagsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1AddTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CancelStepsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CancelStepsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CancelStepsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CancelStepsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateSecurityConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSecurityConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSecurityConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateStudioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateStudioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateStudioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateStudioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateStudioSessionMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateStudioSessionMappingCommandError(output, context)];
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
var deserializeAws_json1_1CreateStudioSessionMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteSecurityConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteSecurityConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteSecurityConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteStudioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteStudioCommandError(output, context)];
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
var deserializeAws_json1_1DeleteStudioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteStudioSessionMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteStudioSessionMappingCommandError(output, context)];
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
var deserializeAws_json1_1DeleteStudioSessionMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeClusterOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeJobFlowsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeJobFlowsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeJobFlowsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeJobFlowsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeNotebookExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeNotebookExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeNotebookExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeNotebookExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeSecurityConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSecurityConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSecurityConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSecurityConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeStepCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeStepCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeStepOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeStepCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeStudioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeStudioCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeStudioOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeStudioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1GetManagedScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetManagedScalingPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetManagedScalingPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetManagedScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1GetStudioSessionMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1GetStudioSessionMappingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1GetStudioSessionMappingOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1GetStudioSessionMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListBootstrapActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListBootstrapActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListBootstrapActionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListBootstrapActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListClustersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListClustersOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListInstanceFleetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListInstanceFleetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListInstanceFleetsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListInstanceFleetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListInstanceGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListInstanceGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListInstanceGroupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListInstanceGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListInstancesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListNotebookExecutionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListNotebookExecutionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListNotebookExecutionsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListNotebookExecutionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListSecurityConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListSecurityConfigurationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListSecurityConfigurationsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListSecurityConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListStepsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListStepsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListStepsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListStepsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListStudiosCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListStudiosCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListStudiosOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListStudiosCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListStudioSessionMappingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListStudioSessionMappingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListStudioSessionMappingsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListStudioSessionMappingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ModifyClusterOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ModifyClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyInstanceFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyInstanceFleetCommandError(output, context)];
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
var deserializeAws_json1_1ModifyInstanceFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ModifyInstanceGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ModifyInstanceGroupsCommandError(output, context)];
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
var deserializeAws_json1_1ModifyInstanceGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAutoScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAutoScalingPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAutoScalingPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAutoScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutManagedScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutManagedScalingPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutManagedScalingPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutManagedScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1RemoveAutoScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveAutoScalingPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveAutoScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1RemoveManagedScalingPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveManagedScalingPolicyCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveManagedScalingPolicyOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveManagedScalingPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_json1_1RemoveTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RemoveTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RemoveTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RunJobFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RunJobFlowCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RunJobFlowOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RunJobFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SetTerminationProtectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetTerminationProtectionCommandError(output, context)];
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
var deserializeAws_json1_1SetTerminationProtectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SetVisibleToAllUsersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SetVisibleToAllUsersCommandError(output, context)];
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
var deserializeAws_json1_1SetVisibleToAllUsersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartNotebookExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartNotebookExecutionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartNotebookExecutionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartNotebookExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopNotebookExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopNotebookExecutionCommandError(output, context)];
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
var deserializeAws_json1_1StopNotebookExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TerminateJobFlowsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TerminateJobFlowsCommandError(output, context)];
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
var deserializeAws_json1_1TerminateJobFlowsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateStudioCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateStudioCommandError(output, context)];
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
var deserializeAws_json1_1UpdateStudioCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateStudioSessionMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateStudioSessionMappingCommandError(output, context)];
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
var deserializeAws_json1_1UpdateStudioSessionMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.emr#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.emr#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServerError(body, context);
        contents = __assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InternalServerException(body, context);
        contents = __assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
        contents = __assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AddInstanceFleetInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.InstanceFleet !== undefined &&
        input.InstanceFleet !== null && {
        InstanceFleet: serializeAws_json1_1InstanceFleetConfig(input.InstanceFleet, context),
    }));
};
var serializeAws_json1_1AddInstanceGroupsInput = function (input, context) {
    return __assign(__assign({}, (input.InstanceGroups !== undefined &&
        input.InstanceGroups !== null && {
        InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
    })), (input.JobFlowId !== undefined && input.JobFlowId !== null && { JobFlowId: input.JobFlowId }));
};
var serializeAws_json1_1AddJobFlowStepsInput = function (input, context) {
    return __assign(__assign({}, (input.JobFlowId !== undefined && input.JobFlowId !== null && { JobFlowId: input.JobFlowId })), (input.Steps !== undefined &&
        input.Steps !== null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }));
};
var serializeAws_json1_1AddTagsInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1Application = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AdditionalInfo !== undefined &&
        input.AdditionalInfo !== null && {
        AdditionalInfo: serializeAws_json1_1StringMap(input.AdditionalInfo, context),
    })), (input.Args !== undefined &&
        input.Args !== null && { Args: serializeAws_json1_1StringList(input.Args, context) })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_json1_1ApplicationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Application(entry, context);
    });
};
var serializeAws_json1_1AutoScalingPolicy = function (input, context) {
    return __assign(__assign({}, (input.Constraints !== undefined &&
        input.Constraints !== null && {
        Constraints: serializeAws_json1_1ScalingConstraints(input.Constraints, context),
    })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_json1_1ScalingRuleList(input.Rules, context) }));
};
var serializeAws_json1_1BlockPublicAccessConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.BlockPublicSecurityGroupRules !== undefined &&
        input.BlockPublicSecurityGroupRules !== null && {
        BlockPublicSecurityGroupRules: input.BlockPublicSecurityGroupRules,
    })), (input.Classification !== undefined &&
        input.Classification !== null && { Classification: input.Classification })), (input.Configurations !== undefined &&
        input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    })), (input.PermittedPublicSecurityGroupRuleRanges !== undefined &&
        input.PermittedPublicSecurityGroupRuleRanges !== null && {
        PermittedPublicSecurityGroupRuleRanges: serializeAws_json1_1PortRanges(input.PermittedPublicSecurityGroupRuleRanges, context),
    })), (input.Properties !== undefined &&
        input.Properties !== null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }));
};
var serializeAws_json1_1BootstrapActionConfig = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ScriptBootstrapAction !== undefined &&
        input.ScriptBootstrapAction !== null && {
        ScriptBootstrapAction: serializeAws_json1_1ScriptBootstrapActionConfig(input.ScriptBootstrapAction, context),
    }));
};
var serializeAws_json1_1BootstrapActionConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BootstrapActionConfig(entry, context);
    });
};
var serializeAws_json1_1CancelStepsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.StepCancellationOption !== undefined &&
        input.StepCancellationOption !== null && { StepCancellationOption: input.StepCancellationOption })), (input.StepIds !== undefined &&
        input.StepIds !== null && { StepIds: serializeAws_json1_1StepIdsList(input.StepIds, context) }));
};
var serializeAws_json1_1CloudWatchAlarmDefinition = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ComparisonOperator !== undefined &&
        input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator })), (input.Dimensions !== undefined &&
        input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensionList(input.Dimensions, context) })), (input.EvaluationPeriods !== undefined &&
        input.EvaluationPeriods !== null && { EvaluationPeriods: input.EvaluationPeriods })), (input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName })), (input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace })), (input.Period !== undefined && input.Period !== null && { Period: input.Period })), (input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic })), (input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold })), (input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }));
};
var serializeAws_json1_1ClusterStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ComputeLimits = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.MaximumCapacityUnits !== undefined &&
        input.MaximumCapacityUnits !== null && { MaximumCapacityUnits: input.MaximumCapacityUnits })), (input.MaximumCoreCapacityUnits !== undefined &&
        input.MaximumCoreCapacityUnits !== null && { MaximumCoreCapacityUnits: input.MaximumCoreCapacityUnits })), (input.MaximumOnDemandCapacityUnits !== undefined &&
        input.MaximumOnDemandCapacityUnits !== null && {
        MaximumOnDemandCapacityUnits: input.MaximumOnDemandCapacityUnits,
    })), (input.MinimumCapacityUnits !== undefined &&
        input.MinimumCapacityUnits !== null && { MinimumCapacityUnits: input.MinimumCapacityUnits })), (input.UnitType !== undefined && input.UnitType !== null && { UnitType: input.UnitType }));
};
var serializeAws_json1_1Configuration = function (input, context) {
    return __assign(__assign(__assign({}, (input.Classification !== undefined &&
        input.Classification !== null && { Classification: input.Classification })), (input.Configurations !== undefined &&
        input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    })), (input.Properties !== undefined &&
        input.Properties !== null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }));
};
var serializeAws_json1_1ConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Configuration(entry, context);
    });
};
var serializeAws_json1_1CreateSecurityConfigurationInput = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.SecurityConfiguration !== undefined &&
        input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }));
};
var serializeAws_json1_1CreateStudioInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AuthMode !== undefined && input.AuthMode !== null && { AuthMode: input.AuthMode })), (input.DefaultS3Location !== undefined &&
        input.DefaultS3Location !== null && { DefaultS3Location: input.DefaultS3Location })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.EngineSecurityGroupId !== undefined &&
        input.EngineSecurityGroupId !== null && { EngineSecurityGroupId: input.EngineSecurityGroupId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.UserRole !== undefined && input.UserRole !== null && { UserRole: input.UserRole })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId })), (input.WorkspaceSecurityGroupId !== undefined &&
        input.WorkspaceSecurityGroupId !== null && { WorkspaceSecurityGroupId: input.WorkspaceSecurityGroupId }));
};
var serializeAws_json1_1CreateStudioSessionMappingInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId })), (input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName })), (input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType })), (input.SessionPolicyArn !== undefined &&
        input.SessionPolicyArn !== null && { SessionPolicyArn: input.SessionPolicyArn })), (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1DeleteSecurityConfigurationInput = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DeleteStudioInput = function (input, context) {
    return __assign({}, (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1DeleteStudioSessionMappingInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId })), (input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName })), (input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType })), (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1DescribeClusterInput = function (input, context) {
    return __assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }));
};
var serializeAws_json1_1DescribeJobFlowsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CreatedAfter !== undefined &&
        input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) })), (input.CreatedBefore !== undefined &&
        input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) })), (input.JobFlowIds !== undefined &&
        input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) })), (input.JobFlowStates !== undefined &&
        input.JobFlowStates !== null && {
        JobFlowStates: serializeAws_json1_1JobFlowExecutionStateList(input.JobFlowStates, context),
    }));
};
var serializeAws_json1_1DescribeNotebookExecutionInput = function (input, context) {
    return __assign({}, (input.NotebookExecutionId !== undefined &&
        input.NotebookExecutionId !== null && { NotebookExecutionId: input.NotebookExecutionId }));
};
var serializeAws_json1_1DescribeSecurityConfigurationInput = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1DescribeStepInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.StepId !== undefined && input.StepId !== null && { StepId: input.StepId }));
};
var serializeAws_json1_1DescribeStudioInput = function (input, context) {
    return __assign({}, (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1EbsBlockDeviceConfig = function (input, context) {
    return __assign(__assign({}, (input.VolumeSpecification !== undefined &&
        input.VolumeSpecification !== null && {
        VolumeSpecification: serializeAws_json1_1VolumeSpecification(input.VolumeSpecification, context),
    })), (input.VolumesPerInstance !== undefined &&
        input.VolumesPerInstance !== null && { VolumesPerInstance: input.VolumesPerInstance }));
};
var serializeAws_json1_1EbsBlockDeviceConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EbsBlockDeviceConfig(entry, context);
    });
};
var serializeAws_json1_1EbsConfiguration = function (input, context) {
    return __assign(__assign({}, (input.EbsBlockDeviceConfigs !== undefined &&
        input.EbsBlockDeviceConfigs !== null && {
        EbsBlockDeviceConfigs: serializeAws_json1_1EbsBlockDeviceConfigList(input.EbsBlockDeviceConfigs, context),
    })), (input.EbsOptimized !== undefined && input.EbsOptimized !== null && { EbsOptimized: input.EbsOptimized }));
};
var serializeAws_json1_1EC2InstanceIdsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1EC2InstanceIdsToTerminateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ExecutionEngineConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.MasterInstanceSecurityGroupId !== undefined &&
        input.MasterInstanceSecurityGroupId !== null && {
        MasterInstanceSecurityGroupId: input.MasterInstanceSecurityGroupId,
    })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_json1_1GetBlockPublicAccessConfigurationInput = function (input, context) {
    return {};
};
var serializeAws_json1_1GetManagedScalingPolicyInput = function (input, context) {
    return __assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }));
};
var serializeAws_json1_1GetStudioSessionMappingInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId })), (input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName })), (input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType })), (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1HadoopJarStepConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Args !== undefined &&
        input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) })), (input.Jar !== undefined && input.Jar !== null && { Jar: input.Jar })), (input.MainClass !== undefined && input.MainClass !== null && { MainClass: input.MainClass })), (input.Properties !== undefined &&
        input.Properties !== null && { Properties: serializeAws_json1_1KeyValueList(input.Properties, context) }));
};
var serializeAws_json1_1InstanceFleetConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.InstanceFleetType !== undefined &&
        input.InstanceFleetType !== null && { InstanceFleetType: input.InstanceFleetType })), (input.InstanceTypeConfigs !== undefined &&
        input.InstanceTypeConfigs !== null && {
        InstanceTypeConfigs: serializeAws_json1_1InstanceTypeConfigList(input.InstanceTypeConfigs, context),
    })), (input.LaunchSpecifications !== undefined &&
        input.LaunchSpecifications !== null && {
        LaunchSpecifications: serializeAws_json1_1InstanceFleetProvisioningSpecifications(input.LaunchSpecifications, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.TargetOnDemandCapacity !== undefined &&
        input.TargetOnDemandCapacity !== null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity })), (input.TargetSpotCapacity !== undefined &&
        input.TargetSpotCapacity !== null && { TargetSpotCapacity: input.TargetSpotCapacity }));
};
var serializeAws_json1_1InstanceFleetConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceFleetConfig(entry, context);
    });
};
var serializeAws_json1_1InstanceFleetModifyConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.InstanceFleetId !== undefined &&
        input.InstanceFleetId !== null && { InstanceFleetId: input.InstanceFleetId })), (input.TargetOnDemandCapacity !== undefined &&
        input.TargetOnDemandCapacity !== null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity })), (input.TargetSpotCapacity !== undefined &&
        input.TargetSpotCapacity !== null && { TargetSpotCapacity: input.TargetSpotCapacity }));
};
var serializeAws_json1_1InstanceFleetProvisioningSpecifications = function (input, context) {
    return __assign(__assign({}, (input.OnDemandSpecification !== undefined &&
        input.OnDemandSpecification !== null && {
        OnDemandSpecification: serializeAws_json1_1OnDemandProvisioningSpecification(input.OnDemandSpecification, context),
    })), (input.SpotSpecification !== undefined &&
        input.SpotSpecification !== null && {
        SpotSpecification: serializeAws_json1_1SpotProvisioningSpecification(input.SpotSpecification, context),
    }));
};
var serializeAws_json1_1InstanceGroupConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AutoScalingPolicy !== undefined &&
        input.AutoScalingPolicy !== null && {
        AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
    })), (input.BidPrice !== undefined && input.BidPrice !== null && { BidPrice: input.BidPrice })), (input.Configurations !== undefined &&
        input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    })), (input.EbsConfiguration !== undefined &&
        input.EbsConfiguration !== null && {
        EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
    })), (input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount })), (input.InstanceRole !== undefined && input.InstanceRole !== null && { InstanceRole: input.InstanceRole })), (input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType })), (input.Market !== undefined && input.Market !== null && { Market: input.Market })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1InstanceGroupConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceGroupConfig(entry, context);
    });
};
var serializeAws_json1_1InstanceGroupModifyConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Configurations !== undefined &&
        input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    })), (input.EC2InstanceIdsToTerminate !== undefined &&
        input.EC2InstanceIdsToTerminate !== null && {
        EC2InstanceIdsToTerminate: serializeAws_json1_1EC2InstanceIdsToTerminateList(input.EC2InstanceIdsToTerminate, context),
    })), (input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount })), (input.InstanceGroupId !== undefined &&
        input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId })), (input.ShrinkPolicy !== undefined &&
        input.ShrinkPolicy !== null && { ShrinkPolicy: serializeAws_json1_1ShrinkPolicy(input.ShrinkPolicy, context) }));
};
var serializeAws_json1_1InstanceGroupModifyConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceGroupModifyConfig(entry, context);
    });
};
var serializeAws_json1_1InstanceGroupTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1InstanceResizePolicy = function (input, context) {
    return __assign(__assign(__assign({}, (input.InstanceTerminationTimeout !== undefined &&
        input.InstanceTerminationTimeout !== null && { InstanceTerminationTimeout: input.InstanceTerminationTimeout })), (input.InstancesToProtect !== undefined &&
        input.InstancesToProtect !== null && {
        InstancesToProtect: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToProtect, context),
    })), (input.InstancesToTerminate !== undefined &&
        input.InstancesToTerminate !== null && {
        InstancesToTerminate: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToTerminate, context),
    }));
};
var serializeAws_json1_1InstanceStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1InstanceTypeConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.BidPrice !== undefined && input.BidPrice !== null && { BidPrice: input.BidPrice })), (input.BidPriceAsPercentageOfOnDemandPrice !== undefined &&
        input.BidPriceAsPercentageOfOnDemandPrice !== null && {
        BidPriceAsPercentageOfOnDemandPrice: input.BidPriceAsPercentageOfOnDemandPrice,
    })), (input.Configurations !== undefined &&
        input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    })), (input.EbsConfiguration !== undefined &&
        input.EbsConfiguration !== null && {
        EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
    })), (input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType })), (input.WeightedCapacity !== undefined &&
        input.WeightedCapacity !== null && { WeightedCapacity: input.WeightedCapacity }));
};
var serializeAws_json1_1InstanceTypeConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceTypeConfig(entry, context);
    });
};
var serializeAws_json1_1JobFlowExecutionStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1JobFlowInstancesConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdditionalMasterSecurityGroups !== undefined &&
        input.AdditionalMasterSecurityGroups !== null && {
        AdditionalMasterSecurityGroups: serializeAws_json1_1SecurityGroupsList(input.AdditionalMasterSecurityGroups, context),
    })), (input.AdditionalSlaveSecurityGroups !== undefined &&
        input.AdditionalSlaveSecurityGroups !== null && {
        AdditionalSlaveSecurityGroups: serializeAws_json1_1SecurityGroupsList(input.AdditionalSlaveSecurityGroups, context),
    })), (input.Ec2KeyName !== undefined && input.Ec2KeyName !== null && { Ec2KeyName: input.Ec2KeyName })), (input.Ec2SubnetId !== undefined && input.Ec2SubnetId !== null && { Ec2SubnetId: input.Ec2SubnetId })), (input.Ec2SubnetIds !== undefined &&
        input.Ec2SubnetIds !== null && {
        Ec2SubnetIds: serializeAws_json1_1XmlStringMaxLen256List(input.Ec2SubnetIds, context),
    })), (input.EmrManagedMasterSecurityGroup !== undefined &&
        input.EmrManagedMasterSecurityGroup !== null && {
        EmrManagedMasterSecurityGroup: input.EmrManagedMasterSecurityGroup,
    })), (input.EmrManagedSlaveSecurityGroup !== undefined &&
        input.EmrManagedSlaveSecurityGroup !== null && {
        EmrManagedSlaveSecurityGroup: input.EmrManagedSlaveSecurityGroup,
    })), (input.HadoopVersion !== undefined && input.HadoopVersion !== null && { HadoopVersion: input.HadoopVersion })), (input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount })), (input.InstanceFleets !== undefined &&
        input.InstanceFleets !== null && {
        InstanceFleets: serializeAws_json1_1InstanceFleetConfigList(input.InstanceFleets, context),
    })), (input.InstanceGroups !== undefined &&
        input.InstanceGroups !== null && {
        InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
    })), (input.KeepJobFlowAliveWhenNoSteps !== undefined &&
        input.KeepJobFlowAliveWhenNoSteps !== null && { KeepJobFlowAliveWhenNoSteps: input.KeepJobFlowAliveWhenNoSteps })), (input.MasterInstanceType !== undefined &&
        input.MasterInstanceType !== null && { MasterInstanceType: input.MasterInstanceType })), (input.Placement !== undefined &&
        input.Placement !== null && { Placement: serializeAws_json1_1PlacementType(input.Placement, context) })), (input.ServiceAccessSecurityGroup !== undefined &&
        input.ServiceAccessSecurityGroup !== null && { ServiceAccessSecurityGroup: input.ServiceAccessSecurityGroup })), (input.SlaveInstanceType !== undefined &&
        input.SlaveInstanceType !== null && { SlaveInstanceType: input.SlaveInstanceType })), (input.TerminationProtected !== undefined &&
        input.TerminationProtected !== null && { TerminationProtected: input.TerminationProtected }));
};
var serializeAws_json1_1KerberosAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ADDomainJoinPassword !== undefined &&
        input.ADDomainJoinPassword !== null && { ADDomainJoinPassword: input.ADDomainJoinPassword })), (input.ADDomainJoinUser !== undefined &&
        input.ADDomainJoinUser !== null && { ADDomainJoinUser: input.ADDomainJoinUser })), (input.CrossRealmTrustPrincipalPassword !== undefined &&
        input.CrossRealmTrustPrincipalPassword !== null && {
        CrossRealmTrustPrincipalPassword: input.CrossRealmTrustPrincipalPassword,
    })), (input.KdcAdminPassword !== undefined &&
        input.KdcAdminPassword !== null && { KdcAdminPassword: input.KdcAdminPassword })), (input.Realm !== undefined && input.Realm !== null && { Realm: input.Realm }));
};
var serializeAws_json1_1KeyValue = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1KeyValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1KeyValue(entry, context);
    });
};
var serializeAws_json1_1ListBootstrapActionsInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListClustersInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ClusterStates !== undefined &&
        input.ClusterStates !== null && {
        ClusterStates: serializeAws_json1_1ClusterStateList(input.ClusterStates, context),
    })), (input.CreatedAfter !== undefined &&
        input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) })), (input.CreatedBefore !== undefined &&
        input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListInstanceFleetsInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListInstanceGroupsInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListInstancesInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.InstanceFleetId !== undefined &&
        input.InstanceFleetId !== null && { InstanceFleetId: input.InstanceFleetId })), (input.InstanceFleetType !== undefined &&
        input.InstanceFleetType !== null && { InstanceFleetType: input.InstanceFleetType })), (input.InstanceGroupId !== undefined &&
        input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId })), (input.InstanceGroupTypes !== undefined &&
        input.InstanceGroupTypes !== null && {
        InstanceGroupTypes: serializeAws_json1_1InstanceGroupTypeList(input.InstanceGroupTypes, context),
    })), (input.InstanceStates !== undefined &&
        input.InstanceStates !== null && {
        InstanceStates: serializeAws_json1_1InstanceStateList(input.InstanceStates, context),
    })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListNotebookExecutionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.EditorId !== undefined && input.EditorId !== null && { EditorId: input.EditorId })), (input.From !== undefined && input.From !== null && { From: Math.round(input.From.getTime() / 1000) })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.To !== undefined && input.To !== null && { To: Math.round(input.To.getTime() / 1000) }));
};
var serializeAws_json1_1ListSecurityConfigurationsInput = function (input, context) {
    return __assign({}, (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ListStepsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.StepIds !== undefined &&
        input.StepIds !== null && { StepIds: serializeAws_json1_1XmlStringList(input.StepIds, context) })), (input.StepStates !== undefined &&
        input.StepStates !== null && { StepStates: serializeAws_json1_1StepStateList(input.StepStates, context) }));
};
var serializeAws_json1_1ListStudioSessionMappingsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1ListStudiosInput = function (input, context) {
    return __assign({}, (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }));
};
var serializeAws_json1_1ManagedScalingPolicy = function (input, context) {
    return __assign({}, (input.ComputeLimits !== undefined &&
        input.ComputeLimits !== null && {
        ComputeLimits: serializeAws_json1_1ComputeLimits(input.ComputeLimits, context),
    }));
};
var serializeAws_json1_1MetricDimension = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1MetricDimensionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MetricDimension(entry, context);
    });
};
var serializeAws_json1_1ModifyClusterInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.StepConcurrencyLevel !== undefined &&
        input.StepConcurrencyLevel !== null && { StepConcurrencyLevel: input.StepConcurrencyLevel }));
};
var serializeAws_json1_1ModifyInstanceFleetInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.InstanceFleet !== undefined &&
        input.InstanceFleet !== null && {
        InstanceFleet: serializeAws_json1_1InstanceFleetModifyConfig(input.InstanceFleet, context),
    }));
};
var serializeAws_json1_1ModifyInstanceGroupsInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.InstanceGroups !== undefined &&
        input.InstanceGroups !== null && {
        InstanceGroups: serializeAws_json1_1InstanceGroupModifyConfigList(input.InstanceGroups, context),
    }));
};
var serializeAws_json1_1NewSupportedProductsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SupportedProductConfig(entry, context);
    });
};
var serializeAws_json1_1OnDemandCapacityReservationOptions = function (input, context) {
    return __assign(__assign(__assign({}, (input.CapacityReservationPreference !== undefined &&
        input.CapacityReservationPreference !== null && {
        CapacityReservationPreference: input.CapacityReservationPreference,
    })), (input.CapacityReservationResourceGroupArn !== undefined &&
        input.CapacityReservationResourceGroupArn !== null && {
        CapacityReservationResourceGroupArn: input.CapacityReservationResourceGroupArn,
    })), (input.UsageStrategy !== undefined && input.UsageStrategy !== null && { UsageStrategy: input.UsageStrategy }));
};
var serializeAws_json1_1OnDemandProvisioningSpecification = function (input, context) {
    return __assign(__assign({}, (input.AllocationStrategy !== undefined &&
        input.AllocationStrategy !== null && { AllocationStrategy: input.AllocationStrategy })), (input.CapacityReservationOptions !== undefined &&
        input.CapacityReservationOptions !== null && {
        CapacityReservationOptions: serializeAws_json1_1OnDemandCapacityReservationOptions(input.CapacityReservationOptions, context),
    }));
};
var serializeAws_json1_1PlacementGroupConfig = function (input, context) {
    return __assign(__assign({}, (input.InstanceRole !== undefined && input.InstanceRole !== null && { InstanceRole: input.InstanceRole })), (input.PlacementStrategy !== undefined &&
        input.PlacementStrategy !== null && { PlacementStrategy: input.PlacementStrategy }));
};
var serializeAws_json1_1PlacementGroupConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};
var serializeAws_json1_1PlacementType = function (input, context) {
    return __assign(__assign({}, (input.AvailabilityZone !== undefined &&
        input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone })), (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_json1_1XmlStringMaxLen256List(input.AvailabilityZones, context),
    }));
};
var serializeAws_json1_1PortRange = function (input, context) {
    return __assign(__assign({}, (input.MaxRange !== undefined && input.MaxRange !== null && { MaxRange: input.MaxRange })), (input.MinRange !== undefined && input.MinRange !== null && { MinRange: input.MinRange }));
};
var serializeAws_json1_1PortRanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortRange(entry, context);
    });
};
var serializeAws_json1_1PutAutoScalingPolicyInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.AutoScalingPolicy !== undefined &&
        input.AutoScalingPolicy !== null && {
        AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
    })), (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.InstanceGroupId !== undefined &&
        input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }));
};
var serializeAws_json1_1PutBlockPublicAccessConfigurationInput = function (input, context) {
    return __assign({}, (input.BlockPublicAccessConfiguration !== undefined &&
        input.BlockPublicAccessConfiguration !== null && {
        BlockPublicAccessConfiguration: serializeAws_json1_1BlockPublicAccessConfiguration(input.BlockPublicAccessConfiguration, context),
    }));
};
var serializeAws_json1_1PutManagedScalingPolicyInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.ManagedScalingPolicy !== undefined &&
        input.ManagedScalingPolicy !== null && {
        ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
    }));
};
var serializeAws_json1_1RemoveAutoScalingPolicyInput = function (input, context) {
    return __assign(__assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId })), (input.InstanceGroupId !== undefined &&
        input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }));
};
var serializeAws_json1_1RemoveManagedScalingPolicyInput = function (input, context) {
    return __assign({}, (input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }));
};
var serializeAws_json1_1RemoveTagsInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1StringList(input.TagKeys, context) }));
};
var serializeAws_json1_1RunJobFlowInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdditionalInfo !== undefined &&
        input.AdditionalInfo !== null && { AdditionalInfo: input.AdditionalInfo })), (input.AmiVersion !== undefined && input.AmiVersion !== null && { AmiVersion: input.AmiVersion })), (input.Applications !== undefined &&
        input.Applications !== null && {
        Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
    })), (input.AutoScalingRole !== undefined &&
        input.AutoScalingRole !== null && { AutoScalingRole: input.AutoScalingRole })), (input.BootstrapActions !== undefined &&
        input.BootstrapActions !== null && {
        BootstrapActions: serializeAws_json1_1BootstrapActionConfigList(input.BootstrapActions, context),
    })), (input.Configurations !== undefined &&
        input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    })), (input.CustomAmiId !== undefined && input.CustomAmiId !== null && { CustomAmiId: input.CustomAmiId })), (input.EbsRootVolumeSize !== undefined &&
        input.EbsRootVolumeSize !== null && { EbsRootVolumeSize: input.EbsRootVolumeSize })), (input.Instances !== undefined &&
        input.Instances !== null && { Instances: serializeAws_json1_1JobFlowInstancesConfig(input.Instances, context) })), (input.JobFlowRole !== undefined && input.JobFlowRole !== null && { JobFlowRole: input.JobFlowRole })), (input.KerberosAttributes !== undefined &&
        input.KerberosAttributes !== null && {
        KerberosAttributes: serializeAws_json1_1KerberosAttributes(input.KerberosAttributes, context),
    })), (input.LogEncryptionKmsKeyId !== undefined &&
        input.LogEncryptionKmsKeyId !== null && { LogEncryptionKmsKeyId: input.LogEncryptionKmsKeyId })), (input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri })), (input.ManagedScalingPolicy !== undefined &&
        input.ManagedScalingPolicy !== null && {
        ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.NewSupportedProducts !== undefined &&
        input.NewSupportedProducts !== null && {
        NewSupportedProducts: serializeAws_json1_1NewSupportedProductsList(input.NewSupportedProducts, context),
    })), (input.PlacementGroupConfigs !== undefined &&
        input.PlacementGroupConfigs !== null && {
        PlacementGroupConfigs: serializeAws_json1_1PlacementGroupConfigList(input.PlacementGroupConfigs, context),
    })), (input.ReleaseLabel !== undefined && input.ReleaseLabel !== null && { ReleaseLabel: input.ReleaseLabel })), (input.RepoUpgradeOnBoot !== undefined &&
        input.RepoUpgradeOnBoot !== null && { RepoUpgradeOnBoot: input.RepoUpgradeOnBoot })), (input.ScaleDownBehavior !== undefined &&
        input.ScaleDownBehavior !== null && { ScaleDownBehavior: input.ScaleDownBehavior })), (input.SecurityConfiguration !== undefined &&
        input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration })), (input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole })), (input.StepConcurrencyLevel !== undefined &&
        input.StepConcurrencyLevel !== null && { StepConcurrencyLevel: input.StepConcurrencyLevel })), (input.Steps !== undefined &&
        input.Steps !== null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) })), (input.SupportedProducts !== undefined &&
        input.SupportedProducts !== null && {
        SupportedProducts: serializeAws_json1_1SupportedProductsList(input.SupportedProducts, context),
    })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) })), (input.VisibleToAllUsers !== undefined &&
        input.VisibleToAllUsers !== null && { VisibleToAllUsers: input.VisibleToAllUsers }));
};
var serializeAws_json1_1ScalingAction = function (input, context) {
    return __assign(__assign({}, (input.Market !== undefined && input.Market !== null && { Market: input.Market })), (input.SimpleScalingPolicyConfiguration !== undefined &&
        input.SimpleScalingPolicyConfiguration !== null && {
        SimpleScalingPolicyConfiguration: serializeAws_json1_1SimpleScalingPolicyConfiguration(input.SimpleScalingPolicyConfiguration, context),
    }));
};
var serializeAws_json1_1ScalingConstraints = function (input, context) {
    return __assign(__assign({}, (input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity })), (input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }));
};
var serializeAws_json1_1ScalingRule = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Action !== undefined &&
        input.Action !== null && { Action: serializeAws_json1_1ScalingAction(input.Action, context) })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Trigger !== undefined &&
        input.Trigger !== null && { Trigger: serializeAws_json1_1ScalingTrigger(input.Trigger, context) }));
};
var serializeAws_json1_1ScalingRuleList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ScalingRule(entry, context);
    });
};
var serializeAws_json1_1ScalingTrigger = function (input, context) {
    return __assign({}, (input.CloudWatchAlarmDefinition !== undefined &&
        input.CloudWatchAlarmDefinition !== null && {
        CloudWatchAlarmDefinition: serializeAws_json1_1CloudWatchAlarmDefinition(input.CloudWatchAlarmDefinition, context),
    }));
};
var serializeAws_json1_1ScriptBootstrapActionConfig = function (input, context) {
    return __assign(__assign({}, (input.Args !== undefined &&
        input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) })), (input.Path !== undefined && input.Path !== null && { Path: input.Path }));
};
var serializeAws_json1_1SecurityGroupsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SetTerminationProtectionInput = function (input, context) {
    return __assign(__assign({}, (input.JobFlowIds !== undefined &&
        input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) })), (input.TerminationProtected !== undefined &&
        input.TerminationProtected !== null && { TerminationProtected: input.TerminationProtected }));
};
var serializeAws_json1_1SetVisibleToAllUsersInput = function (input, context) {
    return __assign(__assign({}, (input.JobFlowIds !== undefined &&
        input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) })), (input.VisibleToAllUsers !== undefined &&
        input.VisibleToAllUsers !== null && { VisibleToAllUsers: input.VisibleToAllUsers }));
};
var serializeAws_json1_1ShrinkPolicy = function (input, context) {
    return __assign(__assign({}, (input.DecommissionTimeout !== undefined &&
        input.DecommissionTimeout !== null && { DecommissionTimeout: input.DecommissionTimeout })), (input.InstanceResizePolicy !== undefined &&
        input.InstanceResizePolicy !== null && {
        InstanceResizePolicy: serializeAws_json1_1InstanceResizePolicy(input.InstanceResizePolicy, context),
    }));
};
var serializeAws_json1_1SimpleScalingPolicyConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.AdjustmentType !== undefined &&
        input.AdjustmentType !== null && { AdjustmentType: input.AdjustmentType })), (input.CoolDown !== undefined && input.CoolDown !== null && { CoolDown: input.CoolDown })), (input.ScalingAdjustment !== undefined &&
        input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }));
};
var serializeAws_json1_1SpotProvisioningSpecification = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AllocationStrategy !== undefined &&
        input.AllocationStrategy !== null && { AllocationStrategy: input.AllocationStrategy })), (input.BlockDurationMinutes !== undefined &&
        input.BlockDurationMinutes !== null && { BlockDurationMinutes: input.BlockDurationMinutes })), (input.TimeoutAction !== undefined && input.TimeoutAction !== null && { TimeoutAction: input.TimeoutAction })), (input.TimeoutDurationMinutes !== undefined &&
        input.TimeoutDurationMinutes !== null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }));
};
var serializeAws_json1_1StartNotebookExecutionInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EditorId !== undefined && input.EditorId !== null && { EditorId: input.EditorId })), (input.ExecutionEngine !== undefined &&
        input.ExecutionEngine !== null && {
        ExecutionEngine: serializeAws_json1_1ExecutionEngineConfig(input.ExecutionEngine, context),
    })), (input.NotebookExecutionName !== undefined &&
        input.NotebookExecutionName !== null && { NotebookExecutionName: input.NotebookExecutionName })), (input.NotebookInstanceSecurityGroupId !== undefined &&
        input.NotebookInstanceSecurityGroupId !== null && {
        NotebookInstanceSecurityGroupId: input.NotebookInstanceSecurityGroupId,
    })), (input.NotebookParams !== undefined &&
        input.NotebookParams !== null && { NotebookParams: input.NotebookParams })), (input.RelativePath !== undefined && input.RelativePath !== null && { RelativePath: input.RelativePath })), (input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1StepConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.ActionOnFailure !== undefined &&
        input.ActionOnFailure !== null && { ActionOnFailure: input.ActionOnFailure })), (input.HadoopJarStep !== undefined &&
        input.HadoopJarStep !== null && {
        HadoopJarStep: serializeAws_json1_1HadoopJarStepConfig(input.HadoopJarStep, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1StepConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StepConfig(entry, context);
    });
};
var serializeAws_json1_1StepIdsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StepStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StopNotebookExecutionInput = function (input, context) {
    return __assign({}, (input.NotebookExecutionId !== undefined &&
        input.NotebookExecutionId !== null && { NotebookExecutionId: input.NotebookExecutionId }));
};
var serializeAws_json1_1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1StringMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1SubnetIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SupportedProductConfig = function (input, context) {
    return __assign(__assign({}, (input.Args !== undefined &&
        input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_json1_1SupportedProductsList = function (input, context) {
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
var serializeAws_json1_1TerminateJobFlowsInput = function (input, context) {
    return __assign({}, (input.JobFlowIds !== undefined &&
        input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }));
};
var serializeAws_json1_1UpdateStudioInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DefaultS3Location !== undefined &&
        input.DefaultS3Location !== null && { DefaultS3Location: input.DefaultS3Location })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }));
};
var serializeAws_json1_1UpdateStudioSessionMappingInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId })), (input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName })), (input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType })), (input.SessionPolicyArn !== undefined &&
        input.SessionPolicyArn !== null && { SessionPolicyArn: input.SessionPolicyArn })), (input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }));
};
var serializeAws_json1_1VolumeSpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops })), (input.SizeInGB !== undefined && input.SizeInGB !== null && { SizeInGB: input.SizeInGB })), (input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }));
};
var serializeAws_json1_1XmlStringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1XmlStringMaxLen256List = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1AddInstanceFleetOutput = function (output, context) {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        InstanceFleetId: output.InstanceFleetId !== undefined && output.InstanceFleetId !== null ? output.InstanceFleetId : undefined,
    };
};
var deserializeAws_json1_1AddInstanceGroupsOutput = function (output, context) {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        InstanceGroupIds: output.InstanceGroupIds !== undefined && output.InstanceGroupIds !== null
            ? deserializeAws_json1_1InstanceGroupIdsList(output.InstanceGroupIds, context)
            : undefined,
        JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
    };
};
var deserializeAws_json1_1AddJobFlowStepsOutput = function (output, context) {
    return {
        StepIds: output.StepIds !== undefined && output.StepIds !== null
            ? deserializeAws_json1_1StepIdsList(output.StepIds, context)
            : undefined,
    };
};
var deserializeAws_json1_1AddTagsOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1Application = function (output, context) {
    return {
        AdditionalInfo: output.AdditionalInfo !== undefined && output.AdditionalInfo !== null
            ? deserializeAws_json1_1StringMap(output.AdditionalInfo, context)
            : undefined,
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1StringList(output.Args, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_json1_1ApplicationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Application(entry, context);
    });
};
var deserializeAws_json1_1AutoScalingPolicyDescription = function (output, context) {
    return {
        Constraints: output.Constraints !== undefined && output.Constraints !== null
            ? deserializeAws_json1_1ScalingConstraints(output.Constraints, context)
            : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1ScalingRuleList(output.Rules, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1AutoScalingPolicyStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_json1_1AutoScalingPolicyStateChangeReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1AutoScalingPolicyStatus = function (output, context) {
    return {
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1AutoScalingPolicyStateChangeReason(output.StateChangeReason, context)
            : undefined,
    };
};
var deserializeAws_json1_1BlockPublicAccessConfiguration = function (output, context) {
    return {
        BlockPublicSecurityGroupRules: output.BlockPublicSecurityGroupRules !== undefined && output.BlockPublicSecurityGroupRules !== null
            ? output.BlockPublicSecurityGroupRules
            : undefined,
        Classification: output.Classification !== undefined && output.Classification !== null ? output.Classification : undefined,
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
            : undefined,
        PermittedPublicSecurityGroupRuleRanges: output.PermittedPublicSecurityGroupRuleRanges !== undefined &&
            output.PermittedPublicSecurityGroupRuleRanges !== null
            ? deserializeAws_json1_1PortRanges(output.PermittedPublicSecurityGroupRuleRanges, context)
            : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1StringMap(output.Properties, context)
            : undefined,
    };
};
var deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = function (output, context) {
    return {
        CreatedByArn: output.CreatedByArn !== undefined && output.CreatedByArn !== null ? output.CreatedByArn : undefined,
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1BootstrapActionConfig = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScriptBootstrapAction: output.ScriptBootstrapAction !== undefined && output.ScriptBootstrapAction !== null
            ? deserializeAws_json1_1ScriptBootstrapActionConfig(output.ScriptBootstrapAction, context)
            : undefined,
    };
};
var deserializeAws_json1_1BootstrapActionDetail = function (output, context) {
    return {
        BootstrapActionConfig: output.BootstrapActionConfig !== undefined && output.BootstrapActionConfig !== null
            ? deserializeAws_json1_1BootstrapActionConfig(output.BootstrapActionConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1BootstrapActionDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BootstrapActionDetail(entry, context);
    });
};
var deserializeAws_json1_1CancelStepsInfo = function (output, context) {
    return {
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StepId: output.StepId !== undefined && output.StepId !== null ? output.StepId : undefined,
    };
};
var deserializeAws_json1_1CancelStepsInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CancelStepsInfo(entry, context);
    });
};
var deserializeAws_json1_1CancelStepsOutput = function (output, context) {
    return {
        CancelStepsInfoList: output.CancelStepsInfoList !== undefined && output.CancelStepsInfoList !== null
            ? deserializeAws_json1_1CancelStepsInfoList(output.CancelStepsInfoList, context)
            : undefined,
    };
};
var deserializeAws_json1_1CloudWatchAlarmDefinition = function (output, context) {
    return {
        ComparisonOperator: output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
            ? output.ComparisonOperator
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_json1_1MetricDimensionList(output.Dimensions, context)
            : undefined,
        EvaluationPeriods: output.EvaluationPeriods !== undefined && output.EvaluationPeriods !== null
            ? output.EvaluationPeriods
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
        Period: output.Period !== undefined && output.Period !== null ? output.Period : undefined,
        Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
var deserializeAws_json1_1Cluster = function (output, context) {
    return {
        Applications: output.Applications !== undefined && output.Applications !== null
            ? deserializeAws_json1_1ApplicationList(output.Applications, context)
            : undefined,
        AutoScalingRole: output.AutoScalingRole !== undefined && output.AutoScalingRole !== null ? output.AutoScalingRole : undefined,
        AutoTerminate: output.AutoTerminate !== undefined && output.AutoTerminate !== null ? output.AutoTerminate : undefined,
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
            : undefined,
        CustomAmiId: output.CustomAmiId !== undefined && output.CustomAmiId !== null ? output.CustomAmiId : undefined,
        EbsRootVolumeSize: output.EbsRootVolumeSize !== undefined && output.EbsRootVolumeSize !== null
            ? output.EbsRootVolumeSize
            : undefined,
        Ec2InstanceAttributes: output.Ec2InstanceAttributes !== undefined && output.Ec2InstanceAttributes !== null
            ? deserializeAws_json1_1Ec2InstanceAttributes(output.Ec2InstanceAttributes, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceCollectionType: output.InstanceCollectionType !== undefined && output.InstanceCollectionType !== null
            ? output.InstanceCollectionType
            : undefined,
        KerberosAttributes: output.KerberosAttributes !== undefined && output.KerberosAttributes !== null
            ? deserializeAws_json1_1KerberosAttributes(output.KerberosAttributes, context)
            : undefined,
        LogEncryptionKmsKeyId: output.LogEncryptionKmsKeyId !== undefined && output.LogEncryptionKmsKeyId !== null
            ? output.LogEncryptionKmsKeyId
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        MasterPublicDnsName: output.MasterPublicDnsName !== undefined && output.MasterPublicDnsName !== null
            ? output.MasterPublicDnsName
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NormalizedInstanceHours: output.NormalizedInstanceHours !== undefined && output.NormalizedInstanceHours !== null
            ? output.NormalizedInstanceHours
            : undefined,
        OutpostArn: output.OutpostArn !== undefined && output.OutpostArn !== null ? output.OutpostArn : undefined,
        PlacementGroups: output.PlacementGroups !== undefined && output.PlacementGroups !== null
            ? deserializeAws_json1_1PlacementGroupConfigList(output.PlacementGroups, context)
            : undefined,
        ReleaseLabel: output.ReleaseLabel !== undefined && output.ReleaseLabel !== null ? output.ReleaseLabel : undefined,
        RepoUpgradeOnBoot: output.RepoUpgradeOnBoot !== undefined && output.RepoUpgradeOnBoot !== null
            ? output.RepoUpgradeOnBoot
            : undefined,
        RequestedAmiVersion: output.RequestedAmiVersion !== undefined && output.RequestedAmiVersion !== null
            ? output.RequestedAmiVersion
            : undefined,
        RunningAmiVersion: output.RunningAmiVersion !== undefined && output.RunningAmiVersion !== null
            ? output.RunningAmiVersion
            : undefined,
        ScaleDownBehavior: output.ScaleDownBehavior !== undefined && output.ScaleDownBehavior !== null
            ? output.ScaleDownBehavior
            : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1ClusterStatus(output.Status, context)
            : undefined,
        StepConcurrencyLevel: output.StepConcurrencyLevel !== undefined && output.StepConcurrencyLevel !== null
            ? output.StepConcurrencyLevel
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        TerminationProtected: output.TerminationProtected !== undefined && output.TerminationProtected !== null
            ? output.TerminationProtected
            : undefined,
        VisibleToAllUsers: output.VisibleToAllUsers !== undefined && output.VisibleToAllUsers !== null
            ? output.VisibleToAllUsers
            : undefined,
    };
};
var deserializeAws_json1_1ClusterStateChangeReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1ClusterStatus = function (output, context) {
    return {
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1ClusterStateChangeReason(output.StateChangeReason, context)
            : undefined,
        Timeline: output.Timeline !== undefined && output.Timeline !== null
            ? deserializeAws_json1_1ClusterTimeline(output.Timeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1ClusterSummary = function (output, context) {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NormalizedInstanceHours: output.NormalizedInstanceHours !== undefined && output.NormalizedInstanceHours !== null
            ? output.NormalizedInstanceHours
            : undefined,
        OutpostArn: output.OutpostArn !== undefined && output.OutpostArn !== null ? output.OutpostArn : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1ClusterStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_json1_1ClusterSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClusterSummary(entry, context);
    });
};
var deserializeAws_json1_1ClusterTimeline = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        ReadyDateTime: output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
            ? new Date(Math.round(output.ReadyDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1Command = function (output, context) {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1StringList(output.Args, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScriptPath: output.ScriptPath !== undefined && output.ScriptPath !== null ? output.ScriptPath : undefined,
    };
};
var deserializeAws_json1_1CommandList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Command(entry, context);
    });
};
var deserializeAws_json1_1ComputeLimits = function (output, context) {
    return {
        MaximumCapacityUnits: output.MaximumCapacityUnits !== undefined && output.MaximumCapacityUnits !== null
            ? output.MaximumCapacityUnits
            : undefined,
        MaximumCoreCapacityUnits: output.MaximumCoreCapacityUnits !== undefined && output.MaximumCoreCapacityUnits !== null
            ? output.MaximumCoreCapacityUnits
            : undefined,
        MaximumOnDemandCapacityUnits: output.MaximumOnDemandCapacityUnits !== undefined && output.MaximumOnDemandCapacityUnits !== null
            ? output.MaximumOnDemandCapacityUnits
            : undefined,
        MinimumCapacityUnits: output.MinimumCapacityUnits !== undefined && output.MinimumCapacityUnits !== null
            ? output.MinimumCapacityUnits
            : undefined,
        UnitType: output.UnitType !== undefined && output.UnitType !== null ? output.UnitType : undefined,
    };
};
var deserializeAws_json1_1Configuration = function (output, context) {
    return {
        Classification: output.Classification !== undefined && output.Classification !== null ? output.Classification : undefined,
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
            : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1StringMap(output.Properties, context)
            : undefined,
    };
};
var deserializeAws_json1_1ConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Configuration(entry, context);
    });
};
var deserializeAws_json1_1CreateSecurityConfigurationOutput = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1CreateStudioOutput = function (output, context) {
    return {
        StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
var deserializeAws_json1_1DeleteSecurityConfigurationOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1DescribeClusterOutput = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeJobFlowsOutput = function (output, context) {
    return {
        JobFlows: output.JobFlows !== undefined && output.JobFlows !== null
            ? deserializeAws_json1_1JobFlowDetailList(output.JobFlows, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeNotebookExecutionOutput = function (output, context) {
    return {
        NotebookExecution: output.NotebookExecution !== undefined && output.NotebookExecution !== null
            ? deserializeAws_json1_1NotebookExecution(output.NotebookExecution, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSecurityConfigurationOutput = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SecurityConfiguration: output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
            ? output.SecurityConfiguration
            : undefined,
    };
};
var deserializeAws_json1_1DescribeStepOutput = function (output, context) {
    return {
        Step: output.Step !== undefined && output.Step !== null ? deserializeAws_json1_1Step(output.Step, context) : undefined,
    };
};
var deserializeAws_json1_1DescribeStudioOutput = function (output, context) {
    return {
        Studio: output.Studio !== undefined && output.Studio !== null
            ? deserializeAws_json1_1Studio(output.Studio, context)
            : undefined,
    };
};
var deserializeAws_json1_1EbsBlockDevice = function (output, context) {
    return {
        Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
        VolumeSpecification: output.VolumeSpecification !== undefined && output.VolumeSpecification !== null
            ? deserializeAws_json1_1VolumeSpecification(output.VolumeSpecification, context)
            : undefined,
    };
};
var deserializeAws_json1_1EbsBlockDeviceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EbsBlockDevice(entry, context);
    });
};
var deserializeAws_json1_1EbsVolume = function (output, context) {
    return {
        Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
    };
};
var deserializeAws_json1_1EbsVolumeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EbsVolume(entry, context);
    });
};
var deserializeAws_json1_1Ec2InstanceAttributes = function (output, context) {
    return {
        AdditionalMasterSecurityGroups: output.AdditionalMasterSecurityGroups !== undefined && output.AdditionalMasterSecurityGroups !== null
            ? deserializeAws_json1_1StringList(output.AdditionalMasterSecurityGroups, context)
            : undefined,
        AdditionalSlaveSecurityGroups: output.AdditionalSlaveSecurityGroups !== undefined && output.AdditionalSlaveSecurityGroups !== null
            ? deserializeAws_json1_1StringList(output.AdditionalSlaveSecurityGroups, context)
            : undefined,
        Ec2AvailabilityZone: output.Ec2AvailabilityZone !== undefined && output.Ec2AvailabilityZone !== null
            ? output.Ec2AvailabilityZone
            : undefined,
        Ec2KeyName: output.Ec2KeyName !== undefined && output.Ec2KeyName !== null ? output.Ec2KeyName : undefined,
        Ec2SubnetId: output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null ? output.Ec2SubnetId : undefined,
        EmrManagedMasterSecurityGroup: output.EmrManagedMasterSecurityGroup !== undefined && output.EmrManagedMasterSecurityGroup !== null
            ? output.EmrManagedMasterSecurityGroup
            : undefined,
        EmrManagedSlaveSecurityGroup: output.EmrManagedSlaveSecurityGroup !== undefined && output.EmrManagedSlaveSecurityGroup !== null
            ? output.EmrManagedSlaveSecurityGroup
            : undefined,
        IamInstanceProfile: output.IamInstanceProfile !== undefined && output.IamInstanceProfile !== null
            ? output.IamInstanceProfile
            : undefined,
        RequestedEc2AvailabilityZones: output.RequestedEc2AvailabilityZones !== undefined && output.RequestedEc2AvailabilityZones !== null
            ? deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2AvailabilityZones, context)
            : undefined,
        RequestedEc2SubnetIds: output.RequestedEc2SubnetIds !== undefined && output.RequestedEc2SubnetIds !== null
            ? deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2SubnetIds, context)
            : undefined,
        ServiceAccessSecurityGroup: output.ServiceAccessSecurityGroup !== undefined && output.ServiceAccessSecurityGroup !== null
            ? output.ServiceAccessSecurityGroup
            : undefined,
    };
};
var deserializeAws_json1_1EC2InstanceIdsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1ExecutionEngineConfig = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MasterInstanceSecurityGroupId: output.MasterInstanceSecurityGroupId !== undefined && output.MasterInstanceSecurityGroupId !== null
            ? output.MasterInstanceSecurityGroupId
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_json1_1FailureDetails = function (output, context) {
    return {
        LogFile: output.LogFile !== undefined && output.LogFile !== null ? output.LogFile : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
var deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = function (output, context) {
    return {
        BlockPublicAccessConfiguration: output.BlockPublicAccessConfiguration !== undefined && output.BlockPublicAccessConfiguration !== null
            ? deserializeAws_json1_1BlockPublicAccessConfiguration(output.BlockPublicAccessConfiguration, context)
            : undefined,
        BlockPublicAccessConfigurationMetadata: output.BlockPublicAccessConfigurationMetadata !== undefined &&
            output.BlockPublicAccessConfigurationMetadata !== null
            ? deserializeAws_json1_1BlockPublicAccessConfigurationMetadata(output.BlockPublicAccessConfigurationMetadata, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetManagedScalingPolicyOutput = function (output, context) {
    return {
        ManagedScalingPolicy: output.ManagedScalingPolicy !== undefined && output.ManagedScalingPolicy !== null
            ? deserializeAws_json1_1ManagedScalingPolicy(output.ManagedScalingPolicy, context)
            : undefined,
    };
};
var deserializeAws_json1_1GetStudioSessionMappingOutput = function (output, context) {
    return {
        SessionMapping: output.SessionMapping !== undefined && output.SessionMapping !== null
            ? deserializeAws_json1_1SessionMappingDetail(output.SessionMapping, context)
            : undefined,
    };
};
var deserializeAws_json1_1HadoopJarStepConfig = function (output, context) {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1XmlStringList(output.Args, context)
            : undefined,
        Jar: output.Jar !== undefined && output.Jar !== null ? output.Jar : undefined,
        MainClass: output.MainClass !== undefined && output.MainClass !== null ? output.MainClass : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1KeyValueList(output.Properties, context)
            : undefined,
    };
};
var deserializeAws_json1_1HadoopStepConfig = function (output, context) {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1StringList(output.Args, context)
            : undefined,
        Jar: output.Jar !== undefined && output.Jar !== null ? output.Jar : undefined,
        MainClass: output.MainClass !== undefined && output.MainClass !== null ? output.MainClass : undefined,
        Properties: output.Properties !== undefined && output.Properties !== null
            ? deserializeAws_json1_1StringMap(output.Properties, context)
            : undefined,
    };
};
var deserializeAws_json1_1Instance = function (output, context) {
    return {
        EbsVolumes: output.EbsVolumes !== undefined && output.EbsVolumes !== null
            ? deserializeAws_json1_1EbsVolumeList(output.EbsVolumes, context)
            : undefined,
        Ec2InstanceId: output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null ? output.Ec2InstanceId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceFleetId: output.InstanceFleetId !== undefined && output.InstanceFleetId !== null ? output.InstanceFleetId : undefined,
        InstanceGroupId: output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
        PrivateDnsName: output.PrivateDnsName !== undefined && output.PrivateDnsName !== null ? output.PrivateDnsName : undefined,
        PrivateIpAddress: output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
        PublicDnsName: output.PublicDnsName !== undefined && output.PublicDnsName !== null ? output.PublicDnsName : undefined,
        PublicIpAddress: output.PublicIpAddress !== undefined && output.PublicIpAddress !== null ? output.PublicIpAddress : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1InstanceStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceFleet = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceFleetType: output.InstanceFleetType !== undefined && output.InstanceFleetType !== null
            ? output.InstanceFleetType
            : undefined,
        InstanceTypeSpecifications: output.InstanceTypeSpecifications !== undefined && output.InstanceTypeSpecifications !== null
            ? deserializeAws_json1_1InstanceTypeSpecificationList(output.InstanceTypeSpecifications, context)
            : undefined,
        LaunchSpecifications: output.LaunchSpecifications !== undefined && output.LaunchSpecifications !== null
            ? deserializeAws_json1_1InstanceFleetProvisioningSpecifications(output.LaunchSpecifications, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProvisionedOnDemandCapacity: output.ProvisionedOnDemandCapacity !== undefined && output.ProvisionedOnDemandCapacity !== null
            ? output.ProvisionedOnDemandCapacity
            : undefined,
        ProvisionedSpotCapacity: output.ProvisionedSpotCapacity !== undefined && output.ProvisionedSpotCapacity !== null
            ? output.ProvisionedSpotCapacity
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1InstanceFleetStatus(output.Status, context)
            : undefined,
        TargetOnDemandCapacity: output.TargetOnDemandCapacity !== undefined && output.TargetOnDemandCapacity !== null
            ? output.TargetOnDemandCapacity
            : undefined,
        TargetSpotCapacity: output.TargetSpotCapacity !== undefined && output.TargetSpotCapacity !== null
            ? output.TargetSpotCapacity
            : undefined,
    };
};
var deserializeAws_json1_1InstanceFleetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceFleet(entry, context);
    });
};
var deserializeAws_json1_1InstanceFleetProvisioningSpecifications = function (output, context) {
    return {
        OnDemandSpecification: output.OnDemandSpecification !== undefined && output.OnDemandSpecification !== null
            ? deserializeAws_json1_1OnDemandProvisioningSpecification(output.OnDemandSpecification, context)
            : undefined,
        SpotSpecification: output.SpotSpecification !== undefined && output.SpotSpecification !== null
            ? deserializeAws_json1_1SpotProvisioningSpecification(output.SpotSpecification, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceFleetStateChangeReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InstanceFleetStatus = function (output, context) {
    return {
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1InstanceFleetStateChangeReason(output.StateChangeReason, context)
            : undefined,
        Timeline: output.Timeline !== undefined && output.Timeline !== null
            ? deserializeAws_json1_1InstanceFleetTimeline(output.Timeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceFleetTimeline = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        ReadyDateTime: output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
            ? new Date(Math.round(output.ReadyDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1InstanceGroup = function (output, context) {
    return {
        AutoScalingPolicy: output.AutoScalingPolicy !== undefined && output.AutoScalingPolicy !== null
            ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
            : undefined,
        BidPrice: output.BidPrice !== undefined && output.BidPrice !== null ? output.BidPrice : undefined,
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
            : undefined,
        ConfigurationsVersion: output.ConfigurationsVersion !== undefined && output.ConfigurationsVersion !== null
            ? output.ConfigurationsVersion
            : undefined,
        EbsBlockDevices: output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null
            ? deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context)
            : undefined,
        EbsOptimized: output.EbsOptimized !== undefined && output.EbsOptimized !== null ? output.EbsOptimized : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceGroupType: output.InstanceGroupType !== undefined && output.InstanceGroupType !== null
            ? output.InstanceGroupType
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LastSuccessfullyAppliedConfigurations: output.LastSuccessfullyAppliedConfigurations !== undefined &&
            output.LastSuccessfullyAppliedConfigurations !== null
            ? deserializeAws_json1_1ConfigurationList(output.LastSuccessfullyAppliedConfigurations, context)
            : undefined,
        LastSuccessfullyAppliedConfigurationsVersion: output.LastSuccessfullyAppliedConfigurationsVersion !== undefined &&
            output.LastSuccessfullyAppliedConfigurationsVersion !== null
            ? output.LastSuccessfullyAppliedConfigurationsVersion
            : undefined,
        Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RequestedInstanceCount: output.RequestedInstanceCount !== undefined && output.RequestedInstanceCount !== null
            ? output.RequestedInstanceCount
            : undefined,
        RunningInstanceCount: output.RunningInstanceCount !== undefined && output.RunningInstanceCount !== null
            ? output.RunningInstanceCount
            : undefined,
        ShrinkPolicy: output.ShrinkPolicy !== undefined && output.ShrinkPolicy !== null
            ? deserializeAws_json1_1ShrinkPolicy(output.ShrinkPolicy, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1InstanceGroupStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceGroupDetail = function (output, context) {
    return {
        BidPrice: output.BidPrice !== undefined && output.BidPrice !== null ? output.BidPrice : undefined,
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        InstanceGroupId: output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
        InstanceRequestCount: output.InstanceRequestCount !== undefined && output.InstanceRequestCount !== null
            ? output.InstanceRequestCount
            : undefined,
        InstanceRole: output.InstanceRole !== undefined && output.InstanceRole !== null ? output.InstanceRole : undefined,
        InstanceRunningCount: output.InstanceRunningCount !== undefined && output.InstanceRunningCount !== null
            ? output.InstanceRunningCount
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LastStateChangeReason: output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
            ? output.LastStateChangeReason
            : undefined,
        Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ReadyDateTime: output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
            ? new Date(Math.round(output.ReadyDateTime * 1000))
            : undefined,
        StartDateTime: output.StartDateTime !== undefined && output.StartDateTime !== null
            ? new Date(Math.round(output.StartDateTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
var deserializeAws_json1_1InstanceGroupDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceGroupDetail(entry, context);
    });
};
var deserializeAws_json1_1InstanceGroupIdsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1InstanceGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceGroup(entry, context);
    });
};
var deserializeAws_json1_1InstanceGroupStateChangeReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InstanceGroupStatus = function (output, context) {
    return {
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1InstanceGroupStateChangeReason(output.StateChangeReason, context)
            : undefined,
        Timeline: output.Timeline !== undefined && output.Timeline !== null
            ? deserializeAws_json1_1InstanceGroupTimeline(output.Timeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceGroupTimeline = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        ReadyDateTime: output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
            ? new Date(Math.round(output.ReadyDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1InstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Instance(entry, context);
    });
};
var deserializeAws_json1_1InstanceResizePolicy = function (output, context) {
    return {
        InstanceTerminationTimeout: output.InstanceTerminationTimeout !== undefined && output.InstanceTerminationTimeout !== null
            ? output.InstanceTerminationTimeout
            : undefined,
        InstancesToProtect: output.InstancesToProtect !== undefined && output.InstancesToProtect !== null
            ? deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToProtect, context)
            : undefined,
        InstancesToTerminate: output.InstancesToTerminate !== undefined && output.InstancesToTerminate !== null
            ? deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToTerminate, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceStateChangeReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InstanceStatus = function (output, context) {
    return {
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1InstanceStateChangeReason(output.StateChangeReason, context)
            : undefined,
        Timeline: output.Timeline !== undefined && output.Timeline !== null
            ? deserializeAws_json1_1InstanceTimeline(output.Timeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1InstanceTimeline = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        ReadyDateTime: output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
            ? new Date(Math.round(output.ReadyDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1InstanceTypeSpecification = function (output, context) {
    return {
        BidPrice: output.BidPrice !== undefined && output.BidPrice !== null ? output.BidPrice : undefined,
        BidPriceAsPercentageOfOnDemandPrice: output.BidPriceAsPercentageOfOnDemandPrice !== undefined && output.BidPriceAsPercentageOfOnDemandPrice !== null
            ? output.BidPriceAsPercentageOfOnDemandPrice
            : undefined,
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
            : undefined,
        EbsBlockDevices: output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null
            ? deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context)
            : undefined,
        EbsOptimized: output.EbsOptimized !== undefined && output.EbsOptimized !== null ? output.EbsOptimized : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        WeightedCapacity: output.WeightedCapacity !== undefined && output.WeightedCapacity !== null ? output.WeightedCapacity : undefined,
    };
};
var deserializeAws_json1_1InstanceTypeSpecificationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceTypeSpecification(entry, context);
    });
};
var deserializeAws_json1_1InternalServerError = function (output, context) {
    return {};
};
var deserializeAws_json1_1InternalServerException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1InvalidRequestException = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1JobFlowDetail = function (output, context) {
    return {
        AmiVersion: output.AmiVersion !== undefined && output.AmiVersion !== null ? output.AmiVersion : undefined,
        AutoScalingRole: output.AutoScalingRole !== undefined && output.AutoScalingRole !== null ? output.AutoScalingRole : undefined,
        BootstrapActions: output.BootstrapActions !== undefined && output.BootstrapActions !== null
            ? deserializeAws_json1_1BootstrapActionDetailList(output.BootstrapActions, context)
            : undefined,
        ExecutionStatusDetail: output.ExecutionStatusDetail !== undefined && output.ExecutionStatusDetail !== null
            ? deserializeAws_json1_1JobFlowExecutionStatusDetail(output.ExecutionStatusDetail, context)
            : undefined,
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1JobFlowInstancesDetail(output.Instances, context)
            : undefined,
        JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
        JobFlowRole: output.JobFlowRole !== undefined && output.JobFlowRole !== null ? output.JobFlowRole : undefined,
        LogEncryptionKmsKeyId: output.LogEncryptionKmsKeyId !== undefined && output.LogEncryptionKmsKeyId !== null
            ? output.LogEncryptionKmsKeyId
            : undefined,
        LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScaleDownBehavior: output.ScaleDownBehavior !== undefined && output.ScaleDownBehavior !== null
            ? output.ScaleDownBehavior
            : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
        Steps: output.Steps !== undefined && output.Steps !== null
            ? deserializeAws_json1_1StepDetailList(output.Steps, context)
            : undefined,
        SupportedProducts: output.SupportedProducts !== undefined && output.SupportedProducts !== null
            ? deserializeAws_json1_1SupportedProductsList(output.SupportedProducts, context)
            : undefined,
        VisibleToAllUsers: output.VisibleToAllUsers !== undefined && output.VisibleToAllUsers !== null
            ? output.VisibleToAllUsers
            : undefined,
    };
};
var deserializeAws_json1_1JobFlowDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobFlowDetail(entry, context);
    });
};
var deserializeAws_json1_1JobFlowExecutionStatusDetail = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        LastStateChangeReason: output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
            ? output.LastStateChangeReason
            : undefined,
        ReadyDateTime: output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
            ? new Date(Math.round(output.ReadyDateTime * 1000))
            : undefined,
        StartDateTime: output.StartDateTime !== undefined && output.StartDateTime !== null
            ? new Date(Math.round(output.StartDateTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
var deserializeAws_json1_1JobFlowInstancesDetail = function (output, context) {
    return {
        Ec2KeyName: output.Ec2KeyName !== undefined && output.Ec2KeyName !== null ? output.Ec2KeyName : undefined,
        Ec2SubnetId: output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null ? output.Ec2SubnetId : undefined,
        HadoopVersion: output.HadoopVersion !== undefined && output.HadoopVersion !== null ? output.HadoopVersion : undefined,
        InstanceCount: output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
        InstanceGroups: output.InstanceGroups !== undefined && output.InstanceGroups !== null
            ? deserializeAws_json1_1InstanceGroupDetailList(output.InstanceGroups, context)
            : undefined,
        KeepJobFlowAliveWhenNoSteps: output.KeepJobFlowAliveWhenNoSteps !== undefined && output.KeepJobFlowAliveWhenNoSteps !== null
            ? output.KeepJobFlowAliveWhenNoSteps
            : undefined,
        MasterInstanceId: output.MasterInstanceId !== undefined && output.MasterInstanceId !== null ? output.MasterInstanceId : undefined,
        MasterInstanceType: output.MasterInstanceType !== undefined && output.MasterInstanceType !== null
            ? output.MasterInstanceType
            : undefined,
        MasterPublicDnsName: output.MasterPublicDnsName !== undefined && output.MasterPublicDnsName !== null
            ? output.MasterPublicDnsName
            : undefined,
        NormalizedInstanceHours: output.NormalizedInstanceHours !== undefined && output.NormalizedInstanceHours !== null
            ? output.NormalizedInstanceHours
            : undefined,
        Placement: output.Placement !== undefined && output.Placement !== null
            ? deserializeAws_json1_1PlacementType(output.Placement, context)
            : undefined,
        SlaveInstanceType: output.SlaveInstanceType !== undefined && output.SlaveInstanceType !== null
            ? output.SlaveInstanceType
            : undefined,
        TerminationProtected: output.TerminationProtected !== undefined && output.TerminationProtected !== null
            ? output.TerminationProtected
            : undefined,
    };
};
var deserializeAws_json1_1KerberosAttributes = function (output, context) {
    return {
        ADDomainJoinPassword: output.ADDomainJoinPassword !== undefined && output.ADDomainJoinPassword !== null
            ? output.ADDomainJoinPassword
            : undefined,
        ADDomainJoinUser: output.ADDomainJoinUser !== undefined && output.ADDomainJoinUser !== null ? output.ADDomainJoinUser : undefined,
        CrossRealmTrustPrincipalPassword: output.CrossRealmTrustPrincipalPassword !== undefined && output.CrossRealmTrustPrincipalPassword !== null
            ? output.CrossRealmTrustPrincipalPassword
            : undefined,
        KdcAdminPassword: output.KdcAdminPassword !== undefined && output.KdcAdminPassword !== null ? output.KdcAdminPassword : undefined,
        Realm: output.Realm !== undefined && output.Realm !== null ? output.Realm : undefined,
    };
};
var deserializeAws_json1_1KeyValue = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1KeyValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValue(entry, context);
    });
};
var deserializeAws_json1_1ListBootstrapActionsOutput = function (output, context) {
    return {
        BootstrapActions: output.BootstrapActions !== undefined && output.BootstrapActions !== null
            ? deserializeAws_json1_1CommandList(output.BootstrapActions, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1ListClustersOutput = function (output, context) {
    return {
        Clusters: output.Clusters !== undefined && output.Clusters !== null
            ? deserializeAws_json1_1ClusterSummaryList(output.Clusters, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1ListInstanceFleetsOutput = function (output, context) {
    return {
        InstanceFleets: output.InstanceFleets !== undefined && output.InstanceFleets !== null
            ? deserializeAws_json1_1InstanceFleetList(output.InstanceFleets, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1ListInstanceGroupsOutput = function (output, context) {
    return {
        InstanceGroups: output.InstanceGroups !== undefined && output.InstanceGroups !== null
            ? deserializeAws_json1_1InstanceGroupList(output.InstanceGroups, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1ListInstancesOutput = function (output, context) {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1InstanceList(output.Instances, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
var deserializeAws_json1_1ListNotebookExecutionsOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        NotebookExecutions: output.NotebookExecutions !== undefined && output.NotebookExecutions !== null
            ? deserializeAws_json1_1NotebookExecutionSummaryList(output.NotebookExecutions, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListSecurityConfigurationsOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        SecurityConfigurations: output.SecurityConfigurations !== undefined && output.SecurityConfigurations !== null
            ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListStepsOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Steps: output.Steps !== undefined && output.Steps !== null
            ? deserializeAws_json1_1StepSummaryList(output.Steps, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListStudioSessionMappingsOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        SessionMappings: output.SessionMappings !== undefined && output.SessionMappings !== null
            ? deserializeAws_json1_1SessionMappingSummaryList(output.SessionMappings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListStudiosOutput = function (output, context) {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Studios: output.Studios !== undefined && output.Studios !== null
            ? deserializeAws_json1_1StudioSummaryList(output.Studios, context)
            : undefined,
    };
};
var deserializeAws_json1_1ManagedScalingPolicy = function (output, context) {
    return {
        ComputeLimits: output.ComputeLimits !== undefined && output.ComputeLimits !== null
            ? deserializeAws_json1_1ComputeLimits(output.ComputeLimits, context)
            : undefined,
    };
};
var deserializeAws_json1_1MetricDimension = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1MetricDimensionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricDimension(entry, context);
    });
};
var deserializeAws_json1_1ModifyClusterOutput = function (output, context) {
    return {
        StepConcurrencyLevel: output.StepConcurrencyLevel !== undefined && output.StepConcurrencyLevel !== null
            ? output.StepConcurrencyLevel
            : undefined,
    };
};
var deserializeAws_json1_1NotebookExecution = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        EditorId: output.EditorId !== undefined && output.EditorId !== null ? output.EditorId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ExecutionEngine: output.ExecutionEngine !== undefined && output.ExecutionEngine !== null
            ? deserializeAws_json1_1ExecutionEngineConfig(output.ExecutionEngine, context)
            : undefined,
        LastStateChangeReason: output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
            ? output.LastStateChangeReason
            : undefined,
        NotebookExecutionId: output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
            ? output.NotebookExecutionId
            : undefined,
        NotebookExecutionName: output.NotebookExecutionName !== undefined && output.NotebookExecutionName !== null
            ? output.NotebookExecutionName
            : undefined,
        NotebookInstanceSecurityGroupId: output.NotebookInstanceSecurityGroupId !== undefined && output.NotebookInstanceSecurityGroupId !== null
            ? output.NotebookInstanceSecurityGroupId
            : undefined,
        NotebookParams: output.NotebookParams !== undefined && output.NotebookParams !== null ? output.NotebookParams : undefined,
        OutputNotebookURI: output.OutputNotebookURI !== undefined && output.OutputNotebookURI !== null
            ? output.OutputNotebookURI
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1NotebookExecutionSummary = function (output, context) {
    return {
        EditorId: output.EditorId !== undefined && output.EditorId !== null ? output.EditorId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        NotebookExecutionId: output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
            ? output.NotebookExecutionId
            : undefined,
        NotebookExecutionName: output.NotebookExecutionName !== undefined && output.NotebookExecutionName !== null
            ? output.NotebookExecutionName
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1NotebookExecutionSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NotebookExecutionSummary(entry, context);
    });
};
var deserializeAws_json1_1OnDemandCapacityReservationOptions = function (output, context) {
    return {
        CapacityReservationPreference: output.CapacityReservationPreference !== undefined && output.CapacityReservationPreference !== null
            ? output.CapacityReservationPreference
            : undefined,
        CapacityReservationResourceGroupArn: output.CapacityReservationResourceGroupArn !== undefined && output.CapacityReservationResourceGroupArn !== null
            ? output.CapacityReservationResourceGroupArn
            : undefined,
        UsageStrategy: output.UsageStrategy !== undefined && output.UsageStrategy !== null ? output.UsageStrategy : undefined,
    };
};
var deserializeAws_json1_1OnDemandProvisioningSpecification = function (output, context) {
    return {
        AllocationStrategy: output.AllocationStrategy !== undefined && output.AllocationStrategy !== null
            ? output.AllocationStrategy
            : undefined,
        CapacityReservationOptions: output.CapacityReservationOptions !== undefined && output.CapacityReservationOptions !== null
            ? deserializeAws_json1_1OnDemandCapacityReservationOptions(output.CapacityReservationOptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1PlacementGroupConfig = function (output, context) {
    return {
        InstanceRole: output.InstanceRole !== undefined && output.InstanceRole !== null ? output.InstanceRole : undefined,
        PlacementStrategy: output.PlacementStrategy !== undefined && output.PlacementStrategy !== null
            ? output.PlacementStrategy
            : undefined,
    };
};
var deserializeAws_json1_1PlacementGroupConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};
var deserializeAws_json1_1PlacementType = function (output, context) {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_json1_1XmlStringMaxLen256List(output.AvailabilityZones, context)
            : undefined,
    };
};
var deserializeAws_json1_1PortRange = function (output, context) {
    return {
        MaxRange: output.MaxRange !== undefined && output.MaxRange !== null ? output.MaxRange : undefined,
        MinRange: output.MinRange !== undefined && output.MinRange !== null ? output.MinRange : undefined,
    };
};
var deserializeAws_json1_1PortRanges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortRange(entry, context);
    });
};
var deserializeAws_json1_1PutAutoScalingPolicyOutput = function (output, context) {
    return {
        AutoScalingPolicy: output.AutoScalingPolicy !== undefined && output.AutoScalingPolicy !== null
            ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
            : undefined,
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        InstanceGroupId: output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
    };
};
var deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1PutManagedScalingPolicyOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1RemoveAutoScalingPolicyOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1RemoveManagedScalingPolicyOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1RemoveTagsOutput = function (output, context) {
    return {};
};
var deserializeAws_json1_1RunJobFlowOutput = function (output, context) {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
    };
};
var deserializeAws_json1_1ScalingAction = function (output, context) {
    return {
        Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
        SimpleScalingPolicyConfiguration: output.SimpleScalingPolicyConfiguration !== undefined && output.SimpleScalingPolicyConfiguration !== null
            ? deserializeAws_json1_1SimpleScalingPolicyConfiguration(output.SimpleScalingPolicyConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1ScalingConstraints = function (output, context) {
    return {
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    };
};
var deserializeAws_json1_1ScalingRule = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_json1_1ScalingAction(output.Action, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Trigger: output.Trigger !== undefined && output.Trigger !== null
            ? deserializeAws_json1_1ScalingTrigger(output.Trigger, context)
            : undefined,
    };
};
var deserializeAws_json1_1ScalingRuleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ScalingRule(entry, context);
    });
};
var deserializeAws_json1_1ScalingTrigger = function (output, context) {
    return {
        CloudWatchAlarmDefinition: output.CloudWatchAlarmDefinition !== undefined && output.CloudWatchAlarmDefinition !== null
            ? deserializeAws_json1_1CloudWatchAlarmDefinition(output.CloudWatchAlarmDefinition, context)
            : undefined,
    };
};
var deserializeAws_json1_1ScriptBootstrapActionConfig = function (output, context) {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1XmlStringList(output.Args, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
var deserializeAws_json1_1SecurityConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityConfigurationSummary(entry, context);
    });
};
var deserializeAws_json1_1SecurityConfigurationSummary = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1SessionMappingDetail = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        IdentityName: output.IdentityName !== undefined && output.IdentityName !== null ? output.IdentityName : undefined,
        IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        SessionPolicyArn: output.SessionPolicyArn !== undefined && output.SessionPolicyArn !== null ? output.SessionPolicyArn : undefined,
        StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
    };
};
var deserializeAws_json1_1SessionMappingSummary = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        IdentityName: output.IdentityName !== undefined && output.IdentityName !== null ? output.IdentityName : undefined,
        IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
        SessionPolicyArn: output.SessionPolicyArn !== undefined && output.SessionPolicyArn !== null ? output.SessionPolicyArn : undefined,
        StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
    };
};
var deserializeAws_json1_1SessionMappingSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SessionMappingSummary(entry, context);
    });
};
var deserializeAws_json1_1ShrinkPolicy = function (output, context) {
    return {
        DecommissionTimeout: output.DecommissionTimeout !== undefined && output.DecommissionTimeout !== null
            ? output.DecommissionTimeout
            : undefined,
        InstanceResizePolicy: output.InstanceResizePolicy !== undefined && output.InstanceResizePolicy !== null
            ? deserializeAws_json1_1InstanceResizePolicy(output.InstanceResizePolicy, context)
            : undefined,
    };
};
var deserializeAws_json1_1SimpleScalingPolicyConfiguration = function (output, context) {
    return {
        AdjustmentType: output.AdjustmentType !== undefined && output.AdjustmentType !== null ? output.AdjustmentType : undefined,
        CoolDown: output.CoolDown !== undefined && output.CoolDown !== null ? output.CoolDown : undefined,
        ScalingAdjustment: output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
            ? output.ScalingAdjustment
            : undefined,
    };
};
var deserializeAws_json1_1SpotProvisioningSpecification = function (output, context) {
    return {
        AllocationStrategy: output.AllocationStrategy !== undefined && output.AllocationStrategy !== null
            ? output.AllocationStrategy
            : undefined,
        BlockDurationMinutes: output.BlockDurationMinutes !== undefined && output.BlockDurationMinutes !== null
            ? output.BlockDurationMinutes
            : undefined,
        TimeoutAction: output.TimeoutAction !== undefined && output.TimeoutAction !== null ? output.TimeoutAction : undefined,
        TimeoutDurationMinutes: output.TimeoutDurationMinutes !== undefined && output.TimeoutDurationMinutes !== null
            ? output.TimeoutDurationMinutes
            : undefined,
    };
};
var deserializeAws_json1_1StartNotebookExecutionOutput = function (output, context) {
    return {
        NotebookExecutionId: output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
            ? output.NotebookExecutionId
            : undefined,
    };
};
var deserializeAws_json1_1Step = function (output, context) {
    return {
        ActionOnFailure: output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_json1_1HadoopStepConfig(output.Config, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1StepStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_json1_1StepConfig = function (output, context) {
    return {
        ActionOnFailure: output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
        HadoopJarStep: output.HadoopJarStep !== undefined && output.HadoopJarStep !== null
            ? deserializeAws_json1_1HadoopJarStepConfig(output.HadoopJarStep, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_json1_1StepDetail = function (output, context) {
    return {
        ExecutionStatusDetail: output.ExecutionStatusDetail !== undefined && output.ExecutionStatusDetail !== null
            ? deserializeAws_json1_1StepExecutionStatusDetail(output.ExecutionStatusDetail, context)
            : undefined,
        StepConfig: output.StepConfig !== undefined && output.StepConfig !== null
            ? deserializeAws_json1_1StepConfig(output.StepConfig, context)
            : undefined,
    };
};
var deserializeAws_json1_1StepDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StepDetail(entry, context);
    });
};
var deserializeAws_json1_1StepExecutionStatusDetail = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        LastStateChangeReason: output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
            ? output.LastStateChangeReason
            : undefined,
        StartDateTime: output.StartDateTime !== undefined && output.StartDateTime !== null
            ? new Date(Math.round(output.StartDateTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
var deserializeAws_json1_1StepIdsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1StepStateChangeReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_1StepStatus = function (output, context) {
    return {
        FailureDetails: output.FailureDetails !== undefined && output.FailureDetails !== null
            ? deserializeAws_json1_1FailureDetails(output.FailureDetails, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1StepStateChangeReason(output.StateChangeReason, context)
            : undefined,
        Timeline: output.Timeline !== undefined && output.Timeline !== null
            ? deserializeAws_json1_1StepTimeline(output.Timeline, context)
            : undefined,
    };
};
var deserializeAws_json1_1StepSummary = function (output, context) {
    return {
        ActionOnFailure: output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_json1_1HadoopStepConfig(output.Config, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1StepStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_json1_1StepSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StepSummary(entry, context);
    });
};
var deserializeAws_json1_1StepTimeline = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        EndDateTime: output.EndDateTime !== undefined && output.EndDateTime !== null
            ? new Date(Math.round(output.EndDateTime * 1000))
            : undefined,
        StartDateTime: output.StartDateTime !== undefined && output.StartDateTime !== null
            ? new Date(Math.round(output.StartDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1StringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1StringMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1Studio = function (output, context) {
    return {
        AuthMode: output.AuthMode !== undefined && output.AuthMode !== null ? output.AuthMode : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DefaultS3Location: output.DefaultS3Location !== undefined && output.DefaultS3Location !== null
            ? output.DefaultS3Location
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EngineSecurityGroupId: output.EngineSecurityGroupId !== undefined && output.EngineSecurityGroupId !== null
            ? output.EngineSecurityGroupId
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
        StudioArn: output.StudioArn !== undefined && output.StudioArn !== null ? output.StudioArn : undefined,
        StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
        UserRole: output.UserRole !== undefined && output.UserRole !== null ? output.UserRole : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        WorkspaceSecurityGroupId: output.WorkspaceSecurityGroupId !== undefined && output.WorkspaceSecurityGroupId !== null
            ? output.WorkspaceSecurityGroupId
            : undefined,
    };
};
var deserializeAws_json1_1StudioSummary = function (output, context) {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_json1_1StudioSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StudioSummary(entry, context);
    });
};
var deserializeAws_json1_1SubnetIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1SupportedProductsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var deserializeAws_json1_1VolumeSpecification = function (output, context) {
    return {
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        SizeInGB: output.SizeInGB !== undefined && output.SizeInGB !== null ? output.SizeInGB : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
var deserializeAws_json1_1XmlStringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1XmlStringMaxLen256List = function (output, context) {
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