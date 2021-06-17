"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./GameLiftClient"), exports);
tslib_1.__exportStar(require("./GameLift"), exports);
tslib_1.__exportStar(require("./commands/AcceptMatchCommand"), exports);
tslib_1.__exportStar(require("./commands/ClaimGameServerCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateAliasCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateBuildCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateFleetCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateFleetLocationsCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateGameServerGroupCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateGameSessionCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateGameSessionQueueCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateMatchmakingConfigurationCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateMatchmakingRuleSetCommand"), exports);
tslib_1.__exportStar(require("./commands/CreatePlayerSessionCommand"), exports);
tslib_1.__exportStar(require("./commands/CreatePlayerSessionsCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateScriptCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateVpcPeeringAuthorizationCommand"), exports);
tslib_1.__exportStar(require("./commands/CreateVpcPeeringConnectionCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteAliasCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteBuildCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteFleetCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteFleetLocationsCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteGameServerGroupCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteGameSessionQueueCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteMatchmakingConfigurationCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteMatchmakingRuleSetCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteScalingPolicyCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteScriptCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteVpcPeeringAuthorizationCommand"), exports);
tslib_1.__exportStar(require("./commands/DeleteVpcPeeringConnectionCommand"), exports);
tslib_1.__exportStar(require("./commands/DeregisterGameServerCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeAliasCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeBuildCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeEC2InstanceLimitsCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetAttributesCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeFleetAttributesPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetCapacityCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeFleetCapacityPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetEventsCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeFleetEventsPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetLocationAttributesCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeFleetLocationAttributesPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetLocationCapacityCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetLocationUtilizationCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetPortSettingsCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeFleetUtilizationCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeFleetUtilizationPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameServerCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameServerGroupCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameServerInstancesCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeGameServerInstancesPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameSessionDetailsCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeGameSessionDetailsPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameSessionPlacementCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameSessionQueuesCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeGameSessionQueuesPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeGameSessionsCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeGameSessionsPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeInstancesCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeInstancesPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeMatchmakingCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeMatchmakingConfigurationsCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeMatchmakingConfigurationsPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeMatchmakingRuleSetsCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeMatchmakingRuleSetsPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribePlayerSessionsCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribePlayerSessionsPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeRuntimeConfigurationCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeScalingPoliciesCommand"), exports);
tslib_1.__exportStar(require("./pagination/DescribeScalingPoliciesPaginator"), exports);
tslib_1.__exportStar(require("./commands/DescribeScriptCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeVpcPeeringAuthorizationsCommand"), exports);
tslib_1.__exportStar(require("./commands/DescribeVpcPeeringConnectionsCommand"), exports);
tslib_1.__exportStar(require("./commands/GetGameSessionLogUrlCommand"), exports);
tslib_1.__exportStar(require("./commands/GetInstanceAccessCommand"), exports);
tslib_1.__exportStar(require("./commands/ListAliasesCommand"), exports);
tslib_1.__exportStar(require("./pagination/ListAliasesPaginator"), exports);
tslib_1.__exportStar(require("./commands/ListBuildsCommand"), exports);
tslib_1.__exportStar(require("./pagination/ListBuildsPaginator"), exports);
tslib_1.__exportStar(require("./commands/ListFleetsCommand"), exports);
tslib_1.__exportStar(require("./pagination/ListFleetsPaginator"), exports);
tslib_1.__exportStar(require("./commands/ListGameServerGroupsCommand"), exports);
tslib_1.__exportStar(require("./pagination/ListGameServerGroupsPaginator"), exports);
tslib_1.__exportStar(require("./commands/ListGameServersCommand"), exports);
tslib_1.__exportStar(require("./pagination/ListGameServersPaginator"), exports);
tslib_1.__exportStar(require("./commands/ListScriptsCommand"), exports);
tslib_1.__exportStar(require("./pagination/ListScriptsPaginator"), exports);
tslib_1.__exportStar(require("./commands/ListTagsForResourceCommand"), exports);
tslib_1.__exportStar(require("./commands/PutScalingPolicyCommand"), exports);
tslib_1.__exportStar(require("./commands/RegisterGameServerCommand"), exports);
tslib_1.__exportStar(require("./commands/RequestUploadCredentialsCommand"), exports);
tslib_1.__exportStar(require("./commands/ResolveAliasCommand"), exports);
tslib_1.__exportStar(require("./commands/ResumeGameServerGroupCommand"), exports);
tslib_1.__exportStar(require("./commands/SearchGameSessionsCommand"), exports);
tslib_1.__exportStar(require("./pagination/SearchGameSessionsPaginator"), exports);
tslib_1.__exportStar(require("./commands/StartFleetActionsCommand"), exports);
tslib_1.__exportStar(require("./commands/StartGameSessionPlacementCommand"), exports);
tslib_1.__exportStar(require("./commands/StartMatchBackfillCommand"), exports);
tslib_1.__exportStar(require("./commands/StartMatchmakingCommand"), exports);
tslib_1.__exportStar(require("./commands/StopFleetActionsCommand"), exports);
tslib_1.__exportStar(require("./commands/StopGameSessionPlacementCommand"), exports);
tslib_1.__exportStar(require("./commands/StopMatchmakingCommand"), exports);
tslib_1.__exportStar(require("./commands/SuspendGameServerGroupCommand"), exports);
tslib_1.__exportStar(require("./commands/TagResourceCommand"), exports);
tslib_1.__exportStar(require("./commands/UntagResourceCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateAliasCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateBuildCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateFleetAttributesCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateFleetCapacityCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateFleetPortSettingsCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateGameServerCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateGameServerGroupCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateGameSessionCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateGameSessionQueueCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateMatchmakingConfigurationCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateRuntimeConfigurationCommand"), exports);
tslib_1.__exportStar(require("./commands/UpdateScriptCommand"), exports);
tslib_1.__exportStar(require("./commands/ValidateMatchmakingRuleSetCommand"), exports);
tslib_1.__exportStar(require("./pagination/Interfaces"), exports);
tslib_1.__exportStar(require("./models/index"), exports);
//# sourceMappingURL=index.js.map