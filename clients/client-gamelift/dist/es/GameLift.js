import { __extends } from "tslib";
import { GameLiftClient } from "./GameLiftClient";
import { AcceptMatchCommand } from "./commands/AcceptMatchCommand";
import { ClaimGameServerCommand, } from "./commands/ClaimGameServerCommand";
import { CreateAliasCommand } from "./commands/CreateAliasCommand";
import { CreateBuildCommand } from "./commands/CreateBuildCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { CreateFleetLocationsCommand, } from "./commands/CreateFleetLocationsCommand";
import { CreateGameServerGroupCommand, } from "./commands/CreateGameServerGroupCommand";
import { CreateGameSessionCommand, } from "./commands/CreateGameSessionCommand";
import { CreateGameSessionQueueCommand, } from "./commands/CreateGameSessionQueueCommand";
import { CreateMatchmakingConfigurationCommand, } from "./commands/CreateMatchmakingConfigurationCommand";
import { CreateMatchmakingRuleSetCommand, } from "./commands/CreateMatchmakingRuleSetCommand";
import { CreatePlayerSessionCommand, } from "./commands/CreatePlayerSessionCommand";
import { CreatePlayerSessionsCommand, } from "./commands/CreatePlayerSessionsCommand";
import { CreateScriptCommand, } from "./commands/CreateScriptCommand";
import { CreateVpcPeeringAuthorizationCommand, } from "./commands/CreateVpcPeeringAuthorizationCommand";
import { CreateVpcPeeringConnectionCommand, } from "./commands/CreateVpcPeeringConnectionCommand";
import { DeleteAliasCommand } from "./commands/DeleteAliasCommand";
import { DeleteBuildCommand } from "./commands/DeleteBuildCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DeleteFleetLocationsCommand, } from "./commands/DeleteFleetLocationsCommand";
import { DeleteGameServerGroupCommand, } from "./commands/DeleteGameServerGroupCommand";
import { DeleteGameSessionQueueCommand, } from "./commands/DeleteGameSessionQueueCommand";
import { DeleteMatchmakingConfigurationCommand, } from "./commands/DeleteMatchmakingConfigurationCommand";
import { DeleteMatchmakingRuleSetCommand, } from "./commands/DeleteMatchmakingRuleSetCommand";
import { DeleteScalingPolicyCommand, } from "./commands/DeleteScalingPolicyCommand";
import { DeleteScriptCommand, } from "./commands/DeleteScriptCommand";
import { DeleteVpcPeeringAuthorizationCommand, } from "./commands/DeleteVpcPeeringAuthorizationCommand";
import { DeleteVpcPeeringConnectionCommand, } from "./commands/DeleteVpcPeeringConnectionCommand";
import { DeregisterGameServerCommand, } from "./commands/DeregisterGameServerCommand";
import { DescribeAliasCommand, } from "./commands/DescribeAliasCommand";
import { DescribeBuildCommand, } from "./commands/DescribeBuildCommand";
import { DescribeEC2InstanceLimitsCommand, } from "./commands/DescribeEC2InstanceLimitsCommand";
import { DescribeFleetAttributesCommand, } from "./commands/DescribeFleetAttributesCommand";
import { DescribeFleetCapacityCommand, } from "./commands/DescribeFleetCapacityCommand";
import { DescribeFleetEventsCommand, } from "./commands/DescribeFleetEventsCommand";
import { DescribeFleetLocationAttributesCommand, } from "./commands/DescribeFleetLocationAttributesCommand";
import { DescribeFleetLocationCapacityCommand, } from "./commands/DescribeFleetLocationCapacityCommand";
import { DescribeFleetLocationUtilizationCommand, } from "./commands/DescribeFleetLocationUtilizationCommand";
import { DescribeFleetPortSettingsCommand, } from "./commands/DescribeFleetPortSettingsCommand";
import { DescribeFleetUtilizationCommand, } from "./commands/DescribeFleetUtilizationCommand";
import { DescribeGameServerCommand, } from "./commands/DescribeGameServerCommand";
import { DescribeGameServerGroupCommand, } from "./commands/DescribeGameServerGroupCommand";
import { DescribeGameServerInstancesCommand, } from "./commands/DescribeGameServerInstancesCommand";
import { DescribeGameSessionDetailsCommand, } from "./commands/DescribeGameSessionDetailsCommand";
import { DescribeGameSessionPlacementCommand, } from "./commands/DescribeGameSessionPlacementCommand";
import { DescribeGameSessionQueuesCommand, } from "./commands/DescribeGameSessionQueuesCommand";
import { DescribeGameSessionsCommand, } from "./commands/DescribeGameSessionsCommand";
import { DescribeInstancesCommand, } from "./commands/DescribeInstancesCommand";
import { DescribeMatchmakingCommand, } from "./commands/DescribeMatchmakingCommand";
import { DescribeMatchmakingConfigurationsCommand, } from "./commands/DescribeMatchmakingConfigurationsCommand";
import { DescribeMatchmakingRuleSetsCommand, } from "./commands/DescribeMatchmakingRuleSetsCommand";
import { DescribePlayerSessionsCommand, } from "./commands/DescribePlayerSessionsCommand";
import { DescribeRuntimeConfigurationCommand, } from "./commands/DescribeRuntimeConfigurationCommand";
import { DescribeScalingPoliciesCommand, } from "./commands/DescribeScalingPoliciesCommand";
import { DescribeScriptCommand, } from "./commands/DescribeScriptCommand";
import { DescribeVpcPeeringAuthorizationsCommand, } from "./commands/DescribeVpcPeeringAuthorizationsCommand";
import { DescribeVpcPeeringConnectionsCommand, } from "./commands/DescribeVpcPeeringConnectionsCommand";
import { GetGameSessionLogUrlCommand, } from "./commands/GetGameSessionLogUrlCommand";
import { GetInstanceAccessCommand, } from "./commands/GetInstanceAccessCommand";
import { ListAliasesCommand } from "./commands/ListAliasesCommand";
import { ListBuildsCommand } from "./commands/ListBuildsCommand";
import { ListFleetsCommand } from "./commands/ListFleetsCommand";
import { ListGameServerGroupsCommand, } from "./commands/ListGameServerGroupsCommand";
import { ListGameServersCommand, } from "./commands/ListGameServersCommand";
import { ListScriptsCommand } from "./commands/ListScriptsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutScalingPolicyCommand, } from "./commands/PutScalingPolicyCommand";
import { RegisterGameServerCommand, } from "./commands/RegisterGameServerCommand";
import { RequestUploadCredentialsCommand, } from "./commands/RequestUploadCredentialsCommand";
import { ResolveAliasCommand, } from "./commands/ResolveAliasCommand";
import { ResumeGameServerGroupCommand, } from "./commands/ResumeGameServerGroupCommand";
import { SearchGameSessionsCommand, } from "./commands/SearchGameSessionsCommand";
import { StartFleetActionsCommand, } from "./commands/StartFleetActionsCommand";
import { StartGameSessionPlacementCommand, } from "./commands/StartGameSessionPlacementCommand";
import { StartMatchBackfillCommand, } from "./commands/StartMatchBackfillCommand";
import { StartMatchmakingCommand, } from "./commands/StartMatchmakingCommand";
import { StopFleetActionsCommand, } from "./commands/StopFleetActionsCommand";
import { StopGameSessionPlacementCommand, } from "./commands/StopGameSessionPlacementCommand";
import { StopMatchmakingCommand, } from "./commands/StopMatchmakingCommand";
import { SuspendGameServerGroupCommand, } from "./commands/SuspendGameServerGroupCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAliasCommand } from "./commands/UpdateAliasCommand";
import { UpdateBuildCommand } from "./commands/UpdateBuildCommand";
import { UpdateFleetAttributesCommand, } from "./commands/UpdateFleetAttributesCommand";
import { UpdateFleetCapacityCommand, } from "./commands/UpdateFleetCapacityCommand";
import { UpdateFleetPortSettingsCommand, } from "./commands/UpdateFleetPortSettingsCommand";
import { UpdateGameServerCommand, } from "./commands/UpdateGameServerCommand";
import { UpdateGameServerGroupCommand, } from "./commands/UpdateGameServerGroupCommand";
import { UpdateGameSessionCommand, } from "./commands/UpdateGameSessionCommand";
import { UpdateGameSessionQueueCommand, } from "./commands/UpdateGameSessionQueueCommand";
import { UpdateMatchmakingConfigurationCommand, } from "./commands/UpdateMatchmakingConfigurationCommand";
import { UpdateRuntimeConfigurationCommand, } from "./commands/UpdateRuntimeConfigurationCommand";
import { UpdateScriptCommand, } from "./commands/UpdateScriptCommand";
import { ValidateMatchmakingRuleSetCommand, } from "./commands/ValidateMatchmakingRuleSetCommand";
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
var GameLift = /** @class */ (function (_super) {
    __extends(GameLift, _super);
    function GameLift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameLift.prototype.acceptMatch = function (args, optionsOrCb, cb) {
        var command = new AcceptMatchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.claimGameServer = function (args, optionsOrCb, cb) {
        var command = new ClaimGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createAlias = function (args, optionsOrCb, cb) {
        var command = new CreateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createBuild = function (args, optionsOrCb, cb) {
        var command = new CreateBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createFleet = function (args, optionsOrCb, cb) {
        var command = new CreateFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createFleetLocations = function (args, optionsOrCb, cb) {
        var command = new CreateFleetLocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createGameServerGroup = function (args, optionsOrCb, cb) {
        var command = new CreateGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createGameSession = function (args, optionsOrCb, cb) {
        var command = new CreateGameSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createGameSessionQueue = function (args, optionsOrCb, cb) {
        var command = new CreateGameSessionQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createMatchmakingConfiguration = function (args, optionsOrCb, cb) {
        var command = new CreateMatchmakingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createMatchmakingRuleSet = function (args, optionsOrCb, cb) {
        var command = new CreateMatchmakingRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createPlayerSession = function (args, optionsOrCb, cb) {
        var command = new CreatePlayerSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createPlayerSessions = function (args, optionsOrCb, cb) {
        var command = new CreatePlayerSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createScript = function (args, optionsOrCb, cb) {
        var command = new CreateScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createVpcPeeringAuthorization = function (args, optionsOrCb, cb) {
        var command = new CreateVpcPeeringAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.createVpcPeeringConnection = function (args, optionsOrCb, cb) {
        var command = new CreateVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteAlias = function (args, optionsOrCb, cb) {
        var command = new DeleteAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteBuild = function (args, optionsOrCb, cb) {
        var command = new DeleteBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteFleet = function (args, optionsOrCb, cb) {
        var command = new DeleteFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteFleetLocations = function (args, optionsOrCb, cb) {
        var command = new DeleteFleetLocationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteGameServerGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteGameSessionQueue = function (args, optionsOrCb, cb) {
        var command = new DeleteGameSessionQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteMatchmakingConfiguration = function (args, optionsOrCb, cb) {
        var command = new DeleteMatchmakingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteMatchmakingRuleSet = function (args, optionsOrCb, cb) {
        var command = new DeleteMatchmakingRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteScript = function (args, optionsOrCb, cb) {
        var command = new DeleteScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteVpcPeeringAuthorization = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcPeeringAuthorizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deleteVpcPeeringConnection = function (args, optionsOrCb, cb) {
        var command = new DeleteVpcPeeringConnectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.deregisterGameServer = function (args, optionsOrCb, cb) {
        var command = new DeregisterGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeAlias = function (args, optionsOrCb, cb) {
        var command = new DescribeAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeBuild = function (args, optionsOrCb, cb) {
        var command = new DescribeBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeEC2InstanceLimits = function (args, optionsOrCb, cb) {
        var command = new DescribeEC2InstanceLimitsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetCapacity = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetEvents = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetLocationAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetLocationAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetLocationCapacity = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetLocationCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetLocationUtilization = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetLocationUtilizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetPortSettings = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetPortSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeFleetUtilization = function (args, optionsOrCb, cb) {
        var command = new DescribeFleetUtilizationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameServer = function (args, optionsOrCb, cb) {
        var command = new DescribeGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameServerGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameServerInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeGameServerInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameSessionDetails = function (args, optionsOrCb, cb) {
        var command = new DescribeGameSessionDetailsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameSessionPlacement = function (args, optionsOrCb, cb) {
        var command = new DescribeGameSessionPlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameSessionQueues = function (args, optionsOrCb, cb) {
        var command = new DescribeGameSessionQueuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeGameSessions = function (args, optionsOrCb, cb) {
        var command = new DescribeGameSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeInstances = function (args, optionsOrCb, cb) {
        var command = new DescribeInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeMatchmaking = function (args, optionsOrCb, cb) {
        var command = new DescribeMatchmakingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeMatchmakingConfigurations = function (args, optionsOrCb, cb) {
        var command = new DescribeMatchmakingConfigurationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeMatchmakingRuleSets = function (args, optionsOrCb, cb) {
        var command = new DescribeMatchmakingRuleSetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describePlayerSessions = function (args, optionsOrCb, cb) {
        var command = new DescribePlayerSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeRuntimeConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeRuntimeConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeScalingPolicies = function (args, optionsOrCb, cb) {
        var command = new DescribeScalingPoliciesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeScript = function (args, optionsOrCb, cb) {
        var command = new DescribeScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeVpcPeeringAuthorizations = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcPeeringAuthorizationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.describeVpcPeeringConnections = function (args, optionsOrCb, cb) {
        var command = new DescribeVpcPeeringConnectionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.getGameSessionLogUrl = function (args, optionsOrCb, cb) {
        var command = new GetGameSessionLogUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.getInstanceAccess = function (args, optionsOrCb, cb) {
        var command = new GetInstanceAccessCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listAliases = function (args, optionsOrCb, cb) {
        var command = new ListAliasesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listBuilds = function (args, optionsOrCb, cb) {
        var command = new ListBuildsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listFleets = function (args, optionsOrCb, cb) {
        var command = new ListFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listGameServerGroups = function (args, optionsOrCb, cb) {
        var command = new ListGameServerGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listGameServers = function (args, optionsOrCb, cb) {
        var command = new ListGameServersCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listScripts = function (args, optionsOrCb, cb) {
        var command = new ListScriptsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.putScalingPolicy = function (args, optionsOrCb, cb) {
        var command = new PutScalingPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.registerGameServer = function (args, optionsOrCb, cb) {
        var command = new RegisterGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.requestUploadCredentials = function (args, optionsOrCb, cb) {
        var command = new RequestUploadCredentialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.resolveAlias = function (args, optionsOrCb, cb) {
        var command = new ResolveAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.resumeGameServerGroup = function (args, optionsOrCb, cb) {
        var command = new ResumeGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.searchGameSessions = function (args, optionsOrCb, cb) {
        var command = new SearchGameSessionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.startFleetActions = function (args, optionsOrCb, cb) {
        var command = new StartFleetActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.startGameSessionPlacement = function (args, optionsOrCb, cb) {
        var command = new StartGameSessionPlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.startMatchBackfill = function (args, optionsOrCb, cb) {
        var command = new StartMatchBackfillCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.startMatchmaking = function (args, optionsOrCb, cb) {
        var command = new StartMatchmakingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.stopFleetActions = function (args, optionsOrCb, cb) {
        var command = new StopFleetActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.stopGameSessionPlacement = function (args, optionsOrCb, cb) {
        var command = new StopGameSessionPlacementCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.stopMatchmaking = function (args, optionsOrCb, cb) {
        var command = new StopMatchmakingCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.suspendGameServerGroup = function (args, optionsOrCb, cb) {
        var command = new SuspendGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateAlias = function (args, optionsOrCb, cb) {
        var command = new UpdateAliasCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateBuild = function (args, optionsOrCb, cb) {
        var command = new UpdateBuildCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateFleetAttributes = function (args, optionsOrCb, cb) {
        var command = new UpdateFleetAttributesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateFleetCapacity = function (args, optionsOrCb, cb) {
        var command = new UpdateFleetCapacityCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateFleetPortSettings = function (args, optionsOrCb, cb) {
        var command = new UpdateFleetPortSettingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateGameServer = function (args, optionsOrCb, cb) {
        var command = new UpdateGameServerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateGameServerGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateGameServerGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateGameSession = function (args, optionsOrCb, cb) {
        var command = new UpdateGameSessionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateGameSessionQueue = function (args, optionsOrCb, cb) {
        var command = new UpdateGameSessionQueueCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateMatchmakingConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateMatchmakingConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateRuntimeConfiguration = function (args, optionsOrCb, cb) {
        var command = new UpdateRuntimeConfigurationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.updateScript = function (args, optionsOrCb, cb) {
        var command = new UpdateScriptCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    GameLift.prototype.validateMatchmakingRuleSet = function (args, optionsOrCb, cb) {
        var command = new ValidateMatchmakingRuleSetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return GameLift;
}(GameLiftClient));
export { GameLift };
//# sourceMappingURL=GameLift.js.map