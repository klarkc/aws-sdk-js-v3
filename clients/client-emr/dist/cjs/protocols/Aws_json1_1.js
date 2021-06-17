"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1AddJobFlowStepsCommand = exports.deserializeAws_json1_1AddInstanceGroupsCommand = exports.deserializeAws_json1_1AddInstanceFleetCommand = exports.serializeAws_json1_1UpdateStudioSessionMappingCommand = exports.serializeAws_json1_1UpdateStudioCommand = exports.serializeAws_json1_1TerminateJobFlowsCommand = exports.serializeAws_json1_1StopNotebookExecutionCommand = exports.serializeAws_json1_1StartNotebookExecutionCommand = exports.serializeAws_json1_1SetVisibleToAllUsersCommand = exports.serializeAws_json1_1SetTerminationProtectionCommand = exports.serializeAws_json1_1RunJobFlowCommand = exports.serializeAws_json1_1RemoveTagsCommand = exports.serializeAws_json1_1RemoveManagedScalingPolicyCommand = exports.serializeAws_json1_1RemoveAutoScalingPolicyCommand = exports.serializeAws_json1_1PutManagedScalingPolicyCommand = exports.serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = exports.serializeAws_json1_1PutAutoScalingPolicyCommand = exports.serializeAws_json1_1ModifyInstanceGroupsCommand = exports.serializeAws_json1_1ModifyInstanceFleetCommand = exports.serializeAws_json1_1ModifyClusterCommand = exports.serializeAws_json1_1ListStudioSessionMappingsCommand = exports.serializeAws_json1_1ListStudiosCommand = exports.serializeAws_json1_1ListStepsCommand = exports.serializeAws_json1_1ListSecurityConfigurationsCommand = exports.serializeAws_json1_1ListNotebookExecutionsCommand = exports.serializeAws_json1_1ListInstancesCommand = exports.serializeAws_json1_1ListInstanceGroupsCommand = exports.serializeAws_json1_1ListInstanceFleetsCommand = exports.serializeAws_json1_1ListClustersCommand = exports.serializeAws_json1_1ListBootstrapActionsCommand = exports.serializeAws_json1_1GetStudioSessionMappingCommand = exports.serializeAws_json1_1GetManagedScalingPolicyCommand = exports.serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = exports.serializeAws_json1_1DescribeStudioCommand = exports.serializeAws_json1_1DescribeStepCommand = exports.serializeAws_json1_1DescribeSecurityConfigurationCommand = exports.serializeAws_json1_1DescribeNotebookExecutionCommand = exports.serializeAws_json1_1DescribeJobFlowsCommand = exports.serializeAws_json1_1DescribeClusterCommand = exports.serializeAws_json1_1DeleteStudioSessionMappingCommand = exports.serializeAws_json1_1DeleteStudioCommand = exports.serializeAws_json1_1DeleteSecurityConfigurationCommand = exports.serializeAws_json1_1CreateStudioSessionMappingCommand = exports.serializeAws_json1_1CreateStudioCommand = exports.serializeAws_json1_1CreateSecurityConfigurationCommand = exports.serializeAws_json1_1CancelStepsCommand = exports.serializeAws_json1_1AddTagsCommand = exports.serializeAws_json1_1AddJobFlowStepsCommand = exports.serializeAws_json1_1AddInstanceGroupsCommand = exports.serializeAws_json1_1AddInstanceFleetCommand = void 0;
exports.deserializeAws_json1_1UpdateStudioSessionMappingCommand = exports.deserializeAws_json1_1UpdateStudioCommand = exports.deserializeAws_json1_1TerminateJobFlowsCommand = exports.deserializeAws_json1_1StopNotebookExecutionCommand = exports.deserializeAws_json1_1StartNotebookExecutionCommand = exports.deserializeAws_json1_1SetVisibleToAllUsersCommand = exports.deserializeAws_json1_1SetTerminationProtectionCommand = exports.deserializeAws_json1_1RunJobFlowCommand = exports.deserializeAws_json1_1RemoveTagsCommand = exports.deserializeAws_json1_1RemoveManagedScalingPolicyCommand = exports.deserializeAws_json1_1RemoveAutoScalingPolicyCommand = exports.deserializeAws_json1_1PutManagedScalingPolicyCommand = exports.deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand = exports.deserializeAws_json1_1PutAutoScalingPolicyCommand = exports.deserializeAws_json1_1ModifyInstanceGroupsCommand = exports.deserializeAws_json1_1ModifyInstanceFleetCommand = exports.deserializeAws_json1_1ModifyClusterCommand = exports.deserializeAws_json1_1ListStudioSessionMappingsCommand = exports.deserializeAws_json1_1ListStudiosCommand = exports.deserializeAws_json1_1ListStepsCommand = exports.deserializeAws_json1_1ListSecurityConfigurationsCommand = exports.deserializeAws_json1_1ListNotebookExecutionsCommand = exports.deserializeAws_json1_1ListInstancesCommand = exports.deserializeAws_json1_1ListInstanceGroupsCommand = exports.deserializeAws_json1_1ListInstanceFleetsCommand = exports.deserializeAws_json1_1ListClustersCommand = exports.deserializeAws_json1_1ListBootstrapActionsCommand = exports.deserializeAws_json1_1GetStudioSessionMappingCommand = exports.deserializeAws_json1_1GetManagedScalingPolicyCommand = exports.deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand = exports.deserializeAws_json1_1DescribeStudioCommand = exports.deserializeAws_json1_1DescribeStepCommand = exports.deserializeAws_json1_1DescribeSecurityConfigurationCommand = exports.deserializeAws_json1_1DescribeNotebookExecutionCommand = exports.deserializeAws_json1_1DescribeJobFlowsCommand = exports.deserializeAws_json1_1DescribeClusterCommand = exports.deserializeAws_json1_1DeleteStudioSessionMappingCommand = exports.deserializeAws_json1_1DeleteStudioCommand = exports.deserializeAws_json1_1DeleteSecurityConfigurationCommand = exports.deserializeAws_json1_1CreateStudioSessionMappingCommand = exports.deserializeAws_json1_1CreateStudioCommand = exports.deserializeAws_json1_1CreateSecurityConfigurationCommand = exports.deserializeAws_json1_1CancelStepsCommand = exports.deserializeAws_json1_1AddTagsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddInstanceFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.AddInstanceFleet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddInstanceFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddInstanceFleetCommand = serializeAws_json1_1AddInstanceFleetCommand;
const serializeAws_json1_1AddInstanceGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.AddInstanceGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddInstanceGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddInstanceGroupsCommand = serializeAws_json1_1AddInstanceGroupsCommand;
const serializeAws_json1_1AddJobFlowStepsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.AddJobFlowSteps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddJobFlowStepsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddJobFlowStepsCommand = serializeAws_json1_1AddJobFlowStepsCommand;
const serializeAws_json1_1AddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.AddTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
const serializeAws_json1_1CancelStepsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.CancelSteps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelStepsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelStepsCommand = serializeAws_json1_1CancelStepsCommand;
const serializeAws_json1_1CreateSecurityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.CreateSecurityConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSecurityConfigurationCommand = serializeAws_json1_1CreateSecurityConfigurationCommand;
const serializeAws_json1_1CreateStudioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.CreateStudio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStudioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStudioCommand = serializeAws_json1_1CreateStudioCommand;
const serializeAws_json1_1CreateStudioSessionMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.CreateStudioSessionMapping",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStudioSessionMappingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStudioSessionMappingCommand = serializeAws_json1_1CreateStudioSessionMappingCommand;
const serializeAws_json1_1DeleteSecurityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DeleteSecurityConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSecurityConfigurationCommand = serializeAws_json1_1DeleteSecurityConfigurationCommand;
const serializeAws_json1_1DeleteStudioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DeleteStudio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStudioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteStudioCommand = serializeAws_json1_1DeleteStudioCommand;
const serializeAws_json1_1DeleteStudioSessionMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DeleteStudioSessionMapping",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStudioSessionMappingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteStudioSessionMappingCommand = serializeAws_json1_1DeleteStudioSessionMappingCommand;
const serializeAws_json1_1DescribeClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DescribeCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClusterInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeClusterCommand = serializeAws_json1_1DescribeClusterCommand;
const serializeAws_json1_1DescribeJobFlowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DescribeJobFlows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeJobFlowsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeJobFlowsCommand = serializeAws_json1_1DescribeJobFlowsCommand;
const serializeAws_json1_1DescribeNotebookExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DescribeNotebookExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeNotebookExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeNotebookExecutionCommand = serializeAws_json1_1DescribeNotebookExecutionCommand;
const serializeAws_json1_1DescribeSecurityConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DescribeSecurityConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSecurityConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSecurityConfigurationCommand = serializeAws_json1_1DescribeSecurityConfigurationCommand;
const serializeAws_json1_1DescribeStepCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DescribeStep",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStepInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStepCommand = serializeAws_json1_1DescribeStepCommand;
const serializeAws_json1_1DescribeStudioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.DescribeStudio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStudioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStudioCommand = serializeAws_json1_1DescribeStudioCommand;
const serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.GetBlockPublicAccessConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = serializeAws_json1_1GetBlockPublicAccessConfigurationCommand;
const serializeAws_json1_1GetManagedScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.GetManagedScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetManagedScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetManagedScalingPolicyCommand = serializeAws_json1_1GetManagedScalingPolicyCommand;
const serializeAws_json1_1GetStudioSessionMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.GetStudioSessionMapping",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetStudioSessionMappingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetStudioSessionMappingCommand = serializeAws_json1_1GetStudioSessionMappingCommand;
const serializeAws_json1_1ListBootstrapActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListBootstrapActions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBootstrapActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBootstrapActionsCommand = serializeAws_json1_1ListBootstrapActionsCommand;
const serializeAws_json1_1ListClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListClusters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListClustersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListClustersCommand = serializeAws_json1_1ListClustersCommand;
const serializeAws_json1_1ListInstanceFleetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListInstanceFleets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstanceFleetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListInstanceFleetsCommand = serializeAws_json1_1ListInstanceFleetsCommand;
const serializeAws_json1_1ListInstanceGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListInstanceGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstanceGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListInstanceGroupsCommand = serializeAws_json1_1ListInstanceGroupsCommand;
const serializeAws_json1_1ListInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListInstancesCommand = serializeAws_json1_1ListInstancesCommand;
const serializeAws_json1_1ListNotebookExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListNotebookExecutions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListNotebookExecutionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListNotebookExecutionsCommand = serializeAws_json1_1ListNotebookExecutionsCommand;
const serializeAws_json1_1ListSecurityConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListSecurityConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSecurityConfigurationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListSecurityConfigurationsCommand = serializeAws_json1_1ListSecurityConfigurationsCommand;
const serializeAws_json1_1ListStepsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListSteps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStepsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStepsCommand = serializeAws_json1_1ListStepsCommand;
const serializeAws_json1_1ListStudiosCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListStudios",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStudiosInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStudiosCommand = serializeAws_json1_1ListStudiosCommand;
const serializeAws_json1_1ListStudioSessionMappingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ListStudioSessionMappings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStudioSessionMappingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListStudioSessionMappingsCommand = serializeAws_json1_1ListStudioSessionMappingsCommand;
const serializeAws_json1_1ModifyClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ModifyCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyClusterInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyClusterCommand = serializeAws_json1_1ModifyClusterCommand;
const serializeAws_json1_1ModifyInstanceFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ModifyInstanceFleet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyInstanceFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyInstanceFleetCommand = serializeAws_json1_1ModifyInstanceFleetCommand;
const serializeAws_json1_1ModifyInstanceGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.ModifyInstanceGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyInstanceGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyInstanceGroupsCommand = serializeAws_json1_1ModifyInstanceGroupsCommand;
const serializeAws_json1_1PutAutoScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.PutAutoScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAutoScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAutoScalingPolicyCommand = serializeAws_json1_1PutAutoScalingPolicyCommand;
const serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.PutBlockPublicAccessConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutBlockPublicAccessConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = serializeAws_json1_1PutBlockPublicAccessConfigurationCommand;
const serializeAws_json1_1PutManagedScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.PutManagedScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutManagedScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutManagedScalingPolicyCommand = serializeAws_json1_1PutManagedScalingPolicyCommand;
const serializeAws_json1_1RemoveAutoScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.RemoveAutoScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveAutoScalingPolicyCommand = serializeAws_json1_1RemoveAutoScalingPolicyCommand;
const serializeAws_json1_1RemoveManagedScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.RemoveManagedScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveManagedScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveManagedScalingPolicyCommand = serializeAws_json1_1RemoveManagedScalingPolicyCommand;
const serializeAws_json1_1RemoveTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.RemoveTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsCommand = serializeAws_json1_1RemoveTagsCommand;
const serializeAws_json1_1RunJobFlowCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.RunJobFlow",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RunJobFlowInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RunJobFlowCommand = serializeAws_json1_1RunJobFlowCommand;
const serializeAws_json1_1SetTerminationProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.SetTerminationProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTerminationProtectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetTerminationProtectionCommand = serializeAws_json1_1SetTerminationProtectionCommand;
const serializeAws_json1_1SetVisibleToAllUsersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.SetVisibleToAllUsers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetVisibleToAllUsersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetVisibleToAllUsersCommand = serializeAws_json1_1SetVisibleToAllUsersCommand;
const serializeAws_json1_1StartNotebookExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.StartNotebookExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartNotebookExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartNotebookExecutionCommand = serializeAws_json1_1StartNotebookExecutionCommand;
const serializeAws_json1_1StopNotebookExecutionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.StopNotebookExecution",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopNotebookExecutionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopNotebookExecutionCommand = serializeAws_json1_1StopNotebookExecutionCommand;
const serializeAws_json1_1TerminateJobFlowsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.TerminateJobFlows",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateJobFlowsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TerminateJobFlowsCommand = serializeAws_json1_1TerminateJobFlowsCommand;
const serializeAws_json1_1UpdateStudioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.UpdateStudio",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateStudioInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateStudioCommand = serializeAws_json1_1UpdateStudioCommand;
const serializeAws_json1_1UpdateStudioSessionMappingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "ElasticMapReduce.UpdateStudioSessionMapping",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateStudioSessionMappingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateStudioSessionMappingCommand = serializeAws_json1_1UpdateStudioSessionMappingCommand;
const deserializeAws_json1_1AddInstanceFleetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddInstanceFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddInstanceFleetOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddInstanceFleetCommand = deserializeAws_json1_1AddInstanceFleetCommand;
const deserializeAws_json1_1AddInstanceFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddInstanceGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddInstanceGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddInstanceGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddInstanceGroupsCommand = deserializeAws_json1_1AddInstanceGroupsCommand;
const deserializeAws_json1_1AddInstanceGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddJobFlowStepsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddJobFlowStepsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddJobFlowStepsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddJobFlowStepsCommand = deserializeAws_json1_1AddJobFlowStepsCommand;
const deserializeAws_json1_1AddJobFlowStepsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AddTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
const deserializeAws_json1_1AddTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelStepsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelStepsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelStepsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelStepsCommand = deserializeAws_json1_1CancelStepsCommand;
const deserializeAws_json1_1CancelStepsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateSecurityConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSecurityConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSecurityConfigurationCommand = deserializeAws_json1_1CreateSecurityConfigurationCommand;
const deserializeAws_json1_1CreateSecurityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateStudioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateStudioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStudioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStudioCommand = deserializeAws_json1_1CreateStudioCommand;
const deserializeAws_json1_1CreateStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateStudioSessionMappingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateStudioSessionMappingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStudioSessionMappingCommand = deserializeAws_json1_1CreateStudioSessionMappingCommand;
const deserializeAws_json1_1CreateStudioSessionMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteSecurityConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSecurityConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSecurityConfigurationCommand = deserializeAws_json1_1DeleteSecurityConfigurationCommand;
const deserializeAws_json1_1DeleteSecurityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteStudioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteStudioCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteStudioCommand = deserializeAws_json1_1DeleteStudioCommand;
const deserializeAws_json1_1DeleteStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteStudioSessionMappingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteStudioSessionMappingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteStudioSessionMappingCommand = deserializeAws_json1_1DeleteStudioSessionMappingCommand;
const deserializeAws_json1_1DeleteStudioSessionMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClusterOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeClusterCommand = deserializeAws_json1_1DescribeClusterCommand;
const deserializeAws_json1_1DescribeClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeJobFlowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeJobFlowsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeJobFlowsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeJobFlowsCommand = deserializeAws_json1_1DescribeJobFlowsCommand;
const deserializeAws_json1_1DescribeJobFlowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeNotebookExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeNotebookExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeNotebookExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeNotebookExecutionCommand = deserializeAws_json1_1DescribeNotebookExecutionCommand;
const deserializeAws_json1_1DescribeNotebookExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeSecurityConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSecurityConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSecurityConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSecurityConfigurationCommand = deserializeAws_json1_1DescribeSecurityConfigurationCommand;
const deserializeAws_json1_1DescribeSecurityConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStepCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStepCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStepOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStepCommand = deserializeAws_json1_1DescribeStepCommand;
const deserializeAws_json1_1DescribeStepCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStudioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStudioCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStudioOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStudioCommand = deserializeAws_json1_1DescribeStudioCommand;
const deserializeAws_json1_1DescribeStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand = deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand;
const deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetManagedScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetManagedScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetManagedScalingPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetManagedScalingPolicyCommand = deserializeAws_json1_1GetManagedScalingPolicyCommand;
const deserializeAws_json1_1GetManagedScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1GetStudioSessionMappingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetStudioSessionMappingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetStudioSessionMappingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetStudioSessionMappingCommand = deserializeAws_json1_1GetStudioSessionMappingCommand;
const deserializeAws_json1_1GetStudioSessionMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBootstrapActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBootstrapActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBootstrapActionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBootstrapActionsCommand = deserializeAws_json1_1ListBootstrapActionsCommand;
const deserializeAws_json1_1ListBootstrapActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1ListClustersOutput(data, context);
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
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListInstanceFleetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListInstanceFleetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstanceFleetsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListInstanceFleetsCommand = deserializeAws_json1_1ListInstanceFleetsCommand;
const deserializeAws_json1_1ListInstanceFleetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListInstanceGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListInstanceGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstanceGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListInstanceGroupsCommand = deserializeAws_json1_1ListInstanceGroupsCommand;
const deserializeAws_json1_1ListInstanceGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListInstancesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListInstancesCommand = deserializeAws_json1_1ListInstancesCommand;
const deserializeAws_json1_1ListInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListNotebookExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListNotebookExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListNotebookExecutionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListNotebookExecutionsCommand = deserializeAws_json1_1ListNotebookExecutionsCommand;
const deserializeAws_json1_1ListNotebookExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListSecurityConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListSecurityConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSecurityConfigurationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListSecurityConfigurationsCommand = deserializeAws_json1_1ListSecurityConfigurationsCommand;
const deserializeAws_json1_1ListSecurityConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListStepsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStepsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStepsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStepsCommand = deserializeAws_json1_1ListStepsCommand;
const deserializeAws_json1_1ListStepsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListStudiosCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStudiosCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStudiosOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStudiosCommand = deserializeAws_json1_1ListStudiosCommand;
const deserializeAws_json1_1ListStudiosCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListStudioSessionMappingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListStudioSessionMappingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStudioSessionMappingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListStudioSessionMappingsCommand = deserializeAws_json1_1ListStudioSessionMappingsCommand;
const deserializeAws_json1_1ListStudioSessionMappingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyClusterOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyClusterCommand = deserializeAws_json1_1ModifyClusterCommand;
const deserializeAws_json1_1ModifyClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyInstanceFleetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyInstanceFleetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyInstanceFleetCommand = deserializeAws_json1_1ModifyInstanceFleetCommand;
const deserializeAws_json1_1ModifyInstanceFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyInstanceGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyInstanceGroupsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyInstanceGroupsCommand = deserializeAws_json1_1ModifyInstanceGroupsCommand;
const deserializeAws_json1_1ModifyInstanceGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutAutoScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAutoScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAutoScalingPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAutoScalingPolicyCommand = deserializeAws_json1_1PutAutoScalingPolicyCommand;
const deserializeAws_json1_1PutAutoScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand = deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand;
const deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutManagedScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutManagedScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutManagedScalingPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutManagedScalingPolicyCommand = deserializeAws_json1_1PutManagedScalingPolicyCommand;
const deserializeAws_json1_1PutManagedScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1RemoveAutoScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveAutoScalingPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveAutoScalingPolicyCommand = deserializeAws_json1_1RemoveAutoScalingPolicyCommand;
const deserializeAws_json1_1RemoveAutoScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1RemoveManagedScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveManagedScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveManagedScalingPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveManagedScalingPolicyCommand = deserializeAws_json1_1RemoveManagedScalingPolicyCommand;
const deserializeAws_json1_1RemoveManagedScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1RemoveTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsCommand = deserializeAws_json1_1RemoveTagsCommand;
const deserializeAws_json1_1RemoveTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RunJobFlowCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RunJobFlowCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RunJobFlowOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RunJobFlowCommand = deserializeAws_json1_1RunJobFlowCommand;
const deserializeAws_json1_1RunJobFlowCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetTerminationProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetTerminationProtectionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetTerminationProtectionCommand = deserializeAws_json1_1SetTerminationProtectionCommand;
const deserializeAws_json1_1SetTerminationProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetVisibleToAllUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetVisibleToAllUsersCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetVisibleToAllUsersCommand = deserializeAws_json1_1SetVisibleToAllUsersCommand;
const deserializeAws_json1_1SetVisibleToAllUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartNotebookExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartNotebookExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartNotebookExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartNotebookExecutionCommand = deserializeAws_json1_1StartNotebookExecutionCommand;
const deserializeAws_json1_1StartNotebookExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopNotebookExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopNotebookExecutionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopNotebookExecutionCommand = deserializeAws_json1_1StopNotebookExecutionCommand;
const deserializeAws_json1_1StopNotebookExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TerminateJobFlowsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TerminateJobFlowsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TerminateJobFlowsCommand = deserializeAws_json1_1TerminateJobFlowsCommand;
const deserializeAws_json1_1TerminateJobFlowsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateStudioCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateStudioCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateStudioCommand = deserializeAws_json1_1UpdateStudioCommand;
const deserializeAws_json1_1UpdateStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.emr#InternalServerException":
            response = {
                ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateStudioSessionMappingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateStudioSessionMappingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateStudioSessionMappingCommand = deserializeAws_json1_1UpdateStudioSessionMappingCommand;
const deserializeAws_json1_1UpdateStudioSessionMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.emr#InternalServerError":
            response = {
                ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.emr#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddInstanceFleetInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.InstanceFleet !== undefined &&
            input.InstanceFleet !== null && {
            InstanceFleet: serializeAws_json1_1InstanceFleetConfig(input.InstanceFleet, context),
        }),
    };
};
const serializeAws_json1_1AddInstanceGroupsInput = (input, context) => {
    return {
        ...(input.InstanceGroups !== undefined &&
            input.InstanceGroups !== null && {
            InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
        }),
        ...(input.JobFlowId !== undefined && input.JobFlowId !== null && { JobFlowId: input.JobFlowId }),
    };
};
const serializeAws_json1_1AddJobFlowStepsInput = (input, context) => {
    return {
        ...(input.JobFlowId !== undefined && input.JobFlowId !== null && { JobFlowId: input.JobFlowId }),
        ...(input.Steps !== undefined &&
            input.Steps !== null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }),
    };
};
const serializeAws_json1_1AddTagsInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1Application = (input, context) => {
    return {
        ...(input.AdditionalInfo !== undefined &&
            input.AdditionalInfo !== null && {
            AdditionalInfo: serializeAws_json1_1StringMap(input.AdditionalInfo, context),
        }),
        ...(input.Args !== undefined &&
            input.Args !== null && { Args: serializeAws_json1_1StringList(input.Args, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1ApplicationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Application(entry, context);
    });
};
const serializeAws_json1_1AutoScalingPolicy = (input, context) => {
    return {
        ...(input.Constraints !== undefined &&
            input.Constraints !== null && {
            Constraints: serializeAws_json1_1ScalingConstraints(input.Constraints, context),
        }),
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_json1_1ScalingRuleList(input.Rules, context) }),
    };
};
const serializeAws_json1_1BlockPublicAccessConfiguration = (input, context) => {
    return {
        ...(input.BlockPublicSecurityGroupRules !== undefined &&
            input.BlockPublicSecurityGroupRules !== null && {
            BlockPublicSecurityGroupRules: input.BlockPublicSecurityGroupRules,
        }),
        ...(input.Classification !== undefined &&
            input.Classification !== null && { Classification: input.Classification }),
        ...(input.Configurations !== undefined &&
            input.Configurations !== null && {
            Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
        }),
        ...(input.PermittedPublicSecurityGroupRuleRanges !== undefined &&
            input.PermittedPublicSecurityGroupRuleRanges !== null && {
            PermittedPublicSecurityGroupRuleRanges: serializeAws_json1_1PortRanges(input.PermittedPublicSecurityGroupRuleRanges, context),
        }),
        ...(input.Properties !== undefined &&
            input.Properties !== null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }),
    };
};
const serializeAws_json1_1BootstrapActionConfig = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ScriptBootstrapAction !== undefined &&
            input.ScriptBootstrapAction !== null && {
            ScriptBootstrapAction: serializeAws_json1_1ScriptBootstrapActionConfig(input.ScriptBootstrapAction, context),
        }),
    };
};
const serializeAws_json1_1BootstrapActionConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BootstrapActionConfig(entry, context);
    });
};
const serializeAws_json1_1CancelStepsInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.StepCancellationOption !== undefined &&
            input.StepCancellationOption !== null && { StepCancellationOption: input.StepCancellationOption }),
        ...(input.StepIds !== undefined &&
            input.StepIds !== null && { StepIds: serializeAws_json1_1StepIdsList(input.StepIds, context) }),
    };
};
const serializeAws_json1_1CloudWatchAlarmDefinition = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensionList(input.Dimensions, context) }),
        ...(input.EvaluationPeriods !== undefined &&
            input.EvaluationPeriods !== null && { EvaluationPeriods: input.EvaluationPeriods }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
        ...(input.Period !== undefined && input.Period !== null && { Period: input.Period }),
        ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
        ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
        ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    };
};
const serializeAws_json1_1ClusterStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ComputeLimits = (input, context) => {
    return {
        ...(input.MaximumCapacityUnits !== undefined &&
            input.MaximumCapacityUnits !== null && { MaximumCapacityUnits: input.MaximumCapacityUnits }),
        ...(input.MaximumCoreCapacityUnits !== undefined &&
            input.MaximumCoreCapacityUnits !== null && { MaximumCoreCapacityUnits: input.MaximumCoreCapacityUnits }),
        ...(input.MaximumOnDemandCapacityUnits !== undefined &&
            input.MaximumOnDemandCapacityUnits !== null && {
            MaximumOnDemandCapacityUnits: input.MaximumOnDemandCapacityUnits,
        }),
        ...(input.MinimumCapacityUnits !== undefined &&
            input.MinimumCapacityUnits !== null && { MinimumCapacityUnits: input.MinimumCapacityUnits }),
        ...(input.UnitType !== undefined && input.UnitType !== null && { UnitType: input.UnitType }),
    };
};
const serializeAws_json1_1Configuration = (input, context) => {
    return {
        ...(input.Classification !== undefined &&
            input.Classification !== null && { Classification: input.Classification }),
        ...(input.Configurations !== undefined &&
            input.Configurations !== null && {
            Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
        }),
        ...(input.Properties !== undefined &&
            input.Properties !== null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }),
    };
};
const serializeAws_json1_1ConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Configuration(entry, context);
    });
};
const serializeAws_json1_1CreateSecurityConfigurationInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    };
};
const serializeAws_json1_1CreateStudioInput = (input, context) => {
    return {
        ...(input.AuthMode !== undefined && input.AuthMode !== null && { AuthMode: input.AuthMode }),
        ...(input.DefaultS3Location !== undefined &&
            input.DefaultS3Location !== null && { DefaultS3Location: input.DefaultS3Location }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EngineSecurityGroupId !== undefined &&
            input.EngineSecurityGroupId !== null && { EngineSecurityGroupId: input.EngineSecurityGroupId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.UserRole !== undefined && input.UserRole !== null && { UserRole: input.UserRole }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
        ...(input.WorkspaceSecurityGroupId !== undefined &&
            input.WorkspaceSecurityGroupId !== null && { WorkspaceSecurityGroupId: input.WorkspaceSecurityGroupId }),
    };
};
const serializeAws_json1_1CreateStudioSessionMappingInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
        ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
        ...(input.SessionPolicyArn !== undefined &&
            input.SessionPolicyArn !== null && { SessionPolicyArn: input.SessionPolicyArn }),
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1DeleteSecurityConfigurationInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteStudioInput = (input, context) => {
    return {
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1DeleteStudioSessionMappingInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
        ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1DescribeClusterInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    };
};
const serializeAws_json1_1DescribeJobFlowsInput = (input, context) => {
    return {
        ...(input.CreatedAfter !== undefined &&
            input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
        ...(input.CreatedBefore !== undefined &&
            input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
        ...(input.JobFlowIds !== undefined &&
            input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
        ...(input.JobFlowStates !== undefined &&
            input.JobFlowStates !== null && {
            JobFlowStates: serializeAws_json1_1JobFlowExecutionStateList(input.JobFlowStates, context),
        }),
    };
};
const serializeAws_json1_1DescribeNotebookExecutionInput = (input, context) => {
    return {
        ...(input.NotebookExecutionId !== undefined &&
            input.NotebookExecutionId !== null && { NotebookExecutionId: input.NotebookExecutionId }),
    };
};
const serializeAws_json1_1DescribeSecurityConfigurationInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeStepInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.StepId !== undefined && input.StepId !== null && { StepId: input.StepId }),
    };
};
const serializeAws_json1_1DescribeStudioInput = (input, context) => {
    return {
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1EbsBlockDeviceConfig = (input, context) => {
    return {
        ...(input.VolumeSpecification !== undefined &&
            input.VolumeSpecification !== null && {
            VolumeSpecification: serializeAws_json1_1VolumeSpecification(input.VolumeSpecification, context),
        }),
        ...(input.VolumesPerInstance !== undefined &&
            input.VolumesPerInstance !== null && { VolumesPerInstance: input.VolumesPerInstance }),
    };
};
const serializeAws_json1_1EbsBlockDeviceConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EbsBlockDeviceConfig(entry, context);
    });
};
const serializeAws_json1_1EbsConfiguration = (input, context) => {
    return {
        ...(input.EbsBlockDeviceConfigs !== undefined &&
            input.EbsBlockDeviceConfigs !== null && {
            EbsBlockDeviceConfigs: serializeAws_json1_1EbsBlockDeviceConfigList(input.EbsBlockDeviceConfigs, context),
        }),
        ...(input.EbsOptimized !== undefined && input.EbsOptimized !== null && { EbsOptimized: input.EbsOptimized }),
    };
};
const serializeAws_json1_1EC2InstanceIdsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EC2InstanceIdsToTerminateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ExecutionEngineConfig = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.MasterInstanceSecurityGroupId !== undefined &&
            input.MasterInstanceSecurityGroupId !== null && {
            MasterInstanceSecurityGroupId: input.MasterInstanceSecurityGroupId,
        }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1GetBlockPublicAccessConfigurationInput = (input, context) => {
    return {};
};
const serializeAws_json1_1GetManagedScalingPolicyInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    };
};
const serializeAws_json1_1GetStudioSessionMappingInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
        ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1HadoopJarStepConfig = (input, context) => {
    return {
        ...(input.Args !== undefined &&
            input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
        ...(input.Jar !== undefined && input.Jar !== null && { Jar: input.Jar }),
        ...(input.MainClass !== undefined && input.MainClass !== null && { MainClass: input.MainClass }),
        ...(input.Properties !== undefined &&
            input.Properties !== null && { Properties: serializeAws_json1_1KeyValueList(input.Properties, context) }),
    };
};
const serializeAws_json1_1InstanceFleetConfig = (input, context) => {
    return {
        ...(input.InstanceFleetType !== undefined &&
            input.InstanceFleetType !== null && { InstanceFleetType: input.InstanceFleetType }),
        ...(input.InstanceTypeConfigs !== undefined &&
            input.InstanceTypeConfigs !== null && {
            InstanceTypeConfigs: serializeAws_json1_1InstanceTypeConfigList(input.InstanceTypeConfigs, context),
        }),
        ...(input.LaunchSpecifications !== undefined &&
            input.LaunchSpecifications !== null && {
            LaunchSpecifications: serializeAws_json1_1InstanceFleetProvisioningSpecifications(input.LaunchSpecifications, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.TargetOnDemandCapacity !== undefined &&
            input.TargetOnDemandCapacity !== null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
        ...(input.TargetSpotCapacity !== undefined &&
            input.TargetSpotCapacity !== null && { TargetSpotCapacity: input.TargetSpotCapacity }),
    };
};
const serializeAws_json1_1InstanceFleetConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceFleetConfig(entry, context);
    });
};
const serializeAws_json1_1InstanceFleetModifyConfig = (input, context) => {
    return {
        ...(input.InstanceFleetId !== undefined &&
            input.InstanceFleetId !== null && { InstanceFleetId: input.InstanceFleetId }),
        ...(input.TargetOnDemandCapacity !== undefined &&
            input.TargetOnDemandCapacity !== null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
        ...(input.TargetSpotCapacity !== undefined &&
            input.TargetSpotCapacity !== null && { TargetSpotCapacity: input.TargetSpotCapacity }),
    };
};
const serializeAws_json1_1InstanceFleetProvisioningSpecifications = (input, context) => {
    return {
        ...(input.OnDemandSpecification !== undefined &&
            input.OnDemandSpecification !== null && {
            OnDemandSpecification: serializeAws_json1_1OnDemandProvisioningSpecification(input.OnDemandSpecification, context),
        }),
        ...(input.SpotSpecification !== undefined &&
            input.SpotSpecification !== null && {
            SpotSpecification: serializeAws_json1_1SpotProvisioningSpecification(input.SpotSpecification, context),
        }),
    };
};
const serializeAws_json1_1InstanceGroupConfig = (input, context) => {
    return {
        ...(input.AutoScalingPolicy !== undefined &&
            input.AutoScalingPolicy !== null && {
            AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
        }),
        ...(input.BidPrice !== undefined && input.BidPrice !== null && { BidPrice: input.BidPrice }),
        ...(input.Configurations !== undefined &&
            input.Configurations !== null && {
            Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
        }),
        ...(input.EbsConfiguration !== undefined &&
            input.EbsConfiguration !== null && {
            EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
        }),
        ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
        ...(input.InstanceRole !== undefined && input.InstanceRole !== null && { InstanceRole: input.InstanceRole }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.Market !== undefined && input.Market !== null && { Market: input.Market }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1InstanceGroupConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceGroupConfig(entry, context);
    });
};
const serializeAws_json1_1InstanceGroupModifyConfig = (input, context) => {
    return {
        ...(input.Configurations !== undefined &&
            input.Configurations !== null && {
            Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
        }),
        ...(input.EC2InstanceIdsToTerminate !== undefined &&
            input.EC2InstanceIdsToTerminate !== null && {
            EC2InstanceIdsToTerminate: serializeAws_json1_1EC2InstanceIdsToTerminateList(input.EC2InstanceIdsToTerminate, context),
        }),
        ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
        ...(input.InstanceGroupId !== undefined &&
            input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
        ...(input.ShrinkPolicy !== undefined &&
            input.ShrinkPolicy !== null && { ShrinkPolicy: serializeAws_json1_1ShrinkPolicy(input.ShrinkPolicy, context) }),
    };
};
const serializeAws_json1_1InstanceGroupModifyConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceGroupModifyConfig(entry, context);
    });
};
const serializeAws_json1_1InstanceGroupTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceResizePolicy = (input, context) => {
    return {
        ...(input.InstanceTerminationTimeout !== undefined &&
            input.InstanceTerminationTimeout !== null && { InstanceTerminationTimeout: input.InstanceTerminationTimeout }),
        ...(input.InstancesToProtect !== undefined &&
            input.InstancesToProtect !== null && {
            InstancesToProtect: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToProtect, context),
        }),
        ...(input.InstancesToTerminate !== undefined &&
            input.InstancesToTerminate !== null && {
            InstancesToTerminate: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToTerminate, context),
        }),
    };
};
const serializeAws_json1_1InstanceStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceTypeConfig = (input, context) => {
    return {
        ...(input.BidPrice !== undefined && input.BidPrice !== null && { BidPrice: input.BidPrice }),
        ...(input.BidPriceAsPercentageOfOnDemandPrice !== undefined &&
            input.BidPriceAsPercentageOfOnDemandPrice !== null && {
            BidPriceAsPercentageOfOnDemandPrice: input.BidPriceAsPercentageOfOnDemandPrice,
        }),
        ...(input.Configurations !== undefined &&
            input.Configurations !== null && {
            Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
        }),
        ...(input.EbsConfiguration !== undefined &&
            input.EbsConfiguration !== null && {
            EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
        }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.WeightedCapacity !== undefined &&
            input.WeightedCapacity !== null && { WeightedCapacity: input.WeightedCapacity }),
    };
};
const serializeAws_json1_1InstanceTypeConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceTypeConfig(entry, context);
    });
};
const serializeAws_json1_1JobFlowExecutionStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1JobFlowInstancesConfig = (input, context) => {
    return {
        ...(input.AdditionalMasterSecurityGroups !== undefined &&
            input.AdditionalMasterSecurityGroups !== null && {
            AdditionalMasterSecurityGroups: serializeAws_json1_1SecurityGroupsList(input.AdditionalMasterSecurityGroups, context),
        }),
        ...(input.AdditionalSlaveSecurityGroups !== undefined &&
            input.AdditionalSlaveSecurityGroups !== null && {
            AdditionalSlaveSecurityGroups: serializeAws_json1_1SecurityGroupsList(input.AdditionalSlaveSecurityGroups, context),
        }),
        ...(input.Ec2KeyName !== undefined && input.Ec2KeyName !== null && { Ec2KeyName: input.Ec2KeyName }),
        ...(input.Ec2SubnetId !== undefined && input.Ec2SubnetId !== null && { Ec2SubnetId: input.Ec2SubnetId }),
        ...(input.Ec2SubnetIds !== undefined &&
            input.Ec2SubnetIds !== null && {
            Ec2SubnetIds: serializeAws_json1_1XmlStringMaxLen256List(input.Ec2SubnetIds, context),
        }),
        ...(input.EmrManagedMasterSecurityGroup !== undefined &&
            input.EmrManagedMasterSecurityGroup !== null && {
            EmrManagedMasterSecurityGroup: input.EmrManagedMasterSecurityGroup,
        }),
        ...(input.EmrManagedSlaveSecurityGroup !== undefined &&
            input.EmrManagedSlaveSecurityGroup !== null && {
            EmrManagedSlaveSecurityGroup: input.EmrManagedSlaveSecurityGroup,
        }),
        ...(input.HadoopVersion !== undefined && input.HadoopVersion !== null && { HadoopVersion: input.HadoopVersion }),
        ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
        ...(input.InstanceFleets !== undefined &&
            input.InstanceFleets !== null && {
            InstanceFleets: serializeAws_json1_1InstanceFleetConfigList(input.InstanceFleets, context),
        }),
        ...(input.InstanceGroups !== undefined &&
            input.InstanceGroups !== null && {
            InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
        }),
        ...(input.KeepJobFlowAliveWhenNoSteps !== undefined &&
            input.KeepJobFlowAliveWhenNoSteps !== null && { KeepJobFlowAliveWhenNoSteps: input.KeepJobFlowAliveWhenNoSteps }),
        ...(input.MasterInstanceType !== undefined &&
            input.MasterInstanceType !== null && { MasterInstanceType: input.MasterInstanceType }),
        ...(input.Placement !== undefined &&
            input.Placement !== null && { Placement: serializeAws_json1_1PlacementType(input.Placement, context) }),
        ...(input.ServiceAccessSecurityGroup !== undefined &&
            input.ServiceAccessSecurityGroup !== null && { ServiceAccessSecurityGroup: input.ServiceAccessSecurityGroup }),
        ...(input.SlaveInstanceType !== undefined &&
            input.SlaveInstanceType !== null && { SlaveInstanceType: input.SlaveInstanceType }),
        ...(input.TerminationProtected !== undefined &&
            input.TerminationProtected !== null && { TerminationProtected: input.TerminationProtected }),
    };
};
const serializeAws_json1_1KerberosAttributes = (input, context) => {
    return {
        ...(input.ADDomainJoinPassword !== undefined &&
            input.ADDomainJoinPassword !== null && { ADDomainJoinPassword: input.ADDomainJoinPassword }),
        ...(input.ADDomainJoinUser !== undefined &&
            input.ADDomainJoinUser !== null && { ADDomainJoinUser: input.ADDomainJoinUser }),
        ...(input.CrossRealmTrustPrincipalPassword !== undefined &&
            input.CrossRealmTrustPrincipalPassword !== null && {
            CrossRealmTrustPrincipalPassword: input.CrossRealmTrustPrincipalPassword,
        }),
        ...(input.KdcAdminPassword !== undefined &&
            input.KdcAdminPassword !== null && { KdcAdminPassword: input.KdcAdminPassword }),
        ...(input.Realm !== undefined && input.Realm !== null && { Realm: input.Realm }),
    };
};
const serializeAws_json1_1KeyValue = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1KeyValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1KeyValue(entry, context);
    });
};
const serializeAws_json1_1ListBootstrapActionsInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListClustersInput = (input, context) => {
    return {
        ...(input.ClusterStates !== undefined &&
            input.ClusterStates !== null && {
            ClusterStates: serializeAws_json1_1ClusterStateList(input.ClusterStates, context),
        }),
        ...(input.CreatedAfter !== undefined &&
            input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
        ...(input.CreatedBefore !== undefined &&
            input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListInstanceFleetsInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListInstanceGroupsInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListInstancesInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.InstanceFleetId !== undefined &&
            input.InstanceFleetId !== null && { InstanceFleetId: input.InstanceFleetId }),
        ...(input.InstanceFleetType !== undefined &&
            input.InstanceFleetType !== null && { InstanceFleetType: input.InstanceFleetType }),
        ...(input.InstanceGroupId !== undefined &&
            input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
        ...(input.InstanceGroupTypes !== undefined &&
            input.InstanceGroupTypes !== null && {
            InstanceGroupTypes: serializeAws_json1_1InstanceGroupTypeList(input.InstanceGroupTypes, context),
        }),
        ...(input.InstanceStates !== undefined &&
            input.InstanceStates !== null && {
            InstanceStates: serializeAws_json1_1InstanceStateList(input.InstanceStates, context),
        }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListNotebookExecutionsInput = (input, context) => {
    return {
        ...(input.EditorId !== undefined && input.EditorId !== null && { EditorId: input.EditorId }),
        ...(input.From !== undefined && input.From !== null && { From: Math.round(input.From.getTime() / 1000) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
        ...(input.To !== undefined && input.To !== null && { To: Math.round(input.To.getTime() / 1000) }),
    };
};
const serializeAws_json1_1ListSecurityConfigurationsInput = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ListStepsInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.StepIds !== undefined &&
            input.StepIds !== null && { StepIds: serializeAws_json1_1XmlStringList(input.StepIds, context) }),
        ...(input.StepStates !== undefined &&
            input.StepStates !== null && { StepStates: serializeAws_json1_1StepStateList(input.StepStates, context) }),
    };
};
const serializeAws_json1_1ListStudioSessionMappingsInput = (input, context) => {
    return {
        ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1ListStudiosInput = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    };
};
const serializeAws_json1_1ManagedScalingPolicy = (input, context) => {
    return {
        ...(input.ComputeLimits !== undefined &&
            input.ComputeLimits !== null && {
            ComputeLimits: serializeAws_json1_1ComputeLimits(input.ComputeLimits, context),
        }),
    };
};
const serializeAws_json1_1MetricDimension = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1MetricDimensionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1MetricDimension(entry, context);
    });
};
const serializeAws_json1_1ModifyClusterInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.StepConcurrencyLevel !== undefined &&
            input.StepConcurrencyLevel !== null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
    };
};
const serializeAws_json1_1ModifyInstanceFleetInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.InstanceFleet !== undefined &&
            input.InstanceFleet !== null && {
            InstanceFleet: serializeAws_json1_1InstanceFleetModifyConfig(input.InstanceFleet, context),
        }),
    };
};
const serializeAws_json1_1ModifyInstanceGroupsInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.InstanceGroups !== undefined &&
            input.InstanceGroups !== null && {
            InstanceGroups: serializeAws_json1_1InstanceGroupModifyConfigList(input.InstanceGroups, context),
        }),
    };
};
const serializeAws_json1_1NewSupportedProductsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SupportedProductConfig(entry, context);
    });
};
const serializeAws_json1_1OnDemandCapacityReservationOptions = (input, context) => {
    return {
        ...(input.CapacityReservationPreference !== undefined &&
            input.CapacityReservationPreference !== null && {
            CapacityReservationPreference: input.CapacityReservationPreference,
        }),
        ...(input.CapacityReservationResourceGroupArn !== undefined &&
            input.CapacityReservationResourceGroupArn !== null && {
            CapacityReservationResourceGroupArn: input.CapacityReservationResourceGroupArn,
        }),
        ...(input.UsageStrategy !== undefined && input.UsageStrategy !== null && { UsageStrategy: input.UsageStrategy }),
    };
};
const serializeAws_json1_1OnDemandProvisioningSpecification = (input, context) => {
    return {
        ...(input.AllocationStrategy !== undefined &&
            input.AllocationStrategy !== null && { AllocationStrategy: input.AllocationStrategy }),
        ...(input.CapacityReservationOptions !== undefined &&
            input.CapacityReservationOptions !== null && {
            CapacityReservationOptions: serializeAws_json1_1OnDemandCapacityReservationOptions(input.CapacityReservationOptions, context),
        }),
    };
};
const serializeAws_json1_1PlacementGroupConfig = (input, context) => {
    return {
        ...(input.InstanceRole !== undefined && input.InstanceRole !== null && { InstanceRole: input.InstanceRole }),
        ...(input.PlacementStrategy !== undefined &&
            input.PlacementStrategy !== null && { PlacementStrategy: input.PlacementStrategy }),
    };
};
const serializeAws_json1_1PlacementGroupConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};
const serializeAws_json1_1PlacementType = (input, context) => {
    return {
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
        ...(input.AvailabilityZones !== undefined &&
            input.AvailabilityZones !== null && {
            AvailabilityZones: serializeAws_json1_1XmlStringMaxLen256List(input.AvailabilityZones, context),
        }),
    };
};
const serializeAws_json1_1PortRange = (input, context) => {
    return {
        ...(input.MaxRange !== undefined && input.MaxRange !== null && { MaxRange: input.MaxRange }),
        ...(input.MinRange !== undefined && input.MinRange !== null && { MinRange: input.MinRange }),
    };
};
const serializeAws_json1_1PortRanges = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PortRange(entry, context);
    });
};
const serializeAws_json1_1PutAutoScalingPolicyInput = (input, context) => {
    return {
        ...(input.AutoScalingPolicy !== undefined &&
            input.AutoScalingPolicy !== null && {
            AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
        }),
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.InstanceGroupId !== undefined &&
            input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
    };
};
const serializeAws_json1_1PutBlockPublicAccessConfigurationInput = (input, context) => {
    return {
        ...(input.BlockPublicAccessConfiguration !== undefined &&
            input.BlockPublicAccessConfiguration !== null && {
            BlockPublicAccessConfiguration: serializeAws_json1_1BlockPublicAccessConfiguration(input.BlockPublicAccessConfiguration, context),
        }),
    };
};
const serializeAws_json1_1PutManagedScalingPolicyInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.ManagedScalingPolicy !== undefined &&
            input.ManagedScalingPolicy !== null && {
            ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
        }),
    };
};
const serializeAws_json1_1RemoveAutoScalingPolicyInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.InstanceGroupId !== undefined &&
            input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
    };
};
const serializeAws_json1_1RemoveManagedScalingPolicyInput = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    };
};
const serializeAws_json1_1RemoveTagsInput = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1StringList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1RunJobFlowInput = (input, context) => {
    return {
        ...(input.AdditionalInfo !== undefined &&
            input.AdditionalInfo !== null && { AdditionalInfo: input.AdditionalInfo }),
        ...(input.AmiVersion !== undefined && input.AmiVersion !== null && { AmiVersion: input.AmiVersion }),
        ...(input.Applications !== undefined &&
            input.Applications !== null && {
            Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
        }),
        ...(input.AutoScalingRole !== undefined &&
            input.AutoScalingRole !== null && { AutoScalingRole: input.AutoScalingRole }),
        ...(input.BootstrapActions !== undefined &&
            input.BootstrapActions !== null && {
            BootstrapActions: serializeAws_json1_1BootstrapActionConfigList(input.BootstrapActions, context),
        }),
        ...(input.Configurations !== undefined &&
            input.Configurations !== null && {
            Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
        }),
        ...(input.CustomAmiId !== undefined && input.CustomAmiId !== null && { CustomAmiId: input.CustomAmiId }),
        ...(input.EbsRootVolumeSize !== undefined &&
            input.EbsRootVolumeSize !== null && { EbsRootVolumeSize: input.EbsRootVolumeSize }),
        ...(input.Instances !== undefined &&
            input.Instances !== null && { Instances: serializeAws_json1_1JobFlowInstancesConfig(input.Instances, context) }),
        ...(input.JobFlowRole !== undefined && input.JobFlowRole !== null && { JobFlowRole: input.JobFlowRole }),
        ...(input.KerberosAttributes !== undefined &&
            input.KerberosAttributes !== null && {
            KerberosAttributes: serializeAws_json1_1KerberosAttributes(input.KerberosAttributes, context),
        }),
        ...(input.LogEncryptionKmsKeyId !== undefined &&
            input.LogEncryptionKmsKeyId !== null && { LogEncryptionKmsKeyId: input.LogEncryptionKmsKeyId }),
        ...(input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri }),
        ...(input.ManagedScalingPolicy !== undefined &&
            input.ManagedScalingPolicy !== null && {
            ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NewSupportedProducts !== undefined &&
            input.NewSupportedProducts !== null && {
            NewSupportedProducts: serializeAws_json1_1NewSupportedProductsList(input.NewSupportedProducts, context),
        }),
        ...(input.PlacementGroupConfigs !== undefined &&
            input.PlacementGroupConfigs !== null && {
            PlacementGroupConfigs: serializeAws_json1_1PlacementGroupConfigList(input.PlacementGroupConfigs, context),
        }),
        ...(input.ReleaseLabel !== undefined && input.ReleaseLabel !== null && { ReleaseLabel: input.ReleaseLabel }),
        ...(input.RepoUpgradeOnBoot !== undefined &&
            input.RepoUpgradeOnBoot !== null && { RepoUpgradeOnBoot: input.RepoUpgradeOnBoot }),
        ...(input.ScaleDownBehavior !== undefined &&
            input.ScaleDownBehavior !== null && { ScaleDownBehavior: input.ScaleDownBehavior }),
        ...(input.SecurityConfiguration !== undefined &&
            input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
        ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
        ...(input.StepConcurrencyLevel !== undefined &&
            input.StepConcurrencyLevel !== null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
        ...(input.Steps !== undefined &&
            input.Steps !== null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }),
        ...(input.SupportedProducts !== undefined &&
            input.SupportedProducts !== null && {
            SupportedProducts: serializeAws_json1_1SupportedProductsList(input.SupportedProducts, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.VisibleToAllUsers !== undefined &&
            input.VisibleToAllUsers !== null && { VisibleToAllUsers: input.VisibleToAllUsers }),
    };
};
const serializeAws_json1_1ScalingAction = (input, context) => {
    return {
        ...(input.Market !== undefined && input.Market !== null && { Market: input.Market }),
        ...(input.SimpleScalingPolicyConfiguration !== undefined &&
            input.SimpleScalingPolicyConfiguration !== null && {
            SimpleScalingPolicyConfiguration: serializeAws_json1_1SimpleScalingPolicyConfiguration(input.SimpleScalingPolicyConfiguration, context),
        }),
    };
};
const serializeAws_json1_1ScalingConstraints = (input, context) => {
    return {
        ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
        ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
    };
};
const serializeAws_json1_1ScalingRule = (input, context) => {
    return {
        ...(input.Action !== undefined &&
            input.Action !== null && { Action: serializeAws_json1_1ScalingAction(input.Action, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Trigger !== undefined &&
            input.Trigger !== null && { Trigger: serializeAws_json1_1ScalingTrigger(input.Trigger, context) }),
    };
};
const serializeAws_json1_1ScalingRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ScalingRule(entry, context);
    });
};
const serializeAws_json1_1ScalingTrigger = (input, context) => {
    return {
        ...(input.CloudWatchAlarmDefinition !== undefined &&
            input.CloudWatchAlarmDefinition !== null && {
            CloudWatchAlarmDefinition: serializeAws_json1_1CloudWatchAlarmDefinition(input.CloudWatchAlarmDefinition, context),
        }),
    };
};
const serializeAws_json1_1ScriptBootstrapActionConfig = (input, context) => {
    return {
        ...(input.Args !== undefined &&
            input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    };
};
const serializeAws_json1_1SecurityGroupsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SetTerminationProtectionInput = (input, context) => {
    return {
        ...(input.JobFlowIds !== undefined &&
            input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
        ...(input.TerminationProtected !== undefined &&
            input.TerminationProtected !== null && { TerminationProtected: input.TerminationProtected }),
    };
};
const serializeAws_json1_1SetVisibleToAllUsersInput = (input, context) => {
    return {
        ...(input.JobFlowIds !== undefined &&
            input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
        ...(input.VisibleToAllUsers !== undefined &&
            input.VisibleToAllUsers !== null && { VisibleToAllUsers: input.VisibleToAllUsers }),
    };
};
const serializeAws_json1_1ShrinkPolicy = (input, context) => {
    return {
        ...(input.DecommissionTimeout !== undefined &&
            input.DecommissionTimeout !== null && { DecommissionTimeout: input.DecommissionTimeout }),
        ...(input.InstanceResizePolicy !== undefined &&
            input.InstanceResizePolicy !== null && {
            InstanceResizePolicy: serializeAws_json1_1InstanceResizePolicy(input.InstanceResizePolicy, context),
        }),
    };
};
const serializeAws_json1_1SimpleScalingPolicyConfiguration = (input, context) => {
    return {
        ...(input.AdjustmentType !== undefined &&
            input.AdjustmentType !== null && { AdjustmentType: input.AdjustmentType }),
        ...(input.CoolDown !== undefined && input.CoolDown !== null && { CoolDown: input.CoolDown }),
        ...(input.ScalingAdjustment !== undefined &&
            input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }),
    };
};
const serializeAws_json1_1SpotProvisioningSpecification = (input, context) => {
    return {
        ...(input.AllocationStrategy !== undefined &&
            input.AllocationStrategy !== null && { AllocationStrategy: input.AllocationStrategy }),
        ...(input.BlockDurationMinutes !== undefined &&
            input.BlockDurationMinutes !== null && { BlockDurationMinutes: input.BlockDurationMinutes }),
        ...(input.TimeoutAction !== undefined && input.TimeoutAction !== null && { TimeoutAction: input.TimeoutAction }),
        ...(input.TimeoutDurationMinutes !== undefined &&
            input.TimeoutDurationMinutes !== null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }),
    };
};
const serializeAws_json1_1StartNotebookExecutionInput = (input, context) => {
    return {
        ...(input.EditorId !== undefined && input.EditorId !== null && { EditorId: input.EditorId }),
        ...(input.ExecutionEngine !== undefined &&
            input.ExecutionEngine !== null && {
            ExecutionEngine: serializeAws_json1_1ExecutionEngineConfig(input.ExecutionEngine, context),
        }),
        ...(input.NotebookExecutionName !== undefined &&
            input.NotebookExecutionName !== null && { NotebookExecutionName: input.NotebookExecutionName }),
        ...(input.NotebookInstanceSecurityGroupId !== undefined &&
            input.NotebookInstanceSecurityGroupId !== null && {
            NotebookInstanceSecurityGroupId: input.NotebookInstanceSecurityGroupId,
        }),
        ...(input.NotebookParams !== undefined &&
            input.NotebookParams !== null && { NotebookParams: input.NotebookParams }),
        ...(input.RelativePath !== undefined && input.RelativePath !== null && { RelativePath: input.RelativePath }),
        ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1StepConfig = (input, context) => {
    return {
        ...(input.ActionOnFailure !== undefined &&
            input.ActionOnFailure !== null && { ActionOnFailure: input.ActionOnFailure }),
        ...(input.HadoopJarStep !== undefined &&
            input.HadoopJarStep !== null && {
            HadoopJarStep: serializeAws_json1_1HadoopJarStepConfig(input.HadoopJarStep, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StepConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StepConfig(entry, context);
    });
};
const serializeAws_json1_1StepIdsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StepStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StopNotebookExecutionInput = (input, context) => {
    return {
        ...(input.NotebookExecutionId !== undefined &&
            input.NotebookExecutionId !== null && { NotebookExecutionId: input.NotebookExecutionId }),
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
const serializeAws_json1_1SubnetIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SupportedProductConfig = (input, context) => {
    return {
        ...(input.Args !== undefined &&
            input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1SupportedProductsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TerminateJobFlowsInput = (input, context) => {
    return {
        ...(input.JobFlowIds !== undefined &&
            input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    };
};
const serializeAws_json1_1UpdateStudioInput = (input, context) => {
    return {
        ...(input.DefaultS3Location !== undefined &&
            input.DefaultS3Location !== null && { DefaultS3Location: input.DefaultS3Location }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
    };
};
const serializeAws_json1_1UpdateStudioSessionMappingInput = (input, context) => {
    return {
        ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
        ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
        ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
        ...(input.SessionPolicyArn !== undefined &&
            input.SessionPolicyArn !== null && { SessionPolicyArn: input.SessionPolicyArn }),
        ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
    };
};
const serializeAws_json1_1VolumeSpecification = (input, context) => {
    return {
        ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
        ...(input.SizeInGB !== undefined && input.SizeInGB !== null && { SizeInGB: input.SizeInGB }),
        ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
    };
};
const serializeAws_json1_1XmlStringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1XmlStringMaxLen256List = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AddInstanceFleetOutput = (output, context) => {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        InstanceFleetId: output.InstanceFleetId !== undefined && output.InstanceFleetId !== null ? output.InstanceFleetId : undefined,
    };
};
const deserializeAws_json1_1AddInstanceGroupsOutput = (output, context) => {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        InstanceGroupIds: output.InstanceGroupIds !== undefined && output.InstanceGroupIds !== null
            ? deserializeAws_json1_1InstanceGroupIdsList(output.InstanceGroupIds, context)
            : undefined,
        JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
    };
};
const deserializeAws_json1_1AddJobFlowStepsOutput = (output, context) => {
    return {
        StepIds: output.StepIds !== undefined && output.StepIds !== null
            ? deserializeAws_json1_1StepIdsList(output.StepIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1AddTagsOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1Application = (output, context) => {
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
const deserializeAws_json1_1ApplicationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Application(entry, context);
    });
};
const deserializeAws_json1_1AutoScalingPolicyDescription = (output, context) => {
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
const deserializeAws_json1_1AutoScalingPolicyStateChangeReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AutoScalingPolicyStatus = (output, context) => {
    return {
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateChangeReason: output.StateChangeReason !== undefined && output.StateChangeReason !== null
            ? deserializeAws_json1_1AutoScalingPolicyStateChangeReason(output.StateChangeReason, context)
            : undefined,
    };
};
const deserializeAws_json1_1BlockPublicAccessConfiguration = (output, context) => {
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
const deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = (output, context) => {
    return {
        CreatedByArn: output.CreatedByArn !== undefined && output.CreatedByArn !== null ? output.CreatedByArn : undefined,
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1BootstrapActionConfig = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScriptBootstrapAction: output.ScriptBootstrapAction !== undefined && output.ScriptBootstrapAction !== null
            ? deserializeAws_json1_1ScriptBootstrapActionConfig(output.ScriptBootstrapAction, context)
            : undefined,
    };
};
const deserializeAws_json1_1BootstrapActionDetail = (output, context) => {
    return {
        BootstrapActionConfig: output.BootstrapActionConfig !== undefined && output.BootstrapActionConfig !== null
            ? deserializeAws_json1_1BootstrapActionConfig(output.BootstrapActionConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1BootstrapActionDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BootstrapActionDetail(entry, context);
    });
};
const deserializeAws_json1_1CancelStepsInfo = (output, context) => {
    return {
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StepId: output.StepId !== undefined && output.StepId !== null ? output.StepId : undefined,
    };
};
const deserializeAws_json1_1CancelStepsInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CancelStepsInfo(entry, context);
    });
};
const deserializeAws_json1_1CancelStepsOutput = (output, context) => {
    return {
        CancelStepsInfoList: output.CancelStepsInfoList !== undefined && output.CancelStepsInfoList !== null
            ? deserializeAws_json1_1CancelStepsInfoList(output.CancelStepsInfoList, context)
            : undefined,
    };
};
const deserializeAws_json1_1CloudWatchAlarmDefinition = (output, context) => {
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
const deserializeAws_json1_1Cluster = (output, context) => {
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
const deserializeAws_json1_1ClusterStateChangeReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ClusterStatus = (output, context) => {
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
const deserializeAws_json1_1ClusterSummary = (output, context) => {
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
const deserializeAws_json1_1ClusterSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClusterSummary(entry, context);
    });
};
const deserializeAws_json1_1ClusterTimeline = (output, context) => {
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
const deserializeAws_json1_1Command = (output, context) => {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1StringList(output.Args, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScriptPath: output.ScriptPath !== undefined && output.ScriptPath !== null ? output.ScriptPath : undefined,
    };
};
const deserializeAws_json1_1CommandList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Command(entry, context);
    });
};
const deserializeAws_json1_1ComputeLimits = (output, context) => {
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
const deserializeAws_json1_1Configuration = (output, context) => {
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
const deserializeAws_json1_1ConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Configuration(entry, context);
    });
};
const deserializeAws_json1_1CreateSecurityConfigurationOutput = (output, context) => {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1CreateStudioOutput = (output, context) => {
    return {
        StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_json1_1DeleteSecurityConfigurationOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeClusterOutput = (output, context) => {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeJobFlowsOutput = (output, context) => {
    return {
        JobFlows: output.JobFlows !== undefined && output.JobFlows !== null
            ? deserializeAws_json1_1JobFlowDetailList(output.JobFlows, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeNotebookExecutionOutput = (output, context) => {
    return {
        NotebookExecution: output.NotebookExecution !== undefined && output.NotebookExecution !== null
            ? deserializeAws_json1_1NotebookExecution(output.NotebookExecution, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSecurityConfigurationOutput = (output, context) => {
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
const deserializeAws_json1_1DescribeStepOutput = (output, context) => {
    return {
        Step: output.Step !== undefined && output.Step !== null ? deserializeAws_json1_1Step(output.Step, context) : undefined,
    };
};
const deserializeAws_json1_1DescribeStudioOutput = (output, context) => {
    return {
        Studio: output.Studio !== undefined && output.Studio !== null
            ? deserializeAws_json1_1Studio(output.Studio, context)
            : undefined,
    };
};
const deserializeAws_json1_1EbsBlockDevice = (output, context) => {
    return {
        Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
        VolumeSpecification: output.VolumeSpecification !== undefined && output.VolumeSpecification !== null
            ? deserializeAws_json1_1VolumeSpecification(output.VolumeSpecification, context)
            : undefined,
    };
};
const deserializeAws_json1_1EbsBlockDeviceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EbsBlockDevice(entry, context);
    });
};
const deserializeAws_json1_1EbsVolume = (output, context) => {
    return {
        Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
    };
};
const deserializeAws_json1_1EbsVolumeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EbsVolume(entry, context);
    });
};
const deserializeAws_json1_1Ec2InstanceAttributes = (output, context) => {
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
const deserializeAws_json1_1EC2InstanceIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ExecutionEngineConfig = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MasterInstanceSecurityGroupId: output.MasterInstanceSecurityGroupId !== undefined && output.MasterInstanceSecurityGroupId !== null
            ? output.MasterInstanceSecurityGroupId
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1FailureDetails = (output, context) => {
    return {
        LogFile: output.LogFile !== undefined && output.LogFile !== null ? output.LogFile : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = (output, context) => {
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
const deserializeAws_json1_1GetManagedScalingPolicyOutput = (output, context) => {
    return {
        ManagedScalingPolicy: output.ManagedScalingPolicy !== undefined && output.ManagedScalingPolicy !== null
            ? deserializeAws_json1_1ManagedScalingPolicy(output.ManagedScalingPolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetStudioSessionMappingOutput = (output, context) => {
    return {
        SessionMapping: output.SessionMapping !== undefined && output.SessionMapping !== null
            ? deserializeAws_json1_1SessionMappingDetail(output.SessionMapping, context)
            : undefined,
    };
};
const deserializeAws_json1_1HadoopJarStepConfig = (output, context) => {
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
const deserializeAws_json1_1HadoopStepConfig = (output, context) => {
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
const deserializeAws_json1_1Instance = (output, context) => {
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
const deserializeAws_json1_1InstanceFleet = (output, context) => {
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
const deserializeAws_json1_1InstanceFleetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceFleet(entry, context);
    });
};
const deserializeAws_json1_1InstanceFleetProvisioningSpecifications = (output, context) => {
    return {
        OnDemandSpecification: output.OnDemandSpecification !== undefined && output.OnDemandSpecification !== null
            ? deserializeAws_json1_1OnDemandProvisioningSpecification(output.OnDemandSpecification, context)
            : undefined,
        SpotSpecification: output.SpotSpecification !== undefined && output.SpotSpecification !== null
            ? deserializeAws_json1_1SpotProvisioningSpecification(output.SpotSpecification, context)
            : undefined,
    };
};
const deserializeAws_json1_1InstanceFleetStateChangeReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InstanceFleetStatus = (output, context) => {
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
const deserializeAws_json1_1InstanceFleetTimeline = (output, context) => {
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
const deserializeAws_json1_1InstanceGroup = (output, context) => {
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
const deserializeAws_json1_1InstanceGroupDetail = (output, context) => {
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
const deserializeAws_json1_1InstanceGroupDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceGroupDetail(entry, context);
    });
};
const deserializeAws_json1_1InstanceGroupIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InstanceGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceGroup(entry, context);
    });
};
const deserializeAws_json1_1InstanceGroupStateChangeReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InstanceGroupStatus = (output, context) => {
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
const deserializeAws_json1_1InstanceGroupTimeline = (output, context) => {
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
const deserializeAws_json1_1InstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Instance(entry, context);
    });
};
const deserializeAws_json1_1InstanceResizePolicy = (output, context) => {
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
const deserializeAws_json1_1InstanceStateChangeReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InstanceStatus = (output, context) => {
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
const deserializeAws_json1_1InstanceTimeline = (output, context) => {
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
const deserializeAws_json1_1InstanceTypeSpecification = (output, context) => {
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
const deserializeAws_json1_1InstanceTypeSpecificationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceTypeSpecification(entry, context);
    });
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    return {};
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1JobFlowDetail = (output, context) => {
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
const deserializeAws_json1_1JobFlowDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1JobFlowDetail(entry, context);
    });
};
const deserializeAws_json1_1JobFlowExecutionStatusDetail = (output, context) => {
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
const deserializeAws_json1_1JobFlowInstancesDetail = (output, context) => {
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
const deserializeAws_json1_1KerberosAttributes = (output, context) => {
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
const deserializeAws_json1_1KeyValue = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1KeyValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1KeyValue(entry, context);
    });
};
const deserializeAws_json1_1ListBootstrapActionsOutput = (output, context) => {
    return {
        BootstrapActions: output.BootstrapActions !== undefined && output.BootstrapActions !== null
            ? deserializeAws_json1_1CommandList(output.BootstrapActions, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1ListClustersOutput = (output, context) => {
    return {
        Clusters: output.Clusters !== undefined && output.Clusters !== null
            ? deserializeAws_json1_1ClusterSummaryList(output.Clusters, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1ListInstanceFleetsOutput = (output, context) => {
    return {
        InstanceFleets: output.InstanceFleets !== undefined && output.InstanceFleets !== null
            ? deserializeAws_json1_1InstanceFleetList(output.InstanceFleets, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1ListInstanceGroupsOutput = (output, context) => {
    return {
        InstanceGroups: output.InstanceGroups !== undefined && output.InstanceGroups !== null
            ? deserializeAws_json1_1InstanceGroupList(output.InstanceGroups, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1ListInstancesOutput = (output, context) => {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1InstanceList(output.Instances, context)
            : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    };
};
const deserializeAws_json1_1ListNotebookExecutionsOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        NotebookExecutions: output.NotebookExecutions !== undefined && output.NotebookExecutions !== null
            ? deserializeAws_json1_1NotebookExecutionSummaryList(output.NotebookExecutions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListSecurityConfigurationsOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        SecurityConfigurations: output.SecurityConfigurations !== undefined && output.SecurityConfigurations !== null
            ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListStepsOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Steps: output.Steps !== undefined && output.Steps !== null
            ? deserializeAws_json1_1StepSummaryList(output.Steps, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListStudioSessionMappingsOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        SessionMappings: output.SessionMappings !== undefined && output.SessionMappings !== null
            ? deserializeAws_json1_1SessionMappingSummaryList(output.SessionMappings, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListStudiosOutput = (output, context) => {
    return {
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        Studios: output.Studios !== undefined && output.Studios !== null
            ? deserializeAws_json1_1StudioSummaryList(output.Studios, context)
            : undefined,
    };
};
const deserializeAws_json1_1ManagedScalingPolicy = (output, context) => {
    return {
        ComputeLimits: output.ComputeLimits !== undefined && output.ComputeLimits !== null
            ? deserializeAws_json1_1ComputeLimits(output.ComputeLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1MetricDimension = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1MetricDimensionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MetricDimension(entry, context);
    });
};
const deserializeAws_json1_1ModifyClusterOutput = (output, context) => {
    return {
        StepConcurrencyLevel: output.StepConcurrencyLevel !== undefined && output.StepConcurrencyLevel !== null
            ? output.StepConcurrencyLevel
            : undefined,
    };
};
const deserializeAws_json1_1NotebookExecution = (output, context) => {
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
const deserializeAws_json1_1NotebookExecutionSummary = (output, context) => {
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
const deserializeAws_json1_1NotebookExecutionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NotebookExecutionSummary(entry, context);
    });
};
const deserializeAws_json1_1OnDemandCapacityReservationOptions = (output, context) => {
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
const deserializeAws_json1_1OnDemandProvisioningSpecification = (output, context) => {
    return {
        AllocationStrategy: output.AllocationStrategy !== undefined && output.AllocationStrategy !== null
            ? output.AllocationStrategy
            : undefined,
        CapacityReservationOptions: output.CapacityReservationOptions !== undefined && output.CapacityReservationOptions !== null
            ? deserializeAws_json1_1OnDemandCapacityReservationOptions(output.CapacityReservationOptions, context)
            : undefined,
    };
};
const deserializeAws_json1_1PlacementGroupConfig = (output, context) => {
    return {
        InstanceRole: output.InstanceRole !== undefined && output.InstanceRole !== null ? output.InstanceRole : undefined,
        PlacementStrategy: output.PlacementStrategy !== undefined && output.PlacementStrategy !== null
            ? output.PlacementStrategy
            : undefined,
    };
};
const deserializeAws_json1_1PlacementGroupConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};
const deserializeAws_json1_1PlacementType = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_json1_1XmlStringMaxLen256List(output.AvailabilityZones, context)
            : undefined,
    };
};
const deserializeAws_json1_1PortRange = (output, context) => {
    return {
        MaxRange: output.MaxRange !== undefined && output.MaxRange !== null ? output.MaxRange : undefined,
        MinRange: output.MinRange !== undefined && output.MinRange !== null ? output.MinRange : undefined,
    };
};
const deserializeAws_json1_1PortRanges = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PortRange(entry, context);
    });
};
const deserializeAws_json1_1PutAutoScalingPolicyOutput = (output, context) => {
    return {
        AutoScalingPolicy: output.AutoScalingPolicy !== undefined && output.AutoScalingPolicy !== null
            ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
            : undefined,
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        InstanceGroupId: output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
    };
};
const deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutManagedScalingPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1RemoveAutoScalingPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1RemoveManagedScalingPolicyOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1RemoveTagsOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1RunJobFlowOutput = (output, context) => {
    return {
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
    };
};
const deserializeAws_json1_1ScalingAction = (output, context) => {
    return {
        Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
        SimpleScalingPolicyConfiguration: output.SimpleScalingPolicyConfiguration !== undefined && output.SimpleScalingPolicyConfiguration !== null
            ? deserializeAws_json1_1SimpleScalingPolicyConfiguration(output.SimpleScalingPolicyConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1ScalingConstraints = (output, context) => {
    return {
        MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
        MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    };
};
const deserializeAws_json1_1ScalingRule = (output, context) => {
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
const deserializeAws_json1_1ScalingRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ScalingRule(entry, context);
    });
};
const deserializeAws_json1_1ScalingTrigger = (output, context) => {
    return {
        CloudWatchAlarmDefinition: output.CloudWatchAlarmDefinition !== undefined && output.CloudWatchAlarmDefinition !== null
            ? deserializeAws_json1_1CloudWatchAlarmDefinition(output.CloudWatchAlarmDefinition, context)
            : undefined,
    };
};
const deserializeAws_json1_1ScriptBootstrapActionConfig = (output, context) => {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1XmlStringList(output.Args, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
const deserializeAws_json1_1SecurityConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityConfigurationSummary(entry, context);
    });
};
const deserializeAws_json1_1SecurityConfigurationSummary = (output, context) => {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1SessionMappingDetail = (output, context) => {
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
const deserializeAws_json1_1SessionMappingSummary = (output, context) => {
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
const deserializeAws_json1_1SessionMappingSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SessionMappingSummary(entry, context);
    });
};
const deserializeAws_json1_1ShrinkPolicy = (output, context) => {
    return {
        DecommissionTimeout: output.DecommissionTimeout !== undefined && output.DecommissionTimeout !== null
            ? output.DecommissionTimeout
            : undefined,
        InstanceResizePolicy: output.InstanceResizePolicy !== undefined && output.InstanceResizePolicy !== null
            ? deserializeAws_json1_1InstanceResizePolicy(output.InstanceResizePolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1SimpleScalingPolicyConfiguration = (output, context) => {
    return {
        AdjustmentType: output.AdjustmentType !== undefined && output.AdjustmentType !== null ? output.AdjustmentType : undefined,
        CoolDown: output.CoolDown !== undefined && output.CoolDown !== null ? output.CoolDown : undefined,
        ScalingAdjustment: output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
            ? output.ScalingAdjustment
            : undefined,
    };
};
const deserializeAws_json1_1SpotProvisioningSpecification = (output, context) => {
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
const deserializeAws_json1_1StartNotebookExecutionOutput = (output, context) => {
    return {
        NotebookExecutionId: output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
            ? output.NotebookExecutionId
            : undefined,
    };
};
const deserializeAws_json1_1Step = (output, context) => {
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
const deserializeAws_json1_1StepConfig = (output, context) => {
    return {
        ActionOnFailure: output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
        HadoopJarStep: output.HadoopJarStep !== undefined && output.HadoopJarStep !== null
            ? deserializeAws_json1_1HadoopJarStepConfig(output.HadoopJarStep, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1StepDetail = (output, context) => {
    return {
        ExecutionStatusDetail: output.ExecutionStatusDetail !== undefined && output.ExecutionStatusDetail !== null
            ? deserializeAws_json1_1StepExecutionStatusDetail(output.ExecutionStatusDetail, context)
            : undefined,
        StepConfig: output.StepConfig !== undefined && output.StepConfig !== null
            ? deserializeAws_json1_1StepConfig(output.StepConfig, context)
            : undefined,
    };
};
const deserializeAws_json1_1StepDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StepDetail(entry, context);
    });
};
const deserializeAws_json1_1StepExecutionStatusDetail = (output, context) => {
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
const deserializeAws_json1_1StepIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1StepStateChangeReason = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1StepStatus = (output, context) => {
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
const deserializeAws_json1_1StepSummary = (output, context) => {
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
const deserializeAws_json1_1StepSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StepSummary(entry, context);
    });
};
const deserializeAws_json1_1StepTimeline = (output, context) => {
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
const deserializeAws_json1_1Studio = (output, context) => {
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
const deserializeAws_json1_1StudioSummary = (output, context) => {
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
const deserializeAws_json1_1StudioSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1StudioSummary(entry, context);
    });
};
const deserializeAws_json1_1SubnetIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SupportedProductsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1VolumeSpecification = (output, context) => {
    return {
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        SizeInGB: output.SizeInGB !== undefined && output.SizeInGB !== null ? output.SizeInGB : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_json1_1XmlStringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1XmlStringMaxLen256List = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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