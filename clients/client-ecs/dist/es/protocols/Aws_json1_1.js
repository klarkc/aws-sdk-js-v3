import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateCapacityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1CreateCapacityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCluster",
        };
        body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateServiceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateService",
        };
        body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateTaskSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateTaskSet",
        };
        body = JSON.stringify(serializeAws_json1_1CreateTaskSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAccountSettingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAccountSettingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteCapacityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteCapacityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCluster",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteServiceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteService",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteTaskSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteTaskSet",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteTaskSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeregisterContainerInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance",
        };
        body = JSON.stringify(serializeAws_json1_1DeregisterContainerInstanceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeregisterTaskDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1DeregisterTaskDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeCapacityProvidersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeCapacityProvidersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeClusters",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeContainerInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeContainerInstancesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeServicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeServices",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTaskDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTaskDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTasksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTasks",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTasksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeTaskSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskSets",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeTaskSetsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DiscoverPollEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint",
        };
        body = JSON.stringify(serializeAws_json1_1DiscoverPollEndpointRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ExecuteCommandCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ExecuteCommand",
        };
        body = JSON.stringify(serializeAws_json1_1ExecuteCommandRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAccountSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAccountSettings",
        };
        body = JSON.stringify(serializeAws_json1_1ListAccountSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1ListAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListClusters",
        };
        body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListContainerInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListContainerInstances",
        };
        body = JSON.stringify(serializeAws_json1_1ListContainerInstancesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListServicesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListServices",
        };
        body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTagsForResource",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTaskDefinitionFamiliesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies",
        };
        body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionFamiliesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTaskDefinitionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions",
        };
        body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTasksCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTasks",
        };
        body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAccountSettingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSetting",
        };
        body = JSON.stringify(serializeAws_json1_1PutAccountSettingRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAccountSettingDefaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault",
        };
        body = JSON.stringify(serializeAws_json1_1PutAccountSettingDefaultRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAttributes",
        };
        body = JSON.stringify(serializeAws_json1_1PutAttributesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1PutClusterCapacityProvidersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders",
        };
        body = JSON.stringify(serializeAws_json1_1PutClusterCapacityProvidersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterContainerInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterContainerInstanceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RegisterTaskDefinitionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition",
        };
        body = JSON.stringify(serializeAws_json1_1RegisterTaskDefinitionRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RunTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.RunTask",
        };
        body = JSON.stringify(serializeAws_json1_1RunTaskRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StartTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.StartTask",
        };
        body = JSON.stringify(serializeAws_json1_1StartTaskRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1StopTaskCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.StopTask",
        };
        body = JSON.stringify(serializeAws_json1_1StopTaskRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SubmitAttachmentStateChangesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges",
        };
        body = JSON.stringify(serializeAws_json1_1SubmitAttachmentStateChangesRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SubmitContainerStateChangeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange",
        };
        body = JSON.stringify(serializeAws_json1_1SubmitContainerStateChangeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1SubmitTaskStateChangeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange",
        };
        body = JSON.stringify(serializeAws_json1_1SubmitTaskStateChangeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.TagResource",
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
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateCapacityProviderCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateCapacityProviderRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCluster",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateClusterSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateClusterSettingsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateContainerAgentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateContainerAgentRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateContainerInstancesStateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateContainerInstancesStateRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateServiceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateService",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateServicePrimaryTaskSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateTaskSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateTaskSet",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateTaskSetRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CreateCapacityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateCapacityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateCapacityProviderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateCapacityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#LimitExceededException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                    case "UpdateInProgressException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#UpdateInProgressException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)];
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateServiceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateServiceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateServiceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateServiceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 10];
                    case "PlatformUnknownException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#PlatformUnknownException": return [3 /*break*/, 12];
                    case "ServerException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 14];
                    case "UnsupportedFeatureException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateTaskSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateTaskSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateTaskSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateTaskSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 10];
                    case "PlatformUnknownException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#PlatformUnknownException": return [3 /*break*/, 12];
                    case "ServerException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 14];
                    case "ServiceNotActiveException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#ServiceNotActiveException": return [3 /*break*/, 16];
                    case "ServiceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 18];
                    case "UnsupportedFeatureException": return [3 /*break*/, 20];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAccountSettingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAccountSettingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAccountSettingResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAccountSettingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "TargetNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#TargetNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteCapacityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteCapacityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteCapacityProviderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteCapacityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterContainsContainerInstancesException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterContainsContainerInstancesException": return [3 /*break*/, 4];
                    case "ClusterContainsServicesException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterContainsServicesException": return [3 /*break*/, 6];
                    case "ClusterContainsTasksException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ClusterContainsTasksException": return [3 /*break*/, 8];
                    case "ClusterNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 10];
                    case "InvalidParameterException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 12];
                    case "ServerException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 14];
                    case "UpdateInProgressException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#UpdateInProgressException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterContainsServicesExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterContainsTasksExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteServiceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteServiceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteServiceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                    case "ServiceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteTaskSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteTaskSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteTaskSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteTaskSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                    case "ServiceNotActiveException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#ServiceNotActiveException": return [3 /*break*/, 12];
                    case "ServiceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 14];
                    case "TaskSetNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#TaskSetNotFoundException": return [3 /*break*/, 16];
                    case "UnsupportedFeatureException": return [3 /*break*/, 18];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeregisterContainerInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeregisterContainerInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeregisterContainerInstanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeregisterContainerInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeregisterTaskDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeregisterTaskDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeregisterTaskDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeregisterTaskDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeCapacityProvidersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeCapacityProvidersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeCapacityProvidersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeCapacityProvidersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeContainerInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeContainerInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeContainerInstancesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeContainerInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeServicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeServicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeServicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTaskDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTaskDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTaskDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTaskDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTasksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTasksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTasksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTasksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeTaskSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeTaskSetsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeTaskSetsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeTaskSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                    case "ServiceNotActiveException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#ServiceNotActiveException": return [3 /*break*/, 12];
                    case "ServiceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 14];
                    case "UnsupportedFeatureException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DiscoverPollEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DiscoverPollEndpointCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DiscoverPollEndpointResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DiscoverPollEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ExecuteCommandCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ExecuteCommandCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ExecuteCommandResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ExecuteCommandCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                    case "TargetNotConnectedException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#TargetNotConnectedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TargetNotConnectedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAccountSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAccountSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAccountSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAccountSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1ListClustersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListContainerInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListContainerInstancesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListContainerInstancesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListContainerInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListServicesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListServicesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListServicesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListServicesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
                contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTaskDefinitionFamiliesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTaskDefinitionFamiliesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTaskDefinitionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTaskDefinitionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTaskDefinitionsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTaskDefinitionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1ListTasksCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTasksCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTasksResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTasksCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                    case "ServiceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAccountSettingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAccountSettingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAccountSettingResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAccountSettingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAccountSettingDefaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAccountSettingDefaultCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAccountSettingDefaultResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAccountSettingDefaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutAttributesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutAttributesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AttributeLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AttributeLimitExceededException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "TargetNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#TargetNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AttributeLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1PutClusterCapacityProvidersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1PutClusterCapacityProvidersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1PutClusterCapacityProvidersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1PutClusterCapacityProvidersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ResourceInUseException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                    case "UpdateInProgressException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#UpdateInProgressException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterContainerInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterContainerInstanceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RegisterContainerInstanceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RegisterContainerInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RegisterTaskDefinitionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RegisterTaskDefinitionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RegisterTaskDefinitionResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RegisterTaskDefinitionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RunTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RunTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RunTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RunTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "BlockedException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#BlockedException": return [3 /*break*/, 4];
                    case "ClientException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 6];
                    case "ClusterNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 8];
                    case "InvalidParameterException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 10];
                    case "PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 12];
                    case "PlatformUnknownException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#PlatformUnknownException": return [3 /*break*/, 14];
                    case "ServerException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 16];
                    case "UnsupportedFeatureException": return [3 /*break*/, 18];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1BlockedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StartTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StartTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StartTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StartTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1StopTaskCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1StopTaskCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1StopTaskResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1StopTaskCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SubmitAttachmentStateChangesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SubmitAttachmentStateChangesResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SubmitAttachmentStateChangesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SubmitContainerStateChangeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SubmitContainerStateChangeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SubmitContainerStateChangeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SubmitContainerStateChangeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1SubmitTaskStateChangeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1SubmitTaskStateChangeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1SubmitTaskStateChangeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1SubmitTaskStateChangeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateCapacityProviderCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateCapacityProviderCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateCapacityProviderResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateCapacityProviderCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateClusterSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateClusterSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateClusterSettingsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateClusterSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateContainerAgentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateContainerAgentCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateContainerAgentResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateContainerAgentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "MissingVersionException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#MissingVersionException": return [3 /*break*/, 8];
                    case "NoUpdateAvailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#NoUpdateAvailableException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 12];
                    case "UpdateInProgressException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#UpdateInProgressException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1MissingVersionExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NoUpdateAvailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateContainerInstancesStateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateContainerInstancesStateCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateContainerInstancesStateResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateContainerInstancesStateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 2];
                    case "ClusterNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateServiceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateServiceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateServiceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException": return [3 /*break*/, 10];
                    case "PlatformUnknownException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#PlatformUnknownException": return [3 /*break*/, 12];
                    case "ServerException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 14];
                    case "ServiceNotActiveException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#ServiceNotActiveException": return [3 /*break*/, 16];
                    case "ServiceNotFoundException": return [3 /*break*/, 18];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                    case "ServiceNotActiveException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#ServiceNotActiveException": return [3 /*break*/, 12];
                    case "ServiceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 14];
                    case "TaskSetNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#TaskSetNotFoundException": return [3 /*break*/, 16];
                    case "UnsupportedFeatureException": return [3 /*break*/, 18];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateTaskSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateTaskSetCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateTaskSetResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateTaskSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.ecs#AccessDeniedException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.ecs#ClientException": return [3 /*break*/, 4];
                    case "ClusterNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.ecs#ClusterNotFoundException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.ecs#InvalidParameterException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.ecs#ServerException": return [3 /*break*/, 10];
                    case "ServiceNotActiveException": return [3 /*break*/, 12];
                    case "com.amazonaws.ecs#ServiceNotActiveException": return [3 /*break*/, 12];
                    case "ServiceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.ecs#ServiceNotFoundException": return [3 /*break*/, 14];
                    case "TaskSetNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.ecs#TaskSetNotFoundException": return [3 /*break*/, 16];
                    case "UnsupportedFeatureException": return [3 /*break*/, 18];
                    case "com.amazonaws.ecs#UnsupportedFeatureException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)];
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
var deserializeAws_json1_1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
        contents = __assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1AttributeLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1AttributeLimitExceededException(body, context);
        contents = __assign({ name: "AttributeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1BlockedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1BlockedException(body, context);
        contents = __assign({ name: "BlockedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClientExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClientException(body, context);
        contents = __assign({ name: "ClientException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterContainsContainerInstancesException(body, context);
        contents = __assign({ name: "ClusterContainsContainerInstancesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClusterContainsServicesExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterContainsServicesException(body, context);
        contents = __assign({ name: "ClusterContainsServicesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClusterContainsTasksExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterContainsTasksException(body, context);
        contents = __assign({ name: "ClusterContainsTasksException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClusterNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterNotFoundException(body, context);
        contents = __assign({ name: "ClusterNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_json1_1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1MissingVersionExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1MissingVersionException(body, context);
        contents = __assign({ name: "MissingVersionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NoUpdateAvailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NoUpdateAvailableException(body, context);
        contents = __assign({ name: "NoUpdateAvailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException(body, context);
        contents = __assign({ name: "PlatformTaskDefinitionIncompatibilityException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1PlatformUnknownExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1PlatformUnknownException(body, context);
        contents = __assign({ name: "PlatformUnknownException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
        contents = __assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServerException(body, context);
        contents = __assign({ name: "ServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceNotActiveExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceNotActiveException(body, context);
        contents = __assign({ name: "ServiceNotActiveException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceNotFoundException(body, context);
        contents = __assign({ name: "ServiceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TargetNotConnectedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TargetNotConnectedException(body, context);
        contents = __assign({ name: "TargetNotConnectedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TargetNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TargetNotFoundException(body, context);
        contents = __assign({ name: "TargetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TaskSetNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TaskSetNotFoundException(body, context);
        contents = __assign({ name: "TaskSetNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UnsupportedFeatureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UnsupportedFeatureException(body, context);
        contents = __assign({ name: "UnsupportedFeatureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1UpdateInProgressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1UpdateInProgressException(body, context);
        contents = __assign({ name: "UpdateInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AttachmentStateChange = function (input, context) {
    return __assign(__assign({}, (input.attachmentArn !== undefined && input.attachmentArn !== null && { attachmentArn: input.attachmentArn })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1AttachmentStateChanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttachmentStateChange(entry, context);
    });
};
var serializeAws_json1_1Attribute = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.targetId !== undefined && input.targetId !== null && { targetId: input.targetId })), (input.targetType !== undefined && input.targetType !== null && { targetType: input.targetType })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1Attributes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attribute(entry, context);
    });
};
var serializeAws_json1_1AutoScalingGroupProvider = function (input, context) {
    return __assign(__assign(__assign({}, (input.autoScalingGroupArn !== undefined &&
        input.autoScalingGroupArn !== null && { autoScalingGroupArn: input.autoScalingGroupArn })), (input.managedScaling !== undefined &&
        input.managedScaling !== null && {
        managedScaling: serializeAws_json1_1ManagedScaling(input.managedScaling, context),
    })), (input.managedTerminationProtection !== undefined &&
        input.managedTerminationProtection !== null && {
        managedTerminationProtection: input.managedTerminationProtection,
    }));
};
var serializeAws_json1_1AutoScalingGroupProviderUpdate = function (input, context) {
    return __assign(__assign({}, (input.managedScaling !== undefined &&
        input.managedScaling !== null && {
        managedScaling: serializeAws_json1_1ManagedScaling(input.managedScaling, context),
    })), (input.managedTerminationProtection !== undefined &&
        input.managedTerminationProtection !== null && {
        managedTerminationProtection: input.managedTerminationProtection,
    }));
};
var serializeAws_json1_1AwsVpcConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.assignPublicIp !== undefined &&
        input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp })), (input.securityGroups !== undefined &&
        input.securityGroups !== null && {
        securityGroups: serializeAws_json1_1StringList(input.securityGroups, context),
    })), (input.subnets !== undefined &&
        input.subnets !== null && { subnets: serializeAws_json1_1StringList(input.subnets, context) }));
};
var serializeAws_json1_1CapacityProviderFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CapacityProviderStrategy = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};
var serializeAws_json1_1CapacityProviderStrategyItem = function (input, context) {
    return __assign(__assign(__assign({}, (input.base !== undefined && input.base !== null && { base: input.base })), (input.capacityProvider !== undefined &&
        input.capacityProvider !== null && { capacityProvider: input.capacityProvider })), (input.weight !== undefined && input.weight !== null && { weight: input.weight }));
};
var serializeAws_json1_1ClusterConfiguration = function (input, context) {
    return __assign({}, (input.executeCommandConfiguration !== undefined &&
        input.executeCommandConfiguration !== null && {
        executeCommandConfiguration: serializeAws_json1_1ExecuteCommandConfiguration(input.executeCommandConfiguration, context),
    }));
};
var serializeAws_json1_1ClusterFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ClusterSetting = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1ClusterSettings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ClusterSetting(entry, context);
    });
};
var serializeAws_json1_1CompatibilityList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ContainerDefinition = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.command !== undefined &&
        input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) })), (input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu })), (input.dependsOn !== undefined &&
        input.dependsOn !== null && { dependsOn: serializeAws_json1_1ContainerDependencies(input.dependsOn, context) })), (input.disableNetworking !== undefined &&
        input.disableNetworking !== null && { disableNetworking: input.disableNetworking })), (input.dnsSearchDomains !== undefined &&
        input.dnsSearchDomains !== null && {
        dnsSearchDomains: serializeAws_json1_1StringList(input.dnsSearchDomains, context),
    })), (input.dnsServers !== undefined &&
        input.dnsServers !== null && { dnsServers: serializeAws_json1_1StringList(input.dnsServers, context) })), (input.dockerLabels !== undefined &&
        input.dockerLabels !== null && {
        dockerLabels: serializeAws_json1_1DockerLabelsMap(input.dockerLabels, context),
    })), (input.dockerSecurityOptions !== undefined &&
        input.dockerSecurityOptions !== null && {
        dockerSecurityOptions: serializeAws_json1_1StringList(input.dockerSecurityOptions, context),
    })), (input.entryPoint !== undefined &&
        input.entryPoint !== null && { entryPoint: serializeAws_json1_1StringList(input.entryPoint, context) })), (input.environment !== undefined &&
        input.environment !== null && {
        environment: serializeAws_json1_1EnvironmentVariables(input.environment, context),
    })), (input.environmentFiles !== undefined &&
        input.environmentFiles !== null && {
        environmentFiles: serializeAws_json1_1EnvironmentFiles(input.environmentFiles, context),
    })), (input.essential !== undefined && input.essential !== null && { essential: input.essential })), (input.extraHosts !== undefined &&
        input.extraHosts !== null && { extraHosts: serializeAws_json1_1HostEntryList(input.extraHosts, context) })), (input.firelensConfiguration !== undefined &&
        input.firelensConfiguration !== null && {
        firelensConfiguration: serializeAws_json1_1FirelensConfiguration(input.firelensConfiguration, context),
    })), (input.healthCheck !== undefined &&
        input.healthCheck !== null && { healthCheck: serializeAws_json1_1HealthCheck(input.healthCheck, context) })), (input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname })), (input.image !== undefined && input.image !== null && { image: input.image })), (input.interactive !== undefined && input.interactive !== null && { interactive: input.interactive })), (input.links !== undefined &&
        input.links !== null && { links: serializeAws_json1_1StringList(input.links, context) })), (input.linuxParameters !== undefined &&
        input.linuxParameters !== null && {
        linuxParameters: serializeAws_json1_1LinuxParameters(input.linuxParameters, context),
    })), (input.logConfiguration !== undefined &&
        input.logConfiguration !== null && {
        logConfiguration: serializeAws_json1_1LogConfiguration(input.logConfiguration, context),
    })), (input.memory !== undefined && input.memory !== null && { memory: input.memory })), (input.memoryReservation !== undefined &&
        input.memoryReservation !== null && { memoryReservation: input.memoryReservation })), (input.mountPoints !== undefined &&
        input.mountPoints !== null && { mountPoints: serializeAws_json1_1MountPointList(input.mountPoints, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.portMappings !== undefined &&
        input.portMappings !== null && {
        portMappings: serializeAws_json1_1PortMappingList(input.portMappings, context),
    })), (input.privileged !== undefined && input.privileged !== null && { privileged: input.privileged })), (input.pseudoTerminal !== undefined &&
        input.pseudoTerminal !== null && { pseudoTerminal: input.pseudoTerminal })), (input.readonlyRootFilesystem !== undefined &&
        input.readonlyRootFilesystem !== null && { readonlyRootFilesystem: input.readonlyRootFilesystem })), (input.repositoryCredentials !== undefined &&
        input.repositoryCredentials !== null && {
        repositoryCredentials: serializeAws_json1_1RepositoryCredentials(input.repositoryCredentials, context),
    })), (input.resourceRequirements !== undefined &&
        input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context),
    })), (input.secrets !== undefined &&
        input.secrets !== null && { secrets: serializeAws_json1_1SecretList(input.secrets, context) })), (input.startTimeout !== undefined && input.startTimeout !== null && { startTimeout: input.startTimeout })), (input.stopTimeout !== undefined && input.stopTimeout !== null && { stopTimeout: input.stopTimeout })), (input.systemControls !== undefined &&
        input.systemControls !== null && {
        systemControls: serializeAws_json1_1SystemControls(input.systemControls, context),
    })), (input.ulimits !== undefined &&
        input.ulimits !== null && { ulimits: serializeAws_json1_1UlimitList(input.ulimits, context) })), (input.user !== undefined && input.user !== null && { user: input.user })), (input.volumesFrom !== undefined &&
        input.volumesFrom !== null && { volumesFrom: serializeAws_json1_1VolumeFromList(input.volumesFrom, context) })), (input.workingDirectory !== undefined &&
        input.workingDirectory !== null && { workingDirectory: input.workingDirectory }));
};
var serializeAws_json1_1ContainerDefinitions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerDefinition(entry, context);
    });
};
var serializeAws_json1_1ContainerDependencies = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerDependency(entry, context);
    });
};
var serializeAws_json1_1ContainerDependency = function (input, context) {
    return __assign(__assign({}, (input.condition !== undefined && input.condition !== null && { condition: input.condition })), (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }));
};
var serializeAws_json1_1ContainerInstanceFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ContainerOverride = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.command !== undefined &&
        input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) })), (input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu })), (input.environment !== undefined &&
        input.environment !== null && {
        environment: serializeAws_json1_1EnvironmentVariables(input.environment, context),
    })), (input.environmentFiles !== undefined &&
        input.environmentFiles !== null && {
        environmentFiles: serializeAws_json1_1EnvironmentFiles(input.environmentFiles, context),
    })), (input.memory !== undefined && input.memory !== null && { memory: input.memory })), (input.memoryReservation !== undefined &&
        input.memoryReservation !== null && { memoryReservation: input.memoryReservation })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.resourceRequirements !== undefined &&
        input.resourceRequirements !== null && {
        resourceRequirements: serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context),
    }));
};
var serializeAws_json1_1ContainerOverrides = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerOverride(entry, context);
    });
};
var serializeAws_json1_1ContainerStateChange = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName })), (input.exitCode !== undefined && input.exitCode !== null && { exitCode: input.exitCode })), (input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest })), (input.networkBindings !== undefined &&
        input.networkBindings !== null && {
        networkBindings: serializeAws_json1_1NetworkBindings(input.networkBindings, context),
    })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.runtimeId !== undefined && input.runtimeId !== null && { runtimeId: input.runtimeId })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1ContainerStateChanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerStateChange(entry, context);
    });
};
var serializeAws_json1_1CreateCapacityProviderRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.autoScalingGroupProvider !== undefined &&
        input.autoScalingGroupProvider !== null && {
        autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProvider(input.autoScalingGroupProvider, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }));
};
var serializeAws_json1_1CreateClusterRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.capacityProviders !== undefined &&
        input.capacityProviders !== null && {
        capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
    })), (input.clusterName !== undefined && input.clusterName !== null && { clusterName: input.clusterName })), (input.configuration !== undefined &&
        input.configuration !== null && {
        configuration: serializeAws_json1_1ClusterConfiguration(input.configuration, context),
    })), (input.defaultCapacityProviderStrategy !== undefined &&
        input.defaultCapacityProviderStrategy !== null && {
        defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context),
    })), (input.settings !== undefined &&
        input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }));
};
var serializeAws_json1_1CreateServiceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.capacityProviderStrategy !== undefined &&
        input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
    })), (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.deploymentConfiguration !== undefined &&
        input.deploymentConfiguration !== null && {
        deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context),
    })), (input.deploymentController !== undefined &&
        input.deploymentController !== null && {
        deploymentController: serializeAws_json1_1DeploymentController(input.deploymentController, context),
    })), (input.desiredCount !== undefined && input.desiredCount !== null && { desiredCount: input.desiredCount })), (input.enableECSManagedTags !== undefined &&
        input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags })), (input.enableExecuteCommand !== undefined &&
        input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand })), (input.healthCheckGracePeriodSeconds !== undefined &&
        input.healthCheckGracePeriodSeconds !== null && {
        healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
    })), (input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType })), (input.loadBalancers !== undefined &&
        input.loadBalancers !== null && {
        loadBalancers: serializeAws_json1_1LoadBalancers(input.loadBalancers, context),
    })), (input.networkConfiguration !== undefined &&
        input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
    })), (input.placementConstraints !== undefined &&
        input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
    })), (input.placementStrategy !== undefined &&
        input.placementStrategy !== null && {
        placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
    })), (input.platformVersion !== undefined &&
        input.platformVersion !== null && { platformVersion: input.platformVersion })), (input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags })), (input.role !== undefined && input.role !== null && { role: input.role })), (input.schedulingStrategy !== undefined &&
        input.schedulingStrategy !== null && { schedulingStrategy: input.schedulingStrategy })), (input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName })), (input.serviceRegistries !== undefined &&
        input.serviceRegistries !== null && {
        serviceRegistries: serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) })), (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1CreateTaskSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.capacityProviderStrategy !== undefined &&
        input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
    })), (input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId })), (input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType })), (input.loadBalancers !== undefined &&
        input.loadBalancers !== null && {
        loadBalancers: serializeAws_json1_1LoadBalancers(input.loadBalancers, context),
    })), (input.networkConfiguration !== undefined &&
        input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
    })), (input.platformVersion !== undefined &&
        input.platformVersion !== null && { platformVersion: input.platformVersion })), (input.scale !== undefined &&
        input.scale !== null && { scale: serializeAws_json1_1Scale(input.scale, context) })), (input.service !== undefined && input.service !== null && { service: input.service })), (input.serviceRegistries !== undefined &&
        input.serviceRegistries !== null && {
        serviceRegistries: serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) })), (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1DeleteAccountSettingRequest = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }));
};
var serializeAws_json1_1DeleteAttributesRequest = function (input, context) {
    return __assign(__assign({}, (input.attributes !== undefined &&
        input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }));
};
var serializeAws_json1_1DeleteCapacityProviderRequest = function (input, context) {
    return __assign({}, (input.capacityProvider !== undefined &&
        input.capacityProvider !== null && { capacityProvider: input.capacityProvider }));
};
var serializeAws_json1_1DeleteClusterRequest = function (input, context) {
    return __assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }));
};
var serializeAws_json1_1DeleteServiceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.force !== undefined && input.force !== null && { force: input.force })), (input.service !== undefined && input.service !== null && { service: input.service }));
};
var serializeAws_json1_1DeleteTaskSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.force !== undefined && input.force !== null && { force: input.force })), (input.service !== undefined && input.service !== null && { service: input.service })), (input.taskSet !== undefined && input.taskSet !== null && { taskSet: input.taskSet }));
};
var serializeAws_json1_1DeploymentCircuitBreaker = function (input, context) {
    return __assign(__assign({}, (input.enable !== undefined && input.enable !== null && { enable: input.enable })), (input.rollback !== undefined && input.rollback !== null && { rollback: input.rollback }));
};
var serializeAws_json1_1DeploymentConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.deploymentCircuitBreaker !== undefined &&
        input.deploymentCircuitBreaker !== null && {
        deploymentCircuitBreaker: serializeAws_json1_1DeploymentCircuitBreaker(input.deploymentCircuitBreaker, context),
    })), (input.maximumPercent !== undefined &&
        input.maximumPercent !== null && { maximumPercent: input.maximumPercent })), (input.minimumHealthyPercent !== undefined &&
        input.minimumHealthyPercent !== null && { minimumHealthyPercent: input.minimumHealthyPercent }));
};
var serializeAws_json1_1DeploymentController = function (input, context) {
    return __assign({}, (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1DeregisterContainerInstanceRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstance !== undefined &&
        input.containerInstance !== null && { containerInstance: input.containerInstance })), (input.force !== undefined && input.force !== null && { force: input.force }));
};
var serializeAws_json1_1DeregisterTaskDefinitionRequest = function (input, context) {
    return __assign({}, (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1DescribeCapacityProvidersRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.capacityProviders !== undefined &&
        input.capacityProviders !== null && {
        capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
    })), (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1CapacityProviderFieldList(input.include, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1DescribeClustersRequest = function (input, context) {
    return __assign(__assign({}, (input.clusters !== undefined &&
        input.clusters !== null && { clusters: serializeAws_json1_1StringList(input.clusters, context) })), (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1ClusterFieldList(input.include, context) }));
};
var serializeAws_json1_1DescribeContainerInstancesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstances !== undefined &&
        input.containerInstances !== null && {
        containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
    })), (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1ContainerInstanceFieldList(input.include, context) }));
};
var serializeAws_json1_1DescribeServicesRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1ServiceFieldList(input.include, context) })), (input.services !== undefined &&
        input.services !== null && { services: serializeAws_json1_1StringList(input.services, context) }));
};
var serializeAws_json1_1DescribeTaskDefinitionRequest = function (input, context) {
    return __assign(__assign({}, (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1TaskDefinitionFieldList(input.include, context) })), (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1DescribeTaskSetsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1TaskSetFieldList(input.include, context) })), (input.service !== undefined && input.service !== null && { service: input.service })), (input.taskSets !== undefined &&
        input.taskSets !== null && { taskSets: serializeAws_json1_1StringList(input.taskSets, context) }));
};
var serializeAws_json1_1DescribeTasksRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.include !== undefined &&
        input.include !== null && { include: serializeAws_json1_1TaskFieldList(input.include, context) })), (input.tasks !== undefined &&
        input.tasks !== null && { tasks: serializeAws_json1_1StringList(input.tasks, context) }));
};
var serializeAws_json1_1Device = function (input, context) {
    return __assign(__assign(__assign({}, (input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath })), (input.hostPath !== undefined && input.hostPath !== null && { hostPath: input.hostPath })), (input.permissions !== undefined &&
        input.permissions !== null && {
        permissions: serializeAws_json1_1DeviceCgroupPermissions(input.permissions, context),
    }));
};
var serializeAws_json1_1DeviceCgroupPermissions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1DevicesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Device(entry, context);
    });
};
var serializeAws_json1_1DiscoverPollEndpointRequest = function (input, context) {
    return __assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstance !== undefined &&
        input.containerInstance !== null && { containerInstance: input.containerInstance }));
};
var serializeAws_json1_1DockerLabelsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1DockerVolumeConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.autoprovision !== undefined && input.autoprovision !== null && { autoprovision: input.autoprovision })), (input.driver !== undefined && input.driver !== null && { driver: input.driver })), (input.driverOpts !== undefined &&
        input.driverOpts !== null && { driverOpts: serializeAws_json1_1StringMap(input.driverOpts, context) })), (input.labels !== undefined &&
        input.labels !== null && { labels: serializeAws_json1_1StringMap(input.labels, context) })), (input.scope !== undefined && input.scope !== null && { scope: input.scope }));
};
var serializeAws_json1_1EFSAuthorizationConfig = function (input, context) {
    return __assign(__assign({}, (input.accessPointId !== undefined && input.accessPointId !== null && { accessPointId: input.accessPointId })), (input.iam !== undefined && input.iam !== null && { iam: input.iam }));
};
var serializeAws_json1_1EFSVolumeConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.authorizationConfig !== undefined &&
        input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_json1_1EFSAuthorizationConfig(input.authorizationConfig, context),
    })), (input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId })), (input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory })), (input.transitEncryption !== undefined &&
        input.transitEncryption !== null && { transitEncryption: input.transitEncryption })), (input.transitEncryptionPort !== undefined &&
        input.transitEncryptionPort !== null && { transitEncryptionPort: input.transitEncryptionPort }));
};
var serializeAws_json1_1EnvironmentFile = function (input, context) {
    return __assign(__assign({}, (input.type !== undefined && input.type !== null && { type: input.type })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1EnvironmentFiles = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EnvironmentFile(entry, context);
    });
};
var serializeAws_json1_1EnvironmentVariables = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1KeyValuePair(entry, context);
    });
};
var serializeAws_json1_1EphemeralStorage = function (input, context) {
    return __assign({}, (input.sizeInGiB !== undefined && input.sizeInGiB !== null && { sizeInGiB: input.sizeInGiB }));
};
var serializeAws_json1_1ExecuteCommandConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.logConfiguration !== undefined &&
        input.logConfiguration !== null && {
        logConfiguration: serializeAws_json1_1ExecuteCommandLogConfiguration(input.logConfiguration, context),
    })), (input.logging !== undefined && input.logging !== null && { logging: input.logging }));
};
var serializeAws_json1_1ExecuteCommandLogConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.cloudWatchEncryptionEnabled !== undefined &&
        input.cloudWatchEncryptionEnabled !== null && { cloudWatchEncryptionEnabled: input.cloudWatchEncryptionEnabled })), (input.cloudWatchLogGroupName !== undefined &&
        input.cloudWatchLogGroupName !== null && { cloudWatchLogGroupName: input.cloudWatchLogGroupName })), (input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName })), (input.s3EncryptionEnabled !== undefined &&
        input.s3EncryptionEnabled !== null && { s3EncryptionEnabled: input.s3EncryptionEnabled })), (input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }));
};
var serializeAws_json1_1ExecuteCommandRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.command !== undefined && input.command !== null && { command: input.command })), (input.container !== undefined && input.container !== null && { container: input.container })), (input.interactive !== undefined && input.interactive !== null && { interactive: input.interactive })), (input.task !== undefined && input.task !== null && { task: input.task }));
};
var serializeAws_json1_1FirelensConfiguration = function (input, context) {
    return __assign(__assign({}, (input.options !== undefined &&
        input.options !== null && {
        options: serializeAws_json1_1FirelensConfigurationOptionsMap(input.options, context),
    })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1FirelensConfigurationOptionsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig = function (input, context) {
    return __assign(__assign({}, (input.credentialsParameter !== undefined &&
        input.credentialsParameter !== null && { credentialsParameter: input.credentialsParameter })), (input.domain !== undefined && input.domain !== null && { domain: input.domain }));
};
var serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.authorizationConfig !== undefined &&
        input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig(input.authorizationConfig, context),
    })), (input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId })), (input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }));
};
var serializeAws_json1_1HealthCheck = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.command !== undefined &&
        input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) })), (input.interval !== undefined && input.interval !== null && { interval: input.interval })), (input.retries !== undefined && input.retries !== null && { retries: input.retries })), (input.startPeriod !== undefined && input.startPeriod !== null && { startPeriod: input.startPeriod })), (input.timeout !== undefined && input.timeout !== null && { timeout: input.timeout }));
};
var serializeAws_json1_1HostEntry = function (input, context) {
    return __assign(__assign({}, (input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname })), (input.ipAddress !== undefined && input.ipAddress !== null && { ipAddress: input.ipAddress }));
};
var serializeAws_json1_1HostEntryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HostEntry(entry, context);
    });
};
var serializeAws_json1_1HostVolumeProperties = function (input, context) {
    return __assign({}, (input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }));
};
var serializeAws_json1_1InferenceAccelerator = function (input, context) {
    return __assign(__assign({}, (input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName })), (input.deviceType !== undefined && input.deviceType !== null && { deviceType: input.deviceType }));
};
var serializeAws_json1_1InferenceAcceleratorOverride = function (input, context) {
    return __assign(__assign({}, (input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName })), (input.deviceType !== undefined && input.deviceType !== null && { deviceType: input.deviceType }));
};
var serializeAws_json1_1InferenceAcceleratorOverrides = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InferenceAcceleratorOverride(entry, context);
    });
};
var serializeAws_json1_1InferenceAccelerators = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InferenceAccelerator(entry, context);
    });
};
var serializeAws_json1_1KernelCapabilities = function (input, context) {
    return __assign(__assign({}, (input.add !== undefined && input.add !== null && { add: serializeAws_json1_1StringList(input.add, context) })), (input.drop !== undefined &&
        input.drop !== null && { drop: serializeAws_json1_1StringList(input.drop, context) }));
};
var serializeAws_json1_1KeyValuePair = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1LinuxParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.capabilities !== undefined &&
        input.capabilities !== null && {
        capabilities: serializeAws_json1_1KernelCapabilities(input.capabilities, context),
    })), (input.devices !== undefined &&
        input.devices !== null && { devices: serializeAws_json1_1DevicesList(input.devices, context) })), (input.initProcessEnabled !== undefined &&
        input.initProcessEnabled !== null && { initProcessEnabled: input.initProcessEnabled })), (input.maxSwap !== undefined && input.maxSwap !== null && { maxSwap: input.maxSwap })), (input.sharedMemorySize !== undefined &&
        input.sharedMemorySize !== null && { sharedMemorySize: input.sharedMemorySize })), (input.swappiness !== undefined && input.swappiness !== null && { swappiness: input.swappiness })), (input.tmpfs !== undefined &&
        input.tmpfs !== null && { tmpfs: serializeAws_json1_1TmpfsList(input.tmpfs, context) }));
};
var serializeAws_json1_1ListAccountSettingsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.effectiveSettings !== undefined &&
        input.effectiveSettings !== null && { effectiveSettings: input.effectiveSettings })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1ListAttributesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName })), (input.attributeValue !== undefined &&
        input.attributeValue !== null && { attributeValue: input.attributeValue })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.targetType !== undefined && input.targetType !== null && { targetType: input.targetType }));
};
var serializeAws_json1_1ListClustersRequest = function (input, context) {
    return __assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }));
};
var serializeAws_json1_1ListContainerInstancesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.filter !== undefined && input.filter !== null && { filter: input.filter })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1ListServicesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.schedulingStrategy !== undefined &&
        input.schedulingStrategy !== null && { schedulingStrategy: input.schedulingStrategy }));
};
var serializeAws_json1_1ListTagsForResourceRequest = function (input, context) {
    return __assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }));
};
var serializeAws_json1_1ListTaskDefinitionFamiliesRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.familyPrefix !== undefined && input.familyPrefix !== null && { familyPrefix: input.familyPrefix })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1ListTaskDefinitionsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.familyPrefix !== undefined && input.familyPrefix !== null && { familyPrefix: input.familyPrefix })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sort !== undefined && input.sort !== null && { sort: input.sort })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1ListTasksRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstance !== undefined &&
        input.containerInstance !== null && { containerInstance: input.containerInstance })), (input.desiredStatus !== undefined && input.desiredStatus !== null && { desiredStatus: input.desiredStatus })), (input.family !== undefined && input.family !== null && { family: input.family })), (input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName })), (input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }));
};
var serializeAws_json1_1LoadBalancer = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName })), (input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort })), (input.loadBalancerName !== undefined &&
        input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName })), (input.targetGroupArn !== undefined &&
        input.targetGroupArn !== null && { targetGroupArn: input.targetGroupArn }));
};
var serializeAws_json1_1LoadBalancers = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LoadBalancer(entry, context);
    });
};
var serializeAws_json1_1LogConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.logDriver !== undefined && input.logDriver !== null && { logDriver: input.logDriver })), (input.options !== undefined &&
        input.options !== null && { options: serializeAws_json1_1LogConfigurationOptionsMap(input.options, context) })), (input.secretOptions !== undefined &&
        input.secretOptions !== null && { secretOptions: serializeAws_json1_1SecretList(input.secretOptions, context) }));
};
var serializeAws_json1_1LogConfigurationOptionsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_1ManagedAgentStateChange = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName })), (input.managedAgentName !== undefined &&
        input.managedAgentName !== null && { managedAgentName: input.managedAgentName })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1ManagedAgentStateChanges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ManagedAgentStateChange(entry, context);
    });
};
var serializeAws_json1_1ManagedScaling = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.instanceWarmupPeriod !== undefined &&
        input.instanceWarmupPeriod !== null && { instanceWarmupPeriod: input.instanceWarmupPeriod })), (input.maximumScalingStepSize !== undefined &&
        input.maximumScalingStepSize !== null && { maximumScalingStepSize: input.maximumScalingStepSize })), (input.minimumScalingStepSize !== undefined &&
        input.minimumScalingStepSize !== null && { minimumScalingStepSize: input.minimumScalingStepSize })), (input.status !== undefined && input.status !== null && { status: input.status })), (input.targetCapacity !== undefined &&
        input.targetCapacity !== null && { targetCapacity: input.targetCapacity }));
};
var serializeAws_json1_1MountPoint = function (input, context) {
    return __assign(__assign(__assign({}, (input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath })), (input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly })), (input.sourceVolume !== undefined && input.sourceVolume !== null && { sourceVolume: input.sourceVolume }));
};
var serializeAws_json1_1MountPointList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MountPoint(entry, context);
    });
};
var serializeAws_json1_1NetworkBinding = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.bindIP !== undefined && input.bindIP !== null && { bindIP: input.bindIP })), (input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort })), (input.hostPort !== undefined && input.hostPort !== null && { hostPort: input.hostPort })), (input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }));
};
var serializeAws_json1_1NetworkBindings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1NetworkBinding(entry, context);
    });
};
var serializeAws_json1_1NetworkConfiguration = function (input, context) {
    return __assign({}, (input.awsvpcConfiguration !== undefined &&
        input.awsvpcConfiguration !== null && {
        awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context),
    }));
};
var serializeAws_json1_1PlacementConstraint = function (input, context) {
    return __assign(__assign({}, (input.expression !== undefined && input.expression !== null && { expression: input.expression })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1PlacementConstraints = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlacementConstraint(entry, context);
    });
};
var serializeAws_json1_1PlacementStrategies = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlacementStrategy(entry, context);
    });
};
var serializeAws_json1_1PlacementStrategy = function (input, context) {
    return __assign(__assign({}, (input.field !== undefined && input.field !== null && { field: input.field })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1PlatformDevice = function (input, context) {
    return __assign(__assign({}, (input.id !== undefined && input.id !== null && { id: input.id })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1PlatformDevices = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlatformDevice(entry, context);
    });
};
var serializeAws_json1_1PortMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort })), (input.hostPort !== undefined && input.hostPort !== null && { hostPort: input.hostPort })), (input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }));
};
var serializeAws_json1_1PortMappingList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortMapping(entry, context);
    });
};
var serializeAws_json1_1ProxyConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName })), (input.properties !== undefined &&
        input.properties !== null && {
        properties: serializeAws_json1_1ProxyConfigurationProperties(input.properties, context),
    })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ProxyConfigurationProperties = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1KeyValuePair(entry, context);
    });
};
var serializeAws_json1_1PutAccountSettingDefaultRequest = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1PutAccountSettingRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1PutAttributesRequest = function (input, context) {
    return __assign(__assign({}, (input.attributes !== undefined &&
        input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }));
};
var serializeAws_json1_1PutClusterCapacityProvidersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.capacityProviders !== undefined &&
        input.capacityProviders !== null && {
        capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
    })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.defaultCapacityProviderStrategy !== undefined &&
        input.defaultCapacityProviderStrategy !== null && {
        defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context),
    }));
};
var serializeAws_json1_1RegisterContainerInstanceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.attributes !== undefined &&
        input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstanceArn !== undefined &&
        input.containerInstanceArn !== null && { containerInstanceArn: input.containerInstanceArn })), (input.instanceIdentityDocument !== undefined &&
        input.instanceIdentityDocument !== null && { instanceIdentityDocument: input.instanceIdentityDocument })), (input.instanceIdentityDocumentSignature !== undefined &&
        input.instanceIdentityDocumentSignature !== null && {
        instanceIdentityDocumentSignature: input.instanceIdentityDocumentSignature,
    })), (input.platformDevices !== undefined &&
        input.platformDevices !== null && {
        platformDevices: serializeAws_json1_1PlatformDevices(input.platformDevices, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) })), (input.totalResources !== undefined &&
        input.totalResources !== null && {
        totalResources: serializeAws_json1_1Resources(input.totalResources, context),
    })), (input.versionInfo !== undefined &&
        input.versionInfo !== null && { versionInfo: serializeAws_json1_1VersionInfo(input.versionInfo, context) }));
};
var serializeAws_json1_1RegisterTaskDefinitionRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.containerDefinitions !== undefined &&
        input.containerDefinitions !== null && {
        containerDefinitions: serializeAws_json1_1ContainerDefinitions(input.containerDefinitions, context),
    })), (input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu })), (input.ephemeralStorage !== undefined &&
        input.ephemeralStorage !== null && {
        ephemeralStorage: serializeAws_json1_1EphemeralStorage(input.ephemeralStorage, context),
    })), (input.executionRoleArn !== undefined &&
        input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn })), (input.family !== undefined && input.family !== null && { family: input.family })), (input.inferenceAccelerators !== undefined &&
        input.inferenceAccelerators !== null && {
        inferenceAccelerators: serializeAws_json1_1InferenceAccelerators(input.inferenceAccelerators, context),
    })), (input.ipcMode !== undefined && input.ipcMode !== null && { ipcMode: input.ipcMode })), (input.memory !== undefined && input.memory !== null && { memory: input.memory })), (input.networkMode !== undefined && input.networkMode !== null && { networkMode: input.networkMode })), (input.pidMode !== undefined && input.pidMode !== null && { pidMode: input.pidMode })), (input.placementConstraints !== undefined &&
        input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1TaskDefinitionPlacementConstraints(input.placementConstraints, context),
    })), (input.proxyConfiguration !== undefined &&
        input.proxyConfiguration !== null && {
        proxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.proxyConfiguration, context),
    })), (input.requiresCompatibilities !== undefined &&
        input.requiresCompatibilities !== null && {
        requiresCompatibilities: serializeAws_json1_1CompatibilityList(input.requiresCompatibilities, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) })), (input.taskRoleArn !== undefined && input.taskRoleArn !== null && { taskRoleArn: input.taskRoleArn })), (input.volumes !== undefined &&
        input.volumes !== null && { volumes: serializeAws_json1_1VolumeList(input.volumes, context) }));
};
var serializeAws_json1_1RepositoryCredentials = function (input, context) {
    return __assign({}, (input.credentialsParameter !== undefined &&
        input.credentialsParameter !== null && { credentialsParameter: input.credentialsParameter }));
};
var serializeAws_json1_1Resource = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue })), (input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue })), (input.longValue !== undefined && input.longValue !== null && { longValue: input.longValue })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.stringSetValue !== undefined &&
        input.stringSetValue !== null && {
        stringSetValue: serializeAws_json1_1StringList(input.stringSetValue, context),
    })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1ResourceRequirement = function (input, context) {
    return __assign(__assign({}, (input.type !== undefined && input.type !== null && { type: input.type })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1ResourceRequirements = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceRequirement(entry, context);
    });
};
var serializeAws_json1_1Resources = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Resource(entry, context);
    });
};
var serializeAws_json1_1RunTaskRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.capacityProviderStrategy !== undefined &&
        input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
    })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.count !== undefined && input.count !== null && { count: input.count })), (input.enableECSManagedTags !== undefined &&
        input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags })), (input.enableExecuteCommand !== undefined &&
        input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand })), (input.group !== undefined && input.group !== null && { group: input.group })), (input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType })), (input.networkConfiguration !== undefined &&
        input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
    })), (input.overrides !== undefined &&
        input.overrides !== null && { overrides: serializeAws_json1_1TaskOverride(input.overrides, context) })), (input.placementConstraints !== undefined &&
        input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
    })), (input.placementStrategy !== undefined &&
        input.placementStrategy !== null && {
        placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
    })), (input.platformVersion !== undefined &&
        input.platformVersion !== null && { platformVersion: input.platformVersion })), (input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags })), (input.referenceId !== undefined && input.referenceId !== null && { referenceId: input.referenceId })), (input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) })), (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1Scale = function (input, context) {
    return __assign(__assign({}, (input.unit !== undefined && input.unit !== null && { unit: input.unit })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1Secret = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.valueFrom !== undefined && input.valueFrom !== null && { valueFrom: input.valueFrom }));
};
var serializeAws_json1_1SecretList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Secret(entry, context);
    });
};
var serializeAws_json1_1ServiceFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ServiceRegistries = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServiceRegistry(entry, context);
    });
};
var serializeAws_json1_1ServiceRegistry = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName })), (input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort })), (input.port !== undefined && input.port !== null && { port: input.port })), (input.registryArn !== undefined && input.registryArn !== null && { registryArn: input.registryArn }));
};
var serializeAws_json1_1StartTaskRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstances !== undefined &&
        input.containerInstances !== null && {
        containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
    })), (input.enableECSManagedTags !== undefined &&
        input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags })), (input.enableExecuteCommand !== undefined &&
        input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand })), (input.group !== undefined && input.group !== null && { group: input.group })), (input.networkConfiguration !== undefined &&
        input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
    })), (input.overrides !== undefined &&
        input.overrides !== null && { overrides: serializeAws_json1_1TaskOverride(input.overrides, context) })), (input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags })), (input.referenceId !== undefined && input.referenceId !== null && { referenceId: input.referenceId })), (input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) })), (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1StopTaskRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.task !== undefined && input.task !== null && { task: input.task }));
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
var serializeAws_json1_1SubmitAttachmentStateChangesRequest = function (input, context) {
    return __assign(__assign({}, (input.attachments !== undefined &&
        input.attachments !== null && {
        attachments: serializeAws_json1_1AttachmentStateChanges(input.attachments, context),
    })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }));
};
var serializeAws_json1_1SubmitContainerStateChangeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName })), (input.exitCode !== undefined && input.exitCode !== null && { exitCode: input.exitCode })), (input.networkBindings !== undefined &&
        input.networkBindings !== null && {
        networkBindings: serializeAws_json1_1NetworkBindings(input.networkBindings, context),
    })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.runtimeId !== undefined && input.runtimeId !== null && { runtimeId: input.runtimeId })), (input.status !== undefined && input.status !== null && { status: input.status })), (input.task !== undefined && input.task !== null && { task: input.task }));
};
var serializeAws_json1_1SubmitTaskStateChangeRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.attachments !== undefined &&
        input.attachments !== null && {
        attachments: serializeAws_json1_1AttachmentStateChanges(input.attachments, context),
    })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containers !== undefined &&
        input.containers !== null && {
        containers: serializeAws_json1_1ContainerStateChanges(input.containers, context),
    })), (input.executionStoppedAt !== undefined &&
        input.executionStoppedAt !== null && {
        executionStoppedAt: Math.round(input.executionStoppedAt.getTime() / 1000),
    })), (input.managedAgents !== undefined &&
        input.managedAgents !== null && {
        managedAgents: serializeAws_json1_1ManagedAgentStateChanges(input.managedAgents, context),
    })), (input.pullStartedAt !== undefined &&
        input.pullStartedAt !== null && { pullStartedAt: Math.round(input.pullStartedAt.getTime() / 1000) })), (input.pullStoppedAt !== undefined &&
        input.pullStoppedAt !== null && { pullStoppedAt: Math.round(input.pullStoppedAt.getTime() / 1000) })), (input.reason !== undefined && input.reason !== null && { reason: input.reason })), (input.status !== undefined && input.status !== null && { status: input.status })), (input.task !== undefined && input.task !== null && { task: input.task }));
};
var serializeAws_json1_1SystemControl = function (input, context) {
    return __assign(__assign({}, (input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1SystemControls = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SystemControl(entry, context);
    });
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_json1_1TagKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }));
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
var serializeAws_json1_1TaskDefinitionFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TaskDefinitionPlacementConstraint = function (input, context) {
    return __assign(__assign({}, (input.expression !== undefined && input.expression !== null && { expression: input.expression })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_json1_1TaskDefinitionPlacementConstraints = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context);
    });
};
var serializeAws_json1_1TaskFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1TaskOverride = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.containerOverrides !== undefined &&
        input.containerOverrides !== null && {
        containerOverrides: serializeAws_json1_1ContainerOverrides(input.containerOverrides, context),
    })), (input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu })), (input.ephemeralStorage !== undefined &&
        input.ephemeralStorage !== null && {
        ephemeralStorage: serializeAws_json1_1EphemeralStorage(input.ephemeralStorage, context),
    })), (input.executionRoleArn !== undefined &&
        input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn })), (input.inferenceAcceleratorOverrides !== undefined &&
        input.inferenceAcceleratorOverrides !== null && {
        inferenceAcceleratorOverrides: serializeAws_json1_1InferenceAcceleratorOverrides(input.inferenceAcceleratorOverrides, context),
    })), (input.memory !== undefined && input.memory !== null && { memory: input.memory })), (input.taskRoleArn !== undefined && input.taskRoleArn !== null && { taskRoleArn: input.taskRoleArn }));
};
var serializeAws_json1_1TaskSetFieldList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Tmpfs = function (input, context) {
    return __assign(__assign(__assign({}, (input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath })), (input.mountOptions !== undefined &&
        input.mountOptions !== null && { mountOptions: serializeAws_json1_1StringList(input.mountOptions, context) })), (input.size !== undefined && input.size !== null && { size: input.size }));
};
var serializeAws_json1_1TmpfsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tmpfs(entry, context);
    });
};
var serializeAws_json1_1Ulimit = function (input, context) {
    return __assign(__assign(__assign({}, (input.hardLimit !== undefined && input.hardLimit !== null && { hardLimit: input.hardLimit })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.softLimit !== undefined && input.softLimit !== null && { softLimit: input.softLimit }));
};
var serializeAws_json1_1UlimitList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Ulimit(entry, context);
    });
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn })), (input.tagKeys !== undefined &&
        input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeys(input.tagKeys, context) }));
};
var serializeAws_json1_1UpdateCapacityProviderRequest = function (input, context) {
    return __assign(__assign({}, (input.autoScalingGroupProvider !== undefined &&
        input.autoScalingGroupProvider !== null && {
        autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProviderUpdate(input.autoScalingGroupProvider, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1UpdateClusterRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.configuration !== undefined &&
        input.configuration !== null && {
        configuration: serializeAws_json1_1ClusterConfiguration(input.configuration, context),
    })), (input.settings !== undefined &&
        input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }));
};
var serializeAws_json1_1UpdateClusterSettingsRequest = function (input, context) {
    return __assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.settings !== undefined &&
        input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }));
};
var serializeAws_json1_1UpdateContainerAgentRequest = function (input, context) {
    return __assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstance !== undefined &&
        input.containerInstance !== null && { containerInstance: input.containerInstance }));
};
var serializeAws_json1_1UpdateContainerInstancesStateRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.containerInstances !== undefined &&
        input.containerInstances !== null && {
        containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
    })), (input.status !== undefined && input.status !== null && { status: input.status }));
};
var serializeAws_json1_1UpdateServicePrimaryTaskSetRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.primaryTaskSet !== undefined &&
        input.primaryTaskSet !== null && { primaryTaskSet: input.primaryTaskSet })), (input.service !== undefined && input.service !== null && { service: input.service }));
};
var serializeAws_json1_1UpdateServiceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.capacityProviderStrategy !== undefined &&
        input.capacityProviderStrategy !== null && {
        capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
    })), (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.deploymentConfiguration !== undefined &&
        input.deploymentConfiguration !== null && {
        deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context),
    })), (input.desiredCount !== undefined && input.desiredCount !== null && { desiredCount: input.desiredCount })), (input.enableExecuteCommand !== undefined &&
        input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand })), (input.forceNewDeployment !== undefined &&
        input.forceNewDeployment !== null && { forceNewDeployment: input.forceNewDeployment })), (input.healthCheckGracePeriodSeconds !== undefined &&
        input.healthCheckGracePeriodSeconds !== null && {
        healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
    })), (input.networkConfiguration !== undefined &&
        input.networkConfiguration !== null && {
        networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
    })), (input.placementConstraints !== undefined &&
        input.placementConstraints !== null && {
        placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
    })), (input.placementStrategy !== undefined &&
        input.placementStrategy !== null && {
        placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
    })), (input.platformVersion !== undefined &&
        input.platformVersion !== null && { platformVersion: input.platformVersion })), (input.service !== undefined && input.service !== null && { service: input.service })), (input.taskDefinition !== undefined &&
        input.taskDefinition !== null && { taskDefinition: input.taskDefinition }));
};
var serializeAws_json1_1UpdateTaskSetRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster })), (input.scale !== undefined &&
        input.scale !== null && { scale: serializeAws_json1_1Scale(input.scale, context) })), (input.service !== undefined && input.service !== null && { service: input.service })), (input.taskSet !== undefined && input.taskSet !== null && { taskSet: input.taskSet }));
};
var serializeAws_json1_1VersionInfo = function (input, context) {
    return __assign(__assign(__assign({}, (input.agentHash !== undefined && input.agentHash !== null && { agentHash: input.agentHash })), (input.agentVersion !== undefined && input.agentVersion !== null && { agentVersion: input.agentVersion })), (input.dockerVersion !== undefined && input.dockerVersion !== null && { dockerVersion: input.dockerVersion }));
};
var serializeAws_json1_1Volume = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.dockerVolumeConfiguration !== undefined &&
        input.dockerVolumeConfiguration !== null && {
        dockerVolumeConfiguration: serializeAws_json1_1DockerVolumeConfiguration(input.dockerVolumeConfiguration, context),
    })), (input.efsVolumeConfiguration !== undefined &&
        input.efsVolumeConfiguration !== null && {
        efsVolumeConfiguration: serializeAws_json1_1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
    })), (input.fsxWindowsFileServerVolumeConfiguration !== undefined &&
        input.fsxWindowsFileServerVolumeConfiguration !== null && {
        fsxWindowsFileServerVolumeConfiguration: serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration(input.fsxWindowsFileServerVolumeConfiguration, context),
    })), (input.host !== undefined &&
        input.host !== null && { host: serializeAws_json1_1HostVolumeProperties(input.host, context) })), (input.name !== undefined && input.name !== null && { name: input.name }));
};
var serializeAws_json1_1VolumeFrom = function (input, context) {
    return __assign(__assign({}, (input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly })), (input.sourceContainer !== undefined &&
        input.sourceContainer !== null && { sourceContainer: input.sourceContainer }));
};
var serializeAws_json1_1VolumeFromList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VolumeFrom(entry, context);
    });
};
var serializeAws_json1_1VolumeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Volume(entry, context);
    });
};
var deserializeAws_json1_1AccessDeniedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Attachment = function (output, context) {
    return {
        details: output.details !== undefined && output.details !== null
            ? deserializeAws_json1_1AttachmentDetails(output.details, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1AttachmentDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
var deserializeAws_json1_1Attachments = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attachment(entry, context);
    });
};
var deserializeAws_json1_1Attribute = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
        targetType: output.targetType !== undefined && output.targetType !== null ? output.targetType : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1AttributeLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Attributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
