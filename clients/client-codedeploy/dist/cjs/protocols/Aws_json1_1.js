"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1BatchGetApplicationsCommand = exports.deserializeAws_json1_1BatchGetApplicationRevisionsCommand = exports.deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = exports.serializeAws_json1_1UpdateDeploymentGroupCommand = exports.serializeAws_json1_1UpdateApplicationCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopDeploymentCommand = exports.serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = exports.serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = exports.serializeAws_json1_1RegisterOnPremisesInstanceCommand = exports.serializeAws_json1_1RegisterApplicationRevisionCommand = exports.serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListOnPremisesInstancesCommand = exports.serializeAws_json1_1ListGitHubAccountTokenNamesCommand = exports.serializeAws_json1_1ListDeploymentTargetsCommand = exports.serializeAws_json1_1ListDeploymentsCommand = exports.serializeAws_json1_1ListDeploymentInstancesCommand = exports.serializeAws_json1_1ListDeploymentGroupsCommand = exports.serializeAws_json1_1ListDeploymentConfigsCommand = exports.serializeAws_json1_1ListApplicationsCommand = exports.serializeAws_json1_1ListApplicationRevisionsCommand = exports.serializeAws_json1_1GetOnPremisesInstanceCommand = exports.serializeAws_json1_1GetDeploymentTargetCommand = exports.serializeAws_json1_1GetDeploymentInstanceCommand = exports.serializeAws_json1_1GetDeploymentGroupCommand = exports.serializeAws_json1_1GetDeploymentConfigCommand = exports.serializeAws_json1_1GetDeploymentCommand = exports.serializeAws_json1_1GetApplicationRevisionCommand = exports.serializeAws_json1_1GetApplicationCommand = exports.serializeAws_json1_1DeregisterOnPremisesInstanceCommand = exports.serializeAws_json1_1DeleteResourcesByExternalIdCommand = exports.serializeAws_json1_1DeleteGitHubAccountTokenCommand = exports.serializeAws_json1_1DeleteDeploymentGroupCommand = exports.serializeAws_json1_1DeleteDeploymentConfigCommand = exports.serializeAws_json1_1DeleteApplicationCommand = exports.serializeAws_json1_1CreateDeploymentGroupCommand = exports.serializeAws_json1_1CreateDeploymentConfigCommand = exports.serializeAws_json1_1CreateDeploymentCommand = exports.serializeAws_json1_1CreateApplicationCommand = exports.serializeAws_json1_1ContinueDeploymentCommand = exports.serializeAws_json1_1BatchGetOnPremisesInstancesCommand = exports.serializeAws_json1_1BatchGetDeploymentTargetsCommand = exports.serializeAws_json1_1BatchGetDeploymentsCommand = exports.serializeAws_json1_1BatchGetDeploymentInstancesCommand = exports.serializeAws_json1_1BatchGetDeploymentGroupsCommand = exports.serializeAws_json1_1BatchGetApplicationsCommand = exports.serializeAws_json1_1BatchGetApplicationRevisionsCommand = exports.serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = void 0;
exports.deserializeAws_json1_1UpdateDeploymentGroupCommand = exports.deserializeAws_json1_1UpdateApplicationCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopDeploymentCommand = exports.deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = exports.deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = exports.deserializeAws_json1_1RegisterOnPremisesInstanceCommand = exports.deserializeAws_json1_1RegisterApplicationRevisionCommand = exports.deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListOnPremisesInstancesCommand = exports.deserializeAws_json1_1ListGitHubAccountTokenNamesCommand = exports.deserializeAws_json1_1ListDeploymentTargetsCommand = exports.deserializeAws_json1_1ListDeploymentsCommand = exports.deserializeAws_json1_1ListDeploymentInstancesCommand = exports.deserializeAws_json1_1ListDeploymentGroupsCommand = exports.deserializeAws_json1_1ListDeploymentConfigsCommand = exports.deserializeAws_json1_1ListApplicationsCommand = exports.deserializeAws_json1_1ListApplicationRevisionsCommand = exports.deserializeAws_json1_1GetOnPremisesInstanceCommand = exports.deserializeAws_json1_1GetDeploymentTargetCommand = exports.deserializeAws_json1_1GetDeploymentInstanceCommand = exports.deserializeAws_json1_1GetDeploymentGroupCommand = exports.deserializeAws_json1_1GetDeploymentConfigCommand = exports.deserializeAws_json1_1GetDeploymentCommand = exports.deserializeAws_json1_1GetApplicationRevisionCommand = exports.deserializeAws_json1_1GetApplicationCommand = exports.deserializeAws_json1_1DeregisterOnPremisesInstanceCommand = exports.deserializeAws_json1_1DeleteResourcesByExternalIdCommand = exports.deserializeAws_json1_1DeleteGitHubAccountTokenCommand = exports.deserializeAws_json1_1DeleteDeploymentGroupCommand = exports.deserializeAws_json1_1DeleteDeploymentConfigCommand = exports.deserializeAws_json1_1DeleteApplicationCommand = exports.deserializeAws_json1_1CreateDeploymentGroupCommand = exports.deserializeAws_json1_1CreateDeploymentConfigCommand = exports.deserializeAws_json1_1CreateDeploymentCommand = exports.deserializeAws_json1_1CreateApplicationCommand = exports.deserializeAws_json1_1ContinueDeploymentCommand = exports.deserializeAws_json1_1BatchGetOnPremisesInstancesCommand = exports.deserializeAws_json1_1BatchGetDeploymentTargetsCommand = exports.deserializeAws_json1_1BatchGetDeploymentsCommand = exports.deserializeAws_json1_1BatchGetDeploymentInstancesCommand = exports.deserializeAws_json1_1BatchGetDeploymentGroupsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsToOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = serializeAws_json1_1AddTagsToOnPremisesInstancesCommand;
const serializeAws_json1_1BatchGetApplicationRevisionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetApplicationRevisions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetApplicationRevisionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetApplicationRevisionsCommand = serializeAws_json1_1BatchGetApplicationRevisionsCommand;
const serializeAws_json1_1BatchGetApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetApplications",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetApplicationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetApplicationsCommand = serializeAws_json1_1BatchGetApplicationsCommand;
const serializeAws_json1_1BatchGetDeploymentGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetDeploymentGroupsCommand = serializeAws_json1_1BatchGetDeploymentGroupsCommand;
const serializeAws_json1_1BatchGetDeploymentInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetDeploymentInstancesCommand = serializeAws_json1_1BatchGetDeploymentInstancesCommand;
const serializeAws_json1_1BatchGetDeploymentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetDeployments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetDeploymentsCommand = serializeAws_json1_1BatchGetDeploymentsCommand;
const serializeAws_json1_1BatchGetDeploymentTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentTargetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetDeploymentTargetsCommand = serializeAws_json1_1BatchGetDeploymentTargetsCommand;
const serializeAws_json1_1BatchGetOnPremisesInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.BatchGetOnPremisesInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchGetOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1BatchGetOnPremisesInstancesCommand = serializeAws_json1_1BatchGetOnPremisesInstancesCommand;
const serializeAws_json1_1ContinueDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ContinueDeployment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ContinueDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ContinueDeploymentCommand = serializeAws_json1_1ContinueDeploymentCommand;
const serializeAws_json1_1CreateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.CreateApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApplicationCommand = serializeAws_json1_1CreateApplicationCommand;
const serializeAws_json1_1CreateDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.CreateDeployment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDeploymentCommand = serializeAws_json1_1CreateDeploymentCommand;
const serializeAws_json1_1CreateDeploymentConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.CreateDeploymentConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDeploymentConfigCommand = serializeAws_json1_1CreateDeploymentConfigCommand;
const serializeAws_json1_1CreateDeploymentGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.CreateDeploymentGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDeploymentGroupCommand = serializeAws_json1_1CreateDeploymentGroupCommand;
const serializeAws_json1_1DeleteApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.DeleteApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApplicationCommand = serializeAws_json1_1DeleteApplicationCommand;
const serializeAws_json1_1DeleteDeploymentConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.DeleteDeploymentConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeploymentConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDeploymentConfigCommand = serializeAws_json1_1DeleteDeploymentConfigCommand;
const serializeAws_json1_1DeleteDeploymentGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.DeleteDeploymentGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteDeploymentGroupCommand = serializeAws_json1_1DeleteDeploymentGroupCommand;
const serializeAws_json1_1DeleteGitHubAccountTokenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.DeleteGitHubAccountToken",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGitHubAccountTokenInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGitHubAccountTokenCommand = serializeAws_json1_1DeleteGitHubAccountTokenCommand;
const serializeAws_json1_1DeleteResourcesByExternalIdCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.DeleteResourcesByExternalId",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourcesByExternalIdInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourcesByExternalIdCommand = serializeAws_json1_1DeleteResourcesByExternalIdCommand;
const serializeAws_json1_1DeregisterOnPremisesInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.DeregisterOnPremisesInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterOnPremisesInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterOnPremisesInstanceCommand = serializeAws_json1_1DeregisterOnPremisesInstanceCommand;
const serializeAws_json1_1GetApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetApplicationCommand = serializeAws_json1_1GetApplicationCommand;
const serializeAws_json1_1GetApplicationRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetApplicationRevision",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetApplicationRevisionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetApplicationRevisionCommand = serializeAws_json1_1GetApplicationRevisionCommand;
const serializeAws_json1_1GetDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetDeployment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeploymentCommand = serializeAws_json1_1GetDeploymentCommand;
const serializeAws_json1_1GetDeploymentConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetDeploymentConfig",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentConfigInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeploymentConfigCommand = serializeAws_json1_1GetDeploymentConfigCommand;
const serializeAws_json1_1GetDeploymentGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetDeploymentGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeploymentGroupCommand = serializeAws_json1_1GetDeploymentGroupCommand;
const serializeAws_json1_1GetDeploymentInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetDeploymentInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeploymentInstanceCommand = serializeAws_json1_1GetDeploymentInstanceCommand;
const serializeAws_json1_1GetDeploymentTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetDeploymentTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDeploymentTargetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDeploymentTargetCommand = serializeAws_json1_1GetDeploymentTargetCommand;
const serializeAws_json1_1GetOnPremisesInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.GetOnPremisesInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOnPremisesInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOnPremisesInstanceCommand = serializeAws_json1_1GetOnPremisesInstanceCommand;
const serializeAws_json1_1ListApplicationRevisionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListApplicationRevisions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationRevisionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationRevisionsCommand = serializeAws_json1_1ListApplicationRevisionsCommand;
const serializeAws_json1_1ListApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListApplications",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApplicationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApplicationsCommand = serializeAws_json1_1ListApplicationsCommand;
const serializeAws_json1_1ListDeploymentConfigsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListDeploymentConfigs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentConfigsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeploymentConfigsCommand = serializeAws_json1_1ListDeploymentConfigsCommand;
const serializeAws_json1_1ListDeploymentGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListDeploymentGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeploymentGroupsCommand = serializeAws_json1_1ListDeploymentGroupsCommand;
const serializeAws_json1_1ListDeploymentInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListDeploymentInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeploymentInstancesCommand = serializeAws_json1_1ListDeploymentInstancesCommand;
const serializeAws_json1_1ListDeploymentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListDeployments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeploymentsCommand = serializeAws_json1_1ListDeploymentsCommand;
const serializeAws_json1_1ListDeploymentTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListDeploymentTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDeploymentTargetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDeploymentTargetsCommand = serializeAws_json1_1ListDeploymentTargetsCommand;
const serializeAws_json1_1ListGitHubAccountTokenNamesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListGitHubAccountTokenNames",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGitHubAccountTokenNamesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGitHubAccountTokenNamesCommand = serializeAws_json1_1ListGitHubAccountTokenNamesCommand;
const serializeAws_json1_1ListOnPremisesInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListOnPremisesInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOnPremisesInstancesCommand = serializeAws_json1_1ListOnPremisesInstancesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand;
const serializeAws_json1_1RegisterApplicationRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.RegisterApplicationRevision",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterApplicationRevisionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterApplicationRevisionCommand = serializeAws_json1_1RegisterApplicationRevisionCommand;
const serializeAws_json1_1RegisterOnPremisesInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.RegisterOnPremisesInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterOnPremisesInstanceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterOnPremisesInstanceCommand = serializeAws_json1_1RegisterOnPremisesInstanceCommand;
const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand;
const serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand;
const serializeAws_json1_1StopDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.StopDeployment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDeploymentInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopDeploymentCommand = serializeAws_json1_1StopDeploymentCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.UpdateApplication",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApplicationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApplicationCommand = serializeAws_json1_1UpdateApplicationCommand;
const serializeAws_json1_1UpdateDeploymentGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CodeDeploy_20141006.UpdateDeploymentGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDeploymentGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDeploymentGroupCommand = serializeAws_json1_1UpdateDeploymentGroupCommand;
const deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand;
const deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstanceLimitExceededException":
        case "com.amazonaws.codedeploy#InstanceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNotRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.codedeploy#TagLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = {
                ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetApplicationRevisionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetApplicationRevisionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetApplicationRevisionsCommand = deserializeAws_json1_1BatchGetApplicationRevisionsCommand;
