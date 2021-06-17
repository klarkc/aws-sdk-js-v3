import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AcceptMatchInput;
(function (AcceptMatchInput) {
    /**
     * @internal
     */
    AcceptMatchInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptMatchInput || (AcceptMatchInput = {}));
export var AcceptMatchOutput;
(function (AcceptMatchOutput) {
    /**
     * @internal
     */
    AcceptMatchOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptMatchOutput || (AcceptMatchOutput = {}));
export var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceException || (InternalServiceException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var UnsupportedRegionException;
(function (UnsupportedRegionException) {
    /**
     * @internal
     */
    UnsupportedRegionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedRegionException || (UnsupportedRegionException = {}));
export var RoutingStrategyType;
(function (RoutingStrategyType) {
    RoutingStrategyType["SIMPLE"] = "SIMPLE";
    RoutingStrategyType["TERMINAL"] = "TERMINAL";
})(RoutingStrategyType || (RoutingStrategyType = {}));
export var RoutingStrategy;
(function (RoutingStrategy) {
    /**
     * @internal
     */
    RoutingStrategy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RoutingStrategy || (RoutingStrategy = {}));
export var Alias;
(function (Alias) {
    /**
     * @internal
     */
    Alias.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alias || (Alias = {}));
export var AttributeValue;
(function (AttributeValue) {
    /**
     * @internal
     */
    AttributeValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttributeValue || (AttributeValue = {}));
export var AwsCredentials;
(function (AwsCredentials) {
    /**
     * @internal
     */
    AwsCredentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsCredentials || (AwsCredentials = {}));
export var BackfillMode;
(function (BackfillMode) {
    BackfillMode["AUTOMATIC"] = "AUTOMATIC";
    BackfillMode["MANUAL"] = "MANUAL";
})(BackfillMode || (BackfillMode = {}));
export var BalancingStrategy;
(function (BalancingStrategy) {
    BalancingStrategy["ON_DEMAND_ONLY"] = "ON_DEMAND_ONLY";
    BalancingStrategy["SPOT_ONLY"] = "SPOT_ONLY";
    BalancingStrategy["SPOT_PREFERRED"] = "SPOT_PREFERRED";
})(BalancingStrategy || (BalancingStrategy = {}));
export var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["AMAZON_LINUX"] = "AMAZON_LINUX";
    OperatingSystem["AMAZON_LINUX_2"] = "AMAZON_LINUX_2";
    OperatingSystem["WINDOWS_2012"] = "WINDOWS_2012";
})(OperatingSystem || (OperatingSystem = {}));
export var BuildStatus;
(function (BuildStatus) {
    BuildStatus["FAILED"] = "FAILED";
    BuildStatus["INITIALIZED"] = "INITIALIZED";
    BuildStatus["READY"] = "READY";
})(BuildStatus || (BuildStatus = {}));
export var Build;
(function (Build) {
    /**
     * @internal
     */
    Build.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Build || (Build = {}));
export var CertificateType;
(function (CertificateType) {
    CertificateType["Disabled"] = "DISABLED";
    CertificateType["Generated"] = "GENERATED";
})(CertificateType || (CertificateType = {}));
export var CertificateConfiguration;
(function (CertificateConfiguration) {
    /**
     * @internal
     */
    CertificateConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateConfiguration || (CertificateConfiguration = {}));
export var ClaimGameServerInput;
(function (ClaimGameServerInput) {
    /**
     * @internal
     */
    ClaimGameServerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClaimGameServerInput || (ClaimGameServerInput = {}));
export var GameServerClaimStatus;
(function (GameServerClaimStatus) {
    GameServerClaimStatus["CLAIMED"] = "CLAIMED";
})(GameServerClaimStatus || (GameServerClaimStatus = {}));
export var GameServerUtilizationStatus;
(function (GameServerUtilizationStatus) {
    GameServerUtilizationStatus["AVAILABLE"] = "AVAILABLE";
    GameServerUtilizationStatus["UTILIZED"] = "UTILIZED";
})(GameServerUtilizationStatus || (GameServerUtilizationStatus = {}));
export var GameServer;
(function (GameServer) {
    /**
     * @internal
     */
    GameServer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameServer || (GameServer = {}));
export var ClaimGameServerOutput;
(function (ClaimGameServerOutput) {
    /**
     * @internal
     */
    ClaimGameServerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClaimGameServerOutput || (ClaimGameServerOutput = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var OutOfCapacityException;
(function (OutOfCapacityException) {
    /**
     * @internal
     */
    OutOfCapacityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutOfCapacityException || (OutOfCapacityException = {}));
export var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedException || (UnauthorizedException = {}));
export var ComparisonOperatorType;
(function (ComparisonOperatorType) {
    ComparisonOperatorType["GreaterThanOrEqualToThreshold"] = "GreaterThanOrEqualToThreshold";
    ComparisonOperatorType["GreaterThanThreshold"] = "GreaterThanThreshold";
    ComparisonOperatorType["LessThanOrEqualToThreshold"] = "LessThanOrEqualToThreshold";
    ComparisonOperatorType["LessThanThreshold"] = "LessThanThreshold";
})(ComparisonOperatorType || (ComparisonOperatorType = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateAliasInput;
(function (CreateAliasInput) {
    /**
     * @internal
     */
    CreateAliasInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAliasInput || (CreateAliasInput = {}));
export var CreateAliasOutput;
(function (CreateAliasOutput) {
    /**
     * @internal
     */
    CreateAliasOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAliasOutput || (CreateAliasOutput = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var TaggingFailedException;
(function (TaggingFailedException) {
    /**
     * @internal
     */
    TaggingFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaggingFailedException || (TaggingFailedException = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var CreateBuildInput;
(function (CreateBuildInput) {
    /**
     * @internal
     */
    CreateBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBuildInput || (CreateBuildInput = {}));
export var CreateBuildOutput;
(function (CreateBuildOutput) {
    /**
     * @internal
     */
    CreateBuildOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }))); };
})(CreateBuildOutput || (CreateBuildOutput = {}));
export var IpProtocol;
(function (IpProtocol) {
    IpProtocol["TCP"] = "TCP";
    IpProtocol["UDP"] = "UDP";
})(IpProtocol || (IpProtocol = {}));
export var IpPermission;
(function (IpPermission) {
    /**
     * @internal
     */
    IpPermission.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpPermission || (IpPermission = {}));
export var FleetType;
(function (FleetType) {
    FleetType["OnDemand"] = "ON_DEMAND";
    FleetType["Spot"] = "SPOT";
})(FleetType || (FleetType = {}));
export var LocationConfiguration;
(function (LocationConfiguration) {
    /**
     * @internal
     */
    LocationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LocationConfiguration || (LocationConfiguration = {}));
export var ProtectionPolicy;
(function (ProtectionPolicy) {
    ProtectionPolicy["FullProtection"] = "FullProtection";
    ProtectionPolicy["NoProtection"] = "NoProtection";
})(ProtectionPolicy || (ProtectionPolicy = {}));
export var ResourceCreationLimitPolicy;
(function (ResourceCreationLimitPolicy) {
    /**
     * @internal
     */
    ResourceCreationLimitPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceCreationLimitPolicy || (ResourceCreationLimitPolicy = {}));
export var ServerProcess;
(function (ServerProcess) {
    /**
     * @internal
     */
    ServerProcess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerProcess || (ServerProcess = {}));
export var RuntimeConfiguration;
(function (RuntimeConfiguration) {
    /**
     * @internal
     */
    RuntimeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuntimeConfiguration || (RuntimeConfiguration = {}));
export var CreateFleetInput;
(function (CreateFleetInput) {
    /**
     * @internal
     */
    CreateFleetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFleetInput || (CreateFleetInput = {}));
export var FleetStatus;
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
})(FleetStatus || (FleetStatus = {}));
export var FleetAction;
(function (FleetAction) {
    FleetAction["AutoScaling"] = "AUTO_SCALING";
})(FleetAction || (FleetAction = {}));
export var FleetAttributes;
(function (FleetAttributes) {
    /**
     * @internal
     */
    FleetAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FleetAttributes || (FleetAttributes = {}));
export var LocationState;
(function (LocationState) {
    /**
     * @internal
     */
    LocationState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LocationState || (LocationState = {}));
export var CreateFleetOutput;
(function (CreateFleetOutput) {
    /**
     * @internal
     */
    CreateFleetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFleetOutput || (CreateFleetOutput = {}));
export var CreateFleetLocationsInput;
(function (CreateFleetLocationsInput) {
    /**
     * @internal
     */
    CreateFleetLocationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFleetLocationsInput || (CreateFleetLocationsInput = {}));
export var CreateFleetLocationsOutput;
(function (CreateFleetLocationsOutput) {
    /**
     * @internal
     */
    CreateFleetLocationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFleetLocationsOutput || (CreateFleetLocationsOutput = {}));
export var InvalidFleetStatusException;
(function (InvalidFleetStatusException) {
    /**
     * @internal
     */
    InvalidFleetStatusException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidFleetStatusException || (InvalidFleetStatusException = {}));
export var TargetTrackingConfiguration;
(function (TargetTrackingConfiguration) {
    /**
     * @internal
     */
    TargetTrackingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetTrackingConfiguration || (TargetTrackingConfiguration = {}));
export var GameServerGroupAutoScalingPolicy;
(function (GameServerGroupAutoScalingPolicy) {
    /**
     * @internal
     */
    GameServerGroupAutoScalingPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameServerGroupAutoScalingPolicy || (GameServerGroupAutoScalingPolicy = {}));
export var GameServerProtectionPolicy;
(function (GameServerProtectionPolicy) {
    GameServerProtectionPolicy["FULL_PROTECTION"] = "FULL_PROTECTION";
    GameServerProtectionPolicy["NO_PROTECTION"] = "NO_PROTECTION";
})(GameServerProtectionPolicy || (GameServerProtectionPolicy = {}));
export var InstanceDefinition;
(function (InstanceDefinition) {
    /**
     * @internal
     */
    InstanceDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceDefinition || (InstanceDefinition = {}));
export var LaunchTemplateSpecification;
(function (LaunchTemplateSpecification) {
    /**
     * @internal
     */
    LaunchTemplateSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchTemplateSpecification || (LaunchTemplateSpecification = {}));
export var CreateGameServerGroupInput;
(function (CreateGameServerGroupInput) {
    /**
     * @internal
     */
    CreateGameServerGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGameServerGroupInput || (CreateGameServerGroupInput = {}));
export var GameServerGroupStatus;
(function (GameServerGroupStatus) {
    GameServerGroupStatus["ACTIVATING"] = "ACTIVATING";
    GameServerGroupStatus["ACTIVE"] = "ACTIVE";
    GameServerGroupStatus["DELETED"] = "DELETED";
    GameServerGroupStatus["DELETE_SCHEDULED"] = "DELETE_SCHEDULED";
    GameServerGroupStatus["DELETING"] = "DELETING";
    GameServerGroupStatus["ERROR"] = "ERROR";
    GameServerGroupStatus["NEW"] = "NEW";
})(GameServerGroupStatus || (GameServerGroupStatus = {}));
export var GameServerGroupAction;
(function (GameServerGroupAction) {
    GameServerGroupAction["REPLACE_INSTANCE_TYPES"] = "REPLACE_INSTANCE_TYPES";
})(GameServerGroupAction || (GameServerGroupAction = {}));
export var GameServerGroup;
(function (GameServerGroup) {
    /**
     * @internal
     */
    GameServerGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameServerGroup || (GameServerGroup = {}));
export var CreateGameServerGroupOutput;
(function (CreateGameServerGroupOutput) {
    /**
     * @internal
     */
    CreateGameServerGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGameServerGroupOutput || (CreateGameServerGroupOutput = {}));
export var GameProperty;
(function (GameProperty) {
    /**
     * @internal
     */
    GameProperty.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameProperty || (GameProperty = {}));
export var CreateGameSessionInput;
(function (CreateGameSessionInput) {
    /**
     * @internal
     */
    CreateGameSessionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGameSessionInput || (CreateGameSessionInput = {}));
export var PlayerSessionCreationPolicy;
(function (PlayerSessionCreationPolicy) {
    PlayerSessionCreationPolicy["ACCEPT_ALL"] = "ACCEPT_ALL";
    PlayerSessionCreationPolicy["DENY_ALL"] = "DENY_ALL";
})(PlayerSessionCreationPolicy || (PlayerSessionCreationPolicy = {}));
export var GameSessionStatus;
(function (GameSessionStatus) {
    GameSessionStatus["ACTIVATING"] = "ACTIVATING";
    GameSessionStatus["ACTIVE"] = "ACTIVE";
    GameSessionStatus["ERROR"] = "ERROR";
    GameSessionStatus["TERMINATED"] = "TERMINATED";
    GameSessionStatus["TERMINATING"] = "TERMINATING";
})(GameSessionStatus || (GameSessionStatus = {}));
export var GameSessionStatusReason;
(function (GameSessionStatusReason) {
    GameSessionStatusReason["INTERRUPTED"] = "INTERRUPTED";
})(GameSessionStatusReason || (GameSessionStatusReason = {}));
export var GameSession;
(function (GameSession) {
    /**
     * @internal
     */
    GameSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSession || (GameSession = {}));
export var CreateGameSessionOutput;
(function (CreateGameSessionOutput) {
    /**
     * @internal
     */
    CreateGameSessionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGameSessionOutput || (CreateGameSessionOutput = {}));
export var FleetCapacityExceededException;
(function (FleetCapacityExceededException) {
    /**
     * @internal
     */
    FleetCapacityExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FleetCapacityExceededException || (FleetCapacityExceededException = {}));
export var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotentParameterMismatchException || (IdempotentParameterMismatchException = {}));
export var TerminalRoutingStrategyException;
(function (TerminalRoutingStrategyException) {
    /**
     * @internal
     */
    TerminalRoutingStrategyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminalRoutingStrategyException || (TerminalRoutingStrategyException = {}));
export var GameSessionQueueDestination;
(function (GameSessionQueueDestination) {
    /**
     * @internal
     */
    GameSessionQueueDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSessionQueueDestination || (GameSessionQueueDestination = {}));
export var FilterConfiguration;
(function (FilterConfiguration) {
    /**
     * @internal
     */
    FilterConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FilterConfiguration || (FilterConfiguration = {}));
export var PlayerLatencyPolicy;
(function (PlayerLatencyPolicy) {
    /**
     * @internal
     */
    PlayerLatencyPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlayerLatencyPolicy || (PlayerLatencyPolicy = {}));
export var PriorityType;
(function (PriorityType) {
    PriorityType["COST"] = "COST";
    PriorityType["DESTINATION"] = "DESTINATION";
    PriorityType["LATENCY"] = "LATENCY";
    PriorityType["LOCATION"] = "LOCATION";
})(PriorityType || (PriorityType = {}));
export var PriorityConfiguration;
(function (PriorityConfiguration) {
    /**
     * @internal
     */
    PriorityConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PriorityConfiguration || (PriorityConfiguration = {}));
export var CreateGameSessionQueueInput;
(function (CreateGameSessionQueueInput) {
    /**
     * @internal
     */
    CreateGameSessionQueueInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGameSessionQueueInput || (CreateGameSessionQueueInput = {}));
export var GameSessionQueue;
(function (GameSessionQueue) {
    /**
     * @internal
     */
    GameSessionQueue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSessionQueue || (GameSessionQueue = {}));
export var CreateGameSessionQueueOutput;
(function (CreateGameSessionQueueOutput) {
    /**
     * @internal
     */
    CreateGameSessionQueueOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGameSessionQueueOutput || (CreateGameSessionQueueOutput = {}));
export var FlexMatchMode;
(function (FlexMatchMode) {
    FlexMatchMode["STANDALONE"] = "STANDALONE";
    FlexMatchMode["WITH_QUEUE"] = "WITH_QUEUE";
})(FlexMatchMode || (FlexMatchMode = {}));
export var CreateMatchmakingConfigurationInput;
(function (CreateMatchmakingConfigurationInput) {
    /**
     * @internal
     */
    CreateMatchmakingConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMatchmakingConfigurationInput || (CreateMatchmakingConfigurationInput = {}));
export var MatchmakingConfiguration;
(function (MatchmakingConfiguration) {
    /**
     * @internal
     */
    MatchmakingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakingConfiguration || (MatchmakingConfiguration = {}));
export var CreateMatchmakingConfigurationOutput;
(function (CreateMatchmakingConfigurationOutput) {
    /**
     * @internal
     */
    CreateMatchmakingConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMatchmakingConfigurationOutput || (CreateMatchmakingConfigurationOutput = {}));
export var CreateMatchmakingRuleSetInput;
(function (CreateMatchmakingRuleSetInput) {
    /**
     * @internal
     */
    CreateMatchmakingRuleSetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMatchmakingRuleSetInput || (CreateMatchmakingRuleSetInput = {}));
export var MatchmakingRuleSet;
(function (MatchmakingRuleSet) {
    /**
     * @internal
     */
    MatchmakingRuleSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakingRuleSet || (MatchmakingRuleSet = {}));
export var CreateMatchmakingRuleSetOutput;
(function (CreateMatchmakingRuleSetOutput) {
    /**
     * @internal
     */
    CreateMatchmakingRuleSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMatchmakingRuleSetOutput || (CreateMatchmakingRuleSetOutput = {}));
export var CreatePlayerSessionInput;
(function (CreatePlayerSessionInput) {
    /**
     * @internal
     */
    CreatePlayerSessionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePlayerSessionInput || (CreatePlayerSessionInput = {}));
export var PlayerSessionStatus;
(function (PlayerSessionStatus) {
    PlayerSessionStatus["ACTIVE"] = "ACTIVE";
    PlayerSessionStatus["COMPLETED"] = "COMPLETED";
    PlayerSessionStatus["RESERVED"] = "RESERVED";
    PlayerSessionStatus["TIMEDOUT"] = "TIMEDOUT";
})(PlayerSessionStatus || (PlayerSessionStatus = {}));
export var PlayerSession;
(function (PlayerSession) {
    /**
     * @internal
     */
    PlayerSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlayerSession || (PlayerSession = {}));
export var CreatePlayerSessionOutput;
(function (CreatePlayerSessionOutput) {
    /**
     * @internal
     */
    CreatePlayerSessionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePlayerSessionOutput || (CreatePlayerSessionOutput = {}));
export var GameSessionFullException;
(function (GameSessionFullException) {
    /**
     * @internal
     */
    GameSessionFullException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSessionFullException || (GameSessionFullException = {}));
export var InvalidGameSessionStatusException;
(function (InvalidGameSessionStatusException) {
    /**
     * @internal
     */
    InvalidGameSessionStatusException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidGameSessionStatusException || (InvalidGameSessionStatusException = {}));
export var CreatePlayerSessionsInput;
(function (CreatePlayerSessionsInput) {
    /**
     * @internal
     */
    CreatePlayerSessionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePlayerSessionsInput || (CreatePlayerSessionsInput = {}));
export var CreatePlayerSessionsOutput;
(function (CreatePlayerSessionsOutput) {
    /**
     * @internal
     */
    CreatePlayerSessionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePlayerSessionsOutput || (CreatePlayerSessionsOutput = {}));
export var CreateScriptInput;
(function (CreateScriptInput) {
    /**
     * @internal
     */
    CreateScriptInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateScriptInput || (CreateScriptInput = {}));
export var Script;
(function (Script) {
    /**
     * @internal
     */
    Script.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Script || (Script = {}));
export var CreateScriptOutput;
(function (CreateScriptOutput) {
    /**
     * @internal
     */
    CreateScriptOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateScriptOutput || (CreateScriptOutput = {}));
export var CreateVpcPeeringAuthorizationInput;
(function (CreateVpcPeeringAuthorizationInput) {
    /**
     * @internal
     */
    CreateVpcPeeringAuthorizationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVpcPeeringAuthorizationInput || (CreateVpcPeeringAuthorizationInput = {}));
export var VpcPeeringAuthorization;
(function (VpcPeeringAuthorization) {
    /**
     * @internal
     */
    VpcPeeringAuthorization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcPeeringAuthorization || (VpcPeeringAuthorization = {}));
export var CreateVpcPeeringAuthorizationOutput;
(function (CreateVpcPeeringAuthorizationOutput) {
    /**
     * @internal
     */
    CreateVpcPeeringAuthorizationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVpcPeeringAuthorizationOutput || (CreateVpcPeeringAuthorizationOutput = {}));
export var CreateVpcPeeringConnectionInput;
(function (CreateVpcPeeringConnectionInput) {
    /**
     * @internal
     */
    CreateVpcPeeringConnectionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVpcPeeringConnectionInput || (CreateVpcPeeringConnectionInput = {}));
export var CreateVpcPeeringConnectionOutput;
(function (CreateVpcPeeringConnectionOutput) {
    /**
     * @internal
     */
    CreateVpcPeeringConnectionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVpcPeeringConnectionOutput || (CreateVpcPeeringConnectionOutput = {}));
export var DeleteAliasInput;
(function (DeleteAliasInput) {
    /**
     * @internal
     */
    DeleteAliasInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAliasInput || (DeleteAliasInput = {}));
export var DeleteBuildInput;
(function (DeleteBuildInput) {
    /**
     * @internal
     */
    DeleteBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBuildInput || (DeleteBuildInput = {}));
export var DeleteFleetInput;
(function (DeleteFleetInput) {
    /**
     * @internal
     */
    DeleteFleetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFleetInput || (DeleteFleetInput = {}));
export var DeleteFleetLocationsInput;
(function (DeleteFleetLocationsInput) {
    /**
     * @internal
     */
    DeleteFleetLocationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFleetLocationsInput || (DeleteFleetLocationsInput = {}));
export var DeleteFleetLocationsOutput;
(function (DeleteFleetLocationsOutput) {
    /**
     * @internal
     */
    DeleteFleetLocationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFleetLocationsOutput || (DeleteFleetLocationsOutput = {}));
export var GameServerGroupDeleteOption;
(function (GameServerGroupDeleteOption) {
    GameServerGroupDeleteOption["FORCE_DELETE"] = "FORCE_DELETE";
    GameServerGroupDeleteOption["RETAIN"] = "RETAIN";
    GameServerGroupDeleteOption["SAFE_DELETE"] = "SAFE_DELETE";
})(GameServerGroupDeleteOption || (GameServerGroupDeleteOption = {}));
export var DeleteGameServerGroupInput;
(function (DeleteGameServerGroupInput) {
    /**
     * @internal
     */
    DeleteGameServerGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGameServerGroupInput || (DeleteGameServerGroupInput = {}));
export var DeleteGameServerGroupOutput;
(function (DeleteGameServerGroupOutput) {
    /**
     * @internal
     */
    DeleteGameServerGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGameServerGroupOutput || (DeleteGameServerGroupOutput = {}));
export var DeleteGameSessionQueueInput;
(function (DeleteGameSessionQueueInput) {
    /**
     * @internal
     */
    DeleteGameSessionQueueInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGameSessionQueueInput || (DeleteGameSessionQueueInput = {}));
export var DeleteGameSessionQueueOutput;
(function (DeleteGameSessionQueueOutput) {
    /**
     * @internal
     */
    DeleteGameSessionQueueOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGameSessionQueueOutput || (DeleteGameSessionQueueOutput = {}));
export var DeleteMatchmakingConfigurationInput;
(function (DeleteMatchmakingConfigurationInput) {
    /**
     * @internal
     */
    DeleteMatchmakingConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMatchmakingConfigurationInput || (DeleteMatchmakingConfigurationInput = {}));
export var DeleteMatchmakingConfigurationOutput;
(function (DeleteMatchmakingConfigurationOutput) {
    /**
     * @internal
     */
    DeleteMatchmakingConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMatchmakingConfigurationOutput || (DeleteMatchmakingConfigurationOutput = {}));
export var DeleteMatchmakingRuleSetInput;
(function (DeleteMatchmakingRuleSetInput) {
    /**
     * @internal
     */
    DeleteMatchmakingRuleSetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMatchmakingRuleSetInput || (DeleteMatchmakingRuleSetInput = {}));
export var DeleteMatchmakingRuleSetOutput;
(function (DeleteMatchmakingRuleSetOutput) {
    /**
     * @internal
     */
    DeleteMatchmakingRuleSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMatchmakingRuleSetOutput || (DeleteMatchmakingRuleSetOutput = {}));
export var DeleteScalingPolicyInput;
(function (DeleteScalingPolicyInput) {
    /**
     * @internal
     */
    DeleteScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScalingPolicyInput || (DeleteScalingPolicyInput = {}));
export var DeleteScriptInput;
(function (DeleteScriptInput) {
    /**
     * @internal
     */
    DeleteScriptInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteScriptInput || (DeleteScriptInput = {}));
export var DeleteVpcPeeringAuthorizationInput;
(function (DeleteVpcPeeringAuthorizationInput) {
    /**
     * @internal
     */
    DeleteVpcPeeringAuthorizationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVpcPeeringAuthorizationInput || (DeleteVpcPeeringAuthorizationInput = {}));
export var DeleteVpcPeeringAuthorizationOutput;
(function (DeleteVpcPeeringAuthorizationOutput) {
    /**
     * @internal
     */
    DeleteVpcPeeringAuthorizationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVpcPeeringAuthorizationOutput || (DeleteVpcPeeringAuthorizationOutput = {}));
export var DeleteVpcPeeringConnectionInput;
(function (DeleteVpcPeeringConnectionInput) {
    /**
     * @internal
     */
    DeleteVpcPeeringConnectionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVpcPeeringConnectionInput || (DeleteVpcPeeringConnectionInput = {}));
export var DeleteVpcPeeringConnectionOutput;
(function (DeleteVpcPeeringConnectionOutput) {
    /**
     * @internal
     */
    DeleteVpcPeeringConnectionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVpcPeeringConnectionOutput || (DeleteVpcPeeringConnectionOutput = {}));
export var DeregisterGameServerInput;
(function (DeregisterGameServerInput) {
    /**
     * @internal
     */
    DeregisterGameServerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterGameServerInput || (DeregisterGameServerInput = {}));
export var DescribeAliasInput;
(function (DescribeAliasInput) {
    /**
     * @internal
     */
    DescribeAliasInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAliasInput || (DescribeAliasInput = {}));
export var DescribeAliasOutput;
(function (DescribeAliasOutput) {
    /**
     * @internal
     */
    DescribeAliasOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAliasOutput || (DescribeAliasOutput = {}));
export var DescribeBuildInput;
(function (DescribeBuildInput) {
    /**
     * @internal
     */
    DescribeBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBuildInput || (DescribeBuildInput = {}));
export var DescribeBuildOutput;
(function (DescribeBuildOutput) {
    /**
     * @internal
     */
    DescribeBuildOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBuildOutput || (DescribeBuildOutput = {}));
export var DescribeEC2InstanceLimitsInput;
(function (DescribeEC2InstanceLimitsInput) {
    /**
     * @internal
     */
    DescribeEC2InstanceLimitsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEC2InstanceLimitsInput || (DescribeEC2InstanceLimitsInput = {}));
export var EC2InstanceLimit;
(function (EC2InstanceLimit) {
    /**
     * @internal
     */
    EC2InstanceLimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EC2InstanceLimit || (EC2InstanceLimit = {}));
export var DescribeEC2InstanceLimitsOutput;
(function (DescribeEC2InstanceLimitsOutput) {
    /**
     * @internal
     */
    DescribeEC2InstanceLimitsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEC2InstanceLimitsOutput || (DescribeEC2InstanceLimitsOutput = {}));
export var DescribeFleetAttributesInput;
(function (DescribeFleetAttributesInput) {
    /**
     * @internal
     */
    DescribeFleetAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetAttributesInput || (DescribeFleetAttributesInput = {}));
export var DescribeFleetAttributesOutput;
(function (DescribeFleetAttributesOutput) {
    /**
     * @internal
     */
    DescribeFleetAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetAttributesOutput || (DescribeFleetAttributesOutput = {}));
export var DescribeFleetCapacityInput;
(function (DescribeFleetCapacityInput) {
    /**
     * @internal
     */
    DescribeFleetCapacityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetCapacityInput || (DescribeFleetCapacityInput = {}));
export var EC2InstanceCounts;
(function (EC2InstanceCounts) {
    /**
     * @internal
     */
    EC2InstanceCounts.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EC2InstanceCounts || (EC2InstanceCounts = {}));
export var FleetCapacity;
(function (FleetCapacity) {
    /**
     * @internal
     */
    FleetCapacity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FleetCapacity || (FleetCapacity = {}));
export var DescribeFleetCapacityOutput;
(function (DescribeFleetCapacityOutput) {
    /**
     * @internal
     */
    DescribeFleetCapacityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetCapacityOutput || (DescribeFleetCapacityOutput = {}));
export var DescribeFleetEventsInput;
(function (DescribeFleetEventsInput) {
    /**
     * @internal
     */
    DescribeFleetEventsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetEventsInput || (DescribeFleetEventsInput = {}));
export var EventCode;
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
})(EventCode || (EventCode = {}));
export var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Event || (Event = {}));
export var DescribeFleetEventsOutput;
(function (DescribeFleetEventsOutput) {
    /**
     * @internal
     */
    DescribeFleetEventsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetEventsOutput || (DescribeFleetEventsOutput = {}));
export var DescribeFleetLocationAttributesInput;
(function (DescribeFleetLocationAttributesInput) {
    /**
     * @internal
     */
    DescribeFleetLocationAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetLocationAttributesInput || (DescribeFleetLocationAttributesInput = {}));
export var LocationUpdateStatus;
(function (LocationUpdateStatus) {
    LocationUpdateStatus["PENDING_UPDATE"] = "PENDING_UPDATE";
})(LocationUpdateStatus || (LocationUpdateStatus = {}));
export var LocationAttributes;
(function (LocationAttributes) {
    /**
     * @internal
     */
    LocationAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LocationAttributes || (LocationAttributes = {}));
export var DescribeFleetLocationAttributesOutput;
(function (DescribeFleetLocationAttributesOutput) {
    /**
     * @internal
     */
    DescribeFleetLocationAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetLocationAttributesOutput || (DescribeFleetLocationAttributesOutput = {}));
export var DescribeFleetLocationCapacityInput;
(function (DescribeFleetLocationCapacityInput) {
    /**
     * @internal
     */
    DescribeFleetLocationCapacityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetLocationCapacityInput || (DescribeFleetLocationCapacityInput = {}));
export var DescribeFleetLocationCapacityOutput;
(function (DescribeFleetLocationCapacityOutput) {
    /**
     * @internal
     */
    DescribeFleetLocationCapacityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetLocationCapacityOutput || (DescribeFleetLocationCapacityOutput = {}));
export var DescribeFleetLocationUtilizationInput;
(function (DescribeFleetLocationUtilizationInput) {
    /**
     * @internal
     */
    DescribeFleetLocationUtilizationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetLocationUtilizationInput || (DescribeFleetLocationUtilizationInput = {}));
export var FleetUtilization;
(function (FleetUtilization) {
    /**
     * @internal
     */
    FleetUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FleetUtilization || (FleetUtilization = {}));
export var DescribeFleetLocationUtilizationOutput;
(function (DescribeFleetLocationUtilizationOutput) {
    /**
     * @internal
     */
    DescribeFleetLocationUtilizationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetLocationUtilizationOutput || (DescribeFleetLocationUtilizationOutput = {}));
export var DescribeFleetPortSettingsInput;
(function (DescribeFleetPortSettingsInput) {
    /**
     * @internal
     */
    DescribeFleetPortSettingsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetPortSettingsInput || (DescribeFleetPortSettingsInput = {}));
export var DescribeFleetPortSettingsOutput;
(function (DescribeFleetPortSettingsOutput) {
    /**
     * @internal
     */
    DescribeFleetPortSettingsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetPortSettingsOutput || (DescribeFleetPortSettingsOutput = {}));
export var DescribeFleetUtilizationInput;
(function (DescribeFleetUtilizationInput) {
    /**
     * @internal
     */
    DescribeFleetUtilizationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetUtilizationInput || (DescribeFleetUtilizationInput = {}));
export var DescribeFleetUtilizationOutput;
(function (DescribeFleetUtilizationOutput) {
    /**
     * @internal
     */
    DescribeFleetUtilizationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetUtilizationOutput || (DescribeFleetUtilizationOutput = {}));
export var DescribeGameServerInput;
(function (DescribeGameServerInput) {
    /**
     * @internal
     */
    DescribeGameServerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameServerInput || (DescribeGameServerInput = {}));
export var DescribeGameServerOutput;
(function (DescribeGameServerOutput) {
    /**
     * @internal
     */
    DescribeGameServerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameServerOutput || (DescribeGameServerOutput = {}));
export var DescribeGameServerGroupInput;
(function (DescribeGameServerGroupInput) {
    /**
     * @internal
     */
    DescribeGameServerGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameServerGroupInput || (DescribeGameServerGroupInput = {}));
export var DescribeGameServerGroupOutput;
(function (DescribeGameServerGroupOutput) {
    /**
     * @internal
     */
    DescribeGameServerGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameServerGroupOutput || (DescribeGameServerGroupOutput = {}));
export var DescribeGameServerInstancesInput;
(function (DescribeGameServerInstancesInput) {
    /**
     * @internal
     */
    DescribeGameServerInstancesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameServerInstancesInput || (DescribeGameServerInstancesInput = {}));
export var GameServerInstanceStatus;
(function (GameServerInstanceStatus) {
    GameServerInstanceStatus["ACTIVE"] = "ACTIVE";
    GameServerInstanceStatus["DRAINING"] = "DRAINING";
    GameServerInstanceStatus["SPOT_TERMINATING"] = "SPOT_TERMINATING";
})(GameServerInstanceStatus || (GameServerInstanceStatus = {}));
export var GameServerInstance;
(function (GameServerInstance) {
    /**
     * @internal
     */
    GameServerInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameServerInstance || (GameServerInstance = {}));
export var DescribeGameServerInstancesOutput;
(function (DescribeGameServerInstancesOutput) {
    /**
     * @internal
     */
    DescribeGameServerInstancesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameServerInstancesOutput || (DescribeGameServerInstancesOutput = {}));
export var DescribeGameSessionDetailsInput;
(function (DescribeGameSessionDetailsInput) {
    /**
     * @internal
     */
    DescribeGameSessionDetailsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionDetailsInput || (DescribeGameSessionDetailsInput = {}));
export var GameSessionDetail;
(function (GameSessionDetail) {
    /**
     * @internal
     */
    GameSessionDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSessionDetail || (GameSessionDetail = {}));
export var DescribeGameSessionDetailsOutput;
(function (DescribeGameSessionDetailsOutput) {
    /**
     * @internal
     */
    DescribeGameSessionDetailsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionDetailsOutput || (DescribeGameSessionDetailsOutput = {}));
export var DescribeGameSessionPlacementInput;
(function (DescribeGameSessionPlacementInput) {
    /**
     * @internal
     */
    DescribeGameSessionPlacementInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionPlacementInput || (DescribeGameSessionPlacementInput = {}));
export var PlacedPlayerSession;
(function (PlacedPlayerSession) {
    /**
     * @internal
     */
    PlacedPlayerSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlacedPlayerSession || (PlacedPlayerSession = {}));
export var PlayerLatency;
(function (PlayerLatency) {
    /**
     * @internal
     */
    PlayerLatency.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlayerLatency || (PlayerLatency = {}));
export var GameSessionPlacementState;
(function (GameSessionPlacementState) {
    GameSessionPlacementState["CANCELLED"] = "CANCELLED";
    GameSessionPlacementState["FAILED"] = "FAILED";
    GameSessionPlacementState["FULFILLED"] = "FULFILLED";
    GameSessionPlacementState["PENDING"] = "PENDING";
    GameSessionPlacementState["TIMED_OUT"] = "TIMED_OUT";
})(GameSessionPlacementState || (GameSessionPlacementState = {}));
export var GameSessionPlacement;
(function (GameSessionPlacement) {
    /**
     * @internal
     */
    GameSessionPlacement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSessionPlacement || (GameSessionPlacement = {}));
export var DescribeGameSessionPlacementOutput;
(function (DescribeGameSessionPlacementOutput) {
    /**
     * @internal
     */
    DescribeGameSessionPlacementOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionPlacementOutput || (DescribeGameSessionPlacementOutput = {}));
export var DescribeGameSessionQueuesInput;
(function (DescribeGameSessionQueuesInput) {
    /**
     * @internal
     */
    DescribeGameSessionQueuesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionQueuesInput || (DescribeGameSessionQueuesInput = {}));
export var DescribeGameSessionQueuesOutput;
(function (DescribeGameSessionQueuesOutput) {
    /**
     * @internal
     */
    DescribeGameSessionQueuesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionQueuesOutput || (DescribeGameSessionQueuesOutput = {}));
export var DescribeGameSessionsInput;
(function (DescribeGameSessionsInput) {
    /**
     * @internal
     */
    DescribeGameSessionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionsInput || (DescribeGameSessionsInput = {}));
export var DescribeGameSessionsOutput;
(function (DescribeGameSessionsOutput) {
    /**
     * @internal
     */
    DescribeGameSessionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGameSessionsOutput || (DescribeGameSessionsOutput = {}));
export var DescribeInstancesInput;
(function (DescribeInstancesInput) {
    /**
     * @internal
     */
    DescribeInstancesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstancesInput || (DescribeInstancesInput = {}));
export var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["ACTIVE"] = "ACTIVE";
    InstanceStatus["PENDING"] = "PENDING";
    InstanceStatus["TERMINATING"] = "TERMINATING";
})(InstanceStatus || (InstanceStatus = {}));
export var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Instance || (Instance = {}));
export var DescribeInstancesOutput;
(function (DescribeInstancesOutput) {
    /**
     * @internal
     */
    DescribeInstancesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstancesOutput || (DescribeInstancesOutput = {}));
export var DescribeMatchmakingInput;
(function (DescribeMatchmakingInput) {
    /**
     * @internal
     */
    DescribeMatchmakingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMatchmakingInput || (DescribeMatchmakingInput = {}));
export var MatchedPlayerSession;
(function (MatchedPlayerSession) {
    /**
     * @internal
     */
    MatchedPlayerSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchedPlayerSession || (MatchedPlayerSession = {}));
export var GameSessionConnectionInfo;
(function (GameSessionConnectionInfo) {
    /**
     * @internal
     */
    GameSessionConnectionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GameSessionConnectionInfo || (GameSessionConnectionInfo = {}));
export var Player;
(function (Player) {
    /**
     * @internal
     */
    Player.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Player || (Player = {}));
export var MatchmakingTicket;
(function (MatchmakingTicket) {
    /**
     * @internal
     */
    MatchmakingTicket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchmakingTicket || (MatchmakingTicket = {}));
export var DescribeMatchmakingOutput;
(function (DescribeMatchmakingOutput) {
    /**
     * @internal
     */
    DescribeMatchmakingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMatchmakingOutput || (DescribeMatchmakingOutput = {}));
export var DescribeMatchmakingConfigurationsInput;
(function (DescribeMatchmakingConfigurationsInput) {
    /**
     * @internal
     */
    DescribeMatchmakingConfigurationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMatchmakingConfigurationsInput || (DescribeMatchmakingConfigurationsInput = {}));
export var DescribeMatchmakingConfigurationsOutput;
(function (DescribeMatchmakingConfigurationsOutput) {
    /**
     * @internal
     */
    DescribeMatchmakingConfigurationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMatchmakingConfigurationsOutput || (DescribeMatchmakingConfigurationsOutput = {}));
export var DescribeMatchmakingRuleSetsInput;
(function (DescribeMatchmakingRuleSetsInput) {
    /**
     * @internal
     */
    DescribeMatchmakingRuleSetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMatchmakingRuleSetsInput || (DescribeMatchmakingRuleSetsInput = {}));
export var DescribeMatchmakingRuleSetsOutput;
(function (DescribeMatchmakingRuleSetsOutput) {
    /**
     * @internal
     */
    DescribeMatchmakingRuleSetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMatchmakingRuleSetsOutput || (DescribeMatchmakingRuleSetsOutput = {}));
export var DescribePlayerSessionsInput;
(function (DescribePlayerSessionsInput) {
    /**
     * @internal
     */
    DescribePlayerSessionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePlayerSessionsInput || (DescribePlayerSessionsInput = {}));
export var DescribePlayerSessionsOutput;
(function (DescribePlayerSessionsOutput) {
    /**
     * @internal
     */
    DescribePlayerSessionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePlayerSessionsOutput || (DescribePlayerSessionsOutput = {}));
export var DescribeRuntimeConfigurationInput;
(function (DescribeRuntimeConfigurationInput) {
    /**
     * @internal
     */
    DescribeRuntimeConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRuntimeConfigurationInput || (DescribeRuntimeConfigurationInput = {}));
export var DescribeRuntimeConfigurationOutput;
(function (DescribeRuntimeConfigurationOutput) {
    /**
     * @internal
     */
    DescribeRuntimeConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRuntimeConfigurationOutput || (DescribeRuntimeConfigurationOutput = {}));
export var ScalingStatusType;
(function (ScalingStatusType) {
    ScalingStatusType["ACTIVE"] = "ACTIVE";
    ScalingStatusType["DELETED"] = "DELETED";
    ScalingStatusType["DELETE_REQUESTED"] = "DELETE_REQUESTED";
    ScalingStatusType["DELETING"] = "DELETING";
    ScalingStatusType["ERROR"] = "ERROR";
    ScalingStatusType["UPDATE_REQUESTED"] = "UPDATE_REQUESTED";
    ScalingStatusType["UPDATING"] = "UPDATING";
})(ScalingStatusType || (ScalingStatusType = {}));
export var DescribeScalingPoliciesInput;
(function (DescribeScalingPoliciesInput) {
    /**
     * @internal
     */
    DescribeScalingPoliciesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScalingPoliciesInput || (DescribeScalingPoliciesInput = {}));
export var PolicyType;
(function (PolicyType) {
    PolicyType["RuleBased"] = "RuleBased";
    PolicyType["TargetBased"] = "TargetBased";
})(PolicyType || (PolicyType = {}));
export var ScalingAdjustmentType;
(function (ScalingAdjustmentType) {
    ScalingAdjustmentType["ChangeInCapacity"] = "ChangeInCapacity";
    ScalingAdjustmentType["ExactCapacity"] = "ExactCapacity";
    ScalingAdjustmentType["PercentChangeInCapacity"] = "PercentChangeInCapacity";
})(ScalingAdjustmentType || (ScalingAdjustmentType = {}));
export var TargetConfiguration;
(function (TargetConfiguration) {
    /**
     * @internal
     */
    TargetConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetConfiguration || (TargetConfiguration = {}));
export var ScalingPolicy;
(function (ScalingPolicy) {
    /**
     * @internal
     */
    ScalingPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScalingPolicy || (ScalingPolicy = {}));
export var DescribeScalingPoliciesOutput;
(function (DescribeScalingPoliciesOutput) {
    /**
     * @internal
     */
    DescribeScalingPoliciesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScalingPoliciesOutput || (DescribeScalingPoliciesOutput = {}));
export var DescribeScriptInput;
(function (DescribeScriptInput) {
    /**
     * @internal
     */
    DescribeScriptInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScriptInput || (DescribeScriptInput = {}));
export var DescribeScriptOutput;
(function (DescribeScriptOutput) {
    /**
     * @internal
     */
    DescribeScriptOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeScriptOutput || (DescribeScriptOutput = {}));
export var DescribeVpcPeeringAuthorizationsInput;
(function (DescribeVpcPeeringAuthorizationsInput) {
    /**
     * @internal
     */
    DescribeVpcPeeringAuthorizationsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVpcPeeringAuthorizationsInput || (DescribeVpcPeeringAuthorizationsInput = {}));
export var DescribeVpcPeeringAuthorizationsOutput;
(function (DescribeVpcPeeringAuthorizationsOutput) {
    /**
     * @internal
     */
    DescribeVpcPeeringAuthorizationsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVpcPeeringAuthorizationsOutput || (DescribeVpcPeeringAuthorizationsOutput = {}));
export var DescribeVpcPeeringConnectionsInput;
(function (DescribeVpcPeeringConnectionsInput) {
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVpcPeeringConnectionsInput || (DescribeVpcPeeringConnectionsInput = {}));
export var VpcPeeringConnectionStatus;
(function (VpcPeeringConnectionStatus) {
    /**
     * @internal
     */
    VpcPeeringConnectionStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcPeeringConnectionStatus || (VpcPeeringConnectionStatus = {}));
export var VpcPeeringConnection;
(function (VpcPeeringConnection) {
    /**
     * @internal
     */
    VpcPeeringConnection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcPeeringConnection || (VpcPeeringConnection = {}));
export var DescribeVpcPeeringConnectionsOutput;
(function (DescribeVpcPeeringConnectionsOutput) {
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeVpcPeeringConnectionsOutput || (DescribeVpcPeeringConnectionsOutput = {}));
export var DesiredPlayerSession;
(function (DesiredPlayerSession) {
    /**
     * @internal
     */
    DesiredPlayerSession.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DesiredPlayerSession || (DesiredPlayerSession = {}));
export var GetGameSessionLogUrlInput;
(function (GetGameSessionLogUrlInput) {
    /**
     * @internal
     */
    GetGameSessionLogUrlInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGameSessionLogUrlInput || (GetGameSessionLogUrlInput = {}));
export var GetGameSessionLogUrlOutput;
(function (GetGameSessionLogUrlOutput) {
    /**
     * @internal
     */
    GetGameSessionLogUrlOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGameSessionLogUrlOutput || (GetGameSessionLogUrlOutput = {}));
export var GetInstanceAccessInput;
(function (GetInstanceAccessInput) {
    /**
     * @internal
     */
    GetInstanceAccessInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceAccessInput || (GetInstanceAccessInput = {}));
export var InstanceCredentials;
(function (InstanceCredentials) {
    /**
     * @internal
     */
    InstanceCredentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceCredentials || (InstanceCredentials = {}));
export var InstanceAccess;
(function (InstanceAccess) {
    /**
     * @internal
     */
    InstanceAccess.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Credentials && { Credentials: SENSITIVE_STRING }))); };
})(InstanceAccess || (InstanceAccess = {}));
export var GetInstanceAccessOutput;
(function (GetInstanceAccessOutput) {
    /**
     * @internal
     */
    GetInstanceAccessOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstanceAccess && { InstanceAccess: InstanceAccess.filterSensitiveLog(obj.InstanceAccess) }))); };
})(GetInstanceAccessOutput || (GetInstanceAccessOutput = {}));
export var ListAliasesInput;
(function (ListAliasesInput) {
    /**
     * @internal
     */
    ListAliasesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAliasesInput || (ListAliasesInput = {}));
export var ListAliasesOutput;
(function (ListAliasesOutput) {
    /**
     * @internal
     */
    ListAliasesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAliasesOutput || (ListAliasesOutput = {}));
export var ListBuildsInput;
(function (ListBuildsInput) {
    /**
     * @internal
     */
    ListBuildsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildsInput || (ListBuildsInput = {}));
export var ListBuildsOutput;
(function (ListBuildsOutput) {
    /**
     * @internal
     */
    ListBuildsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListBuildsOutput || (ListBuildsOutput = {}));
export var ListFleetsInput;
(function (ListFleetsInput) {
    /**
     * @internal
     */
    ListFleetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFleetsInput || (ListFleetsInput = {}));
export var ListFleetsOutput;
(function (ListFleetsOutput) {
    /**
     * @internal
     */
    ListFleetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFleetsOutput || (ListFleetsOutput = {}));
export var ListGameServerGroupsInput;
(function (ListGameServerGroupsInput) {
    /**
     * @internal
     */
    ListGameServerGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGameServerGroupsInput || (ListGameServerGroupsInput = {}));
export var ListGameServerGroupsOutput;
(function (ListGameServerGroupsOutput) {
    /**
     * @internal
     */
    ListGameServerGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGameServerGroupsOutput || (ListGameServerGroupsOutput = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder || (SortOrder = {}));
export var ListGameServersInput;
(function (ListGameServersInput) {
    /**
     * @internal
     */
    ListGameServersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGameServersInput || (ListGameServersInput = {}));
export var ListGameServersOutput;
(function (ListGameServersOutput) {
    /**
     * @internal
     */
    ListGameServersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGameServersOutput || (ListGameServersOutput = {}));
export var ListScriptsInput;
(function (ListScriptsInput) {
    /**
     * @internal
     */
    ListScriptsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListScriptsInput || (ListScriptsInput = {}));
export var ListScriptsOutput;
(function (ListScriptsOutput) {
    /**
     * @internal
     */
    ListScriptsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListScriptsOutput || (ListScriptsOutput = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var PutScalingPolicyInput;
(function (PutScalingPolicyInput) {
    /**
     * @internal
     */
    PutScalingPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutScalingPolicyInput || (PutScalingPolicyInput = {}));
export var PutScalingPolicyOutput;
(function (PutScalingPolicyOutput) {
    /**
     * @internal
     */
    PutScalingPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutScalingPolicyOutput || (PutScalingPolicyOutput = {}));
export var RegisterGameServerInput;
(function (RegisterGameServerInput) {
    /**
     * @internal
     */
    RegisterGameServerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterGameServerInput || (RegisterGameServerInput = {}));
export var RegisterGameServerOutput;
(function (RegisterGameServerOutput) {
    /**
     * @internal
     */
    RegisterGameServerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterGameServerOutput || (RegisterGameServerOutput = {}));
export var RequestUploadCredentialsInput;
(function (RequestUploadCredentialsInput) {
    /**
     * @internal
     */
    RequestUploadCredentialsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestUploadCredentialsInput || (RequestUploadCredentialsInput = {}));
export var RequestUploadCredentialsOutput;
(function (RequestUploadCredentialsOutput) {
    /**
     * @internal
     */
    RequestUploadCredentialsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }))); };
})(RequestUploadCredentialsOutput || (RequestUploadCredentialsOutput = {}));
export var ResolveAliasInput;
(function (ResolveAliasInput) {
    /**
     * @internal
     */
    ResolveAliasInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResolveAliasInput || (ResolveAliasInput = {}));
export var ResolveAliasOutput;
(function (ResolveAliasOutput) {
    /**
     * @internal
     */
    ResolveAliasOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResolveAliasOutput || (ResolveAliasOutput = {}));
export var ResumeGameServerGroupInput;
(function (ResumeGameServerGroupInput) {
    /**
     * @internal
     */
    ResumeGameServerGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResumeGameServerGroupInput || (ResumeGameServerGroupInput = {}));
export var ResumeGameServerGroupOutput;
(function (ResumeGameServerGroupOutput) {
    /**
     * @internal
     */
    ResumeGameServerGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResumeGameServerGroupOutput || (ResumeGameServerGroupOutput = {}));
export var SearchGameSessionsInput;
(function (SearchGameSessionsInput) {
    /**
     * @internal
     */
    SearchGameSessionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchGameSessionsInput || (SearchGameSessionsInput = {}));
export var SearchGameSessionsOutput;
(function (SearchGameSessionsOutput) {
    /**
     * @internal
     */
    SearchGameSessionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchGameSessionsOutput || (SearchGameSessionsOutput = {}));
export var StartFleetActionsInput;
(function (StartFleetActionsInput) {
    /**
     * @internal
     */
    StartFleetActionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartFleetActionsInput || (StartFleetActionsInput = {}));
export var StartFleetActionsOutput;
(function (StartFleetActionsOutput) {
    /**
     * @internal
     */
    StartFleetActionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartFleetActionsOutput || (StartFleetActionsOutput = {}));
export var StartGameSessionPlacementInput;
(function (StartGameSessionPlacementInput) {
    /**
     * @internal
     */
    StartGameSessionPlacementInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartGameSessionPlacementInput || (StartGameSessionPlacementInput = {}));
export var StartGameSessionPlacementOutput;
(function (StartGameSessionPlacementOutput) {
    /**
     * @internal
     */
    StartGameSessionPlacementOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartGameSessionPlacementOutput || (StartGameSessionPlacementOutput = {}));
export var StartMatchBackfillInput;
(function (StartMatchBackfillInput) {
    /**
     * @internal
     */
    StartMatchBackfillInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMatchBackfillInput || (StartMatchBackfillInput = {}));
export var StartMatchBackfillOutput;
(function (StartMatchBackfillOutput) {
    /**
     * @internal
     */
    StartMatchBackfillOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMatchBackfillOutput || (StartMatchBackfillOutput = {}));
export var StartMatchmakingInput;
(function (StartMatchmakingInput) {
    /**
     * @internal
     */
    StartMatchmakingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMatchmakingInput || (StartMatchmakingInput = {}));
export var StartMatchmakingOutput;
(function (StartMatchmakingOutput) {
    /**
     * @internal
     */
    StartMatchmakingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMatchmakingOutput || (StartMatchmakingOutput = {}));
export var StopFleetActionsInput;
(function (StopFleetActionsInput) {
    /**
     * @internal
     */
    StopFleetActionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopFleetActionsInput || (StopFleetActionsInput = {}));
export var StopFleetActionsOutput;
(function (StopFleetActionsOutput) {
    /**
     * @internal
     */
    StopFleetActionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopFleetActionsOutput || (StopFleetActionsOutput = {}));
export var StopGameSessionPlacementInput;
(function (StopGameSessionPlacementInput) {
    /**
     * @internal
     */
    StopGameSessionPlacementInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopGameSessionPlacementInput || (StopGameSessionPlacementInput = {}));
export var StopGameSessionPlacementOutput;
(function (StopGameSessionPlacementOutput) {
    /**
     * @internal
     */
    StopGameSessionPlacementOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopGameSessionPlacementOutput || (StopGameSessionPlacementOutput = {}));
export var StopMatchmakingInput;
(function (StopMatchmakingInput) {
    /**
     * @internal
     */
    StopMatchmakingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopMatchmakingInput || (StopMatchmakingInput = {}));
export var StopMatchmakingOutput;
(function (StopMatchmakingOutput) {
    /**
     * @internal
     */
    StopMatchmakingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopMatchmakingOutput || (StopMatchmakingOutput = {}));
export var SuspendGameServerGroupInput;
(function (SuspendGameServerGroupInput) {
    /**
     * @internal
     */
    SuspendGameServerGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuspendGameServerGroupInput || (SuspendGameServerGroupInput = {}));
export var SuspendGameServerGroupOutput;
(function (SuspendGameServerGroupOutput) {
    /**
     * @internal
     */
    SuspendGameServerGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuspendGameServerGroupOutput || (SuspendGameServerGroupOutput = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateAliasInput;
(function (UpdateAliasInput) {
    /**
     * @internal
     */
    UpdateAliasInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAliasInput || (UpdateAliasInput = {}));
export var UpdateAliasOutput;
(function (UpdateAliasOutput) {
    /**
     * @internal
     */
    UpdateAliasOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAliasOutput || (UpdateAliasOutput = {}));
export var UpdateBuildInput;
(function (UpdateBuildInput) {
    /**
     * @internal
     */
    UpdateBuildInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBuildInput || (UpdateBuildInput = {}));
export var UpdateBuildOutput;
(function (UpdateBuildOutput) {
    /**
     * @internal
     */
    UpdateBuildOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateBuildOutput || (UpdateBuildOutput = {}));
export var UpdateFleetAttributesInput;
(function (UpdateFleetAttributesInput) {
    /**
     * @internal
     */
    UpdateFleetAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFleetAttributesInput || (UpdateFleetAttributesInput = {}));
export var UpdateFleetAttributesOutput;
(function (UpdateFleetAttributesOutput) {
    /**
     * @internal
     */
    UpdateFleetAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFleetAttributesOutput || (UpdateFleetAttributesOutput = {}));
export var UpdateFleetCapacityInput;
(function (UpdateFleetCapacityInput) {
    /**
     * @internal
     */
    UpdateFleetCapacityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFleetCapacityInput || (UpdateFleetCapacityInput = {}));
export var UpdateFleetCapacityOutput;
(function (UpdateFleetCapacityOutput) {
    /**
     * @internal
     */
    UpdateFleetCapacityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFleetCapacityOutput || (UpdateFleetCapacityOutput = {}));
export var UpdateFleetPortSettingsInput;
(function (UpdateFleetPortSettingsInput) {
    /**
     * @internal
     */
    UpdateFleetPortSettingsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFleetPortSettingsInput || (UpdateFleetPortSettingsInput = {}));
export var UpdateFleetPortSettingsOutput;
(function (UpdateFleetPortSettingsOutput) {
    /**
     * @internal
     */
    UpdateFleetPortSettingsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFleetPortSettingsOutput || (UpdateFleetPortSettingsOutput = {}));
export var GameServerHealthCheck;
(function (GameServerHealthCheck) {
    GameServerHealthCheck["HEALTHY"] = "HEALTHY";
})(GameServerHealthCheck || (GameServerHealthCheck = {}));
export var UpdateGameServerInput;
(function (UpdateGameServerInput) {
    /**
     * @internal
     */
    UpdateGameServerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameServerInput || (UpdateGameServerInput = {}));
export var UpdateGameServerOutput;
(function (UpdateGameServerOutput) {
    /**
     * @internal
     */
    UpdateGameServerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameServerOutput || (UpdateGameServerOutput = {}));
export var UpdateGameServerGroupInput;
(function (UpdateGameServerGroupInput) {
    /**
     * @internal
     */
    UpdateGameServerGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameServerGroupInput || (UpdateGameServerGroupInput = {}));
export var UpdateGameServerGroupOutput;
(function (UpdateGameServerGroupOutput) {
    /**
     * @internal
     */
    UpdateGameServerGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameServerGroupOutput || (UpdateGameServerGroupOutput = {}));
export var UpdateGameSessionInput;
(function (UpdateGameSessionInput) {
    /**
     * @internal
     */
    UpdateGameSessionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameSessionInput || (UpdateGameSessionInput = {}));
export var UpdateGameSessionOutput;
(function (UpdateGameSessionOutput) {
    /**
     * @internal
     */
    UpdateGameSessionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameSessionOutput || (UpdateGameSessionOutput = {}));
export var UpdateGameSessionQueueInput;
(function (UpdateGameSessionQueueInput) {
    /**
     * @internal
     */
    UpdateGameSessionQueueInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameSessionQueueInput || (UpdateGameSessionQueueInput = {}));
export var UpdateGameSessionQueueOutput;
(function (UpdateGameSessionQueueOutput) {
    /**
     * @internal
     */
    UpdateGameSessionQueueOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGameSessionQueueOutput || (UpdateGameSessionQueueOutput = {}));
export var UpdateMatchmakingConfigurationInput;
(function (UpdateMatchmakingConfigurationInput) {
    /**
     * @internal
     */
    UpdateMatchmakingConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMatchmakingConfigurationInput || (UpdateMatchmakingConfigurationInput = {}));
export var UpdateMatchmakingConfigurationOutput;
(function (UpdateMatchmakingConfigurationOutput) {
    /**
     * @internal
     */
    UpdateMatchmakingConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMatchmakingConfigurationOutput || (UpdateMatchmakingConfigurationOutput = {}));
export var UpdateRuntimeConfigurationInput;
(function (UpdateRuntimeConfigurationInput) {
    /**
     * @internal
     */
    UpdateRuntimeConfigurationInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuntimeConfigurationInput || (UpdateRuntimeConfigurationInput = {}));
export var UpdateRuntimeConfigurationOutput;
(function (UpdateRuntimeConfigurationOutput) {
    /**
     * @internal
     */
    UpdateRuntimeConfigurationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuntimeConfigurationOutput || (UpdateRuntimeConfigurationOutput = {}));
export var UpdateScriptInput;
(function (UpdateScriptInput) {
    /**
     * @internal
     */
    UpdateScriptInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateScriptInput || (UpdateScriptInput = {}));
export var UpdateScriptOutput;
(function (UpdateScriptOutput) {
    /**
     * @internal
     */
    UpdateScriptOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateScriptOutput || (UpdateScriptOutput = {}));
export var ValidateMatchmakingRuleSetInput;
(function (ValidateMatchmakingRuleSetInput) {
    /**
     * @internal
     */
    ValidateMatchmakingRuleSetInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidateMatchmakingRuleSetInput || (ValidateMatchmakingRuleSetInput = {}));
export var ValidateMatchmakingRuleSetOutput;
(function (ValidateMatchmakingRuleSetOutput) {
    /**
     * @internal
     */
    ValidateMatchmakingRuleSetOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidateMatchmakingRuleSetOutput || (ValidateMatchmakingRuleSetOutput = {}));
//# sourceMappingURL=models_0.js.map