var deserializeAws_json1_1AutoScalingGroupProvider = function (output, context) {
    return {
        autoScalingGroupArn: output.autoScalingGroupArn !== undefined && output.autoScalingGroupArn !== null
            ? output.autoScalingGroupArn
            : undefined,
        managedScaling: output.managedScaling !== undefined && output.managedScaling !== null
            ? deserializeAws_json1_1ManagedScaling(output.managedScaling, context)
            : undefined,
        managedTerminationProtection: output.managedTerminationProtection !== undefined && output.managedTerminationProtection !== null
            ? output.managedTerminationProtection
            : undefined,
    };
};
var deserializeAws_json1_1AwsVpcConfiguration = function (output, context) {
    return {
        assignPublicIp: output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
        securityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_json1_1StringList(output.securityGroups, context)
            : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_json1_1StringList(output.subnets, context)
            : undefined,
    };
};
var deserializeAws_json1_1BlockedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CapacityProvider = function (output, context) {
    return {
        autoScalingGroupProvider: output.autoScalingGroupProvider !== undefined && output.autoScalingGroupProvider !== null
            ? deserializeAws_json1_1AutoScalingGroupProvider(output.autoScalingGroupProvider, context)
            : undefined,
        capacityProviderArn: output.capacityProviderArn !== undefined && output.capacityProviderArn !== null
            ? output.capacityProviderArn
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        updateStatus: output.updateStatus !== undefined && output.updateStatus !== null ? output.updateStatus : undefined,
        updateStatusReason: output.updateStatusReason !== undefined && output.updateStatusReason !== null
            ? output.updateStatusReason
            : undefined,
    };
};
var deserializeAws_json1_1CapacityProviders = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CapacityProvider(entry, context);
    });
};
var deserializeAws_json1_1CapacityProviderStrategy = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};
var deserializeAws_json1_1CapacityProviderStrategyItem = function (output, context) {
    return {
        base: output.base !== undefined && output.base !== null ? output.base : undefined,
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null ? output.capacityProvider : undefined,
        weight: output.weight !== undefined && output.weight !== null ? output.weight : undefined,
    };
};
var deserializeAws_json1_1ClientException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Cluster = function (output, context) {
    return {
        activeServicesCount: output.activeServicesCount !== undefined && output.activeServicesCount !== null
            ? output.activeServicesCount
            : undefined,
        attachments: output.attachments !== undefined && output.attachments !== null
            ? deserializeAws_json1_1Attachments(output.attachments, context)
            : undefined,
        attachmentsStatus: output.attachmentsStatus !== undefined && output.attachmentsStatus !== null
            ? output.attachmentsStatus
            : undefined,
        capacityProviders: output.capacityProviders !== undefined && output.capacityProviders !== null
            ? deserializeAws_json1_1StringList(output.capacityProviders, context)
            : undefined,
        clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_json1_1ClusterConfiguration(output.configuration, context)
            : undefined,
        defaultCapacityProviderStrategy: output.defaultCapacityProviderStrategy !== undefined && output.defaultCapacityProviderStrategy !== null
            ? deserializeAws_json1_1CapacityProviderStrategy(output.defaultCapacityProviderStrategy, context)
            : undefined,
        pendingTasksCount: output.pendingTasksCount !== undefined && output.pendingTasksCount !== null
            ? output.pendingTasksCount
            : undefined,
        registeredContainerInstancesCount: output.registeredContainerInstancesCount !== undefined && output.registeredContainerInstancesCount !== null
            ? output.registeredContainerInstancesCount
            : undefined,
        runningTasksCount: output.runningTasksCount !== undefined && output.runningTasksCount !== null
            ? output.runningTasksCount
            : undefined,
        settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_json1_1ClusterSettings(output.settings, context)
            : undefined,
        statistics: output.statistics !== undefined && output.statistics !== null
            ? deserializeAws_json1_1Statistics(output.statistics, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
var deserializeAws_json1_1ClusterConfiguration = function (output, context) {
    return {
        executeCommandConfiguration: output.executeCommandConfiguration !== undefined && output.executeCommandConfiguration !== null
            ? deserializeAws_json1_1ExecuteCommandConfiguration(output.executeCommandConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1ClusterContainsContainerInstancesException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ClusterContainsServicesException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ClusterContainsTasksException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ClusterNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Clusters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Cluster(entry, context);
    });
};
var deserializeAws_json1_1ClusterSetting = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1ClusterSettings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClusterSetting(entry, context);
    });
};
var deserializeAws_json1_1CompatibilityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1Container = function (output, context) {
    return {
        containerArn: output.containerArn !== undefined && output.containerArn !== null ? output.containerArn : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
        exitCode: output.exitCode !== undefined && output.exitCode !== null ? output.exitCode : undefined,
        gpuIds: output.gpuIds !== undefined && output.gpuIds !== null
            ? deserializeAws_json1_1GpuIds(output.gpuIds, context)
            : undefined,
        healthStatus: output.healthStatus !== undefined && output.healthStatus !== null ? output.healthStatus : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        imageDigest: output.imageDigest !== undefined && output.imageDigest !== null ? output.imageDigest : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        managedAgents: output.managedAgents !== undefined && output.managedAgents !== null
            ? deserializeAws_json1_1ManagedAgents(output.managedAgents, context)
            : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        memoryReservation: output.memoryReservation !== undefined && output.memoryReservation !== null
            ? output.memoryReservation
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        networkBindings: output.networkBindings !== undefined && output.networkBindings !== null
            ? deserializeAws_json1_1NetworkBindings(output.networkBindings, context)
            : undefined,
        networkInterfaces: output.networkInterfaces !== undefined && output.networkInterfaces !== null
            ? deserializeAws_json1_1NetworkInterfaces(output.networkInterfaces, context)
            : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        runtimeId: output.runtimeId !== undefined && output.runtimeId !== null ? output.runtimeId : undefined,
        taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
    };
};
var deserializeAws_json1_1ContainerDefinition = function (output, context) {
    return {
        command: output.command !== undefined && output.command !== null
            ? deserializeAws_json1_1StringList(output.command, context)
            : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
        dependsOn: output.dependsOn !== undefined && output.dependsOn !== null
            ? deserializeAws_json1_1ContainerDependencies(output.dependsOn, context)
            : undefined,
        disableNetworking: output.disableNetworking !== undefined && output.disableNetworking !== null
            ? output.disableNetworking
            : undefined,
        dnsSearchDomains: output.dnsSearchDomains !== undefined && output.dnsSearchDomains !== null
            ? deserializeAws_json1_1StringList(output.dnsSearchDomains, context)
            : undefined,
        dnsServers: output.dnsServers !== undefined && output.dnsServers !== null
            ? deserializeAws_json1_1StringList(output.dnsServers, context)
            : undefined,
        dockerLabels: output.dockerLabels !== undefined && output.dockerLabels !== null
            ? deserializeAws_json1_1DockerLabelsMap(output.dockerLabels, context)
            : undefined,
        dockerSecurityOptions: output.dockerSecurityOptions !== undefined && output.dockerSecurityOptions !== null
            ? deserializeAws_json1_1StringList(output.dockerSecurityOptions, context)
            : undefined,
        entryPoint: output.entryPoint !== undefined && output.entryPoint !== null
            ? deserializeAws_json1_1StringList(output.entryPoint, context)
            : undefined,
        environment: output.environment !== undefined && output.environment !== null
            ? deserializeAws_json1_1EnvironmentVariables(output.environment, context)
            : undefined,
        environmentFiles: output.environmentFiles !== undefined && output.environmentFiles !== null
            ? deserializeAws_json1_1EnvironmentFiles(output.environmentFiles, context)
            : undefined,
        essential: output.essential !== undefined && output.essential !== null ? output.essential : undefined,
        extraHosts: output.extraHosts !== undefined && output.extraHosts !== null
            ? deserializeAws_json1_1HostEntryList(output.extraHosts, context)
            : undefined,
        firelensConfiguration: output.firelensConfiguration !== undefined && output.firelensConfiguration !== null
            ? deserializeAws_json1_1FirelensConfiguration(output.firelensConfiguration, context)
            : undefined,
        healthCheck: output.healthCheck !== undefined && output.healthCheck !== null
            ? deserializeAws_json1_1HealthCheck(output.healthCheck, context)
            : undefined,
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        interactive: output.interactive !== undefined && output.interactive !== null ? output.interactive : undefined,
        links: output.links !== undefined && output.links !== null
            ? deserializeAws_json1_1StringList(output.links, context)
            : undefined,
        linuxParameters: output.linuxParameters !== undefined && output.linuxParameters !== null
            ? deserializeAws_json1_1LinuxParameters(output.linuxParameters, context)
            : undefined,
        logConfiguration: output.logConfiguration !== undefined && output.logConfiguration !== null
            ? deserializeAws_json1_1LogConfiguration(output.logConfiguration, context)
            : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        memoryReservation: output.memoryReservation !== undefined && output.memoryReservation !== null
            ? output.memoryReservation
            : undefined,
        mountPoints: output.mountPoints !== undefined && output.mountPoints !== null
            ? deserializeAws_json1_1MountPointList(output.mountPoints, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        portMappings: output.portMappings !== undefined && output.portMappings !== null
            ? deserializeAws_json1_1PortMappingList(output.portMappings, context)
            : undefined,
        privileged: output.privileged !== undefined && output.privileged !== null ? output.privileged : undefined,
        pseudoTerminal: output.pseudoTerminal !== undefined && output.pseudoTerminal !== null ? output.pseudoTerminal : undefined,
        readonlyRootFilesystem: output.readonlyRootFilesystem !== undefined && output.readonlyRootFilesystem !== null
            ? output.readonlyRootFilesystem
            : undefined,
        repositoryCredentials: output.repositoryCredentials !== undefined && output.repositoryCredentials !== null
            ? deserializeAws_json1_1RepositoryCredentials(output.repositoryCredentials, context)
            : undefined,
        resourceRequirements: output.resourceRequirements !== undefined && output.resourceRequirements !== null
            ? deserializeAws_json1_1ResourceRequirements(output.resourceRequirements, context)
            : undefined,
        secrets: output.secrets !== undefined && output.secrets !== null
            ? deserializeAws_json1_1SecretList(output.secrets, context)
            : undefined,
        startTimeout: output.startTimeout !== undefined && output.startTimeout !== null ? output.startTimeout : undefined,
        stopTimeout: output.stopTimeout !== undefined && output.stopTimeout !== null ? output.stopTimeout : undefined,
        systemControls: output.systemControls !== undefined && output.systemControls !== null
            ? deserializeAws_json1_1SystemControls(output.systemControls, context)
            : undefined,
        ulimits: output.ulimits !== undefined && output.ulimits !== null
            ? deserializeAws_json1_1UlimitList(output.ulimits, context)
            : undefined,
        user: output.user !== undefined && output.user !== null ? output.user : undefined,
        volumesFrom: output.volumesFrom !== undefined && output.volumesFrom !== null
            ? deserializeAws_json1_1VolumeFromList(output.volumesFrom, context)
            : undefined,
        workingDirectory: output.workingDirectory !== undefined && output.workingDirectory !== null ? output.workingDirectory : undefined,
    };
};
var deserializeAws_json1_1ContainerDefinitions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerDefinition(entry, context);
    });
};
var deserializeAws_json1_1ContainerDependencies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerDependency(entry, context);
    });
};
var deserializeAws_json1_1ContainerDependency = function (output, context) {
    return {
        condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
    };
};
var deserializeAws_json1_1ContainerInstance = function (output, context) {
    return {
        agentConnected: output.agentConnected !== undefined && output.agentConnected !== null ? output.agentConnected : undefined,
        agentUpdateStatus: output.agentUpdateStatus !== undefined && output.agentUpdateStatus !== null
            ? output.agentUpdateStatus
            : undefined,
        attachments: output.attachments !== undefined && output.attachments !== null
            ? deserializeAws_json1_1Attachments(output.attachments, context)
            : undefined,
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
        capacityProviderName: output.capacityProviderName !== undefined && output.capacityProviderName !== null
            ? output.capacityProviderName
            : undefined,
        containerInstanceArn: output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
            ? output.containerInstanceArn
            : undefined,
        ec2InstanceId: output.ec2InstanceId !== undefined && output.ec2InstanceId !== null ? output.ec2InstanceId : undefined,
        pendingTasksCount: output.pendingTasksCount !== undefined && output.pendingTasksCount !== null
            ? output.pendingTasksCount
            : undefined,
        registeredAt: output.registeredAt !== undefined && output.registeredAt !== null
            ? new Date(Math.round(output.registeredAt * 1000))
            : undefined,
        registeredResources: output.registeredResources !== undefined && output.registeredResources !== null
            ? deserializeAws_json1_1Resources(output.registeredResources, context)
            : undefined,
        remainingResources: output.remainingResources !== undefined && output.remainingResources !== null
            ? deserializeAws_json1_1Resources(output.remainingResources, context)
            : undefined,
        runningTasksCount: output.runningTasksCount !== undefined && output.runningTasksCount !== null
            ? output.runningTasksCount
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusReason: output.statusReason !== undefined && output.statusReason !== null ? output.statusReason : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
        versionInfo: output.versionInfo !== undefined && output.versionInfo !== null
            ? deserializeAws_json1_1VersionInfo(output.versionInfo, context)
            : undefined,
    };
};
var deserializeAws_json1_1ContainerInstances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerInstance(entry, context);
    });
};
var deserializeAws_json1_1ContainerOverride = function (output, context) {
    return {
        command: output.command !== undefined && output.command !== null
            ? deserializeAws_json1_1StringList(output.command, context)
            : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
        environment: output.environment !== undefined && output.environment !== null
            ? deserializeAws_json1_1EnvironmentVariables(output.environment, context)
            : undefined,
        environmentFiles: output.environmentFiles !== undefined && output.environmentFiles !== null
            ? deserializeAws_json1_1EnvironmentFiles(output.environmentFiles, context)
            : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        memoryReservation: output.memoryReservation !== undefined && output.memoryReservation !== null
            ? output.memoryReservation
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceRequirements: output.resourceRequirements !== undefined && output.resourceRequirements !== null
            ? deserializeAws_json1_1ResourceRequirements(output.resourceRequirements, context)
            : undefined,
    };
};
var deserializeAws_json1_1ContainerOverrides = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerOverride(entry, context);
    });
};
var deserializeAws_json1_1Containers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Container(entry, context);
    });
};
var deserializeAws_json1_1CreateCapacityProviderResponse = function (output, context) {
    return {
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null
            ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateClusterResponse = function (output, context) {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateServiceResponse = function (output, context) {
    return {
        service: output.service !== undefined && output.service !== null
            ? deserializeAws_json1_1Service(output.service, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateTaskSetResponse = function (output, context) {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteAccountSettingResponse = function (output, context) {
    return {
        setting: output.setting !== undefined && output.setting !== null
            ? deserializeAws_json1_1Setting(output.setting, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteAttributesResponse = function (output, context) {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteCapacityProviderResponse = function (output, context) {
    return {
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null
            ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteClusterResponse = function (output, context) {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteServiceResponse = function (output, context) {
    return {
        service: output.service !== undefined && output.service !== null
            ? deserializeAws_json1_1Service(output.service, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteTaskSetResponse = function (output, context) {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1Deployment = function (output, context) {
    return {
        capacityProviderStrategy: output.capacityProviderStrategy !== undefined && output.capacityProviderStrategy !== null
            ? deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        desiredCount: output.desiredCount !== undefined && output.desiredCount !== null ? output.desiredCount : undefined,
        failedTasks: output.failedTasks !== undefined && output.failedTasks !== null ? output.failedTasks : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
        networkConfiguration: output.networkConfiguration !== undefined && output.networkConfiguration !== null
            ? deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context)
            : undefined,
        pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
        platformVersion: output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
        rolloutState: output.rolloutState !== undefined && output.rolloutState !== null ? output.rolloutState : undefined,
        rolloutStateReason: output.rolloutStateReason !== undefined && output.rolloutStateReason !== null
            ? output.rolloutStateReason
            : undefined,
        runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null ? output.taskDefinition : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentCircuitBreaker = function (output, context) {
    return {
        enable: output.enable !== undefined && output.enable !== null ? output.enable : undefined,
        rollback: output.rollback !== undefined && output.rollback !== null ? output.rollback : undefined,
    };
};
var deserializeAws_json1_1DeploymentConfiguration = function (output, context) {
    return {
        deploymentCircuitBreaker: output.deploymentCircuitBreaker !== undefined && output.deploymentCircuitBreaker !== null
            ? deserializeAws_json1_1DeploymentCircuitBreaker(output.deploymentCircuitBreaker, context)
            : undefined,
        maximumPercent: output.maximumPercent !== undefined && output.maximumPercent !== null ? output.maximumPercent : undefined,
        minimumHealthyPercent: output.minimumHealthyPercent !== undefined && output.minimumHealthyPercent !== null
            ? output.minimumHealthyPercent
            : undefined,
    };
};
var deserializeAws_json1_1DeploymentController = function (output, context) {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1Deployments = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Deployment(entry, context);
    });
};
var deserializeAws_json1_1DeregisterContainerInstanceResponse = function (output, context) {
    return {
        containerInstance: output.containerInstance !== undefined && output.containerInstance !== null
            ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeregisterTaskDefinitionResponse = function (output, context) {
    return {
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null
            ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeCapacityProvidersResponse = function (output, context) {
    return {
        capacityProviders: output.capacityProviders !== undefined && output.capacityProviders !== null
            ? deserializeAws_json1_1CapacityProviders(output.capacityProviders, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeClustersResponse = function (output, context) {
    return {
        clusters: output.clusters !== undefined && output.clusters !== null
            ? deserializeAws_json1_1Clusters(output.clusters, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeContainerInstancesResponse = function (output, context) {
    return {
        containerInstances: output.containerInstances !== undefined && output.containerInstances !== null
            ? deserializeAws_json1_1ContainerInstances(output.containerInstances, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeServicesResponse = function (output, context) {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        services: output.services !== undefined && output.services !== null
            ? deserializeAws_json1_1Services(output.services, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTaskDefinitionResponse = function (output, context) {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null
            ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTaskSetsResponse = function (output, context) {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        taskSets: output.taskSets !== undefined && output.taskSets !== null
            ? deserializeAws_json1_1TaskSets(output.taskSets, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeTasksResponse = function (output, context) {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        tasks: output.tasks !== undefined && output.tasks !== null
            ? deserializeAws_json1_1Tasks(output.tasks, context)
            : undefined,
    };
};
var deserializeAws_json1_1Device = function (output, context) {
    return {
        containerPath: output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
        hostPath: output.hostPath !== undefined && output.hostPath !== null ? output.hostPath : undefined,
        permissions: output.permissions !== undefined && output.permissions !== null
            ? deserializeAws_json1_1DeviceCgroupPermissions(output.permissions, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeviceCgroupPermissions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1DevicesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Device(entry, context);
    });
};
var deserializeAws_json1_1DiscoverPollEndpointResponse = function (output, context) {
    return {
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
        telemetryEndpoint: output.telemetryEndpoint !== undefined && output.telemetryEndpoint !== null
            ? output.telemetryEndpoint
            : undefined,
    };
};
var deserializeAws_json1_1DockerLabelsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1DockerVolumeConfiguration = function (output, context) {
    return {
        autoprovision: output.autoprovision !== undefined && output.autoprovision !== null ? output.autoprovision : undefined,
        driver: output.driver !== undefined && output.driver !== null ? output.driver : undefined,
        driverOpts: output.driverOpts !== undefined && output.driverOpts !== null
            ? deserializeAws_json1_1StringMap(output.driverOpts, context)
            : undefined,
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_json1_1StringMap(output.labels, context)
            : undefined,
        scope: output.scope !== undefined && output.scope !== null ? output.scope : undefined,
    };
};
var deserializeAws_json1_1EFSAuthorizationConfig = function (output, context) {
    return {
        accessPointId: output.accessPointId !== undefined && output.accessPointId !== null ? output.accessPointId : undefined,
        iam: output.iam !== undefined && output.iam !== null ? output.iam : undefined,
    };
};
var deserializeAws_json1_1EFSVolumeConfiguration = function (output, context) {
    return {
        authorizationConfig: output.authorizationConfig !== undefined && output.authorizationConfig !== null
            ? deserializeAws_json1_1EFSAuthorizationConfig(output.authorizationConfig, context)
            : undefined,
        fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
        rootDirectory: output.rootDirectory !== undefined && output.rootDirectory !== null ? output.rootDirectory : undefined,
        transitEncryption: output.transitEncryption !== undefined && output.transitEncryption !== null
            ? output.transitEncryption
            : undefined,
        transitEncryptionPort: output.transitEncryptionPort !== undefined && output.transitEncryptionPort !== null
            ? output.transitEncryptionPort
            : undefined,
    };
};
var deserializeAws_json1_1EnvironmentFile = function (output, context) {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1EnvironmentFiles = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentFile(entry, context);
    });
};
var deserializeAws_json1_1EnvironmentVariables = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
var deserializeAws_json1_1EphemeralStorage = function (output, context) {
    return {
        sizeInGiB: output.sizeInGiB !== undefined && output.sizeInGiB !== null ? output.sizeInGiB : undefined,
    };
};
var deserializeAws_json1_1ExecuteCommandConfiguration = function (output, context) {
    return {
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        logConfiguration: output.logConfiguration !== undefined && output.logConfiguration !== null
            ? deserializeAws_json1_1ExecuteCommandLogConfiguration(output.logConfiguration, context)
            : undefined,
        logging: output.logging !== undefined && output.logging !== null ? output.logging : undefined,
    };
};
var deserializeAws_json1_1ExecuteCommandLogConfiguration = function (output, context) {
    return {
        cloudWatchEncryptionEnabled: output.cloudWatchEncryptionEnabled !== undefined && output.cloudWatchEncryptionEnabled !== null
            ? output.cloudWatchEncryptionEnabled
            : undefined,
        cloudWatchLogGroupName: output.cloudWatchLogGroupName !== undefined && output.cloudWatchLogGroupName !== null
            ? output.cloudWatchLogGroupName
            : undefined,
        s3BucketName: output.s3BucketName !== undefined && output.s3BucketName !== null ? output.s3BucketName : undefined,
        s3EncryptionEnabled: output.s3EncryptionEnabled !== undefined && output.s3EncryptionEnabled !== null
            ? output.s3EncryptionEnabled
            : undefined,
        s3KeyPrefix: output.s3KeyPrefix !== undefined && output.s3KeyPrefix !== null ? output.s3KeyPrefix : undefined,
    };
};
var deserializeAws_json1_1ExecuteCommandResponse = function (output, context) {
    return {
        clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        containerArn: output.containerArn !== undefined && output.containerArn !== null ? output.containerArn : undefined,
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        interactive: output.interactive !== undefined && output.interactive !== null ? output.interactive : undefined,
        session: output.session !== undefined && output.session !== null
            ? deserializeAws_json1_1Session(output.session, context)
            : undefined,
        taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
    };
};
var deserializeAws_json1_1Failure = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        detail: output.detail !== undefined && output.detail !== null ? output.detail : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
var deserializeAws_json1_1Failures = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Failure(entry, context);
    });
};
var deserializeAws_json1_1FirelensConfiguration = function (output, context) {
    return {
        options: output.options !== undefined && output.options !== null
            ? deserializeAws_json1_1FirelensConfigurationOptionsMap(output.options, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1FirelensConfigurationOptionsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig = function (output, context) {
    return {
        credentialsParameter: output.credentialsParameter !== undefined && output.credentialsParameter !== null
            ? output.credentialsParameter
            : undefined,
        domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
    };
};
var deserializeAws_json1_1FSxWindowsFileServerVolumeConfiguration = function (output, context) {
    return {
        authorizationConfig: output.authorizationConfig !== undefined && output.authorizationConfig !== null
            ? deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig(output.authorizationConfig, context)
            : undefined,
        fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
        rootDirectory: output.rootDirectory !== undefined && output.rootDirectory !== null ? output.rootDirectory : undefined,
    };
};
var deserializeAws_json1_1GpuIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1HealthCheck = function (output, context) {
    return {
        command: output.command !== undefined && output.command !== null
            ? deserializeAws_json1_1StringList(output.command, context)
            : undefined,
        interval: output.interval !== undefined && output.interval !== null ? output.interval : undefined,
        retries: output.retries !== undefined && output.retries !== null ? output.retries : undefined,
        startPeriod: output.startPeriod !== undefined && output.startPeriod !== null ? output.startPeriod : undefined,
        timeout: output.timeout !== undefined && output.timeout !== null ? output.timeout : undefined,
    };
};
var deserializeAws_json1_1HostEntry = function (output, context) {
    return {
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    };
};
var deserializeAws_json1_1HostEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HostEntry(entry, context);
    });
};
var deserializeAws_json1_1HostVolumeProperties = function (output, context) {
    return {
        sourcePath: output.sourcePath !== undefined && output.sourcePath !== null ? output.sourcePath : undefined,
    };
};
var deserializeAws_json1_1InferenceAccelerator = function (output, context) {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
    };
};
var deserializeAws_json1_1InferenceAcceleratorOverride = function (output, context) {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
    };
};
var deserializeAws_json1_1InferenceAcceleratorOverrides = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InferenceAcceleratorOverride(entry, context);
    });
};
var deserializeAws_json1_1InferenceAccelerators = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InferenceAccelerator(entry, context);
    });
};
var deserializeAws_json1_1InvalidParameterException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1KernelCapabilities = function (output, context) {
    return {
        add: output.add !== undefined && output.add !== null
            ? deserializeAws_json1_1StringList(output.add, context)
            : undefined,
        drop: output.drop !== undefined && output.drop !== null
            ? deserializeAws_json1_1StringList(output.drop, context)
            : undefined,
    };
};
var deserializeAws_json1_1KeyValuePair = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1LinuxParameters = function (output, context) {
    return {
        capabilities: output.capabilities !== undefined && output.capabilities !== null
            ? deserializeAws_json1_1KernelCapabilities(output.capabilities, context)
            : undefined,
        devices: output.devices !== undefined && output.devices !== null
            ? deserializeAws_json1_1DevicesList(output.devices, context)
            : undefined,
        initProcessEnabled: output.initProcessEnabled !== undefined && output.initProcessEnabled !== null
            ? output.initProcessEnabled
            : undefined,
        maxSwap: output.maxSwap !== undefined && output.maxSwap !== null ? output.maxSwap : undefined,
        sharedMemorySize: output.sharedMemorySize !== undefined && output.sharedMemorySize !== null ? output.sharedMemorySize : undefined,
        swappiness: output.swappiness !== undefined && output.swappiness !== null ? output.swappiness : undefined,
        tmpfs: output.tmpfs !== undefined && output.tmpfs !== null
            ? deserializeAws_json1_1TmpfsList(output.tmpfs, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListAccountSettingsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_json1_1Settings(output.settings, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListAttributesResponse = function (output, context) {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListClustersResponse = function (output, context) {
    return {
        clusterArns: output.clusterArns !== undefined && output.clusterArns !== null
            ? deserializeAws_json1_1StringList(output.clusterArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListContainerInstancesResponse = function (output, context) {
    return {
        containerInstanceArns: output.containerInstanceArns !== undefined && output.containerInstanceArns !== null
            ? deserializeAws_json1_1StringList(output.containerInstanceArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListServicesResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        serviceArns: output.serviceArns !== undefined && output.serviceArns !== null
            ? deserializeAws_json1_1StringList(output.serviceArns, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTagsForResourceResponse = function (output, context) {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
var deserializeAws_json1_1ListTaskDefinitionFamiliesResponse = function (output, context) {
    return {
        families: output.families !== undefined && output.families !== null
            ? deserializeAws_json1_1StringList(output.families, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
var deserializeAws_json1_1ListTaskDefinitionsResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        taskDefinitionArns: output.taskDefinitionArns !== undefined && output.taskDefinitionArns !== null
            ? deserializeAws_json1_1StringList(output.taskDefinitionArns, context)
            : undefined,
    };
};
var deserializeAws_json1_1ListTasksResponse = function (output, context) {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        taskArns: output.taskArns !== undefined && output.taskArns !== null
            ? deserializeAws_json1_1StringList(output.taskArns, context)
            : undefined,
    };
};
var deserializeAws_json1_1LoadBalancer = function (output, context) {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        loadBalancerName: output.loadBalancerName !== undefined && output.loadBalancerName !== null ? output.loadBalancerName : undefined,
        targetGroupArn: output.targetGroupArn !== undefined && output.targetGroupArn !== null ? output.targetGroupArn : undefined,
    };
};
var deserializeAws_json1_1LoadBalancers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancer(entry, context);
    });
};
var deserializeAws_json1_1LogConfiguration = function (output, context) {
    return {
        logDriver: output.logDriver !== undefined && output.logDriver !== null ? output.logDriver : undefined,
        options: output.options !== undefined && output.options !== null
            ? deserializeAws_json1_1LogConfigurationOptionsMap(output.options, context)
            : undefined,
        secretOptions: output.secretOptions !== undefined && output.secretOptions !== null
            ? deserializeAws_json1_1SecretList(output.secretOptions, context)
            : undefined,
    };
};
var deserializeAws_json1_1LogConfigurationOptionsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_1ManagedAgent = function (output, context) {
    return {
        lastStartedAt: output.lastStartedAt !== undefined && output.lastStartedAt !== null
            ? new Date(Math.round(output.lastStartedAt * 1000))
            : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
var deserializeAws_json1_1ManagedAgents = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ManagedAgent(entry, context);
    });
};
var deserializeAws_json1_1ManagedScaling = function (output, context) {
    return {
        instanceWarmupPeriod: output.instanceWarmupPeriod !== undefined && output.instanceWarmupPeriod !== null
            ? output.instanceWarmupPeriod
            : undefined,
        maximumScalingStepSize: output.maximumScalingStepSize !== undefined && output.maximumScalingStepSize !== null
            ? output.maximumScalingStepSize
            : undefined,
        minimumScalingStepSize: output.minimumScalingStepSize !== undefined && output.minimumScalingStepSize !== null
            ? output.minimumScalingStepSize
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        targetCapacity: output.targetCapacity !== undefined && output.targetCapacity !== null ? output.targetCapacity : undefined,
    };
};
var deserializeAws_json1_1MissingVersionException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1MountPoint = function (output, context) {
    return {
        containerPath: output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
        readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
        sourceVolume: output.sourceVolume !== undefined && output.sourceVolume !== null ? output.sourceVolume : undefined,
    };
};
var deserializeAws_json1_1MountPointList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MountPoint(entry, context);
    });
};
var deserializeAws_json1_1NetworkBinding = function (output, context) {
    return {
        bindIP: output.bindIP !== undefined && output.bindIP !== null ? output.bindIP : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        hostPort: output.hostPort !== undefined && output.hostPort !== null ? output.hostPort : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    };
};
var deserializeAws_json1_1NetworkBindings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkBinding(entry, context);
    });
};
var deserializeAws_json1_1NetworkConfiguration = function (output, context) {
    return {
        awsvpcConfiguration: output.awsvpcConfiguration !== undefined && output.awsvpcConfiguration !== null
            ? deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_1NetworkInterface = function (output, context) {
    return {
        attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
        ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
        privateIpv4Address: output.privateIpv4Address !== undefined && output.privateIpv4Address !== null
            ? output.privateIpv4Address
            : undefined,
    };
};
var deserializeAws_json1_1NetworkInterfaces = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};
var deserializeAws_json1_1NoUpdateAvailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PlacementConstraint = function (output, context) {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1PlacementConstraints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacementConstraint(entry, context);
    });
};
var deserializeAws_json1_1PlacementStrategies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacementStrategy(entry, context);
    });
};
var deserializeAws_json1_1PlacementStrategy = function (output, context) {
    return {
        field: output.field !== undefined && output.field !== null ? output.field : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PlatformUnknownException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1PortMapping = function (output, context) {
    return {
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        hostPort: output.hostPort !== undefined && output.hostPort !== null ? output.hostPort : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    };
};
var deserializeAws_json1_1PortMappingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortMapping(entry, context);
    });
};
var deserializeAws_json1_1ProxyConfiguration = function (output, context) {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_json1_1ProxyConfigurationProperties(output.properties, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ProxyConfigurationProperties = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
var deserializeAws_json1_1PutAccountSettingDefaultResponse = function (output, context) {
    return {
        setting: output.setting !== undefined && output.setting !== null
            ? deserializeAws_json1_1Setting(output.setting, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutAccountSettingResponse = function (output, context) {
    return {
        setting: output.setting !== undefined && output.setting !== null
            ? deserializeAws_json1_1Setting(output.setting, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutAttributesResponse = function (output, context) {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
    };
};
var deserializeAws_json1_1PutClusterCapacityProvidersResponse = function (output, context) {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1RegisterContainerInstanceResponse = function (output, context) {
    return {
        containerInstance: output.containerInstance !== undefined && output.containerInstance !== null
            ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1RegisterTaskDefinitionResponse = function (output, context) {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null
            ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
            : undefined,
    };
};
var deserializeAws_json1_1RepositoryCredentials = function (output, context) {
    return {
        credentialsParameter: output.credentialsParameter !== undefined && output.credentialsParameter !== null
            ? output.credentialsParameter
            : undefined,
    };
};
var deserializeAws_json1_1RequiresAttributes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
var deserializeAws_json1_1Resource = function (output, context) {
    return {
        doubleValue: output.doubleValue !== undefined && output.doubleValue !== null ? output.doubleValue : undefined,
        integerValue: output.integerValue !== undefined && output.integerValue !== null ? output.integerValue : undefined,
        longValue: output.longValue !== undefined && output.longValue !== null ? output.longValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        stringSetValue: output.stringSetValue !== undefined && output.stringSetValue !== null
            ? deserializeAws_json1_1StringList(output.stringSetValue, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1ResourceInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ResourceRequirement = function (output, context) {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1ResourceRequirements = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceRequirement(entry, context);
    });
};
var deserializeAws_json1_1Resources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Resource(entry, context);
    });
};
var deserializeAws_json1_1RunTaskResponse = function (output, context) {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        tasks: output.tasks !== undefined && output.tasks !== null
            ? deserializeAws_json1_1Tasks(output.tasks, context)
            : undefined,
    };
};
var deserializeAws_json1_1Scale = function (output, context) {
    return {
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1Secret = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        valueFrom: output.valueFrom !== undefined && output.valueFrom !== null ? output.valueFrom : undefined,
    };
};
var deserializeAws_json1_1SecretList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Secret(entry, context);
    });
};
var deserializeAws_json1_1ServerException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Service = function (output, context) {
    return {
        capacityProviderStrategy: output.capacityProviderStrategy !== undefined && output.capacityProviderStrategy !== null
            ? deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context)
            : undefined,
        clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        deploymentConfiguration: output.deploymentConfiguration !== undefined && output.deploymentConfiguration !== null
            ? deserializeAws_json1_1DeploymentConfiguration(output.deploymentConfiguration, context)
            : undefined,
        deploymentController: output.deploymentController !== undefined && output.deploymentController !== null
            ? deserializeAws_json1_1DeploymentController(output.deploymentController, context)
            : undefined,
        deployments: output.deployments !== undefined && output.deployments !== null
            ? deserializeAws_json1_1Deployments(output.deployments, context)
            : undefined,
        desiredCount: output.desiredCount !== undefined && output.desiredCount !== null ? output.desiredCount : undefined,
        enableECSManagedTags: output.enableECSManagedTags !== undefined && output.enableECSManagedTags !== null
            ? output.enableECSManagedTags
            : undefined,
        enableExecuteCommand: output.enableExecuteCommand !== undefined && output.enableExecuteCommand !== null
            ? output.enableExecuteCommand
            : undefined,
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1ServiceEvents(output.events, context)
            : undefined,
        healthCheckGracePeriodSeconds: output.healthCheckGracePeriodSeconds !== undefined && output.healthCheckGracePeriodSeconds !== null
            ? output.healthCheckGracePeriodSeconds
            : undefined,
        launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
        loadBalancers: output.loadBalancers !== undefined && output.loadBalancers !== null
            ? deserializeAws_json1_1LoadBalancers(output.loadBalancers, context)
            : undefined,
        networkConfiguration: output.networkConfiguration !== undefined && output.networkConfiguration !== null
            ? deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context)
            : undefined,
        pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
        placementConstraints: output.placementConstraints !== undefined && output.placementConstraints !== null
            ? deserializeAws_json1_1PlacementConstraints(output.placementConstraints, context)
            : undefined,
        placementStrategy: output.placementStrategy !== undefined && output.placementStrategy !== null
            ? deserializeAws_json1_1PlacementStrategies(output.placementStrategy, context)
            : undefined,
        platformVersion: output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
        propagateTags: output.propagateTags !== undefined && output.propagateTags !== null ? output.propagateTags : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
        schedulingStrategy: output.schedulingStrategy !== undefined && output.schedulingStrategy !== null
            ? output.schedulingStrategy
            : undefined,
        serviceArn: output.serviceArn !== undefined && output.serviceArn !== null ? output.serviceArn : undefined,
        serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
        serviceRegistries: output.serviceRegistries !== undefined && output.serviceRegistries !== null
            ? deserializeAws_json1_1ServiceRegistries(output.serviceRegistries, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null ? output.taskDefinition : undefined,
        taskSets: output.taskSets !== undefined && output.taskSets !== null
            ? deserializeAws_json1_1TaskSets(output.taskSets, context)
            : undefined,
    };
};
var deserializeAws_json1_1ServiceEvent = function (output, context) {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ServiceEvents = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceEvent(entry, context);
    });
};
var deserializeAws_json1_1ServiceNotActiveException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ServiceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ServiceRegistries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceRegistry(entry, context);
    });
};
var deserializeAws_json1_1ServiceRegistry = function (output, context) {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        port: output.port !== undefined && output.port !== null ? output.port : undefined,
        registryArn: output.registryArn !== undefined && output.registryArn !== null ? output.registryArn : undefined,
    };
};
var deserializeAws_json1_1Services = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Service(entry, context);
    });
};
var deserializeAws_json1_1Session = function (output, context) {
    return {
        sessionId: output.sessionId !== undefined && output.sessionId !== null ? output.sessionId : undefined,
        streamUrl: output.streamUrl !== undefined && output.streamUrl !== null ? output.streamUrl : undefined,
        tokenValue: output.tokenValue !== undefined && output.tokenValue !== null ? output.tokenValue : undefined,
    };
};
var deserializeAws_json1_1Setting = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        principalArn: output.principalArn !== undefined && output.principalArn !== null ? output.principalArn : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1Settings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Setting(entry, context);
    });
};
var deserializeAws_json1_1StartTaskResponse = function (output, context) {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        tasks: output.tasks !== undefined && output.tasks !== null
            ? deserializeAws_json1_1Tasks(output.tasks, context)
            : undefined,
    };
};
var deserializeAws_json1_1Statistics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
var deserializeAws_json1_1StopTaskResponse = function (output, context) {
    return {
        task: output.task !== undefined && output.task !== null ? deserializeAws_json1_1Task(output.task, context) : undefined,
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
var deserializeAws_json1_1SubmitAttachmentStateChangesResponse = function (output, context) {
    return {
        acknowledgment: output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
    };
};
var deserializeAws_json1_1SubmitContainerStateChangeResponse = function (output, context) {
    return {
        acknowledgment: output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
    };
};
var deserializeAws_json1_1SubmitTaskStateChangeResponse = function (output, context) {
    return {
        acknowledgment: output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
    };
};
var deserializeAws_json1_1SystemControl = function (output, context) {
    return {
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1SystemControls = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SystemControl(entry, context);
    });
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {};
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
var deserializeAws_json1_1TargetNotConnectedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TargetNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Task = function (output, context) {
    return {
        attachments: output.attachments !== undefined && output.attachments !== null
            ? deserializeAws_json1_1Attachments(output.attachments, context)
            : undefined,
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
        availabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        capacityProviderName: output.capacityProviderName !== undefined && output.capacityProviderName !== null
            ? output.capacityProviderName
            : undefined,
        clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        connectivity: output.connectivity !== undefined && output.connectivity !== null ? output.connectivity : undefined,
        connectivityAt: output.connectivityAt !== undefined && output.connectivityAt !== null
            ? new Date(Math.round(output.connectivityAt * 1000))
            : undefined,
        containerInstanceArn: output.containerInstanceArn !== undefined && output.containerInstanceArn !== null
            ? output.containerInstanceArn
            : undefined,
        containers: output.containers !== undefined && output.containers !== null
            ? deserializeAws_json1_1Containers(output.containers, context)
            : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        desiredStatus: output.desiredStatus !== undefined && output.desiredStatus !== null ? output.desiredStatus : undefined,
        enableExecuteCommand: output.enableExecuteCommand !== undefined && output.enableExecuteCommand !== null
            ? output.enableExecuteCommand
            : undefined,
        ephemeralStorage: output.ephemeralStorage !== undefined && output.ephemeralStorage !== null
            ? deserializeAws_json1_1EphemeralStorage(output.ephemeralStorage, context)
            : undefined,
        executionStoppedAt: output.executionStoppedAt !== undefined && output.executionStoppedAt !== null
            ? new Date(Math.round(output.executionStoppedAt * 1000))
            : undefined,
        group: output.group !== undefined && output.group !== null ? output.group : undefined,
        healthStatus: output.healthStatus !== undefined && output.healthStatus !== null ? output.healthStatus : undefined,
        inferenceAccelerators: output.inferenceAccelerators !== undefined && output.inferenceAccelerators !== null
            ? deserializeAws_json1_1InferenceAccelerators(output.inferenceAccelerators, context)
            : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        overrides: output.overrides !== undefined && output.overrides !== null
            ? deserializeAws_json1_1TaskOverride(output.overrides, context)
            : undefined,
        platformVersion: output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
        pullStartedAt: output.pullStartedAt !== undefined && output.pullStartedAt !== null
            ? new Date(Math.round(output.pullStartedAt * 1000))
            : undefined,
        pullStoppedAt: output.pullStoppedAt !== undefined && output.pullStoppedAt !== null
            ? new Date(Math.round(output.pullStoppedAt * 1000))
            : undefined,
        startedAt: output.startedAt !== undefined && output.startedAt !== null
            ? new Date(Math.round(output.startedAt * 1000))
            : undefined,
        startedBy: output.startedBy !== undefined && output.startedBy !== null ? output.startedBy : undefined,
        stopCode: output.stopCode !== undefined && output.stopCode !== null ? output.stopCode : undefined,
        stoppedAt: output.stoppedAt !== undefined && output.stoppedAt !== null
            ? new Date(Math.round(output.stoppedAt * 1000))
            : undefined,
        stoppedReason: output.stoppedReason !== undefined && output.stoppedReason !== null ? output.stoppedReason : undefined,
        stoppingAt: output.stoppingAt !== undefined && output.stoppingAt !== null
            ? new Date(Math.round(output.stoppingAt * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskArn: output.taskArn !== undefined && output.taskArn !== null ? output.taskArn : undefined,
        taskDefinitionArn: output.taskDefinitionArn !== undefined && output.taskDefinitionArn !== null
            ? output.taskDefinitionArn
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_json1_1TaskDefinition = function (output, context) {
    return {
        compatibilities: output.compatibilities !== undefined && output.compatibilities !== null
            ? deserializeAws_json1_1CompatibilityList(output.compatibilities, context)
            : undefined,
        containerDefinitions: output.containerDefinitions !== undefined && output.containerDefinitions !== null
            ? deserializeAws_json1_1ContainerDefinitions(output.containerDefinitions, context)
            : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
        deregisteredAt: output.deregisteredAt !== undefined && output.deregisteredAt !== null
            ? new Date(Math.round(output.deregisteredAt * 1000))
            : undefined,
        ephemeralStorage: output.ephemeralStorage !== undefined && output.ephemeralStorage !== null
            ? deserializeAws_json1_1EphemeralStorage(output.ephemeralStorage, context)
            : undefined,
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        family: output.family !== undefined && output.family !== null ? output.family : undefined,
        inferenceAccelerators: output.inferenceAccelerators !== undefined && output.inferenceAccelerators !== null
            ? deserializeAws_json1_1InferenceAccelerators(output.inferenceAccelerators, context)
            : undefined,
        ipcMode: output.ipcMode !== undefined && output.ipcMode !== null ? output.ipcMode : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        networkMode: output.networkMode !== undefined && output.networkMode !== null ? output.networkMode : undefined,
        pidMode: output.pidMode !== undefined && output.pidMode !== null ? output.pidMode : undefined,
        placementConstraints: output.placementConstraints !== undefined && output.placementConstraints !== null
            ? deserializeAws_json1_1TaskDefinitionPlacementConstraints(output.placementConstraints, context)
            : undefined,
        proxyConfiguration: output.proxyConfiguration !== undefined && output.proxyConfiguration !== null
            ? deserializeAws_json1_1ProxyConfiguration(output.proxyConfiguration, context)
            : undefined,
        registeredAt: output.registeredAt !== undefined && output.registeredAt !== null
            ? new Date(Math.round(output.registeredAt * 1000))
            : undefined,
        registeredBy: output.registeredBy !== undefined && output.registeredBy !== null ? output.registeredBy : undefined,
        requiresAttributes: output.requiresAttributes !== undefined && output.requiresAttributes !== null
            ? deserializeAws_json1_1RequiresAttributes(output.requiresAttributes, context)
            : undefined,
        requiresCompatibilities: output.requiresCompatibilities !== undefined && output.requiresCompatibilities !== null
            ? deserializeAws_json1_1CompatibilityList(output.requiresCompatibilities, context)
            : undefined,
        revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        taskDefinitionArn: output.taskDefinitionArn !== undefined && output.taskDefinitionArn !== null
            ? output.taskDefinitionArn
            : undefined,
        taskRoleArn: output.taskRoleArn !== undefined && output.taskRoleArn !== null ? output.taskRoleArn : undefined,
        volumes: output.volumes !== undefined && output.volumes !== null
            ? deserializeAws_json1_1VolumeList(output.volumes, context)
            : undefined,
    };
};
var deserializeAws_json1_1TaskDefinitionPlacementConstraint = function (output, context) {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_json1_1TaskDefinitionPlacementConstraints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context);
    });
};
var deserializeAws_json1_1TaskOverride = function (output, context) {
    return {
        containerOverrides: output.containerOverrides !== undefined && output.containerOverrides !== null
            ? deserializeAws_json1_1ContainerOverrides(output.containerOverrides, context)
            : undefined,
        cpu: output.cpu !== undefined && output.cpu !== null ? output.cpu : undefined,
        ephemeralStorage: output.ephemeralStorage !== undefined && output.ephemeralStorage !== null
            ? deserializeAws_json1_1EphemeralStorage(output.ephemeralStorage, context)
            : undefined,
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        inferenceAcceleratorOverrides: output.inferenceAcceleratorOverrides !== undefined && output.inferenceAcceleratorOverrides !== null
            ? deserializeAws_json1_1InferenceAcceleratorOverrides(output.inferenceAcceleratorOverrides, context)
            : undefined,
        memory: output.memory !== undefined && output.memory !== null ? output.memory : undefined,
        taskRoleArn: output.taskRoleArn !== undefined && output.taskRoleArn !== null ? output.taskRoleArn : undefined,
    };
};
var deserializeAws_json1_1Tasks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Task(entry, context);
    });
};
var deserializeAws_json1_1TaskSet = function (output, context) {
    return {
        capacityProviderStrategy: output.capacityProviderStrategy !== undefined && output.capacityProviderStrategy !== null
            ? deserializeAws_json1_1CapacityProviderStrategy(output.capacityProviderStrategy, context)
            : undefined,
        clusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        computedDesiredCount: output.computedDesiredCount !== undefined && output.computedDesiredCount !== null
            ? output.computedDesiredCount
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        externalId: output.externalId !== undefined && output.externalId !== null ? output.externalId : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        launchType: output.launchType !== undefined && output.launchType !== null ? output.launchType : undefined,
        loadBalancers: output.loadBalancers !== undefined && output.loadBalancers !== null
            ? deserializeAws_json1_1LoadBalancers(output.loadBalancers, context)
            : undefined,
        networkConfiguration: output.networkConfiguration !== undefined && output.networkConfiguration !== null
            ? deserializeAws_json1_1NetworkConfiguration(output.networkConfiguration, context)
            : undefined,
        pendingCount: output.pendingCount !== undefined && output.pendingCount !== null ? output.pendingCount : undefined,
        platformVersion: output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
        runningCount: output.runningCount !== undefined && output.runningCount !== null ? output.runningCount : undefined,
        scale: output.scale !== undefined && output.scale !== null
            ? deserializeAws_json1_1Scale(output.scale, context)
            : undefined,
        serviceArn: output.serviceArn !== undefined && output.serviceArn !== null ? output.serviceArn : undefined,
        serviceRegistries: output.serviceRegistries !== undefined && output.serviceRegistries !== null
            ? deserializeAws_json1_1ServiceRegistries(output.serviceRegistries, context)
            : undefined,
        stabilityStatus: output.stabilityStatus !== undefined && output.stabilityStatus !== null ? output.stabilityStatus : undefined,
        stabilityStatusAt: output.stabilityStatusAt !== undefined && output.stabilityStatusAt !== null
            ? new Date(Math.round(output.stabilityStatusAt * 1000))
            : undefined,
        startedBy: output.startedBy !== undefined && output.startedBy !== null ? output.startedBy : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null ? output.taskDefinition : undefined,
        taskSetArn: output.taskSetArn !== undefined && output.taskSetArn !== null ? output.taskSetArn : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null
            ? new Date(Math.round(output.updatedAt * 1000))
            : undefined,
    };
};
var deserializeAws_json1_1TaskSetNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TaskSets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskSet(entry, context);
    });
};
var deserializeAws_json1_1Tmpfs = function (output, context) {
    return {
        containerPath: output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
        mountOptions: output.mountOptions !== undefined && output.mountOptions !== null
            ? deserializeAws_json1_1StringList(output.mountOptions, context)
            : undefined,
        size: output.size !== undefined && output.size !== null ? output.size : undefined,
    };
};
var deserializeAws_json1_1TmpfsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tmpfs(entry, context);
    });
};
var deserializeAws_json1_1Ulimit = function (output, context) {
    return {
        hardLimit: output.hardLimit !== undefined && output.hardLimit !== null ? output.hardLimit : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        softLimit: output.softLimit !== undefined && output.softLimit !== null ? output.softLimit : undefined,
    };
};
var deserializeAws_json1_1UlimitList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Ulimit(entry, context);
    });
};
var deserializeAws_json1_1UnsupportedFeatureException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {};
};
var deserializeAws_json1_1UpdateCapacityProviderResponse = function (output, context) {
    return {
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null
            ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateClusterResponse = function (output, context) {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateClusterSettingsResponse = function (output, context) {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateContainerAgentResponse = function (output, context) {
    return {
        containerInstance: output.containerInstance !== undefined && output.containerInstance !== null
            ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateContainerInstancesStateResponse = function (output, context) {
    return {
        containerInstances: output.containerInstances !== undefined && output.containerInstances !== null
            ? deserializeAws_json1_1ContainerInstances(output.containerInstances, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateInProgressException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse = function (output, context) {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateServiceResponse = function (output, context) {
    return {
        service: output.service !== undefined && output.service !== null
            ? deserializeAws_json1_1Service(output.service, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateTaskSetResponse = function (output, context) {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
var deserializeAws_json1_1VersionInfo = function (output, context) {
    return {
        agentHash: output.agentHash !== undefined && output.agentHash !== null ? output.agentHash : undefined,
        agentVersion: output.agentVersion !== undefined && output.agentVersion !== null ? output.agentVersion : undefined,
        dockerVersion: output.dockerVersion !== undefined && output.dockerVersion !== null ? output.dockerVersion : undefined,
    };
};
var deserializeAws_json1_1Volume = function (output, context) {
    return {
        dockerVolumeConfiguration: output.dockerVolumeConfiguration !== undefined && output.dockerVolumeConfiguration !== null
            ? deserializeAws_json1_1DockerVolumeConfiguration(output.dockerVolumeConfiguration, context)
            : undefined,
        efsVolumeConfiguration: output.efsVolumeConfiguration !== undefined && output.efsVolumeConfiguration !== null
            ? deserializeAws_json1_1EFSVolumeConfiguration(output.efsVolumeConfiguration, context)
            : undefined,
        fsxWindowsFileServerVolumeConfiguration: output.fsxWindowsFileServerVolumeConfiguration !== undefined &&
            output.fsxWindowsFileServerVolumeConfiguration !== null
            ? deserializeAws_json1_1FSxWindowsFileServerVolumeConfiguration(output.fsxWindowsFileServerVolumeConfiguration, context)
            : undefined,
        host: output.host !== undefined && output.host !== null
            ? deserializeAws_json1_1HostVolumeProperties(output.host, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_json1_1VolumeFrom = function (output, context) {
    return {
        readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
        sourceContainer: output.sourceContainer !== undefined && output.sourceContainer !== null ? output.sourceContainer : undefined,
    };
};
var deserializeAws_json1_1VolumeFromList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeFrom(entry, context);
    });
};
var deserializeAws_json1_1VolumeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Volume(entry, context);
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