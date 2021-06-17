"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1DescribeMatchmakingConfigurationsCommand = exports.serializeAws_json1_1DescribeMatchmakingCommand = exports.serializeAws_json1_1DescribeInstancesCommand = exports.serializeAws_json1_1DescribeGameSessionsCommand = exports.serializeAws_json1_1DescribeGameSessionQueuesCommand = exports.serializeAws_json1_1DescribeGameSessionPlacementCommand = exports.serializeAws_json1_1DescribeGameSessionDetailsCommand = exports.serializeAws_json1_1DescribeGameServerInstancesCommand = exports.serializeAws_json1_1DescribeGameServerGroupCommand = exports.serializeAws_json1_1DescribeGameServerCommand = exports.serializeAws_json1_1DescribeFleetUtilizationCommand = exports.serializeAws_json1_1DescribeFleetPortSettingsCommand = exports.serializeAws_json1_1DescribeFleetLocationUtilizationCommand = exports.serializeAws_json1_1DescribeFleetLocationCapacityCommand = exports.serializeAws_json1_1DescribeFleetLocationAttributesCommand = exports.serializeAws_json1_1DescribeFleetEventsCommand = exports.serializeAws_json1_1DescribeFleetCapacityCommand = exports.serializeAws_json1_1DescribeFleetAttributesCommand = exports.serializeAws_json1_1DescribeEC2InstanceLimitsCommand = exports.serializeAws_json1_1DescribeBuildCommand = exports.serializeAws_json1_1DescribeAliasCommand = exports.serializeAws_json1_1DeregisterGameServerCommand = exports.serializeAws_json1_1DeleteVpcPeeringConnectionCommand = exports.serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = exports.serializeAws_json1_1DeleteScriptCommand = exports.serializeAws_json1_1DeleteScalingPolicyCommand = exports.serializeAws_json1_1DeleteMatchmakingRuleSetCommand = exports.serializeAws_json1_1DeleteMatchmakingConfigurationCommand = exports.serializeAws_json1_1DeleteGameSessionQueueCommand = exports.serializeAws_json1_1DeleteGameServerGroupCommand = exports.serializeAws_json1_1DeleteFleetLocationsCommand = exports.serializeAws_json1_1DeleteFleetCommand = exports.serializeAws_json1_1DeleteBuildCommand = exports.serializeAws_json1_1DeleteAliasCommand = exports.serializeAws_json1_1CreateVpcPeeringConnectionCommand = exports.serializeAws_json1_1CreateVpcPeeringAuthorizationCommand = exports.serializeAws_json1_1CreateScriptCommand = exports.serializeAws_json1_1CreatePlayerSessionsCommand = exports.serializeAws_json1_1CreatePlayerSessionCommand = exports.serializeAws_json1_1CreateMatchmakingRuleSetCommand = exports.serializeAws_json1_1CreateMatchmakingConfigurationCommand = exports.serializeAws_json1_1CreateGameSessionQueueCommand = exports.serializeAws_json1_1CreateGameSessionCommand = exports.serializeAws_json1_1CreateGameServerGroupCommand = exports.serializeAws_json1_1CreateFleetLocationsCommand = exports.serializeAws_json1_1CreateFleetCommand = exports.serializeAws_json1_1CreateBuildCommand = exports.serializeAws_json1_1CreateAliasCommand = exports.serializeAws_json1_1ClaimGameServerCommand = exports.serializeAws_json1_1AcceptMatchCommand = void 0;
exports.deserializeAws_json1_1CreateFleetCommand = exports.deserializeAws_json1_1CreateBuildCommand = exports.deserializeAws_json1_1CreateAliasCommand = exports.deserializeAws_json1_1ClaimGameServerCommand = exports.deserializeAws_json1_1AcceptMatchCommand = exports.serializeAws_json1_1ValidateMatchmakingRuleSetCommand = exports.serializeAws_json1_1UpdateScriptCommand = exports.serializeAws_json1_1UpdateRuntimeConfigurationCommand = exports.serializeAws_json1_1UpdateMatchmakingConfigurationCommand = exports.serializeAws_json1_1UpdateGameSessionQueueCommand = exports.serializeAws_json1_1UpdateGameSessionCommand = exports.serializeAws_json1_1UpdateGameServerGroupCommand = exports.serializeAws_json1_1UpdateGameServerCommand = exports.serializeAws_json1_1UpdateFleetPortSettingsCommand = exports.serializeAws_json1_1UpdateFleetCapacityCommand = exports.serializeAws_json1_1UpdateFleetAttributesCommand = exports.serializeAws_json1_1UpdateBuildCommand = exports.serializeAws_json1_1UpdateAliasCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1SuspendGameServerGroupCommand = exports.serializeAws_json1_1StopMatchmakingCommand = exports.serializeAws_json1_1StopGameSessionPlacementCommand = exports.serializeAws_json1_1StopFleetActionsCommand = exports.serializeAws_json1_1StartMatchmakingCommand = exports.serializeAws_json1_1StartMatchBackfillCommand = exports.serializeAws_json1_1StartGameSessionPlacementCommand = exports.serializeAws_json1_1StartFleetActionsCommand = exports.serializeAws_json1_1SearchGameSessionsCommand = exports.serializeAws_json1_1ResumeGameServerGroupCommand = exports.serializeAws_json1_1ResolveAliasCommand = exports.serializeAws_json1_1RequestUploadCredentialsCommand = exports.serializeAws_json1_1RegisterGameServerCommand = exports.serializeAws_json1_1PutScalingPolicyCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListScriptsCommand = exports.serializeAws_json1_1ListGameServersCommand = exports.serializeAws_json1_1ListGameServerGroupsCommand = exports.serializeAws_json1_1ListFleetsCommand = exports.serializeAws_json1_1ListBuildsCommand = exports.serializeAws_json1_1ListAliasesCommand = exports.serializeAws_json1_1GetInstanceAccessCommand = exports.serializeAws_json1_1GetGameSessionLogUrlCommand = exports.serializeAws_json1_1DescribeVpcPeeringConnectionsCommand = exports.serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = exports.serializeAws_json1_1DescribeScriptCommand = exports.serializeAws_json1_1DescribeScalingPoliciesCommand = exports.serializeAws_json1_1DescribeRuntimeConfigurationCommand = exports.serializeAws_json1_1DescribePlayerSessionsCommand = exports.serializeAws_json1_1DescribeMatchmakingRuleSetsCommand = void 0;
exports.deserializeAws_json1_1DescribeScriptCommand = exports.deserializeAws_json1_1DescribeScalingPoliciesCommand = exports.deserializeAws_json1_1DescribeRuntimeConfigurationCommand = exports.deserializeAws_json1_1DescribePlayerSessionsCommand = exports.deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand = exports.deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand = exports.deserializeAws_json1_1DescribeMatchmakingCommand = exports.deserializeAws_json1_1DescribeInstancesCommand = exports.deserializeAws_json1_1DescribeGameSessionsCommand = exports.deserializeAws_json1_1DescribeGameSessionQueuesCommand = exports.deserializeAws_json1_1DescribeGameSessionPlacementCommand = exports.deserializeAws_json1_1DescribeGameSessionDetailsCommand = exports.deserializeAws_json1_1DescribeGameServerInstancesCommand = exports.deserializeAws_json1_1DescribeGameServerGroupCommand = exports.deserializeAws_json1_1DescribeGameServerCommand = exports.deserializeAws_json1_1DescribeFleetUtilizationCommand = exports.deserializeAws_json1_1DescribeFleetPortSettingsCommand = exports.deserializeAws_json1_1DescribeFleetLocationUtilizationCommand = exports.deserializeAws_json1_1DescribeFleetLocationCapacityCommand = exports.deserializeAws_json1_1DescribeFleetLocationAttributesCommand = exports.deserializeAws_json1_1DescribeFleetEventsCommand = exports.deserializeAws_json1_1DescribeFleetCapacityCommand = exports.deserializeAws_json1_1DescribeFleetAttributesCommand = exports.deserializeAws_json1_1DescribeEC2InstanceLimitsCommand = exports.deserializeAws_json1_1DescribeBuildCommand = exports.deserializeAws_json1_1DescribeAliasCommand = exports.deserializeAws_json1_1DeregisterGameServerCommand = exports.deserializeAws_json1_1DeleteVpcPeeringConnectionCommand = exports.deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = exports.deserializeAws_json1_1DeleteScriptCommand = exports.deserializeAws_json1_1DeleteScalingPolicyCommand = exports.deserializeAws_json1_1DeleteMatchmakingRuleSetCommand = exports.deserializeAws_json1_1DeleteMatchmakingConfigurationCommand = exports.deserializeAws_json1_1DeleteGameSessionQueueCommand = exports.deserializeAws_json1_1DeleteGameServerGroupCommand = exports.deserializeAws_json1_1DeleteFleetLocationsCommand = exports.deserializeAws_json1_1DeleteFleetCommand = exports.deserializeAws_json1_1DeleteBuildCommand = exports.deserializeAws_json1_1DeleteAliasCommand = exports.deserializeAws_json1_1CreateVpcPeeringConnectionCommand = exports.deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand = exports.deserializeAws_json1_1CreateScriptCommand = exports.deserializeAws_json1_1CreatePlayerSessionsCommand = exports.deserializeAws_json1_1CreatePlayerSessionCommand = exports.deserializeAws_json1_1CreateMatchmakingRuleSetCommand = exports.deserializeAws_json1_1CreateMatchmakingConfigurationCommand = exports.deserializeAws_json1_1CreateGameSessionQueueCommand = exports.deserializeAws_json1_1CreateGameSessionCommand = exports.deserializeAws_json1_1CreateGameServerGroupCommand = exports.deserializeAws_json1_1CreateFleetLocationsCommand = void 0;
exports.deserializeAws_json1_1ValidateMatchmakingRuleSetCommand = exports.deserializeAws_json1_1UpdateScriptCommand = exports.deserializeAws_json1_1UpdateRuntimeConfigurationCommand = exports.deserializeAws_json1_1UpdateMatchmakingConfigurationCommand = exports.deserializeAws_json1_1UpdateGameSessionQueueCommand = exports.deserializeAws_json1_1UpdateGameSessionCommand = exports.deserializeAws_json1_1UpdateGameServerGroupCommand = exports.deserializeAws_json1_1UpdateGameServerCommand = exports.deserializeAws_json1_1UpdateFleetPortSettingsCommand = exports.deserializeAws_json1_1UpdateFleetCapacityCommand = exports.deserializeAws_json1_1UpdateFleetAttributesCommand = exports.deserializeAws_json1_1UpdateBuildCommand = exports.deserializeAws_json1_1UpdateAliasCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1SuspendGameServerGroupCommand = exports.deserializeAws_json1_1StopMatchmakingCommand = exports.deserializeAws_json1_1StopGameSessionPlacementCommand = exports.deserializeAws_json1_1StopFleetActionsCommand = exports.deserializeAws_json1_1StartMatchmakingCommand = exports.deserializeAws_json1_1StartMatchBackfillCommand = exports.deserializeAws_json1_1StartGameSessionPlacementCommand = exports.deserializeAws_json1_1StartFleetActionsCommand = exports.deserializeAws_json1_1SearchGameSessionsCommand = exports.deserializeAws_json1_1ResumeGameServerGroupCommand = exports.deserializeAws_json1_1ResolveAliasCommand = exports.deserializeAws_json1_1RequestUploadCredentialsCommand = exports.deserializeAws_json1_1RegisterGameServerCommand = exports.deserializeAws_json1_1PutScalingPolicyCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListScriptsCommand = exports.deserializeAws_json1_1ListGameServersCommand = exports.deserializeAws_json1_1ListGameServerGroupsCommand = exports.deserializeAws_json1_1ListFleetsCommand = exports.deserializeAws_json1_1ListBuildsCommand = exports.deserializeAws_json1_1ListAliasesCommand = exports.deserializeAws_json1_1GetInstanceAccessCommand = exports.deserializeAws_json1_1GetGameSessionLogUrlCommand = exports.deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand = exports.deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptMatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.AcceptMatch",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptMatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptMatchCommand = serializeAws_json1_1AcceptMatchCommand;
const serializeAws_json1_1ClaimGameServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ClaimGameServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ClaimGameServerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ClaimGameServerCommand = serializeAws_json1_1ClaimGameServerCommand;
const serializeAws_json1_1CreateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
const serializeAws_json1_1CreateBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateBuildCommand = serializeAws_json1_1CreateBuildCommand;
const serializeAws_json1_1CreateFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateFleet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFleetCommand = serializeAws_json1_1CreateFleetCommand;
const serializeAws_json1_1CreateFleetLocationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateFleetLocations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateFleetLocationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateFleetLocationsCommand = serializeAws_json1_1CreateFleetLocationsCommand;
const serializeAws_json1_1CreateGameServerGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateGameServerGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGameServerGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGameServerGroupCommand = serializeAws_json1_1CreateGameServerGroupCommand;
const serializeAws_json1_1CreateGameSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateGameSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGameSessionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGameSessionCommand = serializeAws_json1_1CreateGameSessionCommand;
const serializeAws_json1_1CreateGameSessionQueueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateGameSessionQueue",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGameSessionQueueInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGameSessionQueueCommand = serializeAws_json1_1CreateGameSessionQueueCommand;
const serializeAws_json1_1CreateMatchmakingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateMatchmakingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMatchmakingConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMatchmakingConfigurationCommand = serializeAws_json1_1CreateMatchmakingConfigurationCommand;
const serializeAws_json1_1CreateMatchmakingRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateMatchmakingRuleSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMatchmakingRuleSetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMatchmakingRuleSetCommand = serializeAws_json1_1CreateMatchmakingRuleSetCommand;
const serializeAws_json1_1CreatePlayerSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreatePlayerSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePlayerSessionCommand = serializeAws_json1_1CreatePlayerSessionCommand;
const serializeAws_json1_1CreatePlayerSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreatePlayerSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePlayerSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePlayerSessionsCommand = serializeAws_json1_1CreatePlayerSessionsCommand;
const serializeAws_json1_1CreateScriptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateScript",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateScriptCommand = serializeAws_json1_1CreateScriptCommand;
const serializeAws_json1_1CreateVpcPeeringAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateVpcPeeringAuthorization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringAuthorizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateVpcPeeringAuthorizationCommand = serializeAws_json1_1CreateVpcPeeringAuthorizationCommand;
const serializeAws_json1_1CreateVpcPeeringConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.CreateVpcPeeringConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateVpcPeeringConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateVpcPeeringConnectionCommand = serializeAws_json1_1CreateVpcPeeringConnectionCommand;
const serializeAws_json1_1DeleteAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAliasCommand = serializeAws_json1_1DeleteAliasCommand;
const serializeAws_json1_1DeleteBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteBuildCommand = serializeAws_json1_1DeleteBuildCommand;
const serializeAws_json1_1DeleteFleetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteFleet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFleetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFleetCommand = serializeAws_json1_1DeleteFleetCommand;
const serializeAws_json1_1DeleteFleetLocationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteFleetLocations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFleetLocationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteFleetLocationsCommand = serializeAws_json1_1DeleteFleetLocationsCommand;
const serializeAws_json1_1DeleteGameServerGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteGameServerGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGameServerGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGameServerGroupCommand = serializeAws_json1_1DeleteGameServerGroupCommand;
const serializeAws_json1_1DeleteGameSessionQueueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteGameSessionQueue",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGameSessionQueueInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGameSessionQueueCommand = serializeAws_json1_1DeleteGameSessionQueueCommand;
const serializeAws_json1_1DeleteMatchmakingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteMatchmakingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMatchmakingConfigurationCommand = serializeAws_json1_1DeleteMatchmakingConfigurationCommand;
const serializeAws_json1_1DeleteMatchmakingRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteMatchmakingRuleSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMatchmakingRuleSetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMatchmakingRuleSetCommand = serializeAws_json1_1DeleteMatchmakingRuleSetCommand;
const serializeAws_json1_1DeleteScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteScalingPolicyCommand = serializeAws_json1_1DeleteScalingPolicyCommand;
const serializeAws_json1_1DeleteScriptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteScript",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteScriptCommand = serializeAws_json1_1DeleteScriptCommand;
const serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteVpcPeeringAuthorization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringAuthorizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = serializeAws_json1_1DeleteVpcPeeringAuthorizationCommand;
const serializeAws_json1_1DeleteVpcPeeringConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeleteVpcPeeringConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteVpcPeeringConnectionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteVpcPeeringConnectionCommand = serializeAws_json1_1DeleteVpcPeeringConnectionCommand;
const serializeAws_json1_1DeregisterGameServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DeregisterGameServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterGameServerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterGameServerCommand = serializeAws_json1_1DeregisterGameServerCommand;
const serializeAws_json1_1DescribeAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAliasCommand = serializeAws_json1_1DescribeAliasCommand;
const serializeAws_json1_1DescribeBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeBuildCommand = serializeAws_json1_1DescribeBuildCommand;
const serializeAws_json1_1DescribeEC2InstanceLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeEC2InstanceLimits",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEC2InstanceLimitsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEC2InstanceLimitsCommand = serializeAws_json1_1DescribeEC2InstanceLimitsCommand;
const serializeAws_json1_1DescribeFleetAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetAttributesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetAttributesCommand = serializeAws_json1_1DescribeFleetAttributesCommand;
const serializeAws_json1_1DescribeFleetCapacityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetCapacity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetCapacityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetCapacityCommand = serializeAws_json1_1DescribeFleetCapacityCommand;
const serializeAws_json1_1DescribeFleetEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetEventsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetEventsCommand = serializeAws_json1_1DescribeFleetEventsCommand;
const serializeAws_json1_1DescribeFleetLocationAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetLocationAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationAttributesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetLocationAttributesCommand = serializeAws_json1_1DescribeFleetLocationAttributesCommand;
const serializeAws_json1_1DescribeFleetLocationCapacityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetLocationCapacity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationCapacityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetLocationCapacityCommand = serializeAws_json1_1DescribeFleetLocationCapacityCommand;
const serializeAws_json1_1DescribeFleetLocationUtilizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetLocationUtilization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetLocationUtilizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetLocationUtilizationCommand = serializeAws_json1_1DescribeFleetLocationUtilizationCommand;
const serializeAws_json1_1DescribeFleetPortSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetPortSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetPortSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetPortSettingsCommand = serializeAws_json1_1DescribeFleetPortSettingsCommand;
const serializeAws_json1_1DescribeFleetUtilizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeFleetUtilization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeFleetUtilizationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeFleetUtilizationCommand = serializeAws_json1_1DescribeFleetUtilizationCommand;
const serializeAws_json1_1DescribeGameServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameServerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameServerCommand = serializeAws_json1_1DescribeGameServerCommand;
const serializeAws_json1_1DescribeGameServerGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameServerGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameServerGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameServerGroupCommand = serializeAws_json1_1DescribeGameServerGroupCommand;
const serializeAws_json1_1DescribeGameServerInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameServerInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameServerInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameServerInstancesCommand = serializeAws_json1_1DescribeGameServerInstancesCommand;
const serializeAws_json1_1DescribeGameSessionDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameSessionDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionDetailsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameSessionDetailsCommand = serializeAws_json1_1DescribeGameSessionDetailsCommand;
const serializeAws_json1_1DescribeGameSessionPlacementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameSessionPlacement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionPlacementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameSessionPlacementCommand = serializeAws_json1_1DescribeGameSessionPlacementCommand;
const serializeAws_json1_1DescribeGameSessionQueuesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameSessionQueues",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionQueuesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameSessionQueuesCommand = serializeAws_json1_1DescribeGameSessionQueuesCommand;
const serializeAws_json1_1DescribeGameSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeGameSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGameSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGameSessionsCommand = serializeAws_json1_1DescribeGameSessionsCommand;
const serializeAws_json1_1DescribeInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeInstances",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeInstancesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeInstancesCommand = serializeAws_json1_1DescribeInstancesCommand;
const serializeAws_json1_1DescribeMatchmakingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeMatchmaking",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMatchmakingCommand = serializeAws_json1_1DescribeMatchmakingCommand;
const serializeAws_json1_1DescribeMatchmakingConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeMatchmakingConfigurations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingConfigurationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMatchmakingConfigurationsCommand = serializeAws_json1_1DescribeMatchmakingConfigurationsCommand;
const serializeAws_json1_1DescribeMatchmakingRuleSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeMatchmakingRuleSets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMatchmakingRuleSetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMatchmakingRuleSetsCommand = serializeAws_json1_1DescribeMatchmakingRuleSetsCommand;
const serializeAws_json1_1DescribePlayerSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribePlayerSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePlayerSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePlayerSessionsCommand = serializeAws_json1_1DescribePlayerSessionsCommand;
const serializeAws_json1_1DescribeRuntimeConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeRuntimeConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRuntimeConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRuntimeConfigurationCommand = serializeAws_json1_1DescribeRuntimeConfigurationCommand;
const serializeAws_json1_1DescribeScalingPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeScalingPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScalingPoliciesCommand = serializeAws_json1_1DescribeScalingPoliciesCommand;
const serializeAws_json1_1DescribeScriptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeScript",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeScriptCommand = serializeAws_json1_1DescribeScriptCommand;
const serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeVpcPeeringAuthorizations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand;
const serializeAws_json1_1DescribeVpcPeeringConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.DescribeVpcPeeringConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeVpcPeeringConnectionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeVpcPeeringConnectionsCommand = serializeAws_json1_1DescribeVpcPeeringConnectionsCommand;
const serializeAws_json1_1GetGameSessionLogUrlCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.GetGameSessionLogUrl",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetGameSessionLogUrlInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetGameSessionLogUrlCommand = serializeAws_json1_1GetGameSessionLogUrlCommand;
const serializeAws_json1_1GetInstanceAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.GetInstanceAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInstanceAccessInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInstanceAccessCommand = serializeAws_json1_1GetInstanceAccessCommand;
const serializeAws_json1_1ListAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAliasesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAliasesCommand = serializeAws_json1_1ListAliasesCommand;
const serializeAws_json1_1ListBuildsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListBuilds",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBuildsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListBuildsCommand = serializeAws_json1_1ListBuildsCommand;
const serializeAws_json1_1ListFleetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListFleets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFleetsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListFleetsCommand = serializeAws_json1_1ListFleetsCommand;
const serializeAws_json1_1ListGameServerGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListGameServerGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGameServerGroupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGameServerGroupsCommand = serializeAws_json1_1ListGameServerGroupsCommand;
const serializeAws_json1_1ListGameServersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListGameServers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGameServersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGameServersCommand = serializeAws_json1_1ListGameServersCommand;
const serializeAws_json1_1ListScriptsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListScripts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListScriptsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListScriptsCommand = serializeAws_json1_1ListScriptsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1PutScalingPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.PutScalingPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutScalingPolicyInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutScalingPolicyCommand = serializeAws_json1_1PutScalingPolicyCommand;
const serializeAws_json1_1RegisterGameServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.RegisterGameServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterGameServerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterGameServerCommand = serializeAws_json1_1RegisterGameServerCommand;
const serializeAws_json1_1RequestUploadCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.RequestUploadCredentials",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RequestUploadCredentialsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RequestUploadCredentialsCommand = serializeAws_json1_1RequestUploadCredentialsCommand;
const serializeAws_json1_1ResolveAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ResolveAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResolveAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResolveAliasCommand = serializeAws_json1_1ResolveAliasCommand;
const serializeAws_json1_1ResumeGameServerGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ResumeGameServerGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResumeGameServerGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResumeGameServerGroupCommand = serializeAws_json1_1ResumeGameServerGroupCommand;
const serializeAws_json1_1SearchGameSessionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.SearchGameSessions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchGameSessionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SearchGameSessionsCommand = serializeAws_json1_1SearchGameSessionsCommand;
const serializeAws_json1_1StartFleetActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StartFleetActions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartFleetActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartFleetActionsCommand = serializeAws_json1_1StartFleetActionsCommand;
const serializeAws_json1_1StartGameSessionPlacementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StartGameSessionPlacement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartGameSessionPlacementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartGameSessionPlacementCommand = serializeAws_json1_1StartGameSessionPlacementCommand;
const serializeAws_json1_1StartMatchBackfillCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StartMatchBackfill",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMatchBackfillInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMatchBackfillCommand = serializeAws_json1_1StartMatchBackfillCommand;
const serializeAws_json1_1StartMatchmakingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StartMatchmaking",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMatchmakingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMatchmakingCommand = serializeAws_json1_1StartMatchmakingCommand;
const serializeAws_json1_1StopFleetActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StopFleetActions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopFleetActionsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopFleetActionsCommand = serializeAws_json1_1StopFleetActionsCommand;
const serializeAws_json1_1StopGameSessionPlacementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StopGameSessionPlacement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopGameSessionPlacementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopGameSessionPlacementCommand = serializeAws_json1_1StopGameSessionPlacementCommand;
const serializeAws_json1_1StopMatchmakingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.StopMatchmaking",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopMatchmakingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopMatchmakingCommand = serializeAws_json1_1StopMatchmakingCommand;
const serializeAws_json1_1SuspendGameServerGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.SuspendGameServerGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1SuspendGameServerGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1SuspendGameServerGroupCommand = serializeAws_json1_1SuspendGameServerGroupCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAliasInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateAliasCommand = serializeAws_json1_1UpdateAliasCommand;
const serializeAws_json1_1UpdateBuildCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateBuild",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateBuildInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateBuildCommand = serializeAws_json1_1UpdateBuildCommand;
const serializeAws_json1_1UpdateFleetAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateFleetAttributes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetAttributesInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFleetAttributesCommand = serializeAws_json1_1UpdateFleetAttributesCommand;
const serializeAws_json1_1UpdateFleetCapacityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateFleetCapacity",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetCapacityInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFleetCapacityCommand = serializeAws_json1_1UpdateFleetCapacityCommand;
const serializeAws_json1_1UpdateFleetPortSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateFleetPortSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateFleetPortSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateFleetPortSettingsCommand = serializeAws_json1_1UpdateFleetPortSettingsCommand;
const serializeAws_json1_1UpdateGameServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateGameServer",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGameServerInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGameServerCommand = serializeAws_json1_1UpdateGameServerCommand;
const serializeAws_json1_1UpdateGameServerGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateGameServerGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGameServerGroupInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGameServerGroupCommand = serializeAws_json1_1UpdateGameServerGroupCommand;
const serializeAws_json1_1UpdateGameSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateGameSession",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGameSessionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGameSessionCommand = serializeAws_json1_1UpdateGameSessionCommand;
const serializeAws_json1_1UpdateGameSessionQueueCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateGameSessionQueue",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateGameSessionQueueInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateGameSessionQueueCommand = serializeAws_json1_1UpdateGameSessionQueueCommand;
const serializeAws_json1_1UpdateMatchmakingConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateMatchmakingConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMatchmakingConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMatchmakingConfigurationCommand = serializeAws_json1_1UpdateMatchmakingConfigurationCommand;
const serializeAws_json1_1UpdateRuntimeConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateRuntimeConfiguration",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRuntimeConfigurationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRuntimeConfigurationCommand = serializeAws_json1_1UpdateRuntimeConfigurationCommand;
const serializeAws_json1_1UpdateScriptCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.UpdateScript",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateScriptInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateScriptCommand = serializeAws_json1_1UpdateScriptCommand;
const serializeAws_json1_1ValidateMatchmakingRuleSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "GameLift.ValidateMatchmakingRuleSet",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ValidateMatchmakingRuleSetInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ValidateMatchmakingRuleSetCommand = serializeAws_json1_1ValidateMatchmakingRuleSetCommand;
const deserializeAws_json1_1AcceptMatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptMatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptMatchOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptMatchCommand = deserializeAws_json1_1AcceptMatchCommand;
const deserializeAws_json1_1AcceptMatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ClaimGameServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ClaimGameServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ClaimGameServerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ClaimGameServerCommand = deserializeAws_json1_1ClaimGameServerCommand;
const deserializeAws_json1_1ClaimGameServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OutOfCapacityException":
        case "com.amazonaws.gamelift#OutOfCapacityException":
            response = {
                ...(await deserializeAws_json1_1OutOfCapacityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
const deserializeAws_json1_1CreateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateBuildOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateBuildCommand = deserializeAws_json1_1CreateBuildCommand;
const deserializeAws_json1_1CreateBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFleetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFleetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFleetOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFleetCommand = deserializeAws_json1_1CreateFleetCommand;
const deserializeAws_json1_1CreateFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateFleetLocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateFleetLocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateFleetLocationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateFleetLocationsCommand = deserializeAws_json1_1CreateFleetLocationsCommand;
const deserializeAws_json1_1CreateFleetLocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGameServerGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGameServerGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGameServerGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGameServerGroupCommand = deserializeAws_json1_1CreateGameServerGroupCommand;
const deserializeAws_json1_1CreateGameServerGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGameSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGameSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGameSessionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGameSessionCommand = deserializeAws_json1_1CreateGameSessionCommand;
const deserializeAws_json1_1CreateGameSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FleetCapacityExceededException":
        case "com.amazonaws.gamelift#FleetCapacityExceededException":
            response = {
                ...(await deserializeAws_json1_1FleetCapacityExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.gamelift#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGameSessionQueueCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGameSessionQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGameSessionQueueOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGameSessionQueueCommand = deserializeAws_json1_1CreateGameSessionQueueCommand;
const deserializeAws_json1_1CreateGameSessionQueueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMatchmakingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMatchmakingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMatchmakingConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMatchmakingConfigurationCommand = deserializeAws_json1_1CreateMatchmakingConfigurationCommand;
const deserializeAws_json1_1CreateMatchmakingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMatchmakingRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMatchmakingRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMatchmakingRuleSetOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMatchmakingRuleSetCommand = deserializeAws_json1_1CreateMatchmakingRuleSetCommand;
const deserializeAws_json1_1CreateMatchmakingRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePlayerSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePlayerSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePlayerSessionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePlayerSessionCommand = deserializeAws_json1_1CreatePlayerSessionCommand;
const deserializeAws_json1_1CreatePlayerSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GameSessionFullException":
        case "com.amazonaws.gamelift#GameSessionFullException":
            response = {
                ...(await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGameSessionStatusException":
        case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePlayerSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePlayerSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePlayerSessionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePlayerSessionsCommand = deserializeAws_json1_1CreatePlayerSessionsCommand;
const deserializeAws_json1_1CreatePlayerSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GameSessionFullException":
        case "com.amazonaws.gamelift#GameSessionFullException":
            response = {
                ...(await deserializeAws_json1_1GameSessionFullExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGameSessionStatusException":
        case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateScriptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateScriptOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateScriptCommand = deserializeAws_json1_1CreateScriptCommand;
const deserializeAws_json1_1CreateScriptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand = deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand;
const deserializeAws_json1_1CreateVpcPeeringAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateVpcPeeringConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateVpcPeeringConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateVpcPeeringConnectionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateVpcPeeringConnectionCommand = deserializeAws_json1_1CreateVpcPeeringConnectionCommand;
const deserializeAws_json1_1CreateVpcPeeringConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAliasCommand = deserializeAws_json1_1DeleteAliasCommand;
const deserializeAws_json1_1DeleteAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteBuildCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteBuildCommand = deserializeAws_json1_1DeleteBuildCommand;
const deserializeAws_json1_1DeleteBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFleetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFleetCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFleetCommand = deserializeAws_json1_1DeleteFleetCommand;
const deserializeAws_json1_1DeleteFleetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteFleetLocationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteFleetLocationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFleetLocationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteFleetLocationsCommand = deserializeAws_json1_1DeleteFleetLocationsCommand;
const deserializeAws_json1_1DeleteFleetLocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteGameServerGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGameServerGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGameServerGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGameServerGroupCommand = deserializeAws_json1_1DeleteGameServerGroupCommand;
const deserializeAws_json1_1DeleteGameServerGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteGameSessionQueueCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGameSessionQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGameSessionQueueOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGameSessionQueueCommand = deserializeAws_json1_1DeleteGameSessionQueueCommand;
const deserializeAws_json1_1DeleteGameSessionQueueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMatchmakingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMatchmakingConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMatchmakingConfigurationCommand = deserializeAws_json1_1DeleteMatchmakingConfigurationCommand;
const deserializeAws_json1_1DeleteMatchmakingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMatchmakingRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMatchmakingRuleSetOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMatchmakingRuleSetCommand = deserializeAws_json1_1DeleteMatchmakingRuleSetCommand;
const deserializeAws_json1_1DeleteMatchmakingRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteScalingPolicyCommand = deserializeAws_json1_1DeleteScalingPolicyCommand;
const deserializeAws_json1_1DeleteScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteScriptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteScriptCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteScriptCommand = deserializeAws_json1_1DeleteScriptCommand;
const deserializeAws_json1_1DeleteScriptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand = deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommand;
const deserializeAws_json1_1DeleteVpcPeeringAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteVpcPeeringConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteVpcPeeringConnectionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteVpcPeeringConnectionCommand = deserializeAws_json1_1DeleteVpcPeeringConnectionCommand;
const deserializeAws_json1_1DeleteVpcPeeringConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterGameServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterGameServerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterGameServerCommand = deserializeAws_json1_1DeregisterGameServerCommand;
const deserializeAws_json1_1DeregisterGameServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAliasCommand = deserializeAws_json1_1DescribeAliasCommand;
const deserializeAws_json1_1DescribeAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeBuildOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeBuildCommand = deserializeAws_json1_1DescribeBuildCommand;
const deserializeAws_json1_1DescribeBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEC2InstanceLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEC2InstanceLimitsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEC2InstanceLimitsCommand = deserializeAws_json1_1DescribeEC2InstanceLimitsCommand;
const deserializeAws_json1_1DescribeEC2InstanceLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetAttributesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetAttributesCommand = deserializeAws_json1_1DescribeFleetAttributesCommand;
const deserializeAws_json1_1DescribeFleetAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetCapacityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetCapacityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetCapacityCommand = deserializeAws_json1_1DescribeFleetCapacityCommand;
const deserializeAws_json1_1DescribeFleetCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetEventsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetEventsCommand = deserializeAws_json1_1DescribeFleetEventsCommand;
const deserializeAws_json1_1DescribeFleetEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetLocationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetLocationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetLocationAttributesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetLocationAttributesCommand = deserializeAws_json1_1DescribeFleetLocationAttributesCommand;
const deserializeAws_json1_1DescribeFleetLocationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetLocationCapacityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetLocationCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetLocationCapacityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetLocationCapacityCommand = deserializeAws_json1_1DescribeFleetLocationCapacityCommand;
const deserializeAws_json1_1DescribeFleetLocationCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetLocationUtilizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetLocationUtilizationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetLocationUtilizationCommand = deserializeAws_json1_1DescribeFleetLocationUtilizationCommand;
const deserializeAws_json1_1DescribeFleetLocationUtilizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetPortSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetPortSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetPortSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetPortSettingsCommand = deserializeAws_json1_1DescribeFleetPortSettingsCommand;
const deserializeAws_json1_1DescribeFleetPortSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeFleetUtilizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeFleetUtilizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeFleetUtilizationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeFleetUtilizationCommand = deserializeAws_json1_1DescribeFleetUtilizationCommand;
const deserializeAws_json1_1DescribeFleetUtilizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameServerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameServerCommand = deserializeAws_json1_1DescribeGameServerCommand;
const deserializeAws_json1_1DescribeGameServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameServerGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameServerGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameServerGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameServerGroupCommand = deserializeAws_json1_1DescribeGameServerGroupCommand;
const deserializeAws_json1_1DescribeGameServerGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameServerInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameServerInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameServerInstancesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameServerInstancesCommand = deserializeAws_json1_1DescribeGameServerInstancesCommand;
const deserializeAws_json1_1DescribeGameServerInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameSessionDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameSessionDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionDetailsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameSessionDetailsCommand = deserializeAws_json1_1DescribeGameSessionDetailsCommand;
const deserializeAws_json1_1DescribeGameSessionDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameSessionPlacementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameSessionPlacementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionPlacementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameSessionPlacementCommand = deserializeAws_json1_1DescribeGameSessionPlacementCommand;
const deserializeAws_json1_1DescribeGameSessionPlacementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameSessionQueuesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameSessionQueuesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionQueuesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameSessionQueuesCommand = deserializeAws_json1_1DescribeGameSessionQueuesCommand;
const deserializeAws_json1_1DescribeGameSessionQueuesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGameSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGameSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGameSessionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGameSessionsCommand = deserializeAws_json1_1DescribeGameSessionsCommand;
const deserializeAws_json1_1DescribeGameSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1DescribeInstancesOutput(data, context);
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
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMatchmakingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMatchmakingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMatchmakingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMatchmakingCommand = deserializeAws_json1_1DescribeMatchmakingCommand;
const deserializeAws_json1_1DescribeMatchmakingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand = deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand;
const deserializeAws_json1_1DescribeMatchmakingConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand = deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand;
const deserializeAws_json1_1DescribeMatchmakingRuleSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribePlayerSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePlayerSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePlayerSessionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePlayerSessionsCommand = deserializeAws_json1_1DescribePlayerSessionsCommand;
const deserializeAws_json1_1DescribePlayerSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeRuntimeConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRuntimeConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRuntimeConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRuntimeConfigurationCommand = deserializeAws_json1_1DescribeRuntimeConfigurationCommand;
const deserializeAws_json1_1DescribeRuntimeConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeScalingPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScalingPoliciesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScalingPoliciesCommand = deserializeAws_json1_1DescribeScalingPoliciesCommand;
const deserializeAws_json1_1DescribeScalingPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeScriptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeScriptOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeScriptCommand = deserializeAws_json1_1DescribeScriptCommand;
const deserializeAws_json1_1DescribeScriptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand = deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand;
const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand = deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand;
const deserializeAws_json1_1DescribeVpcPeeringConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetGameSessionLogUrlCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetGameSessionLogUrlCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetGameSessionLogUrlOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetGameSessionLogUrlCommand = deserializeAws_json1_1GetGameSessionLogUrlCommand;
const deserializeAws_json1_1GetGameSessionLogUrlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInstanceAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInstanceAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInstanceAccessOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInstanceAccessCommand = deserializeAws_json1_1GetInstanceAccessCommand;
const deserializeAws_json1_1GetInstanceAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAliasesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAliasesCommand = deserializeAws_json1_1ListAliasesCommand;
const deserializeAws_json1_1ListAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListBuildsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListBuildsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBuildsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListBuildsCommand = deserializeAws_json1_1ListBuildsCommand;
const deserializeAws_json1_1ListBuildsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListFleetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListFleetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFleetsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListFleetsCommand = deserializeAws_json1_1ListFleetsCommand;
const deserializeAws_json1_1ListFleetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListGameServerGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGameServerGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGameServerGroupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGameServerGroupsCommand = deserializeAws_json1_1ListGameServerGroupsCommand;
const deserializeAws_json1_1ListGameServerGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListGameServersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGameServersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGameServersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGameServersCommand = deserializeAws_json1_1ListGameServersCommand;
const deserializeAws_json1_1ListGameServersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListScriptsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListScriptsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListScriptsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListScriptsCommand = deserializeAws_json1_1ListScriptsCommand;
const deserializeAws_json1_1ListScriptsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutScalingPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutScalingPolicyOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutScalingPolicyCommand = deserializeAws_json1_1PutScalingPolicyCommand;
const deserializeAws_json1_1PutScalingPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterGameServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterGameServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterGameServerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterGameServerCommand = deserializeAws_json1_1RegisterGameServerCommand;
const deserializeAws_json1_1RegisterGameServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RequestUploadCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RequestUploadCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RequestUploadCredentialsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RequestUploadCredentialsCommand = deserializeAws_json1_1RequestUploadCredentialsCommand;
const deserializeAws_json1_1RequestUploadCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResolveAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResolveAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResolveAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResolveAliasCommand = deserializeAws_json1_1ResolveAliasCommand;
const deserializeAws_json1_1ResolveAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResumeGameServerGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResumeGameServerGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResumeGameServerGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResumeGameServerGroupCommand = deserializeAws_json1_1ResumeGameServerGroupCommand;
const deserializeAws_json1_1ResumeGameServerGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SearchGameSessionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SearchGameSessionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchGameSessionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SearchGameSessionsCommand = deserializeAws_json1_1SearchGameSessionsCommand;
const deserializeAws_json1_1SearchGameSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TerminalRoutingStrategyException":
        case "com.amazonaws.gamelift#TerminalRoutingStrategyException":
            response = {
                ...(await deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartFleetActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartFleetActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartFleetActionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartFleetActionsCommand = deserializeAws_json1_1StartFleetActionsCommand;
const deserializeAws_json1_1StartFleetActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartGameSessionPlacementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartGameSessionPlacementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartGameSessionPlacementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartGameSessionPlacementCommand = deserializeAws_json1_1StartGameSessionPlacementCommand;
const deserializeAws_json1_1StartGameSessionPlacementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartMatchBackfillCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMatchBackfillCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMatchBackfillOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMatchBackfillCommand = deserializeAws_json1_1StartMatchBackfillCommand;
const deserializeAws_json1_1StartMatchBackfillCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartMatchmakingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMatchmakingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMatchmakingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMatchmakingCommand = deserializeAws_json1_1StartMatchmakingCommand;
const deserializeAws_json1_1StartMatchmakingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopFleetActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopFleetActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopFleetActionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopFleetActionsCommand = deserializeAws_json1_1StopFleetActionsCommand;
const deserializeAws_json1_1StopFleetActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopGameSessionPlacementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopGameSessionPlacementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopGameSessionPlacementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopGameSessionPlacementCommand = deserializeAws_json1_1StopGameSessionPlacementCommand;
const deserializeAws_json1_1StopGameSessionPlacementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopMatchmakingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopMatchmakingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopMatchmakingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopMatchmakingCommand = deserializeAws_json1_1StopMatchmakingCommand;
const deserializeAws_json1_1StopMatchmakingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1SuspendGameServerGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1SuspendGameServerGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SuspendGameServerGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1SuspendGameServerGroupCommand = deserializeAws_json1_1SuspendGameServerGroupCommand;
const deserializeAws_json1_1SuspendGameServerGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
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
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TaggingFailedException":
        case "com.amazonaws.gamelift#TaggingFailedException":
            response = {
                ...(await deserializeAws_json1_1TaggingFailedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateAliasCommand = deserializeAws_json1_1UpdateAliasCommand;
const deserializeAws_json1_1UpdateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateBuildCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateBuildCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateBuildOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateBuildCommand = deserializeAws_json1_1UpdateBuildCommand;
const deserializeAws_json1_1UpdateBuildCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFleetAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFleetAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetAttributesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFleetAttributesCommand = deserializeAws_json1_1UpdateFleetAttributesCommand;
const deserializeAws_json1_1UpdateFleetAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFleetCapacityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFleetCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetCapacityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFleetCapacityCommand = deserializeAws_json1_1UpdateFleetCapacityCommand;
const deserializeAws_json1_1UpdateFleetCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateFleetPortSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateFleetPortSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateFleetPortSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateFleetPortSettingsCommand = deserializeAws_json1_1UpdateFleetPortSettingsCommand;
const deserializeAws_json1_1UpdateFleetPortSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.gamelift#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateGameServerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGameServerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGameServerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGameServerCommand = deserializeAws_json1_1UpdateGameServerCommand;
const deserializeAws_json1_1UpdateGameServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateGameServerGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGameServerGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGameServerGroupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGameServerGroupCommand = deserializeAws_json1_1UpdateGameServerGroupCommand;
const deserializeAws_json1_1UpdateGameServerGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateGameSessionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGameSessionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGameSessionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGameSessionCommand = deserializeAws_json1_1UpdateGameSessionCommand;
const deserializeAws_json1_1UpdateGameSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.gamelift#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGameSessionStatusException":
        case "com.amazonaws.gamelift#InvalidGameSessionStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateGameSessionQueueCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateGameSessionQueueCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateGameSessionQueueOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateGameSessionQueueCommand = deserializeAws_json1_1UpdateGameSessionQueueCommand;
const deserializeAws_json1_1UpdateGameSessionQueueCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateMatchmakingConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMatchmakingConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMatchmakingConfigurationCommand = deserializeAws_json1_1UpdateMatchmakingConfigurationCommand;
const deserializeAws_json1_1UpdateMatchmakingConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRuntimeConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRuntimeConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRuntimeConfigurationOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRuntimeConfigurationCommand = deserializeAws_json1_1UpdateRuntimeConfigurationCommand;
const deserializeAws_json1_1UpdateRuntimeConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidFleetStatusException":
        case "com.amazonaws.gamelift#InvalidFleetStatusException":
            response = {
                ...(await deserializeAws_json1_1InvalidFleetStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateScriptCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateScriptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateScriptOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateScriptCommand = deserializeAws_json1_1UpdateScriptCommand;
const deserializeAws_json1_1UpdateScriptCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.gamelift#NotFoundException":
            response = {
                ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.gamelift#UnauthorizedException":
            response = {
                ...(await deserializeAws_json1_1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ValidateMatchmakingRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ValidateMatchmakingRuleSetOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ValidateMatchmakingRuleSetCommand = deserializeAws_json1_1ValidateMatchmakingRuleSetCommand;
const deserializeAws_json1_1ValidateMatchmakingRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServiceException":
        case "com.amazonaws.gamelift#InternalServiceException":
            response = {
                ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.gamelift#InvalidRequestException":
            response = {
                ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedRegionException":
        case "com.amazonaws.gamelift#UnsupportedRegionException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedRegionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FleetCapacityExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FleetCapacityExceededException(body, context);
    const contents = {
        name: "FleetCapacityExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1GameSessionFullExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1GameSessionFullException(body, context);
    const contents = {
        name: "GameSessionFullException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = {
        name: "IdempotentParameterMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceException(body, context);
    const contents = {
        name: "InternalServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidFleetStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFleetStatusException(body, context);
    const contents = {
        name: "InvalidFleetStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidGameSessionStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGameSessionStatusException(body, context);
    const contents = {
        name: "InvalidGameSessionStatusException",
        $fault: "client",
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
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OutOfCapacityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OutOfCapacityException(body, context);
    const contents = {
        name: "OutOfCapacityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TaggingFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TaggingFailedException(body, context);
    const contents = {
        name: "TaggingFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TerminalRoutingStrategyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TerminalRoutingStrategyException(body, context);
    const contents = {
        name: "TerminalRoutingStrategyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnauthorizedException(body, context);
    const contents = {
        name: "UnauthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedRegionException(body, context);
    const contents = {
        name: "UnsupportedRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptMatchInput = (input, context) => {
    return {
        ...(input.AcceptanceType !== undefined &&
            input.AcceptanceType !== null && { AcceptanceType: input.AcceptanceType }),
        ...(input.PlayerIds !== undefined &&
            input.PlayerIds !== null && { PlayerIds: serializeAws_json1_1StringList(input.PlayerIds, context) }),
        ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
    };
};
const serializeAws_json1_1AttributeValue = (input, context) => {
    return {
        ...(input.N !== undefined && input.N !== null && { N: input.N }),
        ...(input.S !== undefined && input.S !== null && { S: input.S }),
        ...(input.SDM !== undefined &&
            input.SDM !== null && { SDM: serializeAws_json1_1StringDoubleMap(input.SDM, context) }),
        ...(input.SL !== undefined && input.SL !== null && { SL: serializeAws_json1_1StringList(input.SL, context) }),
    };
};
const serializeAws_json1_1CertificateConfiguration = (input, context) => {
    return {
        ...(input.CertificateType !== undefined &&
            input.CertificateType !== null && { CertificateType: input.CertificateType }),
    };
};
const serializeAws_json1_1ClaimGameServerInput = (input, context) => {
    return {
        ...(input.GameServerData !== undefined &&
            input.GameServerData !== null && { GameServerData: input.GameServerData }),
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
    };
};
const serializeAws_json1_1CreateAliasInput = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoutingStrategy !== undefined &&
            input.RoutingStrategy !== null && {
            RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateBuildInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OperatingSystem !== undefined &&
            input.OperatingSystem !== null && { OperatingSystem: input.OperatingSystem }),
        ...(input.StorageLocation !== undefined &&
            input.StorageLocation !== null && {
            StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1CreateFleetInput = (input, context) => {
    return {
        ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
        ...(input.CertificateConfiguration !== undefined &&
            input.CertificateConfiguration !== null && {
            CertificateConfiguration: serializeAws_json1_1CertificateConfiguration(input.CertificateConfiguration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EC2InboundPermissions !== undefined &&
            input.EC2InboundPermissions !== null && {
            EC2InboundPermissions: serializeAws_json1_1IpPermissionsList(input.EC2InboundPermissions, context),
        }),
        ...(input.EC2InstanceType !== undefined &&
            input.EC2InstanceType !== null && { EC2InstanceType: input.EC2InstanceType }),
        ...(input.FleetType !== undefined && input.FleetType !== null && { FleetType: input.FleetType }),
        ...(input.InstanceRoleArn !== undefined &&
            input.InstanceRoleArn !== null && { InstanceRoleArn: input.InstanceRoleArn }),
        ...(input.Locations !== undefined &&
            input.Locations !== null && {
            Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
        }),
        ...(input.LogPaths !== undefined &&
            input.LogPaths !== null && { LogPaths: serializeAws_json1_1StringList(input.LogPaths, context) }),
        ...(input.MetricGroups !== undefined &&
            input.MetricGroups !== null && {
            MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NewGameSessionProtectionPolicy !== undefined &&
            input.NewGameSessionProtectionPolicy !== null && {
            NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
        }),
        ...(input.PeerVpcAwsAccountId !== undefined &&
            input.PeerVpcAwsAccountId !== null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
        ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
        ...(input.ResourceCreationLimitPolicy !== undefined &&
            input.ResourceCreationLimitPolicy !== null && {
            ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context),
        }),
        ...(input.RuntimeConfiguration !== undefined &&
            input.RuntimeConfiguration !== null && {
            RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
        }),
        ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
        ...(input.ServerLaunchParameters !== undefined &&
            input.ServerLaunchParameters !== null && { ServerLaunchParameters: input.ServerLaunchParameters }),
        ...(input.ServerLaunchPath !== undefined &&
            input.ServerLaunchPath !== null && { ServerLaunchPath: input.ServerLaunchPath }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateFleetLocationsInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Locations !== undefined &&
            input.Locations !== null && {
            Locations: serializeAws_json1_1LocationConfigurationList(input.Locations, context),
        }),
    };
};
const serializeAws_json1_1CreateGameServerGroupInput = (input, context) => {
    return {
        ...(input.AutoScalingPolicy !== undefined &&
            input.AutoScalingPolicy !== null && {
            AutoScalingPolicy: serializeAws_json1_1GameServerGroupAutoScalingPolicy(input.AutoScalingPolicy, context),
        }),
        ...(input.BalancingStrategy !== undefined &&
            input.BalancingStrategy !== null && { BalancingStrategy: input.BalancingStrategy }),
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerProtectionPolicy !== undefined &&
            input.GameServerProtectionPolicy !== null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
        ...(input.InstanceDefinitions !== undefined &&
            input.InstanceDefinitions !== null && {
            InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
        }),
        ...(input.LaunchTemplate !== undefined &&
            input.LaunchTemplate !== null && {
            LaunchTemplate: serializeAws_json1_1LaunchTemplateSpecification(input.LaunchTemplate, context),
        }),
        ...(input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }),
        ...(input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.VpcSubnets !== undefined &&
            input.VpcSubnets !== null && { VpcSubnets: serializeAws_json1_1VpcSubnets(input.VpcSubnets, context) }),
    };
};
const serializeAws_json1_1CreateGameSessionInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.CreatorId !== undefined && input.CreatorId !== null && { CreatorId: input.CreatorId }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.GameProperties !== undefined &&
            input.GameProperties !== null && {
            GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
        }),
        ...(input.GameSessionData !== undefined &&
            input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.IdempotencyToken !== undefined &&
            input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.MaximumPlayerSessionCount !== undefined &&
            input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateGameSessionQueueInput = (input, context) => {
    return {
        ...(input.CustomEventData !== undefined &&
            input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
        }),
        ...(input.FilterConfiguration !== undefined &&
            input.FilterConfiguration !== null && {
            FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotificationTarget !== undefined &&
            input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
        ...(input.PlayerLatencyPolicies !== undefined &&
            input.PlayerLatencyPolicies !== null && {
            PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
        }),
        ...(input.PriorityConfiguration !== undefined &&
            input.PriorityConfiguration !== null && {
            PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.TimeoutInSeconds !== undefined &&
            input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
    };
};
const serializeAws_json1_1CreateMatchmakingConfigurationInput = (input, context) => {
    return {
        ...(input.AcceptanceRequired !== undefined &&
            input.AcceptanceRequired !== null && { AcceptanceRequired: input.AcceptanceRequired }),
        ...(input.AcceptanceTimeoutSeconds !== undefined &&
            input.AcceptanceTimeoutSeconds !== null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds }),
        ...(input.AdditionalPlayerCount !== undefined &&
            input.AdditionalPlayerCount !== null && { AdditionalPlayerCount: input.AdditionalPlayerCount }),
        ...(input.BackfillMode !== undefined && input.BackfillMode !== null && { BackfillMode: input.BackfillMode }),
        ...(input.CustomEventData !== undefined &&
            input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FlexMatchMode !== undefined && input.FlexMatchMode !== null && { FlexMatchMode: input.FlexMatchMode }),
        ...(input.GameProperties !== undefined &&
            input.GameProperties !== null && {
            GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
        }),
        ...(input.GameSessionData !== undefined &&
            input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
        ...(input.GameSessionQueueArns !== undefined &&
            input.GameSessionQueueArns !== null && {
            GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotificationTarget !== undefined &&
            input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
        ...(input.RequestTimeoutSeconds !== undefined &&
            input.RequestTimeoutSeconds !== null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
        ...(input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateMatchmakingRuleSetInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RuleSetBody !== undefined && input.RuleSetBody !== null && { RuleSetBody: input.RuleSetBody }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePlayerSessionInput = (input, context) => {
    return {
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.PlayerData !== undefined && input.PlayerData !== null && { PlayerData: input.PlayerData }),
        ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
    };
};
const serializeAws_json1_1CreatePlayerSessionsInput = (input, context) => {
    return {
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.PlayerDataMap !== undefined &&
            input.PlayerDataMap !== null && {
            PlayerDataMap: serializeAws_json1_1PlayerDataMap(input.PlayerDataMap, context),
        }),
        ...(input.PlayerIds !== undefined &&
            input.PlayerIds !== null && { PlayerIds: serializeAws_json1_1PlayerIdList(input.PlayerIds, context) }),
    };
};
const serializeAws_json1_1CreateScriptInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.StorageLocation !== undefined &&
            input.StorageLocation !== null && {
            StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
        ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
    };
};
const serializeAws_json1_1CreateVpcPeeringAuthorizationInput = (input, context) => {
    return {
        ...(input.GameLiftAwsAccountId !== undefined &&
            input.GameLiftAwsAccountId !== null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
        ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
    };
};
const serializeAws_json1_1CreateVpcPeeringConnectionInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.PeerVpcAwsAccountId !== undefined &&
            input.PeerVpcAwsAccountId !== null && { PeerVpcAwsAccountId: input.PeerVpcAwsAccountId }),
        ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
    };
};
const serializeAws_json1_1DeleteAliasInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    };
};
const serializeAws_json1_1DeleteBuildInput = (input, context) => {
    return {
        ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
    };
};
const serializeAws_json1_1DeleteFleetInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    };
};
const serializeAws_json1_1DeleteFleetLocationsInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Locations !== undefined &&
            input.Locations !== null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }),
    };
};
const serializeAws_json1_1DeleteGameServerGroupInput = (input, context) => {
    return {
        ...(input.DeleteOption !== undefined && input.DeleteOption !== null && { DeleteOption: input.DeleteOption }),
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    };
};
const serializeAws_json1_1DeleteGameSessionQueueInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteMatchmakingConfigurationInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteMatchmakingRuleSetInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteScalingPolicyInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteScriptInput = (input, context) => {
    return {
        ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
    };
};
const serializeAws_json1_1DeleteVpcPeeringAuthorizationInput = (input, context) => {
    return {
        ...(input.GameLiftAwsAccountId !== undefined &&
            input.GameLiftAwsAccountId !== null && { GameLiftAwsAccountId: input.GameLiftAwsAccountId }),
        ...(input.PeerVpcId !== undefined && input.PeerVpcId !== null && { PeerVpcId: input.PeerVpcId }),
    };
};
const serializeAws_json1_1DeleteVpcPeeringConnectionInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.VpcPeeringConnectionId !== undefined &&
            input.VpcPeeringConnectionId !== null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
    };
};
const serializeAws_json1_1DeregisterGameServerInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
    };
};
const serializeAws_json1_1DescribeAliasInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    };
};
const serializeAws_json1_1DescribeBuildInput = (input, context) => {
    return {
        ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
    };
};
const serializeAws_json1_1DescribeEC2InstanceLimitsInput = (input, context) => {
    return {
        ...(input.EC2InstanceType !== undefined &&
            input.EC2InstanceType !== null && { EC2InstanceType: input.EC2InstanceType }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1DescribeFleetAttributesInput = (input, context) => {
    return {
        ...(input.FleetIds !== undefined &&
            input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeFleetCapacityInput = (input, context) => {
    return {
        ...(input.FleetIds !== undefined &&
            input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeFleetEventsInput = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1DescribeFleetLocationAttributesInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Locations !== undefined &&
            input.Locations !== null && { Locations: serializeAws_json1_1LocationList(input.Locations, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeFleetLocationCapacityInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1DescribeFleetLocationUtilizationInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1DescribeFleetPortSettingsInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1DescribeFleetUtilizationInput = (input, context) => {
    return {
        ...(input.FleetIds !== undefined &&
            input.FleetIds !== null && { FleetIds: serializeAws_json1_1FleetIdOrArnList(input.FleetIds, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeGameServerGroupInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
    };
};
const serializeAws_json1_1DescribeGameServerInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
    };
};
const serializeAws_json1_1DescribeGameServerInstancesInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.InstanceIds !== undefined &&
            input.InstanceIds !== null && {
            InstanceIds: serializeAws_json1_1GameServerInstanceIds(input.InstanceIds, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeGameSessionDetailsInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
    };
};
const serializeAws_json1_1DescribeGameSessionPlacementInput = (input, context) => {
    return {
        ...(input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }),
    };
};
const serializeAws_json1_1DescribeGameSessionQueuesInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Names !== undefined &&
            input.Names !== null && { Names: serializeAws_json1_1GameSessionQueueNameOrArnList(input.Names, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeGameSessionsInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
    };
};
const serializeAws_json1_1DescribeInstancesInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeMatchmakingConfigurationsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Names !== undefined &&
            input.Names !== null && { Names: serializeAws_json1_1MatchmakingConfigurationNameList(input.Names, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }),
    };
};
const serializeAws_json1_1DescribeMatchmakingInput = (input, context) => {
    return {
        ...(input.TicketIds !== undefined &&
            input.TicketIds !== null && { TicketIds: serializeAws_json1_1MatchmakingIdList(input.TicketIds, context) }),
    };
};
const serializeAws_json1_1DescribeMatchmakingRuleSetsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Names !== undefined &&
            input.Names !== null && { Names: serializeAws_json1_1MatchmakingRuleSetNameList(input.Names, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribePlayerSessionsInput = (input, context) => {
    return {
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
        ...(input.PlayerSessionId !== undefined &&
            input.PlayerSessionId !== null && { PlayerSessionId: input.PlayerSessionId }),
        ...(input.PlayerSessionStatusFilter !== undefined &&
            input.PlayerSessionStatusFilter !== null && { PlayerSessionStatusFilter: input.PlayerSessionStatusFilter }),
    };
};
const serializeAws_json1_1DescribeRuntimeConfigurationInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    };
};
const serializeAws_json1_1DescribeScalingPoliciesInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
    };
};
const serializeAws_json1_1DescribeScriptInput = (input, context) => {
    return {
        ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
    };
};
const serializeAws_json1_1DescribeVpcPeeringAuthorizationsInput = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeVpcPeeringConnectionsInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
    };
};
const serializeAws_json1_1DesiredPlayerSession = (input, context) => {
    return {
        ...(input.PlayerData !== undefined && input.PlayerData !== null && { PlayerData: input.PlayerData }),
        ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
    };
};
const serializeAws_json1_1DesiredPlayerSessionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DesiredPlayerSession(entry, context);
    });
};
const serializeAws_json1_1FilterConfiguration = (input, context) => {
    return {
        ...(input.AllowedLocations !== undefined &&
            input.AllowedLocations !== null && {
            AllowedLocations: serializeAws_json1_1LocationList(input.AllowedLocations, context),
        }),
    };
};
const serializeAws_json1_1FleetActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1FleetIdOrArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GameProperty = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1GamePropertyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GameProperty(entry, context);
    });
};
const serializeAws_json1_1GameServerGroupActions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GameServerGroupAutoScalingPolicy = (input, context) => {
    return {
        ...(input.EstimatedInstanceWarmup !== undefined &&
            input.EstimatedInstanceWarmup !== null && { EstimatedInstanceWarmup: input.EstimatedInstanceWarmup }),
        ...(input.TargetTrackingConfiguration !== undefined &&
            input.TargetTrackingConfiguration !== null && {
            TargetTrackingConfiguration: serializeAws_json1_1TargetTrackingConfiguration(input.TargetTrackingConfiguration, context),
        }),
    };
};
const serializeAws_json1_1GameServerInstanceIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GameSessionQueueDestination = (input, context) => {
    return {
        ...(input.DestinationArn !== undefined &&
            input.DestinationArn !== null && { DestinationArn: input.DestinationArn }),
    };
};
const serializeAws_json1_1GameSessionQueueDestinationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};
const serializeAws_json1_1GameSessionQueueNameOrArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetGameSessionLogUrlInput = (input, context) => {
    return {
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
    };
};
const serializeAws_json1_1GetInstanceAccessInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1InstanceDefinition = (input, context) => {
    return {
        ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
        ...(input.WeightedCapacity !== undefined &&
            input.WeightedCapacity !== null && { WeightedCapacity: input.WeightedCapacity }),
    };
};
const serializeAws_json1_1InstanceDefinitions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InstanceDefinition(entry, context);
    });
};
const serializeAws_json1_1IpPermission = (input, context) => {
    return {
        ...(input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort }),
        ...(input.IpRange !== undefined && input.IpRange !== null && { IpRange: input.IpRange }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
        ...(input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort }),
    };
};
const serializeAws_json1_1IpPermissionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IpPermission(entry, context);
    });
};
const serializeAws_json1_1LatencyMap = (input, context) => {
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
const serializeAws_json1_1LaunchTemplateSpecification = (input, context) => {
    return {
        ...(input.LaunchTemplateId !== undefined &&
            input.LaunchTemplateId !== null && { LaunchTemplateId: input.LaunchTemplateId }),
        ...(input.LaunchTemplateName !== undefined &&
            input.LaunchTemplateName !== null && { LaunchTemplateName: input.LaunchTemplateName }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1ListAliasesInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.RoutingStrategyType !== undefined &&
            input.RoutingStrategyType !== null && { RoutingStrategyType: input.RoutingStrategyType }),
    };
};
const serializeAws_json1_1ListBuildsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_json1_1ListFleetsInput = (input, context) => {
    return {
        ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
    };
};
const serializeAws_json1_1ListGameServerGroupsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListGameServersInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
    };
};
const serializeAws_json1_1ListScriptsInput = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1LocationConfiguration = (input, context) => {
    return {
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1LocationConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LocationConfiguration(entry, context);
    });
};
const serializeAws_json1_1LocationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MatchmakingConfigurationNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MatchmakingIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MatchmakingRuleSetNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1MetricGroupList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Player = (input, context) => {
    return {
        ...(input.LatencyInMs !== undefined &&
            input.LatencyInMs !== null && { LatencyInMs: serializeAws_json1_1LatencyMap(input.LatencyInMs, context) }),
        ...(input.PlayerAttributes !== undefined &&
            input.PlayerAttributes !== null && {
            PlayerAttributes: serializeAws_json1_1PlayerAttributeMap(input.PlayerAttributes, context),
        }),
        ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
        ...(input.Team !== undefined && input.Team !== null && { Team: input.Team }),
    };
};
const serializeAws_json1_1PlayerAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_json1_1AttributeValue(value, context),
        };
    }, {});
};
const serializeAws_json1_1PlayerDataMap = (input, context) => {
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
const serializeAws_json1_1PlayerIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PlayerLatency = (input, context) => {
    return {
        ...(input.LatencyInMilliseconds !== undefined &&
            input.LatencyInMilliseconds !== null && { LatencyInMilliseconds: input.LatencyInMilliseconds }),
        ...(input.PlayerId !== undefined && input.PlayerId !== null && { PlayerId: input.PlayerId }),
        ...(input.RegionIdentifier !== undefined &&
            input.RegionIdentifier !== null && { RegionIdentifier: input.RegionIdentifier }),
    };
};
const serializeAws_json1_1PlayerLatencyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlayerLatency(entry, context);
    });
};
const serializeAws_json1_1PlayerLatencyPolicy = (input, context) => {
    return {
        ...(input.MaximumIndividualPlayerLatencyMilliseconds !== undefined &&
            input.MaximumIndividualPlayerLatencyMilliseconds !== null && {
            MaximumIndividualPlayerLatencyMilliseconds: input.MaximumIndividualPlayerLatencyMilliseconds,
        }),
        ...(input.PolicyDurationSeconds !== undefined &&
            input.PolicyDurationSeconds !== null && { PolicyDurationSeconds: input.PolicyDurationSeconds }),
    };
};
const serializeAws_json1_1PlayerLatencyPolicyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};
const serializeAws_json1_1PlayerList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Player(entry, context);
    });
};
const serializeAws_json1_1PriorityConfiguration = (input, context) => {
    return {
        ...(input.LocationOrder !== undefined &&
            input.LocationOrder !== null && {
            LocationOrder: serializeAws_json1_1LocationList(input.LocationOrder, context),
        }),
        ...(input.PriorityOrder !== undefined &&
            input.PriorityOrder !== null && {
            PriorityOrder: serializeAws_json1_1PriorityTypeList(input.PriorityOrder, context),
        }),
    };
};
const serializeAws_json1_1PriorityTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutScalingPolicyInput = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.EvaluationPeriods !== undefined &&
            input.EvaluationPeriods !== null && { EvaluationPeriods: input.EvaluationPeriods }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
        ...(input.ScalingAdjustment !== undefined &&
            input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }),
        ...(input.ScalingAdjustmentType !== undefined &&
            input.ScalingAdjustmentType !== null && { ScalingAdjustmentType: input.ScalingAdjustmentType }),
        ...(input.TargetConfiguration !== undefined &&
            input.TargetConfiguration !== null && {
            TargetConfiguration: serializeAws_json1_1TargetConfiguration(input.TargetConfiguration, context),
        }),
        ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
    };
};
const serializeAws_json1_1QueueArnsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RegisterGameServerInput = (input, context) => {
    return {
        ...(input.ConnectionInfo !== undefined &&
            input.ConnectionInfo !== null && { ConnectionInfo: input.ConnectionInfo }),
        ...(input.GameServerData !== undefined &&
            input.GameServerData !== null && { GameServerData: input.GameServerData }),
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_json1_1RequestUploadCredentialsInput = (input, context) => {
    return {
        ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
    };
};
const serializeAws_json1_1ResolveAliasInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    };
};
const serializeAws_json1_1ResourceCreationLimitPolicy = (input, context) => {
    return {
        ...(input.NewGameSessionsPerCreator !== undefined &&
            input.NewGameSessionsPerCreator !== null && { NewGameSessionsPerCreator: input.NewGameSessionsPerCreator }),
        ...(input.PolicyPeriodInMinutes !== undefined &&
            input.PolicyPeriodInMinutes !== null && { PolicyPeriodInMinutes: input.PolicyPeriodInMinutes }),
    };
};
const serializeAws_json1_1ResumeGameServerGroupInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.ResumeActions !== undefined &&
            input.ResumeActions !== null && {
            ResumeActions: serializeAws_json1_1GameServerGroupActions(input.ResumeActions, context),
        }),
    };
};
const serializeAws_json1_1RoutingStrategy = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Message !== undefined && input.Message !== null && { Message: input.Message }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1RuntimeConfiguration = (input, context) => {
    return {
        ...(input.GameSessionActivationTimeoutSeconds !== undefined &&
            input.GameSessionActivationTimeoutSeconds !== null && {
            GameSessionActivationTimeoutSeconds: input.GameSessionActivationTimeoutSeconds,
        }),
        ...(input.MaxConcurrentGameSessionActivations !== undefined &&
            input.MaxConcurrentGameSessionActivations !== null && {
            MaxConcurrentGameSessionActivations: input.MaxConcurrentGameSessionActivations,
        }),
        ...(input.ServerProcesses !== undefined &&
            input.ServerProcesses !== null && {
            ServerProcesses: serializeAws_json1_1ServerProcessList(input.ServerProcesses, context),
        }),
    };
};
const serializeAws_json1_1S3Location = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.ObjectVersion !== undefined && input.ObjectVersion !== null && { ObjectVersion: input.ObjectVersion }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1SearchGameSessionsInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.FilterExpression !== undefined &&
            input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SortExpression !== undefined &&
            input.SortExpression !== null && { SortExpression: input.SortExpression }),
    };
};
const serializeAws_json1_1ServerProcess = (input, context) => {
    return {
        ...(input.ConcurrentExecutions !== undefined &&
            input.ConcurrentExecutions !== null && { ConcurrentExecutions: input.ConcurrentExecutions }),
        ...(input.LaunchPath !== undefined && input.LaunchPath !== null && { LaunchPath: input.LaunchPath }),
        ...(input.Parameters !== undefined && input.Parameters !== null && { Parameters: input.Parameters }),
    };
};
const serializeAws_json1_1ServerProcessList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ServerProcess(entry, context);
    });
};
const serializeAws_json1_1StartFleetActionsInput = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1StartGameSessionPlacementInput = (input, context) => {
    return {
        ...(input.DesiredPlayerSessions !== undefined &&
            input.DesiredPlayerSessions !== null && {
            DesiredPlayerSessions: serializeAws_json1_1DesiredPlayerSessionList(input.DesiredPlayerSessions, context),
        }),
        ...(input.GameProperties !== undefined &&
            input.GameProperties !== null && {
            GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
        }),
        ...(input.GameSessionData !== undefined &&
            input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
        ...(input.GameSessionName !== undefined &&
            input.GameSessionName !== null && { GameSessionName: input.GameSessionName }),
        ...(input.GameSessionQueueName !== undefined &&
            input.GameSessionQueueName !== null && { GameSessionQueueName: input.GameSessionQueueName }),
        ...(input.MaximumPlayerSessionCount !== undefined &&
            input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
        ...(input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }),
        ...(input.PlayerLatencies !== undefined &&
            input.PlayerLatencies !== null && {
            PlayerLatencies: serializeAws_json1_1PlayerLatencyList(input.PlayerLatencies, context),
        }),
    };
};
const serializeAws_json1_1StartMatchBackfillInput = (input, context) => {
    return {
        ...(input.ConfigurationName !== undefined &&
            input.ConfigurationName !== null && { ConfigurationName: input.ConfigurationName }),
        ...(input.GameSessionArn !== undefined &&
            input.GameSessionArn !== null && { GameSessionArn: input.GameSessionArn }),
        ...(input.Players !== undefined &&
            input.Players !== null && { Players: serializeAws_json1_1PlayerList(input.Players, context) }),
        ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
    };
};
const serializeAws_json1_1StartMatchmakingInput = (input, context) => {
    return {
        ...(input.ConfigurationName !== undefined &&
            input.ConfigurationName !== null && { ConfigurationName: input.ConfigurationName }),
        ...(input.Players !== undefined &&
            input.Players !== null && { Players: serializeAws_json1_1PlayerList(input.Players, context) }),
        ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
    };
};
const serializeAws_json1_1StopFleetActionsInput = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1FleetActionList(input.Actions, context) }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
    };
};
const serializeAws_json1_1StopGameSessionPlacementInput = (input, context) => {
    return {
        ...(input.PlacementId !== undefined && input.PlacementId !== null && { PlacementId: input.PlacementId }),
    };
};
const serializeAws_json1_1StopMatchmakingInput = (input, context) => {
    return {
        ...(input.TicketId !== undefined && input.TicketId !== null && { TicketId: input.TicketId }),
    };
};
const serializeAws_json1_1StringDoubleMap = (input, context) => {
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
const serializeAws_json1_1SuspendGameServerGroupInput = (input, context) => {
    return {
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.SuspendActions !== undefined &&
            input.SuspendActions !== null && {
            SuspendActions: serializeAws_json1_1GameServerGroupActions(input.SuspendActions, context),
        }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1TargetConfiguration = (input, context) => {
    return {
        ...(input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }),
    };
};
const serializeAws_json1_1TargetTrackingConfiguration = (input, context) => {
    return {
        ...(input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateAliasInput = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoutingStrategy !== undefined &&
            input.RoutingStrategy !== null && {
            RoutingStrategy: serializeAws_json1_1RoutingStrategy(input.RoutingStrategy, context),
        }),
    };
};
const serializeAws_json1_1UpdateBuildInput = (input, context) => {
    return {
        ...(input.BuildId !== undefined && input.BuildId !== null && { BuildId: input.BuildId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_json1_1UpdateFleetAttributesInput = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.MetricGroups !== undefined &&
            input.MetricGroups !== null && {
            MetricGroups: serializeAws_json1_1MetricGroupList(input.MetricGroups, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NewGameSessionProtectionPolicy !== undefined &&
            input.NewGameSessionProtectionPolicy !== null && {
            NewGameSessionProtectionPolicy: input.NewGameSessionProtectionPolicy,
        }),
        ...(input.ResourceCreationLimitPolicy !== undefined &&
            input.ResourceCreationLimitPolicy !== null && {
            ResourceCreationLimitPolicy: serializeAws_json1_1ResourceCreationLimitPolicy(input.ResourceCreationLimitPolicy, context),
        }),
    };
};
const serializeAws_json1_1UpdateFleetCapacityInput = (input, context) => {
    return {
        ...(input.DesiredInstances !== undefined &&
            input.DesiredInstances !== null && { DesiredInstances: input.DesiredInstances }),
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.Location !== undefined && input.Location !== null && { Location: input.Location }),
        ...(input.MaxSize !== undefined && input.MaxSize !== null && { MaxSize: input.MaxSize }),
        ...(input.MinSize !== undefined && input.MinSize !== null && { MinSize: input.MinSize }),
    };
};
const serializeAws_json1_1UpdateFleetPortSettingsInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.InboundPermissionAuthorizations !== undefined &&
            input.InboundPermissionAuthorizations !== null && {
            InboundPermissionAuthorizations: serializeAws_json1_1IpPermissionsList(input.InboundPermissionAuthorizations, context),
        }),
        ...(input.InboundPermissionRevocations !== undefined &&
            input.InboundPermissionRevocations !== null && {
            InboundPermissionRevocations: serializeAws_json1_1IpPermissionsList(input.InboundPermissionRevocations, context),
        }),
    };
};
const serializeAws_json1_1UpdateGameServerGroupInput = (input, context) => {
    return {
        ...(input.BalancingStrategy !== undefined &&
            input.BalancingStrategy !== null && { BalancingStrategy: input.BalancingStrategy }),
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerProtectionPolicy !== undefined &&
            input.GameServerProtectionPolicy !== null && { GameServerProtectionPolicy: input.GameServerProtectionPolicy }),
        ...(input.InstanceDefinitions !== undefined &&
            input.InstanceDefinitions !== null && {
            InstanceDefinitions: serializeAws_json1_1InstanceDefinitions(input.InstanceDefinitions, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1UpdateGameServerInput = (input, context) => {
    return {
        ...(input.GameServerData !== undefined &&
            input.GameServerData !== null && { GameServerData: input.GameServerData }),
        ...(input.GameServerGroupName !== undefined &&
            input.GameServerGroupName !== null && { GameServerGroupName: input.GameServerGroupName }),
        ...(input.GameServerId !== undefined && input.GameServerId !== null && { GameServerId: input.GameServerId }),
        ...(input.HealthCheck !== undefined && input.HealthCheck !== null && { HealthCheck: input.HealthCheck }),
        ...(input.UtilizationStatus !== undefined &&
            input.UtilizationStatus !== null && { UtilizationStatus: input.UtilizationStatus }),
    };
};
const serializeAws_json1_1UpdateGameSessionInput = (input, context) => {
    return {
        ...(input.GameSessionId !== undefined && input.GameSessionId !== null && { GameSessionId: input.GameSessionId }),
        ...(input.MaximumPlayerSessionCount !== undefined &&
            input.MaximumPlayerSessionCount !== null && { MaximumPlayerSessionCount: input.MaximumPlayerSessionCount }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PlayerSessionCreationPolicy !== undefined &&
            input.PlayerSessionCreationPolicy !== null && { PlayerSessionCreationPolicy: input.PlayerSessionCreationPolicy }),
        ...(input.ProtectionPolicy !== undefined &&
            input.ProtectionPolicy !== null && { ProtectionPolicy: input.ProtectionPolicy }),
    };
};
const serializeAws_json1_1UpdateGameSessionQueueInput = (input, context) => {
    return {
        ...(input.CustomEventData !== undefined &&
            input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
        ...(input.Destinations !== undefined &&
            input.Destinations !== null && {
            Destinations: serializeAws_json1_1GameSessionQueueDestinationList(input.Destinations, context),
        }),
        ...(input.FilterConfiguration !== undefined &&
            input.FilterConfiguration !== null && {
            FilterConfiguration: serializeAws_json1_1FilterConfiguration(input.FilterConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotificationTarget !== undefined &&
            input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
        ...(input.PlayerLatencyPolicies !== undefined &&
            input.PlayerLatencyPolicies !== null && {
            PlayerLatencyPolicies: serializeAws_json1_1PlayerLatencyPolicyList(input.PlayerLatencyPolicies, context),
        }),
        ...(input.PriorityConfiguration !== undefined &&
            input.PriorityConfiguration !== null && {
            PriorityConfiguration: serializeAws_json1_1PriorityConfiguration(input.PriorityConfiguration, context),
        }),
        ...(input.TimeoutInSeconds !== undefined &&
            input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
    };
};
const serializeAws_json1_1UpdateMatchmakingConfigurationInput = (input, context) => {
    return {
        ...(input.AcceptanceRequired !== undefined &&
            input.AcceptanceRequired !== null && { AcceptanceRequired: input.AcceptanceRequired }),
        ...(input.AcceptanceTimeoutSeconds !== undefined &&
            input.AcceptanceTimeoutSeconds !== null && { AcceptanceTimeoutSeconds: input.AcceptanceTimeoutSeconds }),
        ...(input.AdditionalPlayerCount !== undefined &&
            input.AdditionalPlayerCount !== null && { AdditionalPlayerCount: input.AdditionalPlayerCount }),
        ...(input.BackfillMode !== undefined && input.BackfillMode !== null && { BackfillMode: input.BackfillMode }),
        ...(input.CustomEventData !== undefined &&
            input.CustomEventData !== null && { CustomEventData: input.CustomEventData }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FlexMatchMode !== undefined && input.FlexMatchMode !== null && { FlexMatchMode: input.FlexMatchMode }),
        ...(input.GameProperties !== undefined &&
            input.GameProperties !== null && {
            GameProperties: serializeAws_json1_1GamePropertyList(input.GameProperties, context),
        }),
        ...(input.GameSessionData !== undefined &&
            input.GameSessionData !== null && { GameSessionData: input.GameSessionData }),
        ...(input.GameSessionQueueArns !== undefined &&
            input.GameSessionQueueArns !== null && {
            GameSessionQueueArns: serializeAws_json1_1QueueArnsList(input.GameSessionQueueArns, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotificationTarget !== undefined &&
            input.NotificationTarget !== null && { NotificationTarget: input.NotificationTarget }),
        ...(input.RequestTimeoutSeconds !== undefined &&
            input.RequestTimeoutSeconds !== null && { RequestTimeoutSeconds: input.RequestTimeoutSeconds }),
        ...(input.RuleSetName !== undefined && input.RuleSetName !== null && { RuleSetName: input.RuleSetName }),
    };
};
const serializeAws_json1_1UpdateRuntimeConfigurationInput = (input, context) => {
    return {
        ...(input.FleetId !== undefined && input.FleetId !== null && { FleetId: input.FleetId }),
        ...(input.RuntimeConfiguration !== undefined &&
            input.RuntimeConfiguration !== null && {
            RuntimeConfiguration: serializeAws_json1_1RuntimeConfiguration(input.RuntimeConfiguration, context),
        }),
    };
};
const serializeAws_json1_1UpdateScriptInput = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ScriptId !== undefined && input.ScriptId !== null && { ScriptId: input.ScriptId }),
        ...(input.StorageLocation !== undefined &&
            input.StorageLocation !== null && {
            StorageLocation: serializeAws_json1_1S3Location(input.StorageLocation, context),
        }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
        ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
    };
};
const serializeAws_json1_1ValidateMatchmakingRuleSetInput = (input, context) => {
    return {
        ...(input.RuleSetBody !== undefined && input.RuleSetBody !== null && { RuleSetBody: input.RuleSetBody }),
    };
};
const serializeAws_json1_1VpcSubnets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AcceptMatchOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1Alias = (output, context) => {
    return {
        AliasArn: output.AliasArn !== undefined && output.AliasArn !== null ? output.AliasArn : undefined,
        AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoutingStrategy: output.RoutingStrategy !== undefined && output.RoutingStrategy !== null
            ? deserializeAws_json1_1RoutingStrategy(output.RoutingStrategy, context)
            : undefined,
    };
};
const deserializeAws_json1_1AliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Alias(entry, context);
    });
};
const deserializeAws_json1_1AttributeValue = (output, context) => {
    return {
        N: output.N !== undefined && output.N !== null ? output.N : undefined,
        S: output.S !== undefined && output.S !== null ? output.S : undefined,
        SDM: output.SDM !== undefined && output.SDM !== null
            ? deserializeAws_json1_1StringDoubleMap(output.SDM, context)
            : undefined,
        SL: output.SL !== undefined && output.SL !== null ? deserializeAws_json1_1StringList(output.SL, context) : undefined,
    };
};
const deserializeAws_json1_1AwsCredentials = (output, context) => {
    return {
        AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
        SecretAccessKey: output.SecretAccessKey !== undefined && output.SecretAccessKey !== null ? output.SecretAccessKey : undefined,
        SessionToken: output.SessionToken !== undefined && output.SessionToken !== null ? output.SessionToken : undefined,
    };
};
const deserializeAws_json1_1Build = (output, context) => {
    return {
        BuildArn: output.BuildArn !== undefined && output.BuildArn !== null ? output.BuildArn : undefined,
        BuildId: output.BuildId !== undefined && output.BuildId !== null ? output.BuildId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
        SizeOnDisk: output.SizeOnDisk !== undefined && output.SizeOnDisk !== null ? output.SizeOnDisk : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1BuildList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Build(entry, context);
    });
};
const deserializeAws_json1_1CertificateConfiguration = (output, context) => {
    return {
        CertificateType: output.CertificateType !== undefined && output.CertificateType !== null ? output.CertificateType : undefined,
    };
};
const deserializeAws_json1_1ClaimGameServerOutput = (output, context) => {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateAliasOutput = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null
            ? deserializeAws_json1_1Alias(output.Alias, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateBuildOutput = (output, context) => {
    return {
        Build: output.Build !== undefined && output.Build !== null
            ? deserializeAws_json1_1Build(output.Build, context)
            : undefined,
        StorageLocation: output.StorageLocation !== undefined && output.StorageLocation !== null
            ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
            : undefined,
        UploadCredentials: output.UploadCredentials !== undefined && output.UploadCredentials !== null
            ? deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateFleetLocationsOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        LocationStates: output.LocationStates !== undefined && output.LocationStates !== null
            ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateFleetOutput = (output, context) => {
    return {
        FleetAttributes: output.FleetAttributes !== undefined && output.FleetAttributes !== null
            ? deserializeAws_json1_1FleetAttributes(output.FleetAttributes, context)
            : undefined,
        LocationStates: output.LocationStates !== undefined && output.LocationStates !== null
            ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateGameServerGroupOutput = (output, context) => {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateGameSessionOutput = (output, context) => {
    return {
        GameSession: output.GameSession !== undefined && output.GameSession !== null
            ? deserializeAws_json1_1GameSession(output.GameSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateGameSessionQueueOutput = (output, context) => {
    return {
        GameSessionQueue: output.GameSessionQueue !== undefined && output.GameSessionQueue !== null
            ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateMatchmakingConfigurationOutput = (output, context) => {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateMatchmakingRuleSetOutput = (output, context) => {
    return {
        RuleSet: output.RuleSet !== undefined && output.RuleSet !== null
            ? deserializeAws_json1_1MatchmakingRuleSet(output.RuleSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreatePlayerSessionOutput = (output, context) => {
    return {
        PlayerSession: output.PlayerSession !== undefined && output.PlayerSession !== null
            ? deserializeAws_json1_1PlayerSession(output.PlayerSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreatePlayerSessionsOutput = (output, context) => {
    return {
        PlayerSessions: output.PlayerSessions !== undefined && output.PlayerSessions !== null
            ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateScriptOutput = (output, context) => {
    return {
        Script: output.Script !== undefined && output.Script !== null
            ? deserializeAws_json1_1Script(output.Script, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateVpcPeeringAuthorizationOutput = (output, context) => {
    return {
        VpcPeeringAuthorization: output.VpcPeeringAuthorization !== undefined && output.VpcPeeringAuthorization !== null
            ? deserializeAws_json1_1VpcPeeringAuthorization(output.VpcPeeringAuthorization, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateVpcPeeringConnectionOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteFleetLocationsOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        LocationStates: output.LocationStates !== undefined && output.LocationStates !== null
            ? deserializeAws_json1_1LocationStateList(output.LocationStates, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteGameServerGroupOutput = (output, context) => {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeleteGameSessionQueueOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteMatchmakingConfigurationOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteMatchmakingRuleSetOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteVpcPeeringAuthorizationOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteVpcPeeringConnectionOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeAliasOutput = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null
            ? deserializeAws_json1_1Alias(output.Alias, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeBuildOutput = (output, context) => {
    return {
        Build: output.Build !== undefined && output.Build !== null
            ? deserializeAws_json1_1Build(output.Build, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEC2InstanceLimitsOutput = (output, context) => {
    return {
        EC2InstanceLimits: output.EC2InstanceLimits !== undefined && output.EC2InstanceLimits !== null
            ? deserializeAws_json1_1EC2InstanceLimitList(output.EC2InstanceLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetAttributesOutput = (output, context) => {
    return {
        FleetAttributes: output.FleetAttributes !== undefined && output.FleetAttributes !== null
            ? deserializeAws_json1_1FleetAttributesList(output.FleetAttributes, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetCapacityOutput = (output, context) => {
    return {
        FleetCapacity: output.FleetCapacity !== undefined && output.FleetCapacity !== null
            ? deserializeAws_json1_1FleetCapacityList(output.FleetCapacity, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetEventsOutput = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventList(output.Events, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetLocationAttributesOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        LocationAttributes: output.LocationAttributes !== undefined && output.LocationAttributes !== null
            ? deserializeAws_json1_1LocationAttributesList(output.LocationAttributes, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetLocationCapacityOutput = (output, context) => {
    return {
        FleetCapacity: output.FleetCapacity !== undefined && output.FleetCapacity !== null
            ? deserializeAws_json1_1FleetCapacity(output.FleetCapacity, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetLocationUtilizationOutput = (output, context) => {
    return {
        FleetUtilization: output.FleetUtilization !== undefined && output.FleetUtilization !== null
            ? deserializeAws_json1_1FleetUtilization(output.FleetUtilization, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetPortSettingsOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InboundPermissions: output.InboundPermissions !== undefined && output.InboundPermissions !== null
            ? deserializeAws_json1_1IpPermissionsList(output.InboundPermissions, context)
            : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
const deserializeAws_json1_1DescribeFleetUtilizationOutput = (output, context) => {
    return {
        FleetUtilization: output.FleetUtilization !== undefined && output.FleetUtilization !== null
            ? deserializeAws_json1_1FleetUtilizationList(output.FleetUtilization, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeGameServerGroupOutput = (output, context) => {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeGameServerInstancesOutput = (output, context) => {
    return {
        GameServerInstances: output.GameServerInstances !== undefined && output.GameServerInstances !== null
            ? deserializeAws_json1_1GameServerInstances(output.GameServerInstances, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeGameServerOutput = (output, context) => {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeGameSessionDetailsOutput = (output, context) => {
    return {
        GameSessionDetails: output.GameSessionDetails !== undefined && output.GameSessionDetails !== null
            ? deserializeAws_json1_1GameSessionDetailList(output.GameSessionDetails, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeGameSessionPlacementOutput = (output, context) => {
    return {
        GameSessionPlacement: output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
            ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeGameSessionQueuesOutput = (output, context) => {
    return {
        GameSessionQueues: output.GameSessionQueues !== undefined && output.GameSessionQueues !== null
            ? deserializeAws_json1_1GameSessionQueueList(output.GameSessionQueues, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeGameSessionsOutput = (output, context) => {
    return {
        GameSessions: output.GameSessions !== undefined && output.GameSessions !== null
            ? deserializeAws_json1_1GameSessionList(output.GameSessions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeInstancesOutput = (output, context) => {
    return {
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_json1_1InstanceList(output.Instances, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeMatchmakingConfigurationsOutput = (output, context) => {
    return {
        Configurations: output.Configurations !== undefined && output.Configurations !== null
            ? deserializeAws_json1_1MatchmakingConfigurationList(output.Configurations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeMatchmakingOutput = (output, context) => {
    return {
        TicketList: output.TicketList !== undefined && output.TicketList !== null
            ? deserializeAws_json1_1MatchmakingTicketList(output.TicketList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeMatchmakingRuleSetsOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RuleSets: output.RuleSets !== undefined && output.RuleSets !== null
            ? deserializeAws_json1_1MatchmakingRuleSetList(output.RuleSets, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePlayerSessionsOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PlayerSessions: output.PlayerSessions !== undefined && output.PlayerSessions !== null
            ? deserializeAws_json1_1PlayerSessionList(output.PlayerSessions, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeRuntimeConfigurationOutput = (output, context) => {
    return {
        RuntimeConfiguration: output.RuntimeConfiguration !== undefined && output.RuntimeConfiguration !== null
            ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeScalingPoliciesOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ScalingPolicies: output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
            ? deserializeAws_json1_1ScalingPolicyList(output.ScalingPolicies, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeScriptOutput = (output, context) => {
    return {
        Script: output.Script !== undefined && output.Script !== null
            ? deserializeAws_json1_1Script(output.Script, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeVpcPeeringAuthorizationsOutput = (output, context) => {
    return {
        VpcPeeringAuthorizations: output.VpcPeeringAuthorizations !== undefined && output.VpcPeeringAuthorizations !== null
            ? deserializeAws_json1_1VpcPeeringAuthorizationList(output.VpcPeeringAuthorizations, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeVpcPeeringConnectionsOutput = (output, context) => {
    return {
        VpcPeeringConnections: output.VpcPeeringConnections !== undefined && output.VpcPeeringConnections !== null
            ? deserializeAws_json1_1VpcPeeringConnectionList(output.VpcPeeringConnections, context)
            : undefined,
    };
};
const deserializeAws_json1_1EC2InstanceCounts = (output, context) => {
    return {
        ACTIVE: output.ACTIVE !== undefined && output.ACTIVE !== null ? output.ACTIVE : undefined,
        DESIRED: output.DESIRED !== undefined && output.DESIRED !== null ? output.DESIRED : undefined,
        IDLE: output.IDLE !== undefined && output.IDLE !== null ? output.IDLE : undefined,
        MAXIMUM: output.MAXIMUM !== undefined && output.MAXIMUM !== null ? output.MAXIMUM : undefined,
        MINIMUM: output.MINIMUM !== undefined && output.MINIMUM !== null ? output.MINIMUM : undefined,
        PENDING: output.PENDING !== undefined && output.PENDING !== null ? output.PENDING : undefined,
        TERMINATING: output.TERMINATING !== undefined && output.TERMINATING !== null ? output.TERMINATING : undefined,
    };
};
const deserializeAws_json1_1EC2InstanceLimit = (output, context) => {
    return {
        CurrentInstances: output.CurrentInstances !== undefined && output.CurrentInstances !== null ? output.CurrentInstances : undefined,
        EC2InstanceType: output.EC2InstanceType !== undefined && output.EC2InstanceType !== null ? output.EC2InstanceType : undefined,
        InstanceLimit: output.InstanceLimit !== undefined && output.InstanceLimit !== null ? output.InstanceLimit : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    };
};
const deserializeAws_json1_1EC2InstanceLimitList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EC2InstanceLimit(entry, context);
    });
};
const deserializeAws_json1_1Event = (output, context) => {
    return {
        EventCode: output.EventCode !== undefined && output.EventCode !== null ? output.EventCode : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
        EventTime: output.EventTime !== undefined && output.EventTime !== null
            ? new Date(Math.round(output.EventTime * 1000))
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        PreSignedLogUrl: output.PreSignedLogUrl !== undefined && output.PreSignedLogUrl !== null ? output.PreSignedLogUrl : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
const deserializeAws_json1_1FilterConfiguration = (output, context) => {
    return {
        AllowedLocations: output.AllowedLocations !== undefined && output.AllowedLocations !== null
            ? deserializeAws_json1_1LocationList(output.AllowedLocations, context)
            : undefined,
    };
};
const deserializeAws_json1_1FleetActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FleetAttributes = (output, context) => {
    return {
        BuildArn: output.BuildArn !== undefined && output.BuildArn !== null ? output.BuildArn : undefined,
        BuildId: output.BuildId !== undefined && output.BuildId !== null ? output.BuildId : undefined,
        CertificateConfiguration: output.CertificateConfiguration !== undefined && output.CertificateConfiguration !== null
            ? deserializeAws_json1_1CertificateConfiguration(output.CertificateConfiguration, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        FleetType: output.FleetType !== undefined && output.FleetType !== null ? output.FleetType : undefined,
        InstanceRoleArn: output.InstanceRoleArn !== undefined && output.InstanceRoleArn !== null ? output.InstanceRoleArn : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        LogPaths: output.LogPaths !== undefined && output.LogPaths !== null
            ? deserializeAws_json1_1StringList(output.LogPaths, context)
            : undefined,
        MetricGroups: output.MetricGroups !== undefined && output.MetricGroups !== null
            ? deserializeAws_json1_1MetricGroupList(output.MetricGroups, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NewGameSessionProtectionPolicy: output.NewGameSessionProtectionPolicy !== undefined && output.NewGameSessionProtectionPolicy !== null
            ? output.NewGameSessionProtectionPolicy
            : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
        ResourceCreationLimitPolicy: output.ResourceCreationLimitPolicy !== undefined && output.ResourceCreationLimitPolicy !== null
            ? deserializeAws_json1_1ResourceCreationLimitPolicy(output.ResourceCreationLimitPolicy, context)
            : undefined,
        ScriptArn: output.ScriptArn !== undefined && output.ScriptArn !== null ? output.ScriptArn : undefined,
        ScriptId: output.ScriptId !== undefined && output.ScriptId !== null ? output.ScriptId : undefined,
        ServerLaunchParameters: output.ServerLaunchParameters !== undefined && output.ServerLaunchParameters !== null
            ? output.ServerLaunchParameters
            : undefined,
        ServerLaunchPath: output.ServerLaunchPath !== undefined && output.ServerLaunchPath !== null ? output.ServerLaunchPath : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StoppedActions: output.StoppedActions !== undefined && output.StoppedActions !== null
            ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context)
            : undefined,
        TerminationTime: output.TerminationTime !== undefined && output.TerminationTime !== null
            ? new Date(Math.round(output.TerminationTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1FleetAttributesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FleetAttributes(entry, context);
    });
};
const deserializeAws_json1_1FleetCapacity = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InstanceCounts: output.InstanceCounts !== undefined && output.InstanceCounts !== null
            ? deserializeAws_json1_1EC2InstanceCounts(output.InstanceCounts, context)
            : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    };
};
const deserializeAws_json1_1FleetCapacityExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1FleetCapacityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FleetCapacity(entry, context);
    });
};
const deserializeAws_json1_1FleetIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FleetUtilization = (output, context) => {
    return {
        ActiveGameSessionCount: output.ActiveGameSessionCount !== undefined && output.ActiveGameSessionCount !== null
            ? output.ActiveGameSessionCount
            : undefined,
        ActiveServerProcessCount: output.ActiveServerProcessCount !== undefined && output.ActiveServerProcessCount !== null
            ? output.ActiveServerProcessCount
            : undefined,
        CurrentPlayerSessionCount: output.CurrentPlayerSessionCount !== undefined && output.CurrentPlayerSessionCount !== null
            ? output.CurrentPlayerSessionCount
            : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        MaximumPlayerSessionCount: output.MaximumPlayerSessionCount !== undefined && output.MaximumPlayerSessionCount !== null
            ? output.MaximumPlayerSessionCount
            : undefined,
    };
};
const deserializeAws_json1_1FleetUtilizationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FleetUtilization(entry, context);
    });
};
const deserializeAws_json1_1GameProperty = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1GamePropertyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameProperty(entry, context);
    });
};
const deserializeAws_json1_1GameServer = (output, context) => {
    return {
        ClaimStatus: output.ClaimStatus !== undefined && output.ClaimStatus !== null ? output.ClaimStatus : undefined,
        ConnectionInfo: output.ConnectionInfo !== undefined && output.ConnectionInfo !== null ? output.ConnectionInfo : undefined,
        GameServerData: output.GameServerData !== undefined && output.GameServerData !== null ? output.GameServerData : undefined,
        GameServerGroupArn: output.GameServerGroupArn !== undefined && output.GameServerGroupArn !== null
            ? output.GameServerGroupArn
            : undefined,
        GameServerGroupName: output.GameServerGroupName !== undefined && output.GameServerGroupName !== null
            ? output.GameServerGroupName
            : undefined,
        GameServerId: output.GameServerId !== undefined && output.GameServerId !== null ? output.GameServerId : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        LastClaimTime: output.LastClaimTime !== undefined && output.LastClaimTime !== null
            ? new Date(Math.round(output.LastClaimTime * 1000))
            : undefined,
        LastHealthCheckTime: output.LastHealthCheckTime !== undefined && output.LastHealthCheckTime !== null
            ? new Date(Math.round(output.LastHealthCheckTime * 1000))
            : undefined,
        RegistrationTime: output.RegistrationTime !== undefined && output.RegistrationTime !== null
            ? new Date(Math.round(output.RegistrationTime * 1000))
            : undefined,
        UtilizationStatus: output.UtilizationStatus !== undefined && output.UtilizationStatus !== null
            ? output.UtilizationStatus
            : undefined,
    };
};
const deserializeAws_json1_1GameServerGroup = (output, context) => {
    return {
        AutoScalingGroupArn: output.AutoScalingGroupArn !== undefined && output.AutoScalingGroupArn !== null
            ? output.AutoScalingGroupArn
            : undefined,
        BalancingStrategy: output.BalancingStrategy !== undefined && output.BalancingStrategy !== null
            ? output.BalancingStrategy
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        GameServerGroupArn: output.GameServerGroupArn !== undefined && output.GameServerGroupArn !== null
            ? output.GameServerGroupArn
            : undefined,
        GameServerGroupName: output.GameServerGroupName !== undefined && output.GameServerGroupName !== null
            ? output.GameServerGroupName
            : undefined,
        GameServerProtectionPolicy: output.GameServerProtectionPolicy !== undefined && output.GameServerProtectionPolicy !== null
            ? output.GameServerProtectionPolicy
            : undefined,
        InstanceDefinitions: output.InstanceDefinitions !== undefined && output.InstanceDefinitions !== null
            ? deserializeAws_json1_1InstanceDefinitions(output.InstanceDefinitions, context)
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        SuspendedActions: output.SuspendedActions !== undefined && output.SuspendedActions !== null
            ? deserializeAws_json1_1GameServerGroupActions(output.SuspendedActions, context)
            : undefined,
    };
};
const deserializeAws_json1_1GameServerGroupActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1GameServerGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameServerGroup(entry, context);
    });
};
const deserializeAws_json1_1GameServerInstance = (output, context) => {
    return {
        GameServerGroupArn: output.GameServerGroupArn !== undefined && output.GameServerGroupArn !== null
            ? output.GameServerGroupArn
            : undefined,
        GameServerGroupName: output.GameServerGroupName !== undefined && output.GameServerGroupName !== null
            ? output.GameServerGroupName
            : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        InstanceStatus: output.InstanceStatus !== undefined && output.InstanceStatus !== null ? output.InstanceStatus : undefined,
    };
};
const deserializeAws_json1_1GameServerInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameServerInstance(entry, context);
    });
};
const deserializeAws_json1_1GameServers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameServer(entry, context);
    });
};
const deserializeAws_json1_1GameSession = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CreatorId: output.CreatorId !== undefined && output.CreatorId !== null ? output.CreatorId : undefined,
        CurrentPlayerSessionCount: output.CurrentPlayerSessionCount !== undefined && output.CurrentPlayerSessionCount !== null
            ? output.CurrentPlayerSessionCount
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        GameProperties: output.GameProperties !== undefined && output.GameProperties !== null
            ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
            : undefined,
        GameSessionData: output.GameSessionData !== undefined && output.GameSessionData !== null ? output.GameSessionData : undefined,
        GameSessionId: output.GameSessionId !== undefined && output.GameSessionId !== null ? output.GameSessionId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        MatchmakerData: output.MatchmakerData !== undefined && output.MatchmakerData !== null ? output.MatchmakerData : undefined,
        MaximumPlayerSessionCount: output.MaximumPlayerSessionCount !== undefined && output.MaximumPlayerSessionCount !== null
            ? output.MaximumPlayerSessionCount
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PlayerSessionCreationPolicy: output.PlayerSessionCreationPolicy !== undefined && output.PlayerSessionCreationPolicy !== null
            ? output.PlayerSessionCreationPolicy
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        TerminationTime: output.TerminationTime !== undefined && output.TerminationTime !== null
            ? new Date(Math.round(output.TerminationTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1GameSessionConnectionInfo = (output, context) => {
    return {
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        GameSessionArn: output.GameSessionArn !== undefined && output.GameSessionArn !== null ? output.GameSessionArn : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        MatchedPlayerSessions: output.MatchedPlayerSessions !== undefined && output.MatchedPlayerSessions !== null
            ? deserializeAws_json1_1MatchedPlayerSessionList(output.MatchedPlayerSessions, context)
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_json1_1GameSessionDetail = (output, context) => {
    return {
        GameSession: output.GameSession !== undefined && output.GameSession !== null
            ? deserializeAws_json1_1GameSession(output.GameSession, context)
            : undefined,
        ProtectionPolicy: output.ProtectionPolicy !== undefined && output.ProtectionPolicy !== null ? output.ProtectionPolicy : undefined,
    };
};
const deserializeAws_json1_1GameSessionDetailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSessionDetail(entry, context);
    });
};
const deserializeAws_json1_1GameSessionFullException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1GameSessionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSession(entry, context);
    });
};
const deserializeAws_json1_1GameSessionPlacement = (output, context) => {
    return {
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        GameProperties: output.GameProperties !== undefined && output.GameProperties !== null
            ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
            : undefined,
        GameSessionArn: output.GameSessionArn !== undefined && output.GameSessionArn !== null ? output.GameSessionArn : undefined,
        GameSessionData: output.GameSessionData !== undefined && output.GameSessionData !== null ? output.GameSessionData : undefined,
        GameSessionId: output.GameSessionId !== undefined && output.GameSessionId !== null ? output.GameSessionId : undefined,
        GameSessionName: output.GameSessionName !== undefined && output.GameSessionName !== null ? output.GameSessionName : undefined,
        GameSessionQueueName: output.GameSessionQueueName !== undefined && output.GameSessionQueueName !== null
            ? output.GameSessionQueueName
            : undefined,
        GameSessionRegion: output.GameSessionRegion !== undefined && output.GameSessionRegion !== null
            ? output.GameSessionRegion
            : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        MatchmakerData: output.MatchmakerData !== undefined && output.MatchmakerData !== null ? output.MatchmakerData : undefined,
        MaximumPlayerSessionCount: output.MaximumPlayerSessionCount !== undefined && output.MaximumPlayerSessionCount !== null
            ? output.MaximumPlayerSessionCount
            : undefined,
        PlacedPlayerSessions: output.PlacedPlayerSessions !== undefined && output.PlacedPlayerSessions !== null
            ? deserializeAws_json1_1PlacedPlayerSessionList(output.PlacedPlayerSessions, context)
            : undefined,
        PlacementId: output.PlacementId !== undefined && output.PlacementId !== null ? output.PlacementId : undefined,
        PlayerLatencies: output.PlayerLatencies !== undefined && output.PlayerLatencies !== null
            ? deserializeAws_json1_1PlayerLatencyList(output.PlayerLatencies, context)
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1GameSessionQueue = (output, context) => {
    return {
        CustomEventData: output.CustomEventData !== undefined && output.CustomEventData !== null ? output.CustomEventData : undefined,
        Destinations: output.Destinations !== undefined && output.Destinations !== null
            ? deserializeAws_json1_1GameSessionQueueDestinationList(output.Destinations, context)
            : undefined,
        FilterConfiguration: output.FilterConfiguration !== undefined && output.FilterConfiguration !== null
            ? deserializeAws_json1_1FilterConfiguration(output.FilterConfiguration, context)
            : undefined,
        GameSessionQueueArn: output.GameSessionQueueArn !== undefined && output.GameSessionQueueArn !== null
            ? output.GameSessionQueueArn
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NotificationTarget: output.NotificationTarget !== undefined && output.NotificationTarget !== null
            ? output.NotificationTarget
            : undefined,
        PlayerLatencyPolicies: output.PlayerLatencyPolicies !== undefined && output.PlayerLatencyPolicies !== null
            ? deserializeAws_json1_1PlayerLatencyPolicyList(output.PlayerLatencyPolicies, context)
            : undefined,
        PriorityConfiguration: output.PriorityConfiguration !== undefined && output.PriorityConfiguration !== null
            ? deserializeAws_json1_1PriorityConfiguration(output.PriorityConfiguration, context)
            : undefined,
        TimeoutInSeconds: output.TimeoutInSeconds !== undefined && output.TimeoutInSeconds !== null ? output.TimeoutInSeconds : undefined,
    };
};
const deserializeAws_json1_1GameSessionQueueDestination = (output, context) => {
    return {
        DestinationArn: output.DestinationArn !== undefined && output.DestinationArn !== null ? output.DestinationArn : undefined,
    };
};
const deserializeAws_json1_1GameSessionQueueDestinationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSessionQueueDestination(entry, context);
    });
};
const deserializeAws_json1_1GameSessionQueueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1GameSessionQueue(entry, context);
    });
};
const deserializeAws_json1_1GetGameSessionLogUrlOutput = (output, context) => {
    return {
        PreSignedUrl: output.PreSignedUrl !== undefined && output.PreSignedUrl !== null ? output.PreSignedUrl : undefined,
    };
};
const deserializeAws_json1_1GetInstanceAccessOutput = (output, context) => {
    return {
        InstanceAccess: output.InstanceAccess !== undefined && output.InstanceAccess !== null
            ? deserializeAws_json1_1InstanceAccess(output.InstanceAccess, context)
            : undefined,
    };
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Instance = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1InstanceAccess = (output, context) => {
    return {
        Credentials: output.Credentials !== undefined && output.Credentials !== null
            ? deserializeAws_json1_1InstanceCredentials(output.Credentials, context)
            : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null ? output.OperatingSystem : undefined,
    };
};
const deserializeAws_json1_1InstanceCredentials = (output, context) => {
    return {
        Secret: output.Secret !== undefined && output.Secret !== null ? output.Secret : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_json1_1InstanceDefinition = (output, context) => {
    return {
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        WeightedCapacity: output.WeightedCapacity !== undefined && output.WeightedCapacity !== null ? output.WeightedCapacity : undefined,
    };
};
const deserializeAws_json1_1InstanceDefinitions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InstanceDefinition(entry, context);
    });
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
const deserializeAws_json1_1InternalServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidFleetStatusException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidGameSessionStatusException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IpPermission = (output, context) => {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        IpRange: output.IpRange !== undefined && output.IpRange !== null ? output.IpRange : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
    };
};
const deserializeAws_json1_1IpPermissionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IpPermission(entry, context);
    });
};
const deserializeAws_json1_1LatencyMap = (output, context) => {
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
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAliasesOutput = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1AliasList(output.Aliases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListBuildsOutput = (output, context) => {
    return {
        Builds: output.Builds !== undefined && output.Builds !== null
            ? deserializeAws_json1_1BuildList(output.Builds, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListFleetsOutput = (output, context) => {
    return {
        FleetIds: output.FleetIds !== undefined && output.FleetIds !== null
            ? deserializeAws_json1_1FleetIdList(output.FleetIds, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListGameServerGroupsOutput = (output, context) => {
    return {
        GameServerGroups: output.GameServerGroups !== undefined && output.GameServerGroups !== null
            ? deserializeAws_json1_1GameServerGroups(output.GameServerGroups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListGameServersOutput = (output, context) => {
    return {
        GameServers: output.GameServers !== undefined && output.GameServers !== null
            ? deserializeAws_json1_1GameServers(output.GameServers, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListScriptsOutput = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Scripts: output.Scripts !== undefined && output.Scripts !== null
            ? deserializeAws_json1_1ScriptList(output.Scripts, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1LocationAttributes = (output, context) => {
    return {
        LocationState: output.LocationState !== undefined && output.LocationState !== null
            ? deserializeAws_json1_1LocationState(output.LocationState, context)
            : undefined,
        StoppedActions: output.StoppedActions !== undefined && output.StoppedActions !== null
            ? deserializeAws_json1_1FleetActionList(output.StoppedActions, context)
            : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
const deserializeAws_json1_1LocationAttributesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LocationAttributes(entry, context);
    });
};
const deserializeAws_json1_1LocationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1LocationState = (output, context) => {
    return {
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1LocationStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1LocationState(entry, context);
    });
};
const deserializeAws_json1_1MatchedPlayerSession = (output, context) => {
    return {
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        PlayerSessionId: output.PlayerSessionId !== undefined && output.PlayerSessionId !== null ? output.PlayerSessionId : undefined,
    };
};
const deserializeAws_json1_1MatchedPlayerSessionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchedPlayerSession(entry, context);
    });
};
const deserializeAws_json1_1MatchmakingConfiguration = (output, context) => {
    return {
        AcceptanceRequired: output.AcceptanceRequired !== undefined && output.AcceptanceRequired !== null
            ? output.AcceptanceRequired
            : undefined,
        AcceptanceTimeoutSeconds: output.AcceptanceTimeoutSeconds !== undefined && output.AcceptanceTimeoutSeconds !== null
            ? output.AcceptanceTimeoutSeconds
            : undefined,
        AdditionalPlayerCount: output.AdditionalPlayerCount !== undefined && output.AdditionalPlayerCount !== null
            ? output.AdditionalPlayerCount
            : undefined,
        BackfillMode: output.BackfillMode !== undefined && output.BackfillMode !== null ? output.BackfillMode : undefined,
        ConfigurationArn: output.ConfigurationArn !== undefined && output.ConfigurationArn !== null ? output.ConfigurationArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CustomEventData: output.CustomEventData !== undefined && output.CustomEventData !== null ? output.CustomEventData : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FlexMatchMode: output.FlexMatchMode !== undefined && output.FlexMatchMode !== null ? output.FlexMatchMode : undefined,
        GameProperties: output.GameProperties !== undefined && output.GameProperties !== null
            ? deserializeAws_json1_1GamePropertyList(output.GameProperties, context)
            : undefined,
        GameSessionData: output.GameSessionData !== undefined && output.GameSessionData !== null ? output.GameSessionData : undefined,
        GameSessionQueueArns: output.GameSessionQueueArns !== undefined && output.GameSessionQueueArns !== null
            ? deserializeAws_json1_1QueueArnsList(output.GameSessionQueueArns, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NotificationTarget: output.NotificationTarget !== undefined && output.NotificationTarget !== null
            ? output.NotificationTarget
            : undefined,
        RequestTimeoutSeconds: output.RequestTimeoutSeconds !== undefined && output.RequestTimeoutSeconds !== null
            ? output.RequestTimeoutSeconds
            : undefined,
        RuleSetArn: output.RuleSetArn !== undefined && output.RuleSetArn !== null ? output.RuleSetArn : undefined,
        RuleSetName: output.RuleSetName !== undefined && output.RuleSetName !== null ? output.RuleSetName : undefined,
    };
};
const deserializeAws_json1_1MatchmakingConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchmakingConfiguration(entry, context);
    });
};
const deserializeAws_json1_1MatchmakingRuleSet = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        RuleSetArn: output.RuleSetArn !== undefined && output.RuleSetArn !== null ? output.RuleSetArn : undefined,
        RuleSetBody: output.RuleSetBody !== undefined && output.RuleSetBody !== null ? output.RuleSetBody : undefined,
        RuleSetName: output.RuleSetName !== undefined && output.RuleSetName !== null ? output.RuleSetName : undefined,
    };
};
const deserializeAws_json1_1MatchmakingRuleSetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchmakingRuleSet(entry, context);
    });
};
const deserializeAws_json1_1MatchmakingTicket = (output, context) => {
    return {
        ConfigurationArn: output.ConfigurationArn !== undefined && output.ConfigurationArn !== null ? output.ConfigurationArn : undefined,
        ConfigurationName: output.ConfigurationName !== undefined && output.ConfigurationName !== null
            ? output.ConfigurationName
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        EstimatedWaitTime: output.EstimatedWaitTime !== undefined && output.EstimatedWaitTime !== null
            ? output.EstimatedWaitTime
            : undefined,
        GameSessionConnectionInfo: output.GameSessionConnectionInfo !== undefined && output.GameSessionConnectionInfo !== null
            ? deserializeAws_json1_1GameSessionConnectionInfo(output.GameSessionConnectionInfo, context)
            : undefined,
        Players: output.Players !== undefined && output.Players !== null
            ? deserializeAws_json1_1PlayerList(output.Players, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
        TicketId: output.TicketId !== undefined && output.TicketId !== null ? output.TicketId : undefined,
    };
};
const deserializeAws_json1_1MatchmakingTicketList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MatchmakingTicket(entry, context);
    });
};
const deserializeAws_json1_1MetricGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OutOfCapacityException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PlacedPlayerSession = (output, context) => {
    return {
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        PlayerSessionId: output.PlayerSessionId !== undefined && output.PlayerSessionId !== null ? output.PlayerSessionId : undefined,
    };
};
const deserializeAws_json1_1PlacedPlayerSessionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlacedPlayerSession(entry, context);
    });
};
const deserializeAws_json1_1Player = (output, context) => {
    return {
        LatencyInMs: output.LatencyInMs !== undefined && output.LatencyInMs !== null
            ? deserializeAws_json1_1LatencyMap(output.LatencyInMs, context)
            : undefined,
        PlayerAttributes: output.PlayerAttributes !== undefined && output.PlayerAttributes !== null
            ? deserializeAws_json1_1PlayerAttributeMap(output.PlayerAttributes, context)
            : undefined,
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        Team: output.Team !== undefined && output.Team !== null ? output.Team : undefined,
    };
};
const deserializeAws_json1_1PlayerAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_json1_1AttributeValue(value, context),
        };
    }, {});
};
const deserializeAws_json1_1PlayerLatency = (output, context) => {
    return {
        LatencyInMilliseconds: output.LatencyInMilliseconds !== undefined && output.LatencyInMilliseconds !== null
            ? output.LatencyInMilliseconds
            : undefined,
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        RegionIdentifier: output.RegionIdentifier !== undefined && output.RegionIdentifier !== null ? output.RegionIdentifier : undefined,
    };
};
const deserializeAws_json1_1PlayerLatencyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlayerLatency(entry, context);
    });
};
const deserializeAws_json1_1PlayerLatencyPolicy = (output, context) => {
    return {
        MaximumIndividualPlayerLatencyMilliseconds: output.MaximumIndividualPlayerLatencyMilliseconds !== undefined &&
            output.MaximumIndividualPlayerLatencyMilliseconds !== null
            ? output.MaximumIndividualPlayerLatencyMilliseconds
            : undefined,
        PolicyDurationSeconds: output.PolicyDurationSeconds !== undefined && output.PolicyDurationSeconds !== null
            ? output.PolicyDurationSeconds
            : undefined,
    };
};
const deserializeAws_json1_1PlayerLatencyPolicyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlayerLatencyPolicy(entry, context);
    });
};
const deserializeAws_json1_1PlayerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Player(entry, context);
    });
};
const deserializeAws_json1_1PlayerSession = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        GameSessionId: output.GameSessionId !== undefined && output.GameSessionId !== null ? output.GameSessionId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        PlayerData: output.PlayerData !== undefined && output.PlayerData !== null ? output.PlayerData : undefined,
        PlayerId: output.PlayerId !== undefined && output.PlayerId !== null ? output.PlayerId : undefined,
        PlayerSessionId: output.PlayerSessionId !== undefined && output.PlayerSessionId !== null ? output.PlayerSessionId : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TerminationTime: output.TerminationTime !== undefined && output.TerminationTime !== null
            ? new Date(Math.round(output.TerminationTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1PlayerSessionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PlayerSession(entry, context);
    });
};
const deserializeAws_json1_1PriorityConfiguration = (output, context) => {
    return {
        LocationOrder: output.LocationOrder !== undefined && output.LocationOrder !== null
            ? deserializeAws_json1_1LocationList(output.LocationOrder, context)
            : undefined,
        PriorityOrder: output.PriorityOrder !== undefined && output.PriorityOrder !== null
            ? deserializeAws_json1_1PriorityTypeList(output.PriorityOrder, context)
            : undefined,
    };
};
const deserializeAws_json1_1PriorityTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PutScalingPolicyOutput = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1QueueArnsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RegisterGameServerOutput = (output, context) => {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1RequestUploadCredentialsOutput = (output, context) => {
    return {
        StorageLocation: output.StorageLocation !== undefined && output.StorageLocation !== null
            ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
            : undefined,
        UploadCredentials: output.UploadCredentials !== undefined && output.UploadCredentials !== null
            ? deserializeAws_json1_1AwsCredentials(output.UploadCredentials, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResolveAliasOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
const deserializeAws_json1_1ResourceCreationLimitPolicy = (output, context) => {
    return {
        NewGameSessionsPerCreator: output.NewGameSessionsPerCreator !== undefined && output.NewGameSessionsPerCreator !== null
            ? output.NewGameSessionsPerCreator
            : undefined,
        PolicyPeriodInMinutes: output.PolicyPeriodInMinutes !== undefined && output.PolicyPeriodInMinutes !== null
            ? output.PolicyPeriodInMinutes
            : undefined,
    };
};
const deserializeAws_json1_1ResumeGameServerGroupOutput = (output, context) => {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1RoutingStrategy = (output, context) => {
    return {
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1RuntimeConfiguration = (output, context) => {
    return {
        GameSessionActivationTimeoutSeconds: output.GameSessionActivationTimeoutSeconds !== undefined && output.GameSessionActivationTimeoutSeconds !== null
            ? output.GameSessionActivationTimeoutSeconds
            : undefined,
        MaxConcurrentGameSessionActivations: output.MaxConcurrentGameSessionActivations !== undefined && output.MaxConcurrentGameSessionActivations !== null
            ? output.MaxConcurrentGameSessionActivations
            : undefined,
        ServerProcesses: output.ServerProcesses !== undefined && output.ServerProcesses !== null
            ? deserializeAws_json1_1ServerProcessList(output.ServerProcesses, context)
            : undefined,
    };
};
const deserializeAws_json1_1S3Location = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        ObjectVersion: output.ObjectVersion !== undefined && output.ObjectVersion !== null ? output.ObjectVersion : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_json1_1ScalingPolicy = (output, context) => {
    return {
        ComparisonOperator: output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
            ? output.ComparisonOperator
            : undefined,
        EvaluationPeriods: output.EvaluationPeriods !== undefined && output.EvaluationPeriods !== null
            ? output.EvaluationPeriods
            : undefined,
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        ScalingAdjustment: output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
            ? output.ScalingAdjustment
            : undefined,
        ScalingAdjustmentType: output.ScalingAdjustmentType !== undefined && output.ScalingAdjustmentType !== null
            ? output.ScalingAdjustmentType
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        TargetConfiguration: output.TargetConfiguration !== undefined && output.TargetConfiguration !== null
            ? deserializeAws_json1_1TargetConfiguration(output.TargetConfiguration, context)
            : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
const deserializeAws_json1_1ScalingPolicyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
};
const deserializeAws_json1_1Script = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ScriptArn: output.ScriptArn !== undefined && output.ScriptArn !== null ? output.ScriptArn : undefined,
        ScriptId: output.ScriptId !== undefined && output.ScriptId !== null ? output.ScriptId : undefined,
        SizeOnDisk: output.SizeOnDisk !== undefined && output.SizeOnDisk !== null ? output.SizeOnDisk : undefined,
        StorageLocation: output.StorageLocation !== undefined && output.StorageLocation !== null
            ? deserializeAws_json1_1S3Location(output.StorageLocation, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_json1_1ScriptList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Script(entry, context);
    });
};
const deserializeAws_json1_1SearchGameSessionsOutput = (output, context) => {
    return {
        GameSessions: output.GameSessions !== undefined && output.GameSessions !== null
            ? deserializeAws_json1_1GameSessionList(output.GameSessions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ServerProcess = (output, context) => {
    return {
        ConcurrentExecutions: output.ConcurrentExecutions !== undefined && output.ConcurrentExecutions !== null
            ? output.ConcurrentExecutions
            : undefined,
        LaunchPath: output.LaunchPath !== undefined && output.LaunchPath !== null ? output.LaunchPath : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null ? output.Parameters : undefined,
    };
};
const deserializeAws_json1_1ServerProcessList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ServerProcess(entry, context);
    });
};
const deserializeAws_json1_1StartFleetActionsOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
const deserializeAws_json1_1StartGameSessionPlacementOutput = (output, context) => {
    return {
        GameSessionPlacement: output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
            ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartMatchBackfillOutput = (output, context) => {
    return {
        MatchmakingTicket: output.MatchmakingTicket !== undefined && output.MatchmakingTicket !== null
            ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
            : undefined,
    };
};
const deserializeAws_json1_1StartMatchmakingOutput = (output, context) => {
    return {
        MatchmakingTicket: output.MatchmakingTicket !== undefined && output.MatchmakingTicket !== null
            ? deserializeAws_json1_1MatchmakingTicket(output.MatchmakingTicket, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopFleetActionsOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
const deserializeAws_json1_1StopGameSessionPlacementOutput = (output, context) => {
    return {
        GameSessionPlacement: output.GameSessionPlacement !== undefined && output.GameSessionPlacement !== null
            ? deserializeAws_json1_1GameSessionPlacement(output.GameSessionPlacement, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopMatchmakingOutput = (output, context) => {
    return {};
};
const deserializeAws_json1_1StringDoubleMap = (output, context) => {
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
const deserializeAws_json1_1SuspendGameServerGroupOutput = (output, context) => {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TaggingFailedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TargetConfiguration = (output, context) => {
    return {
        TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
    };
};
const deserializeAws_json1_1TerminalRoutingStrategyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UnauthorizedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedRegionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateAliasOutput = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null
            ? deserializeAws_json1_1Alias(output.Alias, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateBuildOutput = (output, context) => {
    return {
        Build: output.Build !== undefined && output.Build !== null
            ? deserializeAws_json1_1Build(output.Build, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateFleetAttributesOutput = (output, context) => {
    return {
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
const deserializeAws_json1_1UpdateFleetCapacityOutput = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
    };
};
const deserializeAws_json1_1UpdateFleetPortSettingsOutput = (output, context) => {
    return {
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
    };
};
const deserializeAws_json1_1UpdateGameServerGroupOutput = (output, context) => {
    return {
        GameServerGroup: output.GameServerGroup !== undefined && output.GameServerGroup !== null
            ? deserializeAws_json1_1GameServerGroup(output.GameServerGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateGameServerOutput = (output, context) => {
    return {
        GameServer: output.GameServer !== undefined && output.GameServer !== null
            ? deserializeAws_json1_1GameServer(output.GameServer, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateGameSessionOutput = (output, context) => {
    return {
        GameSession: output.GameSession !== undefined && output.GameSession !== null
            ? deserializeAws_json1_1GameSession(output.GameSession, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateGameSessionQueueOutput = (output, context) => {
    return {
        GameSessionQueue: output.GameSessionQueue !== undefined && output.GameSessionQueue !== null
            ? deserializeAws_json1_1GameSessionQueue(output.GameSessionQueue, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateMatchmakingConfigurationOutput = (output, context) => {
    return {
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_json1_1MatchmakingConfiguration(output.Configuration, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateRuntimeConfigurationOutput = (output, context) => {
    return {
        RuntimeConfiguration: output.RuntimeConfiguration !== undefined && output.RuntimeConfiguration !== null
            ? deserializeAws_json1_1RuntimeConfiguration(output.RuntimeConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdateScriptOutput = (output, context) => {
    return {
        Script: output.Script !== undefined && output.Script !== null
            ? deserializeAws_json1_1Script(output.Script, context)
            : undefined,
    };
};
const deserializeAws_json1_1ValidateMatchmakingRuleSetOutput = (output, context) => {
    return {
        Valid: output.Valid !== undefined && output.Valid !== null ? output.Valid : undefined,
    };
};
const deserializeAws_json1_1VpcPeeringAuthorization = (output, context) => {
    return {
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        GameLiftAwsAccountId: output.GameLiftAwsAccountId !== undefined && output.GameLiftAwsAccountId !== null
            ? output.GameLiftAwsAccountId
            : undefined,
        PeerVpcAwsAccountId: output.PeerVpcAwsAccountId !== undefined && output.PeerVpcAwsAccountId !== null
            ? output.PeerVpcAwsAccountId
            : undefined,
        PeerVpcId: output.PeerVpcId !== undefined && output.PeerVpcId !== null ? output.PeerVpcId : undefined,
    };
};
const deserializeAws_json1_1VpcPeeringAuthorizationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcPeeringAuthorization(entry, context);
    });
};
const deserializeAws_json1_1VpcPeeringConnection = (output, context) => {
    return {
        FleetArn: output.FleetArn !== undefined && output.FleetArn !== null ? output.FleetArn : undefined,
        FleetId: output.FleetId !== undefined && output.FleetId !== null ? output.FleetId : undefined,
        GameLiftVpcId: output.GameLiftVpcId !== undefined && output.GameLiftVpcId !== null ? output.GameLiftVpcId : undefined,
        IpV4CidrBlock: output.IpV4CidrBlock !== undefined && output.IpV4CidrBlock !== null ? output.IpV4CidrBlock : undefined,
        PeerVpcId: output.PeerVpcId !== undefined && output.PeerVpcId !== null ? output.PeerVpcId : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_json1_1VpcPeeringConnectionStatus(output.Status, context)
            : undefined,
        VpcPeeringConnectionId: output.VpcPeeringConnectionId !== undefined && output.VpcPeeringConnectionId !== null
            ? output.VpcPeeringConnectionId
            : undefined,
    };
};
const deserializeAws_json1_1VpcPeeringConnectionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1VpcPeeringConnection(entry, context);
    });
};
const deserializeAws_json1_1VpcPeeringConnectionStatus = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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