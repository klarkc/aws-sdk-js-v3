"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLift = void 0;
const GameLiftClient_1 = require("./GameLiftClient");
const AcceptMatchCommand_1 = require("./commands/AcceptMatchCommand");
const ClaimGameServerCommand_1 = require("./commands/ClaimGameServerCommand");
const CreateAliasCommand_1 = require("./commands/CreateAliasCommand");
const CreateBuildCommand_1 = require("./commands/CreateBuildCommand");
const CreateFleetCommand_1 = require("./commands/CreateFleetCommand");
const CreateFleetLocationsCommand_1 = require("./commands/CreateFleetLocationsCommand");
const CreateGameServerGroupCommand_1 = require("./commands/CreateGameServerGroupCommand");
const CreateGameSessionCommand_1 = require("./commands/CreateGameSessionCommand");
const CreateGameSessionQueueCommand_1 = require("./commands/CreateGameSessionQueueCommand");
const CreateMatchmakingConfigurationCommand_1 = require("./commands/CreateMatchmakingConfigurationCommand");
const CreateMatchmakingRuleSetCommand_1 = require("./commands/CreateMatchmakingRuleSetCommand");
const CreatePlayerSessionCommand_1 = require("./commands/CreatePlayerSessionCommand");
const CreatePlayerSessionsCommand_1 = require("./commands/CreatePlayerSessionsCommand");
const CreateScriptCommand_1 = require("./commands/CreateScriptCommand");
const CreateVpcPeeringAuthorizationCommand_1 = require("./commands/CreateVpcPeeringAuthorizationCommand");
const CreateVpcPeeringConnectionCommand_1 = require("./commands/CreateVpcPeeringConnectionCommand");
const DeleteAliasCommand_1 = require("./commands/DeleteAliasCommand");
const DeleteBuildCommand_1 = require("./commands/DeleteBuildCommand");
const DeleteFleetCommand_1 = require("./commands/DeleteFleetCommand");
const DeleteFleetLocationsCommand_1 = require("./commands/DeleteFleetLocationsCommand");
const DeleteGameServerGroupCommand_1 = require("./commands/DeleteGameServerGroupCommand");
const DeleteGameSessionQueueCommand_1 = require("./commands/DeleteGameSessionQueueCommand");
const DeleteMatchmakingConfigurationCommand_1 = require("./commands/DeleteMatchmakingConfigurationCommand");
const DeleteMatchmakingRuleSetCommand_1 = require("./commands/DeleteMatchmakingRuleSetCommand");
const DeleteScalingPolicyCommand_1 = require("./commands/DeleteScalingPolicyCommand");
const DeleteScriptCommand_1 = require("./commands/DeleteScriptCommand");
const DeleteVpcPeeringAuthorizationCommand_1 = require("./commands/DeleteVpcPeeringAuthorizationCommand");
const DeleteVpcPeeringConnectionCommand_1 = require("./commands/DeleteVpcPeeringConnectionCommand");
const DeregisterGameServerCommand_1 = require("./commands/DeregisterGameServerCommand");
const DescribeAliasCommand_1 = require("./commands/DescribeAliasCommand");
const DescribeBuildCommand_1 = require("./commands/DescribeBuildCommand");
const DescribeEC2InstanceLimitsCommand_1 = require("./commands/DescribeEC2InstanceLimitsCommand");
const DescribeFleetAttributesCommand_1 = require("./commands/DescribeFleetAttributesCommand");
const DescribeFleetCapacityCommand_1 = require("./commands/DescribeFleetCapacityCommand");
const DescribeFleetEventsCommand_1 = require("./commands/DescribeFleetEventsCommand");
const DescribeFleetLocationAttributesCommand_1 = require("./commands/DescribeFleetLocationAttributesCommand");
const DescribeFleetLocationCapacityCommand_1 = require("./commands/DescribeFleetLocationCapacityCommand");
const DescribeFleetLocationUtilizationCommand_1 = require("./commands/DescribeFleetLocationUtilizationCommand");
const DescribeFleetPortSettingsCommand_1 = require("./commands/DescribeFleetPortSettingsCommand");
const DescribeFleetUtilizationCommand_1 = require("./commands/DescribeFleetUtilizationCommand");
const DescribeGameServerCommand_1 = require("./commands/DescribeGameServerCommand");
const DescribeGameServerGroupCommand_1 = require("./commands/DescribeGameServerGroupCommand");
const DescribeGameServerInstancesCommand_1 = require("./commands/DescribeGameServerInstancesCommand");
const DescribeGameSessionDetailsCommand_1 = require("./commands/DescribeGameSessionDetailsCommand");
const DescribeGameSessionPlacementCommand_1 = require("./commands/DescribeGameSessionPlacementCommand");
const DescribeGameSessionQueuesCommand_1 = require("./commands/DescribeGameSessionQueuesCommand");
const DescribeGameSessionsCommand_1 = require("./commands/DescribeGameSessionsCommand");
const DescribeInstancesCommand_1 = require("./commands/DescribeInstancesCommand");
const DescribeMatchmakingCommand_1 = require("./commands/DescribeMatchmakingCommand");
const DescribeMatchmakingConfigurationsCommand_1 = require("./commands/DescribeMatchmakingConfigurationsCommand");
const DescribeMatchmakingRuleSetsCommand_1 = require("./commands/DescribeMatchmakingRuleSetsCommand");
const DescribePlayerSessionsCommand_1 = require("./commands/DescribePlayerSessionsCommand");
const DescribeRuntimeConfigurationCommand_1 = require("./commands/DescribeRuntimeConfigurationCommand");
const DescribeScalingPoliciesCommand_1 = require("./commands/DescribeScalingPoliciesCommand");
const DescribeScriptCommand_1 = require("./commands/DescribeScriptCommand");
const DescribeVpcPeeringAuthorizationsCommand_1 = require("./commands/DescribeVpcPeeringAuthorizationsCommand");
const DescribeVpcPeeringConnectionsCommand_1 = require("./commands/DescribeVpcPeeringConnectionsCommand");
const GetGameSessionLogUrlCommand_1 = require("./commands/GetGameSessionLogUrlCommand");
const GetInstanceAccessCommand_1 = require("./commands/GetInstanceAccessCommand");
const ListAliasesCommand_1 = require("./commands/ListAliasesCommand");
const ListBuildsCommand_1 = require("./commands/ListBuildsCommand");
const ListFleetsCommand_1 = require("./commands/ListFleetsCommand");
const ListGameServerGroupsCommand_1 = require("./commands/ListGameServerGroupsCommand");
const ListGameServersCommand_1 = require("./commands/ListGameServersCommand");
const ListScriptsCommand_1 = require("./commands/ListScriptsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutScalingPolicyCommand_1 = require("./commands/PutScalingPolicyCommand");
const RegisterGameServerCommand_1 = require("./commands/RegisterGameServerCommand");
const RequestUploadCredentialsCommand_1 = require("./commands/RequestUploadCredentialsCommand");
const ResolveAliasCommand_1 = require("./commands/ResolveAliasCommand");
const ResumeGameServerGroupCommand_1 = require("./commands/ResumeGameServerGroupCommand");
const SearchGameSessionsCommand_1 = require("./commands/SearchGameSessionsCommand");
const StartFleetActionsCommand_1 = require("./commands/StartFleetActionsCommand");
const StartGameSessionPlacementCommand_1 = require("./commands/StartGameSessionPlacementCommand");
const StartMatchBackfillCommand_1 = require("./commands/StartMatchBackfillCommand");
const StartMatchmakingCommand_1 = require("./commands/StartMatchmakingCommand");
const StopFleetActionsCommand_1 = require("./commands/StopFleetActionsCommand");
const StopGameSessionPlacementCommand_1 = require("./commands/StopGameSessionPlacementCommand");
const StopMatchmakingCommand_1 = require("./commands/StopMatchmakingCommand");
const SuspendGameServerGroupCommand_1 = require("./commands/SuspendGameServerGroupCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAliasCommand_1 = require("./commands/UpdateAliasCommand");
const UpdateBuildCommand_1 = require("./commands/UpdateBuildCommand");
const UpdateFleetAttributesCommand_1 = require("./commands/UpdateFleetAttributesCommand");
const UpdateFleetCapacityCommand_1 = require("./commands/UpdateFleetCapacityCommand");
const UpdateFleetPortSettingsCommand_1 = require("./commands/UpdateFleetPortSettingsCommand");
const UpdateGameServerCommand_1 = require("./commands/UpdateGameServerCommand");
const UpdateGameServerGroupCommand_1 = require("./commands/UpdateGameServerGroupCommand");
const UpdateGameSessionCommand_1 = require("./commands/UpdateGameSessionCommand");
const UpdateGameSessionQueueCommand_1 = require("./commands/UpdateGameSessionQueueCommand");
const UpdateMatchmakingConfigurationCommand_1 = require("./commands/UpdateMatchmakingConfigurationCommand");
const UpdateRuntimeConfigurationCommand_1 = require("./commands/UpdateRuntimeConfigurationCommand");
const UpdateScriptCommand_1 = require("./commands/UpdateScriptCommand");
const ValidateMatchmakingRuleSetCommand_1 = require("./commands/ValidateMatchmakingRuleSetCommand");
/**
 * <fullname>Amazon GameLift Service</fullname>
 *         <p>GameLift provides solutions for hosting session-based multiplayer game servers in the
 *             cloud, including tools for deploying, operating, and scaling game servers. Built on AWS
 *             global computing infrastructure, GameLift helps you deliver high-performance,
 *             high-reliability, low-cost game servers while dynamically scaling your resource usage to
 *             meet player demand. </p>
 *         <p>
 *             <b>About GameLift solutions</b>
 *          </p>
 *         <p>Get more information on these GameLift solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">GameLift Developer Guide</a>.</p>
 *         <ul>
 *             <li>
 *                <p>GameLift managed hosting -- GameLift offers a fully managed service to set up and maintain
 *                     computing machines for hosting, manage game session and player session life
 *                     cycle, and handle security, storage, and performance tracking. You can use
 *                     automatic scaling tools to balance player demand and hosting costs, configure
 *                     your game session management to minimize player latency, and add FlexMatch for
 *                     matchmaking.</p>
 *             </li>
 *             <li>
 *                <p>Managed hosting with Realtime Servers -- With GameLift Realtime Servers, you can quickly configure and set up
 *                     ready-to-go game servers for your game. Realtime Servers provides a game server framework
 *                     with core GameLift infrastructure already built in. Then use the full range of
 *                     GameLift managed hosting features, including FlexMatch, for your game.</p>
 *             </li>
 *             <li>
 *                <p>GameLift FleetIQ -- Use GameLift FleetIQ as a standalone service while hosting your games using EC2 instances and
 *                     Auto Scaling groups. GameLift FleetIQ provides optimizations for game hosting, including
 *                     boosting the viability of low-cost Spot Instances gaming. For a complete
 *                     solution, pair the GameLift FleetIQ and FlexMatch standalone services.</p>
 *             </li>
 *             <li>
 *                 <p>GameLift FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
 *                     customizable matchmaking service for multiplayer games. Use FlexMatch as
 *                     integrated with GameLift managed hosting or incorporate FlexMatch as a standalone
 *                     service into your own hosting solution.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>About this API Reference</b>
 *          </p>
 *         <p>This reference guide describes the low-level service API for Amazon GameLift. With each topic
 *             in this guide, you can find links to language-specific SDK guides and the AWS CLI
 *             reference. Useful links:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">GameLift API
 *                     operations listed by tasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> GameLift tools
 *                     and resources</a>
 *                </p>
 *             </li>
 *          </ul>
 */
class GameLift extends GameLiftClient_1.GameLiftClient {
    acceptMatch(args, optionsOrCb, cb) {
        const command = new AcceptMatchCommand_1.AcceptMatchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    claimGameServer(args, optionsOrCb, cb) {
        const command = new ClaimGameServerCommand_1.ClaimGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAlias(args, optionsOrCb, cb) {
        const command = new CreateAliasCommand_1.CreateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createBuild(args, optionsOrCb, cb) {
        const command = new CreateBuildCommand_1.CreateBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFleet(args, optionsOrCb, cb) {
        const command = new CreateFleetCommand_1.CreateFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFleetLocations(args, optionsOrCb, cb) {
        const command = new CreateFleetLocationsCommand_1.CreateFleetLocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGameServerGroup(args, optionsOrCb, cb) {
        const command = new CreateGameServerGroupCommand_1.CreateGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGameSession(args, optionsOrCb, cb) {
        const command = new CreateGameSessionCommand_1.CreateGameSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createGameSessionQueue(args, optionsOrCb, cb) {
        const command = new CreateGameSessionQueueCommand_1.CreateGameSessionQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMatchmakingConfiguration(args, optionsOrCb, cb) {
        const command = new CreateMatchmakingConfigurationCommand_1.CreateMatchmakingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMatchmakingRuleSet(args, optionsOrCb, cb) {
        const command = new CreateMatchmakingRuleSetCommand_1.CreateMatchmakingRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPlayerSession(args, optionsOrCb, cb) {
        const command = new CreatePlayerSessionCommand_1.CreatePlayerSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPlayerSessions(args, optionsOrCb, cb) {
        const command = new CreatePlayerSessionsCommand_1.CreatePlayerSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createScript(args, optionsOrCb, cb) {
        const command = new CreateScriptCommand_1.CreateScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpcPeeringAuthorization(args, optionsOrCb, cb) {
        const command = new CreateVpcPeeringAuthorizationCommand_1.CreateVpcPeeringAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createVpcPeeringConnection(args, optionsOrCb, cb) {
        const command = new CreateVpcPeeringConnectionCommand_1.CreateVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAlias(args, optionsOrCb, cb) {
        const command = new DeleteAliasCommand_1.DeleteAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteBuild(args, optionsOrCb, cb) {
        const command = new DeleteBuildCommand_1.DeleteBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFleet(args, optionsOrCb, cb) {
        const command = new DeleteFleetCommand_1.DeleteFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFleetLocations(args, optionsOrCb, cb) {
        const command = new DeleteFleetLocationsCommand_1.DeleteFleetLocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGameServerGroup(args, optionsOrCb, cb) {
        const command = new DeleteGameServerGroupCommand_1.DeleteGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteGameSessionQueue(args, optionsOrCb, cb) {
        const command = new DeleteGameSessionQueueCommand_1.DeleteGameSessionQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMatchmakingConfiguration(args, optionsOrCb, cb) {
        const command = new DeleteMatchmakingConfigurationCommand_1.DeleteMatchmakingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMatchmakingRuleSet(args, optionsOrCb, cb) {
        const command = new DeleteMatchmakingRuleSetCommand_1.DeleteMatchmakingRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteScalingPolicy(args, optionsOrCb, cb) {
        const command = new DeleteScalingPolicyCommand_1.DeleteScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteScript(args, optionsOrCb, cb) {
        const command = new DeleteScriptCommand_1.DeleteScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpcPeeringAuthorization(args, optionsOrCb, cb) {
        const command = new DeleteVpcPeeringAuthorizationCommand_1.DeleteVpcPeeringAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteVpcPeeringConnection(args, optionsOrCb, cb) {
        const command = new DeleteVpcPeeringConnectionCommand_1.DeleteVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterGameServer(args, optionsOrCb, cb) {
        const command = new DeregisterGameServerCommand_1.DeregisterGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAlias(args, optionsOrCb, cb) {
        const command = new DescribeAliasCommand_1.DescribeAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeBuild(args, optionsOrCb, cb) {
        const command = new DescribeBuildCommand_1.DescribeBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEC2InstanceLimits(args, optionsOrCb, cb) {
        const command = new DescribeEC2InstanceLimitsCommand_1.DescribeEC2InstanceLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetAttributes(args, optionsOrCb, cb) {
        const command = new DescribeFleetAttributesCommand_1.DescribeFleetAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetCapacity(args, optionsOrCb, cb) {
        const command = new DescribeFleetCapacityCommand_1.DescribeFleetCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetEvents(args, optionsOrCb, cb) {
        const command = new DescribeFleetEventsCommand_1.DescribeFleetEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetLocationAttributes(args, optionsOrCb, cb) {
        const command = new DescribeFleetLocationAttributesCommand_1.DescribeFleetLocationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetLocationCapacity(args, optionsOrCb, cb) {
        const command = new DescribeFleetLocationCapacityCommand_1.DescribeFleetLocationCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetLocationUtilization(args, optionsOrCb, cb) {
        const command = new DescribeFleetLocationUtilizationCommand_1.DescribeFleetLocationUtilizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetPortSettings(args, optionsOrCb, cb) {
        const command = new DescribeFleetPortSettingsCommand_1.DescribeFleetPortSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFleetUtilization(args, optionsOrCb, cb) {
        const command = new DescribeFleetUtilizationCommand_1.DescribeFleetUtilizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameServer(args, optionsOrCb, cb) {
        const command = new DescribeGameServerCommand_1.DescribeGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameServerGroup(args, optionsOrCb, cb) {
        const command = new DescribeGameServerGroupCommand_1.DescribeGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameServerInstances(args, optionsOrCb, cb) {
        const command = new DescribeGameServerInstancesCommand_1.DescribeGameServerInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameSessionDetails(args, optionsOrCb, cb) {
        const command = new DescribeGameSessionDetailsCommand_1.DescribeGameSessionDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameSessionPlacement(args, optionsOrCb, cb) {
        const command = new DescribeGameSessionPlacementCommand_1.DescribeGameSessionPlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameSessionQueues(args, optionsOrCb, cb) {
        const command = new DescribeGameSessionQueuesCommand_1.DescribeGameSessionQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeGameSessions(args, optionsOrCb, cb) {
        const command = new DescribeGameSessionsCommand_1.DescribeGameSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInstances(args, optionsOrCb, cb) {
        const command = new DescribeInstancesCommand_1.DescribeInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMatchmaking(args, optionsOrCb, cb) {
        const command = new DescribeMatchmakingCommand_1.DescribeMatchmakingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMatchmakingConfigurations(args, optionsOrCb, cb) {
        const command = new DescribeMatchmakingConfigurationsCommand_1.DescribeMatchmakingConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMatchmakingRuleSets(args, optionsOrCb, cb) {
        const command = new DescribeMatchmakingRuleSetsCommand_1.DescribeMatchmakingRuleSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePlayerSessions(args, optionsOrCb, cb) {
        const command = new DescribePlayerSessionsCommand_1.DescribePlayerSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRuntimeConfiguration(args, optionsOrCb, cb) {
        const command = new DescribeRuntimeConfigurationCommand_1.DescribeRuntimeConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScalingPolicies(args, optionsOrCb, cb) {
        const command = new DescribeScalingPoliciesCommand_1.DescribeScalingPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeScript(args, optionsOrCb, cb) {
        const command = new DescribeScriptCommand_1.DescribeScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcPeeringAuthorizations(args, optionsOrCb, cb) {
        const command = new DescribeVpcPeeringAuthorizationsCommand_1.DescribeVpcPeeringAuthorizationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeVpcPeeringConnections(args, optionsOrCb, cb) {
        const command = new DescribeVpcPeeringConnectionsCommand_1.DescribeVpcPeeringConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getGameSessionLogUrl(args, optionsOrCb, cb) {
        const command = new GetGameSessionLogUrlCommand_1.GetGameSessionLogUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getInstanceAccess(args, optionsOrCb, cb) {
        const command = new GetInstanceAccessCommand_1.GetInstanceAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAliases(args, optionsOrCb, cb) {
        const command = new ListAliasesCommand_1.ListAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listBuilds(args, optionsOrCb, cb) {
        const command = new ListBuildsCommand_1.ListBuildsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFleets(args, optionsOrCb, cb) {
        const command = new ListFleetsCommand_1.ListFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGameServerGroups(args, optionsOrCb, cb) {
        const command = new ListGameServerGroupsCommand_1.ListGameServerGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listGameServers(args, optionsOrCb, cb) {
        const command = new ListGameServersCommand_1.ListGameServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listScripts(args, optionsOrCb, cb) {
        const command = new ListScriptsCommand_1.ListScriptsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putScalingPolicy(args, optionsOrCb, cb) {
        const command = new PutScalingPolicyCommand_1.PutScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerGameServer(args, optionsOrCb, cb) {
        const command = new RegisterGameServerCommand_1.RegisterGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    requestUploadCredentials(args, optionsOrCb, cb) {
        const command = new RequestUploadCredentialsCommand_1.RequestUploadCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resolveAlias(args, optionsOrCb, cb) {
        const command = new ResolveAliasCommand_1.ResolveAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    resumeGameServerGroup(args, optionsOrCb, cb) {
        const command = new ResumeGameServerGroupCommand_1.ResumeGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchGameSessions(args, optionsOrCb, cb) {
        const command = new SearchGameSessionsCommand_1.SearchGameSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startFleetActions(args, optionsOrCb, cb) {
        const command = new StartFleetActionsCommand_1.StartFleetActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startGameSessionPlacement(args, optionsOrCb, cb) {
        const command = new StartGameSessionPlacementCommand_1.StartGameSessionPlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMatchBackfill(args, optionsOrCb, cb) {
        const command = new StartMatchBackfillCommand_1.StartMatchBackfillCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMatchmaking(args, optionsOrCb, cb) {
        const command = new StartMatchmakingCommand_1.StartMatchmakingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopFleetActions(args, optionsOrCb, cb) {
        const command = new StopFleetActionsCommand_1.StopFleetActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopGameSessionPlacement(args, optionsOrCb, cb) {
        const command = new StopGameSessionPlacementCommand_1.StopGameSessionPlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopMatchmaking(args, optionsOrCb, cb) {
        const command = new StopMatchmakingCommand_1.StopMatchmakingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    suspendGameServerGroup(args, optionsOrCb, cb) {
        const command = new SuspendGameServerGroupCommand_1.SuspendGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAlias(args, optionsOrCb, cb) {
        const command = new UpdateAliasCommand_1.UpdateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateBuild(args, optionsOrCb, cb) {
        const command = new UpdateBuildCommand_1.UpdateBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFleetAttributes(args, optionsOrCb, cb) {
        const command = new UpdateFleetAttributesCommand_1.UpdateFleetAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFleetCapacity(args, optionsOrCb, cb) {
        const command = new UpdateFleetCapacityCommand_1.UpdateFleetCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFleetPortSettings(args, optionsOrCb, cb) {
        const command = new UpdateFleetPortSettingsCommand_1.UpdateFleetPortSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGameServer(args, optionsOrCb, cb) {
        const command = new UpdateGameServerCommand_1.UpdateGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGameServerGroup(args, optionsOrCb, cb) {
        const command = new UpdateGameServerGroupCommand_1.UpdateGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGameSession(args, optionsOrCb, cb) {
        const command = new UpdateGameSessionCommand_1.UpdateGameSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateGameSessionQueue(args, optionsOrCb, cb) {
        const command = new UpdateGameSessionQueueCommand_1.UpdateGameSessionQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMatchmakingConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateMatchmakingConfigurationCommand_1.UpdateMatchmakingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateRuntimeConfiguration(args, optionsOrCb, cb) {
        const command = new UpdateRuntimeConfigurationCommand_1.UpdateRuntimeConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateScript(args, optionsOrCb, cb) {
        const command = new UpdateScriptCommand_1.UpdateScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    validateMatchmakingRuleSet(args, optionsOrCb, cb) {
        const command = new ValidateMatchmakingRuleSetCommand_1.ValidateMatchmakingRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.GameLift = GameLift;
//# sourceMappingURL=GameLift.js.map