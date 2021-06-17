"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1RegisterEcsClusterCommand = exports.serializeAws_json1_1RebootInstanceCommand = exports.serializeAws_json1_1ListTagsCommand = exports.serializeAws_json1_1GrantAccessCommand = exports.serializeAws_json1_1GetHostnameSuggestionCommand = exports.serializeAws_json1_1DisassociateElasticIpCommand = exports.serializeAws_json1_1DetachElasticLoadBalancerCommand = exports.serializeAws_json1_1DescribeVolumesCommand = exports.serializeAws_json1_1DescribeUserProfilesCommand = exports.serializeAws_json1_1DescribeTimeBasedAutoScalingCommand = exports.serializeAws_json1_1DescribeStackSummaryCommand = exports.serializeAws_json1_1DescribeStacksCommand = exports.serializeAws_json1_1DescribeStackProvisioningParametersCommand = exports.serializeAws_json1_1DescribeServiceErrorsCommand = exports.serializeAws_json1_1DescribeRdsDbInstancesCommand = exports.serializeAws_json1_1DescribeRaidArraysCommand = exports.serializeAws_json1_1DescribePermissionsCommand = exports.serializeAws_json1_1DescribeOperatingSystemsCommand = exports.serializeAws_json1_1DescribeMyUserProfileCommand = exports.serializeAws_json1_1DescribeLoadBasedAutoScalingCommand = exports.serializeAws_json1_1DescribeLayersCommand = exports.serializeAws_json1_1DescribeInstancesCommand = exports.serializeAws_json1_1DescribeElasticLoadBalancersCommand = exports.serializeAws_json1_1DescribeElasticIpsCommand = exports.serializeAws_json1_1DescribeEcsClustersCommand = exports.serializeAws_json1_1DescribeDeploymentsCommand = exports.serializeAws_json1_1DescribeCommandsCommand = exports.serializeAws_json1_1DescribeAppsCommand = exports.serializeAws_json1_1DescribeAgentVersionsCommand = exports.serializeAws_json1_1DeregisterVolumeCommand = exports.serializeAws_json1_1DeregisterRdsDbInstanceCommand = exports.serializeAws_json1_1DeregisterInstanceCommand = exports.serializeAws_json1_1DeregisterElasticIpCommand = exports.serializeAws_json1_1DeregisterEcsClusterCommand = exports.serializeAws_json1_1DeleteUserProfileCommand = exports.serializeAws_json1_1DeleteStackCommand = exports.serializeAws_json1_1DeleteLayerCommand = exports.serializeAws_json1_1DeleteInstanceCommand = exports.serializeAws_json1_1DeleteAppCommand = exports.serializeAws_json1_1CreateUserProfileCommand = exports.serializeAws_json1_1CreateStackCommand = exports.serializeAws_json1_1CreateLayerCommand = exports.serializeAws_json1_1CreateInstanceCommand = exports.serializeAws_json1_1CreateDeploymentCommand = exports.serializeAws_json1_1CreateAppCommand = exports.serializeAws_json1_1CloneStackCommand = exports.serializeAws_json1_1AttachElasticLoadBalancerCommand = exports.serializeAws_json1_1AssociateElasticIpCommand = exports.serializeAws_json1_1AssignVolumeCommand = exports.serializeAws_json1_1AssignInstanceCommand = void 0;
exports.deserializeAws_json1_1DescribeEcsClustersCommand = exports.deserializeAws_json1_1DescribeDeploymentsCommand = exports.deserializeAws_json1_1DescribeCommandsCommand = exports.deserializeAws_json1_1DescribeAppsCommand = exports.deserializeAws_json1_1DescribeAgentVersionsCommand = exports.deserializeAws_json1_1DeregisterVolumeCommand = exports.deserializeAws_json1_1DeregisterRdsDbInstanceCommand = exports.deserializeAws_json1_1DeregisterInstanceCommand = exports.deserializeAws_json1_1DeregisterElasticIpCommand = exports.deserializeAws_json1_1DeregisterEcsClusterCommand = exports.deserializeAws_json1_1DeleteUserProfileCommand = exports.deserializeAws_json1_1DeleteStackCommand = exports.deserializeAws_json1_1DeleteLayerCommand = exports.deserializeAws_json1_1DeleteInstanceCommand = exports.deserializeAws_json1_1DeleteAppCommand = exports.deserializeAws_json1_1CreateUserProfileCommand = exports.deserializeAws_json1_1CreateStackCommand = exports.deserializeAws_json1_1CreateLayerCommand = exports.deserializeAws_json1_1CreateInstanceCommand = exports.deserializeAws_json1_1CreateDeploymentCommand = exports.deserializeAws_json1_1CreateAppCommand = exports.deserializeAws_json1_1CloneStackCommand = exports.deserializeAws_json1_1AttachElasticLoadBalancerCommand = exports.deserializeAws_json1_1AssociateElasticIpCommand = exports.deserializeAws_json1_1AssignVolumeCommand = exports.deserializeAws_json1_1AssignInstanceCommand = exports.serializeAws_json1_1UpdateVolumeCommand = exports.serializeAws_json1_1UpdateUserProfileCommand = exports.serializeAws_json1_1UpdateStackCommand = exports.serializeAws_json1_1UpdateRdsDbInstanceCommand = exports.serializeAws_json1_1UpdateMyUserProfileCommand = exports.serializeAws_json1_1UpdateLayerCommand = exports.serializeAws_json1_1UpdateInstanceCommand = exports.serializeAws_json1_1UpdateElasticIpCommand = exports.serializeAws_json1_1UpdateAppCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1UnassignVolumeCommand = exports.serializeAws_json1_1UnassignInstanceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StopStackCommand = exports.serializeAws_json1_1StopInstanceCommand = exports.serializeAws_json1_1StartStackCommand = exports.serializeAws_json1_1StartInstanceCommand = exports.serializeAws_json1_1SetTimeBasedAutoScalingCommand = exports.serializeAws_json1_1SetPermissionCommand = exports.serializeAws_json1_1SetLoadBasedAutoScalingCommand = exports.serializeAws_json1_1RegisterVolumeCommand = exports.serializeAws_json1_1RegisterRdsDbInstanceCommand = exports.serializeAws_json1_1RegisterInstanceCommand = exports.serializeAws_json1_1RegisterElasticIpCommand = void 0;
exports.deserializeAws_json1_1UpdateVolumeCommand = exports.deserializeAws_json1_1UpdateUserProfileCommand = exports.deserializeAws_json1_1UpdateStackCommand = exports.deserializeAws_json1_1UpdateRdsDbInstanceCommand = exports.deserializeAws_json1_1UpdateMyUserProfileCommand = exports.deserializeAws_json1_1UpdateLayerCommand = exports.deserializeAws_json1_1UpdateInstanceCommand = exports.deserializeAws_json1_1UpdateElasticIpCommand = exports.deserializeAws_json1_1UpdateAppCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1UnassignVolumeCommand = exports.deserializeAws_json1_1UnassignInstanceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StopStackCommand = exports.deserializeAws_json1_1StopInstanceCommand = exports.deserializeAws_json1_1StartStackCommand = exports.deserializeAws_json1_1StartInstanceCommand = exports.deserializeAws_json1_1SetTimeBasedAutoScalingCommand = exports.deserializeAws_json1_1SetPermissionCommand = exports.deserializeAws_json1_1SetLoadBasedAutoScalingCommand = exports.deserializeAws_json1_1RegisterVolumeCommand = exports.deserializeAws_json1_1RegisterRdsDbInstanceCommand = exports.deserializeAws_json1_1RegisterInstanceCommand = exports.deserializeAws_json1_1RegisterElasticIpCommand = exports.deserializeAws_json1_1RegisterEcsClusterCommand = exports.deserializeAws_json1_1RebootInstanceCommand = exports.deserializeAws_json1_1ListTagsCommand = exports.deserializeAws_json1_1GrantAccessCommand = exports.deserializeAws_json1_1GetHostnameSuggestionCommand = exports.deserializeAws_json1_1DisassociateElasticIpCommand = exports.deserializeAws_json1_1DetachElasticLoadBalancerCommand = exports.deserializeAws_json1_1DescribeVolumesCommand = exports.deserializeAws_json1_1DescribeUserProfilesCommand = exports.deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand = exports.deserializeAws_json1_1DescribeStackSummaryCommand = exports.deserializeAws_json1_1DescribeStacksCommand = exports.deserializeAws_json1_1DescribeStackProvisioningParametersCommand = exports.deserializeAws_json1_1DescribeServiceErrorsCommand = exports.deserializeAws_json1_1DescribeRdsDbInstancesCommand = exports.deserializeAws_json1_1DescribeRaidArraysCommand = exports.deserializeAws_json1_1DescribePermissionsCommand = exports.deserializeAws_json1_1DescribeOperatingSystemsCommand = exports.deserializeAws_json1_1DescribeMyUserProfileCommand = exports.deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand = exports.deserializeAws_json1_1DescribeLayersCommand = exports.deserializeAws_json1_1DescribeInstancesCommand = exports.deserializeAws_json1_1DescribeElasticLoadBalancersCommand = exports.deserializeAws_json1_1DescribeElasticIpsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssignInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.AssignInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssignInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssignInstanceCommand = serializeAws_json1_1AssignInstanceCommand;
const serializeAws_json1_1AssignVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.AssignVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssignVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssignVolumeCommand = serializeAws_json1_1AssignVolumeCommand;
const serializeAws_json1_1AssociateElasticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.AssociateElasticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateElasticIpCommand = serializeAws_json1_1AssociateElasticIpCommand;
const serializeAws_json1_1AttachElasticLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.AttachElasticLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachElasticLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachElasticLoadBalancerCommand = serializeAws_json1_1AttachElasticLoadBalancerCommand;
const serializeAws_json1_1CloneStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CloneStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CloneStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CloneStackCommand = serializeAws_json1_1CloneStackCommand;
const serializeAws_json1_1CreateAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CreateApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAppCommand = serializeAws_json1_1CreateAppCommand;
const serializeAws_json1_1CreateDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CreateDeployment",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDeploymentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateDeploymentCommand = serializeAws_json1_1CreateDeploymentCommand;
const serializeAws_json1_1CreateInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CreateInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateInstanceCommand = serializeAws_json1_1CreateInstanceCommand;
const serializeAws_json1_1CreateLayerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CreateLayer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateLayerCommand = serializeAws_json1_1CreateLayerCommand;
const serializeAws_json1_1CreateStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CreateStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateStackCommand = serializeAws_json1_1CreateStackCommand;
const serializeAws_json1_1CreateUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.CreateUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserProfileCommand = serializeAws_json1_1CreateUserProfileCommand;
const serializeAws_json1_1DeleteAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeleteApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAppCommand = serializeAws_json1_1DeleteAppCommand;
const serializeAws_json1_1DeleteInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeleteInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteInstanceCommand = serializeAws_json1_1DeleteInstanceCommand;
const serializeAws_json1_1DeleteLayerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeleteLayer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteLayerCommand = serializeAws_json1_1DeleteLayerCommand;
const serializeAws_json1_1DeleteStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeleteStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteStackCommand = serializeAws_json1_1DeleteStackCommand;
const serializeAws_json1_1DeleteUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeleteUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserProfileCommand = serializeAws_json1_1DeleteUserProfileCommand;
const serializeAws_json1_1DeregisterEcsClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeregisterEcsCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterEcsClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterEcsClusterCommand = serializeAws_json1_1DeregisterEcsClusterCommand;
const serializeAws_json1_1DeregisterElasticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeregisterElasticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterElasticIpCommand = serializeAws_json1_1DeregisterElasticIpCommand;
const serializeAws_json1_1DeregisterInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeregisterInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterInstanceCommand = serializeAws_json1_1DeregisterInstanceCommand;
const serializeAws_json1_1DeregisterRdsDbInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeregisterRdsDbInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterRdsDbInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterRdsDbInstanceCommand = serializeAws_json1_1DeregisterRdsDbInstanceCommand;
const serializeAws_json1_1DeregisterVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DeregisterVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterVolumeCommand = serializeAws_json1_1DeregisterVolumeCommand;
const serializeAws_json1_1DescribeAgentVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeAgentVersions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAgentVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAgentVersionsCommand = serializeAws_json1_1DescribeAgentVersionsCommand;
const serializeAws_json1_1DescribeAppsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeApps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAppsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAppsCommand = serializeAws_json1_1DescribeAppsCommand;
const serializeAws_json1_1DescribeCommandsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeCommands",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCommandsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCommandsCommand = serializeAws_json1_1DescribeCommandsCommand;
const serializeAws_json1_1DescribeDeploymentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeDeployments",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDeploymentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDeploymentsCommand = serializeAws_json1_1DescribeDeploymentsCommand;
const serializeAws_json1_1DescribeEcsClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeEcsClusters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEcsClustersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEcsClustersCommand = serializeAws_json1_1DescribeEcsClustersCommand;
const serializeAws_json1_1DescribeElasticIpsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeElasticIps",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeElasticIpsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeElasticIpsCommand = serializeAws_json1_1DescribeElasticIpsCommand;
const serializeAws_json1_1DescribeElasticLoadBalancersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeElasticLoadBalancers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeElasticLoadBalancersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeElasticLoadBalancersCommand = serializeAws_json1_1DescribeElasticLoadBalancersCommand;
const serializeAws_json1_1DescribeInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstancesCommand = serializeAws_json1_1DescribeInstancesCommand;
const serializeAws_json1_1DescribeLayersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeLayers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLayersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLayersCommand = serializeAws_json1_1DescribeLayersCommand;
const serializeAws_json1_1DescribeLoadBasedAutoScalingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeLoadBasedAutoScaling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeLoadBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeLoadBasedAutoScalingCommand = serializeAws_json1_1DescribeLoadBasedAutoScalingCommand;
const serializeAws_json1_1DescribeMyUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeMyUserProfile",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMyUserProfileCommand = serializeAws_json1_1DescribeMyUserProfileCommand;
const serializeAws_json1_1DescribeOperatingSystemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeOperatingSystems",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOperatingSystemsCommand = serializeAws_json1_1DescribeOperatingSystemsCommand;
const serializeAws_json1_1DescribePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribePermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePermissionsCommand = serializeAws_json1_1DescribePermissionsCommand;
const serializeAws_json1_1DescribeRaidArraysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeRaidArrays",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRaidArraysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRaidArraysCommand = serializeAws_json1_1DescribeRaidArraysCommand;
const serializeAws_json1_1DescribeRdsDbInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeRdsDbInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRdsDbInstancesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRdsDbInstancesCommand = serializeAws_json1_1DescribeRdsDbInstancesCommand;
const serializeAws_json1_1DescribeServiceErrorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeServiceErrors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeServiceErrorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeServiceErrorsCommand = serializeAws_json1_1DescribeServiceErrorsCommand;
const serializeAws_json1_1DescribeStackProvisioningParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeStackProvisioningParameters",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStackProvisioningParametersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStackProvisioningParametersCommand = serializeAws_json1_1DescribeStackProvisioningParametersCommand;
const serializeAws_json1_1DescribeStacksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeStacks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStacksCommand = serializeAws_json1_1DescribeStacksCommand;
const serializeAws_json1_1DescribeStackSummaryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeStackSummary",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStackSummaryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeStackSummaryCommand = serializeAws_json1_1DescribeStackSummaryCommand;
const serializeAws_json1_1DescribeTimeBasedAutoScalingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeTimeBasedAutoScaling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTimeBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTimeBasedAutoScalingCommand = serializeAws_json1_1DescribeTimeBasedAutoScalingCommand;
const serializeAws_json1_1DescribeUserProfilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeUserProfiles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserProfilesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserProfilesCommand = serializeAws_json1_1DescribeUserProfilesCommand;
const serializeAws_json1_1DescribeVolumesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DescribeVolumes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVolumesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeVolumesCommand = serializeAws_json1_1DescribeVolumesCommand;
const serializeAws_json1_1DetachElasticLoadBalancerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DetachElasticLoadBalancer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachElasticLoadBalancerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachElasticLoadBalancerCommand = serializeAws_json1_1DetachElasticLoadBalancerCommand;
const serializeAws_json1_1DisassociateElasticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.DisassociateElasticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateElasticIpCommand = serializeAws_json1_1DisassociateElasticIpCommand;
const serializeAws_json1_1GetHostnameSuggestionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.GetHostnameSuggestion",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetHostnameSuggestionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetHostnameSuggestionCommand = serializeAws_json1_1GetHostnameSuggestionCommand;
const serializeAws_json1_1GrantAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.GrantAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GrantAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GrantAccessCommand = serializeAws_json1_1GrantAccessCommand;
const serializeAws_json1_1ListTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.ListTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
const serializeAws_json1_1RebootInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.RebootInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebootInstanceCommand = serializeAws_json1_1RebootInstanceCommand;
const serializeAws_json1_1RegisterEcsClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.RegisterEcsCluster",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterEcsClusterRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterEcsClusterCommand = serializeAws_json1_1RegisterEcsClusterCommand;
const serializeAws_json1_1RegisterElasticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.RegisterElasticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterElasticIpCommand = serializeAws_json1_1RegisterElasticIpCommand;
const serializeAws_json1_1RegisterInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.RegisterInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterInstanceCommand = serializeAws_json1_1RegisterInstanceCommand;
const serializeAws_json1_1RegisterRdsDbInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.RegisterRdsDbInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterRdsDbInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterRdsDbInstanceCommand = serializeAws_json1_1RegisterRdsDbInstanceCommand;
const serializeAws_json1_1RegisterVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.RegisterVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterVolumeCommand = serializeAws_json1_1RegisterVolumeCommand;
const serializeAws_json1_1SetLoadBasedAutoScalingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.SetLoadBasedAutoScaling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetLoadBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetLoadBasedAutoScalingCommand = serializeAws_json1_1SetLoadBasedAutoScalingCommand;
const serializeAws_json1_1SetPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.SetPermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetPermissionCommand = serializeAws_json1_1SetPermissionCommand;
const serializeAws_json1_1SetTimeBasedAutoScalingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.SetTimeBasedAutoScaling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SetTimeBasedAutoScalingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SetTimeBasedAutoScalingCommand = serializeAws_json1_1SetTimeBasedAutoScalingCommand;
const serializeAws_json1_1StartInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.StartInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartInstanceCommand = serializeAws_json1_1StartInstanceCommand;
const serializeAws_json1_1StartStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.StartStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartStackCommand = serializeAws_json1_1StartStackCommand;
const serializeAws_json1_1StopInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.StopInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopInstanceCommand = serializeAws_json1_1StopInstanceCommand;
const serializeAws_json1_1StopStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.StopStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopStackCommand = serializeAws_json1_1StopStackCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UnassignInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UnassignInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnassignInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnassignInstanceCommand = serializeAws_json1_1UnassignInstanceCommand;
const serializeAws_json1_1UnassignVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UnassignVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UnassignVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UnassignVolumeCommand = serializeAws_json1_1UnassignVolumeCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateApp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAppCommand = serializeAws_json1_1UpdateAppCommand;
const serializeAws_json1_1UpdateElasticIpCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateElasticIp",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateElasticIpRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateElasticIpCommand = serializeAws_json1_1UpdateElasticIpCommand;
const serializeAws_json1_1UpdateInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateInstanceCommand = serializeAws_json1_1UpdateInstanceCommand;
const serializeAws_json1_1UpdateLayerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateLayer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateLayerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateLayerCommand = serializeAws_json1_1UpdateLayerCommand;
const serializeAws_json1_1UpdateMyUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateMyUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMyUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMyUserProfileCommand = serializeAws_json1_1UpdateMyUserProfileCommand;
const serializeAws_json1_1UpdateRdsDbInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateRdsDbInstance",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRdsDbInstanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRdsDbInstanceCommand = serializeAws_json1_1UpdateRdsDbInstanceCommand;
const serializeAws_json1_1UpdateStackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateStack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateStackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateStackCommand = serializeAws_json1_1UpdateStackCommand;
const serializeAws_json1_1UpdateUserProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateUserProfile",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateUserProfileCommand = serializeAws_json1_1UpdateUserProfileCommand;
const serializeAws_json1_1UpdateVolumeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "OpsWorks_20130218.UpdateVolume",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateVolumeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateVolumeCommand = serializeAws_json1_1UpdateVolumeCommand;
const deserializeAws_json1_1AssignInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssignInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssignInstanceCommand = deserializeAws_json1_1AssignInstanceCommand;
const deserializeAws_json1_1AssignInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssignVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssignVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssignVolumeCommand = deserializeAws_json1_1AssignVolumeCommand;
const deserializeAws_json1_1AssignVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateElasticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateElasticIpCommand = deserializeAws_json1_1AssociateElasticIpCommand;
const deserializeAws_json1_1AssociateElasticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachElasticLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachElasticLoadBalancerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachElasticLoadBalancerCommand = deserializeAws_json1_1AttachElasticLoadBalancerCommand;
const deserializeAws_json1_1AttachElasticLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CloneStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CloneStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CloneStackResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CloneStackCommand = deserializeAws_json1_1CloneStackCommand;
const deserializeAws_json1_1CloneStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAppCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAppResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAppCommand = deserializeAws_json1_1CreateAppCommand;
const deserializeAws_json1_1CreateAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1CreateDeploymentResult(data, context);
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateInstanceCommand = deserializeAws_json1_1CreateInstanceCommand;
const deserializeAws_json1_1CreateInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateLayerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateLayerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateLayerResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateLayerCommand = deserializeAws_json1_1CreateLayerCommand;
const deserializeAws_json1_1CreateLayerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateStackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStackResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateStackCommand = deserializeAws_json1_1CreateStackCommand;
const deserializeAws_json1_1CreateStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserProfileCommand = deserializeAws_json1_1CreateUserProfileCommand;
const deserializeAws_json1_1CreateUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAppCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAppCommand = deserializeAws_json1_1DeleteAppCommand;
const deserializeAws_json1_1DeleteAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteInstanceCommand = deserializeAws_json1_1DeleteInstanceCommand;
const deserializeAws_json1_1DeleteInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteLayerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteLayerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteLayerCommand = deserializeAws_json1_1DeleteLayerCommand;
const deserializeAws_json1_1DeleteLayerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteStackCommand = deserializeAws_json1_1DeleteStackCommand;
const deserializeAws_json1_1DeleteStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserProfileCommand = deserializeAws_json1_1DeleteUserProfileCommand;
const deserializeAws_json1_1DeleteUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterEcsClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterEcsClusterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterEcsClusterCommand = deserializeAws_json1_1DeregisterEcsClusterCommand;
const deserializeAws_json1_1DeregisterEcsClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterElasticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterElasticIpCommand = deserializeAws_json1_1DeregisterElasticIpCommand;
const deserializeAws_json1_1DeregisterElasticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterInstanceCommand = deserializeAws_json1_1DeregisterInstanceCommand;
const deserializeAws_json1_1DeregisterInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterRdsDbInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterRdsDbInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterRdsDbInstanceCommand = deserializeAws_json1_1DeregisterRdsDbInstanceCommand;
const deserializeAws_json1_1DeregisterRdsDbInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterVolumeCommand = deserializeAws_json1_1DeregisterVolumeCommand;
const deserializeAws_json1_1DeregisterVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAgentVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAgentVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAgentVersionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAgentVersionsCommand = deserializeAws_json1_1DescribeAgentVersionsCommand;
const deserializeAws_json1_1DescribeAgentVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAppsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAppsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAppsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAppsCommand = deserializeAws_json1_1DescribeAppsCommand;
const deserializeAws_json1_1DescribeAppsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeCommandsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCommandsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCommandsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCommandsCommand = deserializeAws_json1_1DescribeCommandsCommand;
const deserializeAws_json1_1DescribeCommandsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDeploymentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDeploymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDeploymentsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDeploymentsCommand = deserializeAws_json1_1DescribeDeploymentsCommand;
const deserializeAws_json1_1DescribeDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEcsClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEcsClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEcsClustersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEcsClustersCommand = deserializeAws_json1_1DescribeEcsClustersCommand;
const deserializeAws_json1_1DescribeEcsClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeElasticIpsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeElasticIpsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeElasticIpsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeElasticIpsCommand = deserializeAws_json1_1DescribeElasticIpsCommand;
const deserializeAws_json1_1DescribeElasticIpsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeElasticLoadBalancersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeElasticLoadBalancersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeElasticLoadBalancersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeElasticLoadBalancersCommand = deserializeAws_json1_1DescribeElasticLoadBalancersCommand;
const deserializeAws_json1_1DescribeElasticLoadBalancersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeInstancesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeInstancesCommand = deserializeAws_json1_1DescribeInstancesCommand;
const deserializeAws_json1_1DescribeInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeLayersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLayersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLayersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLayersCommand = deserializeAws_json1_1DescribeLayersCommand;
const deserializeAws_json1_1DescribeLayersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeLoadBasedAutoScalingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand = deserializeAws_json1_1DescribeLoadBasedAutoScalingCommand;
const deserializeAws_json1_1DescribeLoadBasedAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMyUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMyUserProfileCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMyUserProfileResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMyUserProfileCommand = deserializeAws_json1_1DescribeMyUserProfileCommand;
const deserializeAws_json1_1DescribeMyUserProfileCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribeOperatingSystemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOperatingSystemsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOperatingSystemsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOperatingSystemsCommand = deserializeAws_json1_1DescribeOperatingSystemsCommand;
const deserializeAws_json1_1DescribeOperatingSystemsCommandError = async (output, context) => {
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
const deserializeAws_json1_1DescribePermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePermissionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePermissionsCommand = deserializeAws_json1_1DescribePermissionsCommand;
const deserializeAws_json1_1DescribePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRaidArraysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRaidArraysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRaidArraysResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRaidArraysCommand = deserializeAws_json1_1DescribeRaidArraysCommand;
const deserializeAws_json1_1DescribeRaidArraysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRdsDbInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRdsDbInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRdsDbInstancesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRdsDbInstancesCommand = deserializeAws_json1_1DescribeRdsDbInstancesCommand;
const deserializeAws_json1_1DescribeRdsDbInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeServiceErrorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeServiceErrorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeServiceErrorsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeServiceErrorsCommand = deserializeAws_json1_1DescribeServiceErrorsCommand;
const deserializeAws_json1_1DescribeServiceErrorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStackProvisioningParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStackProvisioningParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStackProvisioningParametersResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStackProvisioningParametersCommand = deserializeAws_json1_1DescribeStackProvisioningParametersCommand;
const deserializeAws_json1_1DescribeStackProvisioningParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStacksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStacksResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStacksCommand = deserializeAws_json1_1DescribeStacksCommand;
const deserializeAws_json1_1DescribeStacksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeStackSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeStackSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStackSummaryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeStackSummaryCommand = deserializeAws_json1_1DescribeStackSummaryCommand;
const deserializeAws_json1_1DescribeStackSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTimeBasedAutoScalingResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand = deserializeAws_json1_1DescribeTimeBasedAutoScalingCommand;
const deserializeAws_json1_1DescribeTimeBasedAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserProfilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserProfilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserProfilesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserProfilesCommand = deserializeAws_json1_1DescribeUserProfilesCommand;
const deserializeAws_json1_1DescribeUserProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeVolumesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeVolumesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVolumesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeVolumesCommand = deserializeAws_json1_1DescribeVolumesCommand;
const deserializeAws_json1_1DescribeVolumesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetachElasticLoadBalancerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachElasticLoadBalancerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachElasticLoadBalancerCommand = deserializeAws_json1_1DetachElasticLoadBalancerCommand;
const deserializeAws_json1_1DetachElasticLoadBalancerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateElasticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateElasticIpCommand = deserializeAws_json1_1DisassociateElasticIpCommand;
const deserializeAws_json1_1DisassociateElasticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetHostnameSuggestionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetHostnameSuggestionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetHostnameSuggestionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetHostnameSuggestionCommand = deserializeAws_json1_1GetHostnameSuggestionCommand;
const deserializeAws_json1_1GetHostnameSuggestionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GrantAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GrantAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GrantAccessResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GrantAccessCommand = deserializeAws_json1_1GrantAccessCommand;
const deserializeAws_json1_1GrantAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
const deserializeAws_json1_1ListTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RebootInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebootInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebootInstanceCommand = deserializeAws_json1_1RebootInstanceCommand;
const deserializeAws_json1_1RebootInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterEcsClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterEcsClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterEcsClusterResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterEcsClusterCommand = deserializeAws_json1_1RegisterEcsClusterCommand;
const deserializeAws_json1_1RegisterEcsClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterElasticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterElasticIpCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterElasticIpResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterElasticIpCommand = deserializeAws_json1_1RegisterElasticIpCommand;
const deserializeAws_json1_1RegisterElasticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterInstanceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterInstanceCommand = deserializeAws_json1_1RegisterInstanceCommand;
const deserializeAws_json1_1RegisterInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterRdsDbInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterRdsDbInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterRdsDbInstanceCommand = deserializeAws_json1_1RegisterRdsDbInstanceCommand;
const deserializeAws_json1_1RegisterRdsDbInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterVolumeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterVolumeResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterVolumeCommand = deserializeAws_json1_1RegisterVolumeCommand;
const deserializeAws_json1_1RegisterVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetLoadBasedAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetLoadBasedAutoScalingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetLoadBasedAutoScalingCommand = deserializeAws_json1_1SetLoadBasedAutoScalingCommand;
const deserializeAws_json1_1SetLoadBasedAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetPermissionCommand = deserializeAws_json1_1SetPermissionCommand;
const deserializeAws_json1_1SetPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SetTimeBasedAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SetTimeBasedAutoScalingCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SetTimeBasedAutoScalingCommand = deserializeAws_json1_1SetTimeBasedAutoScalingCommand;
const deserializeAws_json1_1SetTimeBasedAutoScalingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartInstanceCommand = deserializeAws_json1_1StartInstanceCommand;
const deserializeAws_json1_1StartInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartStackCommand = deserializeAws_json1_1StartStackCommand;
const deserializeAws_json1_1StartStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopInstanceCommand = deserializeAws_json1_1StopInstanceCommand;
const deserializeAws_json1_1StopInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopStackCommand = deserializeAws_json1_1StopStackCommand;
const deserializeAws_json1_1StopStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UnassignInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnassignInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnassignInstanceCommand = deserializeAws_json1_1UnassignInstanceCommand;
const deserializeAws_json1_1UnassignInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UnassignVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UnassignVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UnassignVolumeCommand = deserializeAws_json1_1UnassignVolumeCommand;
const deserializeAws_json1_1UnassignVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateAppCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAppCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAppCommand = deserializeAws_json1_1UpdateAppCommand;
const deserializeAws_json1_1UpdateAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateElasticIpCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateElasticIpCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateElasticIpCommand = deserializeAws_json1_1UpdateElasticIpCommand;
const deserializeAws_json1_1UpdateElasticIpCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateInstanceCommand = deserializeAws_json1_1UpdateInstanceCommand;
const deserializeAws_json1_1UpdateInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateLayerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateLayerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateLayerCommand = deserializeAws_json1_1UpdateLayerCommand;
const deserializeAws_json1_1UpdateLayerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateMyUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMyUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMyUserProfileCommand = deserializeAws_json1_1UpdateMyUserProfileCommand;
const deserializeAws_json1_1UpdateMyUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRdsDbInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRdsDbInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRdsDbInstanceCommand = deserializeAws_json1_1UpdateRdsDbInstanceCommand;
const deserializeAws_json1_1UpdateRdsDbInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateStackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateStackCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateStackCommand = deserializeAws_json1_1UpdateStackCommand;
const deserializeAws_json1_1UpdateStackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateUserProfileCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateUserProfileCommand = deserializeAws_json1_1UpdateUserProfileCommand;
const deserializeAws_json1_1UpdateUserProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateVolumeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateVolumeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateVolumeCommand = deserializeAws_json1_1UpdateVolumeCommand;
const deserializeAws_json1_1UpdateVolumeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.opsworks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.opsworks#ValidationException":
            response = {
                ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ValidationException(body, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AppAttributes = (input, context) => {
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
const serializeAws_json1_1AssignInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    };
};
const serializeAws_json1_1AssignVolumeRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
    };
};
const serializeAws_json1_1AssociateElasticIpRequest = (input, context) => {
    return {
        ...(input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1AttachElasticLoadBalancerRequest = (input, context) => {
    return {
        ...(input.ElasticLoadBalancerName !== undefined &&
            input.ElasticLoadBalancerName !== null && { ElasticLoadBalancerName: input.ElasticLoadBalancerName }),
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
    };
};
const serializeAws_json1_1AutoScalingThresholds = (input, context) => {
    return {
        ...(input.Alarms !== undefined &&
            input.Alarms !== null && { Alarms: serializeAws_json1_1Strings(input.Alarms, context) }),
        ...(input.CpuThreshold !== undefined && input.CpuThreshold !== null && { CpuThreshold: input.CpuThreshold }),
        ...(input.IgnoreMetricsTime !== undefined &&
            input.IgnoreMetricsTime !== null && { IgnoreMetricsTime: input.IgnoreMetricsTime }),
        ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
        ...(input.LoadThreshold !== undefined && input.LoadThreshold !== null && { LoadThreshold: input.LoadThreshold }),
        ...(input.MemoryThreshold !== undefined &&
            input.MemoryThreshold !== null && { MemoryThreshold: input.MemoryThreshold }),
        ...(input.ThresholdsWaitTime !== undefined &&
            input.ThresholdsWaitTime !== null && { ThresholdsWaitTime: input.ThresholdsWaitTime }),
    };
};
const serializeAws_json1_1BlockDeviceMapping = (input, context) => {
    return {
        ...(input.DeviceName !== undefined && input.DeviceName !== null && { DeviceName: input.DeviceName }),
        ...(input.Ebs !== undefined &&
            input.Ebs !== null && { Ebs: serializeAws_json1_1EbsBlockDevice(input.Ebs, context) }),
        ...(input.NoDevice !== undefined && input.NoDevice !== null && { NoDevice: input.NoDevice }),
        ...(input.VirtualName !== undefined && input.VirtualName !== null && { VirtualName: input.VirtualName }),
    };
};
const serializeAws_json1_1BlockDeviceMappings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1BlockDeviceMapping(entry, context);
    });
};
const serializeAws_json1_1ChefConfiguration = (input, context) => {
    return {
        ...(input.BerkshelfVersion !== undefined &&
            input.BerkshelfVersion !== null && { BerkshelfVersion: input.BerkshelfVersion }),
        ...(input.ManageBerkshelf !== undefined &&
            input.ManageBerkshelf !== null && { ManageBerkshelf: input.ManageBerkshelf }),
    };
};
const serializeAws_json1_1CloneStackRequest = (input, context) => {
    return {
        ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1StackAttributes(input.Attributes, context) }),
        ...(input.ChefConfiguration !== undefined &&
            input.ChefConfiguration !== null && {
            ChefConfiguration: serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context),
        }),
        ...(input.CloneAppIds !== undefined &&
            input.CloneAppIds !== null && { CloneAppIds: serializeAws_json1_1Strings(input.CloneAppIds, context) }),
        ...(input.ClonePermissions !== undefined &&
            input.ClonePermissions !== null && { ClonePermissions: input.ClonePermissions }),
        ...(input.ConfigurationManager !== undefined &&
            input.ConfigurationManager !== null && {
            ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
        }),
        ...(input.CustomCookbooksSource !== undefined &&
            input.CustomCookbooksSource !== null && {
            CustomCookbooksSource: serializeAws_json1_1Source(input.CustomCookbooksSource, context),
        }),
        ...(input.CustomJson !== undefined && input.CustomJson !== null && { CustomJson: input.CustomJson }),
        ...(input.DefaultAvailabilityZone !== undefined &&
            input.DefaultAvailabilityZone !== null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
        ...(input.DefaultInstanceProfileArn !== undefined &&
            input.DefaultInstanceProfileArn !== null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
        ...(input.DefaultOs !== undefined && input.DefaultOs !== null && { DefaultOs: input.DefaultOs }),
        ...(input.DefaultRootDeviceType !== undefined &&
            input.DefaultRootDeviceType !== null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
        ...(input.DefaultSshKeyName !== undefined &&
            input.DefaultSshKeyName !== null && { DefaultSshKeyName: input.DefaultSshKeyName }),
        ...(input.DefaultSubnetId !== undefined &&
            input.DefaultSubnetId !== null && { DefaultSubnetId: input.DefaultSubnetId }),
        ...(input.HostnameTheme !== undefined && input.HostnameTheme !== null && { HostnameTheme: input.HostnameTheme }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.SourceStackId !== undefined && input.SourceStackId !== null && { SourceStackId: input.SourceStackId }),
        ...(input.UseCustomCookbooks !== undefined &&
            input.UseCustomCookbooks !== null && { UseCustomCookbooks: input.UseCustomCookbooks }),
        ...(input.UseOpsworksSecurityGroups !== undefined &&
            input.UseOpsworksSecurityGroups !== null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1CloudWatchLogsConfiguration = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.LogStreams !== undefined &&
            input.LogStreams !== null && {
            LogStreams: serializeAws_json1_1CloudWatchLogsLogStreams(input.LogStreams, context),
        }),
    };
};
const serializeAws_json1_1CloudWatchLogsLogStream = (input, context) => {
    return {
        ...(input.BatchCount !== undefined && input.BatchCount !== null && { BatchCount: input.BatchCount }),
        ...(input.BatchSize !== undefined && input.BatchSize !== null && { BatchSize: input.BatchSize }),
        ...(input.BufferDuration !== undefined &&
            input.BufferDuration !== null && { BufferDuration: input.BufferDuration }),
        ...(input.DatetimeFormat !== undefined &&
            input.DatetimeFormat !== null && { DatetimeFormat: input.DatetimeFormat }),
        ...(input.Encoding !== undefined && input.Encoding !== null && { Encoding: input.Encoding }),
        ...(input.File !== undefined && input.File !== null && { File: input.File }),
        ...(input.FileFingerprintLines !== undefined &&
            input.FileFingerprintLines !== null && { FileFingerprintLines: input.FileFingerprintLines }),
        ...(input.InitialPosition !== undefined &&
            input.InitialPosition !== null && { InitialPosition: input.InitialPosition }),
        ...(input.LogGroupName !== undefined && input.LogGroupName !== null && { LogGroupName: input.LogGroupName }),
        ...(input.MultiLineStartPattern !== undefined &&
            input.MultiLineStartPattern !== null && { MultiLineStartPattern: input.MultiLineStartPattern }),
        ...(input.TimeZone !== undefined && input.TimeZone !== null && { TimeZone: input.TimeZone }),
    };
};
const serializeAws_json1_1CloudWatchLogsLogStreams = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1CloudWatchLogsLogStream(entry, context);
    });
};
const serializeAws_json1_1CreateAppRequest = (input, context) => {
    return {
        ...(input.AppSource !== undefined &&
            input.AppSource !== null && { AppSource: serializeAws_json1_1Source(input.AppSource, context) }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1AppAttributes(input.Attributes, context) }),
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && { DataSources: serializeAws_json1_1DataSources(input.DataSources, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Domains !== undefined &&
            input.Domains !== null && { Domains: serializeAws_json1_1Strings(input.Domains, context) }),
        ...(input.EnableSsl !== undefined && input.EnableSsl !== null && { EnableSsl: input.EnableSsl }),
        ...(input.Environment !== undefined &&
            input.Environment !== null && {
            Environment: serializeAws_json1_1EnvironmentVariables(input.Environment, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Shortname !== undefined && input.Shortname !== null && { Shortname: input.Shortname }),
        ...(input.SslConfiguration !== undefined &&
            input.SslConfiguration !== null && {
            SslConfiguration: serializeAws_json1_1SslConfiguration(input.SslConfiguration, context),
        }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1CreateDeploymentRequest = (input, context) => {
    return {
        ...(input.AppId !== undefined && input.AppId !== null && { AppId: input.AppId }),
        ...(input.Command !== undefined &&
            input.Command !== null && { Command: serializeAws_json1_1DeploymentCommand(input.Command, context) }),
        ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
        ...(input.CustomJson !== undefined && input.CustomJson !== null && { CustomJson: input.CustomJson }),
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1Strings(input.InstanceIds, context) }),
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1CreateInstanceRequest = (input, context) => {
    return {
        ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
        ...(input.AmiId !== undefined && input.AmiId !== null && { AmiId: input.AmiId }),
        ...(input.Architecture !== undefined && input.Architecture !== null && { Architecture: input.Architecture }),
        ...(input.AutoScalingType !== undefined &&
            input.AutoScalingType !== null && { AutoScalingType: input.AutoScalingType }),
        ...(input.AvailabilityZone !== undefined &&
            input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
        ...(input.BlockDeviceMappings !== undefined &&
            input.BlockDeviceMappings !== null && {
            BlockDeviceMappings: serializeAws_json1_1BlockDeviceMappings(input.BlockDeviceMappings, context),
        }),
        ...(input.EbsOptimized !== undefined && input.EbsOptimized !== null && { EbsOptimized: input.EbsOptimized }),
        ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
        ...(input.InstallUpdatesOnBoot !== undefined &&
            input.InstallUpdatesOnBoot !== null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
        ...(input.Os !== undefined && input.Os !== null && { Os: input.Os }),
        ...(input.RootDeviceType !== undefined &&
            input.RootDeviceType !== null && { RootDeviceType: input.RootDeviceType }),
        ...(input.SshKeyName !== undefined && input.SshKeyName !== null && { SshKeyName: input.SshKeyName }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
        ...(input.Tenancy !== undefined && input.Tenancy !== null && { Tenancy: input.Tenancy }),
        ...(input.VirtualizationType !== undefined &&
            input.VirtualizationType !== null && { VirtualizationType: input.VirtualizationType }),
    };
};
const serializeAws_json1_1CreateLayerRequest = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1LayerAttributes(input.Attributes, context) }),
        ...(input.AutoAssignElasticIps !== undefined &&
            input.AutoAssignElasticIps !== null && { AutoAssignElasticIps: input.AutoAssignElasticIps }),
        ...(input.AutoAssignPublicIps !== undefined &&
            input.AutoAssignPublicIps !== null && { AutoAssignPublicIps: input.AutoAssignPublicIps }),
        ...(input.CloudWatchLogsConfiguration !== undefined &&
            input.CloudWatchLogsConfiguration !== null && {
            CloudWatchLogsConfiguration: serializeAws_json1_1CloudWatchLogsConfiguration(input.CloudWatchLogsConfiguration, context),
        }),
        ...(input.CustomInstanceProfileArn !== undefined &&
            input.CustomInstanceProfileArn !== null && { CustomInstanceProfileArn: input.CustomInstanceProfileArn }),
        ...(input.CustomJson !== undefined && input.CustomJson !== null && { CustomJson: input.CustomJson }),
        ...(input.CustomRecipes !== undefined &&
            input.CustomRecipes !== null && { CustomRecipes: serializeAws_json1_1Recipes(input.CustomRecipes, context) }),
        ...(input.CustomSecurityGroupIds !== undefined &&
            input.CustomSecurityGroupIds !== null && {
            CustomSecurityGroupIds: serializeAws_json1_1Strings(input.CustomSecurityGroupIds, context),
        }),
        ...(input.EnableAutoHealing !== undefined &&
            input.EnableAutoHealing !== null && { EnableAutoHealing: input.EnableAutoHealing }),
        ...(input.InstallUpdatesOnBoot !== undefined &&
            input.InstallUpdatesOnBoot !== null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
        ...(input.LifecycleEventConfiguration !== undefined &&
            input.LifecycleEventConfiguration !== null && {
            LifecycleEventConfiguration: serializeAws_json1_1LifecycleEventConfiguration(input.LifecycleEventConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Packages !== undefined &&
            input.Packages !== null && { Packages: serializeAws_json1_1Strings(input.Packages, context) }),
        ...(input.Shortname !== undefined && input.Shortname !== null && { Shortname: input.Shortname }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.UseEbsOptimizedInstances !== undefined &&
            input.UseEbsOptimizedInstances !== null && { UseEbsOptimizedInstances: input.UseEbsOptimizedInstances }),
        ...(input.VolumeConfigurations !== undefined &&
            input.VolumeConfigurations !== null && {
            VolumeConfigurations: serializeAws_json1_1VolumeConfigurations(input.VolumeConfigurations, context),
        }),
    };
};
const serializeAws_json1_1CreateStackRequest = (input, context) => {
    return {
        ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1StackAttributes(input.Attributes, context) }),
        ...(input.ChefConfiguration !== undefined &&
            input.ChefConfiguration !== null && {
            ChefConfiguration: serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context),
        }),
        ...(input.ConfigurationManager !== undefined &&
            input.ConfigurationManager !== null && {
            ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
        }),
        ...(input.CustomCookbooksSource !== undefined &&
            input.CustomCookbooksSource !== null && {
            CustomCookbooksSource: serializeAws_json1_1Source(input.CustomCookbooksSource, context),
        }),
        ...(input.CustomJson !== undefined && input.CustomJson !== null && { CustomJson: input.CustomJson }),
        ...(input.DefaultAvailabilityZone !== undefined &&
            input.DefaultAvailabilityZone !== null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
        ...(input.DefaultInstanceProfileArn !== undefined &&
            input.DefaultInstanceProfileArn !== null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
        ...(input.DefaultOs !== undefined && input.DefaultOs !== null && { DefaultOs: input.DefaultOs }),
        ...(input.DefaultRootDeviceType !== undefined &&
            input.DefaultRootDeviceType !== null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
        ...(input.DefaultSshKeyName !== undefined &&
            input.DefaultSshKeyName !== null && { DefaultSshKeyName: input.DefaultSshKeyName }),
        ...(input.DefaultSubnetId !== undefined &&
            input.DefaultSubnetId !== null && { DefaultSubnetId: input.DefaultSubnetId }),
        ...(input.HostnameTheme !== undefined && input.HostnameTheme !== null && { HostnameTheme: input.HostnameTheme }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.UseCustomCookbooks !== undefined &&
            input.UseCustomCookbooks !== null && { UseCustomCookbooks: input.UseCustomCookbooks }),
        ...(input.UseOpsworksSecurityGroups !== undefined &&
            input.UseOpsworksSecurityGroups !== null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
        ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    };
};
const serializeAws_json1_1CreateUserProfileRequest = (input, context) => {
    return {
        ...(input.AllowSelfManagement !== undefined &&
            input.AllowSelfManagement !== null && { AllowSelfManagement: input.AllowSelfManagement }),
        ...(input.IamUserArn !== undefined && input.IamUserArn !== null && { IamUserArn: input.IamUserArn }),
        ...(input.SshPublicKey !== undefined && input.SshPublicKey !== null && { SshPublicKey: input.SshPublicKey }),
        ...(input.SshUsername !== undefined && input.SshUsername !== null && { SshUsername: input.SshUsername }),
    };
};
const serializeAws_json1_1DailyAutoScalingSchedule = (input, context) => {
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
const serializeAws_json1_1DataSource = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DataSources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataSource(entry, context);
    });
};
const serializeAws_json1_1DeleteAppRequest = (input, context) => {
    return {
        ...(input.AppId !== undefined && input.AppId !== null && { AppId: input.AppId }),
    };
};
const serializeAws_json1_1DeleteInstanceRequest = (input, context) => {
    return {
        ...(input.DeleteElasticIp !== undefined &&
            input.DeleteElasticIp !== null && { DeleteElasticIp: input.DeleteElasticIp }),
        ...(input.DeleteVolumes !== undefined && input.DeleteVolumes !== null && { DeleteVolumes: input.DeleteVolumes }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1DeleteLayerRequest = (input, context) => {
    return {
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
    };
};
const serializeAws_json1_1DeleteStackRequest = (input, context) => {
    return {
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DeleteUserProfileRequest = (input, context) => {
    return {
        ...(input.IamUserArn !== undefined && input.IamUserArn !== null && { IamUserArn: input.IamUserArn }),
    };
};
const serializeAws_json1_1DeploymentCommand = (input, context) => {
    return {
        ...(input.Args !== undefined &&
            input.Args !== null && { Args: serializeAws_json1_1DeploymentCommandArgs(input.Args, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeploymentCommandArgs = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1Strings(value, context),
        };
    }, {});
};
const serializeAws_json1_1DeregisterEcsClusterRequest = (input, context) => {
    return {
        ...(input.EcsClusterArn !== undefined && input.EcsClusterArn !== null && { EcsClusterArn: input.EcsClusterArn }),
    };
};
const serializeAws_json1_1DeregisterElasticIpRequest = (input, context) => {
    return {
        ...(input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp }),
    };
};
const serializeAws_json1_1DeregisterInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1DeregisterRdsDbInstanceRequest = (input, context) => {
    return {
        ...(input.RdsDbInstanceArn !== undefined &&
            input.RdsDbInstanceArn !== null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
    };
};
const serializeAws_json1_1DeregisterVolumeRequest = (input, context) => {
    return {
        ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
    };
};
const serializeAws_json1_1DescribeAgentVersionsRequest = (input, context) => {
    return {
        ...(input.ConfigurationManager !== undefined &&
            input.ConfigurationManager !== null && {
            ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
        }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeAppsRequest = (input, context) => {
    return {
        ...(input.AppIds !== undefined &&
            input.AppIds !== null && { AppIds: serializeAws_json1_1Strings(input.AppIds, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeCommandsRequest = (input, context) => {
    return {
        ...(input.CommandIds !== undefined &&
            input.CommandIds !== null && { CommandIds: serializeAws_json1_1Strings(input.CommandIds, context) }),
        ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1DescribeDeploymentsRequest = (input, context) => {
    return {
        ...(input.AppId !== undefined && input.AppId !== null && { AppId: input.AppId }),
        ...(input.DeploymentIds !== undefined &&
            input.DeploymentIds !== null && { DeploymentIds: serializeAws_json1_1Strings(input.DeploymentIds, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeEcsClustersRequest = (input, context) => {
    return {
        ...(input.EcsClusterArns !== undefined &&
            input.EcsClusterArns !== null && { EcsClusterArns: serializeAws_json1_1Strings(input.EcsClusterArns, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeElasticIpsRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Ips !== undefined && input.Ips !== null && { Ips: serializeAws_json1_1Strings(input.Ips, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeElasticLoadBalancersRequest = (input, context) => {
    return {
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeInstancesRequest = (input, context) => {
    return {
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1Strings(input.InstanceIds, context) }),
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeLayersRequest = (input, context) => {
    return {
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeLoadBasedAutoScalingRequest = (input, context) => {
    return {
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
    };
};
const serializeAws_json1_1DescribePermissionsRequest = (input, context) => {
    return {
        ...(input.IamUserArn !== undefined && input.IamUserArn !== null && { IamUserArn: input.IamUserArn }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeRaidArraysRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.RaidArrayIds !== undefined &&
            input.RaidArrayIds !== null && { RaidArrayIds: serializeAws_json1_1Strings(input.RaidArrayIds, context) }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeRdsDbInstancesRequest = (input, context) => {
    return {
        ...(input.RdsDbInstanceArns !== undefined &&
            input.RdsDbInstanceArns !== null && {
            RdsDbInstanceArns: serializeAws_json1_1Strings(input.RdsDbInstanceArns, context),
        }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeServiceErrorsRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ServiceErrorIds !== undefined &&
            input.ServiceErrorIds !== null && {
            ServiceErrorIds: serializeAws_json1_1Strings(input.ServiceErrorIds, context),
        }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeStackProvisioningParametersRequest = (input, context) => {
    return {
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeStacksRequest = (input, context) => {
    return {
        ...(input.StackIds !== undefined &&
            input.StackIds !== null && { StackIds: serializeAws_json1_1Strings(input.StackIds, context) }),
    };
};
const serializeAws_json1_1DescribeStackSummaryRequest = (input, context) => {
    return {
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1DescribeTimeBasedAutoScalingRequest = (input, context) => {
    return {
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && { InstanceIds: serializeAws_json1_1Strings(input.InstanceIds, context) }),
    };
};
const serializeAws_json1_1DescribeUserProfilesRequest = (input, context) => {
    return {
        ...(input.IamUserArns !== undefined &&
            input.IamUserArns !== null && { IamUserArns: serializeAws_json1_1Strings(input.IamUserArns, context) }),
    };
};
const serializeAws_json1_1DescribeVolumesRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.RaidArrayId !== undefined && input.RaidArrayId !== null && { RaidArrayId: input.RaidArrayId }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
        ...(input.VolumeIds !== undefined &&
            input.VolumeIds !== null && { VolumeIds: serializeAws_json1_1Strings(input.VolumeIds, context) }),
    };
};
const serializeAws_json1_1DetachElasticLoadBalancerRequest = (input, context) => {
    return {
        ...(input.ElasticLoadBalancerName !== undefined &&
            input.ElasticLoadBalancerName !== null && { ElasticLoadBalancerName: input.ElasticLoadBalancerName }),
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
    };
};
const serializeAws_json1_1DisassociateElasticIpRequest = (input, context) => {
    return {
        ...(input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp }),
    };
};
const serializeAws_json1_1EbsBlockDevice = (input, context) => {
    return {
        ...(input.DeleteOnTermination !== undefined &&
            input.DeleteOnTermination !== null && { DeleteOnTermination: input.DeleteOnTermination }),
        ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
        ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
        ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize }),
        ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
    };
};
const serializeAws_json1_1EnvironmentVariable = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Secure !== undefined && input.Secure !== null && { Secure: input.Secure }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1EnvironmentVariables = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EnvironmentVariable(entry, context);
    });
};
const serializeAws_json1_1GetHostnameSuggestionRequest = (input, context) => {
    return {
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
    };
};
const serializeAws_json1_1GrantAccessRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.ValidForInMinutes !== undefined &&
            input.ValidForInMinutes !== null && { ValidForInMinutes: input.ValidForInMinutes }),
    };
};
const serializeAws_json1_1InstanceIdentity = (input, context) => {
    return {
        ...(input.Document !== undefined && input.Document !== null && { Document: input.Document }),
        ...(input.Signature !== undefined && input.Signature !== null && { Signature: input.Signature }),
    };
};
const serializeAws_json1_1LayerAttributes = (input, context) => {
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
const serializeAws_json1_1LifecycleEventConfiguration = (input, context) => {
    return {
        ...(input.Shutdown !== undefined &&
            input.Shutdown !== null && { Shutdown: serializeAws_json1_1ShutdownEventConfiguration(input.Shutdown, context) }),
    };
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1RebootInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1Recipes = (input, context) => {
    return {
        ...(input.Configure !== undefined &&
            input.Configure !== null && { Configure: serializeAws_json1_1Strings(input.Configure, context) }),
        ...(input.Deploy !== undefined &&
            input.Deploy !== null && { Deploy: serializeAws_json1_1Strings(input.Deploy, context) }),
        ...(input.Setup !== undefined &&
            input.Setup !== null && { Setup: serializeAws_json1_1Strings(input.Setup, context) }),
        ...(input.Shutdown !== undefined &&
            input.Shutdown !== null && { Shutdown: serializeAws_json1_1Strings(input.Shutdown, context) }),
        ...(input.Undeploy !== undefined &&
            input.Undeploy !== null && { Undeploy: serializeAws_json1_1Strings(input.Undeploy, context) }),
    };
};
const serializeAws_json1_1RegisterEcsClusterRequest = (input, context) => {
    return {
        ...(input.EcsClusterArn !== undefined && input.EcsClusterArn !== null && { EcsClusterArn: input.EcsClusterArn }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1RegisterElasticIpRequest = (input, context) => {
    return {
        ...(input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1RegisterInstanceRequest = (input, context) => {
    return {
        ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
        ...(input.InstanceIdentity !== undefined &&
            input.InstanceIdentity !== null && {
            InstanceIdentity: serializeAws_json1_1InstanceIdentity(input.InstanceIdentity, context),
        }),
        ...(input.PrivateIp !== undefined && input.PrivateIp !== null && { PrivateIp: input.PrivateIp }),
        ...(input.PublicIp !== undefined && input.PublicIp !== null && { PublicIp: input.PublicIp }),
        ...(input.RsaPublicKey !== undefined && input.RsaPublicKey !== null && { RsaPublicKey: input.RsaPublicKey }),
        ...(input.RsaPublicKeyFingerprint !== undefined &&
            input.RsaPublicKeyFingerprint !== null && { RsaPublicKeyFingerprint: input.RsaPublicKeyFingerprint }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1RegisterRdsDbInstanceRequest = (input, context) => {
    return {
        ...(input.DbPassword !== undefined && input.DbPassword !== null && { DbPassword: input.DbPassword }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.RdsDbInstanceArn !== undefined &&
            input.RdsDbInstanceArn !== null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1RegisterVolumeRequest = (input, context) => {
    return {
        ...(input.Ec2VolumeId !== undefined && input.Ec2VolumeId !== null && { Ec2VolumeId: input.Ec2VolumeId }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1SetLoadBasedAutoScalingRequest = (input, context) => {
    return {
        ...(input.DownScaling !== undefined &&
            input.DownScaling !== null && {
            DownScaling: serializeAws_json1_1AutoScalingThresholds(input.DownScaling, context),
        }),
        ...(input.Enable !== undefined && input.Enable !== null && { Enable: input.Enable }),
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
        ...(input.UpScaling !== undefined &&
            input.UpScaling !== null && { UpScaling: serializeAws_json1_1AutoScalingThresholds(input.UpScaling, context) }),
    };
};
const serializeAws_json1_1SetPermissionRequest = (input, context) => {
    return {
        ...(input.AllowSsh !== undefined && input.AllowSsh !== null && { AllowSsh: input.AllowSsh }),
        ...(input.AllowSudo !== undefined && input.AllowSudo !== null && { AllowSudo: input.AllowSudo }),
        ...(input.IamUserArn !== undefined && input.IamUserArn !== null && { IamUserArn: input.IamUserArn }),
        ...(input.Level !== undefined && input.Level !== null && { Level: input.Level }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1SetTimeBasedAutoScalingRequest = (input, context) => {
    return {
        ...(input.AutoScalingSchedule !== undefined &&
            input.AutoScalingSchedule !== null && {
            AutoScalingSchedule: serializeAws_json1_1WeeklyAutoScalingSchedule(input.AutoScalingSchedule, context),
        }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1ShutdownEventConfiguration = (input, context) => {
    return {
        ...(input.DelayUntilElbConnectionsDrained !== undefined &&
            input.DelayUntilElbConnectionsDrained !== null && {
            DelayUntilElbConnectionsDrained: input.DelayUntilElbConnectionsDrained,
        }),
        ...(input.ExecutionTimeout !== undefined &&
            input.ExecutionTimeout !== null && { ExecutionTimeout: input.ExecutionTimeout }),
    };
};
const serializeAws_json1_1Source = (input, context) => {
    return {
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Revision !== undefined && input.Revision !== null && { Revision: input.Revision }),
        ...(input.SshKey !== undefined && input.SshKey !== null && { SshKey: input.SshKey }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1SslConfiguration = (input, context) => {
    return {
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.Chain !== undefined && input.Chain !== null && { Chain: input.Chain }),
        ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
    };
};
const serializeAws_json1_1StackAttributes = (input, context) => {
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
const serializeAws_json1_1StackConfigurationManager = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1StartInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1StartStackRequest = (input, context) => {
    return {
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1StopInstanceRequest = (input, context) => {
    return {
        ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1StopStackRequest = (input, context) => {
    return {
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
    };
};
const serializeAws_json1_1Strings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
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
const serializeAws_json1_1UnassignInstanceRequest = (input, context) => {
    return {
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1UnassignVolumeRequest = (input, context) => {
    return {
        ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateAppRequest = (input, context) => {
    return {
        ...(input.AppId !== undefined && input.AppId !== null && { AppId: input.AppId }),
        ...(input.AppSource !== undefined &&
            input.AppSource !== null && { AppSource: serializeAws_json1_1Source(input.AppSource, context) }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1AppAttributes(input.Attributes, context) }),
        ...(input.DataSources !== undefined &&
            input.DataSources !== null && { DataSources: serializeAws_json1_1DataSources(input.DataSources, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Domains !== undefined &&
            input.Domains !== null && { Domains: serializeAws_json1_1Strings(input.Domains, context) }),
        ...(input.EnableSsl !== undefined && input.EnableSsl !== null && { EnableSsl: input.EnableSsl }),
        ...(input.Environment !== undefined &&
            input.Environment !== null && {
            Environment: serializeAws_json1_1EnvironmentVariables(input.Environment, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SslConfiguration !== undefined &&
            input.SslConfiguration !== null && {
            SslConfiguration: serializeAws_json1_1SslConfiguration(input.SslConfiguration, context),
        }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1UpdateElasticIpRequest = (input, context) => {
    return {
        ...(input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateInstanceRequest = (input, context) => {
    return {
        ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
        ...(input.AmiId !== undefined && input.AmiId !== null && { AmiId: input.AmiId }),
        ...(input.Architecture !== undefined && input.Architecture !== null && { Architecture: input.Architecture }),
        ...(input.AutoScalingType !== undefined &&
            input.AutoScalingType !== null && { AutoScalingType: input.AutoScalingType }),
        ...(input.EbsOptimized !== undefined && input.EbsOptimized !== null && { EbsOptimized: input.EbsOptimized }),
        ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
        ...(input.InstallUpdatesOnBoot !== undefined &&
            input.InstallUpdatesOnBoot !== null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.LayerIds !== undefined &&
            input.LayerIds !== null && { LayerIds: serializeAws_json1_1Strings(input.LayerIds, context) }),
        ...(input.Os !== undefined && input.Os !== null && { Os: input.Os }),
        ...(input.SshKeyName !== undefined && input.SshKeyName !== null && { SshKeyName: input.SshKeyName }),
    };
};
const serializeAws_json1_1UpdateLayerRequest = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1LayerAttributes(input.Attributes, context) }),
        ...(input.AutoAssignElasticIps !== undefined &&
            input.AutoAssignElasticIps !== null && { AutoAssignElasticIps: input.AutoAssignElasticIps }),
        ...(input.AutoAssignPublicIps !== undefined &&
            input.AutoAssignPublicIps !== null && { AutoAssignPublicIps: input.AutoAssignPublicIps }),
        ...(input.CloudWatchLogsConfiguration !== undefined &&
            input.CloudWatchLogsConfiguration !== null && {
            CloudWatchLogsConfiguration: serializeAws_json1_1CloudWatchLogsConfiguration(input.CloudWatchLogsConfiguration, context),
        }),
        ...(input.CustomInstanceProfileArn !== undefined &&
            input.CustomInstanceProfileArn !== null && { CustomInstanceProfileArn: input.CustomInstanceProfileArn }),
        ...(input.CustomJson !== undefined && input.CustomJson !== null && { CustomJson: input.CustomJson }),
        ...(input.CustomRecipes !== undefined &&
            input.CustomRecipes !== null && { CustomRecipes: serializeAws_json1_1Recipes(input.CustomRecipes, context) }),
        ...(input.CustomSecurityGroupIds !== undefined &&
            input.CustomSecurityGroupIds !== null && {
            CustomSecurityGroupIds: serializeAws_json1_1Strings(input.CustomSecurityGroupIds, context),
        }),
        ...(input.EnableAutoHealing !== undefined &&
            input.EnableAutoHealing !== null && { EnableAutoHealing: input.EnableAutoHealing }),
        ...(input.InstallUpdatesOnBoot !== undefined &&
            input.InstallUpdatesOnBoot !== null && { InstallUpdatesOnBoot: input.InstallUpdatesOnBoot }),
        ...(input.LayerId !== undefined && input.LayerId !== null && { LayerId: input.LayerId }),
        ...(input.LifecycleEventConfiguration !== undefined &&
            input.LifecycleEventConfiguration !== null && {
            LifecycleEventConfiguration: serializeAws_json1_1LifecycleEventConfiguration(input.LifecycleEventConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Packages !== undefined &&
            input.Packages !== null && { Packages: serializeAws_json1_1Strings(input.Packages, context) }),
        ...(input.Shortname !== undefined && input.Shortname !== null && { Shortname: input.Shortname }),
        ...(input.UseEbsOptimizedInstances !== undefined &&
            input.UseEbsOptimizedInstances !== null && { UseEbsOptimizedInstances: input.UseEbsOptimizedInstances }),
        ...(input.VolumeConfigurations !== undefined &&
            input.VolumeConfigurations !== null && {
            VolumeConfigurations: serializeAws_json1_1VolumeConfigurations(input.VolumeConfigurations, context),
        }),
    };
};
const serializeAws_json1_1UpdateMyUserProfileRequest = (input, context) => {
    return {
        ...(input.SshPublicKey !== undefined && input.SshPublicKey !== null && { SshPublicKey: input.SshPublicKey }),
    };
};
const serializeAws_json1_1UpdateRdsDbInstanceRequest = (input, context) => {
    return {
        ...(input.DbPassword !== undefined && input.DbPassword !== null && { DbPassword: input.DbPassword }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.RdsDbInstanceArn !== undefined &&
            input.RdsDbInstanceArn !== null && { RdsDbInstanceArn: input.RdsDbInstanceArn }),
    };
};
const serializeAws_json1_1UpdateStackRequest = (input, context) => {
    return {
        ...(input.AgentVersion !== undefined && input.AgentVersion !== null && { AgentVersion: input.AgentVersion }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_json1_1StackAttributes(input.Attributes, context) }),
        ...(input.ChefConfiguration !== undefined &&
            input.ChefConfiguration !== null && {
            ChefConfiguration: serializeAws_json1_1ChefConfiguration(input.ChefConfiguration, context),
        }),
        ...(input.ConfigurationManager !== undefined &&
            input.ConfigurationManager !== null && {
            ConfigurationManager: serializeAws_json1_1StackConfigurationManager(input.ConfigurationManager, context),
        }),
        ...(input.CustomCookbooksSource !== undefined &&
            input.CustomCookbooksSource !== null && {
            CustomCookbooksSource: serializeAws_json1_1Source(input.CustomCookbooksSource, context),
        }),
        ...(input.CustomJson !== undefined && input.CustomJson !== null && { CustomJson: input.CustomJson }),
        ...(input.DefaultAvailabilityZone !== undefined &&
            input.DefaultAvailabilityZone !== null && { DefaultAvailabilityZone: input.DefaultAvailabilityZone }),
        ...(input.DefaultInstanceProfileArn !== undefined &&
            input.DefaultInstanceProfileArn !== null && { DefaultInstanceProfileArn: input.DefaultInstanceProfileArn }),
        ...(input.DefaultOs !== undefined && input.DefaultOs !== null && { DefaultOs: input.DefaultOs }),
        ...(input.DefaultRootDeviceType !== undefined &&
            input.DefaultRootDeviceType !== null && { DefaultRootDeviceType: input.DefaultRootDeviceType }),
        ...(input.DefaultSshKeyName !== undefined &&
            input.DefaultSshKeyName !== null && { DefaultSshKeyName: input.DefaultSshKeyName }),
        ...(input.DefaultSubnetId !== undefined &&
            input.DefaultSubnetId !== null && { DefaultSubnetId: input.DefaultSubnetId }),
        ...(input.HostnameTheme !== undefined && input.HostnameTheme !== null && { HostnameTheme: input.HostnameTheme }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ServiceRoleArn !== undefined &&
            input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
        ...(input.StackId !== undefined && input.StackId !== null && { StackId: input.StackId }),
        ...(input.UseCustomCookbooks !== undefined &&
            input.UseCustomCookbooks !== null && { UseCustomCookbooks: input.UseCustomCookbooks }),
        ...(input.UseOpsworksSecurityGroups !== undefined &&
            input.UseOpsworksSecurityGroups !== null && { UseOpsworksSecurityGroups: input.UseOpsworksSecurityGroups }),
    };
};
const serializeAws_json1_1UpdateUserProfileRequest = (input, context) => {
    return {
        ...(input.AllowSelfManagement !== undefined &&
            input.AllowSelfManagement !== null && { AllowSelfManagement: input.AllowSelfManagement }),
        ...(input.IamUserArn !== undefined && input.IamUserArn !== null && { IamUserArn: input.IamUserArn }),
        ...(input.SshPublicKey !== undefined && input.SshPublicKey !== null && { SshPublicKey: input.SshPublicKey }),
        ...(input.SshUsername !== undefined && input.SshUsername !== null && { SshUsername: input.SshUsername }),
    };
};
const serializeAws_json1_1UpdateVolumeRequest = (input, context) => {
    return {
        ...(input.MountPoint !== undefined && input.MountPoint !== null && { MountPoint: input.MountPoint }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.VolumeId !== undefined && input.VolumeId !== null && { VolumeId: input.VolumeId }),
    };
};
const serializeAws_json1_1VolumeConfiguration = (input, context) => {
    return {
        ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
        ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
        ...(input.MountPoint !== undefined && input.MountPoint !== null && { MountPoint: input.MountPoint }),
        ...(input.NumberOfDisks !== undefined && input.NumberOfDisks !== null && { NumberOfDisks: input.NumberOfDisks }),
        ...(input.RaidLevel !== undefined && input.RaidLevel !== null && { RaidLevel: input.RaidLevel }),
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
        ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
    };
};
const serializeAws_json1_1VolumeConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1VolumeConfiguration(entry, context);
    });
};
const serializeAws_json1_1WeeklyAutoScalingSchedule = (input, context) => {
    return {
        ...(input.Friday !== undefined &&
            input.Friday !== null && { Friday: serializeAws_json1_1DailyAutoScalingSchedule(input.Friday, context) }),
        ...(input.Monday !== undefined &&
            input.Monday !== null && { Monday: serializeAws_json1_1DailyAutoScalingSchedule(input.Monday, context) }),
        ...(input.Saturday !== undefined &&
            input.Saturday !== null && { Saturday: serializeAws_json1_1DailyAutoScalingSchedule(input.Saturday, context) }),
        ...(input.Sunday !== undefined &&
            input.Sunday !== null && { Sunday: serializeAws_json1_1DailyAutoScalingSchedule(input.Sunday, context) }),
        ...(input.Thursday !== undefined &&
            input.Thursday !== null && { Thursday: serializeAws_json1_1DailyAutoScalingSchedule(input.Thursday, context) }),
        ...(input.Tuesday !== undefined &&
            input.Tuesday !== null && { Tuesday: serializeAws_json1_1DailyAutoScalingSchedule(input.Tuesday, context) }),
        ...(input.Wednesday !== undefined &&
            input.Wednesday !== null && {
            Wednesday: serializeAws_json1_1DailyAutoScalingSchedule(input.Wednesday, context),
        }),
    };
};
const deserializeAws_json1_1AgentVersion = (output, context) => {
    return {
        ConfigurationManager: output.ConfigurationManager !== undefined && output.ConfigurationManager !== null
            ? deserializeAws_json1_1StackConfigurationManager(output.ConfigurationManager, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1AgentVersions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AgentVersion(entry, context);
    });
};
const deserializeAws_json1_1App = (output, context) => {
    return {
        AppId: output.AppId !== undefined && output.AppId !== null ? output.AppId : undefined,
        AppSource: output.AppSource !== undefined && output.AppSource !== null
            ? deserializeAws_json1_1Source(output.AppSource, context)
            : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1AppAttributes(output.Attributes, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        DataSources: output.DataSources !== undefined && output.DataSources !== null
            ? deserializeAws_json1_1DataSources(output.DataSources, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Domains: output.Domains !== undefined && output.Domains !== null
            ? deserializeAws_json1_1Strings(output.Domains, context)
            : undefined,
        EnableSsl: output.EnableSsl !== undefined && output.EnableSsl !== null ? output.EnableSsl : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null
            ? deserializeAws_json1_1EnvironmentVariables(output.Environment, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Shortname: output.Shortname !== undefined && output.Shortname !== null ? output.Shortname : undefined,
        SslConfiguration: output.SslConfiguration !== undefined && output.SslConfiguration !== null
            ? deserializeAws_json1_1SslConfiguration(output.SslConfiguration, context)
            : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1AppAttributes = (output, context) => {
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
const deserializeAws_json1_1Apps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1App(entry, context);
    });
};
const deserializeAws_json1_1AutoScalingThresholds = (output, context) => {
    return {
        Alarms: output.Alarms !== undefined && output.Alarms !== null
            ? deserializeAws_json1_1Strings(output.Alarms, context)
            : undefined,
        CpuThreshold: output.CpuThreshold !== undefined && output.CpuThreshold !== null ? output.CpuThreshold : undefined,
        IgnoreMetricsTime: output.IgnoreMetricsTime !== undefined && output.IgnoreMetricsTime !== null
            ? output.IgnoreMetricsTime
            : undefined,
        InstanceCount: output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
        LoadThreshold: output.LoadThreshold !== undefined && output.LoadThreshold !== null ? output.LoadThreshold : undefined,
        MemoryThreshold: output.MemoryThreshold !== undefined && output.MemoryThreshold !== null ? output.MemoryThreshold : undefined,
        ThresholdsWaitTime: output.ThresholdsWaitTime !== undefined && output.ThresholdsWaitTime !== null
            ? output.ThresholdsWaitTime
            : undefined,
    };
};
const deserializeAws_json1_1BlockDeviceMapping = (output, context) => {
    return {
        DeviceName: output.DeviceName !== undefined && output.DeviceName !== null ? output.DeviceName : undefined,
        Ebs: output.Ebs !== undefined && output.Ebs !== null
            ? deserializeAws_json1_1EbsBlockDevice(output.Ebs, context)
            : undefined,
        NoDevice: output.NoDevice !== undefined && output.NoDevice !== null ? output.NoDevice : undefined,
        VirtualName: output.VirtualName !== undefined && output.VirtualName !== null ? output.VirtualName : undefined,
    };
};
const deserializeAws_json1_1BlockDeviceMappings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BlockDeviceMapping(entry, context);
    });
};
const deserializeAws_json1_1ChefConfiguration = (output, context) => {
    return {
        BerkshelfVersion: output.BerkshelfVersion !== undefined && output.BerkshelfVersion !== null ? output.BerkshelfVersion : undefined,
        ManageBerkshelf: output.ManageBerkshelf !== undefined && output.ManageBerkshelf !== null ? output.ManageBerkshelf : undefined,
    };
};
const deserializeAws_json1_1CloneStackResult = (output, context) => {
    return {
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
    };
};
const deserializeAws_json1_1CloudWatchLogsConfiguration = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        LogStreams: output.LogStreams !== undefined && output.LogStreams !== null
            ? deserializeAws_json1_1CloudWatchLogsLogStreams(output.LogStreams, context)
            : undefined,
    };
};
const deserializeAws_json1_1CloudWatchLogsLogStream = (output, context) => {
    return {
        BatchCount: output.BatchCount !== undefined && output.BatchCount !== null ? output.BatchCount : undefined,
        BatchSize: output.BatchSize !== undefined && output.BatchSize !== null ? output.BatchSize : undefined,
        BufferDuration: output.BufferDuration !== undefined && output.BufferDuration !== null ? output.BufferDuration : undefined,
        DatetimeFormat: output.DatetimeFormat !== undefined && output.DatetimeFormat !== null ? output.DatetimeFormat : undefined,
        Encoding: output.Encoding !== undefined && output.Encoding !== null ? output.Encoding : undefined,
        File: output.File !== undefined && output.File !== null ? output.File : undefined,
        FileFingerprintLines: output.FileFingerprintLines !== undefined && output.FileFingerprintLines !== null
            ? output.FileFingerprintLines
            : undefined,
        InitialPosition: output.InitialPosition !== undefined && output.InitialPosition !== null ? output.InitialPosition : undefined,
        LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
        MultiLineStartPattern: output.MultiLineStartPattern !== undefined && output.MultiLineStartPattern !== null
            ? output.MultiLineStartPattern
            : undefined,
        TimeZone: output.TimeZone !== undefined && output.TimeZone !== null ? output.TimeZone : undefined,
    };
};
const deserializeAws_json1_1CloudWatchLogsLogStreams = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CloudWatchLogsLogStream(entry, context);
    });
};
const deserializeAws_json1_1Command = (output, context) => {
    return {
        AcknowledgedAt: output.AcknowledgedAt !== undefined && output.AcknowledgedAt !== null ? output.AcknowledgedAt : undefined,
        CommandId: output.CommandId !== undefined && output.CommandId !== null ? output.CommandId : undefined,
        CompletedAt: output.CompletedAt !== undefined && output.CompletedAt !== null ? output.CompletedAt : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        ExitCode: output.ExitCode !== undefined && output.ExitCode !== null ? output.ExitCode : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        LogUrl: output.LogUrl !== undefined && output.LogUrl !== null ? output.LogUrl : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Commands = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Command(entry, context);
    });
};
const deserializeAws_json1_1CreateAppResult = (output, context) => {
    return {
        AppId: output.AppId !== undefined && output.AppId !== null ? output.AppId : undefined,
    };
};
const deserializeAws_json1_1CreateDeploymentResult = (output, context) => {
    return {
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
    };
};
const deserializeAws_json1_1CreateInstanceResult = (output, context) => {
    return {
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    };
};
const deserializeAws_json1_1CreateLayerResult = (output, context) => {
    return {
        LayerId: output.LayerId !== undefined && output.LayerId !== null ? output.LayerId : undefined,
    };
};
const deserializeAws_json1_1CreateStackResult = (output, context) => {
    return {
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
    };
};
const deserializeAws_json1_1CreateUserProfileResult = (output, context) => {
    return {
        IamUserArn: output.IamUserArn !== undefined && output.IamUserArn !== null ? output.IamUserArn : undefined,
    };
};
const deserializeAws_json1_1DailyAutoScalingSchedule = (output, context) => {
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
const deserializeAws_json1_1DataSource = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1DataSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataSource(entry, context);
    });
};
const deserializeAws_json1_1Deployment = (output, context) => {
    return {
        AppId: output.AppId !== undefined && output.AppId !== null ? output.AppId : undefined,
        Command: output.Command !== undefined && output.Command !== null
            ? deserializeAws_json1_1DeploymentCommand(output.Command, context)
            : undefined,
        Comment: output.Comment !== undefined && output.Comment !== null ? output.Comment : undefined,
        CompletedAt: output.CompletedAt !== undefined && output.CompletedAt !== null ? output.CompletedAt : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        CustomJson: output.CustomJson !== undefined && output.CustomJson !== null ? output.CustomJson : undefined,
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        IamUserArn: output.IamUserArn !== undefined && output.IamUserArn !== null ? output.IamUserArn : undefined,
        InstanceIds: output.InstanceIds !== undefined && output.InstanceIds !== null
            ? deserializeAws_json1_1Strings(output.InstanceIds, context)
            : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DeploymentCommand = (output, context) => {
    return {
        Args: output.Args !== undefined && output.Args !== null
            ? deserializeAws_json1_1DeploymentCommandArgs(output.Args, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DeploymentCommandArgs = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1Strings(value, context),
        };
    }, {});
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
const deserializeAws_json1_1DescribeAgentVersionsResult = (output, context) => {
    return {
        AgentVersions: output.AgentVersions !== undefined && output.AgentVersions !== null
            ? deserializeAws_json1_1AgentVersions(output.AgentVersions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAppsResult = (output, context) => {
    return {
        Apps: output.Apps !== undefined && output.Apps !== null ? deserializeAws_json1_1Apps(output.Apps, context) : undefined,
    };
};
const deserializeAws_json1_1DescribeCommandsResult = (output, context) => {
    return {
        Commands: output.Commands !== undefined && output.Commands !== null
            ? deserializeAws_json1_1Commands(output.Commands, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDeploymentsResult = (output, context) => {
    return {
        Deployments: output.Deployments !== undefined && output.Deployments !== null
            ? deserializeAws_json1_1Deployments(output.Deployments, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEcsClustersResult = (output, context) => {
    return {
        EcsClusters: output.EcsClusters !== undefined && output.EcsClusters !== null
            ? deserializeAws_json1_1EcsClusters(output.EcsClusters, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeElasticIpsResult = (output, context) => {
    return {
        ElasticIps: output.ElasticIps !== undefined && output.ElasticIps !== null
            ? deserializeAws_json1_1ElasticIps(output.ElasticIps, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeElasticLoadBalancersResult = (output, context) => {
    return {
        ElasticLoadBalancers: output.ElasticLoadBalancers !== undefined && output.ElasticLoadBalancers !== null
            ? deserializeAws_json1_1ElasticLoadBalancers(output.ElasticLoadBalancers, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeInstancesResult = (output, context) => {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1Instances(output.Instances, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeLayersResult = (output, context) => {
    return {
        Layers: output.Layers !== undefined && output.Layers !== null
            ? deserializeAws_json1_1Layers(output.Layers, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeLoadBasedAutoScalingResult = (output, context) => {
    return {
        LoadBasedAutoScalingConfigurations: output.LoadBasedAutoScalingConfigurations !== undefined && output.LoadBasedAutoScalingConfigurations !== null
            ? deserializeAws_json1_1LoadBasedAutoScalingConfigurations(output.LoadBasedAutoScalingConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMyUserProfileResult = (output, context) => {
    return {
        UserProfile: output.UserProfile !== undefined && output.UserProfile !== null
            ? deserializeAws_json1_1SelfUserProfile(output.UserProfile, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOperatingSystemsResponse = (output, context) => {
    return {
        OperatingSystems: output.OperatingSystems !== undefined && output.OperatingSystems !== null
            ? deserializeAws_json1_1OperatingSystems(output.OperatingSystems, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePermissionsResult = (output, context) => {
    return {
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1Permissions(output.Permissions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRaidArraysResult = (output, context) => {
    return {
        RaidArrays: output.RaidArrays !== undefined && output.RaidArrays !== null
            ? deserializeAws_json1_1RaidArrays(output.RaidArrays, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRdsDbInstancesResult = (output, context) => {
    return {
        RdsDbInstances: output.RdsDbInstances !== undefined && output.RdsDbInstances !== null
            ? deserializeAws_json1_1RdsDbInstances(output.RdsDbInstances, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeServiceErrorsResult = (output, context) => {
    return {
        ServiceErrors: output.ServiceErrors !== undefined && output.ServiceErrors !== null
            ? deserializeAws_json1_1ServiceErrors(output.ServiceErrors, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeStackProvisioningParametersResult = (output, context) => {
    return {
        AgentInstallerUrl: output.AgentInstallerUrl !== undefined && output.AgentInstallerUrl !== null
            ? output.AgentInstallerUrl
            : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1Parameters(output.Parameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeStacksResult = (output, context) => {
    return {
        Stacks: output.Stacks !== undefined && output.Stacks !== null
            ? deserializeAws_json1_1Stacks(output.Stacks, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeStackSummaryResult = (output, context) => {
    return {
        StackSummary: output.StackSummary !== undefined && output.StackSummary !== null
            ? deserializeAws_json1_1StackSummary(output.StackSummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTimeBasedAutoScalingResult = (output, context) => {
    return {
        TimeBasedAutoScalingConfigurations: output.TimeBasedAutoScalingConfigurations !== undefined && output.TimeBasedAutoScalingConfigurations !== null
            ? deserializeAws_json1_1TimeBasedAutoScalingConfigurations(output.TimeBasedAutoScalingConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeUserProfilesResult = (output, context) => {
    return {
        UserProfiles: output.UserProfiles !== undefined && output.UserProfiles !== null
            ? deserializeAws_json1_1UserProfiles(output.UserProfiles, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeVolumesResult = (output, context) => {
    return {
        Volumes: output.Volumes !== undefined && output.Volumes !== null
            ? deserializeAws_json1_1Volumes(output.Volumes, context)
            : undefined,
    };
};
const deserializeAws_json1_1EbsBlockDevice = (output, context) => {
    return {
        DeleteOnTermination: output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
            ? output.DeleteOnTermination
            : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        VolumeSize: output.VolumeSize !== undefined && output.VolumeSize !== null ? output.VolumeSize : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_json1_1EcsCluster = (output, context) => {
    return {
        EcsClusterArn: output.EcsClusterArn !== undefined && output.EcsClusterArn !== null ? output.EcsClusterArn : undefined,
        EcsClusterName: output.EcsClusterName !== undefined && output.EcsClusterName !== null ? output.EcsClusterName : undefined,
        RegisteredAt: output.RegisteredAt !== undefined && output.RegisteredAt !== null ? output.RegisteredAt : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
    };
};
const deserializeAws_json1_1EcsClusters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EcsCluster(entry, context);
    });
};
const deserializeAws_json1_1ElasticIp = (output, context) => {
    return {
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    };
};
const deserializeAws_json1_1ElasticIps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ElasticIp(entry, context);
    });
};
const deserializeAws_json1_1ElasticLoadBalancer = (output, context) => {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_json1_1Strings(output.AvailabilityZones, context)
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        Ec2InstanceIds: output.Ec2InstanceIds !== undefined && output.Ec2InstanceIds !== null
            ? deserializeAws_json1_1Strings(output.Ec2InstanceIds, context)
            : undefined,
        ElasticLoadBalancerName: output.ElasticLoadBalancerName !== undefined && output.ElasticLoadBalancerName !== null
            ? output.ElasticLoadBalancerName
            : undefined,
        LayerId: output.LayerId !== undefined && output.LayerId !== null ? output.LayerId : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1Strings(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1ElasticLoadBalancers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ElasticLoadBalancer(entry, context);
    });
};
const deserializeAws_json1_1EnvironmentVariable = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Secure: output.Secure !== undefined && output.Secure !== null ? output.Secure : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1EnvironmentVariables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnvironmentVariable(entry, context);
    });
};
const deserializeAws_json1_1GetHostnameSuggestionResult = (output, context) => {
    return {
        Hostname: output.Hostname !== undefined && output.Hostname !== null ? output.Hostname : undefined,
        LayerId: output.LayerId !== undefined && output.LayerId !== null ? output.LayerId : undefined,
    };
};
const deserializeAws_json1_1GrantAccessResult = (output, context) => {
    return {
        TemporaryCredential: output.TemporaryCredential !== undefined && output.TemporaryCredential !== null
            ? deserializeAws_json1_1TemporaryCredential(output.TemporaryCredential, context)
            : undefined,
    };
};
const deserializeAws_json1_1Instance = (output, context) => {
    return {
        AgentVersion: output.AgentVersion !== undefined && output.AgentVersion !== null ? output.AgentVersion : undefined,
        AmiId: output.AmiId !== undefined && output.AmiId !== null ? output.AmiId : undefined,
        Architecture: output.Architecture !== undefined && output.Architecture !== null ? output.Architecture : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AutoScalingType: output.AutoScalingType !== undefined && output.AutoScalingType !== null ? output.AutoScalingType : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        BlockDeviceMappings: output.BlockDeviceMappings !== undefined && output.BlockDeviceMappings !== null
            ? deserializeAws_json1_1BlockDeviceMappings(output.BlockDeviceMappings, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        EbsOptimized: output.EbsOptimized !== undefined && output.EbsOptimized !== null ? output.EbsOptimized : undefined,
        Ec2InstanceId: output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null ? output.Ec2InstanceId : undefined,
        EcsClusterArn: output.EcsClusterArn !== undefined && output.EcsClusterArn !== null ? output.EcsClusterArn : undefined,
        EcsContainerInstanceArn: output.EcsContainerInstanceArn !== undefined && output.EcsContainerInstanceArn !== null
            ? output.EcsContainerInstanceArn
            : undefined,
        ElasticIp: output.ElasticIp !== undefined && output.ElasticIp !== null ? output.ElasticIp : undefined,
        Hostname: output.Hostname !== undefined && output.Hostname !== null ? output.Hostname : undefined,
        InfrastructureClass: output.InfrastructureClass !== undefined && output.InfrastructureClass !== null
            ? output.InfrastructureClass
            : undefined,
        InstallUpdatesOnBoot: output.InstallUpdatesOnBoot !== undefined && output.InstallUpdatesOnBoot !== null
            ? output.InstallUpdatesOnBoot
            : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        InstanceProfileArn: output.InstanceProfileArn !== undefined && output.InstanceProfileArn !== null
            ? output.InstanceProfileArn
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LastServiceErrorId: output.LastServiceErrorId !== undefined && output.LastServiceErrorId !== null
            ? output.LastServiceErrorId
            : undefined,
        LayerIds: output.LayerIds !== undefined && output.LayerIds !== null
            ? deserializeAws_json1_1Strings(output.LayerIds, context)
            : undefined,
        Os: output.Os !== undefined && output.Os !== null ? output.Os : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        PrivateDns: output.PrivateDns !== undefined && output.PrivateDns !== null ? output.PrivateDns : undefined,
        PrivateIp: output.PrivateIp !== undefined && output.PrivateIp !== null ? output.PrivateIp : undefined,
        PublicDns: output.PublicDns !== undefined && output.PublicDns !== null ? output.PublicDns : undefined,
        PublicIp: output.PublicIp !== undefined && output.PublicIp !== null ? output.PublicIp : undefined,
        RegisteredBy: output.RegisteredBy !== undefined && output.RegisteredBy !== null ? output.RegisteredBy : undefined,
        ReportedAgentVersion: output.ReportedAgentVersion !== undefined && output.ReportedAgentVersion !== null
            ? output.ReportedAgentVersion
            : undefined,
        ReportedOs: output.ReportedOs !== undefined && output.ReportedOs !== null
            ? deserializeAws_json1_1ReportedOs(output.ReportedOs, context)
            : undefined,
        RootDeviceType: output.RootDeviceType !== undefined && output.RootDeviceType !== null ? output.RootDeviceType : undefined,
        RootDeviceVolumeId: output.RootDeviceVolumeId !== undefined && output.RootDeviceVolumeId !== null
            ? output.RootDeviceVolumeId
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_json1_1Strings(output.SecurityGroupIds, context)
            : undefined,
        SshHostDsaKeyFingerprint: output.SshHostDsaKeyFingerprint !== undefined && output.SshHostDsaKeyFingerprint !== null
            ? output.SshHostDsaKeyFingerprint
            : undefined,
        SshHostRsaKeyFingerprint: output.SshHostRsaKeyFingerprint !== undefined && output.SshHostRsaKeyFingerprint !== null
            ? output.SshHostRsaKeyFingerprint
            : undefined,
        SshKeyName: output.SshKeyName !== undefined && output.SshKeyName !== null ? output.SshKeyName : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        Tenancy: output.Tenancy !== undefined && output.Tenancy !== null ? output.Tenancy : undefined,
        VirtualizationType: output.VirtualizationType !== undefined && output.VirtualizationType !== null
            ? output.VirtualizationType
            : undefined,
    };
};
const deserializeAws_json1_1Instances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Instance(entry, context);
    });
};
const deserializeAws_json1_1InstancesCount = (output, context) => {
    return {
        Assigning: output.Assigning !== undefined && output.Assigning !== null ? output.Assigning : undefined,
        Booting: output.Booting !== undefined && output.Booting !== null ? output.Booting : undefined,
        ConnectionLost: output.ConnectionLost !== undefined && output.ConnectionLost !== null ? output.ConnectionLost : undefined,
        Deregistering: output.Deregistering !== undefined && output.Deregistering !== null ? output.Deregistering : undefined,
        Online: output.Online !== undefined && output.Online !== null ? output.Online : undefined,
        Pending: output.Pending !== undefined && output.Pending !== null ? output.Pending : undefined,
        Rebooting: output.Rebooting !== undefined && output.Rebooting !== null ? output.Rebooting : undefined,
        Registered: output.Registered !== undefined && output.Registered !== null ? output.Registered : undefined,
        Registering: output.Registering !== undefined && output.Registering !== null ? output.Registering : undefined,
        Requested: output.Requested !== undefined && output.Requested !== null ? output.Requested : undefined,
        RunningSetup: output.RunningSetup !== undefined && output.RunningSetup !== null ? output.RunningSetup : undefined,
        SetupFailed: output.SetupFailed !== undefined && output.SetupFailed !== null ? output.SetupFailed : undefined,
        ShuttingDown: output.ShuttingDown !== undefined && output.ShuttingDown !== null ? output.ShuttingDown : undefined,
        StartFailed: output.StartFailed !== undefined && output.StartFailed !== null ? output.StartFailed : undefined,
        StopFailed: output.StopFailed !== undefined && output.StopFailed !== null ? output.StopFailed : undefined,
        Stopped: output.Stopped !== undefined && output.Stopped !== null ? output.Stopped : undefined,
        Stopping: output.Stopping !== undefined && output.Stopping !== null ? output.Stopping : undefined,
        Terminated: output.Terminated !== undefined && output.Terminated !== null ? output.Terminated : undefined,
        Terminating: output.Terminating !== undefined && output.Terminating !== null ? output.Terminating : undefined,
        Unassigning: output.Unassigning !== undefined && output.Unassigning !== null ? output.Unassigning : undefined,
    };
};
const deserializeAws_json1_1Layer = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1LayerAttributes(output.Attributes, context)
            : undefined,
        AutoAssignElasticIps: output.AutoAssignElasticIps !== undefined && output.AutoAssignElasticIps !== null
            ? output.AutoAssignElasticIps
            : undefined,
        AutoAssignPublicIps: output.AutoAssignPublicIps !== undefined && output.AutoAssignPublicIps !== null
            ? output.AutoAssignPublicIps
            : undefined,
        CloudWatchLogsConfiguration: output.CloudWatchLogsConfiguration !== undefined && output.CloudWatchLogsConfiguration !== null
            ? deserializeAws_json1_1CloudWatchLogsConfiguration(output.CloudWatchLogsConfiguration, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        CustomInstanceProfileArn: output.CustomInstanceProfileArn !== undefined && output.CustomInstanceProfileArn !== null
            ? output.CustomInstanceProfileArn
            : undefined,
        CustomJson: output.CustomJson !== undefined && output.CustomJson !== null ? output.CustomJson : undefined,
        CustomRecipes: output.CustomRecipes !== undefined && output.CustomRecipes !== null
            ? deserializeAws_json1_1Recipes(output.CustomRecipes, context)
            : undefined,
        CustomSecurityGroupIds: output.CustomSecurityGroupIds !== undefined && output.CustomSecurityGroupIds !== null
            ? deserializeAws_json1_1Strings(output.CustomSecurityGroupIds, context)
            : undefined,
        DefaultRecipes: output.DefaultRecipes !== undefined && output.DefaultRecipes !== null
            ? deserializeAws_json1_1Recipes(output.DefaultRecipes, context)
            : undefined,
        DefaultSecurityGroupNames: output.DefaultSecurityGroupNames !== undefined && output.DefaultSecurityGroupNames !== null
            ? deserializeAws_json1_1Strings(output.DefaultSecurityGroupNames, context)
            : undefined,
        EnableAutoHealing: output.EnableAutoHealing !== undefined && output.EnableAutoHealing !== null
            ? output.EnableAutoHealing
            : undefined,
        InstallUpdatesOnBoot: output.InstallUpdatesOnBoot !== undefined && output.InstallUpdatesOnBoot !== null
            ? output.InstallUpdatesOnBoot
            : undefined,
        LayerId: output.LayerId !== undefined && output.LayerId !== null ? output.LayerId : undefined,
        LifecycleEventConfiguration: output.LifecycleEventConfiguration !== undefined && output.LifecycleEventConfiguration !== null
            ? deserializeAws_json1_1LifecycleEventConfiguration(output.LifecycleEventConfiguration, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Packages: output.Packages !== undefined && output.Packages !== null
            ? deserializeAws_json1_1Strings(output.Packages, context)
            : undefined,
        Shortname: output.Shortname !== undefined && output.Shortname !== null ? output.Shortname : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UseEbsOptimizedInstances: output.UseEbsOptimizedInstances !== undefined && output.UseEbsOptimizedInstances !== null
            ? output.UseEbsOptimizedInstances
            : undefined,
        VolumeConfigurations: output.VolumeConfigurations !== undefined && output.VolumeConfigurations !== null
            ? deserializeAws_json1_1VolumeConfigurations(output.VolumeConfigurations, context)
            : undefined,
    };
};
const deserializeAws_json1_1LayerAttributes = (output, context) => {
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
const deserializeAws_json1_1Layers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Layer(entry, context);
    });
};
const deserializeAws_json1_1LifecycleEventConfiguration = (output, context) => {
    return {
        Shutdown: output.Shutdown !== undefined && output.Shutdown !== null
            ? deserializeAws_json1_1ShutdownEventConfiguration(output.Shutdown, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1LoadBasedAutoScalingConfiguration = (output, context) => {
    return {
        DownScaling: output.DownScaling !== undefined && output.DownScaling !== null
            ? deserializeAws_json1_1AutoScalingThresholds(output.DownScaling, context)
            : undefined,
        Enable: output.Enable !== undefined && output.Enable !== null ? output.Enable : undefined,
        LayerId: output.LayerId !== undefined && output.LayerId !== null ? output.LayerId : undefined,
        UpScaling: output.UpScaling !== undefined && output.UpScaling !== null
            ? deserializeAws_json1_1AutoScalingThresholds(output.UpScaling, context)
            : undefined,
    };
};
const deserializeAws_json1_1LoadBasedAutoScalingConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LoadBasedAutoScalingConfiguration(entry, context);
    });
};
const deserializeAws_json1_1OperatingSystem = (output, context) => {
    return {
        ConfigurationManagers: output.ConfigurationManagers !== undefined && output.ConfigurationManagers !== null
            ? deserializeAws_json1_1OperatingSystemConfigurationManagers(output.ConfigurationManagers, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ReportedName: output.ReportedName !== undefined && output.ReportedName !== null ? output.ReportedName : undefined,
        ReportedVersion: output.ReportedVersion !== undefined && output.ReportedVersion !== null ? output.ReportedVersion : undefined,
        Supported: output.Supported !== undefined && output.Supported !== null ? output.Supported : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1OperatingSystemConfigurationManager = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1OperatingSystemConfigurationManagers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OperatingSystemConfigurationManager(entry, context);
    });
};
const deserializeAws_json1_1OperatingSystems = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OperatingSystem(entry, context);
    });
};
const deserializeAws_json1_1Parameters = (output, context) => {
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
const deserializeAws_json1_1Permission = (output, context) => {
    return {
        AllowSsh: output.AllowSsh !== undefined && output.AllowSsh !== null ? output.AllowSsh : undefined,
        AllowSudo: output.AllowSudo !== undefined && output.AllowSudo !== null ? output.AllowSudo : undefined,
        IamUserArn: output.IamUserArn !== undefined && output.IamUserArn !== null ? output.IamUserArn : undefined,
        Level: output.Level !== undefined && output.Level !== null ? output.Level : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
    };
};
const deserializeAws_json1_1Permissions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Permission(entry, context);
    });
};
const deserializeAws_json1_1RaidArray = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        MountPoint: output.MountPoint !== undefined && output.MountPoint !== null ? output.MountPoint : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfDisks: output.NumberOfDisks !== undefined && output.NumberOfDisks !== null ? output.NumberOfDisks : undefined,
        RaidArrayId: output.RaidArrayId !== undefined && output.RaidArrayId !== null ? output.RaidArrayId : undefined,
        RaidLevel: output.RaidLevel !== undefined && output.RaidLevel !== null ? output.RaidLevel : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_json1_1RaidArrays = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RaidArray(entry, context);
    });
};
const deserializeAws_json1_1RdsDbInstance = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        DbInstanceIdentifier: output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
            ? output.DbInstanceIdentifier
            : undefined,
        DbPassword: output.DbPassword !== undefined && output.DbPassword !== null ? output.DbPassword : undefined,
        DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        MissingOnRds: output.MissingOnRds !== undefined && output.MissingOnRds !== null ? output.MissingOnRds : undefined,
        RdsDbInstanceArn: output.RdsDbInstanceArn !== undefined && output.RdsDbInstanceArn !== null ? output.RdsDbInstanceArn : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
    };
};
const deserializeAws_json1_1RdsDbInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RdsDbInstance(entry, context);
    });
};
const deserializeAws_json1_1Recipes = (output, context) => {
    return {
        Configure: output.Configure !== undefined && output.Configure !== null
            ? deserializeAws_json1_1Strings(output.Configure, context)
            : undefined,
        Deploy: output.Deploy !== undefined && output.Deploy !== null
            ? deserializeAws_json1_1Strings(output.Deploy, context)
            : undefined,
        Setup: output.Setup !== undefined && output.Setup !== null
            ? deserializeAws_json1_1Strings(output.Setup, context)
            : undefined,
        Shutdown: output.Shutdown !== undefined && output.Shutdown !== null
            ? deserializeAws_json1_1Strings(output.Shutdown, context)
            : undefined,
        Undeploy: output.Undeploy !== undefined && output.Undeploy !== null
            ? deserializeAws_json1_1Strings(output.Undeploy, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegisterEcsClusterResult = (output, context) => {
    return {
        EcsClusterArn: output.EcsClusterArn !== undefined && output.EcsClusterArn !== null ? output.EcsClusterArn : undefined,
    };
};
const deserializeAws_json1_1RegisterElasticIpResult = (output, context) => {
    return {
        ElasticIp: output.ElasticIp !== undefined && output.ElasticIp !== null ? output.ElasticIp : undefined,
    };
};
const deserializeAws_json1_1RegisterInstanceResult = (output, context) => {
    return {
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    };
};
const deserializeAws_json1_1RegisterVolumeResult = (output, context) => {
    return {
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
    };
};
const deserializeAws_json1_1ReportedOs = (output, context) => {
    return {
        Family: output.Family !== undefined && output.Family !== null ? output.Family : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1SelfUserProfile = (output, context) => {
    return {
        IamUserArn: output.IamUserArn !== undefined && output.IamUserArn !== null ? output.IamUserArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SshPublicKey: output.SshPublicKey !== undefined && output.SshPublicKey !== null ? output.SshPublicKey : undefined,
        SshUsername: output.SshUsername !== undefined && output.SshUsername !== null ? output.SshUsername : undefined,
    };
};
const deserializeAws_json1_1ServiceError = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ServiceErrorId: output.ServiceErrorId !== undefined && output.ServiceErrorId !== null ? output.ServiceErrorId : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ServiceErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServiceError(entry, context);
    });
};
const deserializeAws_json1_1ShutdownEventConfiguration = (output, context) => {
    return {
        DelayUntilElbConnectionsDrained: output.DelayUntilElbConnectionsDrained !== undefined && output.DelayUntilElbConnectionsDrained !== null
            ? output.DelayUntilElbConnectionsDrained
            : undefined,
        ExecutionTimeout: output.ExecutionTimeout !== undefined && output.ExecutionTimeout !== null ? output.ExecutionTimeout : undefined,
    };
};
const deserializeAws_json1_1Source = (output, context) => {
    return {
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Revision: output.Revision !== undefined && output.Revision !== null ? output.Revision : undefined,
        SshKey: output.SshKey !== undefined && output.SshKey !== null ? output.SshKey : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1SslConfiguration = (output, context) => {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
        Chain: output.Chain !== undefined && output.Chain !== null ? output.Chain : undefined,
        PrivateKey: output.PrivateKey !== undefined && output.PrivateKey !== null ? output.PrivateKey : undefined,
    };
};
const deserializeAws_json1_1Stack = (output, context) => {
    return {
        AgentVersion: output.AgentVersion !== undefined && output.AgentVersion !== null ? output.AgentVersion : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_1StackAttributes(output.Attributes, context)
            : undefined,
        ChefConfiguration: output.ChefConfiguration !== undefined && output.ChefConfiguration !== null
            ? deserializeAws_json1_1ChefConfiguration(output.ChefConfiguration, context)
            : undefined,
        ConfigurationManager: output.ConfigurationManager !== undefined && output.ConfigurationManager !== null
            ? deserializeAws_json1_1StackConfigurationManager(output.ConfigurationManager, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        CustomCookbooksSource: output.CustomCookbooksSource !== undefined && output.CustomCookbooksSource !== null
            ? deserializeAws_json1_1Source(output.CustomCookbooksSource, context)
            : undefined,
        CustomJson: output.CustomJson !== undefined && output.CustomJson !== null ? output.CustomJson : undefined,
        DefaultAvailabilityZone: output.DefaultAvailabilityZone !== undefined && output.DefaultAvailabilityZone !== null
            ? output.DefaultAvailabilityZone
            : undefined,
        DefaultInstanceProfileArn: output.DefaultInstanceProfileArn !== undefined && output.DefaultInstanceProfileArn !== null
            ? output.DefaultInstanceProfileArn
            : undefined,
        DefaultOs: output.DefaultOs !== undefined && output.DefaultOs !== null ? output.DefaultOs : undefined,
        DefaultRootDeviceType: output.DefaultRootDeviceType !== undefined && output.DefaultRootDeviceType !== null
            ? output.DefaultRootDeviceType
            : undefined,
        DefaultSshKeyName: output.DefaultSshKeyName !== undefined && output.DefaultSshKeyName !== null
            ? output.DefaultSshKeyName
            : undefined,
        DefaultSubnetId: output.DefaultSubnetId !== undefined && output.DefaultSubnetId !== null ? output.DefaultSubnetId : undefined,
        HostnameTheme: output.HostnameTheme !== undefined && output.HostnameTheme !== null ? output.HostnameTheme : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        ServiceRoleArn: output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null ? output.ServiceRoleArn : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
        UseCustomCookbooks: output.UseCustomCookbooks !== undefined && output.UseCustomCookbooks !== null
            ? output.UseCustomCookbooks
            : undefined,
        UseOpsworksSecurityGroups: output.UseOpsworksSecurityGroups !== undefined && output.UseOpsworksSecurityGroups !== null
            ? output.UseOpsworksSecurityGroups
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_json1_1StackAttributes = (output, context) => {
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
const deserializeAws_json1_1StackConfigurationManager = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1Stacks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Stack(entry, context);
    });
};
const deserializeAws_json1_1StackSummary = (output, context) => {
    return {
        AppsCount: output.AppsCount !== undefined && output.AppsCount !== null ? output.AppsCount : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        InstancesCount: output.InstancesCount !== undefined && output.InstancesCount !== null
            ? deserializeAws_json1_1InstancesCount(output.InstancesCount, context)
            : undefined,
        LayersCount: output.LayersCount !== undefined && output.LayersCount !== null ? output.LayersCount : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        StackId: output.StackId !== undefined && output.StackId !== null ? output.StackId : undefined,
    };
};
const deserializeAws_json1_1Strings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tags = (output, context) => {
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
const deserializeAws_json1_1TemporaryCredential = (output, context) => {
    return {
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
        ValidForInMinutes: output.ValidForInMinutes !== undefined && output.ValidForInMinutes !== null
            ? output.ValidForInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1TimeBasedAutoScalingConfiguration = (output, context) => {
    return {
        AutoScalingSchedule: output.AutoScalingSchedule !== undefined && output.AutoScalingSchedule !== null
            ? deserializeAws_json1_1WeeklyAutoScalingSchedule(output.AutoScalingSchedule, context)
            : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    };
};
const deserializeAws_json1_1TimeBasedAutoScalingConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TimeBasedAutoScalingConfiguration(entry, context);
    });
};
const deserializeAws_json1_1UserProfile = (output, context) => {
    return {
        AllowSelfManagement: output.AllowSelfManagement !== undefined && output.AllowSelfManagement !== null
            ? output.AllowSelfManagement
            : undefined,
        IamUserArn: output.IamUserArn !== undefined && output.IamUserArn !== null ? output.IamUserArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SshPublicKey: output.SshPublicKey !== undefined && output.SshPublicKey !== null ? output.SshPublicKey : undefined,
        SshUsername: output.SshUsername !== undefined && output.SshUsername !== null ? output.SshUsername : undefined,
    };
};
const deserializeAws_json1_1UserProfiles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1UserProfile(entry, context);
    });
};
const deserializeAws_json1_1ValidationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Volume = (output, context) => {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
        Ec2VolumeId: output.Ec2VolumeId !== undefined && output.Ec2VolumeId !== null ? output.Ec2VolumeId : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        MountPoint: output.MountPoint !== undefined && output.MountPoint !== null ? output.MountPoint : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RaidArrayId: output.RaidArrayId !== undefined && output.RaidArrayId !== null ? output.RaidArrayId : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_json1_1VolumeConfiguration = (output, context) => {
    return {
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        MountPoint: output.MountPoint !== undefined && output.MountPoint !== null ? output.MountPoint : undefined,
        NumberOfDisks: output.NumberOfDisks !== undefined && output.NumberOfDisks !== null ? output.NumberOfDisks : undefined,
        RaidLevel: output.RaidLevel !== undefined && output.RaidLevel !== null ? output.RaidLevel : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
const deserializeAws_json1_1VolumeConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VolumeConfiguration(entry, context);
    });
};
const deserializeAws_json1_1Volumes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Volume(entry, context);
    });
};
const deserializeAws_json1_1WeeklyAutoScalingSchedule = (output, context) => {
    return {
        Friday: output.Friday !== undefined && output.Friday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Friday, context)
            : undefined,
        Monday: output.Monday !== undefined && output.Monday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Monday, context)
            : undefined,
        Saturday: output.Saturday !== undefined && output.Saturday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Saturday, context)
            : undefined,
        Sunday: output.Sunday !== undefined && output.Sunday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Sunday, context)
            : undefined,
        Thursday: output.Thursday !== undefined && output.Thursday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Thursday, context)
            : undefined,
        Tuesday: output.Tuesday !== undefined && output.Tuesday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Tuesday, context)
            : undefined,
        Wednesday: output.Wednesday !== undefined && output.Wednesday !== null
            ? deserializeAws_json1_1DailyAutoScalingSchedule(output.Wednesday, context)
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