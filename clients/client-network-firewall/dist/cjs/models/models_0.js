"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchAttributes = exports.TCPFlagField = exports.TCPFlag = exports.PortRange = exports.StatefulRule = exports.RuleOption = exports.Header = exports.StatefulRuleProtocol = exports.StatefulRuleDirection = exports.StatefulAction = exports.RulesSourceList = exports.TargetType = exports.GeneratedRulesType = exports.CreateFirewallPolicyResponse = exports.FirewallPolicyResponse = exports.ResourceStatus = exports.CreateFirewallPolicyRequest = exports.FirewallPolicy = exports.StatelessRuleGroupReference = exports.CustomAction = exports.StatefulRuleGroupReference = exports.LimitExceededException = exports.CreateFirewallResponse = exports.FirewallStatus = exports.SyncState = exports.PerObjectStatus = exports.PerObjectSyncStatus = exports.FirewallStatusValue = exports.Firewall = exports.CreateFirewallRequest = exports.Tag = exports.ConfigurationSyncState = exports.Attachment = exports.AttachmentStatus = exports.InsufficientCapacityException = exports.AssociateSubnetsResponse = exports.AssociateSubnetsRequest = exports.SubnetMapping = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InvalidTokenException = exports.InvalidRequestException = exports.InvalidOperationException = exports.InternalServerError = exports.AssociateFirewallPolicyResponse = exports.AssociateFirewallPolicyRequest = exports.Address = exports.ActionDefinition = exports.PublishMetricAction = exports.Dimension = void 0;
exports.LogDestinationPermissionException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListRuleGroupsResponse = exports.RuleGroupMetadata = exports.ListRuleGroupsRequest = exports.ListFirewallsResponse = exports.ListFirewallsRequest = exports.ListFirewallPoliciesResponse = exports.ListFirewallPoliciesRequest = exports.InvalidResourcePolicyException = exports.FirewallPolicyMetadata = exports.FirewallMetadata = exports.DisassociateSubnetsResponse = exports.DisassociateSubnetsRequest = exports.DescribeRuleGroupResponse = exports.DescribeRuleGroupRequest = exports.DescribeResourcePolicyResponse = exports.DescribeResourcePolicyRequest = exports.DescribeLoggingConfigurationResponse = exports.LoggingConfiguration = exports.LogDestinationConfig = exports.LogType = exports.LogDestinationType = exports.DescribeLoggingConfigurationRequest = exports.DescribeFirewallPolicyResponse = exports.DescribeFirewallPolicyRequest = exports.DescribeFirewallResponse = exports.DescribeFirewallRequest = exports.DeleteRuleGroupResponse = exports.DeleteRuleGroupRequest = exports.DeleteResourcePolicyResponse = exports.DeleteResourcePolicyRequest = exports.DeleteFirewallPolicyResponse = exports.DeleteFirewallPolicyRequest = exports.UnsupportedOperationException = exports.DeleteFirewallResponse = exports.DeleteFirewallRequest = exports.CreateRuleGroupResponse = exports.RuleGroupResponse = exports.CreateRuleGroupRequest = exports.RuleGroupType = exports.RuleGroup = exports.RuleVariables = exports.PortSet = exports.IPSet = exports.RulesSource = exports.StatelessRulesAndCustomActions = exports.StatelessRule = exports.RuleDefinition = void 0;
exports.UpdateSubnetChangeProtectionResponse = exports.UpdateSubnetChangeProtectionRequest = exports.UpdateRuleGroupResponse = exports.UpdateRuleGroupRequest = exports.UpdateLoggingConfigurationResponse = exports.UpdateLoggingConfigurationRequest = exports.UpdateFirewallPolicyChangeProtectionResponse = exports.UpdateFirewallPolicyChangeProtectionRequest = exports.UpdateFirewallPolicyResponse = exports.UpdateFirewallPolicyRequest = exports.UpdateFirewallDescriptionResponse = exports.UpdateFirewallDescriptionRequest = exports.UpdateFirewallDeleteProtectionResponse = exports.UpdateFirewallDeleteProtectionRequest = exports.ResourceOwnerCheckException = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.PutResourcePolicyResponse = exports.PutResourcePolicyRequest = void 0;
var Dimension;
(function (Dimension) {
    /**
     * @internal
     */
    Dimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var PublishMetricAction;
(function (PublishMetricAction) {
    /**
     * @internal
     */
    PublishMetricAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishMetricAction = exports.PublishMetricAction || (exports.PublishMetricAction = {}));
var ActionDefinition;
(function (ActionDefinition) {
    /**
     * @internal
     */
    ActionDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionDefinition = exports.ActionDefinition || (exports.ActionDefinition = {}));
var Address;
(function (Address) {
    /**
     * @internal
     */
    Address.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Address = exports.Address || (exports.Address = {}));
var AssociateFirewallPolicyRequest;
(function (AssociateFirewallPolicyRequest) {
    /**
     * @internal
     */
    AssociateFirewallPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFirewallPolicyRequest = exports.AssociateFirewallPolicyRequest || (exports.AssociateFirewallPolicyRequest = {}));
var AssociateFirewallPolicyResponse;
(function (AssociateFirewallPolicyResponse) {
    /**
     * @internal
     */
    AssociateFirewallPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFirewallPolicyResponse = exports.AssociateFirewallPolicyResponse || (exports.AssociateFirewallPolicyResponse = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var InvalidTokenException;
(function (InvalidTokenException) {
    /**
     * @internal
     */
    InvalidTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTokenException = exports.InvalidTokenException || (exports.InvalidTokenException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var SubnetMapping;
(function (SubnetMapping) {
    /**
     * @internal
     */
    SubnetMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetMapping = exports.SubnetMapping || (exports.SubnetMapping = {}));
var AssociateSubnetsRequest;
(function (AssociateSubnetsRequest) {
    /**
     * @internal
     */
    AssociateSubnetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateSubnetsRequest = exports.AssociateSubnetsRequest || (exports.AssociateSubnetsRequest = {}));
var AssociateSubnetsResponse;
(function (AssociateSubnetsResponse) {
    /**
     * @internal
     */
    AssociateSubnetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateSubnetsResponse = exports.AssociateSubnetsResponse || (exports.AssociateSubnetsResponse = {}));
var InsufficientCapacityException;
(function (InsufficientCapacityException) {
    /**
     * @internal
     */
    InsufficientCapacityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientCapacityException = exports.InsufficientCapacityException || (exports.InsufficientCapacityException = {}));
var AttachmentStatus;
(function (AttachmentStatus) {
    AttachmentStatus["CREATING"] = "CREATING";
    AttachmentStatus["DELETING"] = "DELETING";
    AttachmentStatus["READY"] = "READY";
    AttachmentStatus["SCALING"] = "SCALING";
})(AttachmentStatus = exports.AttachmentStatus || (exports.AttachmentStatus = {}));
var Attachment;
(function (Attachment) {
    /**
     * @internal
     */
    Attachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attachment = exports.Attachment || (exports.Attachment = {}));
var ConfigurationSyncState;
(function (ConfigurationSyncState) {
    ConfigurationSyncState["IN_SYNC"] = "IN_SYNC";
    ConfigurationSyncState["PENDING"] = "PENDING";
})(ConfigurationSyncState = exports.ConfigurationSyncState || (exports.ConfigurationSyncState = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateFirewallRequest;
(function (CreateFirewallRequest) {
    /**
     * @internal
     */
    CreateFirewallRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallRequest = exports.CreateFirewallRequest || (exports.CreateFirewallRequest = {}));
var Firewall;
(function (Firewall) {
    /**
     * @internal
     */
    Firewall.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Firewall = exports.Firewall || (exports.Firewall = {}));
var FirewallStatusValue;
(function (FirewallStatusValue) {
    FirewallStatusValue["DELETING"] = "DELETING";
    FirewallStatusValue["PROVISIONING"] = "PROVISIONING";
    FirewallStatusValue["READY"] = "READY";
})(FirewallStatusValue = exports.FirewallStatusValue || (exports.FirewallStatusValue = {}));
var PerObjectSyncStatus;
(function (PerObjectSyncStatus) {
    PerObjectSyncStatus["IN_SYNC"] = "IN_SYNC";
    PerObjectSyncStatus["PENDING"] = "PENDING";
})(PerObjectSyncStatus = exports.PerObjectSyncStatus || (exports.PerObjectSyncStatus = {}));
var PerObjectStatus;
(function (PerObjectStatus) {
    /**
     * @internal
     */
    PerObjectStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PerObjectStatus = exports.PerObjectStatus || (exports.PerObjectStatus = {}));
var SyncState;
(function (SyncState) {
    /**
     * @internal
     */
    SyncState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SyncState = exports.SyncState || (exports.SyncState = {}));
var FirewallStatus;
(function (FirewallStatus) {
    /**
     * @internal
     */
    FirewallStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallStatus = exports.FirewallStatus || (exports.FirewallStatus = {}));
var CreateFirewallResponse;
(function (CreateFirewallResponse) {
    /**
     * @internal
     */
    CreateFirewallResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallResponse = exports.CreateFirewallResponse || (exports.CreateFirewallResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var StatefulRuleGroupReference;
(function (StatefulRuleGroupReference) {
    /**
     * @internal
     */
    StatefulRuleGroupReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatefulRuleGroupReference = exports.StatefulRuleGroupReference || (exports.StatefulRuleGroupReference = {}));
var CustomAction;
(function (CustomAction) {
    /**
     * @internal
     */
    CustomAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomAction = exports.CustomAction || (exports.CustomAction = {}));
var StatelessRuleGroupReference;
(function (StatelessRuleGroupReference) {
    /**
     * @internal
     */
    StatelessRuleGroupReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatelessRuleGroupReference = exports.StatelessRuleGroupReference || (exports.StatelessRuleGroupReference = {}));
var FirewallPolicy;
(function (FirewallPolicy) {
    /**
     * @internal
     */
    FirewallPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallPolicy = exports.FirewallPolicy || (exports.FirewallPolicy = {}));
var CreateFirewallPolicyRequest;
(function (CreateFirewallPolicyRequest) {
    /**
     * @internal
     */
    CreateFirewallPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallPolicyRequest = exports.CreateFirewallPolicyRequest || (exports.CreateFirewallPolicyRequest = {}));
var ResourceStatus;
(function (ResourceStatus) {
    ResourceStatus["ACTIVE"] = "ACTIVE";
    ResourceStatus["DELETING"] = "DELETING";
})(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
var FirewallPolicyResponse;
(function (FirewallPolicyResponse) {
    /**
     * @internal
     */
    FirewallPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallPolicyResponse = exports.FirewallPolicyResponse || (exports.FirewallPolicyResponse = {}));
var CreateFirewallPolicyResponse;
(function (CreateFirewallPolicyResponse) {
    /**
     * @internal
     */
    CreateFirewallPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallPolicyResponse = exports.CreateFirewallPolicyResponse || (exports.CreateFirewallPolicyResponse = {}));
var GeneratedRulesType;
(function (GeneratedRulesType) {
    GeneratedRulesType["ALLOWLIST"] = "ALLOWLIST";
    GeneratedRulesType["DENYLIST"] = "DENYLIST";
})(GeneratedRulesType = exports.GeneratedRulesType || (exports.GeneratedRulesType = {}));
var TargetType;
(function (TargetType) {
    TargetType["HTTP_HOST"] = "HTTP_HOST";
    TargetType["TLS_SNI"] = "TLS_SNI";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var RulesSourceList;
(function (RulesSourceList) {
    /**
     * @internal
     */
    RulesSourceList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RulesSourceList = exports.RulesSourceList || (exports.RulesSourceList = {}));
var StatefulAction;
(function (StatefulAction) {
    StatefulAction["ALERT"] = "ALERT";
    StatefulAction["DROP"] = "DROP";
    StatefulAction["PASS"] = "PASS";
})(StatefulAction = exports.StatefulAction || (exports.StatefulAction = {}));
var StatefulRuleDirection;
(function (StatefulRuleDirection) {
    StatefulRuleDirection["ANY"] = "ANY";
    StatefulRuleDirection["FORWARD"] = "FORWARD";
})(StatefulRuleDirection = exports.StatefulRuleDirection || (exports.StatefulRuleDirection = {}));
var StatefulRuleProtocol;
(function (StatefulRuleProtocol) {
    StatefulRuleProtocol["ANY"] = "IP";
    StatefulRuleProtocol["DCERPC"] = "DCERPC";
    StatefulRuleProtocol["DHCP"] = "DHCP";
    StatefulRuleProtocol["DNS"] = "DNS";
    StatefulRuleProtocol["FTP"] = "FTP";
    StatefulRuleProtocol["HTTP"] = "HTTP";
    StatefulRuleProtocol["ICMP"] = "ICMP";
    StatefulRuleProtocol["IKEV2"] = "IKEV2";
    StatefulRuleProtocol["IMAP"] = "IMAP";
    StatefulRuleProtocol["KRB5"] = "KRB5";
    StatefulRuleProtocol["MSN"] = "MSN";
    StatefulRuleProtocol["NTP"] = "NTP";
    StatefulRuleProtocol["SMB"] = "SMB";
    StatefulRuleProtocol["SMTP"] = "SMTP";
    StatefulRuleProtocol["SSH"] = "SSH";
    StatefulRuleProtocol["TCP"] = "TCP";
    StatefulRuleProtocol["TFTP"] = "TFTP";
    StatefulRuleProtocol["TLS"] = "TLS";
    StatefulRuleProtocol["UDP"] = "UDP";
})(StatefulRuleProtocol = exports.StatefulRuleProtocol || (exports.StatefulRuleProtocol = {}));
var Header;
(function (Header) {
    /**
     * @internal
     */
    Header.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Header = exports.Header || (exports.Header = {}));
var RuleOption;
(function (RuleOption) {
    /**
     * @internal
     */
    RuleOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleOption = exports.RuleOption || (exports.RuleOption = {}));
var StatefulRule;
(function (StatefulRule) {
    /**
     * @internal
     */
    StatefulRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatefulRule = exports.StatefulRule || (exports.StatefulRule = {}));
var PortRange;
(function (PortRange) {
    /**
     * @internal
     */
    PortRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortRange = exports.PortRange || (exports.PortRange = {}));
var TCPFlag;
(function (TCPFlag) {
    TCPFlag["ACK"] = "ACK";
    TCPFlag["CWR"] = "CWR";
    TCPFlag["ECE"] = "ECE";
    TCPFlag["FIN"] = "FIN";
    TCPFlag["PSH"] = "PSH";
    TCPFlag["RST"] = "RST";
    TCPFlag["SYN"] = "SYN";
    TCPFlag["URG"] = "URG";
})(TCPFlag = exports.TCPFlag || (exports.TCPFlag = {}));
var TCPFlagField;
(function (TCPFlagField) {
    /**
     * @internal
     */
    TCPFlagField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TCPFlagField = exports.TCPFlagField || (exports.TCPFlagField = {}));
var MatchAttributes;
(function (MatchAttributes) {
    /**
     * @internal
     */
    MatchAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchAttributes = exports.MatchAttributes || (exports.MatchAttributes = {}));
var RuleDefinition;
(function (RuleDefinition) {
    /**
     * @internal
     */
    RuleDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleDefinition = exports.RuleDefinition || (exports.RuleDefinition = {}));
var StatelessRule;
(function (StatelessRule) {
    /**
     * @internal
     */
    StatelessRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatelessRule = exports.StatelessRule || (exports.StatelessRule = {}));
var StatelessRulesAndCustomActions;
(function (StatelessRulesAndCustomActions) {
    /**
     * @internal
     */
    StatelessRulesAndCustomActions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatelessRulesAndCustomActions = exports.StatelessRulesAndCustomActions || (exports.StatelessRulesAndCustomActions = {}));
var RulesSource;
(function (RulesSource) {
    /**
     * @internal
     */
    RulesSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RulesSource = exports.RulesSource || (exports.RulesSource = {}));
var IPSet;
(function (IPSet) {
    /**
     * @internal
     */
    IPSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSet = exports.IPSet || (exports.IPSet = {}));
var PortSet;
(function (PortSet) {
    /**
     * @internal
     */
    PortSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortSet = exports.PortSet || (exports.PortSet = {}));
var RuleVariables;
(function (RuleVariables) {
    /**
     * @internal
     */
    RuleVariables.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleVariables = exports.RuleVariables || (exports.RuleVariables = {}));
var RuleGroup;
(function (RuleGroup) {
    /**
     * @internal
     */
    RuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroup = exports.RuleGroup || (exports.RuleGroup = {}));
var RuleGroupType;
(function (RuleGroupType) {
    RuleGroupType["STATEFUL"] = "STATEFUL";
    RuleGroupType["STATELESS"] = "STATELESS";
})(RuleGroupType = exports.RuleGroupType || (exports.RuleGroupType = {}));
var CreateRuleGroupRequest;
(function (CreateRuleGroupRequest) {
    /**
     * @internal
     */
    CreateRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleGroupRequest = exports.CreateRuleGroupRequest || (exports.CreateRuleGroupRequest = {}));
var RuleGroupResponse;
(function (RuleGroupResponse) {
    /**
     * @internal
     */
    RuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroupResponse = exports.RuleGroupResponse || (exports.RuleGroupResponse = {}));
var CreateRuleGroupResponse;
(function (CreateRuleGroupResponse) {
    /**
     * @internal
     */
    CreateRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleGroupResponse = exports.CreateRuleGroupResponse || (exports.CreateRuleGroupResponse = {}));
var DeleteFirewallRequest;
(function (DeleteFirewallRequest) {
    /**
     * @internal
     */
    DeleteFirewallRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallRequest = exports.DeleteFirewallRequest || (exports.DeleteFirewallRequest = {}));
var DeleteFirewallResponse;
(function (DeleteFirewallResponse) {
    /**
     * @internal
     */
    DeleteFirewallResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallResponse = exports.DeleteFirewallResponse || (exports.DeleteFirewallResponse = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var DeleteFirewallPolicyRequest;
(function (DeleteFirewallPolicyRequest) {
    /**
     * @internal
     */
    DeleteFirewallPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallPolicyRequest = exports.DeleteFirewallPolicyRequest || (exports.DeleteFirewallPolicyRequest = {}));
var DeleteFirewallPolicyResponse;
(function (DeleteFirewallPolicyResponse) {
    /**
     * @internal
     */
    DeleteFirewallPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallPolicyResponse = exports.DeleteFirewallPolicyResponse || (exports.DeleteFirewallPolicyResponse = {}));
var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    /**
     * @internal
     */
    DeleteResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyRequest = exports.DeleteResourcePolicyRequest || (exports.DeleteResourcePolicyRequest = {}));
var DeleteResourcePolicyResponse;
(function (DeleteResourcePolicyResponse) {
    /**
     * @internal
     */
    DeleteResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourcePolicyResponse = exports.DeleteResourcePolicyResponse || (exports.DeleteResourcePolicyResponse = {}));
var DeleteRuleGroupRequest;
(function (DeleteRuleGroupRequest) {
    /**
     * @internal
     */
    DeleteRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleGroupRequest = exports.DeleteRuleGroupRequest || (exports.DeleteRuleGroupRequest = {}));
var DeleteRuleGroupResponse;
(function (DeleteRuleGroupResponse) {
    /**
     * @internal
     */
    DeleteRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleGroupResponse = exports.DeleteRuleGroupResponse || (exports.DeleteRuleGroupResponse = {}));
var DescribeFirewallRequest;
(function (DescribeFirewallRequest) {
    /**
     * @internal
     */
    DescribeFirewallRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFirewallRequest = exports.DescribeFirewallRequest || (exports.DescribeFirewallRequest = {}));
var DescribeFirewallResponse;
(function (DescribeFirewallResponse) {
    /**
     * @internal
     */
    DescribeFirewallResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFirewallResponse = exports.DescribeFirewallResponse || (exports.DescribeFirewallResponse = {}));
var DescribeFirewallPolicyRequest;
(function (DescribeFirewallPolicyRequest) {
    /**
     * @internal
     */
    DescribeFirewallPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFirewallPolicyRequest = exports.DescribeFirewallPolicyRequest || (exports.DescribeFirewallPolicyRequest = {}));
var DescribeFirewallPolicyResponse;
(function (DescribeFirewallPolicyResponse) {
    /**
     * @internal
     */
    DescribeFirewallPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFirewallPolicyResponse = exports.DescribeFirewallPolicyResponse || (exports.DescribeFirewallPolicyResponse = {}));
var DescribeLoggingConfigurationRequest;
(function (DescribeLoggingConfigurationRequest) {
    /**
     * @internal
     */
    DescribeLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingConfigurationRequest = exports.DescribeLoggingConfigurationRequest || (exports.DescribeLoggingConfigurationRequest = {}));
var LogDestinationType;
(function (LogDestinationType) {
    LogDestinationType["CLOUDWATCH_LOGS"] = "CloudWatchLogs";
    LogDestinationType["KINESIS_DATA_FIREHOSE"] = "KinesisDataFirehose";
    LogDestinationType["S3"] = "S3";
})(LogDestinationType = exports.LogDestinationType || (exports.LogDestinationType = {}));
var LogType;
(function (LogType) {
    LogType["ALERT"] = "ALERT";
    LogType["FLOW"] = "FLOW";
})(LogType = exports.LogType || (exports.LogType = {}));
var LogDestinationConfig;
(function (LogDestinationConfig) {
    /**
     * @internal
     */
    LogDestinationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogDestinationConfig = exports.LogDestinationConfig || (exports.LogDestinationConfig = {}));
var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {}));
var DescribeLoggingConfigurationResponse;
(function (DescribeLoggingConfigurationResponse) {
    /**
     * @internal
     */
    DescribeLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoggingConfigurationResponse = exports.DescribeLoggingConfigurationResponse || (exports.DescribeLoggingConfigurationResponse = {}));
var DescribeResourcePolicyRequest;
(function (DescribeResourcePolicyRequest) {
    /**
     * @internal
     */
    DescribeResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourcePolicyRequest = exports.DescribeResourcePolicyRequest || (exports.DescribeResourcePolicyRequest = {}));
var DescribeResourcePolicyResponse;
(function (DescribeResourcePolicyResponse) {
    /**
     * @internal
     */
    DescribeResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourcePolicyResponse = exports.DescribeResourcePolicyResponse || (exports.DescribeResourcePolicyResponse = {}));
var DescribeRuleGroupRequest;
(function (DescribeRuleGroupRequest) {
    /**
     * @internal
     */
    DescribeRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuleGroupRequest = exports.DescribeRuleGroupRequest || (exports.DescribeRuleGroupRequest = {}));
var DescribeRuleGroupResponse;
(function (DescribeRuleGroupResponse) {
    /**
     * @internal
     */
    DescribeRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuleGroupResponse = exports.DescribeRuleGroupResponse || (exports.DescribeRuleGroupResponse = {}));
var DisassociateSubnetsRequest;
(function (DisassociateSubnetsRequest) {
    /**
     * @internal
     */
    DisassociateSubnetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateSubnetsRequest = exports.DisassociateSubnetsRequest || (exports.DisassociateSubnetsRequest = {}));
var DisassociateSubnetsResponse;
(function (DisassociateSubnetsResponse) {
    /**
     * @internal
     */
    DisassociateSubnetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateSubnetsResponse = exports.DisassociateSubnetsResponse || (exports.DisassociateSubnetsResponse = {}));
var FirewallMetadata;
(function (FirewallMetadata) {
    /**
     * @internal
     */
    FirewallMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallMetadata = exports.FirewallMetadata || (exports.FirewallMetadata = {}));
var FirewallPolicyMetadata;
(function (FirewallPolicyMetadata) {
    /**
     * @internal
     */
    FirewallPolicyMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallPolicyMetadata = exports.FirewallPolicyMetadata || (exports.FirewallPolicyMetadata = {}));
var InvalidResourcePolicyException;
(function (InvalidResourcePolicyException) {
    /**
     * @internal
     */
    InvalidResourcePolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourcePolicyException = exports.InvalidResourcePolicyException || (exports.InvalidResourcePolicyException = {}));
var ListFirewallPoliciesRequest;
(function (ListFirewallPoliciesRequest) {
    /**
     * @internal
     */
    ListFirewallPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallPoliciesRequest = exports.ListFirewallPoliciesRequest || (exports.ListFirewallPoliciesRequest = {}));
var ListFirewallPoliciesResponse;
(function (ListFirewallPoliciesResponse) {
    /**
     * @internal
     */
    ListFirewallPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallPoliciesResponse = exports.ListFirewallPoliciesResponse || (exports.ListFirewallPoliciesResponse = {}));
var ListFirewallsRequest;
(function (ListFirewallsRequest) {
    /**
     * @internal
     */
    ListFirewallsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallsRequest = exports.ListFirewallsRequest || (exports.ListFirewallsRequest = {}));
var ListFirewallsResponse;
(function (ListFirewallsResponse) {
    /**
     * @internal
     */
    ListFirewallsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallsResponse = exports.ListFirewallsResponse || (exports.ListFirewallsResponse = {}));
var ListRuleGroupsRequest;
(function (ListRuleGroupsRequest) {
    /**
     * @internal
     */
    ListRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleGroupsRequest = exports.ListRuleGroupsRequest || (exports.ListRuleGroupsRequest = {}));
var RuleGroupMetadata;
(function (RuleGroupMetadata) {
    /**
     * @internal
     */
    RuleGroupMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroupMetadata = exports.RuleGroupMetadata || (exports.RuleGroupMetadata = {}));
var ListRuleGroupsResponse;
(function (ListRuleGroupsResponse) {
    /**
     * @internal
     */
    ListRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleGroupsResponse = exports.ListRuleGroupsResponse || (exports.ListRuleGroupsResponse = {}));
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
var LogDestinationPermissionException;
(function (LogDestinationPermissionException) {
    /**
     * @internal
     */
    LogDestinationPermissionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogDestinationPermissionException = exports.LogDestinationPermissionException || (exports.LogDestinationPermissionException = {}));
var PutResourcePolicyRequest;
(function (PutResourcePolicyRequest) {
    /**
     * @internal
     */
    PutResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyRequest = exports.PutResourcePolicyRequest || (exports.PutResourcePolicyRequest = {}));
var PutResourcePolicyResponse;
(function (PutResourcePolicyResponse) {
    /**
     * @internal
     */
    PutResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyResponse = exports.PutResourcePolicyResponse || (exports.PutResourcePolicyResponse = {}));
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
var ResourceOwnerCheckException;
(function (ResourceOwnerCheckException) {
    /**
     * @internal
     */
    ResourceOwnerCheckException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceOwnerCheckException = exports.ResourceOwnerCheckException || (exports.ResourceOwnerCheckException = {}));
var UpdateFirewallDeleteProtectionRequest;
(function (UpdateFirewallDeleteProtectionRequest) {
    /**
     * @internal
     */
    UpdateFirewallDeleteProtectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallDeleteProtectionRequest = exports.UpdateFirewallDeleteProtectionRequest || (exports.UpdateFirewallDeleteProtectionRequest = {}));
var UpdateFirewallDeleteProtectionResponse;
(function (UpdateFirewallDeleteProtectionResponse) {
    /**
     * @internal
     */
    UpdateFirewallDeleteProtectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallDeleteProtectionResponse = exports.UpdateFirewallDeleteProtectionResponse || (exports.UpdateFirewallDeleteProtectionResponse = {}));
var UpdateFirewallDescriptionRequest;
(function (UpdateFirewallDescriptionRequest) {
    /**
     * @internal
     */
    UpdateFirewallDescriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallDescriptionRequest = exports.UpdateFirewallDescriptionRequest || (exports.UpdateFirewallDescriptionRequest = {}));
var UpdateFirewallDescriptionResponse;
(function (UpdateFirewallDescriptionResponse) {
    /**
     * @internal
     */
    UpdateFirewallDescriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallDescriptionResponse = exports.UpdateFirewallDescriptionResponse || (exports.UpdateFirewallDescriptionResponse = {}));
var UpdateFirewallPolicyRequest;
(function (UpdateFirewallPolicyRequest) {
    /**
     * @internal
     */
    UpdateFirewallPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallPolicyRequest = exports.UpdateFirewallPolicyRequest || (exports.UpdateFirewallPolicyRequest = {}));
var UpdateFirewallPolicyResponse;
(function (UpdateFirewallPolicyResponse) {
    /**
     * @internal
     */
    UpdateFirewallPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallPolicyResponse = exports.UpdateFirewallPolicyResponse || (exports.UpdateFirewallPolicyResponse = {}));
var UpdateFirewallPolicyChangeProtectionRequest;
(function (UpdateFirewallPolicyChangeProtectionRequest) {
    /**
     * @internal
     */
    UpdateFirewallPolicyChangeProtectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallPolicyChangeProtectionRequest = exports.UpdateFirewallPolicyChangeProtectionRequest || (exports.UpdateFirewallPolicyChangeProtectionRequest = {}));
var UpdateFirewallPolicyChangeProtectionResponse;
(function (UpdateFirewallPolicyChangeProtectionResponse) {
    /**
     * @internal
     */
    UpdateFirewallPolicyChangeProtectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallPolicyChangeProtectionResponse = exports.UpdateFirewallPolicyChangeProtectionResponse || (exports.UpdateFirewallPolicyChangeProtectionResponse = {}));
var UpdateLoggingConfigurationRequest;
(function (UpdateLoggingConfigurationRequest) {
    /**
     * @internal
     */
    UpdateLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLoggingConfigurationRequest = exports.UpdateLoggingConfigurationRequest || (exports.UpdateLoggingConfigurationRequest = {}));
var UpdateLoggingConfigurationResponse;
(function (UpdateLoggingConfigurationResponse) {
    /**
     * @internal
     */
    UpdateLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLoggingConfigurationResponse = exports.UpdateLoggingConfigurationResponse || (exports.UpdateLoggingConfigurationResponse = {}));
var UpdateRuleGroupRequest;
(function (UpdateRuleGroupRequest) {
    /**
     * @internal
     */
    UpdateRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleGroupRequest = exports.UpdateRuleGroupRequest || (exports.UpdateRuleGroupRequest = {}));
var UpdateRuleGroupResponse;
(function (UpdateRuleGroupResponse) {
    /**
     * @internal
     */
    UpdateRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleGroupResponse = exports.UpdateRuleGroupResponse || (exports.UpdateRuleGroupResponse = {}));
var UpdateSubnetChangeProtectionRequest;
(function (UpdateSubnetChangeProtectionRequest) {
    /**
     * @internal
     */
    UpdateSubnetChangeProtectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubnetChangeProtectionRequest = exports.UpdateSubnetChangeProtectionRequest || (exports.UpdateSubnetChangeProtectionRequest = {}));
var UpdateSubnetChangeProtectionResponse;
(function (UpdateSubnetChangeProtectionResponse) {
    /**
     * @internal
     */
    UpdateSubnetChangeProtectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubnetChangeProtectionResponse = exports.UpdateSubnetChangeProtectionResponse || (exports.UpdateSubnetChangeProtectionResponse = {}));
//# sourceMappingURL=models_0.js.map