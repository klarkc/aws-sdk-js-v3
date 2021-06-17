import { __assign } from "tslib";
export var AuthenticateCognitoActionConditionalBehaviorEnum;
(function (AuthenticateCognitoActionConditionalBehaviorEnum) {
    AuthenticateCognitoActionConditionalBehaviorEnum["ALLOW"] = "allow";
    AuthenticateCognitoActionConditionalBehaviorEnum["AUTHENTICATE"] = "authenticate";
    AuthenticateCognitoActionConditionalBehaviorEnum["DENY"] = "deny";
})(AuthenticateCognitoActionConditionalBehaviorEnum || (AuthenticateCognitoActionConditionalBehaviorEnum = {}));
export var AuthenticateCognitoActionConfig;
(function (AuthenticateCognitoActionConfig) {
    /**
     * @internal
     */
    AuthenticateCognitoActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthenticateCognitoActionConfig || (AuthenticateCognitoActionConfig = {}));
export var AuthenticateOidcActionConditionalBehaviorEnum;
(function (AuthenticateOidcActionConditionalBehaviorEnum) {
    AuthenticateOidcActionConditionalBehaviorEnum["ALLOW"] = "allow";
    AuthenticateOidcActionConditionalBehaviorEnum["AUTHENTICATE"] = "authenticate";
    AuthenticateOidcActionConditionalBehaviorEnum["DENY"] = "deny";
})(AuthenticateOidcActionConditionalBehaviorEnum || (AuthenticateOidcActionConditionalBehaviorEnum = {}));
export var AuthenticateOidcActionConfig;
(function (AuthenticateOidcActionConfig) {
    /**
     * @internal
     */
    AuthenticateOidcActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthenticateOidcActionConfig || (AuthenticateOidcActionConfig = {}));
export var FixedResponseActionConfig;
(function (FixedResponseActionConfig) {
    /**
     * @internal
     */
    FixedResponseActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FixedResponseActionConfig || (FixedResponseActionConfig = {}));
export var TargetGroupTuple;
(function (TargetGroupTuple) {
    /**
     * @internal
     */
    TargetGroupTuple.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGroupTuple || (TargetGroupTuple = {}));
export var TargetGroupStickinessConfig;
(function (TargetGroupStickinessConfig) {
    /**
     * @internal
     */
    TargetGroupStickinessConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGroupStickinessConfig || (TargetGroupStickinessConfig = {}));
export var ForwardActionConfig;
(function (ForwardActionConfig) {
    /**
     * @internal
     */
    ForwardActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForwardActionConfig || (ForwardActionConfig = {}));
export var RedirectActionStatusCodeEnum;
(function (RedirectActionStatusCodeEnum) {
    RedirectActionStatusCodeEnum["HTTP_301"] = "HTTP_301";
    RedirectActionStatusCodeEnum["HTTP_302"] = "HTTP_302";
})(RedirectActionStatusCodeEnum || (RedirectActionStatusCodeEnum = {}));
export var RedirectActionConfig;
(function (RedirectActionConfig) {
    /**
     * @internal
     */
    RedirectActionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedirectActionConfig || (RedirectActionConfig = {}));
export var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum["AUTHENTICATE_COGNITO"] = "authenticate-cognito";
    ActionTypeEnum["AUTHENTICATE_OIDC"] = "authenticate-oidc";
    ActionTypeEnum["FIXED_RESPONSE"] = "fixed-response";
    ActionTypeEnum["FORWARD"] = "forward";
    ActionTypeEnum["REDIRECT"] = "redirect";
})(ActionTypeEnum || (ActionTypeEnum = {}));
export var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Action || (Action = {}));
export var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Certificate || (Certificate = {}));
export var AddListenerCertificatesInput;
(function (AddListenerCertificatesInput) {
    /**
     * @internal
     */
    AddListenerCertificatesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddListenerCertificatesInput || (AddListenerCertificatesInput = {}));
export var AddListenerCertificatesOutput;
(function (AddListenerCertificatesOutput) {
    /**
     * @internal
     */
    AddListenerCertificatesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddListenerCertificatesOutput || (AddListenerCertificatesOutput = {}));
export var CertificateNotFoundException;
(function (CertificateNotFoundException) {
    /**
     * @internal
     */
    CertificateNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateNotFoundException || (CertificateNotFoundException = {}));
export var ListenerNotFoundException;
(function (ListenerNotFoundException) {
    /**
     * @internal
     */
    ListenerNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListenerNotFoundException || (ListenerNotFoundException = {}));
export var TooManyCertificatesException;
(function (TooManyCertificatesException) {
    /**
     * @internal
     */
    TooManyCertificatesException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyCertificatesException || (TooManyCertificatesException = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsInput || (AddTagsInput = {}));
export var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsOutput || (AddTagsOutput = {}));
export var DuplicateTagKeysException;
(function (DuplicateTagKeysException) {
    /**
     * @internal
     */
    DuplicateTagKeysException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateTagKeysException || (DuplicateTagKeysException = {}));
export var LoadBalancerNotFoundException;
(function (LoadBalancerNotFoundException) {
    /**
     * @internal
     */
    LoadBalancerNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerNotFoundException || (LoadBalancerNotFoundException = {}));
export var TargetGroupNotFoundException;
(function (TargetGroupNotFoundException) {
    /**
     * @internal
     */
    TargetGroupNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGroupNotFoundException || (TargetGroupNotFoundException = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var AllocationIdNotFoundException;
(function (AllocationIdNotFoundException) {
    /**
     * @internal
     */
    AllocationIdNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AllocationIdNotFoundException || (AllocationIdNotFoundException = {}));
export var ALPNPolicyNotSupportedException;
(function (ALPNPolicyNotSupportedException) {
    /**
     * @internal
     */
    ALPNPolicyNotSupportedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ALPNPolicyNotSupportedException || (ALPNPolicyNotSupportedException = {}));
export var LoadBalancerAddress;
(function (LoadBalancerAddress) {
    /**
     * @internal
     */
    LoadBalancerAddress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerAddress || (LoadBalancerAddress = {}));
export var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailabilityZone || (AvailabilityZone = {}));
export var AvailabilityZoneNotSupportedException;
(function (AvailabilityZoneNotSupportedException) {
    /**
     * @internal
     */
    AvailabilityZoneNotSupportedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailabilityZoneNotSupportedException || (AvailabilityZoneNotSupportedException = {}));
export var Cipher;
(function (Cipher) {
    /**
     * @internal
     */
    Cipher.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Cipher || (Cipher = {}));
export var CreateListenerInput;
(function (CreateListenerInput) {
    /**
     * @internal
     */
    CreateListenerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateListenerInput || (CreateListenerInput = {}));
export var Listener;
(function (Listener) {
    /**
     * @internal
     */
    Listener.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Listener || (Listener = {}));
export var CreateListenerOutput;
(function (CreateListenerOutput) {
    /**
     * @internal
     */
    CreateListenerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateListenerOutput || (CreateListenerOutput = {}));
export var DuplicateListenerException;
(function (DuplicateListenerException) {
    /**
     * @internal
     */
    DuplicateListenerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateListenerException || (DuplicateListenerException = {}));
export var IncompatibleProtocolsException;
(function (IncompatibleProtocolsException) {
    /**
     * @internal
     */
    IncompatibleProtocolsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncompatibleProtocolsException || (IncompatibleProtocolsException = {}));
export var InvalidConfigurationRequestException;
(function (InvalidConfigurationRequestException) {
    /**
     * @internal
     */
    InvalidConfigurationRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidConfigurationRequestException || (InvalidConfigurationRequestException = {}));
export var InvalidLoadBalancerActionException;
(function (InvalidLoadBalancerActionException) {
    /**
     * @internal
     */
    InvalidLoadBalancerActionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLoadBalancerActionException || (InvalidLoadBalancerActionException = {}));
export var SSLPolicyNotFoundException;
(function (SSLPolicyNotFoundException) {
    /**
     * @internal
     */
    SSLPolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSLPolicyNotFoundException || (SSLPolicyNotFoundException = {}));
export var TargetGroupAssociationLimitException;
(function (TargetGroupAssociationLimitException) {
    /**
     * @internal
     */
    TargetGroupAssociationLimitException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGroupAssociationLimitException || (TargetGroupAssociationLimitException = {}));
export var TooManyActionsException;
(function (TooManyActionsException) {
    /**
     * @internal
     */
    TooManyActionsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyActionsException || (TooManyActionsException = {}));
export var TooManyListenersException;
(function (TooManyListenersException) {
    /**
     * @internal
     */
    TooManyListenersException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyListenersException || (TooManyListenersException = {}));
export var TooManyRegistrationsForTargetIdException;
(function (TooManyRegistrationsForTargetIdException) {
    /**
     * @internal
     */
    TooManyRegistrationsForTargetIdException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRegistrationsForTargetIdException || (TooManyRegistrationsForTargetIdException = {}));
export var TooManyTargetsException;
(function (TooManyTargetsException) {
    /**
     * @internal
     */
    TooManyTargetsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTargetsException || (TooManyTargetsException = {}));
export var TooManyUniqueTargetGroupsPerLoadBalancerException;
(function (TooManyUniqueTargetGroupsPerLoadBalancerException) {
    /**
     * @internal
     */
    TooManyUniqueTargetGroupsPerLoadBalancerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyUniqueTargetGroupsPerLoadBalancerException || (TooManyUniqueTargetGroupsPerLoadBalancerException = {}));
export var UnsupportedProtocolException;
(function (UnsupportedProtocolException) {
    /**
     * @internal
     */
    UnsupportedProtocolException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedProtocolException || (UnsupportedProtocolException = {}));
export var IpAddressType;
(function (IpAddressType) {
    IpAddressType["DUALSTACK"] = "dualstack";
    IpAddressType["IPV4"] = "ipv4";
})(IpAddressType || (IpAddressType = {}));
export var LoadBalancerSchemeEnum;
(function (LoadBalancerSchemeEnum) {
    LoadBalancerSchemeEnum["INTERNAL"] = "internal";
    LoadBalancerSchemeEnum["INTERNET_FACING"] = "internet-facing";
})(LoadBalancerSchemeEnum || (LoadBalancerSchemeEnum = {}));
export var SubnetMapping;
(function (SubnetMapping) {
    /**
     * @internal
     */
    SubnetMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubnetMapping || (SubnetMapping = {}));
export var LoadBalancerTypeEnum;
(function (LoadBalancerTypeEnum) {
    LoadBalancerTypeEnum["APPLICATION"] = "application";
    LoadBalancerTypeEnum["GATEWAY"] = "gateway";
    LoadBalancerTypeEnum["NETWORK"] = "network";
})(LoadBalancerTypeEnum || (LoadBalancerTypeEnum = {}));
export var CreateLoadBalancerInput;
(function (CreateLoadBalancerInput) {
    /**
     * @internal
     */
    CreateLoadBalancerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoadBalancerInput || (CreateLoadBalancerInput = {}));
export var LoadBalancerStateEnum;
(function (LoadBalancerStateEnum) {
    LoadBalancerStateEnum["ACTIVE"] = "active";
    LoadBalancerStateEnum["ACTIVE_IMPAIRED"] = "active_impaired";
    LoadBalancerStateEnum["FAILED"] = "failed";
    LoadBalancerStateEnum["PROVISIONING"] = "provisioning";
})(LoadBalancerStateEnum || (LoadBalancerStateEnum = {}));
export var LoadBalancerState;
(function (LoadBalancerState) {
    /**
     * @internal
     */
    LoadBalancerState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerState || (LoadBalancerState = {}));
export var LoadBalancer;
(function (LoadBalancer) {
    /**
     * @internal
     */
    LoadBalancer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancer || (LoadBalancer = {}));
export var CreateLoadBalancerOutput;
(function (CreateLoadBalancerOutput) {
    /**
     * @internal
     */
    CreateLoadBalancerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoadBalancerOutput || (CreateLoadBalancerOutput = {}));
export var DuplicateLoadBalancerNameException;
(function (DuplicateLoadBalancerNameException) {
    /**
     * @internal
     */
    DuplicateLoadBalancerNameException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateLoadBalancerNameException || (DuplicateLoadBalancerNameException = {}));
export var InvalidSchemeException;
(function (InvalidSchemeException) {
    /**
     * @internal
     */
    InvalidSchemeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSchemeException || (InvalidSchemeException = {}));
export var InvalidSecurityGroupException;
(function (InvalidSecurityGroupException) {
    /**
     * @internal
     */
    InvalidSecurityGroupException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSecurityGroupException || (InvalidSecurityGroupException = {}));
export var InvalidSubnetException;
(function (InvalidSubnetException) {
    /**
     * @internal
     */
    InvalidSubnetException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSubnetException || (InvalidSubnetException = {}));
export var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    /**
     * @internal
     */
    OperationNotPermittedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationNotPermittedException || (OperationNotPermittedException = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var SubnetNotFoundException;
(function (SubnetNotFoundException) {
    /**
     * @internal
     */
    SubnetNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubnetNotFoundException || (SubnetNotFoundException = {}));
export var TooManyLoadBalancersException;
(function (TooManyLoadBalancersException) {
    /**
     * @internal
     */
    TooManyLoadBalancersException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyLoadBalancersException || (TooManyLoadBalancersException = {}));
export var HostHeaderConditionConfig;
(function (HostHeaderConditionConfig) {
    /**
     * @internal
     */
    HostHeaderConditionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HostHeaderConditionConfig || (HostHeaderConditionConfig = {}));
export var HttpHeaderConditionConfig;
(function (HttpHeaderConditionConfig) {
    /**
     * @internal
     */
    HttpHeaderConditionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpHeaderConditionConfig || (HttpHeaderConditionConfig = {}));
export var HttpRequestMethodConditionConfig;
(function (HttpRequestMethodConditionConfig) {
    /**
     * @internal
     */
    HttpRequestMethodConditionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpRequestMethodConditionConfig || (HttpRequestMethodConditionConfig = {}));
export var PathPatternConditionConfig;
(function (PathPatternConditionConfig) {
    /**
     * @internal
     */
    PathPatternConditionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PathPatternConditionConfig || (PathPatternConditionConfig = {}));
export var QueryStringKeyValuePair;
(function (QueryStringKeyValuePair) {
    /**
     * @internal
     */
    QueryStringKeyValuePair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryStringKeyValuePair || (QueryStringKeyValuePair = {}));
export var QueryStringConditionConfig;
(function (QueryStringConditionConfig) {
    /**
     * @internal
     */
    QueryStringConditionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryStringConditionConfig || (QueryStringConditionConfig = {}));
export var SourceIpConditionConfig;
(function (SourceIpConditionConfig) {
    /**
     * @internal
     */
    SourceIpConditionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceIpConditionConfig || (SourceIpConditionConfig = {}));
export var RuleCondition;
(function (RuleCondition) {
    /**
     * @internal
     */
    RuleCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleCondition || (RuleCondition = {}));
export var CreateRuleInput;
(function (CreateRuleInput) {
    /**
     * @internal
     */
    CreateRuleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleInput || (CreateRuleInput = {}));
export var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rule || (Rule = {}));
export var CreateRuleOutput;
(function (CreateRuleOutput) {
    /**
     * @internal
     */
    CreateRuleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleOutput || (CreateRuleOutput = {}));
export var PriorityInUseException;
(function (PriorityInUseException) {
    /**
     * @internal
     */
    PriorityInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PriorityInUseException || (PriorityInUseException = {}));
export var TooManyRulesException;
(function (TooManyRulesException) {
    /**
     * @internal
     */
    TooManyRulesException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRulesException || (TooManyRulesException = {}));
export var TooManyTargetGroupsException;
(function (TooManyTargetGroupsException) {
    /**
     * @internal
     */
    TooManyTargetGroupsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTargetGroupsException || (TooManyTargetGroupsException = {}));
export var Matcher;
(function (Matcher) {
    /**
     * @internal
     */
    Matcher.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Matcher || (Matcher = {}));
export var TargetTypeEnum;
(function (TargetTypeEnum) {
    TargetTypeEnum["INSTANCE"] = "instance";
    TargetTypeEnum["IP"] = "ip";
    TargetTypeEnum["LAMBDA"] = "lambda";
})(TargetTypeEnum || (TargetTypeEnum = {}));
export var CreateTargetGroupInput;
(function (CreateTargetGroupInput) {
    /**
     * @internal
     */
    CreateTargetGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTargetGroupInput || (CreateTargetGroupInput = {}));
export var TargetGroup;
(function (TargetGroup) {
    /**
     * @internal
     */
    TargetGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGroup || (TargetGroup = {}));
export var CreateTargetGroupOutput;
(function (CreateTargetGroupOutput) {
    /**
     * @internal
     */
    CreateTargetGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTargetGroupOutput || (CreateTargetGroupOutput = {}));
export var DuplicateTargetGroupNameException;
(function (DuplicateTargetGroupNameException) {
    /**
     * @internal
     */
    DuplicateTargetGroupNameException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateTargetGroupNameException || (DuplicateTargetGroupNameException = {}));
export var DeleteListenerInput;
(function (DeleteListenerInput) {
    /**
     * @internal
     */
    DeleteListenerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteListenerInput || (DeleteListenerInput = {}));
export var DeleteListenerOutput;
(function (DeleteListenerOutput) {
    /**
     * @internal
     */
    DeleteListenerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteListenerOutput || (DeleteListenerOutput = {}));
export var DeleteLoadBalancerInput;
(function (DeleteLoadBalancerInput) {
    /**
     * @internal
     */
    DeleteLoadBalancerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoadBalancerInput || (DeleteLoadBalancerInput = {}));
export var DeleteLoadBalancerOutput;
(function (DeleteLoadBalancerOutput) {
    /**
     * @internal
     */
    DeleteLoadBalancerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoadBalancerOutput || (DeleteLoadBalancerOutput = {}));
export var DeleteRuleInput;
(function (DeleteRuleInput) {
    /**
     * @internal
     */
    DeleteRuleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleInput || (DeleteRuleInput = {}));
export var DeleteRuleOutput;
(function (DeleteRuleOutput) {
    /**
     * @internal
     */
    DeleteRuleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleOutput || (DeleteRuleOutput = {}));
export var RuleNotFoundException;
(function (RuleNotFoundException) {
    /**
     * @internal
     */
    RuleNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleNotFoundException || (RuleNotFoundException = {}));
export var DeleteTargetGroupInput;
(function (DeleteTargetGroupInput) {
    /**
     * @internal
     */
    DeleteTargetGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTargetGroupInput || (DeleteTargetGroupInput = {}));
export var DeleteTargetGroupOutput;
(function (DeleteTargetGroupOutput) {
    /**
     * @internal
     */
    DeleteTargetGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTargetGroupOutput || (DeleteTargetGroupOutput = {}));
export var TargetDescription;
(function (TargetDescription) {
    /**
     * @internal
     */
    TargetDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetDescription || (TargetDescription = {}));
export var DeregisterTargetsInput;
(function (DeregisterTargetsInput) {
    /**
     * @internal
     */
    DeregisterTargetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTargetsInput || (DeregisterTargetsInput = {}));
export var DeregisterTargetsOutput;
(function (DeregisterTargetsOutput) {
    /**
     * @internal
     */
    DeregisterTargetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTargetsOutput || (DeregisterTargetsOutput = {}));
export var InvalidTargetException;
(function (InvalidTargetException) {
    /**
     * @internal
     */
    InvalidTargetException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTargetException || (InvalidTargetException = {}));
export var DescribeAccountLimitsInput;
(function (DescribeAccountLimitsInput) {
    /**
     * @internal
     */
    DescribeAccountLimitsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountLimitsInput || (DescribeAccountLimitsInput = {}));
export var Limit;
(function (Limit) {
    /**
     * @internal
     */
    Limit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Limit || (Limit = {}));
export var DescribeAccountLimitsOutput;
(function (DescribeAccountLimitsOutput) {
    /**
     * @internal
     */
    DescribeAccountLimitsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountLimitsOutput || (DescribeAccountLimitsOutput = {}));
export var DescribeListenerCertificatesInput;
(function (DescribeListenerCertificatesInput) {
    /**
     * @internal
     */
    DescribeListenerCertificatesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeListenerCertificatesInput || (DescribeListenerCertificatesInput = {}));
export var DescribeListenerCertificatesOutput;
(function (DescribeListenerCertificatesOutput) {
    /**
     * @internal
     */
    DescribeListenerCertificatesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeListenerCertificatesOutput || (DescribeListenerCertificatesOutput = {}));
export var DescribeListenersInput;
(function (DescribeListenersInput) {
    /**
     * @internal
     */
    DescribeListenersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeListenersInput || (DescribeListenersInput = {}));
export var DescribeListenersOutput;
(function (DescribeListenersOutput) {
    /**
     * @internal
     */
    DescribeListenersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeListenersOutput || (DescribeListenersOutput = {}));
export var DescribeLoadBalancerAttributesInput;
(function (DescribeLoadBalancerAttributesInput) {
    /**
     * @internal
     */
    DescribeLoadBalancerAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLoadBalancerAttributesInput || (DescribeLoadBalancerAttributesInput = {}));
export var LoadBalancerAttribute;
(function (LoadBalancerAttribute) {
    /**
     * @internal
     */
    LoadBalancerAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerAttribute || (LoadBalancerAttribute = {}));
export var DescribeLoadBalancerAttributesOutput;
(function (DescribeLoadBalancerAttributesOutput) {
    /**
     * @internal
     */
    DescribeLoadBalancerAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLoadBalancerAttributesOutput || (DescribeLoadBalancerAttributesOutput = {}));
export var DescribeLoadBalancersInput;
(function (DescribeLoadBalancersInput) {
    /**
     * @internal
     */
    DescribeLoadBalancersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLoadBalancersInput || (DescribeLoadBalancersInput = {}));
export var DescribeLoadBalancersOutput;
(function (DescribeLoadBalancersOutput) {
    /**
     * @internal
     */
    DescribeLoadBalancersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLoadBalancersOutput || (DescribeLoadBalancersOutput = {}));
export var DescribeRulesInput;
(function (DescribeRulesInput) {
    /**
     * @internal
     */
    DescribeRulesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRulesInput || (DescribeRulesInput = {}));
export var DescribeRulesOutput;
(function (DescribeRulesOutput) {
    /**
     * @internal
     */
    DescribeRulesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRulesOutput || (DescribeRulesOutput = {}));
export var DescribeSSLPoliciesInput;
(function (DescribeSSLPoliciesInput) {
    /**
     * @internal
     */
    DescribeSSLPoliciesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSSLPoliciesInput || (DescribeSSLPoliciesInput = {}));
export var SslPolicy;
(function (SslPolicy) {
    /**
     * @internal
     */
    SslPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SslPolicy || (SslPolicy = {}));
export var DescribeSSLPoliciesOutput;
(function (DescribeSSLPoliciesOutput) {
    /**
     * @internal
     */
    DescribeSSLPoliciesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSSLPoliciesOutput || (DescribeSSLPoliciesOutput = {}));
export var DescribeTagsInput;
(function (DescribeTagsInput) {
    /**
     * @internal
     */
    DescribeTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTagsInput || (DescribeTagsInput = {}));
export var TagDescription;
(function (TagDescription) {
    /**
     * @internal
     */
    TagDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagDescription || (TagDescription = {}));
export var DescribeTagsOutput;
(function (DescribeTagsOutput) {
    /**
     * @internal
     */
    DescribeTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTagsOutput || (DescribeTagsOutput = {}));
export var DescribeTargetGroupAttributesInput;
(function (DescribeTargetGroupAttributesInput) {
    /**
     * @internal
     */
    DescribeTargetGroupAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTargetGroupAttributesInput || (DescribeTargetGroupAttributesInput = {}));
export var TargetGroupAttribute;
(function (TargetGroupAttribute) {
    /**
     * @internal
     */
    TargetGroupAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetGroupAttribute || (TargetGroupAttribute = {}));
export var DescribeTargetGroupAttributesOutput;
(function (DescribeTargetGroupAttributesOutput) {
    /**
     * @internal
     */
    DescribeTargetGroupAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTargetGroupAttributesOutput || (DescribeTargetGroupAttributesOutput = {}));
export var DescribeTargetGroupsInput;
(function (DescribeTargetGroupsInput) {
    /**
     * @internal
     */
    DescribeTargetGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTargetGroupsInput || (DescribeTargetGroupsInput = {}));
export var DescribeTargetGroupsOutput;
(function (DescribeTargetGroupsOutput) {
    /**
     * @internal
     */
    DescribeTargetGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTargetGroupsOutput || (DescribeTargetGroupsOutput = {}));
export var DescribeTargetHealthInput;
(function (DescribeTargetHealthInput) {
    /**
     * @internal
     */
    DescribeTargetHealthInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTargetHealthInput || (DescribeTargetHealthInput = {}));
export var TargetHealthReasonEnum;
(function (TargetHealthReasonEnum) {
    TargetHealthReasonEnum["DEREGISTRATION_IN_PROGRESS"] = "Target.DeregistrationInProgress";
    TargetHealthReasonEnum["FAILED_HEALTH_CHECKS"] = "Target.FailedHealthChecks";
    TargetHealthReasonEnum["HEALTH_CHECK_DISABLED"] = "Target.HealthCheckDisabled";
    TargetHealthReasonEnum["INITIAL_HEALTH_CHECKING"] = "Elb.InitialHealthChecking";
    TargetHealthReasonEnum["INTERNAL_ERROR"] = "Elb.InternalError";
    TargetHealthReasonEnum["INVALID_STATE"] = "Target.InvalidState";
    TargetHealthReasonEnum["IP_UNUSABLE"] = "Target.IpUnusable";
    TargetHealthReasonEnum["NOT_IN_USE"] = "Target.NotInUse";
    TargetHealthReasonEnum["NOT_REGISTERED"] = "Target.NotRegistered";
    TargetHealthReasonEnum["REGISTRATION_IN_PROGRESS"] = "Elb.RegistrationInProgress";
    TargetHealthReasonEnum["RESPONSE_CODE_MISMATCH"] = "Target.ResponseCodeMismatch";
    TargetHealthReasonEnum["TIMEOUT"] = "Target.Timeout";
})(TargetHealthReasonEnum || (TargetHealthReasonEnum = {}));
export var TargetHealthStateEnum;
(function (TargetHealthStateEnum) {
    TargetHealthStateEnum["DRAINING"] = "draining";
    TargetHealthStateEnum["HEALTHY"] = "healthy";
    TargetHealthStateEnum["INITIAL"] = "initial";
    TargetHealthStateEnum["UNAVAILABLE"] = "unavailable";
    TargetHealthStateEnum["UNHEALTHY"] = "unhealthy";
    TargetHealthStateEnum["UNUSED"] = "unused";
})(TargetHealthStateEnum || (TargetHealthStateEnum = {}));
export var TargetHealth;
(function (TargetHealth) {
    /**
     * @internal
     */
    TargetHealth.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetHealth || (TargetHealth = {}));
export var TargetHealthDescription;
(function (TargetHealthDescription) {
    /**
     * @internal
     */
    TargetHealthDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetHealthDescription || (TargetHealthDescription = {}));
export var DescribeTargetHealthOutput;
(function (DescribeTargetHealthOutput) {
    /**
     * @internal
     */
    DescribeTargetHealthOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTargetHealthOutput || (DescribeTargetHealthOutput = {}));
export var HealthUnavailableException;
(function (HealthUnavailableException) {
    /**
     * @internal
     */
    HealthUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HealthUnavailableException || (HealthUnavailableException = {}));
export var ModifyListenerInput;
(function (ModifyListenerInput) {
    /**
     * @internal
     */
    ModifyListenerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyListenerInput || (ModifyListenerInput = {}));
export var ModifyListenerOutput;
(function (ModifyListenerOutput) {
    /**
     * @internal
     */
    ModifyListenerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyListenerOutput || (ModifyListenerOutput = {}));
export var ModifyLoadBalancerAttributesInput;
(function (ModifyLoadBalancerAttributesInput) {
    /**
     * @internal
     */
    ModifyLoadBalancerAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyLoadBalancerAttributesInput || (ModifyLoadBalancerAttributesInput = {}));
export var ModifyLoadBalancerAttributesOutput;
(function (ModifyLoadBalancerAttributesOutput) {
    /**
     * @internal
     */
    ModifyLoadBalancerAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyLoadBalancerAttributesOutput || (ModifyLoadBalancerAttributesOutput = {}));
export var ModifyRuleInput;
(function (ModifyRuleInput) {
    /**
     * @internal
     */
    ModifyRuleInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyRuleInput || (ModifyRuleInput = {}));
export var ModifyRuleOutput;
(function (ModifyRuleOutput) {
    /**
     * @internal
     */
    ModifyRuleOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyRuleOutput || (ModifyRuleOutput = {}));
export var ModifyTargetGroupInput;
(function (ModifyTargetGroupInput) {
    /**
     * @internal
     */
    ModifyTargetGroupInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyTargetGroupInput || (ModifyTargetGroupInput = {}));
export var ModifyTargetGroupOutput;
(function (ModifyTargetGroupOutput) {
    /**
     * @internal
     */
    ModifyTargetGroupOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyTargetGroupOutput || (ModifyTargetGroupOutput = {}));
export var ModifyTargetGroupAttributesInput;
(function (ModifyTargetGroupAttributesInput) {
    /**
     * @internal
     */
    ModifyTargetGroupAttributesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyTargetGroupAttributesInput || (ModifyTargetGroupAttributesInput = {}));
export var ModifyTargetGroupAttributesOutput;
(function (ModifyTargetGroupAttributesOutput) {
    /**
     * @internal
     */
    ModifyTargetGroupAttributesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyTargetGroupAttributesOutput || (ModifyTargetGroupAttributesOutput = {}));
export var RegisterTargetsInput;
(function (RegisterTargetsInput) {
    /**
     * @internal
     */
    RegisterTargetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTargetsInput || (RegisterTargetsInput = {}));
export var RegisterTargetsOutput;
(function (RegisterTargetsOutput) {
    /**
     * @internal
     */
    RegisterTargetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTargetsOutput || (RegisterTargetsOutput = {}));
export var RemoveListenerCertificatesInput;
(function (RemoveListenerCertificatesInput) {
    /**
     * @internal
     */
    RemoveListenerCertificatesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveListenerCertificatesInput || (RemoveListenerCertificatesInput = {}));
export var RemoveListenerCertificatesOutput;
(function (RemoveListenerCertificatesOutput) {
    /**
     * @internal
     */
    RemoveListenerCertificatesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveListenerCertificatesOutput || (RemoveListenerCertificatesOutput = {}));
export var RemoveTagsInput;
(function (RemoveTagsInput) {
    /**
     * @internal
     */
    RemoveTagsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsInput || (RemoveTagsInput = {}));
export var RemoveTagsOutput;
(function (RemoveTagsOutput) {
    /**
     * @internal
     */
    RemoveTagsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsOutput || (RemoveTagsOutput = {}));
export var SetIpAddressTypeInput;
(function (SetIpAddressTypeInput) {
    /**
     * @internal
     */
    SetIpAddressTypeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetIpAddressTypeInput || (SetIpAddressTypeInput = {}));
export var SetIpAddressTypeOutput;
(function (SetIpAddressTypeOutput) {
    /**
     * @internal
     */
    SetIpAddressTypeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetIpAddressTypeOutput || (SetIpAddressTypeOutput = {}));
export var RulePriorityPair;
(function (RulePriorityPair) {
    /**
     * @internal
     */
    RulePriorityPair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RulePriorityPair || (RulePriorityPair = {}));
export var SetRulePrioritiesInput;
(function (SetRulePrioritiesInput) {
    /**
     * @internal
     */
    SetRulePrioritiesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetRulePrioritiesInput || (SetRulePrioritiesInput = {}));
export var SetRulePrioritiesOutput;
(function (SetRulePrioritiesOutput) {
    /**
     * @internal
     */
    SetRulePrioritiesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetRulePrioritiesOutput || (SetRulePrioritiesOutput = {}));
export var SetSecurityGroupsInput;
(function (SetSecurityGroupsInput) {
    /**
     * @internal
     */
    SetSecurityGroupsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSecurityGroupsInput || (SetSecurityGroupsInput = {}));
export var SetSecurityGroupsOutput;
(function (SetSecurityGroupsOutput) {
    /**
     * @internal
     */
    SetSecurityGroupsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSecurityGroupsOutput || (SetSecurityGroupsOutput = {}));
export var SetSubnetsInput;
(function (SetSubnetsInput) {
    /**
     * @internal
     */
    SetSubnetsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSubnetsInput || (SetSubnetsInput = {}));
export var SetSubnetsOutput;
(function (SetSubnetsOutput) {
    /**
     * @internal
     */
    SetSubnetsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetSubnetsOutput || (SetSubnetsOutput = {}));
//# sourceMappingURL=models_0.js.map