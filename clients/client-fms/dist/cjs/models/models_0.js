"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsDuplicateRuleGroupViolation = exports.AwsVPCSecurityGroupViolation = exports.SecurityGroupRemediationAction = exports.SecurityGroupRuleDescription = exports.RemediationActionType = exports.PartialMatch = exports.Tag = exports.GetViolationDetailsRequest = exports.GetProtocolsListResponse = exports.ProtocolsListData = exports.GetProtocolsListRequest = exports.GetProtectionStatusResponse = exports.GetProtectionStatusRequest = exports.InvalidTypeException = exports.GetPolicyResponse = exports.Policy = exports.SecurityServicePolicyData = exports.SecurityServiceType = exports.ResourceTag = exports.CustomerPolicyScopeIdType = exports.GetPolicyRequest = exports.GetNotificationChannelResponse = exports.GetNotificationChannelRequest = exports.GetComplianceDetailResponse = exports.PolicyComplianceDetail = exports.ComplianceViolator = exports.ViolationReason = exports.DependentServiceName = exports.GetComplianceDetailRequest = exports.GetAppsListResponse = exports.GetAppsListRequest = exports.GetAdminAccountResponse = exports.GetAdminAccountRequest = exports.DisassociateAdminAccountRequest = exports.DeleteProtocolsListRequest = exports.LimitExceededException = exports.DeletePolicyRequest = exports.DeleteNotificationChannelRequest = exports.DeleteAppsListRequest = exports.AwsEc2InstanceViolation = exports.AwsEc2NetworkInterfaceViolation = exports.ResourceNotFoundException = exports.InvalidOperationException = exports.InvalidInputException = exports.InternalErrorException = exports.AssociateAdminAccountRequest = exports.AppsListDataSummary = exports.AppsListData = exports.App = exports.AccountRoleStatus = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.PutProtocolsListResponse = exports.PutProtocolsListRequest = exports.PutPolicyResponse = exports.PutPolicyRequest = exports.PutNotificationChannelRequest = exports.PutAppsListResponse = exports.PutAppsListRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListProtocolsListsResponse = exports.ProtocolsListDataSummary = exports.ListProtocolsListsRequest = exports.ListPoliciesResponse = exports.PolicySummary = exports.ListPoliciesRequest = exports.ListMemberAccountsResponse = exports.ListMemberAccountsRequest = exports.ListComplianceStatusResponse = exports.PolicyComplianceStatus = exports.EvaluationResult = exports.PolicyComplianceStatusType = exports.ListComplianceStatusRequest = exports.ListAppsListsResponse = exports.ListAppsListsRequest = exports.GetViolationDetailsResponse = exports.ViolationDetail = exports.ResourceViolation = exports.NetworkFirewallPolicyModifiedViolation = exports.NetworkFirewallPolicyDescription = exports.StatelessRuleGroup = exports.StatefulRuleGroup = exports.NetworkFirewallMissingSubnetViolation = exports.NetworkFirewallMissingFirewallViolation = exports.NetworkFirewallMissingExpectedRTViolation = exports.DnsRuleGroupPriorityConflictViolation = exports.DnsRuleGroupLimitExceededViolation = void 0;
var AccountRoleStatus;
(function (AccountRoleStatus) {
    AccountRoleStatus["Creating"] = "CREATING";
    AccountRoleStatus["Deleted"] = "DELETED";
    AccountRoleStatus["Deleting"] = "DELETING";
    AccountRoleStatus["PendingDeletion"] = "PENDING_DELETION";
    AccountRoleStatus["Ready"] = "READY";
})(AccountRoleStatus = exports.AccountRoleStatus || (exports.AccountRoleStatus = {}));
var App;
(function (App) {
    /**
     * @internal
     */
    App.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(App = exports.App || (exports.App = {}));
var AppsListData;
(function (AppsListData) {
    /**
     * @internal
     */
    AppsListData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppsListData = exports.AppsListData || (exports.AppsListData = {}));
var AppsListDataSummary;
(function (AppsListDataSummary) {
    /**
     * @internal
     */
    AppsListDataSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppsListDataSummary = exports.AppsListDataSummary || (exports.AppsListDataSummary = {}));
var AssociateAdminAccountRequest;
(function (AssociateAdminAccountRequest) {
    /**
     * @internal
     */
    AssociateAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateAdminAccountRequest = exports.AssociateAdminAccountRequest || (exports.AssociateAdminAccountRequest = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var AwsEc2NetworkInterfaceViolation;
(function (AwsEc2NetworkInterfaceViolation) {
    /**
     * @internal
     */
    AwsEc2NetworkInterfaceViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2NetworkInterfaceViolation = exports.AwsEc2NetworkInterfaceViolation || (exports.AwsEc2NetworkInterfaceViolation = {}));
var AwsEc2InstanceViolation;
(function (AwsEc2InstanceViolation) {
    /**
     * @internal
     */
    AwsEc2InstanceViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsEc2InstanceViolation = exports.AwsEc2InstanceViolation || (exports.AwsEc2InstanceViolation = {}));
var DeleteAppsListRequest;
(function (DeleteAppsListRequest) {
    /**
     * @internal
     */
    DeleteAppsListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppsListRequest = exports.DeleteAppsListRequest || (exports.DeleteAppsListRequest = {}));
var DeleteNotificationChannelRequest;
(function (DeleteNotificationChannelRequest) {
    /**
     * @internal
     */
    DeleteNotificationChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNotificationChannelRequest = exports.DeleteNotificationChannelRequest || (exports.DeleteNotificationChannelRequest = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var DeleteProtocolsListRequest;
(function (DeleteProtocolsListRequest) {
    /**
     * @internal
     */
    DeleteProtocolsListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProtocolsListRequest = exports.DeleteProtocolsListRequest || (exports.DeleteProtocolsListRequest = {}));
var DisassociateAdminAccountRequest;
(function (DisassociateAdminAccountRequest) {
    /**
     * @internal
     */
    DisassociateAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAdminAccountRequest = exports.DisassociateAdminAccountRequest || (exports.DisassociateAdminAccountRequest = {}));
var GetAdminAccountRequest;
(function (GetAdminAccountRequest) {
    /**
     * @internal
     */
    GetAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdminAccountRequest = exports.GetAdminAccountRequest || (exports.GetAdminAccountRequest = {}));
var GetAdminAccountResponse;
(function (GetAdminAccountResponse) {
    /**
     * @internal
     */
    GetAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdminAccountResponse = exports.GetAdminAccountResponse || (exports.GetAdminAccountResponse = {}));
var GetAppsListRequest;
(function (GetAppsListRequest) {
    /**
     * @internal
     */
    GetAppsListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppsListRequest = exports.GetAppsListRequest || (exports.GetAppsListRequest = {}));
var GetAppsListResponse;
(function (GetAppsListResponse) {
    /**
     * @internal
     */
    GetAppsListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppsListResponse = exports.GetAppsListResponse || (exports.GetAppsListResponse = {}));
var GetComplianceDetailRequest;
(function (GetComplianceDetailRequest) {
    /**
     * @internal
     */
    GetComplianceDetailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceDetailRequest = exports.GetComplianceDetailRequest || (exports.GetComplianceDetailRequest = {}));
var DependentServiceName;
(function (DependentServiceName) {
    DependentServiceName["AWSConfig"] = "AWSCONFIG";
    DependentServiceName["AWSShieldAdvanced"] = "AWSSHIELD_ADVANCED";
    DependentServiceName["AWSVirtualPrivateCloud"] = "AWSVPC";
    DependentServiceName["AWSWAF"] = "AWSWAF";
})(DependentServiceName = exports.DependentServiceName || (exports.DependentServiceName = {}));
var ViolationReason;
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
})(ViolationReason = exports.ViolationReason || (exports.ViolationReason = {}));
var ComplianceViolator;
(function (ComplianceViolator) {
    /**
     * @internal
     */
    ComplianceViolator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceViolator = exports.ComplianceViolator || (exports.ComplianceViolator = {}));
var PolicyComplianceDetail;
(function (PolicyComplianceDetail) {
    /**
     * @internal
     */
    PolicyComplianceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyComplianceDetail = exports.PolicyComplianceDetail || (exports.PolicyComplianceDetail = {}));
var GetComplianceDetailResponse;
(function (GetComplianceDetailResponse) {
    /**
     * @internal
     */
    GetComplianceDetailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceDetailResponse = exports.GetComplianceDetailResponse || (exports.GetComplianceDetailResponse = {}));
var GetNotificationChannelRequest;
(function (GetNotificationChannelRequest) {
    /**
     * @internal
     */
    GetNotificationChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNotificationChannelRequest = exports.GetNotificationChannelRequest || (exports.GetNotificationChannelRequest = {}));
var GetNotificationChannelResponse;
(function (GetNotificationChannelResponse) {
    /**
     * @internal
     */
    GetNotificationChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetNotificationChannelResponse = exports.GetNotificationChannelResponse || (exports.GetNotificationChannelResponse = {}));
var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {}));
var CustomerPolicyScopeIdType;
(function (CustomerPolicyScopeIdType) {
    CustomerPolicyScopeIdType["ACCOUNT"] = "ACCOUNT";
    CustomerPolicyScopeIdType["ORG_UNIT"] = "ORG_UNIT";
})(CustomerPolicyScopeIdType = exports.CustomerPolicyScopeIdType || (exports.CustomerPolicyScopeIdType = {}));
var ResourceTag;
(function (ResourceTag) {
    /**
     * @internal
     */
    ResourceTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var SecurityServiceType;
(function (SecurityServiceType) {
    SecurityServiceType["DNS_FIREWALL"] = "DNS_FIREWALL";
    SecurityServiceType["NETWORK_FIREWALL"] = "NETWORK_FIREWALL";
    SecurityServiceType["SECURITY_GROUPS_COMMON"] = "SECURITY_GROUPS_COMMON";
    SecurityServiceType["SECURITY_GROUPS_CONTENT_AUDIT"] = "SECURITY_GROUPS_CONTENT_AUDIT";
    SecurityServiceType["SECURITY_GROUPS_USAGE_AUDIT"] = "SECURITY_GROUPS_USAGE_AUDIT";
    SecurityServiceType["SHIELD_ADVANCED"] = "SHIELD_ADVANCED";
    SecurityServiceType["WAF"] = "WAF";
    SecurityServiceType["WAFV2"] = "WAFV2";
})(SecurityServiceType = exports.SecurityServiceType || (exports.SecurityServiceType = {}));
var SecurityServicePolicyData;
(function (SecurityServicePolicyData) {
    /**
     * @internal
     */
    SecurityServicePolicyData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityServicePolicyData = exports.SecurityServicePolicyData || (exports.SecurityServicePolicyData = {}));
var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Policy = exports.Policy || (exports.Policy = {}));
var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {}));
var InvalidTypeException;
(function (InvalidTypeException) {
    /**
     * @internal
     */
    InvalidTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTypeException = exports.InvalidTypeException || (exports.InvalidTypeException = {}));
var GetProtectionStatusRequest;
(function (GetProtectionStatusRequest) {
    /**
     * @internal
     */
    GetProtectionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProtectionStatusRequest = exports.GetProtectionStatusRequest || (exports.GetProtectionStatusRequest = {}));
var GetProtectionStatusResponse;
(function (GetProtectionStatusResponse) {
    /**
     * @internal
     */
    GetProtectionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProtectionStatusResponse = exports.GetProtectionStatusResponse || (exports.GetProtectionStatusResponse = {}));
var GetProtocolsListRequest;
(function (GetProtocolsListRequest) {
    /**
     * @internal
     */
    GetProtocolsListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProtocolsListRequest = exports.GetProtocolsListRequest || (exports.GetProtocolsListRequest = {}));
var ProtocolsListData;
(function (ProtocolsListData) {
    /**
     * @internal
     */
    ProtocolsListData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtocolsListData = exports.ProtocolsListData || (exports.ProtocolsListData = {}));
var GetProtocolsListResponse;
(function (GetProtocolsListResponse) {
    /**
     * @internal
     */
    GetProtocolsListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProtocolsListResponse = exports.GetProtocolsListResponse || (exports.GetProtocolsListResponse = {}));
var GetViolationDetailsRequest;
(function (GetViolationDetailsRequest) {
    /**
     * @internal
     */
    GetViolationDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetViolationDetailsRequest = exports.GetViolationDetailsRequest || (exports.GetViolationDetailsRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var PartialMatch;
(function (PartialMatch) {
    /**
     * @internal
     */
    PartialMatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartialMatch = exports.PartialMatch || (exports.PartialMatch = {}));
var RemediationActionType;
(function (RemediationActionType) {
    RemediationActionType["Modify"] = "MODIFY";
    RemediationActionType["Remove"] = "REMOVE";
})(RemediationActionType = exports.RemediationActionType || (exports.RemediationActionType = {}));
var SecurityGroupRuleDescription;
(function (SecurityGroupRuleDescription) {
    /**
     * @internal
     */
    SecurityGroupRuleDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupRuleDescription = exports.SecurityGroupRuleDescription || (exports.SecurityGroupRuleDescription = {}));
var SecurityGroupRemediationAction;
(function (SecurityGroupRemediationAction) {
    /**
     * @internal
     */
    SecurityGroupRemediationAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityGroupRemediationAction = exports.SecurityGroupRemediationAction || (exports.SecurityGroupRemediationAction = {}));
var AwsVPCSecurityGroupViolation;
(function (AwsVPCSecurityGroupViolation) {
    /**
     * @internal
     */
    AwsVPCSecurityGroupViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsVPCSecurityGroupViolation = exports.AwsVPCSecurityGroupViolation || (exports.AwsVPCSecurityGroupViolation = {}));
var DnsDuplicateRuleGroupViolation;
(function (DnsDuplicateRuleGroupViolation) {
    /**
     * @internal
     */
    DnsDuplicateRuleGroupViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsDuplicateRuleGroupViolation = exports.DnsDuplicateRuleGroupViolation || (exports.DnsDuplicateRuleGroupViolation = {}));
var DnsRuleGroupLimitExceededViolation;
(function (DnsRuleGroupLimitExceededViolation) {
    /**
     * @internal
     */
    DnsRuleGroupLimitExceededViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsRuleGroupLimitExceededViolation = exports.DnsRuleGroupLimitExceededViolation || (exports.DnsRuleGroupLimitExceededViolation = {}));
var DnsRuleGroupPriorityConflictViolation;
(function (DnsRuleGroupPriorityConflictViolation) {
    /**
     * @internal
     */
    DnsRuleGroupPriorityConflictViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DnsRuleGroupPriorityConflictViolation = exports.DnsRuleGroupPriorityConflictViolation || (exports.DnsRuleGroupPriorityConflictViolation = {}));
var NetworkFirewallMissingExpectedRTViolation;
(function (NetworkFirewallMissingExpectedRTViolation) {
    /**
     * @internal
     */
    NetworkFirewallMissingExpectedRTViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFirewallMissingExpectedRTViolation = exports.NetworkFirewallMissingExpectedRTViolation || (exports.NetworkFirewallMissingExpectedRTViolation = {}));
var NetworkFirewallMissingFirewallViolation;
(function (NetworkFirewallMissingFirewallViolation) {
    /**
     * @internal
     */
    NetworkFirewallMissingFirewallViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFirewallMissingFirewallViolation = exports.NetworkFirewallMissingFirewallViolation || (exports.NetworkFirewallMissingFirewallViolation = {}));
var NetworkFirewallMissingSubnetViolation;
(function (NetworkFirewallMissingSubnetViolation) {
    /**
     * @internal
     */
    NetworkFirewallMissingSubnetViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFirewallMissingSubnetViolation = exports.NetworkFirewallMissingSubnetViolation || (exports.NetworkFirewallMissingSubnetViolation = {}));
var StatefulRuleGroup;
(function (StatefulRuleGroup) {
    /**
     * @internal
     */
    StatefulRuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatefulRuleGroup = exports.StatefulRuleGroup || (exports.StatefulRuleGroup = {}));
var StatelessRuleGroup;
(function (StatelessRuleGroup) {
    /**
     * @internal
     */
    StatelessRuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatelessRuleGroup = exports.StatelessRuleGroup || (exports.StatelessRuleGroup = {}));
var NetworkFirewallPolicyDescription;
(function (NetworkFirewallPolicyDescription) {
    /**
     * @internal
     */
    NetworkFirewallPolicyDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFirewallPolicyDescription = exports.NetworkFirewallPolicyDescription || (exports.NetworkFirewallPolicyDescription = {}));
var NetworkFirewallPolicyModifiedViolation;
(function (NetworkFirewallPolicyModifiedViolation) {
    /**
     * @internal
     */
    NetworkFirewallPolicyModifiedViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkFirewallPolicyModifiedViolation = exports.NetworkFirewallPolicyModifiedViolation || (exports.NetworkFirewallPolicyModifiedViolation = {}));
var ResourceViolation;
(function (ResourceViolation) {
    /**
     * @internal
     */
    ResourceViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceViolation = exports.ResourceViolation || (exports.ResourceViolation = {}));
var ViolationDetail;
(function (ViolationDetail) {
    /**
     * @internal
     */
    ViolationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViolationDetail = exports.ViolationDetail || (exports.ViolationDetail = {}));
var GetViolationDetailsResponse;
(function (GetViolationDetailsResponse) {
    /**
     * @internal
     */
    GetViolationDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetViolationDetailsResponse = exports.GetViolationDetailsResponse || (exports.GetViolationDetailsResponse = {}));
var ListAppsListsRequest;
(function (ListAppsListsRequest) {
    /**
     * @internal
     */
    ListAppsListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppsListsRequest = exports.ListAppsListsRequest || (exports.ListAppsListsRequest = {}));
var ListAppsListsResponse;
(function (ListAppsListsResponse) {
    /**
     * @internal
     */
    ListAppsListsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppsListsResponse = exports.ListAppsListsResponse || (exports.ListAppsListsResponse = {}));
var ListComplianceStatusRequest;
(function (ListComplianceStatusRequest) {
    /**
     * @internal
     */
    ListComplianceStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComplianceStatusRequest = exports.ListComplianceStatusRequest || (exports.ListComplianceStatusRequest = {}));
var PolicyComplianceStatusType;
(function (PolicyComplianceStatusType) {
    PolicyComplianceStatusType["Compliant"] = "COMPLIANT";
    PolicyComplianceStatusType["NonCompliant"] = "NON_COMPLIANT";
})(PolicyComplianceStatusType = exports.PolicyComplianceStatusType || (exports.PolicyComplianceStatusType = {}));
var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var PolicyComplianceStatus;
(function (PolicyComplianceStatus) {
    /**
     * @internal
     */
    PolicyComplianceStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyComplianceStatus = exports.PolicyComplianceStatus || (exports.PolicyComplianceStatus = {}));
var ListComplianceStatusResponse;
(function (ListComplianceStatusResponse) {
    /**
     * @internal
     */
    ListComplianceStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComplianceStatusResponse = exports.ListComplianceStatusResponse || (exports.ListComplianceStatusResponse = {}));
var ListMemberAccountsRequest;
(function (ListMemberAccountsRequest) {
    /**
     * @internal
     */
    ListMemberAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMemberAccountsRequest = exports.ListMemberAccountsRequest || (exports.ListMemberAccountsRequest = {}));
var ListMemberAccountsResponse;
(function (ListMemberAccountsResponse) {
    /**
     * @internal
     */
    ListMemberAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMemberAccountsResponse = exports.ListMemberAccountsResponse || (exports.ListMemberAccountsResponse = {}));
var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesRequest = exports.ListPoliciesRequest || (exports.ListPoliciesRequest = {}));
var PolicySummary;
(function (PolicySummary) {
    /**
     * @internal
     */
    PolicySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicySummary = exports.PolicySummary || (exports.PolicySummary = {}));
var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesResponse = exports.ListPoliciesResponse || (exports.ListPoliciesResponse = {}));
var ListProtocolsListsRequest;
(function (ListProtocolsListsRequest) {
    /**
     * @internal
     */
    ListProtocolsListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProtocolsListsRequest = exports.ListProtocolsListsRequest || (exports.ListProtocolsListsRequest = {}));
var ProtocolsListDataSummary;
(function (ProtocolsListDataSummary) {
    /**
     * @internal
     */
    ProtocolsListDataSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtocolsListDataSummary = exports.ProtocolsListDataSummary || (exports.ProtocolsListDataSummary = {}));
var ListProtocolsListsResponse;
(function (ListProtocolsListsResponse) {
    /**
     * @internal
     */
    ListProtocolsListsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProtocolsListsResponse = exports.ListProtocolsListsResponse || (exports.ListProtocolsListsResponse = {}));
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
var PutAppsListRequest;
(function (PutAppsListRequest) {
    /**
     * @internal
     */
    PutAppsListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppsListRequest = exports.PutAppsListRequest || (exports.PutAppsListRequest = {}));
var PutAppsListResponse;
(function (PutAppsListResponse) {
    /**
     * @internal
     */
    PutAppsListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppsListResponse = exports.PutAppsListResponse || (exports.PutAppsListResponse = {}));
var PutNotificationChannelRequest;
(function (PutNotificationChannelRequest) {
    /**
     * @internal
     */
    PutNotificationChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutNotificationChannelRequest = exports.PutNotificationChannelRequest || (exports.PutNotificationChannelRequest = {}));
var PutPolicyRequest;
(function (PutPolicyRequest) {
    /**
     * @internal
     */
    PutPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPolicyRequest = exports.PutPolicyRequest || (exports.PutPolicyRequest = {}));
var PutPolicyResponse;
(function (PutPolicyResponse) {
    /**
     * @internal
     */
    PutPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPolicyResponse = exports.PutPolicyResponse || (exports.PutPolicyResponse = {}));
var PutProtocolsListRequest;
(function (PutProtocolsListRequest) {
    /**
     * @internal
     */
    PutProtocolsListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProtocolsListRequest = exports.PutProtocolsListRequest || (exports.PutProtocolsListRequest = {}));
var PutProtocolsListResponse;
(function (PutProtocolsListResponse) {
    /**
     * @internal
     */
    PutProtocolsListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProtocolsListResponse = exports.PutProtocolsListResponse || (exports.PutProtocolsListResponse = {}));
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
//# sourceMappingURL=models_0.js.map