import { __assign } from "tslib";
export var AccountRoleStatus;
(function (AccountRoleStatus) {
    AccountRoleStatus["Creating"] = "CREATING";
    AccountRoleStatus["Deleted"] = "DELETED";
    AccountRoleStatus["Deleting"] = "DELETING";
    AccountRoleStatus["PendingDeletion"] = "PENDING_DELETION";
    AccountRoleStatus["Ready"] = "READY";
})(AccountRoleStatus || (AccountRoleStatus = {}));
export var App;
(function (App) {
    /**
     * @internal
     */
    App.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(App || (App = {}));
export var AppsListData;
(function (AppsListData) {
    /**
     * @internal
     */
    AppsListData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppsListData || (AppsListData = {}));
export var AppsListDataSummary;
(function (AppsListDataSummary) {
    /**
     * @internal
     */
    AppsListDataSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppsListDataSummary || (AppsListDataSummary = {}));
export var AssociateAdminAccountRequest;
(function (AssociateAdminAccountRequest) {
    /**
     * @internal
     */
    AssociateAdminAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateAdminAccountRequest || (AssociateAdminAccountRequest = {}));
export var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalErrorException || (InternalErrorException = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOperationException || (InvalidOperationException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var AwsEc2NetworkInterfaceViolation;
(function (AwsEc2NetworkInterfaceViolation) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfaceViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsEc2NetworkInterfaceViolation || (AwsEc2NetworkInterfaceViolation = {}));
export var AwsEc2InstanceViolation;
(function (AwsEc2InstanceViolation) {
    /**
     * @internal
     */
    AwsEc2InstanceViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsEc2InstanceViolation || (AwsEc2InstanceViolation = {}));
export var DeleteAppsListRequest;
(function (DeleteAppsListRequest) {
    /**
     * @internal
     */
    DeleteAppsListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppsListRequest || (DeleteAppsListRequest = {}));
export var DeleteNotificationChannelRequest;
(function (DeleteNotificationChannelRequest) {
    /**
     * @internal
     */
    DeleteNotificationChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNotificationChannelRequest || (DeleteNotificationChannelRequest = {}));
export var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePolicyRequest || (DeletePolicyRequest = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var DeleteProtocolsListRequest;
(function (DeleteProtocolsListRequest) {
    /**
     * @internal
     */
    DeleteProtocolsListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProtocolsListRequest || (DeleteProtocolsListRequest = {}));
export var DisassociateAdminAccountRequest;
(function (DisassociateAdminAccountRequest) {
    /**
     * @internal
     */
    DisassociateAdminAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateAdminAccountRequest || (DisassociateAdminAccountRequest = {}));
export var GetAdminAccountRequest;
(function (GetAdminAccountRequest) {
    /**
     * @internal
     */
    GetAdminAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAdminAccountRequest || (GetAdminAccountRequest = {}));
export var GetAdminAccountResponse;
(function (GetAdminAccountResponse) {
    /**
     * @internal
     */
    GetAdminAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAdminAccountResponse || (GetAdminAccountResponse = {}));
export var GetAppsListRequest;
(function (GetAppsListRequest) {
    /**
     * @internal
     */
    GetAppsListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppsListRequest || (GetAppsListRequest = {}));
export var GetAppsListResponse;
(function (GetAppsListResponse) {
    /**
     * @internal
     */
    GetAppsListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppsListResponse || (GetAppsListResponse = {}));
export var GetComplianceDetailRequest;
(function (GetComplianceDetailRequest) {
    /**
     * @internal
     */
    GetComplianceDetailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetComplianceDetailRequest || (GetComplianceDetailRequest = {}));
export var DependentServiceName;
(function (DependentServiceName) {
    DependentServiceName["AWSConfig"] = "AWSCONFIG";
    DependentServiceName["AWSShieldAdvanced"] = "AWSSHIELD_ADVANCED";
    DependentServiceName["AWSVirtualPrivateCloud"] = "AWSVPC";
    DependentServiceName["AWSWAF"] = "AWSWAF";
})(DependentServiceName || (DependentServiceName = {}));
export var ViolationReason;
(function (ViolationReason) {
    ViolationReason["FMSCreatedSecurityGroupEdited"] = "FMS_CREATED_SECURITY_GROUP_EDITED";
    ViolationReason["MissingExpectedRouteTable"] = "MISSING_EXPECTED_ROUTE_TABLE";
    ViolationReason["MissingFirewall"] = "MISSING_FIREWALL";
    ViolationReason["MissingFirewallSubnetInAZ"] = "MISSING_FIREWALL_SUBNET_IN_AZ";
    ViolationReason["NetworkFirewallPolicyModified"] = "NETWORK_FIREWALL_POLICY_MODIFIED";
    ViolationReason["ResourceIncorrectWebAcl"] = "RESOURCE_INCORRECT_WEB_ACL";
    ViolationReason["ResourceMissingDnsFirewall"] = "RESOURCE_MISSING_DNS_FIREWALL";
    ViolationReason["ResourceMissingSecurityGroup"] = "RESOURCE_MISSING_SECURITY_GROUP";
    ViolationReason["ResourceMissingShieldProtection"] = "RESOURCE_MISSING_SHIELD_PROTECTION";
    ViolationReason["ResourceMissingWebAcl"] = "RESOURCE_MISSING_WEB_ACL";
    ViolationReason["ResourceMissingWebaclOrShieldProtection"] = "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION";
    ViolationReason["ResourceViolatesAuditSecurityGroup"] = "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP";
    ViolationReason["SecurityGroupRedundant"] = "SECURITY_GROUP_REDUNDANT";
    ViolationReason["SecurityGroupUnused"] = "SECURITY_GROUP_UNUSED";
    ViolationReason["WebAclMissingRuleGroup"] = "WEB_ACL_MISSING_RULE_GROUP";
})(ViolationReason || (ViolationReason = {}));
export var ComplianceViolator;
(function (ComplianceViolator) {
    /**
     * @internal
     */
    ComplianceViolator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceViolator || (ComplianceViolator = {}));
export var PolicyComplianceDetail;
(function (PolicyComplianceDetail) {
    /**
     * @internal
     */
    PolicyComplianceDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyComplianceDetail || (PolicyComplianceDetail = {}));
export var GetComplianceDetailResponse;
(function (GetComplianceDetailResponse) {
    /**
     * @internal
     */
    GetComplianceDetailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetComplianceDetailResponse || (GetComplianceDetailResponse = {}));
export var GetNotificationChannelRequest;
(function (GetNotificationChannelRequest) {
    /**
     * @internal
     */
    GetNotificationChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNotificationChannelRequest || (GetNotificationChannelRequest = {}));
export var GetNotificationChannelResponse;
(function (GetNotificationChannelResponse) {
    /**
     * @internal
     */
    GetNotificationChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetNotificationChannelResponse || (GetNotificationChannelResponse = {}));
export var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyRequest || (GetPolicyRequest = {}));
export var CustomerPolicyScopeIdType;
(function (CustomerPolicyScopeIdType) {
    CustomerPolicyScopeIdType["ACCOUNT"] = "ACCOUNT";
    CustomerPolicyScopeIdType["ORG_UNIT"] = "ORG_UNIT";
})(CustomerPolicyScopeIdType || (CustomerPolicyScopeIdType = {}));
export var ResourceTag;
(function (ResourceTag) {
    /**
     * @internal
     */
    ResourceTag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceTag || (ResourceTag = {}));
export var SecurityServiceType;
(function (SecurityServiceType) {
    SecurityServiceType["DNS_FIREWALL"] = "DNS_FIREWALL";
    SecurityServiceType["NETWORK_FIREWALL"] = "NETWORK_FIREWALL";
    SecurityServiceType["SECURITY_GROUPS_COMMON"] = "SECURITY_GROUPS_COMMON";
    SecurityServiceType["SECURITY_GROUPS_CONTENT_AUDIT"] = "SECURITY_GROUPS_CONTENT_AUDIT";
    SecurityServiceType["SECURITY_GROUPS_USAGE_AUDIT"] = "SECURITY_GROUPS_USAGE_AUDIT";
    SecurityServiceType["SHIELD_ADVANCED"] = "SHIELD_ADVANCED";
    SecurityServiceType["WAF"] = "WAF";
    SecurityServiceType["WAFV2"] = "WAFV2";
})(SecurityServiceType || (SecurityServiceType = {}));
export var SecurityServicePolicyData;
(function (SecurityServicePolicyData) {
    /**
     * @internal
     */
    SecurityServicePolicyData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityServicePolicyData || (SecurityServicePolicyData = {}));
export var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Policy || (Policy = {}));
export var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPolicyResponse || (GetPolicyResponse = {}));
export var InvalidTypeException;
(function (InvalidTypeException) {
    /**
     * @internal
     */
    InvalidTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTypeException || (InvalidTypeException = {}));
export var GetProtectionStatusRequest;
(function (GetProtectionStatusRequest) {
    /**
     * @internal
     */
    GetProtectionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProtectionStatusRequest || (GetProtectionStatusRequest = {}));
export var GetProtectionStatusResponse;
(function (GetProtectionStatusResponse) {
    /**
     * @internal
     */
    GetProtectionStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProtectionStatusResponse || (GetProtectionStatusResponse = {}));
export var GetProtocolsListRequest;
(function (GetProtocolsListRequest) {
    /**
     * @internal
     */
    GetProtocolsListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProtocolsListRequest || (GetProtocolsListRequest = {}));
export var ProtocolsListData;
(function (ProtocolsListData) {
    /**
     * @internal
     */
    ProtocolsListData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProtocolsListData || (ProtocolsListData = {}));
export var GetProtocolsListResponse;
(function (GetProtocolsListResponse) {
    /**
     * @internal
     */
    GetProtocolsListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetProtocolsListResponse || (GetProtocolsListResponse = {}));
export var GetViolationDetailsRequest;
(function (GetViolationDetailsRequest) {
    /**
     * @internal
     */
    GetViolationDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetViolationDetailsRequest || (GetViolationDetailsRequest = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var PartialMatch;
(function (PartialMatch) {
    /**
     * @internal
     */
    PartialMatch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartialMatch || (PartialMatch = {}));
export var RemediationActionType;
(function (RemediationActionType) {
    RemediationActionType["Modify"] = "MODIFY";
    RemediationActionType["Remove"] = "REMOVE";
})(RemediationActionType || (RemediationActionType = {}));
export var SecurityGroupRuleDescription;
(function (SecurityGroupRuleDescription) {
    /**
     * @internal
     */
    SecurityGroupRuleDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityGroupRuleDescription || (SecurityGroupRuleDescription = {}));
export var SecurityGroupRemediationAction;
(function (SecurityGroupRemediationAction) {
    /**
     * @internal
     */
    SecurityGroupRemediationAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityGroupRemediationAction || (SecurityGroupRemediationAction = {}));
export var AwsVPCSecurityGroupViolation;
(function (AwsVPCSecurityGroupViolation) {
    /**
     * @internal
     */
    AwsVPCSecurityGroupViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsVPCSecurityGroupViolation || (AwsVPCSecurityGroupViolation = {}));
export var DnsDuplicateRuleGroupViolation;
(function (DnsDuplicateRuleGroupViolation) {
    /**
     * @internal
     */
    DnsDuplicateRuleGroupViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DnsDuplicateRuleGroupViolation || (DnsDuplicateRuleGroupViolation = {}));
export var DnsRuleGroupLimitExceededViolation;
(function (DnsRuleGroupLimitExceededViolation) {
    /**
     * @internal
     */
    DnsRuleGroupLimitExceededViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DnsRuleGroupLimitExceededViolation || (DnsRuleGroupLimitExceededViolation = {}));
export var DnsRuleGroupPriorityConflictViolation;
(function (DnsRuleGroupPriorityConflictViolation) {
    /**
     * @internal
     */
    DnsRuleGroupPriorityConflictViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DnsRuleGroupPriorityConflictViolation || (DnsRuleGroupPriorityConflictViolation = {}));
export var NetworkFirewallMissingExpectedRTViolation;
(function (NetworkFirewallMissingExpectedRTViolation) {
    /**
     * @internal
     */
    NetworkFirewallMissingExpectedRTViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFirewallMissingExpectedRTViolation || (NetworkFirewallMissingExpectedRTViolation = {}));
export var NetworkFirewallMissingFirewallViolation;
(function (NetworkFirewallMissingFirewallViolation) {
    /**
     * @internal
     */
    NetworkFirewallMissingFirewallViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFirewallMissingFirewallViolation || (NetworkFirewallMissingFirewallViolation = {}));
export var NetworkFirewallMissingSubnetViolation;
(function (NetworkFirewallMissingSubnetViolation) {
    /**
     * @internal
     */
    NetworkFirewallMissingSubnetViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFirewallMissingSubnetViolation || (NetworkFirewallMissingSubnetViolation = {}));
export var StatefulRuleGroup;
(function (StatefulRuleGroup) {
    /**
     * @internal
     */
    StatefulRuleGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatefulRuleGroup || (StatefulRuleGroup = {}));
export var StatelessRuleGroup;
(function (StatelessRuleGroup) {
    /**
     * @internal
     */
    StatelessRuleGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatelessRuleGroup || (StatelessRuleGroup = {}));
export var NetworkFirewallPolicyDescription;
(function (NetworkFirewallPolicyDescription) {
    /**
     * @internal
     */
    NetworkFirewallPolicyDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFirewallPolicyDescription || (NetworkFirewallPolicyDescription = {}));
export var NetworkFirewallPolicyModifiedViolation;
(function (NetworkFirewallPolicyModifiedViolation) {
    /**
     * @internal
     */
    NetworkFirewallPolicyModifiedViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkFirewallPolicyModifiedViolation || (NetworkFirewallPolicyModifiedViolation = {}));
export var ResourceViolation;
(function (ResourceViolation) {
    /**
     * @internal
     */
    ResourceViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceViolation || (ResourceViolation = {}));
export var ViolationDetail;
(function (ViolationDetail) {
    /**
     * @internal
     */
    ViolationDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ViolationDetail || (ViolationDetail = {}));
export var GetViolationDetailsResponse;
(function (GetViolationDetailsResponse) {
    /**
     * @internal
     */
    GetViolationDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetViolationDetailsResponse || (GetViolationDetailsResponse = {}));
export var ListAppsListsRequest;
(function (ListAppsListsRequest) {
    /**
     * @internal
     */
    ListAppsListsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAppsListsRequest || (ListAppsListsRequest = {}));
export var ListAppsListsResponse;
(function (ListAppsListsResponse) {
    /**
     * @internal
     */
    ListAppsListsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAppsListsResponse || (ListAppsListsResponse = {}));
export var ListComplianceStatusRequest;
(function (ListComplianceStatusRequest) {
    /**
     * @internal
     */
    ListComplianceStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComplianceStatusRequest || (ListComplianceStatusRequest = {}));
export var PolicyComplianceStatusType;
(function (PolicyComplianceStatusType) {
    PolicyComplianceStatusType["Compliant"] = "COMPLIANT";
    PolicyComplianceStatusType["NonCompliant"] = "NON_COMPLIANT";
})(PolicyComplianceStatusType || (PolicyComplianceStatusType = {}));
export var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EvaluationResult || (EvaluationResult = {}));
export var PolicyComplianceStatus;
(function (PolicyComplianceStatus) {
    /**
     * @internal
     */
    PolicyComplianceStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyComplianceStatus || (PolicyComplianceStatus = {}));
export var ListComplianceStatusResponse;
(function (ListComplianceStatusResponse) {
    /**
     * @internal
     */
    ListComplianceStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComplianceStatusResponse || (ListComplianceStatusResponse = {}));
export var ListMemberAccountsRequest;
(function (ListMemberAccountsRequest) {
    /**
     * @internal
     */
    ListMemberAccountsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMemberAccountsRequest || (ListMemberAccountsRequest = {}));
export var ListMemberAccountsResponse;
(function (ListMemberAccountsResponse) {
    /**
     * @internal
     */
    ListMemberAccountsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMemberAccountsResponse || (ListMemberAccountsResponse = {}));
export var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesRequest || (ListPoliciesRequest = {}));
export var PolicySummary;
(function (PolicySummary) {
    /**
     * @internal
     */
    PolicySummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicySummary || (PolicySummary = {}));
export var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesResponse || (ListPoliciesResponse = {}));
export var ListProtocolsListsRequest;
(function (ListProtocolsListsRequest) {
    /**
     * @internal
     */
    ListProtocolsListsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProtocolsListsRequest || (ListProtocolsListsRequest = {}));
export var ProtocolsListDataSummary;
(function (ProtocolsListDataSummary) {
    /**
     * @internal
     */
    ProtocolsListDataSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProtocolsListDataSummary || (ProtocolsListDataSummary = {}));
export var ListProtocolsListsResponse;
(function (ListProtocolsListsResponse) {
    /**
     * @internal
     */
    ListProtocolsListsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProtocolsListsResponse || (ListProtocolsListsResponse = {}));
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
export var PutAppsListRequest;
(function (PutAppsListRequest) {
    /**
     * @internal
     */
    PutAppsListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppsListRequest || (PutAppsListRequest = {}));
export var PutAppsListResponse;
(function (PutAppsListResponse) {
    /**
     * @internal
     */
    PutAppsListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppsListResponse || (PutAppsListResponse = {}));
export var PutNotificationChannelRequest;
(function (PutNotificationChannelRequest) {
    /**
     * @internal
     */
    PutNotificationChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutNotificationChannelRequest || (PutNotificationChannelRequest = {}));
export var PutPolicyRequest;
(function (PutPolicyRequest) {
    /**
     * @internal
     */
    PutPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPolicyRequest || (PutPolicyRequest = {}));
export var PutPolicyResponse;
(function (PutPolicyResponse) {
    /**
     * @internal
     */
    PutPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPolicyResponse || (PutPolicyResponse = {}));
export var PutProtocolsListRequest;
(function (PutProtocolsListRequest) {
    /**
     * @internal
     */
    PutProtocolsListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutProtocolsListRequest || (PutProtocolsListRequest = {}));
export var PutProtocolsListResponse;
(function (PutProtocolsListResponse) {
    /**
     * @internal
     */
    PutProtocolsListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutProtocolsListResponse || (PutProtocolsListResponse = {}));
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
//# sourceMappingURL=models_0.js.map