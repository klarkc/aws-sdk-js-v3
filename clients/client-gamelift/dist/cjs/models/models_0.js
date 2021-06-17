"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFleetLocationsInput = exports.CreateFleetOutput = exports.LocationState = exports.FleetAttributes = exports.FleetAction = exports.FleetStatus = exports.CreateFleetInput = exports.RuntimeConfiguration = exports.ServerProcess = exports.ResourceCreationLimitPolicy = exports.ProtectionPolicy = exports.LocationConfiguration = exports.FleetType = exports.IpPermission = exports.IpProtocol = exports.CreateBuildOutput = exports.CreateBuildInput = exports.S3Location = exports.TaggingFailedException = exports.LimitExceededException = exports.CreateAliasOutput = exports.CreateAliasInput = exports.Tag = exports.ComparisonOperatorType = exports.UnauthorizedException = exports.OutOfCapacityException = exports.ConflictException = exports.ClaimGameServerOutput = exports.GameServer = exports.GameServerUtilizationStatus = exports.GameServerClaimStatus = exports.ClaimGameServerInput = exports.CertificateConfiguration = exports.CertificateType = exports.Build = exports.BuildStatus = exports.OperatingSystem = exports.BalancingStrategy = exports.BackfillMode = exports.AwsCredentials = exports.AttributeValue = exports.Alias = exports.RoutingStrategy = exports.RoutingStrategyType = exports.UnsupportedRegionException = exports.NotFoundException = exports.InvalidRequestException = exports.InternalServiceException = exports.AcceptMatchOutput = exports.AcceptMatchInput = void 0;
exports.VpcPeeringAuthorization = exports.CreateVpcPeeringAuthorizationInput = exports.CreateScriptOutput = exports.Script = exports.CreateScriptInput = exports.CreatePlayerSessionsOutput = exports.CreatePlayerSessionsInput = exports.InvalidGameSessionStatusException = exports.GameSessionFullException = exports.CreatePlayerSessionOutput = exports.PlayerSession = exports.PlayerSessionStatus = exports.CreatePlayerSessionInput = exports.CreateMatchmakingRuleSetOutput = exports.MatchmakingRuleSet = exports.CreateMatchmakingRuleSetInput = exports.CreateMatchmakingConfigurationOutput = exports.MatchmakingConfiguration = exports.CreateMatchmakingConfigurationInput = exports.FlexMatchMode = exports.CreateGameSessionQueueOutput = exports.GameSessionQueue = exports.CreateGameSessionQueueInput = exports.PriorityConfiguration = exports.PriorityType = exports.PlayerLatencyPolicy = exports.FilterConfiguration = exports.GameSessionQueueDestination = exports.TerminalRoutingStrategyException = exports.IdempotentParameterMismatchException = exports.FleetCapacityExceededException = exports.CreateGameSessionOutput = exports.GameSession = exports.GameSessionStatusReason = exports.GameSessionStatus = exports.PlayerSessionCreationPolicy = exports.CreateGameSessionInput = exports.GameProperty = exports.CreateGameServerGroupOutput = exports.GameServerGroup = exports.GameServerGroupAction = exports.GameServerGroupStatus = exports.CreateGameServerGroupInput = exports.LaunchTemplateSpecification = exports.InstanceDefinition = exports.GameServerProtectionPolicy = exports.GameServerGroupAutoScalingPolicy = exports.TargetTrackingConfiguration = exports.InvalidFleetStatusException = exports.CreateFleetLocationsOutput = void 0;
exports.DescribeFleetLocationUtilizationOutput = exports.FleetUtilization = exports.DescribeFleetLocationUtilizationInput = exports.DescribeFleetLocationCapacityOutput = exports.DescribeFleetLocationCapacityInput = exports.DescribeFleetLocationAttributesOutput = exports.LocationAttributes = exports.LocationUpdateStatus = exports.DescribeFleetLocationAttributesInput = exports.DescribeFleetEventsOutput = exports.Event = exports.EventCode = exports.DescribeFleetEventsInput = exports.DescribeFleetCapacityOutput = exports.FleetCapacity = exports.EC2InstanceCounts = exports.DescribeFleetCapacityInput = exports.DescribeFleetAttributesOutput = exports.DescribeFleetAttributesInput = exports.DescribeEC2InstanceLimitsOutput = exports.EC2InstanceLimit = exports.DescribeEC2InstanceLimitsInput = exports.DescribeBuildOutput = exports.DescribeBuildInput = exports.DescribeAliasOutput = exports.DescribeAliasInput = exports.DeregisterGameServerInput = exports.DeleteVpcPeeringConnectionOutput = exports.DeleteVpcPeeringConnectionInput = exports.DeleteVpcPeeringAuthorizationOutput = exports.DeleteVpcPeeringAuthorizationInput = exports.DeleteScriptInput = exports.DeleteScalingPolicyInput = exports.DeleteMatchmakingRuleSetOutput = exports.DeleteMatchmakingRuleSetInput = exports.DeleteMatchmakingConfigurationOutput = exports.DeleteMatchmakingConfigurationInput = exports.DeleteGameSessionQueueOutput = exports.DeleteGameSessionQueueInput = exports.DeleteGameServerGroupOutput = exports.DeleteGameServerGroupInput = exports.GameServerGroupDeleteOption = exports.DeleteFleetLocationsOutput = exports.DeleteFleetLocationsInput = exports.DeleteFleetInput = exports.DeleteBuildInput = exports.DeleteAliasInput = exports.CreateVpcPeeringConnectionOutput = exports.CreateVpcPeeringConnectionInput = exports.CreateVpcPeeringAuthorizationOutput = void 0;
exports.DescribeScalingPoliciesOutput = exports.ScalingPolicy = exports.TargetConfiguration = exports.ScalingAdjustmentType = exports.PolicyType = exports.DescribeScalingPoliciesInput = exports.ScalingStatusType = exports.DescribeRuntimeConfigurationOutput = exports.DescribeRuntimeConfigurationInput = exports.DescribePlayerSessionsOutput = exports.DescribePlayerSessionsInput = exports.DescribeMatchmakingRuleSetsOutput = exports.DescribeMatchmakingRuleSetsInput = exports.DescribeMatchmakingConfigurationsOutput = exports.DescribeMatchmakingConfigurationsInput = exports.DescribeMatchmakingOutput = exports.MatchmakingTicket = exports.Player = exports.GameSessionConnectionInfo = exports.MatchedPlayerSession = exports.DescribeMatchmakingInput = exports.DescribeInstancesOutput = exports.Instance = exports.InstanceStatus = exports.DescribeInstancesInput = exports.DescribeGameSessionsOutput = exports.DescribeGameSessionsInput = exports.DescribeGameSessionQueuesOutput = exports.DescribeGameSessionQueuesInput = exports.DescribeGameSessionPlacementOutput = exports.GameSessionPlacement = exports.GameSessionPlacementState = exports.PlayerLatency = exports.PlacedPlayerSession = exports.DescribeGameSessionPlacementInput = exports.DescribeGameSessionDetailsOutput = exports.GameSessionDetail = exports.DescribeGameSessionDetailsInput = exports.DescribeGameServerInstancesOutput = exports.GameServerInstance = exports.GameServerInstanceStatus = exports.DescribeGameServerInstancesInput = exports.DescribeGameServerGroupOutput = exports.DescribeGameServerGroupInput = exports.DescribeGameServerOutput = exports.DescribeGameServerInput = exports.DescribeFleetUtilizationOutput = exports.DescribeFleetUtilizationInput = exports.DescribeFleetPortSettingsOutput = exports.DescribeFleetPortSettingsInput = void 0;
exports.StartMatchmakingOutput = exports.StartMatchmakingInput = exports.StartMatchBackfillOutput = exports.StartMatchBackfillInput = exports.StartGameSessionPlacementOutput = exports.StartGameSessionPlacementInput = exports.StartFleetActionsOutput = exports.StartFleetActionsInput = exports.SearchGameSessionsOutput = exports.SearchGameSessionsInput = exports.ResumeGameServerGroupOutput = exports.ResumeGameServerGroupInput = exports.ResolveAliasOutput = exports.ResolveAliasInput = exports.RequestUploadCredentialsOutput = exports.RequestUploadCredentialsInput = exports.RegisterGameServerOutput = exports.RegisterGameServerInput = exports.PutScalingPolicyOutput = exports.PutScalingPolicyInput = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListScriptsOutput = exports.ListScriptsInput = exports.ListGameServersOutput = exports.ListGameServersInput = exports.SortOrder = exports.ListGameServerGroupsOutput = exports.ListGameServerGroupsInput = exports.ListFleetsOutput = exports.ListFleetsInput = exports.ListBuildsOutput = exports.ListBuildsInput = exports.ListAliasesOutput = exports.ListAliasesInput = exports.GetInstanceAccessOutput = exports.InstanceAccess = exports.InstanceCredentials = exports.GetInstanceAccessInput = exports.GetGameSessionLogUrlOutput = exports.GetGameSessionLogUrlInput = exports.DesiredPlayerSession = exports.DescribeVpcPeeringConnectionsOutput = exports.VpcPeeringConnection = exports.VpcPeeringConnectionStatus = exports.DescribeVpcPeeringConnectionsInput = exports.DescribeVpcPeeringAuthorizationsOutput = exports.DescribeVpcPeeringAuthorizationsInput = exports.DescribeScriptOutput = exports.DescribeScriptInput = void 0;
exports.ValidateMatchmakingRuleSetOutput = exports.ValidateMatchmakingRuleSetInput = exports.UpdateScriptOutput = exports.UpdateScriptInput = exports.UpdateRuntimeConfigurationOutput = exports.UpdateRuntimeConfigurationInput = exports.UpdateMatchmakingConfigurationOutput = exports.UpdateMatchmakingConfigurationInput = exports.UpdateGameSessionQueueOutput = exports.UpdateGameSessionQueueInput = exports.UpdateGameSessionOutput = exports.UpdateGameSessionInput = exports.UpdateGameServerGroupOutput = exports.UpdateGameServerGroupInput = exports.UpdateGameServerOutput = exports.UpdateGameServerInput = exports.GameServerHealthCheck = exports.UpdateFleetPortSettingsOutput = exports.UpdateFleetPortSettingsInput = exports.UpdateFleetCapacityOutput = exports.UpdateFleetCapacityInput = exports.UpdateFleetAttributesOutput = exports.UpdateFleetAttributesInput = exports.UpdateBuildOutput = exports.UpdateBuildInput = exports.UpdateAliasOutput = exports.UpdateAliasInput = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SuspendGameServerGroupOutput = exports.SuspendGameServerGroupInput = exports.StopMatchmakingOutput = exports.StopMatchmakingInput = exports.StopGameSessionPlacementOutput = exports.StopGameSessionPlacementInput = exports.StopFleetActionsOutput = exports.StopFleetActionsInput = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptMatchInput;
(function (AcceptMatchInput) {
    /**
     * @internal
     */
    AcceptMatchInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptMatchInput = exports.AcceptMatchInput || (exports.AcceptMatchInput = {}));
var AcceptMatchOutput;
(function (AcceptMatchOutput) {
    /**
     * @internal
     */
    AcceptMatchOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptMatchOutput = exports.AcceptMatchOutput || (exports.AcceptMatchOutput = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var UnsupportedRegionException;
(function (UnsupportedRegionException) {
    /**
     * @internal
     */
    UnsupportedRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedRegionException = exports.UnsupportedRegionException || (exports.UnsupportedRegionException = {}));
var RoutingStrategyType;
(function (RoutingStrategyType) {
    RoutingStrategyType["SIMPLE"] = "SIMPLE";
    RoutingStrategyType["TERMINAL"] = "TERMINAL";
})(RoutingStrategyType = exports.RoutingStrategyType || (exports.RoutingStrategyType = {}));
var RoutingStrategy;
(function (RoutingStrategy) {
    /**
     * @internal
     */
    RoutingStrategy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RoutingStrategy = exports.RoutingStrategy || (exports.RoutingStrategy = {}));
var Alias;
(function (Alias) {
    /**
     * @internal
     */
    Alias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alias = exports.Alias || (exports.Alias = {}));
var AttributeValue;
(function (AttributeValue) {
    /**
     * @internal
     */
    AttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
var AwsCredentials;
(function (AwsCredentials) {
    /**
     * @internal
     */
    AwsCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsCredentials = exports.AwsCredentials || (exports.AwsCredentials = {}));
var BackfillMode;
(function (BackfillMode) {
    BackfillMode["AUTOMATIC"] = "AUTOMATIC";
    BackfillMode["MANUAL"] = "MANUAL";
})(BackfillMode = exports.BackfillMode || (exports.BackfillMode = {}));
var BalancingStrategy;
(function (BalancingStrategy) {
    BalancingStrategy["ON_DEMAND_ONLY"] = "ON_DEMAND_ONLY";
    BalancingStrategy["SPOT_ONLY"] = "SPOT_ONLY";
    BalancingStrategy["SPOT_PREFERRED"] = "SPOT_PREFERRED";
})(BalancingStrategy = exports.BalancingStrategy || (exports.BalancingStrategy = {}));
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["AMAZON_LINUX"] = "AMAZON_LINUX";
    OperatingSystem["AMAZON_LINUX_2"] = "AMAZON_LINUX_2";
    OperatingSystem["WINDOWS_2012"] = "WINDOWS_2012";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var BuildStatus;
(function (BuildStatus) {
    BuildStatus["FAILED"] = "FAILED";
    BuildStatus["INITIALIZED"] = "INITIALIZED";
    BuildStatus["READY"] = "READY";
})(BuildStatus = exports.BuildStatus || (exports.BuildStatus = {}));
var Build;
(function (Build) {
    /**
     * @internal
     */
    Build.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Build = exports.Build || (exports.Build = {}));
var CertificateType;
(function (CertificateType) {
    CertificateType["Disabled"] = "DISABLED";
    CertificateType["Generated"] = "GENERATED";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
var CertificateConfiguration;
(function (CertificateConfiguration) {
    /**
     * @internal
     */
    CertificateConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateConfiguration = exports.CertificateConfiguration || (exports.CertificateConfiguration = {}));
var ClaimGameServerInput;
(function (ClaimGameServerInput) {
    /**
     * @internal
     */
    ClaimGameServerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClaimGameServerInput = exports.ClaimGameServerInput || (exports.ClaimGameServerInput = {}));
var GameServerClaimStatus;
(function (GameServerClaimStatus) {
    GameServerClaimStatus["CLAIMED"] = "CLAIMED";
})(GameServerClaimStatus = exports.GameServerClaimStatus || (exports.GameServerClaimStatus = {}));
var GameServerUtilizationStatus;
(function (GameServerUtilizationStatus) {
    GameServerUtilizationStatus["AVAILABLE"] = "AVAILABLE";
    GameServerUtilizationStatus["UTILIZED"] = "UTILIZED";
})(GameServerUtilizationStatus = exports.GameServerUtilizationStatus || (exports.GameServerUtilizationStatus = {}));
var GameServer;
(function (GameServer) {
    /**
     * @internal
     */
    GameServer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameServer = exports.GameServer || (exports.GameServer = {}));
var ClaimGameServerOutput;
(function (ClaimGameServerOutput) {
    /**
     * @internal
     */
    ClaimGameServerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClaimGameServerOutput = exports.ClaimGameServerOutput || (exports.ClaimGameServerOutput = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var OutOfCapacityException;
(function (OutOfCapacityException) {
    /**
     * @internal
     */
    OutOfCapacityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutOfCapacityException = exports.OutOfCapacityException || (exports.OutOfCapacityException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {}));
var ComparisonOperatorType;
(function (ComparisonOperatorType) {
    ComparisonOperatorType["GreaterThanOrEqualToThreshold"] = "GreaterThanOrEqualToThreshold";
    ComparisonOperatorType["GreaterThanThreshold"] = "GreaterThanThreshold";
    ComparisonOperatorType["LessThanOrEqualToThreshold"] = "LessThanOrEqualToThreshold";
    ComparisonOperatorType["LessThanThreshold"] = "LessThanThreshold";
})(ComparisonOperatorType = exports.ComparisonOperatorType || (exports.ComparisonOperatorType = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAliasInput;
(function (CreateAliasInput) {
    /**
     * @internal
     */
    CreateAliasInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasInput = exports.CreateAliasInput || (exports.CreateAliasInput = {}));
var CreateAliasOutput;
(function (CreateAliasOutput) {
    /**
     * @internal
     */
    CreateAliasOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasOutput = exports.CreateAliasOutput || (exports.CreateAliasOutput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TaggingFailedException;
(function (TaggingFailedException) {
    /**
     * @internal
     */
    TaggingFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaggingFailedException = exports.TaggingFailedException || (exports.TaggingFailedException = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var CreateBuildInput;
(function (CreateBuildInput) {
    /**
     * @internal
     */
    CreateBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBuildInput = exports.CreateBuildInput || (exports.CreateBuildInput = {}));
var CreateBuildOutput;
(function (CreateBuildOutput) {
    /**
     * @internal
     */
    CreateBuildOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UploadCredentials && { UploadCredentials: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateBuildOutput = exports.CreateBuildOutput || (exports.CreateBuildOutput = {}));
var IpProtocol;
(function (IpProtocol) {
    IpProtocol["TCP"] = "TCP";
    IpProtocol["UDP"] = "UDP";
})(IpProtocol = exports.IpProtocol || (exports.IpProtocol = {}));
var IpPermission;
(function (IpPermission) {
    /**
     * @internal
     */
    IpPermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpPermission = exports.IpPermission || (exports.IpPermission = {}));
var FleetType;
(function (FleetType) {
    FleetType["OnDemand"] = "ON_DEMAND";
    FleetType["Spot"] = "SPOT";
})(FleetType = exports.FleetType || (exports.FleetType = {}));
var LocationConfiguration;
(function (LocationConfiguration) {
    /**
     * @internal
     */
    LocationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocationConfiguration = exports.LocationConfiguration || (exports.LocationConfiguration = {}));
var ProtectionPolicy;
(function (ProtectionPolicy) {
    ProtectionPolicy["FullProtection"] = "FullProtection";
    ProtectionPolicy["NoProtection"] = "NoProtection";
})(ProtectionPolicy = exports.ProtectionPolicy || (exports.ProtectionPolicy = {}));
var ResourceCreationLimitPolicy;
(function (ResourceCreationLimitPolicy) {
    /**
     * @internal
     */
    ResourceCreationLimitPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceCreationLimitPolicy = exports.ResourceCreationLimitPolicy || (exports.ResourceCreationLimitPolicy = {}));
var ServerProcess;
(function (ServerProcess) {
    /**
     * @internal
     */
    ServerProcess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerProcess = exports.ServerProcess || (exports.ServerProcess = {}));
var RuntimeConfiguration;
(function (RuntimeConfiguration) {
    /**
     * @internal
     */
    RuntimeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuntimeConfiguration = exports.RuntimeConfiguration || (exports.RuntimeConfiguration = {}));
var CreateFleetInput;
(function (CreateFleetInput) {
    /**
     * @internal
     */
    CreateFleetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetInput = exports.CreateFleetInput || (exports.CreateFleetInput = {}));
var FleetStatus;
(function (FleetStatus) {
    FleetStatus["ACTIVATING"] = "ACTIVATING";
    FleetStatus["ACTIVE"] = "ACTIVE";
    FleetStatus["BUILDING"] = "BUILDING";
    FleetStatus["DELETING"] = "DELETING";
    FleetStatus["DOWNLOADING"] = "DOWNLOADING";
    FleetStatus["ERROR"] = "ERROR";
    FleetStatus["NEW"] = "NEW";
    FleetStatus["TERMINATED"] = "TERMINATED";
    FleetStatus["VALIDATING"] = "VALIDATING";
})(FleetStatus = exports.FleetStatus || (exports.FleetStatus = {}));
var FleetAction;
(function (FleetAction) {
    FleetAction["AutoScaling"] = "AUTO_SCALING";
})(FleetAction = exports.FleetAction || (exports.FleetAction = {}));
var FleetAttributes;
(function (FleetAttributes) {
    /**
     * @internal
     */
    FleetAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetAttributes = exports.FleetAttributes || (exports.FleetAttributes = {}));
var LocationState;
(function (LocationState) {
    /**
     * @internal
     */
    LocationState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocationState = exports.LocationState || (exports.LocationState = {}));
var CreateFleetOutput;
(function (CreateFleetOutput) {
    /**
     * @internal
     */
    CreateFleetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetOutput = exports.CreateFleetOutput || (exports.CreateFleetOutput = {}));
var CreateFleetLocationsInput;
(function (CreateFleetLocationsInput) {
    /**
     * @internal
     */
    CreateFleetLocationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetLocationsInput = exports.CreateFleetLocationsInput || (exports.CreateFleetLocationsInput = {}));
var CreateFleetLocationsOutput;
(function (CreateFleetLocationsOutput) {
    /**
     * @internal
     */
    CreateFleetLocationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetLocationsOutput = exports.CreateFleetLocationsOutput || (exports.CreateFleetLocationsOutput = {}));
var InvalidFleetStatusException;
(function (InvalidFleetStatusException) {
    /**
     * @internal
     */
    InvalidFleetStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFleetStatusException = exports.InvalidFleetStatusException || (exports.InvalidFleetStatusException = {}));
var TargetTrackingConfiguration;
(function (TargetTrackingConfiguration) {
    /**
     * @internal
     */
    TargetTrackingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetTrackingConfiguration = exports.TargetTrackingConfiguration || (exports.TargetTrackingConfiguration = {}));
var GameServerGroupAutoScalingPolicy;
(function (GameServerGroupAutoScalingPolicy) {
    /**
     * @internal
     */
    GameServerGroupAutoScalingPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameServerGroupAutoScalingPolicy = exports.GameServerGroupAutoScalingPolicy || (exports.GameServerGroupAutoScalingPolicy = {}));
var GameServerProtectionPolicy;
(function (GameServerProtectionPolicy) {
    GameServerProtectionPolicy["FULL_PROTECTION"] = "FULL_PROTECTION";
    GameServerProtectionPolicy["NO_PROTECTION"] = "NO_PROTECTION";
})(GameServerProtectionPolicy = exports.GameServerProtectionPolicy || (exports.GameServerProtectionPolicy = {}));
var InstanceDefinition;
(function (InstanceDefinition) {
    /**
     * @internal
     */
    InstanceDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceDefinition = exports.InstanceDefinition || (exports.InstanceDefinition = {}));
var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
    /**
     * @internal
     */
    LaunchTemplateSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchTemplateSpecification = exports.LaunchTemplateSpecification || (exports.LaunchTemplateSpecification = {}));
var CreateGameServerGroupInput;
(function (CreateGameServerGroupInput) {
    /**
     * @internal
     */
    CreateGameServerGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGameServerGroupInput = exports.CreateGameServerGroupInput || (exports.CreateGameServerGroupInput = {}));
var GameServerGroupStatus;
(function (GameServerGroupStatus) {
    GameServerGroupStatus["ACTIVATING"] = "ACTIVATING";
    GameServerGroupStatus["ACTIVE"] = "ACTIVE";
    GameServerGroupStatus["DELETED"] = "DELETED";
    GameServerGroupStatus["DELETE_SCHEDULED"] = "DELETE_SCHEDULED";
    GameServerGroupStatus["DELETING"] = "DELETING";
    GameServerGroupStatus["ERROR"] = "ERROR";
    GameServerGroupStatus["NEW"] = "NEW";
})(GameServerGroupStatus = exports.GameServerGroupStatus || (exports.GameServerGroupStatus = {}));
var GameServerGroupAction;
(function (GameServerGroupAction) {
    GameServerGroupAction["REPLACE_INSTANCE_TYPES"] = "REPLACE_INSTANCE_TYPES";
})(GameServerGroupAction = exports.GameServerGroupAction || (exports.GameServerGroupAction = {}));
var GameServerGroup;
(function (GameServerGroup) {
    /**
     * @internal
     */
    GameServerGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameServerGroup = exports.GameServerGroup || (exports.GameServerGroup = {}));
var CreateGameServerGroupOutput;
(function (CreateGameServerGroupOutput) {
    /**
     * @internal
     */
    CreateGameServerGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGameServerGroupOutput = exports.CreateGameServerGroupOutput || (exports.CreateGameServerGroupOutput = {}));
var GameProperty;
(function (GameProperty) {
    /**
     * @internal
     */
    GameProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameProperty = exports.GameProperty || (exports.GameProperty = {}));
var CreateGameSessionInput;
(function (CreateGameSessionInput) {
    /**
     * @internal
     */
    CreateGameSessionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGameSessionInput = exports.CreateGameSessionInput || (exports.CreateGameSessionInput = {}));
var PlayerSessionCreationPolicy;
(function (PlayerSessionCreationPolicy) {
    PlayerSessionCreationPolicy["ACCEPT_ALL"] = "ACCEPT_ALL";
    PlayerSessionCreationPolicy["DENY_ALL"] = "DENY_ALL";
})(PlayerSessionCreationPolicy = exports.PlayerSessionCreationPolicy || (exports.PlayerSessionCreationPolicy = {}));
var GameSessionStatus;
(function (GameSessionStatus) {
    GameSessionStatus["ACTIVATING"] = "ACTIVATING";
    GameSessionStatus["ACTIVE"] = "ACTIVE";
    GameSessionStatus["ERROR"] = "ERROR";
    GameSessionStatus["TERMINATED"] = "TERMINATED";
    GameSessionStatus["TERMINATING"] = "TERMINATING";
})(GameSessionStatus = exports.GameSessionStatus || (exports.GameSessionStatus = {}));
var GameSessionStatusReason;
(function (GameSessionStatusReason) {
    GameSessionStatusReason["INTERRUPTED"] = "INTERRUPTED";
})(GameSessionStatusReason = exports.GameSessionStatusReason || (exports.GameSessionStatusReason = {}));
var GameSession;
(function (GameSession) {
    /**
     * @internal
     */
    GameSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSession = exports.GameSession || (exports.GameSession = {}));
var CreateGameSessionOutput;
(function (CreateGameSessionOutput) {
    /**
     * @internal
     */
    CreateGameSessionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGameSessionOutput = exports.CreateGameSessionOutput || (exports.CreateGameSessionOutput = {}));
var FleetCapacityExceededException;
(function (FleetCapacityExceededException) {
    /**
     * @internal
     */
    FleetCapacityExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetCapacityExceededException = exports.FleetCapacityExceededException || (exports.FleetCapacityExceededException = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var TerminalRoutingStrategyException;
(function (TerminalRoutingStrategyException) {
    /**
     * @internal
     */
    TerminalRoutingStrategyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminalRoutingStrategyException = exports.TerminalRoutingStrategyException || (exports.TerminalRoutingStrategyException = {}));
var GameSessionQueueDestination;
(function (GameSessionQueueDestination) {
    /**
     * @internal
     */
    GameSessionQueueDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSessionQueueDestination = exports.GameSessionQueueDestination || (exports.GameSessionQueueDestination = {}));
var FilterConfiguration;
(function (FilterConfiguration) {
    /**
     * @internal
     */
    FilterConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterConfiguration = exports.FilterConfiguration || (exports.FilterConfiguration = {}));
var PlayerLatencyPolicy;
(function (PlayerLatencyPolicy) {
    /**
     * @internal
     */
    PlayerLatencyPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlayerLatencyPolicy = exports.PlayerLatencyPolicy || (exports.PlayerLatencyPolicy = {}));
var PriorityType;
(function (PriorityType) {
    PriorityType["COST"] = "COST";
    PriorityType["DESTINATION"] = "DESTINATION";
    PriorityType["LATENCY"] = "LATENCY";
    PriorityType["LOCATION"] = "LOCATION";
})(PriorityType = exports.PriorityType || (exports.PriorityType = {}));
var PriorityConfiguration;
(function (PriorityConfiguration) {
    /**
     * @internal
     */
    PriorityConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PriorityConfiguration = exports.PriorityConfiguration || (exports.PriorityConfiguration = {}));
var CreateGameSessionQueueInput;
(function (CreateGameSessionQueueInput) {
    /**
     * @internal
     */
    CreateGameSessionQueueInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGameSessionQueueInput = exports.CreateGameSessionQueueInput || (exports.CreateGameSessionQueueInput = {}));
var GameSessionQueue;
(function (GameSessionQueue) {
    /**
     * @internal
     */
    GameSessionQueue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSessionQueue = exports.GameSessionQueue || (exports.GameSessionQueue = {}));
var CreateGameSessionQueueOutput;
(function (CreateGameSessionQueueOutput) {
    /**
     * @internal
     */
    CreateGameSessionQueueOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGameSessionQueueOutput = exports.CreateGameSessionQueueOutput || (exports.CreateGameSessionQueueOutput = {}));
var FlexMatchMode;
(function (FlexMatchMode) {
    FlexMatchMode["STANDALONE"] = "STANDALONE";
    FlexMatchMode["WITH_QUEUE"] = "WITH_QUEUE";
})(FlexMatchMode = exports.FlexMatchMode || (exports.FlexMatchMode = {}));
var CreateMatchmakingConfigurationInput;
(function (CreateMatchmakingConfigurationInput) {
    /**
     * @internal
     */
    CreateMatchmakingConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMatchmakingConfigurationInput = exports.CreateMatchmakingConfigurationInput || (exports.CreateMatchmakingConfigurationInput = {}));
var MatchmakingConfiguration;
(function (MatchmakingConfiguration) {
    /**
     * @internal
     */
    MatchmakingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchmakingConfiguration = exports.MatchmakingConfiguration || (exports.MatchmakingConfiguration = {}));
var CreateMatchmakingConfigurationOutput;
(function (CreateMatchmakingConfigurationOutput) {
    /**
     * @internal
     */
    CreateMatchmakingConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMatchmakingConfigurationOutput = exports.CreateMatchmakingConfigurationOutput || (exports.CreateMatchmakingConfigurationOutput = {}));
var CreateMatchmakingRuleSetInput;
(function (CreateMatchmakingRuleSetInput) {
    /**
     * @internal
     */
    CreateMatchmakingRuleSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMatchmakingRuleSetInput = exports.CreateMatchmakingRuleSetInput || (exports.CreateMatchmakingRuleSetInput = {}));
var MatchmakingRuleSet;
(function (MatchmakingRuleSet) {
    /**
     * @internal
     */
    MatchmakingRuleSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchmakingRuleSet = exports.MatchmakingRuleSet || (exports.MatchmakingRuleSet = {}));
var CreateMatchmakingRuleSetOutput;
(function (CreateMatchmakingRuleSetOutput) {
    /**
     * @internal
     */
    CreateMatchmakingRuleSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMatchmakingRuleSetOutput = exports.CreateMatchmakingRuleSetOutput || (exports.CreateMatchmakingRuleSetOutput = {}));
var CreatePlayerSessionInput;
(function (CreatePlayerSessionInput) {
    /**
     * @internal
     */
    CreatePlayerSessionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlayerSessionInput = exports.CreatePlayerSessionInput || (exports.CreatePlayerSessionInput = {}));
var PlayerSessionStatus;
(function (PlayerSessionStatus) {
    PlayerSessionStatus["ACTIVE"] = "ACTIVE";
    PlayerSessionStatus["COMPLETED"] = "COMPLETED";
    PlayerSessionStatus["RESERVED"] = "RESERVED";
    PlayerSessionStatus["TIMEDOUT"] = "TIMEDOUT";
})(PlayerSessionStatus = exports.PlayerSessionStatus || (exports.PlayerSessionStatus = {}));
var PlayerSession;
(function (PlayerSession) {
    /**
     * @internal
     */
    PlayerSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlayerSession = exports.PlayerSession || (exports.PlayerSession = {}));
var CreatePlayerSessionOutput;
(function (CreatePlayerSessionOutput) {
    /**
     * @internal
     */
    CreatePlayerSessionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlayerSessionOutput = exports.CreatePlayerSessionOutput || (exports.CreatePlayerSessionOutput = {}));
var GameSessionFullException;
(function (GameSessionFullException) {
    /**
     * @internal
     */
    GameSessionFullException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSessionFullException = exports.GameSessionFullException || (exports.GameSessionFullException = {}));
var InvalidGameSessionStatusException;
(function (InvalidGameSessionStatusException) {
    /**
     * @internal
     */
    InvalidGameSessionStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidGameSessionStatusException = exports.InvalidGameSessionStatusException || (exports.InvalidGameSessionStatusException = {}));
var CreatePlayerSessionsInput;
(function (CreatePlayerSessionsInput) {
    /**
     * @internal
     */
    CreatePlayerSessionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlayerSessionsInput = exports.CreatePlayerSessionsInput || (exports.CreatePlayerSessionsInput = {}));
var CreatePlayerSessionsOutput;
(function (CreatePlayerSessionsOutput) {
    /**
     * @internal
     */
    CreatePlayerSessionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlayerSessionsOutput = exports.CreatePlayerSessionsOutput || (exports.CreatePlayerSessionsOutput = {}));
var CreateScriptInput;
(function (CreateScriptInput) {
    /**
     * @internal
     */
    CreateScriptInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScriptInput = exports.CreateScriptInput || (exports.CreateScriptInput = {}));
var Script;
(function (Script) {
    /**
     * @internal
     */
    Script.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Script = exports.Script || (exports.Script = {}));
var CreateScriptOutput;
(function (CreateScriptOutput) {
    /**
     * @internal
     */
    CreateScriptOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateScriptOutput = exports.CreateScriptOutput || (exports.CreateScriptOutput = {}));
var CreateVpcPeeringAuthorizationInput;
(function (CreateVpcPeeringAuthorizationInput) {
    /**
     * @internal
     */
    CreateVpcPeeringAuthorizationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcPeeringAuthorizationInput = exports.CreateVpcPeeringAuthorizationInput || (exports.CreateVpcPeeringAuthorizationInput = {}));
var VpcPeeringAuthorization;
(function (VpcPeeringAuthorization) {
    /**
     * @internal
     */
    VpcPeeringAuthorization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringAuthorization = exports.VpcPeeringAuthorization || (exports.VpcPeeringAuthorization = {}));
var CreateVpcPeeringAuthorizationOutput;
(function (CreateVpcPeeringAuthorizationOutput) {
    /**
     * @internal
     */
    CreateVpcPeeringAuthorizationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcPeeringAuthorizationOutput = exports.CreateVpcPeeringAuthorizationOutput || (exports.CreateVpcPeeringAuthorizationOutput = {}));
var CreateVpcPeeringConnectionInput;
(function (CreateVpcPeeringConnectionInput) {
    /**
     * @internal
     */
    CreateVpcPeeringConnectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcPeeringConnectionInput = exports.CreateVpcPeeringConnectionInput || (exports.CreateVpcPeeringConnectionInput = {}));
var CreateVpcPeeringConnectionOutput;
(function (CreateVpcPeeringConnectionOutput) {
    /**
     * @internal
     */
    CreateVpcPeeringConnectionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVpcPeeringConnectionOutput = exports.CreateVpcPeeringConnectionOutput || (exports.CreateVpcPeeringConnectionOutput = {}));
var DeleteAliasInput;
(function (DeleteAliasInput) {
    /**
     * @internal
     */
    DeleteAliasInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAliasInput = exports.DeleteAliasInput || (exports.DeleteAliasInput = {}));
var DeleteBuildInput;
(function (DeleteBuildInput) {
    /**
     * @internal
     */
    DeleteBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBuildInput = exports.DeleteBuildInput || (exports.DeleteBuildInput = {}));
var DeleteFleetInput;
(function (DeleteFleetInput) {
    /**
     * @internal
     */
    DeleteFleetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetInput = exports.DeleteFleetInput || (exports.DeleteFleetInput = {}));
var DeleteFleetLocationsInput;
(function (DeleteFleetLocationsInput) {
    /**
     * @internal
     */
    DeleteFleetLocationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetLocationsInput = exports.DeleteFleetLocationsInput || (exports.DeleteFleetLocationsInput = {}));
var DeleteFleetLocationsOutput;
(function (DeleteFleetLocationsOutput) {
    /**
     * @internal
     */
    DeleteFleetLocationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetLocationsOutput = exports.DeleteFleetLocationsOutput || (exports.DeleteFleetLocationsOutput = {}));
var GameServerGroupDeleteOption;
(function (GameServerGroupDeleteOption) {
    GameServerGroupDeleteOption["FORCE_DELETE"] = "FORCE_DELETE";
    GameServerGroupDeleteOption["RETAIN"] = "RETAIN";
    GameServerGroupDeleteOption["SAFE_DELETE"] = "SAFE_DELETE";
})(GameServerGroupDeleteOption = exports.GameServerGroupDeleteOption || (exports.GameServerGroupDeleteOption = {}));
var DeleteGameServerGroupInput;
(function (DeleteGameServerGroupInput) {
    /**
     * @internal
     */
    DeleteGameServerGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGameServerGroupInput = exports.DeleteGameServerGroupInput || (exports.DeleteGameServerGroupInput = {}));
var DeleteGameServerGroupOutput;
(function (DeleteGameServerGroupOutput) {
    /**
     * @internal
     */
    DeleteGameServerGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGameServerGroupOutput = exports.DeleteGameServerGroupOutput || (exports.DeleteGameServerGroupOutput = {}));
var DeleteGameSessionQueueInput;
(function (DeleteGameSessionQueueInput) {
    /**
     * @internal
     */
    DeleteGameSessionQueueInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGameSessionQueueInput = exports.DeleteGameSessionQueueInput || (exports.DeleteGameSessionQueueInput = {}));
var DeleteGameSessionQueueOutput;
(function (DeleteGameSessionQueueOutput) {
    /**
     * @internal
     */
    DeleteGameSessionQueueOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGameSessionQueueOutput = exports.DeleteGameSessionQueueOutput || (exports.DeleteGameSessionQueueOutput = {}));
var DeleteMatchmakingConfigurationInput;
(function (DeleteMatchmakingConfigurationInput) {
    /**
     * @internal
     */
    DeleteMatchmakingConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMatchmakingConfigurationInput = exports.DeleteMatchmakingConfigurationInput || (exports.DeleteMatchmakingConfigurationInput = {}));
var DeleteMatchmakingConfigurationOutput;
(function (DeleteMatchmakingConfigurationOutput) {
    /**
     * @internal
     */
    DeleteMatchmakingConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMatchmakingConfigurationOutput = exports.DeleteMatchmakingConfigurationOutput || (exports.DeleteMatchmakingConfigurationOutput = {}));
var DeleteMatchmakingRuleSetInput;
(function (DeleteMatchmakingRuleSetInput) {
    /**
     * @internal
     */
    DeleteMatchmakingRuleSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMatchmakingRuleSetInput = exports.DeleteMatchmakingRuleSetInput || (exports.DeleteMatchmakingRuleSetInput = {}));
var DeleteMatchmakingRuleSetOutput;
(function (DeleteMatchmakingRuleSetOutput) {
    /**
     * @internal
     */
    DeleteMatchmakingRuleSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMatchmakingRuleSetOutput = exports.DeleteMatchmakingRuleSetOutput || (exports.DeleteMatchmakingRuleSetOutput = {}));
var DeleteScalingPolicyInput;
(function (DeleteScalingPolicyInput) {
    /**
     * @internal
     */
    DeleteScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScalingPolicyInput = exports.DeleteScalingPolicyInput || (exports.DeleteScalingPolicyInput = {}));
var DeleteScriptInput;
(function (DeleteScriptInput) {
    /**
     * @internal
     */
    DeleteScriptInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteScriptInput = exports.DeleteScriptInput || (exports.DeleteScriptInput = {}));
var DeleteVpcPeeringAuthorizationInput;
(function (DeleteVpcPeeringAuthorizationInput) {
    /**
     * @internal
     */
    DeleteVpcPeeringAuthorizationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcPeeringAuthorizationInput = exports.DeleteVpcPeeringAuthorizationInput || (exports.DeleteVpcPeeringAuthorizationInput = {}));
var DeleteVpcPeeringAuthorizationOutput;
(function (DeleteVpcPeeringAuthorizationOutput) {
    /**
     * @internal
     */
    DeleteVpcPeeringAuthorizationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcPeeringAuthorizationOutput = exports.DeleteVpcPeeringAuthorizationOutput || (exports.DeleteVpcPeeringAuthorizationOutput = {}));
var DeleteVpcPeeringConnectionInput;
(function (DeleteVpcPeeringConnectionInput) {
    /**
     * @internal
     */
    DeleteVpcPeeringConnectionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcPeeringConnectionInput = exports.DeleteVpcPeeringConnectionInput || (exports.DeleteVpcPeeringConnectionInput = {}));
var DeleteVpcPeeringConnectionOutput;
(function (DeleteVpcPeeringConnectionOutput) {
    /**
     * @internal
     */
    DeleteVpcPeeringConnectionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVpcPeeringConnectionOutput = exports.DeleteVpcPeeringConnectionOutput || (exports.DeleteVpcPeeringConnectionOutput = {}));
var DeregisterGameServerInput;
(function (DeregisterGameServerInput) {
    /**
     * @internal
     */
    DeregisterGameServerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterGameServerInput = exports.DeregisterGameServerInput || (exports.DeregisterGameServerInput = {}));
var DescribeAliasInput;
(function (DescribeAliasInput) {
    /**
     * @internal
     */
    DescribeAliasInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAliasInput = exports.DescribeAliasInput || (exports.DescribeAliasInput = {}));
var DescribeAliasOutput;
(function (DescribeAliasOutput) {
    /**
     * @internal
     */
    DescribeAliasOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAliasOutput = exports.DescribeAliasOutput || (exports.DescribeAliasOutput = {}));
var DescribeBuildInput;
(function (DescribeBuildInput) {
    /**
     * @internal
     */
    DescribeBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBuildInput = exports.DescribeBuildInput || (exports.DescribeBuildInput = {}));
var DescribeBuildOutput;
(function (DescribeBuildOutput) {
    /**
     * @internal
     */
    DescribeBuildOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBuildOutput = exports.DescribeBuildOutput || (exports.DescribeBuildOutput = {}));
var DescribeEC2InstanceLimitsInput;
(function (DescribeEC2InstanceLimitsInput) {
    /**
     * @internal
     */
    DescribeEC2InstanceLimitsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEC2InstanceLimitsInput = exports.DescribeEC2InstanceLimitsInput || (exports.DescribeEC2InstanceLimitsInput = {}));
var EC2InstanceLimit;
(function (EC2InstanceLimit) {
    /**
     * @internal
     */
    EC2InstanceLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2InstanceLimit = exports.EC2InstanceLimit || (exports.EC2InstanceLimit = {}));
var DescribeEC2InstanceLimitsOutput;
(function (DescribeEC2InstanceLimitsOutput) {
    /**
     * @internal
     */
    DescribeEC2InstanceLimitsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEC2InstanceLimitsOutput = exports.DescribeEC2InstanceLimitsOutput || (exports.DescribeEC2InstanceLimitsOutput = {}));
var DescribeFleetAttributesInput;
(function (DescribeFleetAttributesInput) {
    /**
     * @internal
     */
    DescribeFleetAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetAttributesInput = exports.DescribeFleetAttributesInput || (exports.DescribeFleetAttributesInput = {}));
var DescribeFleetAttributesOutput;
(function (DescribeFleetAttributesOutput) {
    /**
     * @internal
     */
    DescribeFleetAttributesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetAttributesOutput = exports.DescribeFleetAttributesOutput || (exports.DescribeFleetAttributesOutput = {}));
var DescribeFleetCapacityInput;
(function (DescribeFleetCapacityInput) {
    /**
     * @internal
     */
    DescribeFleetCapacityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetCapacityInput = exports.DescribeFleetCapacityInput || (exports.DescribeFleetCapacityInput = {}));
var EC2InstanceCounts;
(function (EC2InstanceCounts) {
    /**
     * @internal
     */
    EC2InstanceCounts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2InstanceCounts = exports.EC2InstanceCounts || (exports.EC2InstanceCounts = {}));
var FleetCapacity;
(function (FleetCapacity) {
    /**
     * @internal
     */
    FleetCapacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetCapacity = exports.FleetCapacity || (exports.FleetCapacity = {}));
var DescribeFleetCapacityOutput;
(function (DescribeFleetCapacityOutput) {
    /**
     * @internal
     */
    DescribeFleetCapacityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetCapacityOutput = exports.DescribeFleetCapacityOutput || (exports.DescribeFleetCapacityOutput = {}));
var DescribeFleetEventsInput;
(function (DescribeFleetEventsInput) {
    /**
     * @internal
     */
    DescribeFleetEventsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetEventsInput = exports.DescribeFleetEventsInput || (exports.DescribeFleetEventsInput = {}));
var EventCode;
(function (EventCode) {
    EventCode["FLEET_ACTIVATION_FAILED"] = "FLEET_ACTIVATION_FAILED";
    EventCode["FLEET_ACTIVATION_FAILED_NO_INSTANCES"] = "FLEET_ACTIVATION_FAILED_NO_INSTANCES";
    EventCode["FLEET_BINARY_DOWNLOAD_FAILED"] = "FLEET_BINARY_DOWNLOAD_FAILED";
    EventCode["FLEET_CREATED"] = "FLEET_CREATED";
    EventCode["FLEET_CREATION_EXTRACTING_BUILD"] = "FLEET_CREATION_EXTRACTING_BUILD";
    EventCode["FLEET_CREATION_RUNNING_INSTALLER"] = "FLEET_CREATION_RUNNING_INSTALLER";
    EventCode["FLEET_CREATION_VALIDATING_RUNTIME_CONFIG"] = "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG";
    EventCode["FLEET_DELETED"] = "FLEET_DELETED";
    EventCode["FLEET_INITIALIZATION_FAILED"] = "FLEET_INITIALIZATION_FAILED";
    EventCode["FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED"] = "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED";
    EventCode["FLEET_SCALING_EVENT"] = "FLEET_SCALING_EVENT";
    EventCode["FLEET_STATE_ACTIVATING"] = "FLEET_STATE_ACTIVATING";
    EventCode["FLEET_STATE_ACTIVE"] = "FLEET_STATE_ACTIVE";
    EventCode["FLEET_STATE_BUILDING"] = "FLEET_STATE_BUILDING";
    EventCode["FLEET_STATE_DOWNLOADING"] = "FLEET_STATE_DOWNLOADING";
    EventCode["FLEET_STATE_ERROR"] = "FLEET_STATE_ERROR";
    EventCode["FLEET_STATE_VALIDATING"] = "FLEET_STATE_VALIDATING";
    EventCode["FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE"] = "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE";
    EventCode["FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND"] = "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND";
    EventCode["FLEET_VALIDATION_TIMED_OUT"] = "FLEET_VALIDATION_TIMED_OUT";
    EventCode["FLEET_VPC_PEERING_DELETED"] = "FLEET_VPC_PEERING_DELETED";
    EventCode["FLEET_VPC_PEERING_FAILED"] = "FLEET_VPC_PEERING_FAILED";
    EventCode["FLEET_VPC_PEERING_SUCCEEDED"] = "FLEET_VPC_PEERING_SUCCEEDED";
    EventCode["GAME_SESSION_ACTIVATION_TIMEOUT"] = "GAME_SESSION_ACTIVATION_TIMEOUT";
    EventCode["GENERIC_EVENT"] = "GENERIC_EVENT";
    EventCode["INSTANCE_INTERRUPTED"] = "INSTANCE_INTERRUPTED";
    EventCode["SERVER_PROCESS_CRASHED"] = "SERVER_PROCESS_CRASHED";
    EventCode["SERVER_PROCESS_FORCE_TERMINATED"] = "SERVER_PROCESS_FORCE_TERMINATED";
    EventCode["SERVER_PROCESS_INVALID_PATH"] = "SERVER_PROCESS_INVALID_PATH";
    EventCode["SERVER_PROCESS_PROCESS_EXIT_TIMEOUT"] = "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT";
    EventCode["SERVER_PROCESS_PROCESS_READY_TIMEOUT"] = "SERVER_PROCESS_PROCESS_READY_TIMEOUT";
    EventCode["SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT"] = "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT";
    EventCode["SERVER_PROCESS_TERMINATED_UNHEALTHY"] = "SERVER_PROCESS_TERMINATED_UNHEALTHY";
})(EventCode = exports.EventCode || (exports.EventCode = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var DescribeFleetEventsOutput;
(function (DescribeFleetEventsOutput) {
    /**
     * @internal
     */
    DescribeFleetEventsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetEventsOutput = exports.DescribeFleetEventsOutput || (exports.DescribeFleetEventsOutput = {}));
var DescribeFleetLocationAttributesInput;
(function (DescribeFleetLocationAttributesInput) {
    /**
     * @internal
     */
    DescribeFleetLocationAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetLocationAttributesInput = exports.DescribeFleetLocationAttributesInput || (exports.DescribeFleetLocationAttributesInput = {}));
var LocationUpdateStatus;
(function (LocationUpdateStatus) {
    LocationUpdateStatus["PENDING_UPDATE"] = "PENDING_UPDATE";
})(LocationUpdateStatus = exports.LocationUpdateStatus || (exports.LocationUpdateStatus = {}));
var LocationAttributes;
(function (LocationAttributes) {
    /**
     * @internal
     */
    LocationAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocationAttributes = exports.LocationAttributes || (exports.LocationAttributes = {}));
var DescribeFleetLocationAttributesOutput;
(function (DescribeFleetLocationAttributesOutput) {
    /**
     * @internal
     */
    DescribeFleetLocationAttributesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetLocationAttributesOutput = exports.DescribeFleetLocationAttributesOutput || (exports.DescribeFleetLocationAttributesOutput = {}));
var DescribeFleetLocationCapacityInput;
(function (DescribeFleetLocationCapacityInput) {
    /**
     * @internal
     */
    DescribeFleetLocationCapacityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetLocationCapacityInput = exports.DescribeFleetLocationCapacityInput || (exports.DescribeFleetLocationCapacityInput = {}));
var DescribeFleetLocationCapacityOutput;
(function (DescribeFleetLocationCapacityOutput) {
    /**
     * @internal
     */
    DescribeFleetLocationCapacityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetLocationCapacityOutput = exports.DescribeFleetLocationCapacityOutput || (exports.DescribeFleetLocationCapacityOutput = {}));
var DescribeFleetLocationUtilizationInput;
(function (DescribeFleetLocationUtilizationInput) {
    /**
     * @internal
     */
    DescribeFleetLocationUtilizationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetLocationUtilizationInput = exports.DescribeFleetLocationUtilizationInput || (exports.DescribeFleetLocationUtilizationInput = {}));
var FleetUtilization;
(function (FleetUtilization) {
    /**
     * @internal
     */
    FleetUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FleetUtilization = exports.FleetUtilization || (exports.FleetUtilization = {}));
var DescribeFleetLocationUtilizationOutput;
(function (DescribeFleetLocationUtilizationOutput) {
    /**
     * @internal
     */
    DescribeFleetLocationUtilizationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetLocationUtilizationOutput = exports.DescribeFleetLocationUtilizationOutput || (exports.DescribeFleetLocationUtilizationOutput = {}));
var DescribeFleetPortSettingsInput;
(function (DescribeFleetPortSettingsInput) {
    /**
     * @internal
     */
    DescribeFleetPortSettingsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetPortSettingsInput = exports.DescribeFleetPortSettingsInput || (exports.DescribeFleetPortSettingsInput = {}));
var DescribeFleetPortSettingsOutput;
(function (DescribeFleetPortSettingsOutput) {
    /**
     * @internal
     */
    DescribeFleetPortSettingsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetPortSettingsOutput = exports.DescribeFleetPortSettingsOutput || (exports.DescribeFleetPortSettingsOutput = {}));
var DescribeFleetUtilizationInput;
(function (DescribeFleetUtilizationInput) {
    /**
     * @internal
     */
    DescribeFleetUtilizationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetUtilizationInput = exports.DescribeFleetUtilizationInput || (exports.DescribeFleetUtilizationInput = {}));
var DescribeFleetUtilizationOutput;
(function (DescribeFleetUtilizationOutput) {
    /**
     * @internal
     */
    DescribeFleetUtilizationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetUtilizationOutput = exports.DescribeFleetUtilizationOutput || (exports.DescribeFleetUtilizationOutput = {}));
var DescribeGameServerInput;
(function (DescribeGameServerInput) {
    /**
     * @internal
     */
    DescribeGameServerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameServerInput = exports.DescribeGameServerInput || (exports.DescribeGameServerInput = {}));
var DescribeGameServerOutput;
(function (DescribeGameServerOutput) {
    /**
     * @internal
     */
    DescribeGameServerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameServerOutput = exports.DescribeGameServerOutput || (exports.DescribeGameServerOutput = {}));
var DescribeGameServerGroupInput;
(function (DescribeGameServerGroupInput) {
    /**
     * @internal
     */
    DescribeGameServerGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameServerGroupInput = exports.DescribeGameServerGroupInput || (exports.DescribeGameServerGroupInput = {}));
var DescribeGameServerGroupOutput;
(function (DescribeGameServerGroupOutput) {
    /**
     * @internal
     */
    DescribeGameServerGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameServerGroupOutput = exports.DescribeGameServerGroupOutput || (exports.DescribeGameServerGroupOutput = {}));
var DescribeGameServerInstancesInput;
(function (DescribeGameServerInstancesInput) {
    /**
     * @internal
     */
    DescribeGameServerInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameServerInstancesInput = exports.DescribeGameServerInstancesInput || (exports.DescribeGameServerInstancesInput = {}));
var GameServerInstanceStatus;
(function (GameServerInstanceStatus) {
    GameServerInstanceStatus["ACTIVE"] = "ACTIVE";
    GameServerInstanceStatus["DRAINING"] = "DRAINING";
    GameServerInstanceStatus["SPOT_TERMINATING"] = "SPOT_TERMINATING";
})(GameServerInstanceStatus = exports.GameServerInstanceStatus || (exports.GameServerInstanceStatus = {}));
var GameServerInstance;
(function (GameServerInstance) {
    /**
     * @internal
     */
    GameServerInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameServerInstance = exports.GameServerInstance || (exports.GameServerInstance = {}));
var DescribeGameServerInstancesOutput;
(function (DescribeGameServerInstancesOutput) {
    /**
     * @internal
     */
    DescribeGameServerInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameServerInstancesOutput = exports.DescribeGameServerInstancesOutput || (exports.DescribeGameServerInstancesOutput = {}));
var DescribeGameSessionDetailsInput;
(function (DescribeGameSessionDetailsInput) {
    /**
     * @internal
     */
    DescribeGameSessionDetailsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionDetailsInput = exports.DescribeGameSessionDetailsInput || (exports.DescribeGameSessionDetailsInput = {}));
var GameSessionDetail;
(function (GameSessionDetail) {
    /**
     * @internal
     */
    GameSessionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSessionDetail = exports.GameSessionDetail || (exports.GameSessionDetail = {}));
var DescribeGameSessionDetailsOutput;
(function (DescribeGameSessionDetailsOutput) {
    /**
     * @internal
     */
    DescribeGameSessionDetailsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionDetailsOutput = exports.DescribeGameSessionDetailsOutput || (exports.DescribeGameSessionDetailsOutput = {}));
var DescribeGameSessionPlacementInput;
(function (DescribeGameSessionPlacementInput) {
    /**
     * @internal
     */
    DescribeGameSessionPlacementInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionPlacementInput = exports.DescribeGameSessionPlacementInput || (exports.DescribeGameSessionPlacementInput = {}));
var PlacedPlayerSession;
(function (PlacedPlayerSession) {
    /**
     * @internal
     */
    PlacedPlayerSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacedPlayerSession = exports.PlacedPlayerSession || (exports.PlacedPlayerSession = {}));
var PlayerLatency;
(function (PlayerLatency) {
    /**
     * @internal
     */
    PlayerLatency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlayerLatency = exports.PlayerLatency || (exports.PlayerLatency = {}));
var GameSessionPlacementState;
(function (GameSessionPlacementState) {
    GameSessionPlacementState["CANCELLED"] = "CANCELLED";
    GameSessionPlacementState["FAILED"] = "FAILED";
    GameSessionPlacementState["FULFILLED"] = "FULFILLED";
    GameSessionPlacementState["PENDING"] = "PENDING";
    GameSessionPlacementState["TIMED_OUT"] = "TIMED_OUT";
})(GameSessionPlacementState = exports.GameSessionPlacementState || (exports.GameSessionPlacementState = {}));
var GameSessionPlacement;
(function (GameSessionPlacement) {
    /**
     * @internal
     */
    GameSessionPlacement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSessionPlacement = exports.GameSessionPlacement || (exports.GameSessionPlacement = {}));
var DescribeGameSessionPlacementOutput;
(function (DescribeGameSessionPlacementOutput) {
    /**
     * @internal
     */
    DescribeGameSessionPlacementOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionPlacementOutput = exports.DescribeGameSessionPlacementOutput || (exports.DescribeGameSessionPlacementOutput = {}));
var DescribeGameSessionQueuesInput;
(function (DescribeGameSessionQueuesInput) {
    /**
     * @internal
     */
    DescribeGameSessionQueuesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionQueuesInput = exports.DescribeGameSessionQueuesInput || (exports.DescribeGameSessionQueuesInput = {}));
var DescribeGameSessionQueuesOutput;
(function (DescribeGameSessionQueuesOutput) {
    /**
     * @internal
     */
    DescribeGameSessionQueuesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionQueuesOutput = exports.DescribeGameSessionQueuesOutput || (exports.DescribeGameSessionQueuesOutput = {}));
var DescribeGameSessionsInput;
(function (DescribeGameSessionsInput) {
    /**
     * @internal
     */
    DescribeGameSessionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionsInput = exports.DescribeGameSessionsInput || (exports.DescribeGameSessionsInput = {}));
var DescribeGameSessionsOutput;
(function (DescribeGameSessionsOutput) {
    /**
     * @internal
     */
    DescribeGameSessionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGameSessionsOutput = exports.DescribeGameSessionsOutput || (exports.DescribeGameSessionsOutput = {}));
var DescribeInstancesInput;
(function (DescribeInstancesInput) {
    /**
     * @internal
     */
    DescribeInstancesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesInput = exports.DescribeInstancesInput || (exports.DescribeInstancesInput = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["ACTIVE"] = "ACTIVE";
    InstanceStatus["PENDING"] = "PENDING";
    InstanceStatus["TERMINATING"] = "TERMINATING";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var DescribeInstancesOutput;
(function (DescribeInstancesOutput) {
    /**
     * @internal
     */
    DescribeInstancesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesOutput = exports.DescribeInstancesOutput || (exports.DescribeInstancesOutput = {}));
var DescribeMatchmakingInput;
(function (DescribeMatchmakingInput) {
    /**
     * @internal
     */
    DescribeMatchmakingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMatchmakingInput = exports.DescribeMatchmakingInput || (exports.DescribeMatchmakingInput = {}));
var MatchedPlayerSession;
(function (MatchedPlayerSession) {
    /**
     * @internal
     */
    MatchedPlayerSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchedPlayerSession = exports.MatchedPlayerSession || (exports.MatchedPlayerSession = {}));
var GameSessionConnectionInfo;
(function (GameSessionConnectionInfo) {
    /**
     * @internal
     */
    GameSessionConnectionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GameSessionConnectionInfo = exports.GameSessionConnectionInfo || (exports.GameSessionConnectionInfo = {}));
var Player;
(function (Player) {
    /**
     * @internal
     */
    Player.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Player = exports.Player || (exports.Player = {}));
var MatchmakingTicket;
(function (MatchmakingTicket) {
    /**
     * @internal
     */
    MatchmakingTicket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchmakingTicket = exports.MatchmakingTicket || (exports.MatchmakingTicket = {}));
var DescribeMatchmakingOutput;
(function (DescribeMatchmakingOutput) {
    /**
     * @internal
     */
    DescribeMatchmakingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMatchmakingOutput = exports.DescribeMatchmakingOutput || (exports.DescribeMatchmakingOutput = {}));
var DescribeMatchmakingConfigurationsInput;
(function (DescribeMatchmakingConfigurationsInput) {
    /**
     * @internal
     */
    DescribeMatchmakingConfigurationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMatchmakingConfigurationsInput = exports.DescribeMatchmakingConfigurationsInput || (exports.DescribeMatchmakingConfigurationsInput = {}));
var DescribeMatchmakingConfigurationsOutput;
(function (DescribeMatchmakingConfigurationsOutput) {
    /**
     * @internal
     */
    DescribeMatchmakingConfigurationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMatchmakingConfigurationsOutput = exports.DescribeMatchmakingConfigurationsOutput || (exports.DescribeMatchmakingConfigurationsOutput = {}));
var DescribeMatchmakingRuleSetsInput;
(function (DescribeMatchmakingRuleSetsInput) {
    /**
     * @internal
     */
    DescribeMatchmakingRuleSetsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMatchmakingRuleSetsInput = exports.DescribeMatchmakingRuleSetsInput || (exports.DescribeMatchmakingRuleSetsInput = {}));
var DescribeMatchmakingRuleSetsOutput;
(function (DescribeMatchmakingRuleSetsOutput) {
    /**
     * @internal
     */
    DescribeMatchmakingRuleSetsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMatchmakingRuleSetsOutput = exports.DescribeMatchmakingRuleSetsOutput || (exports.DescribeMatchmakingRuleSetsOutput = {}));
var DescribePlayerSessionsInput;
(function (DescribePlayerSessionsInput) {
    /**
     * @internal
     */
    DescribePlayerSessionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlayerSessionsInput = exports.DescribePlayerSessionsInput || (exports.DescribePlayerSessionsInput = {}));
var DescribePlayerSessionsOutput;
(function (DescribePlayerSessionsOutput) {
    /**
     * @internal
     */
    DescribePlayerSessionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlayerSessionsOutput = exports.DescribePlayerSessionsOutput || (exports.DescribePlayerSessionsOutput = {}));
var DescribeRuntimeConfigurationInput;
(function (DescribeRuntimeConfigurationInput) {
    /**
     * @internal
     */
    DescribeRuntimeConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuntimeConfigurationInput = exports.DescribeRuntimeConfigurationInput || (exports.DescribeRuntimeConfigurationInput = {}));
var DescribeRuntimeConfigurationOutput;
(function (DescribeRuntimeConfigurationOutput) {
    /**
     * @internal
     */
    DescribeRuntimeConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuntimeConfigurationOutput = exports.DescribeRuntimeConfigurationOutput || (exports.DescribeRuntimeConfigurationOutput = {}));
var ScalingStatusType;
(function (ScalingStatusType) {
    ScalingStatusType["ACTIVE"] = "ACTIVE";
    ScalingStatusType["DELETED"] = "DELETED";
    ScalingStatusType["DELETE_REQUESTED"] = "DELETE_REQUESTED";
    ScalingStatusType["DELETING"] = "DELETING";
    ScalingStatusType["ERROR"] = "ERROR";
    ScalingStatusType["UPDATE_REQUESTED"] = "UPDATE_REQUESTED";
    ScalingStatusType["UPDATING"] = "UPDATING";
})(ScalingStatusType = exports.ScalingStatusType || (exports.ScalingStatusType = {}));
var DescribeScalingPoliciesInput;
(function (DescribeScalingPoliciesInput) {
    /**
     * @internal
     */
    DescribeScalingPoliciesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScalingPoliciesInput = exports.DescribeScalingPoliciesInput || (exports.DescribeScalingPoliciesInput = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["RuleBased"] = "RuleBased";
    PolicyType["TargetBased"] = "TargetBased";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var ScalingAdjustmentType;
(function (ScalingAdjustmentType) {
    ScalingAdjustmentType["ChangeInCapacity"] = "ChangeInCapacity";
    ScalingAdjustmentType["ExactCapacity"] = "ExactCapacity";
    ScalingAdjustmentType["PercentChangeInCapacity"] = "PercentChangeInCapacity";
})(ScalingAdjustmentType = exports.ScalingAdjustmentType || (exports.ScalingAdjustmentType = {}));
var TargetConfiguration;
(function (TargetConfiguration) {
    /**
     * @internal
     */
    TargetConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetConfiguration = exports.TargetConfiguration || (exports.TargetConfiguration = {}));
var ScalingPolicy;
(function (ScalingPolicy) {
    /**
     * @internal
     */
    ScalingPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScalingPolicy = exports.ScalingPolicy || (exports.ScalingPolicy = {}));
var DescribeScalingPoliciesOutput;
(function (DescribeScalingPoliciesOutput) {
    /**
     * @internal
     */
    DescribeScalingPoliciesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScalingPoliciesOutput = exports.DescribeScalingPoliciesOutput || (exports.DescribeScalingPoliciesOutput = {}));
var DescribeScriptInput;
(function (DescribeScriptInput) {
    /**
     * @internal
     */
    DescribeScriptInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScriptInput = exports.DescribeScriptInput || (exports.DescribeScriptInput = {}));
var DescribeScriptOutput;
(function (DescribeScriptOutput) {
    /**
     * @internal
     */
    DescribeScriptOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeScriptOutput = exports.DescribeScriptOutput || (exports.DescribeScriptOutput = {}));
var DescribeVpcPeeringAuthorizationsInput;
(function (DescribeVpcPeeringAuthorizationsInput) {
    /**
     * @internal
     */
    DescribeVpcPeeringAuthorizationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcPeeringAuthorizationsInput = exports.DescribeVpcPeeringAuthorizationsInput || (exports.DescribeVpcPeeringAuthorizationsInput = {}));
var DescribeVpcPeeringAuthorizationsOutput;
(function (DescribeVpcPeeringAuthorizationsOutput) {
    /**
     * @internal
     */
    DescribeVpcPeeringAuthorizationsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcPeeringAuthorizationsOutput = exports.DescribeVpcPeeringAuthorizationsOutput || (exports.DescribeVpcPeeringAuthorizationsOutput = {}));
var DescribeVpcPeeringConnectionsInput;
(function (DescribeVpcPeeringConnectionsInput) {
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcPeeringConnectionsInput = exports.DescribeVpcPeeringConnectionsInput || (exports.DescribeVpcPeeringConnectionsInput = {}));
var VpcPeeringConnectionStatus;
(function (VpcPeeringConnectionStatus) {
    /**
     * @internal
     */
    VpcPeeringConnectionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringConnectionStatus = exports.VpcPeeringConnectionStatus || (exports.VpcPeeringConnectionStatus = {}));
var VpcPeeringConnection;
(function (VpcPeeringConnection) {
    /**
     * @internal
     */
    VpcPeeringConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcPeeringConnection = exports.VpcPeeringConnection || (exports.VpcPeeringConnection = {}));
var DescribeVpcPeeringConnectionsOutput;
(function (DescribeVpcPeeringConnectionsOutput) {
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVpcPeeringConnectionsOutput = exports.DescribeVpcPeeringConnectionsOutput || (exports.DescribeVpcPeeringConnectionsOutput = {}));
var DesiredPlayerSession;
(function (DesiredPlayerSession) {
    /**
     * @internal
     */
    DesiredPlayerSession.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DesiredPlayerSession = exports.DesiredPlayerSession || (exports.DesiredPlayerSession = {}));
var GetGameSessionLogUrlInput;
(function (GetGameSessionLogUrlInput) {
    /**
     * @internal
     */
    GetGameSessionLogUrlInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGameSessionLogUrlInput = exports.GetGameSessionLogUrlInput || (exports.GetGameSessionLogUrlInput = {}));
var GetGameSessionLogUrlOutput;
(function (GetGameSessionLogUrlOutput) {
    /**
     * @internal
     */
    GetGameSessionLogUrlOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGameSessionLogUrlOutput = exports.GetGameSessionLogUrlOutput || (exports.GetGameSessionLogUrlOutput = {}));
var GetInstanceAccessInput;
(function (GetInstanceAccessInput) {
    /**
     * @internal
     */
    GetInstanceAccessInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceAccessInput = exports.GetInstanceAccessInput || (exports.GetInstanceAccessInput = {}));
var InstanceCredentials;
(function (InstanceCredentials) {
    /**
     * @internal
     */
    InstanceCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceCredentials = exports.InstanceCredentials || (exports.InstanceCredentials = {}));
var InstanceAccess;
(function (InstanceAccess) {
    /**
     * @internal
     */
    InstanceAccess.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Credentials && { Credentials: smithy_client_1.SENSITIVE_STRING }),
    });
})(InstanceAccess = exports.InstanceAccess || (exports.InstanceAccess = {}));
var GetInstanceAccessOutput;
(function (GetInstanceAccessOutput) {
    /**
     * @internal
     */
    GetInstanceAccessOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstanceAccess && { InstanceAccess: InstanceAccess.filterSensitiveLog(obj.InstanceAccess) }),
    });
})(GetInstanceAccessOutput = exports.GetInstanceAccessOutput || (exports.GetInstanceAccessOutput = {}));
var ListAliasesInput;
(function (ListAliasesInput) {
    /**
     * @internal
     */
    ListAliasesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAliasesInput = exports.ListAliasesInput || (exports.ListAliasesInput = {}));
var ListAliasesOutput;
(function (ListAliasesOutput) {
    /**
     * @internal
     */
    ListAliasesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAliasesOutput = exports.ListAliasesOutput || (exports.ListAliasesOutput = {}));
var ListBuildsInput;
(function (ListBuildsInput) {
    /**
     * @internal
     */
    ListBuildsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildsInput = exports.ListBuildsInput || (exports.ListBuildsInput = {}));
var ListBuildsOutput;
(function (ListBuildsOutput) {
    /**
     * @internal
     */
    ListBuildsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBuildsOutput = exports.ListBuildsOutput || (exports.ListBuildsOutput = {}));
var ListFleetsInput;
(function (ListFleetsInput) {
    /**
     * @internal
     */
    ListFleetsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFleetsInput = exports.ListFleetsInput || (exports.ListFleetsInput = {}));
var ListFleetsOutput;
(function (ListFleetsOutput) {
    /**
     * @internal
     */
    ListFleetsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFleetsOutput = exports.ListFleetsOutput || (exports.ListFleetsOutput = {}));
var ListGameServerGroupsInput;
(function (ListGameServerGroupsInput) {
    /**
     * @internal
     */
    ListGameServerGroupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGameServerGroupsInput = exports.ListGameServerGroupsInput || (exports.ListGameServerGroupsInput = {}));
var ListGameServerGroupsOutput;
(function (ListGameServerGroupsOutput) {
    /**
     * @internal
     */
    ListGameServerGroupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGameServerGroupsOutput = exports.ListGameServerGroupsOutput || (exports.ListGameServerGroupsOutput = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListGameServersInput;
(function (ListGameServersInput) {
    /**
     * @internal
     */
    ListGameServersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGameServersInput = exports.ListGameServersInput || (exports.ListGameServersInput = {}));
var ListGameServersOutput;
(function (ListGameServersOutput) {
    /**
     * @internal
     */
    ListGameServersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGameServersOutput = exports.ListGameServersOutput || (exports.ListGameServersOutput = {}));
var ListScriptsInput;
(function (ListScriptsInput) {
    /**
     * @internal
     */
    ListScriptsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListScriptsInput = exports.ListScriptsInput || (exports.ListScriptsInput = {}));
var ListScriptsOutput;
(function (ListScriptsOutput) {
    /**
     * @internal
     */
    ListScriptsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListScriptsOutput = exports.ListScriptsOutput || (exports.ListScriptsOutput = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var PutScalingPolicyInput;
(function (PutScalingPolicyInput) {
    /**
     * @internal
     */
    PutScalingPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutScalingPolicyInput = exports.PutScalingPolicyInput || (exports.PutScalingPolicyInput = {}));
var PutScalingPolicyOutput;
(function (PutScalingPolicyOutput) {
    /**
     * @internal
     */
    PutScalingPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutScalingPolicyOutput = exports.PutScalingPolicyOutput || (exports.PutScalingPolicyOutput = {}));
var RegisterGameServerInput;
(function (RegisterGameServerInput) {
    /**
     * @internal
     */
    RegisterGameServerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterGameServerInput = exports.RegisterGameServerInput || (exports.RegisterGameServerInput = {}));
var RegisterGameServerOutput;
(function (RegisterGameServerOutput) {
    /**
     * @internal
     */
    RegisterGameServerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterGameServerOutput = exports.RegisterGameServerOutput || (exports.RegisterGameServerOutput = {}));
var RequestUploadCredentialsInput;
(function (RequestUploadCredentialsInput) {
    /**
     * @internal
     */
    RequestUploadCredentialsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestUploadCredentialsInput = exports.RequestUploadCredentialsInput || (exports.RequestUploadCredentialsInput = {}));
var RequestUploadCredentialsOutput;
(function (RequestUploadCredentialsOutput) {
    /**
     * @internal
     */
    RequestUploadCredentialsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UploadCredentials && { UploadCredentials: smithy_client_1.SENSITIVE_STRING }),
    });
})(RequestUploadCredentialsOutput = exports.RequestUploadCredentialsOutput || (exports.RequestUploadCredentialsOutput = {}));
var ResolveAliasInput;
(function (ResolveAliasInput) {
    /**
     * @internal
     */
    ResolveAliasInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolveAliasInput = exports.ResolveAliasInput || (exports.ResolveAliasInput = {}));
var ResolveAliasOutput;
(function (ResolveAliasOutput) {
    /**
     * @internal
     */
    ResolveAliasOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolveAliasOutput = exports.ResolveAliasOutput || (exports.ResolveAliasOutput = {}));
var ResumeGameServerGroupInput;
(function (ResumeGameServerGroupInput) {
    /**
     * @internal
     */
    ResumeGameServerGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeGameServerGroupInput = exports.ResumeGameServerGroupInput || (exports.ResumeGameServerGroupInput = {}));
var ResumeGameServerGroupOutput;
(function (ResumeGameServerGroupOutput) {
    /**
     * @internal
     */
    ResumeGameServerGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeGameServerGroupOutput = exports.ResumeGameServerGroupOutput || (exports.ResumeGameServerGroupOutput = {}));
var SearchGameSessionsInput;
(function (SearchGameSessionsInput) {
    /**
     * @internal
     */
    SearchGameSessionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchGameSessionsInput = exports.SearchGameSessionsInput || (exports.SearchGameSessionsInput = {}));
var SearchGameSessionsOutput;
(function (SearchGameSessionsOutput) {
    /**
     * @internal
     */
    SearchGameSessionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchGameSessionsOutput = exports.SearchGameSessionsOutput || (exports.SearchGameSessionsOutput = {}));
var StartFleetActionsInput;
(function (StartFleetActionsInput) {
    /**
     * @internal
     */
    StartFleetActionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFleetActionsInput = exports.StartFleetActionsInput || (exports.StartFleetActionsInput = {}));
var StartFleetActionsOutput;
(function (StartFleetActionsOutput) {
    /**
     * @internal
     */
    StartFleetActionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartFleetActionsOutput = exports.StartFleetActionsOutput || (exports.StartFleetActionsOutput = {}));
var StartGameSessionPlacementInput;
(function (StartGameSessionPlacementInput) {
    /**
     * @internal
     */
    StartGameSessionPlacementInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartGameSessionPlacementInput = exports.StartGameSessionPlacementInput || (exports.StartGameSessionPlacementInput = {}));
var StartGameSessionPlacementOutput;
(function (StartGameSessionPlacementOutput) {
    /**
     * @internal
     */
    StartGameSessionPlacementOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartGameSessionPlacementOutput = exports.StartGameSessionPlacementOutput || (exports.StartGameSessionPlacementOutput = {}));
var StartMatchBackfillInput;
(function (StartMatchBackfillInput) {
    /**
     * @internal
     */
    StartMatchBackfillInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMatchBackfillInput = exports.StartMatchBackfillInput || (exports.StartMatchBackfillInput = {}));
var StartMatchBackfillOutput;
(function (StartMatchBackfillOutput) {
    /**
     * @internal
     */
    StartMatchBackfillOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMatchBackfillOutput = exports.StartMatchBackfillOutput || (exports.StartMatchBackfillOutput = {}));
var StartMatchmakingInput;
(function (StartMatchmakingInput) {
    /**
     * @internal
     */
    StartMatchmakingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMatchmakingInput = exports.StartMatchmakingInput || (exports.StartMatchmakingInput = {}));
var StartMatchmakingOutput;
(function (StartMatchmakingOutput) {
    /**
     * @internal
     */
    StartMatchmakingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMatchmakingOutput = exports.StartMatchmakingOutput || (exports.StartMatchmakingOutput = {}));
var StopFleetActionsInput;
(function (StopFleetActionsInput) {
    /**
     * @internal
     */
    StopFleetActionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopFleetActionsInput = exports.StopFleetActionsInput || (exports.StopFleetActionsInput = {}));
var StopFleetActionsOutput;
(function (StopFleetActionsOutput) {
    /**
     * @internal
     */
    StopFleetActionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopFleetActionsOutput = exports.StopFleetActionsOutput || (exports.StopFleetActionsOutput = {}));
var StopGameSessionPlacementInput;
(function (StopGameSessionPlacementInput) {
    /**
     * @internal
     */
    StopGameSessionPlacementInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopGameSessionPlacementInput = exports.StopGameSessionPlacementInput || (exports.StopGameSessionPlacementInput = {}));
var StopGameSessionPlacementOutput;
(function (StopGameSessionPlacementOutput) {
    /**
     * @internal
     */
    StopGameSessionPlacementOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopGameSessionPlacementOutput = exports.StopGameSessionPlacementOutput || (exports.StopGameSessionPlacementOutput = {}));
var StopMatchmakingInput;
(function (StopMatchmakingInput) {
    /**
     * @internal
     */
    StopMatchmakingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMatchmakingInput = exports.StopMatchmakingInput || (exports.StopMatchmakingInput = {}));
var StopMatchmakingOutput;
(function (StopMatchmakingOutput) {
    /**
     * @internal
     */
    StopMatchmakingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMatchmakingOutput = exports.StopMatchmakingOutput || (exports.StopMatchmakingOutput = {}));
var SuspendGameServerGroupInput;
(function (SuspendGameServerGroupInput) {
    /**
     * @internal
     */
    SuspendGameServerGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuspendGameServerGroupInput = exports.SuspendGameServerGroupInput || (exports.SuspendGameServerGroupInput = {}));
var SuspendGameServerGroupOutput;
(function (SuspendGameServerGroupOutput) {
    /**
     * @internal
     */
    SuspendGameServerGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuspendGameServerGroupOutput = exports.SuspendGameServerGroupOutput || (exports.SuspendGameServerGroupOutput = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateAliasInput;
(function (UpdateAliasInput) {
    /**
     * @internal
     */
    UpdateAliasInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAliasInput = exports.UpdateAliasInput || (exports.UpdateAliasInput = {}));
var UpdateAliasOutput;
(function (UpdateAliasOutput) {
    /**
     * @internal
     */
    UpdateAliasOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAliasOutput = exports.UpdateAliasOutput || (exports.UpdateAliasOutput = {}));
var UpdateBuildInput;
(function (UpdateBuildInput) {
    /**
     * @internal
     */
    UpdateBuildInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBuildInput = exports.UpdateBuildInput || (exports.UpdateBuildInput = {}));
var UpdateBuildOutput;
(function (UpdateBuildOutput) {
    /**
     * @internal
     */
    UpdateBuildOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBuildOutput = exports.UpdateBuildOutput || (exports.UpdateBuildOutput = {}));
var UpdateFleetAttributesInput;
(function (UpdateFleetAttributesInput) {
    /**
     * @internal
     */
    UpdateFleetAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetAttributesInput = exports.UpdateFleetAttributesInput || (exports.UpdateFleetAttributesInput = {}));
var UpdateFleetAttributesOutput;
(function (UpdateFleetAttributesOutput) {
    /**
     * @internal
     */
    UpdateFleetAttributesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetAttributesOutput = exports.UpdateFleetAttributesOutput || (exports.UpdateFleetAttributesOutput = {}));
var UpdateFleetCapacityInput;
(function (UpdateFleetCapacityInput) {
    /**
     * @internal
     */
    UpdateFleetCapacityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetCapacityInput = exports.UpdateFleetCapacityInput || (exports.UpdateFleetCapacityInput = {}));
var UpdateFleetCapacityOutput;
(function (UpdateFleetCapacityOutput) {
    /**
     * @internal
     */
    UpdateFleetCapacityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetCapacityOutput = exports.UpdateFleetCapacityOutput || (exports.UpdateFleetCapacityOutput = {}));
var UpdateFleetPortSettingsInput;
(function (UpdateFleetPortSettingsInput) {
    /**
     * @internal
     */
    UpdateFleetPortSettingsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetPortSettingsInput = exports.UpdateFleetPortSettingsInput || (exports.UpdateFleetPortSettingsInput = {}));
var UpdateFleetPortSettingsOutput;
(function (UpdateFleetPortSettingsOutput) {
    /**
     * @internal
     */
    UpdateFleetPortSettingsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFleetPortSettingsOutput = exports.UpdateFleetPortSettingsOutput || (exports.UpdateFleetPortSettingsOutput = {}));
var GameServerHealthCheck;
(function (GameServerHealthCheck) {
    GameServerHealthCheck["HEALTHY"] = "HEALTHY";
})(GameServerHealthCheck = exports.GameServerHealthCheck || (exports.GameServerHealthCheck = {}));
var UpdateGameServerInput;
(function (UpdateGameServerInput) {
    /**
     * @internal
     */
    UpdateGameServerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameServerInput = exports.UpdateGameServerInput || (exports.UpdateGameServerInput = {}));
var UpdateGameServerOutput;
(function (UpdateGameServerOutput) {
    /**
     * @internal
     */
    UpdateGameServerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameServerOutput = exports.UpdateGameServerOutput || (exports.UpdateGameServerOutput = {}));
var UpdateGameServerGroupInput;
(function (UpdateGameServerGroupInput) {
    /**
     * @internal
     */
    UpdateGameServerGroupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameServerGroupInput = exports.UpdateGameServerGroupInput || (exports.UpdateGameServerGroupInput = {}));
var UpdateGameServerGroupOutput;
(function (UpdateGameServerGroupOutput) {
    /**
     * @internal
     */
    UpdateGameServerGroupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameServerGroupOutput = exports.UpdateGameServerGroupOutput || (exports.UpdateGameServerGroupOutput = {}));
var UpdateGameSessionInput;
(function (UpdateGameSessionInput) {
    /**
     * @internal
     */
    UpdateGameSessionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameSessionInput = exports.UpdateGameSessionInput || (exports.UpdateGameSessionInput = {}));
var UpdateGameSessionOutput;
(function (UpdateGameSessionOutput) {
    /**
     * @internal
     */
    UpdateGameSessionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameSessionOutput = exports.UpdateGameSessionOutput || (exports.UpdateGameSessionOutput = {}));
var UpdateGameSessionQueueInput;
(function (UpdateGameSessionQueueInput) {
    /**
     * @internal
     */
    UpdateGameSessionQueueInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameSessionQueueInput = exports.UpdateGameSessionQueueInput || (exports.UpdateGameSessionQueueInput = {}));
var UpdateGameSessionQueueOutput;
(function (UpdateGameSessionQueueOutput) {
    /**
     * @internal
     */
    UpdateGameSessionQueueOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGameSessionQueueOutput = exports.UpdateGameSessionQueueOutput || (exports.UpdateGameSessionQueueOutput = {}));
var UpdateMatchmakingConfigurationInput;
(function (UpdateMatchmakingConfigurationInput) {
    /**
     * @internal
     */
    UpdateMatchmakingConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMatchmakingConfigurationInput = exports.UpdateMatchmakingConfigurationInput || (exports.UpdateMatchmakingConfigurationInput = {}));
var UpdateMatchmakingConfigurationOutput;
(function (UpdateMatchmakingConfigurationOutput) {
    /**
     * @internal
     */
    UpdateMatchmakingConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMatchmakingConfigurationOutput = exports.UpdateMatchmakingConfigurationOutput || (exports.UpdateMatchmakingConfigurationOutput = {}));
var UpdateRuntimeConfigurationInput;
(function (UpdateRuntimeConfigurationInput) {
    /**
     * @internal
     */
    UpdateRuntimeConfigurationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuntimeConfigurationInput = exports.UpdateRuntimeConfigurationInput || (exports.UpdateRuntimeConfigurationInput = {}));
var UpdateRuntimeConfigurationOutput;
(function (UpdateRuntimeConfigurationOutput) {
    /**
     * @internal
     */
    UpdateRuntimeConfigurationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuntimeConfigurationOutput = exports.UpdateRuntimeConfigurationOutput || (exports.UpdateRuntimeConfigurationOutput = {}));
var UpdateScriptInput;
(function (UpdateScriptInput) {
    /**
     * @internal
     */
    UpdateScriptInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScriptInput = exports.UpdateScriptInput || (exports.UpdateScriptInput = {}));
var UpdateScriptOutput;
(function (UpdateScriptOutput) {
    /**
     * @internal
     */
    UpdateScriptOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateScriptOutput = exports.UpdateScriptOutput || (exports.UpdateScriptOutput = {}));
var ValidateMatchmakingRuleSetInput;
(function (ValidateMatchmakingRuleSetInput) {
    /**
     * @internal
     */
    ValidateMatchmakingRuleSetInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateMatchmakingRuleSetInput = exports.ValidateMatchmakingRuleSetInput || (exports.ValidateMatchmakingRuleSetInput = {}));
var ValidateMatchmakingRuleSetOutput;
(function (ValidateMatchmakingRuleSetOutput) {
    /**
     * @internal
     */
    ValidateMatchmakingRuleSetOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidateMatchmakingRuleSetOutput = exports.ValidateMatchmakingRuleSetOutput || (exports.ValidateMatchmakingRuleSetOutput = {}));
//# sourceMappingURL=models_0.js.map