const deserializeAws_json1_1BatchGetApplicationRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetApplicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetApplicationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetApplicationsCommand = deserializeAws_json1_1BatchGetApplicationsCommand;
const deserializeAws_json1_1BatchGetApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetDeploymentGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetDeploymentGroupsCommand = deserializeAws_json1_1BatchGetDeploymentGroupsCommand;
const deserializeAws_json1_1BatchGetDeploymentGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetDeploymentInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentInstancesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetDeploymentInstancesCommand = deserializeAws_json1_1BatchGetDeploymentInstancesCommand;
const deserializeAws_json1_1BatchGetDeploymentInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceIdRequiredException":
        case "com.amazonaws.codedeploy#InstanceIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = {
                ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetDeploymentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetDeploymentsCommand = deserializeAws_json1_1BatchGetDeploymentsCommand;
const deserializeAws_json1_1BatchGetDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetDeploymentTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetDeploymentTargetsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetDeploymentTargetsCommand = deserializeAws_json1_1BatchGetDeploymentTargetsCommand;
const deserializeAws_json1_1BatchGetDeploymentTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentTargetDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentTargetIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentTargetListSizeExceededException":
        case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException":
            response = {
                ...(await deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceDoesNotExistException":
        case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentTargetIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1BatchGetOnPremisesInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchGetOnPremisesInstancesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1BatchGetOnPremisesInstancesCommand = deserializeAws_json1_1BatchGetOnPremisesInstancesCommand;
const deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchLimitExceededException":
        case "com.amazonaws.codedeploy#BatchLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ContinueDeploymentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ContinueDeploymentCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ContinueDeploymentCommand = deserializeAws_json1_1ContinueDeploymentCommand;
const deserializeAws_json1_1ContinueDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentAlreadyCompletedException":
        case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIsNotInReadyStateException":
        case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentStatusException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentWaitTypeException":
        case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApplicationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApplicationCommand = deserializeAws_json1_1CreateApplicationCommand;
const deserializeAws_json1_1CreateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationAlreadyExistsException":
        case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationLimitExceededException":
        case "com.amazonaws.codedeploy#ApplicationLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ApplicationLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = {
                ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDeploymentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDeploymentCommand = deserializeAws_json1_1CreateDeploymentCommand;
const deserializeAws_json1_1CreateDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentLimitExceededException":
        case "com.amazonaws.codedeploy#DeploymentLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DeploymentLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DescriptionTooLongException":
        case "com.amazonaws.codedeploy#DescriptionTooLongException":
            response = {
                ...(await deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutoRollbackConfigException":
        case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutoScalingGroupException":
        case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFileExistsBehaviorException":
        case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException":
            response = {
                ...(await deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGitHubAccountTokenException":
        case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidIgnoreApplicationStopFailuresValueException":
        case "com.amazonaws.codedeploy#InvalidIgnoreApplicationStopFailuresValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerInfoException":
        case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
            response = {
                ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetInstancesException":
        case "com.amazonaws.codedeploy#InvalidTargetInstancesException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetInstancesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrafficRoutingConfigurationException":
        case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUpdateOutdatedInstancesOnlyValueException":
        case "com.amazonaws.codedeploy#InvalidUpdateOutdatedInstancesOnlyValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionDoesNotExistException":
        case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codedeploy#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDeploymentConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDeploymentConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentConfigOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDeploymentConfigCommand = deserializeAws_json1_1CreateDeploymentConfigCommand;
const deserializeAws_json1_1CreateDeploymentConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentConfigAlreadyExistsException":
        case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigLimitExceededException":
        case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = {
                ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMinimumHealthyHostValueException":
        case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException":
            response = {
                ...(await deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrafficRoutingConfigurationException":
        case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateDeploymentGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDeploymentGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateDeploymentGroupCommand = deserializeAws_json1_1CreateDeploymentGroupCommand;
const deserializeAws_json1_1CreateDeploymentGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlarmsLimitExceededException":
        case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupAlreadyExistsException":
        case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupLimitExceededException":
        case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ECSServiceMappingLimitExceededException":
        case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAlarmConfigException":
        case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutoRollbackConfigException":
        case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutoScalingGroupException":
        case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBlueGreenDeploymentConfigurationException":
        case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentStyleException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEC2TagCombinationException":
        case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEC2TagException":
        case "com.amazonaws.codedeploy#InvalidEC2TagException":
            response = {
                ...(await deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidECSServiceException":
        case "com.amazonaws.codedeploy#InvalidECSServiceException":
            response = {
                ...(await deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codedeploy#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerInfoException":
        case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
            response = {
                ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOnPremisesTagCombinationException":
        case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetGroupPairException":
        case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrafficRoutingConfigurationException":
        case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTriggerConfigException":
        case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LifecycleHookLimitExceededException":
        case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RoleRequiredException":
        case "com.amazonaws.codedeploy#RoleRequiredException":
            response = {
                ...(await deserializeAws_json1_1RoleRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagSetListLimitExceededException":
        case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codedeploy#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TriggerTargetsLimitExceededException":
        case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApplicationCommand = deserializeAws_json1_1DeleteApplicationCommand;
const deserializeAws_json1_1DeleteApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDeploymentConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDeploymentConfigCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDeploymentConfigCommand = deserializeAws_json1_1DeleteDeploymentConfigCommand;
const deserializeAws_json1_1DeleteDeploymentConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentConfigInUseException":
        case "com.amazonaws.codedeploy#DeploymentConfigInUseException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.codedeploy#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteDeploymentGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDeploymentGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteDeploymentGroupCommand = deserializeAws_json1_1DeleteDeploymentGroupCommand;
const deserializeAws_json1_1DeleteDeploymentGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteGitHubAccountTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGitHubAccountTokenOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGitHubAccountTokenCommand = deserializeAws_json1_1DeleteGitHubAccountTokenCommand;
const deserializeAws_json1_1DeleteGitHubAccountTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GitHubAccountTokenDoesNotExistException":
        case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GitHubAccountTokenNameRequiredException":
        case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGitHubAccountTokenNameException":
        case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.codedeploy#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceValidationException":
        case "com.amazonaws.codedeploy#ResourceValidationException":
            response = {
                ...(await deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResourcesByExternalIdCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourcesByExternalIdCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourcesByExternalIdOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourcesByExternalIdCommand = deserializeAws_json1_1DeleteResourcesByExternalIdCommand;
const deserializeAws_json1_1DeleteResourcesByExternalIdCommandError = async (output, context) => {
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
const deserializeAws_json1_1DeregisterOnPremisesInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterOnPremisesInstanceCommand = deserializeAws_json1_1DeregisterOnPremisesInstanceCommand;
const deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetApplicationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetApplicationCommand = deserializeAws_json1_1GetApplicationCommand;
const deserializeAws_json1_1GetApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetApplicationRevisionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetApplicationRevisionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetApplicationRevisionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetApplicationRevisionCommand = deserializeAws_json1_1GetApplicationRevisionCommand;
const deserializeAws_json1_1GetApplicationRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionDoesNotExistException":
        case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDeploymentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeploymentCommand = deserializeAws_json1_1GetDeploymentCommand;
const deserializeAws_json1_1GetDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDeploymentConfigCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeploymentConfigCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentConfigOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeploymentConfigCommand = deserializeAws_json1_1GetDeploymentConfigCommand;
const deserializeAws_json1_1GetDeploymentConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = {
                ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDeploymentGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeploymentGroupCommand = deserializeAws_json1_1GetDeploymentGroupCommand;
const deserializeAws_json1_1GetDeploymentGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDeploymentInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeploymentInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentInstanceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeploymentInstanceCommand = deserializeAws_json1_1GetDeploymentInstanceCommand;
const deserializeAws_json1_1GetDeploymentInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceDoesNotExistException":
        case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceIdRequiredException":
        case "com.amazonaws.codedeploy#InstanceIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = {
                ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDeploymentTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDeploymentTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDeploymentTargetOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDeploymentTargetCommand = deserializeAws_json1_1GetDeploymentTargetCommand;
const deserializeAws_json1_1GetDeploymentTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentTargetDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentTargetIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentTargetIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOnPremisesInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOnPremisesInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOnPremisesInstanceOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOnPremisesInstanceCommand = deserializeAws_json1_1GetOnPremisesInstanceCommand;
const deserializeAws_json1_1GetOnPremisesInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNotRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListApplicationRevisionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApplicationRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationRevisionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationRevisionsCommand = deserializeAws_json1_1ListApplicationRevisionsCommand;
const deserializeAws_json1_1ListApplicationRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BucketNameFilterRequiredException":
        case "com.amazonaws.codedeploy#BucketNameFilterRequiredException":
            response = {
                ...(await deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBucketNameFilterException":
        case "com.amazonaws.codedeploy#InvalidBucketNameFilterException":
            response = {
                ...(await deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeployedStateFilterException":
        case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKeyPrefixFilterException":
        case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException":
            response = {
                ...(await deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSortByException":
        case "com.amazonaws.codedeploy#InvalidSortByException":
            response = {
                ...(await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSortOrderException":
        case "com.amazonaws.codedeploy#InvalidSortOrderException":
            response = {
                ...(await deserializeAws_json1_1InvalidSortOrderExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListApplicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApplicationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApplicationsCommand = deserializeAws_json1_1ListApplicationsCommand;
const deserializeAws_json1_1ListApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDeploymentConfigsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDeploymentConfigsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentConfigsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeploymentConfigsCommand = deserializeAws_json1_1ListDeploymentConfigsCommand;
const deserializeAws_json1_1ListDeploymentConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDeploymentGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDeploymentGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeploymentGroupsCommand = deserializeAws_json1_1ListDeploymentGroupsCommand;
const deserializeAws_json1_1ListDeploymentGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDeploymentInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDeploymentInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentInstancesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeploymentInstancesCommand = deserializeAws_json1_1ListDeploymentInstancesCommand;
const deserializeAws_json1_1ListDeploymentInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidComputePlatformException":
        case "com.amazonaws.codedeploy#InvalidComputePlatformException":
            response = {
                ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceStatusException":
        case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetFilterNameException":
        case "com.amazonaws.codedeploy#InvalidTargetFilterNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDeploymentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeploymentsCommand = deserializeAws_json1_1ListDeploymentsCommand;
const deserializeAws_json1_1ListDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentStatusException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExternalIdException":
        case "com.amazonaws.codedeploy#InvalidExternalIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidExternalIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codedeploy#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTimeRangeException":
        case "com.amazonaws.codedeploy#InvalidTimeRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDeploymentTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDeploymentTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDeploymentTargetsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDeploymentTargetsCommand = deserializeAws_json1_1ListDeploymentTargetsCommand;
const deserializeAws_json1_1ListDeploymentTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceStatusException":
        case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceTypeException":
        case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListGitHubAccountTokenNamesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGitHubAccountTokenNamesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGitHubAccountTokenNamesCommand = deserializeAws_json1_1ListGitHubAccountTokenNamesCommand;
const deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.codedeploy#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceValidationException":
        case "com.amazonaws.codedeploy#ResourceValidationException":
            response = {
                ...(await deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListOnPremisesInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOnPremisesInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOnPremisesInstancesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOnPremisesInstancesCommand = deserializeAws_json1_1ListOnPremisesInstancesCommand;
const deserializeAws_json1_1ListOnPremisesInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.codedeploy#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRegistrationStatusException":
        case "com.amazonaws.codedeploy#InvalidRegistrationStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFilterException":
        case "com.amazonaws.codedeploy#InvalidTagFilterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagFilterExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
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
        case "ArnNotSupportedException":
        case "com.amazonaws.codedeploy#ArnNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.codedeploy#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codedeploy#ResourceArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand;
const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLifecycleEventHookExecutionIdException":
        case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLifecycleEventHookExecutionStatusException":
        case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LifecycleEventAlreadyCompletedException":
        case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException":
            response = {
                ...(await deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterApplicationRevisionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterApplicationRevisionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterApplicationRevisionCommand = deserializeAws_json1_1RegisterApplicationRevisionCommand;
const deserializeAws_json1_1RegisterApplicationRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DescriptionTooLongException":
        case "com.amazonaws.codedeploy#DescriptionTooLongException":
            response = {
                ...(await deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRevisionException":
        case "com.amazonaws.codedeploy#InvalidRevisionException":
            response = {
                ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RevisionRequiredException":
        case "com.amazonaws.codedeploy#RevisionRequiredException":
            response = {
                ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterOnPremisesInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterOnPremisesInstanceCommand = deserializeAws_json1_1RegisterOnPremisesInstanceCommand;
const deserializeAws_json1_1RegisterOnPremisesInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IamArnRequiredException":
        case "com.amazonaws.codedeploy#IamArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1IamArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IamSessionArnAlreadyRegisteredException":
        case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException":
            response = {
                ...(await deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IamUserArnAlreadyRegisteredException":
        case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException":
            response = {
                ...(await deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IamUserArnRequiredException":
        case "com.amazonaws.codedeploy#IamUserArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1IamUserArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNameAlreadyRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidIamSessionArnException":
        case "com.amazonaws.codedeploy#InvalidIamSessionArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidIamSessionArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidIamUserArnException":
        case "com.amazonaws.codedeploy#InvalidIamUserArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidIamUserArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MultipleIamArnsProvidedException":
        case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException":
            response = {
                ...(await deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand;
const deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstanceLimitExceededException":
        case "com.amazonaws.codedeploy#InstanceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNameRequiredException":
        case "com.amazonaws.codedeploy#InstanceNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceNotRegisteredException":
        case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
            response = {
                ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInstanceNameException":
        case "com.amazonaws.codedeploy#InvalidInstanceNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.codedeploy#TagLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = {
                ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand;
const deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentAlreadyCompletedException":
        case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentNotStartedException":
        case "com.amazonaws.codedeploy#DeploymentNotStartedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopDeploymentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopDeploymentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopDeploymentOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopDeploymentCommand = deserializeAws_json1_1StopDeploymentCommand;
const deserializeAws_json1_1StopDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeploymentAlreadyCompletedException":
        case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
            response = {
                ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentIdRequiredException":
        case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentIdException":
        case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedActionForDeploymentTypeException":
        case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1TagResourceOutput(data, context);
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
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ArnNotSupportedException":
        case "com.amazonaws.codedeploy#ArnNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.codedeploy#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codedeploy#ResourceArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = {
                ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1UntagResourceOutput(data, context);
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
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ArnNotSupportedException":
        case "com.amazonaws.codedeploy#ArnNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArnException":
        case "com.amazonaws.codedeploy#InvalidArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagsToAddException":
        case "com.amazonaws.codedeploy#InvalidTagsToAddException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnRequiredException":
        case "com.amazonaws.codedeploy#ResourceArnRequiredException":
            response = {
                ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagRequiredException":
        case "com.amazonaws.codedeploy#TagRequiredException":
            response = {
                ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApplicationCommand = deserializeAws_json1_1UpdateApplicationCommand;
const deserializeAws_json1_1UpdateApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ApplicationAlreadyExistsException":
        case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDeploymentGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDeploymentGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDeploymentGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDeploymentGroupCommand = deserializeAws_json1_1UpdateDeploymentGroupCommand;
const deserializeAws_json1_1UpdateDeploymentGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlarmsLimitExceededException":
        case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationDoesNotExistException":
        case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ApplicationNameRequiredException":
        case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentConfigDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupAlreadyExistsException":
        case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupDoesNotExistException":
        case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DeploymentGroupNameRequiredException":
        case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
            response = {
                ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ECSServiceMappingLimitExceededException":
        case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAlarmConfigException":
        case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidApplicationNameException":
        case "com.amazonaws.codedeploy#InvalidApplicationNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutoRollbackConfigException":
        case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAutoScalingGroupException":
        case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
            response = {
                ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidBlueGreenDeploymentConfigurationException":
        case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentConfigNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentGroupNameException":
        case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDeploymentStyleException":
        case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
            response = {
                ...(await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEC2TagCombinationException":
        case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEC2TagException":
        case "com.amazonaws.codedeploy#InvalidEC2TagException":
            response = {
                ...(await deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidECSServiceException":
        case "com.amazonaws.codedeploy#InvalidECSServiceException":
            response = {
                ...(await deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.codedeploy#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLoadBalancerInfoException":
        case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
            response = {
                ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOnPremisesTagCombinationException":
        case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRoleException":
        case "com.amazonaws.codedeploy#InvalidRoleException":
            response = {
                ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagException":
        case "com.amazonaws.codedeploy#InvalidTagException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTargetGroupPairException":
        case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
            response = {
                ...(await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrafficRoutingConfigurationException":
        case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTriggerConfigException":
        case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
            response = {
                ...(await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LifecycleHookLimitExceededException":
        case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagSetListLimitExceededException":
        case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codedeploy#ThrottlingException":
            response = {
                ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TriggerTargetsLimitExceededException":
        case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AlarmsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlarmsLimitExceededException(body, context);
    const contents = {
        name: "AlarmsLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationAlreadyExistsException(body, context);
    const contents = {
        name: "ApplicationAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationDoesNotExistException(body, context);
    const contents = {
        name: "ApplicationDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApplicationLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationLimitExceededException(body, context);
    const contents = {
        name: "ApplicationLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ApplicationNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ApplicationNameRequiredException(body, context);
    const contents = {
        name: "ApplicationNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ArnNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ArnNotSupportedException(body, context);
    const contents = {
        name: "ArnNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BatchLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BatchLimitExceededException(body, context);
    const contents = {
        name: "BatchLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BucketNameFilterRequiredException(body, context);
    const contents = {
        name: "BucketNameFilterRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentAlreadyCompletedException(body, context);
    const contents = {
        name: "DeploymentAlreadyCompletedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigAlreadyExistsException(body, context);
    const contents = {
        name: "DeploymentConfigAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigDoesNotExistException(body, context);
    const contents = {
        name: "DeploymentConfigDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentConfigInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigInUseException(body, context);
    const contents = {
        name: "DeploymentConfigInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigLimitExceededException(body, context);
    const contents = {
        name: "DeploymentConfigLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentConfigNameRequiredException(body, context);
    const contents = {
        name: "DeploymentConfigNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentDoesNotExistException(body, context);
    const contents = {
        name: "DeploymentDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupAlreadyExistsException(body, context);
    const contents = {
        name: "DeploymentGroupAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupDoesNotExistException(body, context);
    const contents = {
        name: "DeploymentGroupDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupLimitExceededException(body, context);
    const contents = {
        name: "DeploymentGroupLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentGroupNameRequiredException(body, context);
    const contents = {
        name: "DeploymentGroupNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentIdRequiredException(body, context);
    const contents = {
        name: "DeploymentIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentIsNotInReadyStateException(body, context);
    const contents = {
        name: "DeploymentIsNotInReadyStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentLimitExceededException(body, context);
    const contents = {
        name: "DeploymentLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentNotStartedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentNotStartedException(body, context);
    const contents = {
        name: "DeploymentNotStartedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentTargetDoesNotExistException(body, context);
    const contents = {
        name: "DeploymentTargetDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentTargetIdRequiredException(body, context);
    const contents = {
        name: "DeploymentTargetIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DeploymentTargetListSizeExceededException(body, context);
    const contents = {
        name: "DeploymentTargetListSizeExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DescriptionTooLongExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DescriptionTooLongException(body, context);
    const contents = {
        name: "DescriptionTooLongException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ECSServiceMappingLimitExceededException(body, context);
    const contents = {
        name: "ECSServiceMappingLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GitHubAccountTokenDoesNotExistException(body, context);
    const contents = {
        name: "GitHubAccountTokenDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GitHubAccountTokenNameRequiredException(body, context);
    const contents = {
        name: "GitHubAccountTokenNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IamArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamArnRequiredException(body, context);
    const contents = {
        name: "IamArnRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamSessionArnAlreadyRegisteredException(body, context);
    const contents = {
        name: "IamSessionArnAlreadyRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamUserArnAlreadyRegisteredException(body, context);
    const contents = {
        name: "IamUserArnAlreadyRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IamUserArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IamUserArnRequiredException(body, context);
    const contents = {
        name: "IamUserArnRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceDoesNotExistException(body, context);
    const contents = {
        name: "InstanceDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceIdRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceIdRequiredException(body, context);
    const contents = {
        name: "InstanceIdRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceLimitExceededException(body, context);
    const contents = {
        name: "InstanceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNameAlreadyRegisteredException(body, context);
    const contents = {
        name: "InstanceNameAlreadyRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceNameRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNameRequiredException(body, context);
    const contents = {
        name: "InstanceNameRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InstanceNotRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InstanceNotRegisteredException(body, context);
    const contents = {
        name: "InstanceNotRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAlarmConfigExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAlarmConfigException(body, context);
    const contents = {
        name: "InvalidAlarmConfigException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidApplicationNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidApplicationNameException(body, context);
    const contents = {
        name: "InvalidApplicationNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = {
        name: "InvalidArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutoRollbackConfigException(body, context);
    const contents = {
        name: "InvalidAutoRollbackConfigException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAutoScalingGroupException(body, context);
    const contents = {
        name: "InvalidAutoScalingGroupException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException(body, context);
    const contents = {
        name: "InvalidBlueGreenDeploymentConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidBucketNameFilterException(body, context);
    const contents = {
        name: "InvalidBucketNameFilterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidComputePlatformExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidComputePlatformException(body, context);
    const contents = {
        name: "InvalidComputePlatformException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeployedStateFilterException(body, context);
    const contents = {
        name: "InvalidDeployedStateFilterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentConfigNameException(body, context);
    const contents = {
        name: "InvalidDeploymentConfigNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentGroupNameException(body, context);
    const contents = {
        name: "InvalidDeploymentGroupNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentIdException(body, context);
    const contents = {
        name: "InvalidDeploymentIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentInstanceTypeException(body, context);
    const contents = {
        name: "InvalidDeploymentInstanceTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentStatusException(body, context);
    const contents = {
        name: "InvalidDeploymentStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentStyleException(body, context);
    const contents = {
        name: "InvalidDeploymentStyleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentTargetIdException(body, context);
    const contents = {
        name: "InvalidDeploymentTargetIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidDeploymentWaitTypeException(body, context);
    const contents = {
        name: "InvalidDeploymentWaitTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEC2TagCombinationException(body, context);
    const contents = {
        name: "InvalidEC2TagCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEC2TagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEC2TagException(body, context);
    const contents = {
        name: "InvalidEC2TagException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidECSServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidECSServiceException(body, context);
    const contents = {
        name: "InvalidECSServiceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidExternalIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidExternalIdException(body, context);
    const contents = {
        name: "InvalidExternalIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFileExistsBehaviorException(body, context);
    const contents = {
        name: "InvalidFileExistsBehaviorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGitHubAccountTokenException(body, context);
    const contents = {
        name: "InvalidGitHubAccountTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGitHubAccountTokenNameException(body, context);
    const contents = {
        name: "InvalidGitHubAccountTokenNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidIamSessionArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIamSessionArnException(body, context);
    const contents = {
        name: "InvalidIamSessionArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidIamUserArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIamUserArnException(body, context);
    const contents = {
        name: "InvalidIamUserArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException(body, context);
    const contents = {
        name: "InvalidIgnoreApplicationStopFailuresValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInstanceNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceNameException(body, context);
    const contents = {
        name: "InvalidInstanceNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInstanceStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceStatusException(body, context);
    const contents = {
        name: "InvalidInstanceStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInstanceTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInstanceTypeException(body, context);
    const contents = {
        name: "InvalidInstanceTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKeyPrefixFilterException(body, context);
    const contents = {
        name: "InvalidKeyPrefixFilterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException(body, context);
    const contents = {
        name: "InvalidLifecycleEventHookExecutionIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException(body, context);
    const contents = {
        name: "InvalidLifecycleEventHookExecutionStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLoadBalancerInfoException(body, context);
    const contents = {
        name: "InvalidLoadBalancerInfoException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMinimumHealthyHostValueException(body, context);
    const contents = {
        name: "InvalidMinimumHealthyHostValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOnPremisesTagCombinationException(body, context);
    const contents = {
        name: "InvalidOnPremisesTagCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = {
        name: "InvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRegistrationStatusException(body, context);
    const contents = {
        name: "InvalidRegistrationStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRevisionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRevisionException(body, context);
    const contents = {
        name: "InvalidRevisionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRoleException(body, context);
    const contents = {
        name: "InvalidRoleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSortByExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSortByException(body, context);
    const contents = {
        name: "InvalidSortByException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSortOrderExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSortOrderException(body, context);
    const contents = {
        name: "InvalidSortOrderException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagException(body, context);
    const contents = {
        name: "InvalidTagException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagFilterException(body, context);
    const contents = {
        name: "InvalidTagFilterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagsToAddExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagsToAddException(body, context);
    const contents = {
        name: "InvalidTagsToAddException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetFilterNameException(body, context);
    const contents = {
        name: "InvalidTargetFilterNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetGroupPairException(body, context);
    const contents = {
        name: "InvalidTargetGroupPairException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTargetInstancesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTargetInstancesException(body, context);
    const contents = {
        name: "InvalidTargetInstancesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
    const contents = {
        name: "InvalidTimeRangeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTrafficRoutingConfigurationException(body, context);
    const contents = {
        name: "InvalidTrafficRoutingConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTriggerConfigExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTriggerConfigException(body, context);
    const contents = {
        name: "InvalidTriggerConfigException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException(body, context);
    const contents = {
        name: "InvalidUpdateOutdatedInstancesOnlyValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecycleEventAlreadyCompletedException(body, context);
    const contents = {
        name: "LifecycleEventAlreadyCompletedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LifecycleHookLimitExceededException(body, context);
    const contents = {
        name: "LifecycleHookLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MultipleIamArnsProvidedException(body, context);
    const contents = {
        name: "MultipleIamArnsProvidedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
    const contents = {
        name: "OperationNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceArnRequiredException(body, context);
    const contents = {
        name: "ResourceArnRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceValidationException(body, context);
    const contents = {
        name: "ResourceValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RevisionDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionDoesNotExistException(body, context);
    const contents = {
        name: "RevisionDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RevisionRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RevisionRequiredException(body, context);
    const contents = {
        name: "RevisionRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RoleRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RoleRequiredException(body, context);
    const contents = {
        name: "RoleRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagLimitExceededException(body, context);
    const contents = {
        name: "TagLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagRequiredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagRequiredException(body, context);
    const contents = {
        name: "TagRequiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagSetListLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagSetListLimitExceededException(body, context);
    const contents = {
        name: "TagSetListLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TriggerTargetsLimitExceededException(body, context);
    const contents = {
        name: "TriggerTargetsLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedActionForDeploymentTypeException(body, context);
    const contents = {
        name: "UnsupportedActionForDeploymentTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddTagsToOnPremisesInstancesInput = (input, context) => {
    return {
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && {
            instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1Alarm = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1AlarmConfiguration = (input, context) => {
    return {
        ...(input.alarms !== undefined &&
            input.alarms !== null && { alarms: serializeAws_json1_1AlarmList(input.alarms, context) }),
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
        ...(input.ignorePollAlarmFailure !== undefined &&
            input.ignorePollAlarmFailure !== null && { ignorePollAlarmFailure: input.ignorePollAlarmFailure }),
    };
};
const serializeAws_json1_1AlarmList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Alarm(entry, context);
    });
};
const serializeAws_json1_1ApplicationsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AppSpecContent = (input, context) => {
    return {
        ...(input.content !== undefined && input.content !== null && { content: input.content }),
        ...(input.sha256 !== undefined && input.sha256 !== null && { sha256: input.sha256 }),
    };
};
const serializeAws_json1_1AutoRollbackConfiguration = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
        ...(input.events !== undefined &&
            input.events !== null && { events: serializeAws_json1_1AutoRollbackEventsList(input.events, context) }),
    };
};
const serializeAws_json1_1AutoRollbackEventsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AutoScalingGroupNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1BatchGetApplicationRevisionsInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.revisions !== undefined &&
            input.revisions !== null && { revisions: serializeAws_json1_1RevisionLocationList(input.revisions, context) }),
    };
};
const serializeAws_json1_1BatchGetApplicationsInput = (input, context) => {
    return {
        ...(input.applicationNames !== undefined &&
            input.applicationNames !== null && {
            applicationNames: serializeAws_json1_1ApplicationsList(input.applicationNames, context),
        }),
    };
};
const serializeAws_json1_1BatchGetDeploymentGroupsInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.deploymentGroupNames !== undefined &&
            input.deploymentGroupNames !== null && {
            deploymentGroupNames: serializeAws_json1_1DeploymentGroupsList(input.deploymentGroupNames, context),
        }),
    };
};
const serializeAws_json1_1BatchGetDeploymentInstancesInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.instanceIds !== undefined &&
            input.instanceIds !== null && { instanceIds: serializeAws_json1_1InstancesList(input.instanceIds, context) }),
    };
};
const serializeAws_json1_1BatchGetDeploymentsInput = (input, context) => {
    return {
        ...(input.deploymentIds !== undefined &&
            input.deploymentIds !== null && {
            deploymentIds: serializeAws_json1_1DeploymentsList(input.deploymentIds, context),
        }),
    };
};
const serializeAws_json1_1BatchGetDeploymentTargetsInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.targetIds !== undefined &&
            input.targetIds !== null && { targetIds: serializeAws_json1_1TargetIdList(input.targetIds, context) }),
    };
};
const serializeAws_json1_1BatchGetOnPremisesInstancesInput = (input, context) => {
    return {
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && {
            instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
        }),
    };
};
const serializeAws_json1_1BlueGreenDeploymentConfiguration = (input, context) => {
    return {
        ...(input.deploymentReadyOption !== undefined &&
            input.deploymentReadyOption !== null && {
            deploymentReadyOption: serializeAws_json1_1DeploymentReadyOption(input.deploymentReadyOption, context),
        }),
        ...(input.greenFleetProvisioningOption !== undefined &&
            input.greenFleetProvisioningOption !== null && {
            greenFleetProvisioningOption: serializeAws_json1_1GreenFleetProvisioningOption(input.greenFleetProvisioningOption, context),
        }),
        ...(input.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
            input.terminateBlueInstancesOnDeploymentSuccess !== null && {
            terminateBlueInstancesOnDeploymentSuccess: serializeAws_json1_1BlueInstanceTerminationOption(input.terminateBlueInstancesOnDeploymentSuccess, context),
        }),
    };
};
const serializeAws_json1_1BlueInstanceTerminationOption = (input, context) => {
    return {
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
        ...(input.terminationWaitTimeInMinutes !== undefined &&
            input.terminationWaitTimeInMinutes !== null && {
            terminationWaitTimeInMinutes: input.terminationWaitTimeInMinutes,
        }),
    };
};
const serializeAws_json1_1ContinueDeploymentInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.deploymentWaitType !== undefined &&
            input.deploymentWaitType !== null && { deploymentWaitType: input.deploymentWaitType }),
    };
};
const serializeAws_json1_1CreateApplicationInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.computePlatform !== undefined &&
            input.computePlatform !== null && { computePlatform: input.computePlatform }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1CreateDeploymentConfigInput = (input, context) => {
    return {
        ...(input.computePlatform !== undefined &&
            input.computePlatform !== null && { computePlatform: input.computePlatform }),
        ...(input.deploymentConfigName !== undefined &&
            input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
        ...(input.minimumHealthyHosts !== undefined &&
            input.minimumHealthyHosts !== null && {
            minimumHealthyHosts: serializeAws_json1_1MinimumHealthyHosts(input.minimumHealthyHosts, context),
        }),
        ...(input.trafficRoutingConfig !== undefined &&
            input.trafficRoutingConfig !== null && {
            trafficRoutingConfig: serializeAws_json1_1TrafficRoutingConfig(input.trafficRoutingConfig, context),
        }),
    };
};
const serializeAws_json1_1CreateDeploymentGroupInput = (input, context) => {
    return {
        ...(input.alarmConfiguration !== undefined &&
            input.alarmConfiguration !== null && {
            alarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context),
        }),
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.autoRollbackConfiguration !== undefined &&
            input.autoRollbackConfiguration !== null && {
            autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
        }),
        ...(input.autoScalingGroups !== undefined &&
            input.autoScalingGroups !== null && {
            autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
        }),
        ...(input.blueGreenDeploymentConfiguration !== undefined &&
            input.blueGreenDeploymentConfiguration !== null && {
            blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(input.blueGreenDeploymentConfiguration, context),
        }),
        ...(input.deploymentConfigName !== undefined &&
            input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
        ...(input.deploymentGroupName !== undefined &&
            input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
        ...(input.deploymentStyle !== undefined &&
            input.deploymentStyle !== null && {
            deploymentStyle: serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context),
        }),
        ...(input.ec2TagFilters !== undefined &&
            input.ec2TagFilters !== null && {
            ec2TagFilters: serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context),
        }),
        ...(input.ec2TagSet !== undefined &&
            input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) }),
        ...(input.ecsServices !== undefined &&
            input.ecsServices !== null && { ecsServices: serializeAws_json1_1ECSServiceList(input.ecsServices, context) }),
        ...(input.loadBalancerInfo !== undefined &&
            input.loadBalancerInfo !== null && {
            loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context),
        }),
        ...(input.onPremisesInstanceTagFilters !== undefined &&
            input.onPremisesInstanceTagFilters !== null && {
            onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context),
        }),
        ...(input.onPremisesTagSet !== undefined &&
            input.onPremisesTagSet !== null && {
            onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context),
        }),
        ...(input.outdatedInstancesStrategy !== undefined &&
            input.outdatedInstancesStrategy !== null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy }),
        ...(input.serviceRoleArn !== undefined &&
            input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
        ...(input.triggerConfigurations !== undefined &&
            input.triggerConfigurations !== null && {
            triggerConfigurations: serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context),
        }),
    };
};
const serializeAws_json1_1CreateDeploymentInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.autoRollbackConfiguration !== undefined &&
            input.autoRollbackConfiguration !== null && {
            autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
        }),
        ...(input.deploymentConfigName !== undefined &&
            input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
        ...(input.deploymentGroupName !== undefined &&
            input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.fileExistsBehavior !== undefined &&
            input.fileExistsBehavior !== null && { fileExistsBehavior: input.fileExistsBehavior }),
        ...(input.ignoreApplicationStopFailures !== undefined &&
            input.ignoreApplicationStopFailures !== null && {
            ignoreApplicationStopFailures: input.ignoreApplicationStopFailures,
        }),
        ...(input.revision !== undefined &&
            input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }),
        ...(input.targetInstances !== undefined &&
            input.targetInstances !== null && {
            targetInstances: serializeAws_json1_1TargetInstances(input.targetInstances, context),
        }),
        ...(input.updateOutdatedInstancesOnly !== undefined &&
            input.updateOutdatedInstancesOnly !== null && { updateOutdatedInstancesOnly: input.updateOutdatedInstancesOnly }),
    };
};
const serializeAws_json1_1DeleteApplicationInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
    };
};
const serializeAws_json1_1DeleteDeploymentConfigInput = (input, context) => {
    return {
        ...(input.deploymentConfigName !== undefined &&
            input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
    };
};
const serializeAws_json1_1DeleteDeploymentGroupInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.deploymentGroupName !== undefined &&
            input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
    };
};
const serializeAws_json1_1DeleteGitHubAccountTokenInput = (input, context) => {
    return {
        ...(input.tokenName !== undefined && input.tokenName !== null && { tokenName: input.tokenName }),
    };
};
const serializeAws_json1_1DeleteResourcesByExternalIdInput = (input, context) => {
    return {
        ...(input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }),
    };
};
const serializeAws_json1_1DeploymentGroupsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeploymentReadyOption = (input, context) => {
    return {
        ...(input.actionOnTimeout !== undefined &&
            input.actionOnTimeout !== null && { actionOnTimeout: input.actionOnTimeout }),
        ...(input.waitTimeInMinutes !== undefined &&
            input.waitTimeInMinutes !== null && { waitTimeInMinutes: input.waitTimeInMinutes }),
    };
};
const serializeAws_json1_1DeploymentsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeploymentStatusList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeploymentStyle = (input, context) => {
    return {
        ...(input.deploymentOption !== undefined &&
            input.deploymentOption !== null && { deploymentOption: input.deploymentOption }),
        ...(input.deploymentType !== undefined &&
            input.deploymentType !== null && { deploymentType: input.deploymentType }),
    };
};
const serializeAws_json1_1DeregisterOnPremisesInstanceInput = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1EC2TagFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1EC2TagFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EC2TagFilter(entry, context);
    });
};
const serializeAws_json1_1EC2TagSet = (input, context) => {
    return {
        ...(input.ec2TagSetList !== undefined &&
            input.ec2TagSetList !== null && {
            ec2TagSetList: serializeAws_json1_1EC2TagSetList(input.ec2TagSetList, context),
        }),
    };
};
const serializeAws_json1_1EC2TagSetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EC2TagFilterList(entry, context);
    });
};
const serializeAws_json1_1ECSService = (input, context) => {
    return {
        ...(input.clusterName !== undefined && input.clusterName !== null && { clusterName: input.clusterName }),
        ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
    };
};
const serializeAws_json1_1ECSServiceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ECSService(entry, context);
    });
};
const serializeAws_json1_1ELBInfo = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1ELBInfoList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ELBInfo(entry, context);
    });
};
const serializeAws_json1_1FilterValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetApplicationInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
    };
};
const serializeAws_json1_1GetApplicationRevisionInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.revision !== undefined &&
            input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }),
    };
};
const serializeAws_json1_1GetDeploymentConfigInput = (input, context) => {
    return {
        ...(input.deploymentConfigName !== undefined &&
            input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
    };
};
const serializeAws_json1_1GetDeploymentGroupInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.deploymentGroupName !== undefined &&
            input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
    };
};
const serializeAws_json1_1GetDeploymentInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    };
};
const serializeAws_json1_1GetDeploymentInstanceInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.instanceId !== undefined && input.instanceId !== null && { instanceId: input.instanceId }),
    };
};
const serializeAws_json1_1GetDeploymentTargetInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.targetId !== undefined && input.targetId !== null && { targetId: input.targetId }),
    };
};
const serializeAws_json1_1GetOnPremisesInstanceInput = (input, context) => {
    return {
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1GitHubLocation = (input, context) => {
    return {
        ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
        ...(input.repository !== undefined && input.repository !== null && { repository: input.repository }),
    };
};
const serializeAws_json1_1GreenFleetProvisioningOption = (input, context) => {
    return {
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
    };
};
const serializeAws_json1_1InstanceNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstancesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceStatusList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1InstanceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListApplicationRevisionsInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.deployed !== undefined && input.deployed !== null && { deployed: input.deployed }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
        ...(input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }),
        ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
        ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
    };
};
const serializeAws_json1_1ListApplicationsInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDeploymentConfigsInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDeploymentGroupsInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDeploymentInstancesInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.instanceStatusFilter !== undefined &&
            input.instanceStatusFilter !== null && {
            instanceStatusFilter: serializeAws_json1_1InstanceStatusList(input.instanceStatusFilter, context),
        }),
        ...(input.instanceTypeFilter !== undefined &&
            input.instanceTypeFilter !== null && {
            instanceTypeFilter: serializeAws_json1_1InstanceTypeList(input.instanceTypeFilter, context),
        }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDeploymentsInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.createTimeRange !== undefined &&
            input.createTimeRange !== null && {
            createTimeRange: serializeAws_json1_1TimeRange(input.createTimeRange, context),
        }),
        ...(input.deploymentGroupName !== undefined &&
            input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
        ...(input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }),
        ...(input.includeOnlyStatuses !== undefined &&
            input.includeOnlyStatuses !== null && {
            includeOnlyStatuses: serializeAws_json1_1DeploymentStatusList(input.includeOnlyStatuses, context),
        }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListDeploymentTargetsInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.targetFilters !== undefined &&
            input.targetFilters !== null && {
            targetFilters: serializeAws_json1_1TargetFilters(input.targetFilters, context),
        }),
    };
};
const serializeAws_json1_1ListenerArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListGitHubAccountTokenNamesInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1ListOnPremisesInstancesInput = (input, context) => {
    return {
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.registrationStatus !== undefined &&
            input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
        ...(input.tagFilters !== undefined &&
            input.tagFilters !== null && { tagFilters: serializeAws_json1_1TagFilterList(input.tagFilters, context) }),
    };
};
const serializeAws_json1_1ListTagsForResourceInput = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1LoadBalancerInfo = (input, context) => {
    return {
        ...(input.elbInfoList !== undefined &&
            input.elbInfoList !== null && { elbInfoList: serializeAws_json1_1ELBInfoList(input.elbInfoList, context) }),
        ...(input.targetGroupInfoList !== undefined &&
            input.targetGroupInfoList !== null && {
            targetGroupInfoList: serializeAws_json1_1TargetGroupInfoList(input.targetGroupInfoList, context),
        }),
        ...(input.targetGroupPairInfoList !== undefined &&
            input.targetGroupPairInfoList !== null && {
            targetGroupPairInfoList: serializeAws_json1_1TargetGroupPairInfoList(input.targetGroupPairInfoList, context),
        }),
    };
};
const serializeAws_json1_1MinimumHealthyHosts = (input, context) => {
    return {
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_json1_1OnPremisesTagSet = (input, context) => {
    return {
        ...(input.onPremisesTagSetList !== undefined &&
            input.onPremisesTagSetList !== null && {
            onPremisesTagSetList: serializeAws_json1_1OnPremisesTagSetList(input.onPremisesTagSetList, context),
        }),
    };
};
const serializeAws_json1_1OnPremisesTagSetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TagFilterList(entry, context);
    });
};
const serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
        ...(input.lifecycleEventHookExecutionId !== undefined &&
            input.lifecycleEventHookExecutionId !== null && {
            lifecycleEventHookExecutionId: input.lifecycleEventHookExecutionId,
        }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_json1_1RawString = (input, context) => {
    return {
        ...(input.content !== undefined && input.content !== null && { content: input.content }),
        ...(input.sha256 !== undefined && input.sha256 !== null && { sha256: input.sha256 }),
    };
};
const serializeAws_json1_1RegisterApplicationRevisionInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.revision !== undefined &&
            input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }),
    };
};
const serializeAws_json1_1RegisterOnPremisesInstanceInput = (input, context) => {
    return {
        ...(input.iamSessionArn !== undefined && input.iamSessionArn !== null && { iamSessionArn: input.iamSessionArn }),
        ...(input.iamUserArn !== undefined && input.iamUserArn !== null && { iamUserArn: input.iamUserArn }),
        ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
    };
};
const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput = (input, context) => {
    return {
        ...(input.instanceNames !== undefined &&
            input.instanceNames !== null && {
            instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    };
};
const serializeAws_json1_1RevisionLocation = (input, context) => {
    return {
        ...(input.appSpecContent !== undefined &&
            input.appSpecContent !== null && {
            appSpecContent: serializeAws_json1_1AppSpecContent(input.appSpecContent, context),
        }),
        ...(input.gitHubLocation !== undefined &&
            input.gitHubLocation !== null && {
            gitHubLocation: serializeAws_json1_1GitHubLocation(input.gitHubLocation, context),
        }),
        ...(input.revisionType !== undefined && input.revisionType !== null && { revisionType: input.revisionType }),
        ...(input.s3Location !== undefined &&
            input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }),
        ...(input.string !== undefined &&
            input.string !== null && { string: serializeAws_json1_1RawString(input.string, context) }),
    };
};
const serializeAws_json1_1RevisionLocationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RevisionLocation(entry, context);
    });
};
const serializeAws_json1_1S3Location = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.bundleType !== undefined && input.bundleType !== null && { bundleType: input.bundleType }),
        ...(input.eTag !== undefined && input.eTag !== null && { eTag: input.eTag }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput = (input, context) => {
    return {
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    };
};
const serializeAws_json1_1StopDeploymentInput = (input, context) => {
    return {
        ...(input.autoRollbackEnabled !== undefined &&
            input.autoRollbackEnabled !== null && { autoRollbackEnabled: input.autoRollbackEnabled }),
        ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagFilter = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TagFilter(entry, context);
    });
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_json1_1TagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TargetFilters = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1FilterValueList(value, context),
        };
    }, {});
};
const serializeAws_json1_1TargetGroupInfo = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_json1_1TargetGroupInfoList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetGroupInfo(entry, context);
    });
};
const serializeAws_json1_1TargetGroupPairInfo = (input, context) => {
    return {
        ...(input.prodTrafficRoute !== undefined &&
            input.prodTrafficRoute !== null && {
            prodTrafficRoute: serializeAws_json1_1TrafficRoute(input.prodTrafficRoute, context),
        }),
        ...(input.targetGroups !== undefined &&
            input.targetGroups !== null && {
            targetGroups: serializeAws_json1_1TargetGroupInfoList(input.targetGroups, context),
        }),
        ...(input.testTrafficRoute !== undefined &&
            input.testTrafficRoute !== null && {
            testTrafficRoute: serializeAws_json1_1TrafficRoute(input.testTrafficRoute, context),
        }),
    };
};
const serializeAws_json1_1TargetGroupPairInfoList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TargetGroupPairInfo(entry, context);
    });
};
const serializeAws_json1_1TargetIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TargetInstances = (input, context) => {
    return {
        ...(input.autoScalingGroups !== undefined &&
            input.autoScalingGroups !== null && {
            autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
        }),
        ...(input.ec2TagSet !== undefined &&
            input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) }),
        ...(input.tagFilters !== undefined &&
            input.tagFilters !== null && { tagFilters: serializeAws_json1_1EC2TagFilterList(input.tagFilters, context) }),
    };
};
const serializeAws_json1_1TimeBasedCanary = (input, context) => {
    return {
        ...(input.canaryInterval !== undefined &&
            input.canaryInterval !== null && { canaryInterval: input.canaryInterval }),
        ...(input.canaryPercentage !== undefined &&
            input.canaryPercentage !== null && { canaryPercentage: input.canaryPercentage }),
    };
};
const serializeAws_json1_1TimeBasedLinear = (input, context) => {
    return {
        ...(input.linearInterval !== undefined &&
            input.linearInterval !== null && { linearInterval: input.linearInterval }),
        ...(input.linearPercentage !== undefined &&
            input.linearPercentage !== null && { linearPercentage: input.linearPercentage }),
    };
};
const serializeAws_json1_1TimeRange = (input, context) => {
    return {
        ...(input.end !== undefined && input.end !== null && { end: Math.round(input.end.getTime() / 1000) }),
        ...(input.start !== undefined && input.start !== null && { start: Math.round(input.start.getTime() / 1000) }),
    };
};
const serializeAws_json1_1TrafficRoute = (input, context) => {
    return {
        ...(input.listenerArns !== undefined &&
            input.listenerArns !== null && {
            listenerArns: serializeAws_json1_1ListenerArnList(input.listenerArns, context),
        }),
    };
};
const serializeAws_json1_1TrafficRoutingConfig = (input, context) => {
    return {
        ...(input.timeBasedCanary !== undefined &&
            input.timeBasedCanary !== null && {
            timeBasedCanary: serializeAws_json1_1TimeBasedCanary(input.timeBasedCanary, context),
        }),
        ...(input.timeBasedLinear !== undefined &&
            input.timeBasedLinear !== null && {
            timeBasedLinear: serializeAws_json1_1TimeBasedLinear(input.timeBasedLinear, context),
        }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_json1_1TriggerConfig = (input, context) => {
    return {
        ...(input.triggerEvents !== undefined &&
            input.triggerEvents !== null && {
            triggerEvents: serializeAws_json1_1TriggerEventTypeList(input.triggerEvents, context),
        }),
        ...(input.triggerName !== undefined && input.triggerName !== null && { triggerName: input.triggerName }),
        ...(input.triggerTargetArn !== undefined &&
            input.triggerTargetArn !== null && { triggerTargetArn: input.triggerTargetArn }),
    };
};
const serializeAws_json1_1TriggerConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TriggerConfig(entry, context);
    });
};
const serializeAws_json1_1TriggerEventTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UntagResourceInput = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateApplicationInput = (input, context) => {
    return {
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.newApplicationName !== undefined &&
            input.newApplicationName !== null && { newApplicationName: input.newApplicationName }),
    };
};
const serializeAws_json1_1UpdateDeploymentGroupInput = (input, context) => {
    return {
        ...(input.alarmConfiguration !== undefined &&
            input.alarmConfiguration !== null && {
            alarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context),
        }),
        ...(input.applicationName !== undefined &&
            input.applicationName !== null && { applicationName: input.applicationName }),
        ...(input.autoRollbackConfiguration !== undefined &&
            input.autoRollbackConfiguration !== null && {
            autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
        }),
        ...(input.autoScalingGroups !== undefined &&
            input.autoScalingGroups !== null && {
            autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
        }),
        ...(input.blueGreenDeploymentConfiguration !== undefined &&
            input.blueGreenDeploymentConfiguration !== null && {
            blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(input.blueGreenDeploymentConfiguration, context),
        }),
        ...(input.currentDeploymentGroupName !== undefined &&
            input.currentDeploymentGroupName !== null && { currentDeploymentGroupName: input.currentDeploymentGroupName }),
        ...(input.deploymentConfigName !== undefined &&
            input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
        ...(input.deploymentStyle !== undefined &&
            input.deploymentStyle !== null && {
            deploymentStyle: serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context),
        }),
        ...(input.ec2TagFilters !== undefined &&
            input.ec2TagFilters !== null && {
            ec2TagFilters: serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context),
        }),
        ...(input.ec2TagSet !== undefined &&
            input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) }),
        ...(input.ecsServices !== undefined &&
            input.ecsServices !== null && { ecsServices: serializeAws_json1_1ECSServiceList(input.ecsServices, context) }),
        ...(input.loadBalancerInfo !== undefined &&
            input.loadBalancerInfo !== null && {
            loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context),
        }),
        ...(input.newDeploymentGroupName !== undefined &&
            input.newDeploymentGroupName !== null && { newDeploymentGroupName: input.newDeploymentGroupName }),
        ...(input.onPremisesInstanceTagFilters !== undefined &&
            input.onPremisesInstanceTagFilters !== null && {
            onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context),
        }),
        ...(input.onPremisesTagSet !== undefined &&
            input.onPremisesTagSet !== null && {
            onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context),
        }),
        ...(input.outdatedInstancesStrategy !== undefined &&
            input.outdatedInstancesStrategy !== null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy }),
        ...(input.serviceRoleArn !== undefined &&
            input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
        ...(input.triggerConfigurations !== undefined &&
            input.triggerConfigurations !== null && {
            triggerConfigurations: serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context),
        }),
    };
};
const deserializeAws_json1_1Alarm = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1AlarmConfiguration = (output, context) => {
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
const deserializeAws_json1_1AlarmList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alarm(entry, context);
    });
};
const deserializeAws_json1_1AlarmsLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApplicationAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApplicationDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApplicationInfo = (output, context) => {
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
const deserializeAws_json1_1ApplicationLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApplicationNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ApplicationsInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApplicationInfo(entry, context);
    });
};
const deserializeAws_json1_1ApplicationsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AppSpecContent = (output, context) => {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        sha256: output.sha256 !== undefined && output.sha256 !== null ? output.sha256 : undefined,
    };
};
const deserializeAws_json1_1ArnNotSupportedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AutoRollbackConfiguration = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1AutoRollbackEventsList(output.events, context)
            : undefined,
    };
};
const deserializeAws_json1_1AutoRollbackEventsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AutoScalingGroup = (output, context) => {
    return {
        hook: output.hook !== undefined && output.hook !== null ? output.hook : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1AutoScalingGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AutoScalingGroup(entry, context);
    });
};
const deserializeAws_json1_1AutoScalingGroupNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1BatchGetApplicationRevisionsOutput = (output, context) => {
    return {
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        revisions: output.revisions !== undefined && output.revisions !== null
            ? deserializeAws_json1_1RevisionInfoList(output.revisions, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetApplicationsOutput = (output, context) => {
    return {
        applicationsInfo: output.applicationsInfo !== undefined && output.applicationsInfo !== null
            ? deserializeAws_json1_1ApplicationsInfoList(output.applicationsInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetDeploymentGroupsOutput = (output, context) => {
    return {
        deploymentGroupsInfo: output.deploymentGroupsInfo !== undefined && output.deploymentGroupsInfo !== null
            ? deserializeAws_json1_1DeploymentGroupInfoList(output.deploymentGroupsInfo, context)
            : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
const deserializeAws_json1_1BatchGetDeploymentInstancesOutput = (output, context) => {
    return {
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        instancesSummary: output.instancesSummary !== undefined && output.instancesSummary !== null
            ? deserializeAws_json1_1InstanceSummaryList(output.instancesSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetDeploymentsOutput = (output, context) => {
    return {
        deploymentsInfo: output.deploymentsInfo !== undefined && output.deploymentsInfo !== null
            ? deserializeAws_json1_1DeploymentsInfoList(output.deploymentsInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetDeploymentTargetsOutput = (output, context) => {
    return {
        deploymentTargets: output.deploymentTargets !== undefined && output.deploymentTargets !== null
            ? deserializeAws_json1_1DeploymentTargetList(output.deploymentTargets, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchGetOnPremisesInstancesOutput = (output, context) => {
    return {
        instanceInfos: output.instanceInfos !== undefined && output.instanceInfos !== null
            ? deserializeAws_json1_1InstanceInfoList(output.instanceInfos, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1BlueGreenDeploymentConfiguration = (output, context) => {
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
const deserializeAws_json1_1BlueInstanceTerminationOption = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        terminationWaitTimeInMinutes: output.terminationWaitTimeInMinutes !== undefined && output.terminationWaitTimeInMinutes !== null
            ? output.terminationWaitTimeInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1BucketNameFilterRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1CloudFormationTarget = (output, context) => {
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
const deserializeAws_json1_1CreateApplicationOutput = (output, context) => {
    return {
        applicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
    };
};
const deserializeAws_json1_1CreateDeploymentConfigOutput = (output, context) => {
    return {
        deploymentConfigId: output.deploymentConfigId !== undefined && output.deploymentConfigId !== null
            ? output.deploymentConfigId
            : undefined,
    };
};
const deserializeAws_json1_1CreateDeploymentGroupOutput = (output, context) => {
    return {
        deploymentGroupId: output.deploymentGroupId !== undefined && output.deploymentGroupId !== null
            ? output.deploymentGroupId
            : undefined,
    };
};
const deserializeAws_json1_1CreateDeploymentOutput = (output, context) => {
    return {
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    };
};
const deserializeAws_json1_1DeleteDeploymentGroupOutput = (output, context) => {
    return {
        hooksNotCleanedUp: output.hooksNotCleanedUp !== undefined && output.hooksNotCleanedUp !== null
            ? deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteGitHubAccountTokenOutput = (output, context) => {
    return {
        tokenName: output.tokenName !== undefined && output.tokenName !== null ? output.tokenName : undefined,
    };
};
const deserializeAws_json1_1DeleteResourcesByExternalIdOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeploymentAlreadyCompletedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfigAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfigDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfigInfo = (output, context) => {
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
const deserializeAws_json1_1DeploymentConfigInUseException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfigLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfigNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentConfigsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeploymentDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentGroupAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentGroupDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentGroupInfo = (output, context) => {
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
const deserializeAws_json1_1DeploymentGroupInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeploymentGroupInfo(entry, context);
    });
};
const deserializeAws_json1_1DeploymentGroupLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentGroupNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentGroupsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeploymentIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentInfo = (output, context) => {
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
const deserializeAws_json1_1DeploymentIsNotInReadyStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentNotStartedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentOverview = (output, context) => {
    return {
        Failed: output.Failed !== undefined && output.Failed !== null ? output.Failed : undefined,
        InProgress: output.InProgress !== undefined && output.InProgress !== null ? output.InProgress : undefined,
        Pending: output.Pending !== undefined && output.Pending !== null ? output.Pending : undefined,
        Ready: output.Ready !== undefined && output.Ready !== null ? output.Ready : undefined,
        Skipped: output.Skipped !== undefined && output.Skipped !== null ? output.Skipped : undefined,
        Succeeded: output.Succeeded !== undefined && output.Succeeded !== null ? output.Succeeded : undefined,
    };
};
const deserializeAws_json1_1DeploymentReadyOption = (output, context) => {
    return {
        actionOnTimeout: output.actionOnTimeout !== undefined && output.actionOnTimeout !== null ? output.actionOnTimeout : undefined,
        waitTimeInMinutes: output.waitTimeInMinutes !== undefined && output.waitTimeInMinutes !== null
            ? output.waitTimeInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1DeploymentsInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeploymentInfo(entry, context);
    });
};
const deserializeAws_json1_1DeploymentsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeploymentStatusMessageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeploymentStyle = (output, context) => {
    return {
        deploymentOption: output.deploymentOption !== undefined && output.deploymentOption !== null ? output.deploymentOption : undefined,
        deploymentType: output.deploymentType !== undefined && output.deploymentType !== null ? output.deploymentType : undefined,
    };
};
const deserializeAws_json1_1DeploymentTarget = (output, context) => {
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
const deserializeAws_json1_1DeploymentTargetDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentTargetIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DeploymentTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DeploymentTarget(entry, context);
    });
};
const deserializeAws_json1_1DeploymentTargetListSizeExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DescriptionTooLongException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Diagnostics = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        logTail: output.logTail !== undefined && output.logTail !== null ? output.logTail : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        scriptName: output.scriptName !== undefined && output.scriptName !== null ? output.scriptName : undefined,
    };
};
const deserializeAws_json1_1EC2TagFilter = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1EC2TagFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EC2TagFilter(entry, context);
    });
};
const deserializeAws_json1_1EC2TagSet = (output, context) => {
    return {
        ec2TagSetList: output.ec2TagSetList !== undefined && output.ec2TagSetList !== null
            ? deserializeAws_json1_1EC2TagSetList(output.ec2TagSetList, context)
            : undefined,
    };
};
const deserializeAws_json1_1EC2TagSetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EC2TagFilterList(entry, context);
    });
};
const deserializeAws_json1_1ECSService = (output, context) => {
    return {
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    };
};
const deserializeAws_json1_1ECSServiceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ECSService(entry, context);
    });
};
const deserializeAws_json1_1ECSServiceMappingLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ECSTarget = (output, context) => {
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
const deserializeAws_json1_1ECSTaskSet = (output, context) => {
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
const deserializeAws_json1_1ECSTaskSetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ECSTaskSet(entry, context);
    });
};
const deserializeAws_json1_1ELBInfo = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1ELBInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ELBInfo(entry, context);
    });
};
const deserializeAws_json1_1ErrorInformation = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GenericRevisionInfo = (output, context) => {
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
const deserializeAws_json1_1GetApplicationOutput = (output, context) => {
    return {
        application: output.application !== undefined && output.application !== null
            ? deserializeAws_json1_1ApplicationInfo(output.application, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetApplicationRevisionOutput = (output, context) => {
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
const deserializeAws_json1_1GetDeploymentConfigOutput = (output, context) => {
    return {
        deploymentConfigInfo: output.deploymentConfigInfo !== undefined && output.deploymentConfigInfo !== null
            ? deserializeAws_json1_1DeploymentConfigInfo(output.deploymentConfigInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDeploymentGroupOutput = (output, context) => {
    return {
        deploymentGroupInfo: output.deploymentGroupInfo !== undefined && output.deploymentGroupInfo !== null
            ? deserializeAws_json1_1DeploymentGroupInfo(output.deploymentGroupInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDeploymentInstanceOutput = (output, context) => {
    return {
        instanceSummary: output.instanceSummary !== undefined && output.instanceSummary !== null
            ? deserializeAws_json1_1InstanceSummary(output.instanceSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDeploymentOutput = (output, context) => {
    return {
        deploymentInfo: output.deploymentInfo !== undefined && output.deploymentInfo !== null
            ? deserializeAws_json1_1DeploymentInfo(output.deploymentInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDeploymentTargetOutput = (output, context) => {
    return {
        deploymentTarget: output.deploymentTarget !== undefined && output.deploymentTarget !== null
            ? deserializeAws_json1_1DeploymentTarget(output.deploymentTarget, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOnPremisesInstanceOutput = (output, context) => {
    return {
        instanceInfo: output.instanceInfo !== undefined && output.instanceInfo !== null
            ? deserializeAws_json1_1InstanceInfo(output.instanceInfo, context)
            : undefined,
    };
};
const deserializeAws_json1_1GitHubAccountTokenDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GitHubAccountTokenNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1GitHubAccountTokenNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1GitHubLocation = (output, context) => {
    return {
        commitId: output.commitId !== undefined && output.commitId !== null ? output.commitId : undefined,
        repository: output.repository !== undefined && output.repository !== null ? output.repository : undefined,
    };
};
const deserializeAws_json1_1GreenFleetProvisioningOption = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
    };
};
const deserializeAws_json1_1IamArnRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IamSessionArnAlreadyRegisteredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IamUserArnAlreadyRegisteredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IamUserArnRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstanceDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstanceIdRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstanceInfo = (output, context) => {
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
const deserializeAws_json1_1InstanceInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceInfo(entry, context);
    });
};
const deserializeAws_json1_1InstanceLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstanceNameAlreadyRegisteredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstanceNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InstanceNameRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstanceNotRegisteredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InstancesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InstanceSummary = (output, context) => {
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
const deserializeAws_json1_1InstanceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceSummary(entry, context);
    });
};
const deserializeAws_json1_1InstanceTarget = (output, context) => {
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
const deserializeAws_json1_1InvalidAlarmConfigException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidApplicationNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidAutoRollbackConfigException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidAutoScalingGroupException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidBucketNameFilterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidComputePlatformException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeployedStateFilterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentConfigNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentGroupNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentInstanceTypeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentStyleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentTargetIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidDeploymentWaitTypeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidEC2TagCombinationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidEC2TagException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidECSServiceException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidExternalIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidFileExistsBehaviorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidGitHubAccountTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidGitHubAccountTokenNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidIamSessionArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidIamUserArnException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInstanceNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInstanceStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidInstanceTypeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidKeyPrefixFilterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidLoadBalancerInfoException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidMinimumHealthyHostValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOnPremisesTagCombinationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRegistrationStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRevisionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidRoleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSortByException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidSortOrderException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagFilterException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagsToAddException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetFilterNameException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetGroupPairException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTargetInstancesException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTimeRangeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTrafficRoutingConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidTriggerConfigException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LambdaFunctionInfo = (output, context) => {
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
const deserializeAws_json1_1LambdaTarget = (output, context) => {
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
const deserializeAws_json1_1LastDeploymentInfo = (output, context) => {
    return {
        createTime: output.createTime !== undefined && output.createTime !== null
            ? new Date(Math.round(output.createTime * 1000))
            : undefined,
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1LifecycleEvent = (output, context) => {
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
const deserializeAws_json1_1LifecycleEventAlreadyCompletedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LifecycleEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LifecycleEvent(entry, context);
    });
};
const deserializeAws_json1_1LifecycleHookLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListApplicationRevisionsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        revisions: output.revisions !== undefined && output.revisions !== null
            ? deserializeAws_json1_1RevisionLocationList(output.revisions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListApplicationsOutput = (output, context) => {
    return {
        applications: output.applications !== undefined && output.applications !== null
            ? deserializeAws_json1_1ApplicationsList(output.applications, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDeploymentConfigsOutput = (output, context) => {
    return {
        deploymentConfigsList: output.deploymentConfigsList !== undefined && output.deploymentConfigsList !== null
            ? deserializeAws_json1_1DeploymentConfigsList(output.deploymentConfigsList, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDeploymentGroupsOutput = (output, context) => {
    return {
        applicationName: output.applicationName !== undefined && output.applicationName !== null ? output.applicationName : undefined,
        deploymentGroups: output.deploymentGroups !== undefined && output.deploymentGroups !== null
            ? deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDeploymentInstancesOutput = (output, context) => {
    return {
        instancesList: output.instancesList !== undefined && output.instancesList !== null
            ? deserializeAws_json1_1InstancesList(output.instancesList, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDeploymentsOutput = (output, context) => {
    return {
        deployments: output.deployments !== undefined && output.deployments !== null
            ? deserializeAws_json1_1DeploymentsList(output.deployments, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListDeploymentTargetsOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        targetIds: output.targetIds !== undefined && output.targetIds !== null
            ? deserializeAws_json1_1TargetIdList(output.targetIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListenerArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ListGitHubAccountTokenNamesOutput = (output, context) => {
    return {
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
        tokenNameList: output.tokenNameList !== undefined && output.tokenNameList !== null
            ? deserializeAws_json1_1GitHubAccountTokenNameList(output.tokenNameList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOnPremisesInstancesOutput = (output, context) => {
    return {
        instanceNames: output.instanceNames !== undefined && output.instanceNames !== null
            ? deserializeAws_json1_1InstanceNameList(output.instanceNames, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoadBalancerInfo = (output, context) => {
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
const deserializeAws_json1_1MinimumHealthyHosts = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_json1_1MultipleIamArnsProvidedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OnPremisesTagSet = (output, context) => {
    return {
        onPremisesTagSetList: output.onPremisesTagSetList !== undefined && output.onPremisesTagSetList !== null
            ? deserializeAws_json1_1OnPremisesTagSetList(output.onPremisesTagSetList, context)
            : undefined,
    };
};
const deserializeAws_json1_1OnPremisesTagSetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagFilterList(entry, context);
    });
};
const deserializeAws_json1_1OperationNotSupportedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput = (output, context) => {
    return {
        lifecycleEventHookExecutionId: output.lifecycleEventHookExecutionId !== undefined && output.lifecycleEventHookExecutionId !== null
            ? output.lifecycleEventHookExecutionId
            : undefined,
    };
};
const deserializeAws_json1_1RawString = (output, context) => {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        sha256: output.sha256 !== undefined && output.sha256 !== null ? output.sha256 : undefined,
    };
};
const deserializeAws_json1_1RelatedDeployments = (output, context) => {
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
const deserializeAws_json1_1ResourceArnRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RevisionDoesNotExistException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RevisionInfo = (output, context) => {
    return {
        genericRevisionInfo: output.genericRevisionInfo !== undefined && output.genericRevisionInfo !== null
            ? deserializeAws_json1_1GenericRevisionInfo(output.genericRevisionInfo, context)
            : undefined,
        revisionLocation: output.revisionLocation !== undefined && output.revisionLocation !== null
            ? deserializeAws_json1_1RevisionLocation(output.revisionLocation, context)
            : undefined,
    };
};
const deserializeAws_json1_1RevisionInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RevisionInfo(entry, context);
    });
};
const deserializeAws_json1_1RevisionLocation = (output, context) => {
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
const deserializeAws_json1_1RevisionLocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RevisionLocation(entry, context);
    });
};
const deserializeAws_json1_1RevisionRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RoleRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RollbackInfo = (output, context) => {
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
const deserializeAws_json1_1S3Location = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        bundleType: output.bundleType !== undefined && output.bundleType !== null ? output.bundleType : undefined,
        eTag: output.eTag !== undefined && output.eTag !== null ? output.eTag : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_json1_1StopDeploymentOutput = (output, context) => {
    return {
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagFilter = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TagFilter(entry, context);
    });
};
const deserializeAws_json1_1TagLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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
const deserializeAws_json1_1TagRequiredException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1TagSetListLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TargetGroupInfo = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1TargetGroupInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetGroupInfo(entry, context);
    });
};
const deserializeAws_json1_1TargetGroupPairInfo = (output, context) => {
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
const deserializeAws_json1_1TargetGroupPairInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TargetGroupPairInfo(entry, context);
    });
};
const deserializeAws_json1_1TargetIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TargetInstances = (output, context) => {
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
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TimeBasedCanary = (output, context) => {
    return {
        canaryInterval: output.canaryInterval !== undefined && output.canaryInterval !== null ? output.canaryInterval : undefined,
        canaryPercentage: output.canaryPercentage !== undefined && output.canaryPercentage !== null ? output.canaryPercentage : undefined,
    };
};
const deserializeAws_json1_1TimeBasedLinear = (output, context) => {
    return {
        linearInterval: output.linearInterval !== undefined && output.linearInterval !== null ? output.linearInterval : undefined,
        linearPercentage: output.linearPercentage !== undefined && output.linearPercentage !== null ? output.linearPercentage : undefined,
    };
};
const deserializeAws_json1_1TrafficRoute = (output, context) => {
    return {
        listenerArns: output.listenerArns !== undefined && output.listenerArns !== null
            ? deserializeAws_json1_1ListenerArnList(output.listenerArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1TrafficRoutingConfig = (output, context) => {
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
const deserializeAws_json1_1TriggerConfig = (output, context) => {
    return {
        triggerEvents: output.triggerEvents !== undefined && output.triggerEvents !== null
            ? deserializeAws_json1_1TriggerEventTypeList(output.triggerEvents, context)
            : undefined,
        triggerName: output.triggerName !== undefined && output.triggerName !== null ? output.triggerName : undefined,
        triggerTargetArn: output.triggerTargetArn !== undefined && output.triggerTargetArn !== null ? output.triggerTargetArn : undefined,
    };
};
const deserializeAws_json1_1TriggerConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TriggerConfig(entry, context);
    });
};
const deserializeAws_json1_1TriggerEventTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1TriggerTargetsLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedActionForDeploymentTypeException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateDeploymentGroupOutput = (output, context) => {
    return {
        hooksNotCleanedUp: output.hooksNotCleanedUp !== undefined && output.hooksNotCleanedUp !== null
            ? deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context)
            : undefined,
    };
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