"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1UpdateServiceCommand = exports.serializeAws_json1_1UpdateContainerInstancesStateCommand = exports.serializeAws_json1_1UpdateContainerAgentCommand = exports.serializeAws_json1_1UpdateClusterSettingsCommand = exports.serializeAws_json1_1UpdateClusterCommand = exports.serializeAws_json1_1UpdateCapacityProviderCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SubmitTaskStateChangeCommand = exports.serializeAws_json1_1SubmitContainerStateChangeCommand = exports.serializeAws_json1_1SubmitAttachmentStateChangesCommand = exports.serializeAws_json1_1StopTaskCommand = exports.serializeAws_json1_1StartTaskCommand = exports.serializeAws_json1_1RunTaskCommand = exports.serializeAws_json1_1RegisterTaskDefinitionCommand = exports.serializeAws_json1_1RegisterContainerInstanceCommand = exports.serializeAws_json1_1PutClusterCapacityProvidersCommand = exports.serializeAws_json1_1PutAttributesCommand = exports.serializeAws_json1_1PutAccountSettingDefaultCommand = exports.serializeAws_json1_1PutAccountSettingCommand = exports.serializeAws_json1_1ListTasksCommand = exports.serializeAws_json1_1ListTaskDefinitionsCommand = exports.serializeAws_json1_1ListTaskDefinitionFamiliesCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListServicesCommand = exports.serializeAws_json1_1ListContainerInstancesCommand = exports.serializeAws_json1_1ListClustersCommand = exports.serializeAws_json1_1ListAttributesCommand = exports.serializeAws_json1_1ListAccountSettingsCommand = exports.serializeAws_json1_1ExecuteCommandCommand = exports.serializeAws_json1_1DiscoverPollEndpointCommand = exports.serializeAws_json1_1DescribeTaskSetsCommand = exports.serializeAws_json1_1DescribeTasksCommand = exports.serializeAws_json1_1DescribeTaskDefinitionCommand = exports.serializeAws_json1_1DescribeServicesCommand = exports.serializeAws_json1_1DescribeContainerInstancesCommand = exports.serializeAws_json1_1DescribeClustersCommand = exports.serializeAws_json1_1DescribeCapacityProvidersCommand = exports.serializeAws_json1_1DeregisterTaskDefinitionCommand = exports.serializeAws_json1_1DeregisterContainerInstanceCommand = exports.serializeAws_json1_1DeleteTaskSetCommand = exports.serializeAws_json1_1DeleteServiceCommand = exports.serializeAws_json1_1DeleteClusterCommand = exports.serializeAws_json1_1DeleteCapacityProviderCommand = exports.serializeAws_json1_1DeleteAttributesCommand = exports.serializeAws_json1_1DeleteAccountSettingCommand = exports.serializeAws_json1_1CreateTaskSetCommand = exports.serializeAws_json1_1CreateServiceCommand = exports.serializeAws_json1_1CreateClusterCommand = exports.serializeAws_json1_1CreateCapacityProviderCommand = void 0;
exports.deserializeAws_json1_1UpdateContainerAgentCommand = exports.deserializeAws_json1_1UpdateClusterSettingsCommand = exports.deserializeAws_json1_1UpdateClusterCommand = exports.deserializeAws_json1_1UpdateCapacityProviderCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SubmitTaskStateChangeCommand = exports.deserializeAws_json1_1SubmitContainerStateChangeCommand = exports.deserializeAws_json1_1SubmitAttachmentStateChangesCommand = exports.deserializeAws_json1_1StopTaskCommand = exports.deserializeAws_json1_1StartTaskCommand = exports.deserializeAws_json1_1RunTaskCommand = exports.deserializeAws_json1_1RegisterTaskDefinitionCommand = exports.deserializeAws_json1_1RegisterContainerInstanceCommand = exports.deserializeAws_json1_1PutClusterCapacityProvidersCommand = exports.deserializeAws_json1_1PutAttributesCommand = exports.deserializeAws_json1_1PutAccountSettingDefaultCommand = exports.deserializeAws_json1_1PutAccountSettingCommand = exports.deserializeAws_json1_1ListTasksCommand = exports.deserializeAws_json1_1ListTaskDefinitionsCommand = exports.deserializeAws_json1_1ListTaskDefinitionFamiliesCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListServicesCommand = exports.deserializeAws_json1_1ListContainerInstancesCommand = exports.deserializeAws_json1_1ListClustersCommand = exports.deserializeAws_json1_1ListAttributesCommand = exports.deserializeAws_json1_1ListAccountSettingsCommand = exports.deserializeAws_json1_1ExecuteCommandCommand = exports.deserializeAws_json1_1DiscoverPollEndpointCommand = exports.deserializeAws_json1_1DescribeTaskSetsCommand = exports.deserializeAws_json1_1DescribeTasksCommand = exports.deserializeAws_json1_1DescribeTaskDefinitionCommand = exports.deserializeAws_json1_1DescribeServicesCommand = exports.deserializeAws_json1_1DescribeContainerInstancesCommand = exports.deserializeAws_json1_1DescribeClustersCommand = exports.deserializeAws_json1_1DescribeCapacityProvidersCommand = exports.deserializeAws_json1_1DeregisterTaskDefinitionCommand = exports.deserializeAws_json1_1DeregisterContainerInstanceCommand = exports.deserializeAws_json1_1DeleteTaskSetCommand = exports.deserializeAws_json1_1DeleteServiceCommand = exports.deserializeAws_json1_1DeleteClusterCommand = exports.deserializeAws_json1_1DeleteCapacityProviderCommand = exports.deserializeAws_json1_1DeleteAttributesCommand = exports.deserializeAws_json1_1DeleteAccountSettingCommand = exports.deserializeAws_json1_1CreateTaskSetCommand = exports.deserializeAws_json1_1CreateServiceCommand = exports.deserializeAws_json1_1CreateClusterCommand = exports.deserializeAws_json1_1CreateCapacityProviderCommand = exports.serializeAws_json1_1UpdateTaskSetCommand = exports.serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = void 0;
exports.deserializeAws_json1_1UpdateTaskSetCommand = exports.deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand = exports.deserializeAws_json1_1UpdateServiceCommand = exports.deserializeAws_json1_1UpdateContainerInstancesStateCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1CreateCapacityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCapacityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateCapacityProviderCommand = serializeAws_json1_1CreateCapacityProviderCommand;
const serializeAws_json1_1CreateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateClusterCommand = serializeAws_json1_1CreateClusterCommand;
const serializeAws_json1_1CreateServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateServiceCommand = serializeAws_json1_1CreateServiceCommand;
const serializeAws_json1_1CreateTaskSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.CreateTaskSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTaskSetCommand = serializeAws_json1_1CreateTaskSetCommand;
const serializeAws_json1_1DeleteAccountSettingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAccountSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAccountSettingCommand = serializeAws_json1_1DeleteAccountSettingCommand;
const serializeAws_json1_1DeleteAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAttributesCommand = serializeAws_json1_1DeleteAttributesCommand;
const serializeAws_json1_1DeleteCapacityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCapacityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteCapacityProviderCommand = serializeAws_json1_1DeleteCapacityProviderCommand;
const serializeAws_json1_1DeleteClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteClusterCommand = serializeAws_json1_1DeleteClusterCommand;
const serializeAws_json1_1DeleteServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteServiceCommand = serializeAws_json1_1DeleteServiceCommand;
const serializeAws_json1_1DeleteTaskSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeleteTaskSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTaskSetCommand = serializeAws_json1_1DeleteTaskSetCommand;
const serializeAws_json1_1DeregisterContainerInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterContainerInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterContainerInstanceCommand = serializeAws_json1_1DeregisterContainerInstanceCommand;
const serializeAws_json1_1DeregisterTaskDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterTaskDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterTaskDefinitionCommand = serializeAws_json1_1DeregisterTaskDefinitionCommand;
const serializeAws_json1_1DescribeCapacityProvidersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCapacityProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCapacityProvidersCommand = serializeAws_json1_1DescribeCapacityProvidersCommand;
const serializeAws_json1_1DescribeClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeClusters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeClustersCommand = serializeAws_json1_1DescribeClustersCommand;
const serializeAws_json1_1DescribeContainerInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeContainerInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeContainerInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeContainerInstancesCommand = serializeAws_json1_1DescribeContainerInstancesCommand;
const serializeAws_json1_1DescribeServicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeServices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServicesCommand = serializeAws_json1_1DescribeServicesCommand;
const serializeAws_json1_1DescribeTaskDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTaskDefinitionCommand = serializeAws_json1_1DescribeTaskDefinitionCommand;
const serializeAws_json1_1DescribeTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTasksCommand = serializeAws_json1_1DescribeTasksCommand;
const serializeAws_json1_1DescribeTaskSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DescribeTaskSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTaskSetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTaskSetsCommand = serializeAws_json1_1DescribeTaskSetsCommand;
const serializeAws_json1_1DiscoverPollEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DiscoverPollEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DiscoverPollEndpointCommand = serializeAws_json1_1DiscoverPollEndpointCommand;
const serializeAws_json1_1ExecuteCommandCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ExecuteCommand",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ExecuteCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ExecuteCommandCommand = serializeAws_json1_1ExecuteCommandCommand;
const serializeAws_json1_1ListAccountSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAccountSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccountSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAccountSettingsCommand = serializeAws_json1_1ListAccountSettingsCommand;
const serializeAws_json1_1ListAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAttributesCommand = serializeAws_json1_1ListAttributesCommand;
const serializeAws_json1_1ListClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListClusters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListClustersCommand = serializeAws_json1_1ListClustersCommand;
const serializeAws_json1_1ListContainerInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListContainerInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListContainerInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListContainerInstancesCommand = serializeAws_json1_1ListContainerInstancesCommand;
const serializeAws_json1_1ListServicesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListServices",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListServicesCommand = serializeAws_json1_1ListServicesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTaskDefinitionFamiliesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionFamiliesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTaskDefinitionFamiliesCommand = serializeAws_json1_1ListTaskDefinitionFamiliesCommand;
const serializeAws_json1_1ListTaskDefinitionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTaskDefinitions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTaskDefinitionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTaskDefinitionsCommand = serializeAws_json1_1ListTaskDefinitionsCommand;
const serializeAws_json1_1ListTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.ListTasks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTasksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTasksCommand = serializeAws_json1_1ListTasksCommand;
const serializeAws_json1_1PutAccountSettingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSetting",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAccountSettingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAccountSettingCommand = serializeAws_json1_1PutAccountSettingCommand;
const serializeAws_json1_1PutAccountSettingDefaultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAccountSettingDefaultRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAccountSettingDefaultCommand = serializeAws_json1_1PutAccountSettingDefaultCommand;
const serializeAws_json1_1PutAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAttributesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAttributesCommand = serializeAws_json1_1PutAttributesCommand;
const serializeAws_json1_1PutClusterCapacityProvidersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutClusterCapacityProvidersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutClusterCapacityProvidersCommand = serializeAws_json1_1PutClusterCapacityProvidersCommand;
const serializeAws_json1_1RegisterContainerInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterContainerInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterContainerInstanceCommand = serializeAws_json1_1RegisterContainerInstanceCommand;
const serializeAws_json1_1RegisterTaskDefinitionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterTaskDefinitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterTaskDefinitionCommand = serializeAws_json1_1RegisterTaskDefinitionCommand;
const serializeAws_json1_1RunTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.RunTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RunTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RunTaskCommand = serializeAws_json1_1RunTaskCommand;
const serializeAws_json1_1StartTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.StartTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartTaskCommand = serializeAws_json1_1StartTaskCommand;
const serializeAws_json1_1StopTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.StopTask",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTaskRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopTaskCommand = serializeAws_json1_1StopTaskCommand;
const serializeAws_json1_1SubmitAttachmentStateChangesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitAttachmentStateChangesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SubmitAttachmentStateChangesCommand = serializeAws_json1_1SubmitAttachmentStateChangesCommand;
const serializeAws_json1_1SubmitContainerStateChangeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitContainerStateChangeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SubmitContainerStateChangeCommand = serializeAws_json1_1SubmitContainerStateChangeCommand;
const serializeAws_json1_1SubmitTaskStateChangeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SubmitTaskStateChangeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SubmitTaskStateChangeCommand = serializeAws_json1_1SubmitTaskStateChangeCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateCapacityProviderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCapacityProviderRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateCapacityProviderCommand = serializeAws_json1_1UpdateCapacityProviderCommand;
const serializeAws_json1_1UpdateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateClusterCommand = serializeAws_json1_1UpdateClusterCommand;
const serializeAws_json1_1UpdateClusterSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateClusterSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateClusterSettingsCommand = serializeAws_json1_1UpdateClusterSettingsCommand;
const serializeAws_json1_1UpdateContainerAgentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContainerAgentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateContainerAgentCommand = serializeAws_json1_1UpdateContainerAgentCommand;
const serializeAws_json1_1UpdateContainerInstancesStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateContainerInstancesStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateContainerInstancesStateCommand = serializeAws_json1_1UpdateContainerInstancesStateCommand;
const serializeAws_json1_1UpdateServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateService",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServiceCommand = serializeAws_json1_1UpdateServiceCommand;
const serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateServicePrimaryTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateServicePrimaryTaskSetCommand = serializeAws_json1_1UpdateServicePrimaryTaskSetCommand;
const serializeAws_json1_1UpdateTaskSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AmazonEC2ContainerServiceV20141113.UpdateTaskSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTaskSetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTaskSetCommand = serializeAws_json1_1UpdateTaskSetCommand;
const deserializeAws_json1_1CreateCapacityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateCapacityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCapacityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateCapacityProviderCommand = deserializeAws_json1_1CreateCapacityProviderCommand;
const deserializeAws_json1_1CreateCapacityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.ecs#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.ecs#UpdateInProgressException":
            response = {
                ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateClusterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateClusterCommand = deserializeAws_json1_1CreateClusterCommand;
const deserializeAws_json1_1CreateClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateServiceCommand = deserializeAws_json1_1CreateServiceCommand;
const deserializeAws_json1_1CreateServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
            response = {
                ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.ecs#PlatformUnknownException":
            response = {
                ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateTaskSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTaskSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTaskSetCommand = deserializeAws_json1_1CreateTaskSetCommand;
const deserializeAws_json1_1CreateTaskSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
            response = {
                ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.ecs#PlatformUnknownException":
            response = {
                ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.ecs#ServiceNotActiveException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAccountSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAccountSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAccountSettingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAccountSettingCommand = deserializeAws_json1_1DeleteAccountSettingCommand;
const deserializeAws_json1_1DeleteAccountSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAttributesCommand = deserializeAws_json1_1DeleteAttributesCommand;
const deserializeAws_json1_1DeleteAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.ecs#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteCapacityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteCapacityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCapacityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteCapacityProviderCommand = deserializeAws_json1_1DeleteCapacityProviderCommand;
const deserializeAws_json1_1DeleteCapacityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteClusterCommand = deserializeAws_json1_1DeleteClusterCommand;
const deserializeAws_json1_1DeleteClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterContainsContainerInstancesException":
        case "com.amazonaws.ecs#ClusterContainsContainerInstancesException":
            response = {
                ...(await deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterContainsServicesException":
        case "com.amazonaws.ecs#ClusterContainsServicesException":
            response = {
                ...(await deserializeAws_json1_1ClusterContainsServicesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterContainsTasksException":
        case "com.amazonaws.ecs#ClusterContainsTasksException":
            response = {
                ...(await deserializeAws_json1_1ClusterContainsTasksExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.ecs#UpdateInProgressException":
            response = {
                ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteServiceCommand = deserializeAws_json1_1DeleteServiceCommand;
const deserializeAws_json1_1DeleteServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteTaskSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTaskSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTaskSetCommand = deserializeAws_json1_1DeleteTaskSetCommand;
const deserializeAws_json1_1DeleteTaskSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.ecs#ServiceNotActiveException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskSetNotFoundException":
        case "com.amazonaws.ecs#TaskSetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeregisterContainerInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterContainerInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterContainerInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterContainerInstanceCommand = deserializeAws_json1_1DeregisterContainerInstanceCommand;
const deserializeAws_json1_1DeregisterContainerInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeregisterTaskDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterTaskDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterTaskDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterTaskDefinitionCommand = deserializeAws_json1_1DeregisterTaskDefinitionCommand;
const deserializeAws_json1_1DeregisterTaskDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeCapacityProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCapacityProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCapacityProvidersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCapacityProvidersCommand = deserializeAws_json1_1DescribeCapacityProvidersCommand;
const deserializeAws_json1_1DescribeCapacityProvidersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeClustersCommand = deserializeAws_json1_1DescribeClustersCommand;
const deserializeAws_json1_1DescribeClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeContainerInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeContainerInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeContainerInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeContainerInstancesCommand = deserializeAws_json1_1DescribeContainerInstancesCommand;
const deserializeAws_json1_1DescribeContainerInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeServicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServicesCommand = deserializeAws_json1_1DescribeServicesCommand;
const deserializeAws_json1_1DescribeServicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTaskDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTaskDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTaskDefinitionCommand = deserializeAws_json1_1DescribeTaskDefinitionCommand;
const deserializeAws_json1_1DescribeTaskDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTasksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTasksCommand = deserializeAws_json1_1DescribeTasksCommand;
const deserializeAws_json1_1DescribeTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeTaskSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTaskSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTaskSetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTaskSetsCommand = deserializeAws_json1_1DescribeTaskSetsCommand;
const deserializeAws_json1_1DescribeTaskSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.ecs#ServiceNotActiveException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DiscoverPollEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DiscoverPollEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DiscoverPollEndpointResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DiscoverPollEndpointCommand = deserializeAws_json1_1DiscoverPollEndpointCommand;
const deserializeAws_json1_1DiscoverPollEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ExecuteCommandCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ExecuteCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ExecuteCommandResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ExecuteCommandCommand = deserializeAws_json1_1ExecuteCommandCommand;
const deserializeAws_json1_1ExecuteCommandCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotConnectedException":
        case "com.amazonaws.ecs#TargetNotConnectedException":
            response = {
                ...(await deserializeAws_json1_1TargetNotConnectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAccountSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAccountSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccountSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAccountSettingsCommand = deserializeAws_json1_1ListAccountSettingsCommand;
const deserializeAws_json1_1ListAccountSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAttributesCommand = deserializeAws_json1_1ListAttributesCommand;
const deserializeAws_json1_1ListAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListClustersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListClustersCommand = deserializeAws_json1_1ListClustersCommand;
const deserializeAws_json1_1ListClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListContainerInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListContainerInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListContainerInstancesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListContainerInstancesCommand = deserializeAws_json1_1ListContainerInstancesCommand;
const deserializeAws_json1_1ListContainerInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListServicesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListServicesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListServicesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListServicesCommand = deserializeAws_json1_1ListServicesCommand;
const deserializeAws_json1_1ListServicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTaskDefinitionFamiliesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTaskDefinitionFamiliesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTaskDefinitionFamiliesCommand = deserializeAws_json1_1ListTaskDefinitionFamiliesCommand;
const deserializeAws_json1_1ListTaskDefinitionFamiliesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTaskDefinitionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTaskDefinitionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTaskDefinitionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTaskDefinitionsCommand = deserializeAws_json1_1ListTaskDefinitionsCommand;
const deserializeAws_json1_1ListTaskDefinitionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTasksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTasksCommand = deserializeAws_json1_1ListTasksCommand;
const deserializeAws_json1_1ListTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAccountSettingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAccountSettingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAccountSettingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAccountSettingCommand = deserializeAws_json1_1PutAccountSettingCommand;
const deserializeAws_json1_1PutAccountSettingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAccountSettingDefaultCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAccountSettingDefaultCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAccountSettingDefaultResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAccountSettingDefaultCommand = deserializeAws_json1_1PutAccountSettingDefaultCommand;
const deserializeAws_json1_1PutAccountSettingDefaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAttributesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAttributesCommand = deserializeAws_json1_1PutAttributesCommand;
const deserializeAws_json1_1PutAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AttributeLimitExceededException":
        case "com.amazonaws.ecs#AttributeLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AttributeLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.ecs#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutClusterCapacityProvidersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutClusterCapacityProvidersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutClusterCapacityProvidersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutClusterCapacityProvidersCommand = deserializeAws_json1_1PutClusterCapacityProvidersCommand;
const deserializeAws_json1_1PutClusterCapacityProvidersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.ecs#ResourceInUseException":
            response = {
                ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.ecs#UpdateInProgressException":
            response = {
                ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterContainerInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterContainerInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterContainerInstanceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterContainerInstanceCommand = deserializeAws_json1_1RegisterContainerInstanceCommand;
const deserializeAws_json1_1RegisterContainerInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RegisterTaskDefinitionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterTaskDefinitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterTaskDefinitionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterTaskDefinitionCommand = deserializeAws_json1_1RegisterTaskDefinitionCommand;
const deserializeAws_json1_1RegisterTaskDefinitionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RunTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RunTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RunTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RunTaskCommand = deserializeAws_json1_1RunTaskCommand;
const deserializeAws_json1_1RunTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BlockedException":
        case "com.amazonaws.ecs#BlockedException":
            response = {
                ...(await deserializeAws_json1_1BlockedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
            response = {
                ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.ecs#PlatformUnknownException":
            response = {
                ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartTaskCommand = deserializeAws_json1_1StartTaskCommand;
const deserializeAws_json1_1StartTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StopTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTaskResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopTaskCommand = deserializeAws_json1_1StopTaskCommand;
const deserializeAws_json1_1StopTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SubmitAttachmentStateChangesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SubmitAttachmentStateChangesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubmitAttachmentStateChangesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SubmitAttachmentStateChangesCommand = deserializeAws_json1_1SubmitAttachmentStateChangesCommand;
const deserializeAws_json1_1SubmitAttachmentStateChangesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SubmitContainerStateChangeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SubmitContainerStateChangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubmitContainerStateChangeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SubmitContainerStateChangeCommand = deserializeAws_json1_1SubmitContainerStateChangeCommand;
const deserializeAws_json1_1SubmitContainerStateChangeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1SubmitTaskStateChangeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SubmitTaskStateChangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SubmitTaskStateChangeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SubmitTaskStateChangeCommand = deserializeAws_json1_1SubmitTaskStateChangeCommand;
const deserializeAws_json1_1SubmitTaskStateChangeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ecs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.ecs#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateCapacityProviderCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateCapacityProviderCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCapacityProviderResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateCapacityProviderCommand = deserializeAws_json1_1UpdateCapacityProviderCommand;
const deserializeAws_json1_1UpdateCapacityProviderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateClusterCommand = deserializeAws_json1_1UpdateClusterCommand;
const deserializeAws_json1_1UpdateClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateClusterSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateClusterSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateClusterSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateClusterSettingsCommand = deserializeAws_json1_1UpdateClusterSettingsCommand;
const deserializeAws_json1_1UpdateClusterSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateContainerAgentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateContainerAgentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContainerAgentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateContainerAgentCommand = deserializeAws_json1_1UpdateContainerAgentCommand;
const deserializeAws_json1_1UpdateContainerAgentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingVersionException":
        case "com.amazonaws.ecs#MissingVersionException":
            response = {
                ...(await deserializeAws_json1_1MissingVersionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoUpdateAvailableException":
        case "com.amazonaws.ecs#NoUpdateAvailableException":
            response = {
                ...(await deserializeAws_json1_1NoUpdateAvailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UpdateInProgressException":
        case "com.amazonaws.ecs#UpdateInProgressException":
            response = {
                ...(await deserializeAws_json1_1UpdateInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateContainerInstancesStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateContainerInstancesStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateContainerInstancesStateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateContainerInstancesStateCommand = deserializeAws_json1_1UpdateContainerInstancesStateCommand;
const deserializeAws_json1_1UpdateContainerInstancesStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateServiceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServiceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServiceCommand = deserializeAws_json1_1UpdateServiceCommand;
const deserializeAws_json1_1UpdateServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformTaskDefinitionIncompatibilityException":
        case "com.amazonaws.ecs#PlatformTaskDefinitionIncompatibilityException":
            response = {
                ...(await deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformUnknownException":
        case "com.amazonaws.ecs#PlatformUnknownException":
            response = {
                ...(await deserializeAws_json1_1PlatformUnknownExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.ecs#ServiceNotActiveException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand = deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand;
const deserializeAws_json1_1UpdateServicePrimaryTaskSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.ecs#ServiceNotActiveException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskSetNotFoundException":
        case "com.amazonaws.ecs#TaskSetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateTaskSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTaskSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTaskSetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTaskSetCommand = deserializeAws_json1_1UpdateTaskSetCommand;
const deserializeAws_json1_1UpdateTaskSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ecs#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.ecs#ClientException":
            response = {
                ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundException":
        case "com.amazonaws.ecs#ClusterNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ClusterNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ecs#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.ecs#ServerException":
            response = {
                ...(await deserializeAws_json1_1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotActiveException":
        case "com.amazonaws.ecs#ServiceNotActiveException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotActiveExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceNotFoundException":
        case "com.amazonaws.ecs#ServiceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ServiceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaskSetNotFoundException":
        case "com.amazonaws.ecs#TaskSetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TaskSetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedFeatureException":
        case "com.amazonaws.ecs#UnsupportedFeatureException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedFeatureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AttributeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AttributeLimitExceededException(body, context);
    const contents = {
        name: "AttributeLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BlockedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BlockedException(body, context);
    const contents = {
        name: "BlockedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClientExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClientException(body, context);
    const contents = {
        name: "ClientException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClusterContainsContainerInstancesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterContainsContainerInstancesException(body, context);
    const contents = {
        name: "ClusterContainsContainerInstancesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClusterContainsServicesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterContainsServicesException(body, context);
    const contents = {
        name: "ClusterContainsServicesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClusterContainsTasksExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterContainsTasksException(body, context);
    const contents = {
        name: "ClusterContainsTasksException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ClusterNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ClusterNotFoundException(body, context);
    const contents = {
        name: "ClusterNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MissingVersionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MissingVersionException(body, context);
    const contents = {
        name: "MissingVersionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoUpdateAvailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoUpdateAvailableException(body, context);
    const contents = {
        name: "NoUpdateAvailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException(body, context);
    const contents = {
        name: "PlatformTaskDefinitionIncompatibilityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PlatformUnknownExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PlatformUnknownException(body, context);
    const contents = {
        name: "PlatformUnknownException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServerException(body, context);
    const contents = {
        name: "ServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceNotActiveExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceNotActiveException(body, context);
    const contents = {
        name: "ServiceNotActiveException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceNotFoundException(body, context);
    const contents = {
        name: "ServiceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetNotConnectedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotConnectedException(body, context);
    const contents = {
        name: "TargetNotConnectedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotFoundException(body, context);
    const contents = {
        name: "TargetNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TaskSetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TaskSetNotFoundException(body, context);
    const contents = {
        name: "TaskSetNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedFeatureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedFeatureException(body, context);
    const contents = {
        name: "UnsupportedFeatureException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UpdateInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UpdateInProgressException(body, context);
    const contents = {
        name: "UpdateInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AttachmentStateChange = (input, context) => {
    return {
        ...(input.attachmentArn !== undefined && input.attachmentArn !== null && { attachmentArn: input.attachmentArn }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1AttachmentStateChanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AttachmentStateChange(entry, context);
    });
};
const serializeAws_json1_1Attribute = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.targetId !== undefined && input.targetId !== null && { targetId: input.targetId }),
        ...(input.targetType !== undefined && input.targetType !== null && { targetType: input.targetType }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1Attributes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Attribute(entry, context);
    });
};
const serializeAws_json1_1AutoScalingGroupProvider = (input, context) => {
    return {
        ...(input.autoScalingGroupArn !== undefined &&
            input.autoScalingGroupArn !== null && { autoScalingGroupArn: input.autoScalingGroupArn }),
        ...(input.managedScaling !== undefined &&
            input.managedScaling !== null && {
            managedScaling: serializeAws_json1_1ManagedScaling(input.managedScaling, context),
        }),
        ...(input.managedTerminationProtection !== undefined &&
            input.managedTerminationProtection !== null && {
            managedTerminationProtection: input.managedTerminationProtection,
        }),
    };
};
const serializeAws_json1_1AutoScalingGroupProviderUpdate = (input, context) => {
    return {
        ...(input.managedScaling !== undefined &&
            input.managedScaling !== null && {
            managedScaling: serializeAws_json1_1ManagedScaling(input.managedScaling, context),
        }),
        ...(input.managedTerminationProtection !== undefined &&
            input.managedTerminationProtection !== null && {
            managedTerminationProtection: input.managedTerminationProtection,
        }),
    };
};
const serializeAws_json1_1AwsVpcConfiguration = (input, context) => {
    return {
        ...(input.assignPublicIp !== undefined &&
            input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }),
        ...(input.securityGroups !== undefined &&
            input.securityGroups !== null && {
            securityGroups: serializeAws_json1_1StringList(input.securityGroups, context),
        }),
        ...(input.subnets !== undefined &&
            input.subnets !== null && { subnets: serializeAws_json1_1StringList(input.subnets, context) }),
    };
};
const serializeAws_json1_1CapacityProviderFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CapacityProviderStrategy = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};
const serializeAws_json1_1CapacityProviderStrategyItem = (input, context) => {
    return {
        ...(input.base !== undefined && input.base !== null && { base: input.base }),
        ...(input.capacityProvider !== undefined &&
            input.capacityProvider !== null && { capacityProvider: input.capacityProvider }),
        ...(input.weight !== undefined && input.weight !== null && { weight: input.weight }),
    };
};
const serializeAws_json1_1ClusterConfiguration = (input, context) => {
    return {
        ...(input.executeCommandConfiguration !== undefined &&
            input.executeCommandConfiguration !== null && {
            executeCommandConfiguration: serializeAws_json1_1ExecuteCommandConfiguration(input.executeCommandConfiguration, context),
        }),
    };
};
const serializeAws_json1_1ClusterFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ClusterSetting = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1ClusterSettings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ClusterSetting(entry, context);
    });
};
const serializeAws_json1_1CompatibilityList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ContainerDefinition = (input, context) => {
    return {
        ...(input.command !== undefined &&
            input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
        ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
        ...(input.dependsOn !== undefined &&
            input.dependsOn !== null && { dependsOn: serializeAws_json1_1ContainerDependencies(input.dependsOn, context) }),
        ...(input.disableNetworking !== undefined &&
            input.disableNetworking !== null && { disableNetworking: input.disableNetworking }),
        ...(input.dnsSearchDomains !== undefined &&
            input.dnsSearchDomains !== null && {
            dnsSearchDomains: serializeAws_json1_1StringList(input.dnsSearchDomains, context),
        }),
        ...(input.dnsServers !== undefined &&
            input.dnsServers !== null && { dnsServers: serializeAws_json1_1StringList(input.dnsServers, context) }),
        ...(input.dockerLabels !== undefined &&
            input.dockerLabels !== null && {
            dockerLabels: serializeAws_json1_1DockerLabelsMap(input.dockerLabels, context),
        }),
        ...(input.dockerSecurityOptions !== undefined &&
            input.dockerSecurityOptions !== null && {
            dockerSecurityOptions: serializeAws_json1_1StringList(input.dockerSecurityOptions, context),
        }),
        ...(input.entryPoint !== undefined &&
            input.entryPoint !== null && { entryPoint: serializeAws_json1_1StringList(input.entryPoint, context) }),
        ...(input.environment !== undefined &&
            input.environment !== null && {
            environment: serializeAws_json1_1EnvironmentVariables(input.environment, context),
        }),
        ...(input.environmentFiles !== undefined &&
            input.environmentFiles !== null && {
            environmentFiles: serializeAws_json1_1EnvironmentFiles(input.environmentFiles, context),
        }),
        ...(input.essential !== undefined && input.essential !== null && { essential: input.essential }),
        ...(input.extraHosts !== undefined &&
            input.extraHosts !== null && { extraHosts: serializeAws_json1_1HostEntryList(input.extraHosts, context) }),
        ...(input.firelensConfiguration !== undefined &&
            input.firelensConfiguration !== null && {
            firelensConfiguration: serializeAws_json1_1FirelensConfiguration(input.firelensConfiguration, context),
        }),
        ...(input.healthCheck !== undefined &&
            input.healthCheck !== null && { healthCheck: serializeAws_json1_1HealthCheck(input.healthCheck, context) }),
        ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
        ...(input.image !== undefined && input.image !== null && { image: input.image }),
        ...(input.interactive !== undefined && input.interactive !== null && { interactive: input.interactive }),
        ...(input.links !== undefined &&
            input.links !== null && { links: serializeAws_json1_1StringList(input.links, context) }),
        ...(input.linuxParameters !== undefined &&
            input.linuxParameters !== null && {
            linuxParameters: serializeAws_json1_1LinuxParameters(input.linuxParameters, context),
        }),
        ...(input.logConfiguration !== undefined &&
            input.logConfiguration !== null && {
            logConfiguration: serializeAws_json1_1LogConfiguration(input.logConfiguration, context),
        }),
        ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
        ...(input.memoryReservation !== undefined &&
            input.memoryReservation !== null && { memoryReservation: input.memoryReservation }),
        ...(input.mountPoints !== undefined &&
            input.mountPoints !== null && { mountPoints: serializeAws_json1_1MountPointList(input.mountPoints, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.portMappings !== undefined &&
            input.portMappings !== null && {
            portMappings: serializeAws_json1_1PortMappingList(input.portMappings, context),
        }),
        ...(input.privileged !== undefined && input.privileged !== null && { privileged: input.privileged }),
        ...(input.pseudoTerminal !== undefined &&
            input.pseudoTerminal !== null && { pseudoTerminal: input.pseudoTerminal }),
        ...(input.readonlyRootFilesystem !== undefined &&
            input.readonlyRootFilesystem !== null && { readonlyRootFilesystem: input.readonlyRootFilesystem }),
        ...(input.repositoryCredentials !== undefined &&
            input.repositoryCredentials !== null && {
            repositoryCredentials: serializeAws_json1_1RepositoryCredentials(input.repositoryCredentials, context),
        }),
        ...(input.resourceRequirements !== undefined &&
            input.resourceRequirements !== null && {
            resourceRequirements: serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context),
        }),
        ...(input.secrets !== undefined &&
            input.secrets !== null && { secrets: serializeAws_json1_1SecretList(input.secrets, context) }),
        ...(input.startTimeout !== undefined && input.startTimeout !== null && { startTimeout: input.startTimeout }),
        ...(input.stopTimeout !== undefined && input.stopTimeout !== null && { stopTimeout: input.stopTimeout }),
        ...(input.systemControls !== undefined &&
            input.systemControls !== null && {
            systemControls: serializeAws_json1_1SystemControls(input.systemControls, context),
        }),
        ...(input.ulimits !== undefined &&
            input.ulimits !== null && { ulimits: serializeAws_json1_1UlimitList(input.ulimits, context) }),
        ...(input.user !== undefined && input.user !== null && { user: input.user }),
        ...(input.volumesFrom !== undefined &&
            input.volumesFrom !== null && { volumesFrom: serializeAws_json1_1VolumeFromList(input.volumesFrom, context) }),
        ...(input.workingDirectory !== undefined &&
            input.workingDirectory !== null && { workingDirectory: input.workingDirectory }),
    };
};
const serializeAws_json1_1ContainerDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerDefinition(entry, context);
    });
};
const serializeAws_json1_1ContainerDependencies = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerDependency(entry, context);
    });
};
const serializeAws_json1_1ContainerDependency = (input, context) => {
    return {
        ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
    };
};
const serializeAws_json1_1ContainerInstanceFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ContainerOverride = (input, context) => {
    return {
        ...(input.command !== undefined &&
            input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
        ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
        ...(input.environment !== undefined &&
            input.environment !== null && {
            environment: serializeAws_json1_1EnvironmentVariables(input.environment, context),
        }),
        ...(input.environmentFiles !== undefined &&
            input.environmentFiles !== null && {
            environmentFiles: serializeAws_json1_1EnvironmentFiles(input.environmentFiles, context),
        }),
        ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
        ...(input.memoryReservation !== undefined &&
            input.memoryReservation !== null && { memoryReservation: input.memoryReservation }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.resourceRequirements !== undefined &&
            input.resourceRequirements !== null && {
            resourceRequirements: serializeAws_json1_1ResourceRequirements(input.resourceRequirements, context),
        }),
    };
};
const serializeAws_json1_1ContainerOverrides = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerOverride(entry, context);
    });
};
const serializeAws_json1_1ContainerStateChange = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.exitCode !== undefined && input.exitCode !== null && { exitCode: input.exitCode }),
        ...(input.imageDigest !== undefined && input.imageDigest !== null && { imageDigest: input.imageDigest }),
        ...(input.networkBindings !== undefined &&
            input.networkBindings !== null && {
            networkBindings: serializeAws_json1_1NetworkBindings(input.networkBindings, context),
        }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.runtimeId !== undefined && input.runtimeId !== null && { runtimeId: input.runtimeId }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ContainerStateChanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ContainerStateChange(entry, context);
    });
};
const serializeAws_json1_1CreateCapacityProviderRequest = (input, context) => {
    return {
        ...(input.autoScalingGroupProvider !== undefined &&
            input.autoScalingGroupProvider !== null && {
            autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProvider(input.autoScalingGroupProvider, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateClusterRequest = (input, context) => {
    return {
        ...(input.capacityProviders !== undefined &&
            input.capacityProviders !== null && {
            capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
        }),
        ...(input.clusterName !== undefined && input.clusterName !== null && { clusterName: input.clusterName }),
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1ClusterConfiguration(input.configuration, context),
        }),
        ...(input.defaultCapacityProviderStrategy !== undefined &&
            input.defaultCapacityProviderStrategy !== null && {
            defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context),
        }),
        ...(input.settings !== undefined &&
            input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateServiceRequest = (input, context) => {
    return {
        ...(input.capacityProviderStrategy !== undefined &&
            input.capacityProviderStrategy !== null && {
            capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
        }),
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.deploymentConfiguration !== undefined &&
            input.deploymentConfiguration !== null && {
            deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context),
        }),
        ...(input.deploymentController !== undefined &&
            input.deploymentController !== null && {
            deploymentController: serializeAws_json1_1DeploymentController(input.deploymentController, context),
        }),
        ...(input.desiredCount !== undefined && input.desiredCount !== null && { desiredCount: input.desiredCount }),
        ...(input.enableECSManagedTags !== undefined &&
            input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags }),
        ...(input.enableExecuteCommand !== undefined &&
            input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand }),
        ...(input.healthCheckGracePeriodSeconds !== undefined &&
            input.healthCheckGracePeriodSeconds !== null && {
            healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
        }),
        ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
        ...(input.loadBalancers !== undefined &&
            input.loadBalancers !== null && {
            loadBalancers: serializeAws_json1_1LoadBalancers(input.loadBalancers, context),
        }),
        ...(input.networkConfiguration !== undefined &&
            input.networkConfiguration !== null && {
            networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
        }),
        ...(input.placementConstraints !== undefined &&
            input.placementConstraints !== null && {
            placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
        }),
        ...(input.placementStrategy !== undefined &&
            input.placementStrategy !== null && {
            placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
        }),
        ...(input.platformVersion !== undefined &&
            input.platformVersion !== null && { platformVersion: input.platformVersion }),
        ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
        ...(input.role !== undefined && input.role !== null && { role: input.role }),
        ...(input.schedulingStrategy !== undefined &&
            input.schedulingStrategy !== null && { schedulingStrategy: input.schedulingStrategy }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
        ...(input.serviceRegistries !== undefined &&
            input.serviceRegistries !== null && {
            serviceRegistries: serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1CreateTaskSetRequest = (input, context) => {
    return {
        ...(input.capacityProviderStrategy !== undefined &&
            input.capacityProviderStrategy !== null && {
            capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
        }),
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }),
        ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
        ...(input.loadBalancers !== undefined &&
            input.loadBalancers !== null && {
            loadBalancers: serializeAws_json1_1LoadBalancers(input.loadBalancers, context),
        }),
        ...(input.networkConfiguration !== undefined &&
            input.networkConfiguration !== null && {
            networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
        }),
        ...(input.platformVersion !== undefined &&
            input.platformVersion !== null && { platformVersion: input.platformVersion }),
        ...(input.scale !== undefined &&
            input.scale !== null && { scale: serializeAws_json1_1Scale(input.scale, context) }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
        ...(input.serviceRegistries !== undefined &&
            input.serviceRegistries !== null && {
            serviceRegistries: serializeAws_json1_1ServiceRegistries(input.serviceRegistries, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1DeleteAccountSettingRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
    };
};
const serializeAws_json1_1DeleteAttributesRequest = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    };
};
const serializeAws_json1_1DeleteCapacityProviderRequest = (input, context) => {
    return {
        ...(input.capacityProvider !== undefined &&
            input.capacityProvider !== null && { capacityProvider: input.capacityProvider }),
    };
};
const serializeAws_json1_1DeleteClusterRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    };
};
const serializeAws_json1_1DeleteServiceRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
    };
};
const serializeAws_json1_1DeleteTaskSetRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
        ...(input.taskSet !== undefined && input.taskSet !== null && { taskSet: input.taskSet }),
    };
};
const serializeAws_json1_1DeploymentCircuitBreaker = (input, context) => {
    return {
        ...(input.enable !== undefined && input.enable !== null && { enable: input.enable }),
        ...(input.rollback !== undefined && input.rollback !== null && { rollback: input.rollback }),
    };
};
const serializeAws_json1_1DeploymentConfiguration = (input, context) => {
    return {
        ...(input.deploymentCircuitBreaker !== undefined &&
            input.deploymentCircuitBreaker !== null && {
            deploymentCircuitBreaker: serializeAws_json1_1DeploymentCircuitBreaker(input.deploymentCircuitBreaker, context),
        }),
        ...(input.maximumPercent !== undefined &&
            input.maximumPercent !== null && { maximumPercent: input.maximumPercent }),
        ...(input.minimumHealthyPercent !== undefined &&
            input.minimumHealthyPercent !== null && { minimumHealthyPercent: input.minimumHealthyPercent }),
    };
};
const serializeAws_json1_1DeploymentController = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1DeregisterContainerInstanceRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstance !== undefined &&
            input.containerInstance !== null && { containerInstance: input.containerInstance }),
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
    };
};
const serializeAws_json1_1DeregisterTaskDefinitionRequest = (input, context) => {
    return {
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1DescribeCapacityProvidersRequest = (input, context) => {
    return {
        ...(input.capacityProviders !== undefined &&
            input.capacityProviders !== null && {
            capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
        }),
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1CapacityProviderFieldList(input.include, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeClustersRequest = (input, context) => {
    return {
        ...(input.clusters !== undefined &&
            input.clusters !== null && { clusters: serializeAws_json1_1StringList(input.clusters, context) }),
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1ClusterFieldList(input.include, context) }),
    };
};
const serializeAws_json1_1DescribeContainerInstancesRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstances !== undefined &&
            input.containerInstances !== null && {
            containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
        }),
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1ContainerInstanceFieldList(input.include, context) }),
    };
};
const serializeAws_json1_1DescribeServicesRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1ServiceFieldList(input.include, context) }),
        ...(input.services !== undefined &&
            input.services !== null && { services: serializeAws_json1_1StringList(input.services, context) }),
    };
};
const serializeAws_json1_1DescribeTaskDefinitionRequest = (input, context) => {
    return {
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1TaskDefinitionFieldList(input.include, context) }),
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1DescribeTaskSetsRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1TaskSetFieldList(input.include, context) }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
        ...(input.taskSets !== undefined &&
            input.taskSets !== null && { taskSets: serializeAws_json1_1StringList(input.taskSets, context) }),
    };
};
const serializeAws_json1_1DescribeTasksRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.include !== undefined &&
            input.include !== null && { include: serializeAws_json1_1TaskFieldList(input.include, context) }),
        ...(input.tasks !== undefined &&
            input.tasks !== null && { tasks: serializeAws_json1_1StringList(input.tasks, context) }),
    };
};
const serializeAws_json1_1Device = (input, context) => {
    return {
        ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
        ...(input.hostPath !== undefined && input.hostPath !== null && { hostPath: input.hostPath }),
        ...(input.permissions !== undefined &&
            input.permissions !== null && {
            permissions: serializeAws_json1_1DeviceCgroupPermissions(input.permissions, context),
        }),
    };
};
const serializeAws_json1_1DeviceCgroupPermissions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DevicesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Device(entry, context);
    });
};
const serializeAws_json1_1DiscoverPollEndpointRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstance !== undefined &&
            input.containerInstance !== null && { containerInstance: input.containerInstance }),
    };
};
const serializeAws_json1_1DockerLabelsMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1DockerVolumeConfiguration = (input, context) => {
    return {
        ...(input.autoprovision !== undefined && input.autoprovision !== null && { autoprovision: input.autoprovision }),
        ...(input.driver !== undefined && input.driver !== null && { driver: input.driver }),
        ...(input.driverOpts !== undefined &&
            input.driverOpts !== null && { driverOpts: serializeAws_json1_1StringMap(input.driverOpts, context) }),
        ...(input.labels !== undefined &&
            input.labels !== null && { labels: serializeAws_json1_1StringMap(input.labels, context) }),
        ...(input.scope !== undefined && input.scope !== null && { scope: input.scope }),
    };
};
const serializeAws_json1_1EFSAuthorizationConfig = (input, context) => {
    return {
        ...(input.accessPointId !== undefined && input.accessPointId !== null && { accessPointId: input.accessPointId }),
        ...(input.iam !== undefined && input.iam !== null && { iam: input.iam }),
    };
};
const serializeAws_json1_1EFSVolumeConfiguration = (input, context) => {
    return {
        ...(input.authorizationConfig !== undefined &&
            input.authorizationConfig !== null && {
            authorizationConfig: serializeAws_json1_1EFSAuthorizationConfig(input.authorizationConfig, context),
        }),
        ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
        ...(input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }),
        ...(input.transitEncryption !== undefined &&
            input.transitEncryption !== null && { transitEncryption: input.transitEncryption }),
        ...(input.transitEncryptionPort !== undefined &&
            input.transitEncryptionPort !== null && { transitEncryptionPort: input.transitEncryptionPort }),
    };
};
const serializeAws_json1_1EnvironmentFile = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1EnvironmentFiles = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EnvironmentFile(entry, context);
    });
};
const serializeAws_json1_1EnvironmentVariables = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1KeyValuePair(entry, context);
    });
};
const serializeAws_json1_1EphemeralStorage = (input, context) => {
    return {
        ...(input.sizeInGiB !== undefined && input.sizeInGiB !== null && { sizeInGiB: input.sizeInGiB }),
    };
};
const serializeAws_json1_1ExecuteCommandConfiguration = (input, context) => {
    return {
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.logConfiguration !== undefined &&
            input.logConfiguration !== null && {
            logConfiguration: serializeAws_json1_1ExecuteCommandLogConfiguration(input.logConfiguration, context),
        }),
        ...(input.logging !== undefined && input.logging !== null && { logging: input.logging }),
    };
};
const serializeAws_json1_1ExecuteCommandLogConfiguration = (input, context) => {
    return {
        ...(input.cloudWatchEncryptionEnabled !== undefined &&
            input.cloudWatchEncryptionEnabled !== null && { cloudWatchEncryptionEnabled: input.cloudWatchEncryptionEnabled }),
        ...(input.cloudWatchLogGroupName !== undefined &&
            input.cloudWatchLogGroupName !== null && { cloudWatchLogGroupName: input.cloudWatchLogGroupName }),
        ...(input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName }),
        ...(input.s3EncryptionEnabled !== undefined &&
            input.s3EncryptionEnabled !== null && { s3EncryptionEnabled: input.s3EncryptionEnabled }),
        ...(input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }),
    };
};
const serializeAws_json1_1ExecuteCommandRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.command !== undefined && input.command !== null && { command: input.command }),
        ...(input.container !== undefined && input.container !== null && { container: input.container }),
        ...(input.interactive !== undefined && input.interactive !== null && { interactive: input.interactive }),
        ...(input.task !== undefined && input.task !== null && { task: input.task }),
    };
};
const serializeAws_json1_1FirelensConfiguration = (input, context) => {
    return {
        ...(input.options !== undefined &&
            input.options !== null && {
            options: serializeAws_json1_1FirelensConfigurationOptionsMap(input.options, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1FirelensConfigurationOptionsMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig = (input, context) => {
    return {
        ...(input.credentialsParameter !== undefined &&
            input.credentialsParameter !== null && { credentialsParameter: input.credentialsParameter }),
        ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    };
};
const serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration = (input, context) => {
    return {
        ...(input.authorizationConfig !== undefined &&
            input.authorizationConfig !== null && {
            authorizationConfig: serializeAws_json1_1FSxWindowsFileServerAuthorizationConfig(input.authorizationConfig, context),
        }),
        ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
        ...(input.rootDirectory !== undefined && input.rootDirectory !== null && { rootDirectory: input.rootDirectory }),
    };
};
const serializeAws_json1_1HealthCheck = (input, context) => {
    return {
        ...(input.command !== undefined &&
            input.command !== null && { command: serializeAws_json1_1StringList(input.command, context) }),
        ...(input.interval !== undefined && input.interval !== null && { interval: input.interval }),
        ...(input.retries !== undefined && input.retries !== null && { retries: input.retries }),
        ...(input.startPeriod !== undefined && input.startPeriod !== null && { startPeriod: input.startPeriod }),
        ...(input.timeout !== undefined && input.timeout !== null && { timeout: input.timeout }),
    };
};
const serializeAws_json1_1HostEntry = (input, context) => {
    return {
        ...(input.hostname !== undefined && input.hostname !== null && { hostname: input.hostname }),
        ...(input.ipAddress !== undefined && input.ipAddress !== null && { ipAddress: input.ipAddress }),
    };
};
const serializeAws_json1_1HostEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1HostEntry(entry, context);
    });
};
const serializeAws_json1_1HostVolumeProperties = (input, context) => {
    return {
        ...(input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }),
    };
};
const serializeAws_json1_1InferenceAccelerator = (input, context) => {
    return {
        ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
        ...(input.deviceType !== undefined && input.deviceType !== null && { deviceType: input.deviceType }),
    };
};
const serializeAws_json1_1InferenceAcceleratorOverride = (input, context) => {
    return {
        ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
        ...(input.deviceType !== undefined && input.deviceType !== null && { deviceType: input.deviceType }),
    };
};
const serializeAws_json1_1InferenceAcceleratorOverrides = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InferenceAcceleratorOverride(entry, context);
    });
};
const serializeAws_json1_1InferenceAccelerators = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InferenceAccelerator(entry, context);
    });
};
const serializeAws_json1_1KernelCapabilities = (input, context) => {
    return {
        ...(input.add !== undefined && input.add !== null && { add: serializeAws_json1_1StringList(input.add, context) }),
        ...(input.drop !== undefined &&
            input.drop !== null && { drop: serializeAws_json1_1StringList(input.drop, context) }),
    };
};
const serializeAws_json1_1KeyValuePair = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1LinuxParameters = (input, context) => {
    return {
        ...(input.capabilities !== undefined &&
            input.capabilities !== null && {
            capabilities: serializeAws_json1_1KernelCapabilities(input.capabilities, context),
        }),
        ...(input.devices !== undefined &&
            input.devices !== null && { devices: serializeAws_json1_1DevicesList(input.devices, context) }),
        ...(input.initProcessEnabled !== undefined &&
            input.initProcessEnabled !== null && { initProcessEnabled: input.initProcessEnabled }),
        ...(input.maxSwap !== undefined && input.maxSwap !== null && { maxSwap: input.maxSwap }),
        ...(input.sharedMemorySize !== undefined &&
            input.sharedMemorySize !== null && { sharedMemorySize: input.sharedMemorySize }),
        ...(input.swappiness !== undefined && input.swappiness !== null && { swappiness: input.swappiness }),
        ...(input.tmpfs !== undefined &&
            input.tmpfs !== null && { tmpfs: serializeAws_json1_1TmpfsList(input.tmpfs, context) }),
    };
};
const serializeAws_json1_1ListAccountSettingsRequest = (input, context) => {
    return {
        ...(input.effectiveSettings !== undefined &&
            input.effectiveSettings !== null && { effectiveSettings: input.effectiveSettings }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1ListAttributesRequest = (input, context) => {
    return {
        ...(input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName }),
        ...(input.attributeValue !== undefined &&
            input.attributeValue !== null && { attributeValue: input.attributeValue }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.targetType !== undefined && input.targetType !== null && { targetType: input.targetType }),
    };
};
const serializeAws_json1_1ListClustersRequest = (input, context) => {
    return {
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListContainerInstancesRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.filter !== undefined && input.filter !== null && { filter: input.filter }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ListServicesRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.schedulingStrategy !== undefined &&
            input.schedulingStrategy !== null && { schedulingStrategy: input.schedulingStrategy }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    };
};
const serializeAws_json1_1ListTaskDefinitionFamiliesRequest = (input, context) => {
    return {
        ...(input.familyPrefix !== undefined && input.familyPrefix !== null && { familyPrefix: input.familyPrefix }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ListTaskDefinitionsRequest = (input, context) => {
    return {
        ...(input.familyPrefix !== undefined && input.familyPrefix !== null && { familyPrefix: input.familyPrefix }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.sort !== undefined && input.sort !== null && { sort: input.sort }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ListTasksRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstance !== undefined &&
            input.containerInstance !== null && { containerInstance: input.containerInstance }),
        ...(input.desiredStatus !== undefined && input.desiredStatus !== null && { desiredStatus: input.desiredStatus }),
        ...(input.family !== undefined && input.family !== null && { family: input.family }),
        ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
        ...(input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }),
    };
};
const serializeAws_json1_1LoadBalancer = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
        ...(input.loadBalancerName !== undefined &&
            input.loadBalancerName !== null && { loadBalancerName: input.loadBalancerName }),
        ...(input.targetGroupArn !== undefined &&
            input.targetGroupArn !== null && { targetGroupArn: input.targetGroupArn }),
    };
};
const serializeAws_json1_1LoadBalancers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LoadBalancer(entry, context);
    });
};
const serializeAws_json1_1LogConfiguration = (input, context) => {
    return {
        ...(input.logDriver !== undefined && input.logDriver !== null && { logDriver: input.logDriver }),
        ...(input.options !== undefined &&
            input.options !== null && { options: serializeAws_json1_1LogConfigurationOptionsMap(input.options, context) }),
        ...(input.secretOptions !== undefined &&
            input.secretOptions !== null && { secretOptions: serializeAws_json1_1SecretList(input.secretOptions, context) }),
    };
};
const serializeAws_json1_1LogConfigurationOptionsMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1ManagedAgentStateChange = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.managedAgentName !== undefined &&
            input.managedAgentName !== null && { managedAgentName: input.managedAgentName }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1ManagedAgentStateChanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ManagedAgentStateChange(entry, context);
    });
};
const serializeAws_json1_1ManagedScaling = (input, context) => {
    return {
        ...(input.instanceWarmupPeriod !== undefined &&
            input.instanceWarmupPeriod !== null && { instanceWarmupPeriod: input.instanceWarmupPeriod }),
        ...(input.maximumScalingStepSize !== undefined &&
            input.maximumScalingStepSize !== null && { maximumScalingStepSize: input.maximumScalingStepSize }),
        ...(input.minimumScalingStepSize !== undefined &&
            input.minimumScalingStepSize !== null && { minimumScalingStepSize: input.minimumScalingStepSize }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.targetCapacity !== undefined &&
            input.targetCapacity !== null && { targetCapacity: input.targetCapacity }),
    };
};
const serializeAws_json1_1MountPoint = (input, context) => {
    return {
        ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
        ...(input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }),
        ...(input.sourceVolume !== undefined && input.sourceVolume !== null && { sourceVolume: input.sourceVolume }),
    };
};
const serializeAws_json1_1MountPointList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MountPoint(entry, context);
    });
};
const serializeAws_json1_1NetworkBinding = (input, context) => {
    return {
        ...(input.bindIP !== undefined && input.bindIP !== null && { bindIP: input.bindIP }),
        ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
        ...(input.hostPort !== undefined && input.hostPort !== null && { hostPort: input.hostPort }),
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    };
};
const serializeAws_json1_1NetworkBindings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1NetworkBinding(entry, context);
    });
};
const serializeAws_json1_1NetworkConfiguration = (input, context) => {
    return {
        ...(input.awsvpcConfiguration !== undefined &&
            input.awsvpcConfiguration !== null && {
            awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_1PlacementConstraint = (input, context) => {
    return {
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1PlacementConstraints = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlacementConstraint(entry, context);
    });
};
const serializeAws_json1_1PlacementStrategies = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlacementStrategy(entry, context);
    });
};
const serializeAws_json1_1PlacementStrategy = (input, context) => {
    return {
        ...(input.field !== undefined && input.field !== null && { field: input.field }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1PlatformDevice = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1PlatformDevices = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlatformDevice(entry, context);
    });
};
const serializeAws_json1_1PortMapping = (input, context) => {
    return {
        ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
        ...(input.hostPort !== undefined && input.hostPort !== null && { hostPort: input.hostPort }),
        ...(input.protocol !== undefined && input.protocol !== null && { protocol: input.protocol }),
    };
};
const serializeAws_json1_1PortMappingList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortMapping(entry, context);
    });
};
const serializeAws_json1_1ProxyConfiguration = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.properties !== undefined &&
            input.properties !== null && {
            properties: serializeAws_json1_1ProxyConfigurationProperties(input.properties, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ProxyConfigurationProperties = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1KeyValuePair(entry, context);
    });
};
const serializeAws_json1_1PutAccountSettingDefaultRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1PutAccountSettingRequest = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.principalArn !== undefined && input.principalArn !== null && { principalArn: input.principalArn }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1PutAttributesRequest = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    };
};
const serializeAws_json1_1PutClusterCapacityProvidersRequest = (input, context) => {
    return {
        ...(input.capacityProviders !== undefined &&
            input.capacityProviders !== null && {
            capacityProviders: serializeAws_json1_1StringList(input.capacityProviders, context),
        }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.defaultCapacityProviderStrategy !== undefined &&
            input.defaultCapacityProviderStrategy !== null && {
            defaultCapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.defaultCapacityProviderStrategy, context),
        }),
    };
};
const serializeAws_json1_1RegisterContainerInstanceRequest = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_json1_1Attributes(input.attributes, context) }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstanceArn !== undefined &&
            input.containerInstanceArn !== null && { containerInstanceArn: input.containerInstanceArn }),
        ...(input.instanceIdentityDocument !== undefined &&
            input.instanceIdentityDocument !== null && { instanceIdentityDocument: input.instanceIdentityDocument }),
        ...(input.instanceIdentityDocumentSignature !== undefined &&
            input.instanceIdentityDocumentSignature !== null && {
            instanceIdentityDocumentSignature: input.instanceIdentityDocumentSignature,
        }),
        ...(input.platformDevices !== undefined &&
            input.platformDevices !== null && {
            platformDevices: serializeAws_json1_1PlatformDevices(input.platformDevices, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.totalResources !== undefined &&
            input.totalResources !== null && {
            totalResources: serializeAws_json1_1Resources(input.totalResources, context),
        }),
        ...(input.versionInfo !== undefined &&
            input.versionInfo !== null && { versionInfo: serializeAws_json1_1VersionInfo(input.versionInfo, context) }),
    };
};
const serializeAws_json1_1RegisterTaskDefinitionRequest = (input, context) => {
    return {
        ...(input.containerDefinitions !== undefined &&
            input.containerDefinitions !== null && {
            containerDefinitions: serializeAws_json1_1ContainerDefinitions(input.containerDefinitions, context),
        }),
        ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
        ...(input.ephemeralStorage !== undefined &&
            input.ephemeralStorage !== null && {
            ephemeralStorage: serializeAws_json1_1EphemeralStorage(input.ephemeralStorage, context),
        }),
        ...(input.executionRoleArn !== undefined &&
            input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
        ...(input.family !== undefined && input.family !== null && { family: input.family }),
        ...(input.inferenceAccelerators !== undefined &&
            input.inferenceAccelerators !== null && {
            inferenceAccelerators: serializeAws_json1_1InferenceAccelerators(input.inferenceAccelerators, context),
        }),
        ...(input.ipcMode !== undefined && input.ipcMode !== null && { ipcMode: input.ipcMode }),
        ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
        ...(input.networkMode !== undefined && input.networkMode !== null && { networkMode: input.networkMode }),
        ...(input.pidMode !== undefined && input.pidMode !== null && { pidMode: input.pidMode }),
        ...(input.placementConstraints !== undefined &&
            input.placementConstraints !== null && {
            placementConstraints: serializeAws_json1_1TaskDefinitionPlacementConstraints(input.placementConstraints, context),
        }),
        ...(input.proxyConfiguration !== undefined &&
            input.proxyConfiguration !== null && {
            proxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.proxyConfiguration, context),
        }),
        ...(input.requiresCompatibilities !== undefined &&
            input.requiresCompatibilities !== null && {
            requiresCompatibilities: serializeAws_json1_1CompatibilityList(input.requiresCompatibilities, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.taskRoleArn !== undefined && input.taskRoleArn !== null && { taskRoleArn: input.taskRoleArn }),
        ...(input.volumes !== undefined &&
            input.volumes !== null && { volumes: serializeAws_json1_1VolumeList(input.volumes, context) }),
    };
};
const serializeAws_json1_1RepositoryCredentials = (input, context) => {
    return {
        ...(input.credentialsParameter !== undefined &&
            input.credentialsParameter !== null && { credentialsParameter: input.credentialsParameter }),
    };
};
const serializeAws_json1_1Resource = (input, context) => {
    return {
        ...(input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue }),
        ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
        ...(input.longValue !== undefined && input.longValue !== null && { longValue: input.longValue }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.stringSetValue !== undefined &&
            input.stringSetValue !== null && {
            stringSetValue: serializeAws_json1_1StringList(input.stringSetValue, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1ResourceRequirement = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1ResourceRequirements = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ResourceRequirement(entry, context);
    });
};
const serializeAws_json1_1Resources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Resource(entry, context);
    });
};
const serializeAws_json1_1RunTaskRequest = (input, context) => {
    return {
        ...(input.capacityProviderStrategy !== undefined &&
            input.capacityProviderStrategy !== null && {
            capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
        }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.count !== undefined && input.count !== null && { count: input.count }),
        ...(input.enableECSManagedTags !== undefined &&
            input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags }),
        ...(input.enableExecuteCommand !== undefined &&
            input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand }),
        ...(input.group !== undefined && input.group !== null && { group: input.group }),
        ...(input.launchType !== undefined && input.launchType !== null && { launchType: input.launchType }),
        ...(input.networkConfiguration !== undefined &&
            input.networkConfiguration !== null && {
            networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
        }),
        ...(input.overrides !== undefined &&
            input.overrides !== null && { overrides: serializeAws_json1_1TaskOverride(input.overrides, context) }),
        ...(input.placementConstraints !== undefined &&
            input.placementConstraints !== null && {
            placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
        }),
        ...(input.placementStrategy !== undefined &&
            input.placementStrategy !== null && {
            placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
        }),
        ...(input.platformVersion !== undefined &&
            input.platformVersion !== null && { platformVersion: input.platformVersion }),
        ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
        ...(input.referenceId !== undefined && input.referenceId !== null && { referenceId: input.referenceId }),
        ...(input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1Scale = (input, context) => {
    return {
        ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1Secret = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.valueFrom !== undefined && input.valueFrom !== null && { valueFrom: input.valueFrom }),
    };
};
const serializeAws_json1_1SecretList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Secret(entry, context);
    });
};
const serializeAws_json1_1ServiceFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ServiceRegistries = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServiceRegistry(entry, context);
    });
};
const serializeAws_json1_1ServiceRegistry = (input, context) => {
    return {
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.containerPort !== undefined && input.containerPort !== null && { containerPort: input.containerPort }),
        ...(input.port !== undefined && input.port !== null && { port: input.port }),
        ...(input.registryArn !== undefined && input.registryArn !== null && { registryArn: input.registryArn }),
    };
};
const serializeAws_json1_1StartTaskRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstances !== undefined &&
            input.containerInstances !== null && {
            containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
        }),
        ...(input.enableECSManagedTags !== undefined &&
            input.enableECSManagedTags !== null && { enableECSManagedTags: input.enableECSManagedTags }),
        ...(input.enableExecuteCommand !== undefined &&
            input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand }),
        ...(input.group !== undefined && input.group !== null && { group: input.group }),
        ...(input.networkConfiguration !== undefined &&
            input.networkConfiguration !== null && {
            networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
        }),
        ...(input.overrides !== undefined &&
            input.overrides !== null && { overrides: serializeAws_json1_1TaskOverride(input.overrides, context) }),
        ...(input.propagateTags !== undefined && input.propagateTags !== null && { propagateTags: input.propagateTags }),
        ...(input.referenceId !== undefined && input.referenceId !== null && { referenceId: input.referenceId }),
        ...(input.startedBy !== undefined && input.startedBy !== null && { startedBy: input.startedBy }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1StopTaskRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.task !== undefined && input.task !== null && { task: input.task }),
    };
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StringMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1SubmitAttachmentStateChangesRequest = (input, context) => {
    return {
        ...(input.attachments !== undefined &&
            input.attachments !== null && {
            attachments: serializeAws_json1_1AttachmentStateChanges(input.attachments, context),
        }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
    };
};
const serializeAws_json1_1SubmitContainerStateChangeRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerName !== undefined && input.containerName !== null && { containerName: input.containerName }),
        ...(input.exitCode !== undefined && input.exitCode !== null && { exitCode: input.exitCode }),
        ...(input.networkBindings !== undefined &&
            input.networkBindings !== null && {
            networkBindings: serializeAws_json1_1NetworkBindings(input.networkBindings, context),
        }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.runtimeId !== undefined && input.runtimeId !== null && { runtimeId: input.runtimeId }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.task !== undefined && input.task !== null && { task: input.task }),
    };
};
const serializeAws_json1_1SubmitTaskStateChangeRequest = (input, context) => {
    return {
        ...(input.attachments !== undefined &&
            input.attachments !== null && {
            attachments: serializeAws_json1_1AttachmentStateChanges(input.attachments, context),
        }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containers !== undefined &&
            input.containers !== null && {
            containers: serializeAws_json1_1ContainerStateChanges(input.containers, context),
        }),
        ...(input.executionStoppedAt !== undefined &&
            input.executionStoppedAt !== null && {
            executionStoppedAt: Math.round(input.executionStoppedAt.getTime() / 1000),
        }),
        ...(input.managedAgents !== undefined &&
            input.managedAgents !== null && {
            managedAgents: serializeAws_json1_1ManagedAgentStateChanges(input.managedAgents, context),
        }),
        ...(input.pullStartedAt !== undefined &&
            input.pullStartedAt !== null && { pullStartedAt: Math.round(input.pullStartedAt.getTime() / 1000) }),
        ...(input.pullStoppedAt !== undefined &&
            input.pullStoppedAt !== null && { pullStoppedAt: Math.round(input.pullStoppedAt.getTime() / 1000) }),
        ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.task !== undefined && input.task !== null && { task: input.task }),
    };
};
const serializeAws_json1_1SystemControl = (input, context) => {
    return {
        ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1SystemControls = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SystemControl(entry, context);
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TaskDefinitionFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TaskDefinitionPlacementConstraint = (input, context) => {
    return {
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1TaskDefinitionPlacementConstraints = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context);
    });
};
const serializeAws_json1_1TaskFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TaskOverride = (input, context) => {
    return {
        ...(input.containerOverrides !== undefined &&
            input.containerOverrides !== null && {
            containerOverrides: serializeAws_json1_1ContainerOverrides(input.containerOverrides, context),
        }),
        ...(input.cpu !== undefined && input.cpu !== null && { cpu: input.cpu }),
        ...(input.ephemeralStorage !== undefined &&
            input.ephemeralStorage !== null && {
            ephemeralStorage: serializeAws_json1_1EphemeralStorage(input.ephemeralStorage, context),
        }),
        ...(input.executionRoleArn !== undefined &&
            input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
        ...(input.inferenceAcceleratorOverrides !== undefined &&
            input.inferenceAcceleratorOverrides !== null && {
            inferenceAcceleratorOverrides: serializeAws_json1_1InferenceAcceleratorOverrides(input.inferenceAcceleratorOverrides, context),
        }),
        ...(input.memory !== undefined && input.memory !== null && { memory: input.memory }),
        ...(input.taskRoleArn !== undefined && input.taskRoleArn !== null && { taskRoleArn: input.taskRoleArn }),
    };
};
const serializeAws_json1_1TaskSetFieldList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tmpfs = (input, context) => {
    return {
        ...(input.containerPath !== undefined && input.containerPath !== null && { containerPath: input.containerPath }),
        ...(input.mountOptions !== undefined &&
            input.mountOptions !== null && { mountOptions: serializeAws_json1_1StringList(input.mountOptions, context) }),
        ...(input.size !== undefined && input.size !== null && { size: input.size }),
    };
};
const serializeAws_json1_1TmpfsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tmpfs(entry, context);
    });
};
const serializeAws_json1_1Ulimit = (input, context) => {
    return {
        ...(input.hardLimit !== undefined && input.hardLimit !== null && { hardLimit: input.hardLimit }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.softLimit !== undefined && input.softLimit !== null && { softLimit: input.softLimit }),
    };
};
const serializeAws_json1_1UlimitList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Ulimit(entry, context);
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeys(input.tagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateCapacityProviderRequest = (input, context) => {
    return {
        ...(input.autoScalingGroupProvider !== undefined &&
            input.autoScalingGroupProvider !== null && {
            autoScalingGroupProvider: serializeAws_json1_1AutoScalingGroupProviderUpdate(input.autoScalingGroupProvider, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1UpdateClusterRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_json1_1ClusterConfiguration(input.configuration, context),
        }),
        ...(input.settings !== undefined &&
            input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }),
    };
};
const serializeAws_json1_1UpdateClusterSettingsRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.settings !== undefined &&
            input.settings !== null && { settings: serializeAws_json1_1ClusterSettings(input.settings, context) }),
    };
};
const serializeAws_json1_1UpdateContainerAgentRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstance !== undefined &&
            input.containerInstance !== null && { containerInstance: input.containerInstance }),
    };
};
const serializeAws_json1_1UpdateContainerInstancesStateRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.containerInstances !== undefined &&
            input.containerInstances !== null && {
            containerInstances: serializeAws_json1_1StringList(input.containerInstances, context),
        }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1UpdateServicePrimaryTaskSetRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.primaryTaskSet !== undefined &&
            input.primaryTaskSet !== null && { primaryTaskSet: input.primaryTaskSet }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
    };
};
const serializeAws_json1_1UpdateServiceRequest = (input, context) => {
    return {
        ...(input.capacityProviderStrategy !== undefined &&
            input.capacityProviderStrategy !== null && {
            capacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.capacityProviderStrategy, context),
        }),
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.deploymentConfiguration !== undefined &&
            input.deploymentConfiguration !== null && {
            deploymentConfiguration: serializeAws_json1_1DeploymentConfiguration(input.deploymentConfiguration, context),
        }),
        ...(input.desiredCount !== undefined && input.desiredCount !== null && { desiredCount: input.desiredCount }),
        ...(input.enableExecuteCommand !== undefined &&
            input.enableExecuteCommand !== null && { enableExecuteCommand: input.enableExecuteCommand }),
        ...(input.forceNewDeployment !== undefined &&
            input.forceNewDeployment !== null && { forceNewDeployment: input.forceNewDeployment }),
        ...(input.healthCheckGracePeriodSeconds !== undefined &&
            input.healthCheckGracePeriodSeconds !== null && {
            healthCheckGracePeriodSeconds: input.healthCheckGracePeriodSeconds,
        }),
        ...(input.networkConfiguration !== undefined &&
            input.networkConfiguration !== null && {
            networkConfiguration: serializeAws_json1_1NetworkConfiguration(input.networkConfiguration, context),
        }),
        ...(input.placementConstraints !== undefined &&
            input.placementConstraints !== null && {
            placementConstraints: serializeAws_json1_1PlacementConstraints(input.placementConstraints, context),
        }),
        ...(input.placementStrategy !== undefined &&
            input.placementStrategy !== null && {
            placementStrategy: serializeAws_json1_1PlacementStrategies(input.placementStrategy, context),
        }),
        ...(input.platformVersion !== undefined &&
            input.platformVersion !== null && { platformVersion: input.platformVersion }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
        ...(input.taskDefinition !== undefined &&
            input.taskDefinition !== null && { taskDefinition: input.taskDefinition }),
    };
};
const serializeAws_json1_1UpdateTaskSetRequest = (input, context) => {
    return {
        ...(input.cluster !== undefined && input.cluster !== null && { cluster: input.cluster }),
        ...(input.scale !== undefined &&
            input.scale !== null && { scale: serializeAws_json1_1Scale(input.scale, context) }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
        ...(input.taskSet !== undefined && input.taskSet !== null && { taskSet: input.taskSet }),
    };
};
const serializeAws_json1_1VersionInfo = (input, context) => {
    return {
        ...(input.agentHash !== undefined && input.agentHash !== null && { agentHash: input.agentHash }),
        ...(input.agentVersion !== undefined && input.agentVersion !== null && { agentVersion: input.agentVersion }),
        ...(input.dockerVersion !== undefined && input.dockerVersion !== null && { dockerVersion: input.dockerVersion }),
    };
};
const serializeAws_json1_1Volume = (input, context) => {
    return {
        ...(input.dockerVolumeConfiguration !== undefined &&
            input.dockerVolumeConfiguration !== null && {
            dockerVolumeConfiguration: serializeAws_json1_1DockerVolumeConfiguration(input.dockerVolumeConfiguration, context),
        }),
        ...(input.efsVolumeConfiguration !== undefined &&
            input.efsVolumeConfiguration !== null && {
            efsVolumeConfiguration: serializeAws_json1_1EFSVolumeConfiguration(input.efsVolumeConfiguration, context),
        }),
        ...(input.fsxWindowsFileServerVolumeConfiguration !== undefined &&
            input.fsxWindowsFileServerVolumeConfiguration !== null && {
            fsxWindowsFileServerVolumeConfiguration: serializeAws_json1_1FSxWindowsFileServerVolumeConfiguration(input.fsxWindowsFileServerVolumeConfiguration, context),
        }),
        ...(input.host !== undefined &&
            input.host !== null && { host: serializeAws_json1_1HostVolumeProperties(input.host, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1VolumeFrom = (input, context) => {
    return {
        ...(input.readOnly !== undefined && input.readOnly !== null && { readOnly: input.readOnly }),
        ...(input.sourceContainer !== undefined &&
            input.sourceContainer !== null && { sourceContainer: input.sourceContainer }),
    };
};
const serializeAws_json1_1VolumeFromList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VolumeFrom(entry, context);
    });
};
const serializeAws_json1_1VolumeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Volume(entry, context);
    });
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Attachment = (output, context) => {
    return {
        details: output.details !== undefined && output.details !== null
            ? deserializeAws_json1_1AttachmentDetails(output.details, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1AttachmentDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
const deserializeAws_json1_1Attachments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attachment(entry, context);
    });
};
const deserializeAws_json1_1Attribute = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        targetId: output.targetId !== undefined && output.targetId !== null ? output.targetId : undefined,
        targetType: output.targetType !== undefined && output.targetType !== null ? output.targetType : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1AttributeLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Attributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
const deserializeAws_json1_1AutoScalingGroupProvider = (output, context) => {
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
const deserializeAws_json1_1AwsVpcConfiguration = (output, context) => {
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
const deserializeAws_json1_1BlockedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CapacityProvider = (output, context) => {
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
const deserializeAws_json1_1CapacityProviders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CapacityProvider(entry, context);
    });
};
const deserializeAws_json1_1CapacityProviderStrategy = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};
const deserializeAws_json1_1CapacityProviderStrategyItem = (output, context) => {
    return {
        base: output.base !== undefined && output.base !== null ? output.base : undefined,
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null ? output.capacityProvider : undefined,
        weight: output.weight !== undefined && output.weight !== null ? output.weight : undefined,
    };
};
const deserializeAws_json1_1ClientException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Cluster = (output, context) => {
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
const deserializeAws_json1_1ClusterConfiguration = (output, context) => {
    return {
        executeCommandConfiguration: output.executeCommandConfiguration !== undefined && output.executeCommandConfiguration !== null
            ? deserializeAws_json1_1ExecuteCommandConfiguration(output.executeCommandConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1ClusterContainsContainerInstancesException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ClusterContainsServicesException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ClusterContainsTasksException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ClusterNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Clusters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Cluster(entry, context);
    });
};
const deserializeAws_json1_1ClusterSetting = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1ClusterSettings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClusterSetting(entry, context);
    });
};
const deserializeAws_json1_1CompatibilityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Container = (output, context) => {
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
const deserializeAws_json1_1ContainerDefinition = (output, context) => {
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
const deserializeAws_json1_1ContainerDefinitions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerDefinition(entry, context);
    });
};
const deserializeAws_json1_1ContainerDependencies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerDependency(entry, context);
    });
};
const deserializeAws_json1_1ContainerDependency = (output, context) => {
    return {
        condition: output.condition !== undefined && output.condition !== null ? output.condition : undefined,
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
    };
};
const deserializeAws_json1_1ContainerInstance = (output, context) => {
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
const deserializeAws_json1_1ContainerInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerInstance(entry, context);
    });
};
const deserializeAws_json1_1ContainerOverride = (output, context) => {
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
const deserializeAws_json1_1ContainerOverrides = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ContainerOverride(entry, context);
    });
};
const deserializeAws_json1_1Containers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Container(entry, context);
    });
};
const deserializeAws_json1_1CreateCapacityProviderResponse = (output, context) => {
    return {
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null
            ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateClusterResponse = (output, context) => {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateServiceResponse = (output, context) => {
    return {
        service: output.service !== undefined && output.service !== null
            ? deserializeAws_json1_1Service(output.service, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateTaskSetResponse = (output, context) => {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteAccountSettingResponse = (output, context) => {
    return {
        setting: output.setting !== undefined && output.setting !== null
            ? deserializeAws_json1_1Setting(output.setting, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteAttributesResponse = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteCapacityProviderResponse = (output, context) => {
    return {
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null
            ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteClusterResponse = (output, context) => {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteServiceResponse = (output, context) => {
    return {
        service: output.service !== undefined && output.service !== null
            ? deserializeAws_json1_1Service(output.service, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteTaskSetResponse = (output, context) => {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1Deployment = (output, context) => {
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
const deserializeAws_json1_1DeploymentCircuitBreaker = (output, context) => {
    return {
        enable: output.enable !== undefined && output.enable !== null ? output.enable : undefined,
        rollback: output.rollback !== undefined && output.rollback !== null ? output.rollback : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfiguration = (output, context) => {
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
const deserializeAws_json1_1DeploymentController = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1Deployments = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Deployment(entry, context);
    });
};
const deserializeAws_json1_1DeregisterContainerInstanceResponse = (output, context) => {
    return {
        containerInstance: output.containerInstance !== undefined && output.containerInstance !== null
            ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeregisterTaskDefinitionResponse = (output, context) => {
    return {
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null
            ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCapacityProvidersResponse = (output, context) => {
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
const deserializeAws_json1_1DescribeClustersResponse = (output, context) => {
    return {
        clusters: output.clusters !== undefined && output.clusters !== null
            ? deserializeAws_json1_1Clusters(output.clusters, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeContainerInstancesResponse = (output, context) => {
    return {
        containerInstances: output.containerInstances !== undefined && output.containerInstances !== null
            ? deserializeAws_json1_1ContainerInstances(output.containerInstances, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeServicesResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        services: output.services !== undefined && output.services !== null
            ? deserializeAws_json1_1Services(output.services, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTaskDefinitionResponse = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null
            ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTaskSetsResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        taskSets: output.taskSets !== undefined && output.taskSets !== null
            ? deserializeAws_json1_1TaskSets(output.taskSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTasksResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        tasks: output.tasks !== undefined && output.tasks !== null
            ? deserializeAws_json1_1Tasks(output.tasks, context)
            : undefined,
    };
};
const deserializeAws_json1_1Device = (output, context) => {
    return {
        containerPath: output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
        hostPath: output.hostPath !== undefined && output.hostPath !== null ? output.hostPath : undefined,
        permissions: output.permissions !== undefined && output.permissions !== null
            ? deserializeAws_json1_1DeviceCgroupPermissions(output.permissions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeviceCgroupPermissions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DevicesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Device(entry, context);
    });
};
const deserializeAws_json1_1DiscoverPollEndpointResponse = (output, context) => {
    return {
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
        telemetryEndpoint: output.telemetryEndpoint !== undefined && output.telemetryEndpoint !== null
            ? output.telemetryEndpoint
            : undefined,
    };
};
const deserializeAws_json1_1DockerLabelsMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1DockerVolumeConfiguration = (output, context) => {
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
const deserializeAws_json1_1EFSAuthorizationConfig = (output, context) => {
    return {
        accessPointId: output.accessPointId !== undefined && output.accessPointId !== null ? output.accessPointId : undefined,
        iam: output.iam !== undefined && output.iam !== null ? output.iam : undefined,
    };
};
const deserializeAws_json1_1EFSVolumeConfiguration = (output, context) => {
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
const deserializeAws_json1_1EnvironmentFile = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1EnvironmentFiles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentFile(entry, context);
    });
};
const deserializeAws_json1_1EnvironmentVariables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
const deserializeAws_json1_1EphemeralStorage = (output, context) => {
    return {
        sizeInGiB: output.sizeInGiB !== undefined && output.sizeInGiB !== null ? output.sizeInGiB : undefined,
    };
};
const deserializeAws_json1_1ExecuteCommandConfiguration = (output, context) => {
    return {
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        logConfiguration: output.logConfiguration !== undefined && output.logConfiguration !== null
            ? deserializeAws_json1_1ExecuteCommandLogConfiguration(output.logConfiguration, context)
            : undefined,
        logging: output.logging !== undefined && output.logging !== null ? output.logging : undefined,
    };
};
const deserializeAws_json1_1ExecuteCommandLogConfiguration = (output, context) => {
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
const deserializeAws_json1_1ExecuteCommandResponse = (output, context) => {
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
const deserializeAws_json1_1Failure = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        detail: output.detail !== undefined && output.detail !== null ? output.detail : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_1Failures = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Failure(entry, context);
    });
};
const deserializeAws_json1_1FirelensConfiguration = (output, context) => {
    return {
        options: output.options !== undefined && output.options !== null
            ? deserializeAws_json1_1FirelensConfigurationOptionsMap(output.options, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1FirelensConfigurationOptionsMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig = (output, context) => {
    return {
        credentialsParameter: output.credentialsParameter !== undefined && output.credentialsParameter !== null
            ? output.credentialsParameter
            : undefined,
        domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
    };
};
const deserializeAws_json1_1FSxWindowsFileServerVolumeConfiguration = (output, context) => {
    return {
        authorizationConfig: output.authorizationConfig !== undefined && output.authorizationConfig !== null
            ? deserializeAws_json1_1FSxWindowsFileServerAuthorizationConfig(output.authorizationConfig, context)
            : undefined,
        fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
        rootDirectory: output.rootDirectory !== undefined && output.rootDirectory !== null ? output.rootDirectory : undefined,
    };
};
const deserializeAws_json1_1GpuIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1HealthCheck = (output, context) => {
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
const deserializeAws_json1_1HostEntry = (output, context) => {
    return {
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        ipAddress: output.ipAddress !== undefined && output.ipAddress !== null ? output.ipAddress : undefined,
    };
};
const deserializeAws_json1_1HostEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HostEntry(entry, context);
    });
};
const deserializeAws_json1_1HostVolumeProperties = (output, context) => {
    return {
        sourcePath: output.sourcePath !== undefined && output.sourcePath !== null ? output.sourcePath : undefined,
    };
};
const deserializeAws_json1_1InferenceAccelerator = (output, context) => {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
    };
};
const deserializeAws_json1_1InferenceAcceleratorOverride = (output, context) => {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        deviceType: output.deviceType !== undefined && output.deviceType !== null ? output.deviceType : undefined,
    };
};
const deserializeAws_json1_1InferenceAcceleratorOverrides = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InferenceAcceleratorOverride(entry, context);
    });
};
const deserializeAws_json1_1InferenceAccelerators = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InferenceAccelerator(entry, context);
    });
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KernelCapabilities = (output, context) => {
    return {
        add: output.add !== undefined && output.add !== null
            ? deserializeAws_json1_1StringList(output.add, context)
            : undefined,
        drop: output.drop !== undefined && output.drop !== null
            ? deserializeAws_json1_1StringList(output.drop, context)
            : undefined,
    };
};
const deserializeAws_json1_1KeyValuePair = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LinuxParameters = (output, context) => {
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
const deserializeAws_json1_1ListAccountSettingsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_json1_1Settings(output.settings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListAttributesResponse = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListClustersResponse = (output, context) => {
    return {
        clusterArns: output.clusterArns !== undefined && output.clusterArns !== null
            ? deserializeAws_json1_1StringList(output.clusterArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListContainerInstancesResponse = (output, context) => {
    return {
        containerInstanceArns: output.containerInstanceArns !== undefined && output.containerInstanceArns !== null
            ? deserializeAws_json1_1StringList(output.containerInstanceArns, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListServicesResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        serviceArns: output.serviceArns !== undefined && output.serviceArns !== null
            ? deserializeAws_json1_1StringList(output.serviceArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
    };
};
const deserializeAws_json1_1ListTaskDefinitionFamiliesResponse = (output, context) => {
    return {
        families: output.families !== undefined && output.families !== null
            ? deserializeAws_json1_1StringList(output.families, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListTaskDefinitionsResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        taskDefinitionArns: output.taskDefinitionArns !== undefined && output.taskDefinitionArns !== null
            ? deserializeAws_json1_1StringList(output.taskDefinitionArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTasksResponse = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        taskArns: output.taskArns !== undefined && output.taskArns !== null
            ? deserializeAws_json1_1StringList(output.taskArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoadBalancer = (output, context) => {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        loadBalancerName: output.loadBalancerName !== undefined && output.loadBalancerName !== null ? output.loadBalancerName : undefined,
        targetGroupArn: output.targetGroupArn !== undefined && output.targetGroupArn !== null ? output.targetGroupArn : undefined,
    };
};
const deserializeAws_json1_1LoadBalancers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBalancer(entry, context);
    });
};
const deserializeAws_json1_1LogConfiguration = (output, context) => {
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
const deserializeAws_json1_1LogConfigurationOptionsMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1ManagedAgent = (output, context) => {
    return {
        lastStartedAt: output.lastStartedAt !== undefined && output.lastStartedAt !== null
            ? new Date(Math.round(output.lastStartedAt * 1000))
            : undefined,
        lastStatus: output.lastStatus !== undefined && output.lastStatus !== null ? output.lastStatus : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_1ManagedAgents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ManagedAgent(entry, context);
    });
};
const deserializeAws_json1_1ManagedScaling = (output, context) => {
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
const deserializeAws_json1_1MissingVersionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1MountPoint = (output, context) => {
    return {
        containerPath: output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
        readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
        sourceVolume: output.sourceVolume !== undefined && output.sourceVolume !== null ? output.sourceVolume : undefined,
    };
};
const deserializeAws_json1_1MountPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MountPoint(entry, context);
    });
};
const deserializeAws_json1_1NetworkBinding = (output, context) => {
    return {
        bindIP: output.bindIP !== undefined && output.bindIP !== null ? output.bindIP : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        hostPort: output.hostPort !== undefined && output.hostPort !== null ? output.hostPort : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    };
};
const deserializeAws_json1_1NetworkBindings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkBinding(entry, context);
    });
};
const deserializeAws_json1_1NetworkConfiguration = (output, context) => {
    return {
        awsvpcConfiguration: output.awsvpcConfiguration !== undefined && output.awsvpcConfiguration !== null
            ? deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1NetworkInterface = (output, context) => {
    return {
        attachmentId: output.attachmentId !== undefined && output.attachmentId !== null ? output.attachmentId : undefined,
        ipv6Address: output.ipv6Address !== undefined && output.ipv6Address !== null ? output.ipv6Address : undefined,
        privateIpv4Address: output.privateIpv4Address !== undefined && output.privateIpv4Address !== null
            ? output.privateIpv4Address
            : undefined,
    };
};
const deserializeAws_json1_1NetworkInterfaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NetworkInterface(entry, context);
    });
};
const deserializeAws_json1_1NoUpdateAvailableException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PlacementConstraint = (output, context) => {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1PlacementConstraints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacementConstraint(entry, context);
    });
};
const deserializeAws_json1_1PlacementStrategies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacementStrategy(entry, context);
    });
};
const deserializeAws_json1_1PlacementStrategy = (output, context) => {
    return {
        field: output.field !== undefined && output.field !== null ? output.field : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1PlatformTaskDefinitionIncompatibilityException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PlatformUnknownException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PortMapping = (output, context) => {
    return {
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        hostPort: output.hostPort !== undefined && output.hostPort !== null ? output.hostPort : undefined,
        protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
    };
};
const deserializeAws_json1_1PortMappingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortMapping(entry, context);
    });
};
const deserializeAws_json1_1ProxyConfiguration = (output, context) => {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_json1_1ProxyConfigurationProperties(output.properties, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1ProxyConfigurationProperties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
const deserializeAws_json1_1PutAccountSettingDefaultResponse = (output, context) => {
    return {
        setting: output.setting !== undefined && output.setting !== null
            ? deserializeAws_json1_1Setting(output.setting, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutAccountSettingResponse = (output, context) => {
    return {
        setting: output.setting !== undefined && output.setting !== null
            ? deserializeAws_json1_1Setting(output.setting, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutAttributesResponse = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_json1_1Attributes(output.attributes, context)
            : undefined,
    };
};
const deserializeAws_json1_1PutClusterCapacityProvidersResponse = (output, context) => {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegisterContainerInstanceResponse = (output, context) => {
    return {
        containerInstance: output.containerInstance !== undefined && output.containerInstance !== null
            ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegisterTaskDefinitionResponse = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
        taskDefinition: output.taskDefinition !== undefined && output.taskDefinition !== null
            ? deserializeAws_json1_1TaskDefinition(output.taskDefinition, context)
            : undefined,
    };
};
const deserializeAws_json1_1RepositoryCredentials = (output, context) => {
    return {
        credentialsParameter: output.credentialsParameter !== undefined && output.credentialsParameter !== null
            ? output.credentialsParameter
            : undefined,
    };
};
const deserializeAws_json1_1RequiresAttributes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Attribute(entry, context);
    });
};
const deserializeAws_json1_1Resource = (output, context) => {
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
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceRequirement = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1ResourceRequirements = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceRequirement(entry, context);
    });
};
const deserializeAws_json1_1Resources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Resource(entry, context);
    });
};
const deserializeAws_json1_1RunTaskResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        tasks: output.tasks !== undefined && output.tasks !== null
            ? deserializeAws_json1_1Tasks(output.tasks, context)
            : undefined,
    };
};
const deserializeAws_json1_1Scale = (output, context) => {
    return {
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1Secret = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        valueFrom: output.valueFrom !== undefined && output.valueFrom !== null ? output.valueFrom : undefined,
    };
};
const deserializeAws_json1_1SecretList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Secret(entry, context);
    });
};
const deserializeAws_json1_1ServerException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Service = (output, context) => {
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
const deserializeAws_json1_1ServiceEvent = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ServiceEvents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceEvent(entry, context);
    });
};
const deserializeAws_json1_1ServiceNotActiveException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ServiceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ServiceRegistries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceRegistry(entry, context);
    });
};
const deserializeAws_json1_1ServiceRegistry = (output, context) => {
    return {
        containerName: output.containerName !== undefined && output.containerName !== null ? output.containerName : undefined,
        containerPort: output.containerPort !== undefined && output.containerPort !== null ? output.containerPort : undefined,
        port: output.port !== undefined && output.port !== null ? output.port : undefined,
        registryArn: output.registryArn !== undefined && output.registryArn !== null ? output.registryArn : undefined,
    };
};
const deserializeAws_json1_1Services = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Service(entry, context);
    });
};
const deserializeAws_json1_1Session = (output, context) => {
    return {
        sessionId: output.sessionId !== undefined && output.sessionId !== null ? output.sessionId : undefined,
        streamUrl: output.streamUrl !== undefined && output.streamUrl !== null ? output.streamUrl : undefined,
        tokenValue: output.tokenValue !== undefined && output.tokenValue !== null ? output.tokenValue : undefined,
    };
};
const deserializeAws_json1_1Setting = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        principalArn: output.principalArn !== undefined && output.principalArn !== null ? output.principalArn : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1Settings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Setting(entry, context);
    });
};
const deserializeAws_json1_1StartTaskResponse = (output, context) => {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
        tasks: output.tasks !== undefined && output.tasks !== null
            ? deserializeAws_json1_1Tasks(output.tasks, context)
            : undefined,
    };
};
const deserializeAws_json1_1Statistics = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValuePair(entry, context);
    });
};
const deserializeAws_json1_1StopTaskResponse = (output, context) => {
    return {
        task: output.task !== undefined && output.task !== null ? deserializeAws_json1_1Task(output.task, context) : undefined,
    };
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1StringMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1SubmitAttachmentStateChangesResponse = (output, context) => {
    return {
        acknowledgment: output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
    };
};
const deserializeAws_json1_1SubmitContainerStateChangeResponse = (output, context) => {
    return {
        acknowledgment: output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
    };
};
const deserializeAws_json1_1SubmitTaskStateChangeResponse = (output, context) => {
    return {
        acknowledgment: output.acknowledgment !== undefined && output.acknowledgment !== null ? output.acknowledgment : undefined,
    };
};
const deserializeAws_json1_1SystemControl = (output, context) => {
    return {
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1SystemControls = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SystemControl(entry, context);
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TargetNotConnectedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TargetNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Task = (output, context) => {
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
const deserializeAws_json1_1TaskDefinition = (output, context) => {
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
const deserializeAws_json1_1TaskDefinitionPlacementConstraint = (output, context) => {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_json1_1TaskDefinitionPlacementConstraints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskDefinitionPlacementConstraint(entry, context);
    });
};
const deserializeAws_json1_1TaskOverride = (output, context) => {
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
const deserializeAws_json1_1Tasks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Task(entry, context);
    });
};
const deserializeAws_json1_1TaskSet = (output, context) => {
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
const deserializeAws_json1_1TaskSetNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TaskSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TaskSet(entry, context);
    });
};
const deserializeAws_json1_1Tmpfs = (output, context) => {
    return {
        containerPath: output.containerPath !== undefined && output.containerPath !== null ? output.containerPath : undefined,
        mountOptions: output.mountOptions !== undefined && output.mountOptions !== null
            ? deserializeAws_json1_1StringList(output.mountOptions, context)
            : undefined,
        size: output.size !== undefined && output.size !== null ? output.size : undefined,
    };
};
const deserializeAws_json1_1TmpfsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tmpfs(entry, context);
    });
};
const deserializeAws_json1_1Ulimit = (output, context) => {
    return {
        hardLimit: output.hardLimit !== undefined && output.hardLimit !== null ? output.hardLimit : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        softLimit: output.softLimit !== undefined && output.softLimit !== null ? output.softLimit : undefined,
    };
};
const deserializeAws_json1_1UlimitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Ulimit(entry, context);
    });
};
const deserializeAws_json1_1UnsupportedFeatureException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateCapacityProviderResponse = (output, context) => {
    return {
        capacityProvider: output.capacityProvider !== undefined && output.capacityProvider !== null
            ? deserializeAws_json1_1CapacityProvider(output.capacityProvider, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateClusterResponse = (output, context) => {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateClusterSettingsResponse = (output, context) => {
    return {
        cluster: output.cluster !== undefined && output.cluster !== null
            ? deserializeAws_json1_1Cluster(output.cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateContainerAgentResponse = (output, context) => {
    return {
        containerInstance: output.containerInstance !== undefined && output.containerInstance !== null
            ? deserializeAws_json1_1ContainerInstance(output.containerInstance, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateContainerInstancesStateResponse = (output, context) => {
    return {
        containerInstances: output.containerInstances !== undefined && output.containerInstances !== null
            ? deserializeAws_json1_1ContainerInstances(output.containerInstances, context)
            : undefined,
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_json1_1Failures(output.failures, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateInProgressException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UpdateServicePrimaryTaskSetResponse = (output, context) => {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateServiceResponse = (output, context) => {
    return {
        service: output.service !== undefined && output.service !== null
            ? deserializeAws_json1_1Service(output.service, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateTaskSetResponse = (output, context) => {
    return {
        taskSet: output.taskSet !== undefined && output.taskSet !== null
            ? deserializeAws_json1_1TaskSet(output.taskSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1VersionInfo = (output, context) => {
    return {
        agentHash: output.agentHash !== undefined && output.agentHash !== null ? output.agentHash : undefined,
        agentVersion: output.agentVersion !== undefined && output.agentVersion !== null ? output.agentVersion : undefined,
        dockerVersion: output.dockerVersion !== undefined && output.dockerVersion !== null ? output.dockerVersion : undefined,
    };
};
const deserializeAws_json1_1Volume = (output, context) => {
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
const deserializeAws_json1_1VolumeFrom = (output, context) => {
    return {
        readOnly: output.readOnly !== undefined && output.readOnly !== null ? output.readOnly : undefined,
        sourceContainer: output.sourceContainer !== undefined && output.sourceContainer !== null ? output.sourceContainer : undefined,
    };
};
const deserializeAws_json1_1VolumeFromList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeFrom(entry, context);
    });
};
const deserializeAws_json1_1VolumeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Volume(entry, context);
    });
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
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