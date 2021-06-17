"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResolverEndpointResponse = exports.CreateResolverEndpointRequest = exports.IpAddressRequest = exports.CreateFirewallRuleGroupResponse = exports.FirewallRuleGroup = exports.FirewallRuleGroupStatus = exports.ShareStatus = exports.CreateFirewallRuleGroupRequest = exports.CreateFirewallRuleResponse = exports.FirewallRule = exports.CreateFirewallRuleRequest = exports.CreateFirewallDomainListResponse = exports.FirewallDomainList = exports.FirewallDomainListStatus = exports.CreateFirewallDomainListRequest = exports.BlockResponse = exports.BlockOverrideDnsType = exports.ResourceUnavailableException = exports.AssociateResolverRuleResponse = exports.ResolverRuleAssociation = exports.ResolverRuleAssociationStatus = exports.AssociateResolverRuleRequest = exports.AssociateResolverQueryLogConfigResponse = exports.ResolverQueryLogConfigAssociation = exports.ResolverQueryLogConfigAssociationStatus = exports.ResolverQueryLogConfigAssociationError = exports.AssociateResolverQueryLogConfigRequest = exports.ResourceExistsException = exports.InvalidRequestException = exports.InvalidParameterException = exports.AssociateResolverEndpointIpAddressResponse = exports.ResolverEndpoint = exports.ResolverEndpointStatus = exports.ResolverEndpointDirection = exports.AssociateResolverEndpointIpAddressRequest = exports.IpAddressUpdate = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.LimitExceededException = exports.InternalServiceErrorException = exports.ConflictException = exports.AssociateFirewallRuleGroupResponse = exports.FirewallRuleGroupAssociation = exports.FirewallRuleGroupAssociationStatus = exports.AssociateFirewallRuleGroupRequest = exports.Tag = exports.MutationProtectionStatus = exports.Action = exports.AccessDeniedException = void 0;
exports.ResolverDNSSECValidationStatus = exports.GetResolverDnssecConfigRequest = exports.GetFirewallRuleGroupPolicyResponse = exports.GetFirewallRuleGroupPolicyRequest = exports.GetFirewallRuleGroupAssociationResponse = exports.GetFirewallRuleGroupAssociationRequest = exports.GetFirewallRuleGroupResponse = exports.GetFirewallRuleGroupRequest = exports.GetFirewallDomainListResponse = exports.GetFirewallDomainListRequest = exports.GetFirewallConfigResponse = exports.GetFirewallConfigRequest = exports.FirewallRuleGroupMetadata = exports.FirewallDomainUpdateOperation = exports.FirewallDomainListMetadata = exports.FirewallDomainImportOperation = exports.FirewallConfig = exports.FirewallFailOpenStatus = exports.Filter = exports.DisassociateResolverRuleResponse = exports.DisassociateResolverRuleRequest = exports.DisassociateResolverQueryLogConfigResponse = exports.DisassociateResolverQueryLogConfigRequest = exports.DisassociateResolverEndpointIpAddressResponse = exports.DisassociateResolverEndpointIpAddressRequest = exports.DisassociateFirewallRuleGroupResponse = exports.DisassociateFirewallRuleGroupRequest = exports.ResourceInUseException = exports.DeleteResolverRuleResponse = exports.DeleteResolverRuleRequest = exports.DeleteResolverQueryLogConfigResponse = exports.DeleteResolverQueryLogConfigRequest = exports.DeleteResolverEndpointResponse = exports.DeleteResolverEndpointRequest = exports.DeleteFirewallRuleGroupResponse = exports.DeleteFirewallRuleGroupRequest = exports.DeleteFirewallRuleResponse = exports.DeleteFirewallRuleRequest = exports.DeleteFirewallDomainListResponse = exports.DeleteFirewallDomainListRequest = exports.CreateResolverRuleResponse = exports.ResolverRule = exports.ResolverRuleStatus = exports.CreateResolverRuleRequest = exports.TargetAddress = exports.RuleTypeOption = exports.CreateResolverQueryLogConfigResponse = exports.ResolverQueryLogConfig = exports.ResolverQueryLogConfigStatus = exports.CreateResolverQueryLogConfigRequest = void 0;
exports.ListResolverRulesRequest = exports.ListResolverRuleAssociationsResponse = exports.ListResolverRuleAssociationsRequest = exports.ListResolverQueryLogConfigsResponse = exports.ListResolverQueryLogConfigsRequest = exports.ListResolverQueryLogConfigAssociationsResponse = exports.ListResolverQueryLogConfigAssociationsRequest = exports.SortOrder = exports.ListResolverEndpointsResponse = exports.ListResolverEndpointsRequest = exports.ListResolverEndpointIpAddressesResponse = exports.ListResolverEndpointIpAddressesRequest = exports.ListResolverDnssecConfigsResponse = exports.ListResolverDnssecConfigsRequest = exports.ListFirewallRulesResponse = exports.ListFirewallRulesRequest = exports.ListFirewallRuleGroupsResponse = exports.ListFirewallRuleGroupsRequest = exports.ListFirewallRuleGroupAssociationsResponse = exports.ListFirewallRuleGroupAssociationsRequest = exports.ListFirewallDomainsResponse = exports.ListFirewallDomainsRequest = exports.ListFirewallDomainListsResponse = exports.ListFirewallDomainListsRequest = exports.ListFirewallConfigsResponse = exports.ListFirewallConfigsRequest = exports.IpAddressResponse = exports.IpAddressStatus = exports.InvalidTagException = exports.InvalidPolicyDocument = exports.InvalidNextTokenException = exports.ImportFirewallDomainsResponse = exports.ImportFirewallDomainsRequest = exports.GetResolverRulePolicyResponse = exports.GetResolverRulePolicyRequest = exports.GetResolverRuleAssociationResponse = exports.GetResolverRuleAssociationRequest = exports.GetResolverRuleResponse = exports.GetResolverRuleRequest = exports.UnknownResourceException = exports.GetResolverQueryLogConfigPolicyResponse = exports.GetResolverQueryLogConfigPolicyRequest = exports.GetResolverQueryLogConfigAssociationResponse = exports.GetResolverQueryLogConfigAssociationRequest = exports.GetResolverQueryLogConfigResponse = exports.GetResolverQueryLogConfigRequest = exports.GetResolverEndpointResponse = exports.GetResolverEndpointRequest = exports.GetResolverDnssecConfigResponse = exports.ResolverDnssecConfig = void 0;
exports.UpdateResolverRuleResponse = exports.UpdateResolverRuleRequest = exports.UpdateResolverEndpointResponse = exports.UpdateResolverEndpointRequest = exports.UpdateResolverDnssecConfigResponse = exports.UpdateResolverDnssecConfigRequest = exports.Validation = exports.UpdateFirewallRuleGroupAssociationResponse = exports.UpdateFirewallRuleGroupAssociationRequest = exports.UpdateFirewallRuleResponse = exports.UpdateFirewallRuleRequest = exports.UpdateFirewallDomainsResponse = exports.UpdateFirewallDomainsRequest = exports.UpdateFirewallConfigResponse = exports.UpdateFirewallConfigRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ResolverRuleConfig = exports.PutResolverRulePolicyResponse = exports.PutResolverRulePolicyRequest = exports.PutResolverQueryLogConfigPolicyResponse = exports.PutResolverQueryLogConfigPolicyRequest = exports.PutFirewallRuleGroupPolicyResponse = exports.PutFirewallRuleGroupPolicyRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListResolverRulesResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var Action;
(function (Action) {
    Action["ALERT"] = "ALERT";
    Action["ALLOW"] = "ALLOW";
    Action["BLOCK"] = "BLOCK";
})(Action = exports.Action || (exports.Action = {}));
var MutationProtectionStatus;
(function (MutationProtectionStatus) {
    MutationProtectionStatus["DISABLED"] = "DISABLED";
    MutationProtectionStatus["ENABLED"] = "ENABLED";
})(MutationProtectionStatus = exports.MutationProtectionStatus || (exports.MutationProtectionStatus = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AssociateFirewallRuleGroupRequest;
(function (AssociateFirewallRuleGroupRequest) {
    /**
     * @internal
     */
    AssociateFirewallRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFirewallRuleGroupRequest = exports.AssociateFirewallRuleGroupRequest || (exports.AssociateFirewallRuleGroupRequest = {}));
var FirewallRuleGroupAssociationStatus;
(function (FirewallRuleGroupAssociationStatus) {
    FirewallRuleGroupAssociationStatus["COMPLETE"] = "COMPLETE";
    FirewallRuleGroupAssociationStatus["DELETING"] = "DELETING";
    FirewallRuleGroupAssociationStatus["UPDATING"] = "UPDATING";
})(FirewallRuleGroupAssociationStatus = exports.FirewallRuleGroupAssociationStatus || (exports.FirewallRuleGroupAssociationStatus = {}));
var FirewallRuleGroupAssociation;
(function (FirewallRuleGroupAssociation) {
    /**
     * @internal
     */
    FirewallRuleGroupAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallRuleGroupAssociation = exports.FirewallRuleGroupAssociation || (exports.FirewallRuleGroupAssociation = {}));
var AssociateFirewallRuleGroupResponse;
(function (AssociateFirewallRuleGroupResponse) {
    /**
     * @internal
     */
    AssociateFirewallRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateFirewallRuleGroupResponse = exports.AssociateFirewallRuleGroupResponse || (exports.AssociateFirewallRuleGroupResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
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
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var IpAddressUpdate;
(function (IpAddressUpdate) {
    /**
     * @internal
     */
    IpAddressUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpAddressUpdate = exports.IpAddressUpdate || (exports.IpAddressUpdate = {}));
var AssociateResolverEndpointIpAddressRequest;
(function (AssociateResolverEndpointIpAddressRequest) {
    /**
     * @internal
     */
    AssociateResolverEndpointIpAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResolverEndpointIpAddressRequest = exports.AssociateResolverEndpointIpAddressRequest || (exports.AssociateResolverEndpointIpAddressRequest = {}));
var ResolverEndpointDirection;
(function (ResolverEndpointDirection) {
    ResolverEndpointDirection["Inbound"] = "INBOUND";
    ResolverEndpointDirection["Outbound"] = "OUTBOUND";
})(ResolverEndpointDirection = exports.ResolverEndpointDirection || (exports.ResolverEndpointDirection = {}));
var ResolverEndpointStatus;
(function (ResolverEndpointStatus) {
    ResolverEndpointStatus["ActionNeeded"] = "ACTION_NEEDED";
    ResolverEndpointStatus["AutoRecovering"] = "AUTO_RECOVERING";
    ResolverEndpointStatus["Creating"] = "CREATING";
    ResolverEndpointStatus["Deleting"] = "DELETING";
    ResolverEndpointStatus["Operational"] = "OPERATIONAL";
    ResolverEndpointStatus["Updating"] = "UPDATING";
})(ResolverEndpointStatus = exports.ResolverEndpointStatus || (exports.ResolverEndpointStatus = {}));
var ResolverEndpoint;
(function (ResolverEndpoint) {
    /**
     * @internal
     */
    ResolverEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverEndpoint = exports.ResolverEndpoint || (exports.ResolverEndpoint = {}));
var AssociateResolverEndpointIpAddressResponse;
(function (AssociateResolverEndpointIpAddressResponse) {
    /**
     * @internal
     */
    AssociateResolverEndpointIpAddressResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResolverEndpointIpAddressResponse = exports.AssociateResolverEndpointIpAddressResponse || (exports.AssociateResolverEndpointIpAddressResponse = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceExistsException;
(function (ResourceExistsException) {
    /**
     * @internal
     */
    ResourceExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceExistsException = exports.ResourceExistsException || (exports.ResourceExistsException = {}));
var AssociateResolverQueryLogConfigRequest;
(function (AssociateResolverQueryLogConfigRequest) {
    /**
     * @internal
     */
    AssociateResolverQueryLogConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResolverQueryLogConfigRequest = exports.AssociateResolverQueryLogConfigRequest || (exports.AssociateResolverQueryLogConfigRequest = {}));
var ResolverQueryLogConfigAssociationError;
(function (ResolverQueryLogConfigAssociationError) {
    ResolverQueryLogConfigAssociationError["AccessDenied"] = "ACCESS_DENIED";
    ResolverQueryLogConfigAssociationError["DestinationNotFound"] = "DESTINATION_NOT_FOUND";
    ResolverQueryLogConfigAssociationError["InternalServiceError"] = "INTERNAL_SERVICE_ERROR";
    ResolverQueryLogConfigAssociationError["None"] = "NONE";
})(ResolverQueryLogConfigAssociationError = exports.ResolverQueryLogConfigAssociationError || (exports.ResolverQueryLogConfigAssociationError = {}));
var ResolverQueryLogConfigAssociationStatus;
(function (ResolverQueryLogConfigAssociationStatus) {
    ResolverQueryLogConfigAssociationStatus["ActionNeeded"] = "ACTION_NEEDED";
    ResolverQueryLogConfigAssociationStatus["Active"] = "ACTIVE";
    ResolverQueryLogConfigAssociationStatus["Creating"] = "CREATING";
    ResolverQueryLogConfigAssociationStatus["Deleting"] = "DELETING";
    ResolverQueryLogConfigAssociationStatus["Failed"] = "FAILED";
})(ResolverQueryLogConfigAssociationStatus = exports.ResolverQueryLogConfigAssociationStatus || (exports.ResolverQueryLogConfigAssociationStatus = {}));
var ResolverQueryLogConfigAssociation;
(function (ResolverQueryLogConfigAssociation) {
    /**
     * @internal
     */
    ResolverQueryLogConfigAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverQueryLogConfigAssociation = exports.ResolverQueryLogConfigAssociation || (exports.ResolverQueryLogConfigAssociation = {}));
var AssociateResolverQueryLogConfigResponse;
(function (AssociateResolverQueryLogConfigResponse) {
    /**
     * @internal
     */
    AssociateResolverQueryLogConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResolverQueryLogConfigResponse = exports.AssociateResolverQueryLogConfigResponse || (exports.AssociateResolverQueryLogConfigResponse = {}));
var AssociateResolverRuleRequest;
(function (AssociateResolverRuleRequest) {
    /**
     * @internal
     */
    AssociateResolverRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResolverRuleRequest = exports.AssociateResolverRuleRequest || (exports.AssociateResolverRuleRequest = {}));
var ResolverRuleAssociationStatus;
(function (ResolverRuleAssociationStatus) {
    ResolverRuleAssociationStatus["Complete"] = "COMPLETE";
    ResolverRuleAssociationStatus["Creating"] = "CREATING";
    ResolverRuleAssociationStatus["Deleting"] = "DELETING";
    ResolverRuleAssociationStatus["Failed"] = "FAILED";
    ResolverRuleAssociationStatus["Overridden"] = "OVERRIDDEN";
})(ResolverRuleAssociationStatus = exports.ResolverRuleAssociationStatus || (exports.ResolverRuleAssociationStatus = {}));
var ResolverRuleAssociation;
(function (ResolverRuleAssociation) {
    /**
     * @internal
     */
    ResolverRuleAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverRuleAssociation = exports.ResolverRuleAssociation || (exports.ResolverRuleAssociation = {}));
var AssociateResolverRuleResponse;
(function (AssociateResolverRuleResponse) {
    /**
     * @internal
     */
    AssociateResolverRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResolverRuleResponse = exports.AssociateResolverRuleResponse || (exports.AssociateResolverRuleResponse = {}));
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    /**
     * @internal
     */
    ResourceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var BlockOverrideDnsType;
(function (BlockOverrideDnsType) {
    BlockOverrideDnsType["CNAME"] = "CNAME";
})(BlockOverrideDnsType = exports.BlockOverrideDnsType || (exports.BlockOverrideDnsType = {}));
var BlockResponse;
(function (BlockResponse) {
    BlockResponse["NODATA"] = "NODATA";
    BlockResponse["NXDOMAIN"] = "NXDOMAIN";
    BlockResponse["OVERRIDE"] = "OVERRIDE";
})(BlockResponse = exports.BlockResponse || (exports.BlockResponse = {}));
var CreateFirewallDomainListRequest;
(function (CreateFirewallDomainListRequest) {
    /**
     * @internal
     */
    CreateFirewallDomainListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallDomainListRequest = exports.CreateFirewallDomainListRequest || (exports.CreateFirewallDomainListRequest = {}));
var FirewallDomainListStatus;
(function (FirewallDomainListStatus) {
    FirewallDomainListStatus["COMPLETE"] = "COMPLETE";
    FirewallDomainListStatus["COMPLETE_IMPORT_FAILED"] = "COMPLETE_IMPORT_FAILED";
    FirewallDomainListStatus["DELETING"] = "DELETING";
    FirewallDomainListStatus["IMPORTING"] = "IMPORTING";
    FirewallDomainListStatus["UPDATING"] = "UPDATING";
})(FirewallDomainListStatus = exports.FirewallDomainListStatus || (exports.FirewallDomainListStatus = {}));
var FirewallDomainList;
(function (FirewallDomainList) {
    /**
     * @internal
     */
    FirewallDomainList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallDomainList = exports.FirewallDomainList || (exports.FirewallDomainList = {}));
var CreateFirewallDomainListResponse;
(function (CreateFirewallDomainListResponse) {
    /**
     * @internal
     */
    CreateFirewallDomainListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallDomainListResponse = exports.CreateFirewallDomainListResponse || (exports.CreateFirewallDomainListResponse = {}));
var CreateFirewallRuleRequest;
(function (CreateFirewallRuleRequest) {
    /**
     * @internal
     */
    CreateFirewallRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallRuleRequest = exports.CreateFirewallRuleRequest || (exports.CreateFirewallRuleRequest = {}));
var FirewallRule;
(function (FirewallRule) {
    /**
     * @internal
     */
    FirewallRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallRule = exports.FirewallRule || (exports.FirewallRule = {}));
var CreateFirewallRuleResponse;
(function (CreateFirewallRuleResponse) {
    /**
     * @internal
     */
    CreateFirewallRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallRuleResponse = exports.CreateFirewallRuleResponse || (exports.CreateFirewallRuleResponse = {}));
var CreateFirewallRuleGroupRequest;
(function (CreateFirewallRuleGroupRequest) {
    /**
     * @internal
     */
    CreateFirewallRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallRuleGroupRequest = exports.CreateFirewallRuleGroupRequest || (exports.CreateFirewallRuleGroupRequest = {}));
var ShareStatus;
(function (ShareStatus) {
    ShareStatus["NotShared"] = "NOT_SHARED";
    ShareStatus["SharedByMe"] = "SHARED_BY_ME";
    ShareStatus["SharedWithMe"] = "SHARED_WITH_ME";
})(ShareStatus = exports.ShareStatus || (exports.ShareStatus = {}));
var FirewallRuleGroupStatus;
(function (FirewallRuleGroupStatus) {
    FirewallRuleGroupStatus["COMPLETE"] = "COMPLETE";
    FirewallRuleGroupStatus["DELETING"] = "DELETING";
    FirewallRuleGroupStatus["UPDATING"] = "UPDATING";
})(FirewallRuleGroupStatus = exports.FirewallRuleGroupStatus || (exports.FirewallRuleGroupStatus = {}));
var FirewallRuleGroup;
(function (FirewallRuleGroup) {
    /**
     * @internal
     */
    FirewallRuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallRuleGroup = exports.FirewallRuleGroup || (exports.FirewallRuleGroup = {}));
var CreateFirewallRuleGroupResponse;
(function (CreateFirewallRuleGroupResponse) {
    /**
     * @internal
     */
    CreateFirewallRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFirewallRuleGroupResponse = exports.CreateFirewallRuleGroupResponse || (exports.CreateFirewallRuleGroupResponse = {}));
var IpAddressRequest;
(function (IpAddressRequest) {
    /**
     * @internal
     */
    IpAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpAddressRequest = exports.IpAddressRequest || (exports.IpAddressRequest = {}));
var CreateResolverEndpointRequest;
(function (CreateResolverEndpointRequest) {
    /**
     * @internal
     */
    CreateResolverEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResolverEndpointRequest = exports.CreateResolverEndpointRequest || (exports.CreateResolverEndpointRequest = {}));
var CreateResolverEndpointResponse;
(function (CreateResolverEndpointResponse) {
    /**
     * @internal
     */
    CreateResolverEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResolverEndpointResponse = exports.CreateResolverEndpointResponse || (exports.CreateResolverEndpointResponse = {}));
var CreateResolverQueryLogConfigRequest;
(function (CreateResolverQueryLogConfigRequest) {
    /**
     * @internal
     */
    CreateResolverQueryLogConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResolverQueryLogConfigRequest = exports.CreateResolverQueryLogConfigRequest || (exports.CreateResolverQueryLogConfigRequest = {}));
var ResolverQueryLogConfigStatus;
(function (ResolverQueryLogConfigStatus) {
    ResolverQueryLogConfigStatus["Created"] = "CREATED";
    ResolverQueryLogConfigStatus["Creating"] = "CREATING";
    ResolverQueryLogConfigStatus["Deleting"] = "DELETING";
    ResolverQueryLogConfigStatus["Failed"] = "FAILED";
})(ResolverQueryLogConfigStatus = exports.ResolverQueryLogConfigStatus || (exports.ResolverQueryLogConfigStatus = {}));
var ResolverQueryLogConfig;
(function (ResolverQueryLogConfig) {
    /**
     * @internal
     */
    ResolverQueryLogConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverQueryLogConfig = exports.ResolverQueryLogConfig || (exports.ResolverQueryLogConfig = {}));
var CreateResolverQueryLogConfigResponse;
(function (CreateResolverQueryLogConfigResponse) {
    /**
     * @internal
     */
    CreateResolverQueryLogConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResolverQueryLogConfigResponse = exports.CreateResolverQueryLogConfigResponse || (exports.CreateResolverQueryLogConfigResponse = {}));
var RuleTypeOption;
(function (RuleTypeOption) {
    RuleTypeOption["Forward"] = "FORWARD";
    RuleTypeOption["Recursive"] = "RECURSIVE";
    RuleTypeOption["System"] = "SYSTEM";
})(RuleTypeOption = exports.RuleTypeOption || (exports.RuleTypeOption = {}));
var TargetAddress;
(function (TargetAddress) {
    /**
     * @internal
     */
    TargetAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetAddress = exports.TargetAddress || (exports.TargetAddress = {}));
var CreateResolverRuleRequest;
(function (CreateResolverRuleRequest) {
    /**
     * @internal
     */
    CreateResolverRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResolverRuleRequest = exports.CreateResolverRuleRequest || (exports.CreateResolverRuleRequest = {}));
var ResolverRuleStatus;
(function (ResolverRuleStatus) {
    ResolverRuleStatus["Complete"] = "COMPLETE";
    ResolverRuleStatus["Deleting"] = "DELETING";
    ResolverRuleStatus["Failed"] = "FAILED";
    ResolverRuleStatus["Updating"] = "UPDATING";
})(ResolverRuleStatus = exports.ResolverRuleStatus || (exports.ResolverRuleStatus = {}));
var ResolverRule;
(function (ResolverRule) {
    /**
     * @internal
     */
    ResolverRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverRule = exports.ResolverRule || (exports.ResolverRule = {}));
var CreateResolverRuleResponse;
(function (CreateResolverRuleResponse) {
    /**
     * @internal
     */
    CreateResolverRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResolverRuleResponse = exports.CreateResolverRuleResponse || (exports.CreateResolverRuleResponse = {}));
var DeleteFirewallDomainListRequest;
(function (DeleteFirewallDomainListRequest) {
    /**
     * @internal
     */
    DeleteFirewallDomainListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallDomainListRequest = exports.DeleteFirewallDomainListRequest || (exports.DeleteFirewallDomainListRequest = {}));
var DeleteFirewallDomainListResponse;
(function (DeleteFirewallDomainListResponse) {
    /**
     * @internal
     */
    DeleteFirewallDomainListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallDomainListResponse = exports.DeleteFirewallDomainListResponse || (exports.DeleteFirewallDomainListResponse = {}));
var DeleteFirewallRuleRequest;
(function (DeleteFirewallRuleRequest) {
    /**
     * @internal
     */
    DeleteFirewallRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallRuleRequest = exports.DeleteFirewallRuleRequest || (exports.DeleteFirewallRuleRequest = {}));
var DeleteFirewallRuleResponse;
(function (DeleteFirewallRuleResponse) {
    /**
     * @internal
     */
    DeleteFirewallRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallRuleResponse = exports.DeleteFirewallRuleResponse || (exports.DeleteFirewallRuleResponse = {}));
var DeleteFirewallRuleGroupRequest;
(function (DeleteFirewallRuleGroupRequest) {
    /**
     * @internal
     */
    DeleteFirewallRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallRuleGroupRequest = exports.DeleteFirewallRuleGroupRequest || (exports.DeleteFirewallRuleGroupRequest = {}));
var DeleteFirewallRuleGroupResponse;
(function (DeleteFirewallRuleGroupResponse) {
    /**
     * @internal
     */
    DeleteFirewallRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallRuleGroupResponse = exports.DeleteFirewallRuleGroupResponse || (exports.DeleteFirewallRuleGroupResponse = {}));
var DeleteResolverEndpointRequest;
(function (DeleteResolverEndpointRequest) {
    /**
     * @internal
     */
    DeleteResolverEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResolverEndpointRequest = exports.DeleteResolverEndpointRequest || (exports.DeleteResolverEndpointRequest = {}));
var DeleteResolverEndpointResponse;
(function (DeleteResolverEndpointResponse) {
    /**
     * @internal
     */
    DeleteResolverEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResolverEndpointResponse = exports.DeleteResolverEndpointResponse || (exports.DeleteResolverEndpointResponse = {}));
var DeleteResolverQueryLogConfigRequest;
(function (DeleteResolverQueryLogConfigRequest) {
    /**
     * @internal
     */
    DeleteResolverQueryLogConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResolverQueryLogConfigRequest = exports.DeleteResolverQueryLogConfigRequest || (exports.DeleteResolverQueryLogConfigRequest = {}));
var DeleteResolverQueryLogConfigResponse;
(function (DeleteResolverQueryLogConfigResponse) {
    /**
     * @internal
     */
    DeleteResolverQueryLogConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResolverQueryLogConfigResponse = exports.DeleteResolverQueryLogConfigResponse || (exports.DeleteResolverQueryLogConfigResponse = {}));
var DeleteResolverRuleRequest;
(function (DeleteResolverRuleRequest) {
    /**
     * @internal
     */
    DeleteResolverRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResolverRuleRequest = exports.DeleteResolverRuleRequest || (exports.DeleteResolverRuleRequest = {}));
var DeleteResolverRuleResponse;
(function (DeleteResolverRuleResponse) {
    /**
     * @internal
     */
    DeleteResolverRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResolverRuleResponse = exports.DeleteResolverRuleResponse || (exports.DeleteResolverRuleResponse = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DisassociateFirewallRuleGroupRequest;
(function (DisassociateFirewallRuleGroupRequest) {
    /**
     * @internal
     */
    DisassociateFirewallRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFirewallRuleGroupRequest = exports.DisassociateFirewallRuleGroupRequest || (exports.DisassociateFirewallRuleGroupRequest = {}));
var DisassociateFirewallRuleGroupResponse;
(function (DisassociateFirewallRuleGroupResponse) {
    /**
     * @internal
     */
    DisassociateFirewallRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFirewallRuleGroupResponse = exports.DisassociateFirewallRuleGroupResponse || (exports.DisassociateFirewallRuleGroupResponse = {}));
var DisassociateResolverEndpointIpAddressRequest;
(function (DisassociateResolverEndpointIpAddressRequest) {
    /**
     * @internal
     */
    DisassociateResolverEndpointIpAddressRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResolverEndpointIpAddressRequest = exports.DisassociateResolverEndpointIpAddressRequest || (exports.DisassociateResolverEndpointIpAddressRequest = {}));
var DisassociateResolverEndpointIpAddressResponse;
(function (DisassociateResolverEndpointIpAddressResponse) {
    /**
     * @internal
     */
    DisassociateResolverEndpointIpAddressResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResolverEndpointIpAddressResponse = exports.DisassociateResolverEndpointIpAddressResponse || (exports.DisassociateResolverEndpointIpAddressResponse = {}));
var DisassociateResolverQueryLogConfigRequest;
(function (DisassociateResolverQueryLogConfigRequest) {
    /**
     * @internal
     */
    DisassociateResolverQueryLogConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResolverQueryLogConfigRequest = exports.DisassociateResolverQueryLogConfigRequest || (exports.DisassociateResolverQueryLogConfigRequest = {}));
var DisassociateResolverQueryLogConfigResponse;
(function (DisassociateResolverQueryLogConfigResponse) {
    /**
     * @internal
     */
    DisassociateResolverQueryLogConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResolverQueryLogConfigResponse = exports.DisassociateResolverQueryLogConfigResponse || (exports.DisassociateResolverQueryLogConfigResponse = {}));
var DisassociateResolverRuleRequest;
(function (DisassociateResolverRuleRequest) {
    /**
     * @internal
     */
    DisassociateResolverRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResolverRuleRequest = exports.DisassociateResolverRuleRequest || (exports.DisassociateResolverRuleRequest = {}));
var DisassociateResolverRuleResponse;
(function (DisassociateResolverRuleResponse) {
    /**
     * @internal
     */
    DisassociateResolverRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResolverRuleResponse = exports.DisassociateResolverRuleResponse || (exports.DisassociateResolverRuleResponse = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var FirewallFailOpenStatus;
(function (FirewallFailOpenStatus) {
    FirewallFailOpenStatus["DISABLED"] = "DISABLED";
    FirewallFailOpenStatus["ENABLED"] = "ENABLED";
})(FirewallFailOpenStatus = exports.FirewallFailOpenStatus || (exports.FirewallFailOpenStatus = {}));
var FirewallConfig;
(function (FirewallConfig) {
    /**
     * @internal
     */
    FirewallConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallConfig = exports.FirewallConfig || (exports.FirewallConfig = {}));
var FirewallDomainImportOperation;
(function (FirewallDomainImportOperation) {
    FirewallDomainImportOperation["REPLACE"] = "REPLACE";
})(FirewallDomainImportOperation = exports.FirewallDomainImportOperation || (exports.FirewallDomainImportOperation = {}));
var FirewallDomainListMetadata;
(function (FirewallDomainListMetadata) {
    /**
     * @internal
     */
    FirewallDomainListMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallDomainListMetadata = exports.FirewallDomainListMetadata || (exports.FirewallDomainListMetadata = {}));
var FirewallDomainUpdateOperation;
(function (FirewallDomainUpdateOperation) {
    FirewallDomainUpdateOperation["ADD"] = "ADD";
    FirewallDomainUpdateOperation["REMOVE"] = "REMOVE";
    FirewallDomainUpdateOperation["REPLACE"] = "REPLACE";
})(FirewallDomainUpdateOperation = exports.FirewallDomainUpdateOperation || (exports.FirewallDomainUpdateOperation = {}));
var FirewallRuleGroupMetadata;
(function (FirewallRuleGroupMetadata) {
    /**
     * @internal
     */
    FirewallRuleGroupMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallRuleGroupMetadata = exports.FirewallRuleGroupMetadata || (exports.FirewallRuleGroupMetadata = {}));
var GetFirewallConfigRequest;
(function (GetFirewallConfigRequest) {
    /**
     * @internal
     */
    GetFirewallConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallConfigRequest = exports.GetFirewallConfigRequest || (exports.GetFirewallConfigRequest = {}));
var GetFirewallConfigResponse;
(function (GetFirewallConfigResponse) {
    /**
     * @internal
     */
    GetFirewallConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallConfigResponse = exports.GetFirewallConfigResponse || (exports.GetFirewallConfigResponse = {}));
var GetFirewallDomainListRequest;
(function (GetFirewallDomainListRequest) {
    /**
     * @internal
     */
    GetFirewallDomainListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallDomainListRequest = exports.GetFirewallDomainListRequest || (exports.GetFirewallDomainListRequest = {}));
var GetFirewallDomainListResponse;
(function (GetFirewallDomainListResponse) {
    /**
     * @internal
     */
    GetFirewallDomainListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallDomainListResponse = exports.GetFirewallDomainListResponse || (exports.GetFirewallDomainListResponse = {}));
var GetFirewallRuleGroupRequest;
(function (GetFirewallRuleGroupRequest) {
    /**
     * @internal
     */
    GetFirewallRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallRuleGroupRequest = exports.GetFirewallRuleGroupRequest || (exports.GetFirewallRuleGroupRequest = {}));
var GetFirewallRuleGroupResponse;
(function (GetFirewallRuleGroupResponse) {
    /**
     * @internal
     */
    GetFirewallRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallRuleGroupResponse = exports.GetFirewallRuleGroupResponse || (exports.GetFirewallRuleGroupResponse = {}));
var GetFirewallRuleGroupAssociationRequest;
(function (GetFirewallRuleGroupAssociationRequest) {
    /**
     * @internal
     */
    GetFirewallRuleGroupAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallRuleGroupAssociationRequest = exports.GetFirewallRuleGroupAssociationRequest || (exports.GetFirewallRuleGroupAssociationRequest = {}));
var GetFirewallRuleGroupAssociationResponse;
(function (GetFirewallRuleGroupAssociationResponse) {
    /**
     * @internal
     */
    GetFirewallRuleGroupAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallRuleGroupAssociationResponse = exports.GetFirewallRuleGroupAssociationResponse || (exports.GetFirewallRuleGroupAssociationResponse = {}));
var GetFirewallRuleGroupPolicyRequest;
(function (GetFirewallRuleGroupPolicyRequest) {
    /**
     * @internal
     */
    GetFirewallRuleGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallRuleGroupPolicyRequest = exports.GetFirewallRuleGroupPolicyRequest || (exports.GetFirewallRuleGroupPolicyRequest = {}));
var GetFirewallRuleGroupPolicyResponse;
(function (GetFirewallRuleGroupPolicyResponse) {
    /**
     * @internal
     */
    GetFirewallRuleGroupPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFirewallRuleGroupPolicyResponse = exports.GetFirewallRuleGroupPolicyResponse || (exports.GetFirewallRuleGroupPolicyResponse = {}));
var GetResolverDnssecConfigRequest;
(function (GetResolverDnssecConfigRequest) {
    /**
     * @internal
     */
    GetResolverDnssecConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverDnssecConfigRequest = exports.GetResolverDnssecConfigRequest || (exports.GetResolverDnssecConfigRequest = {}));
var ResolverDNSSECValidationStatus;
(function (ResolverDNSSECValidationStatus) {
    ResolverDNSSECValidationStatus["Disabled"] = "DISABLED";
    ResolverDNSSECValidationStatus["Disabling"] = "DISABLING";
    ResolverDNSSECValidationStatus["Enabled"] = "ENABLED";
    ResolverDNSSECValidationStatus["Enabling"] = "ENABLING";
})(ResolverDNSSECValidationStatus = exports.ResolverDNSSECValidationStatus || (exports.ResolverDNSSECValidationStatus = {}));
var ResolverDnssecConfig;
(function (ResolverDnssecConfig) {
    /**
     * @internal
     */
    ResolverDnssecConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverDnssecConfig = exports.ResolverDnssecConfig || (exports.ResolverDnssecConfig = {}));
var GetResolverDnssecConfigResponse;
(function (GetResolverDnssecConfigResponse) {
    /**
     * @internal
     */
    GetResolverDnssecConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverDnssecConfigResponse = exports.GetResolverDnssecConfigResponse || (exports.GetResolverDnssecConfigResponse = {}));
var GetResolverEndpointRequest;
(function (GetResolverEndpointRequest) {
    /**
     * @internal
     */
    GetResolverEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverEndpointRequest = exports.GetResolverEndpointRequest || (exports.GetResolverEndpointRequest = {}));
var GetResolverEndpointResponse;
(function (GetResolverEndpointResponse) {
    /**
     * @internal
     */
    GetResolverEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverEndpointResponse = exports.GetResolverEndpointResponse || (exports.GetResolverEndpointResponse = {}));
var GetResolverQueryLogConfigRequest;
(function (GetResolverQueryLogConfigRequest) {
    /**
     * @internal
     */
    GetResolverQueryLogConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverQueryLogConfigRequest = exports.GetResolverQueryLogConfigRequest || (exports.GetResolverQueryLogConfigRequest = {}));
var GetResolverQueryLogConfigResponse;
(function (GetResolverQueryLogConfigResponse) {
    /**
     * @internal
     */
    GetResolverQueryLogConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverQueryLogConfigResponse = exports.GetResolverQueryLogConfigResponse || (exports.GetResolverQueryLogConfigResponse = {}));
var GetResolverQueryLogConfigAssociationRequest;
(function (GetResolverQueryLogConfigAssociationRequest) {
    /**
     * @internal
     */
    GetResolverQueryLogConfigAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverQueryLogConfigAssociationRequest = exports.GetResolverQueryLogConfigAssociationRequest || (exports.GetResolverQueryLogConfigAssociationRequest = {}));
var GetResolverQueryLogConfigAssociationResponse;
(function (GetResolverQueryLogConfigAssociationResponse) {
    /**
     * @internal
     */
    GetResolverQueryLogConfigAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverQueryLogConfigAssociationResponse = exports.GetResolverQueryLogConfigAssociationResponse || (exports.GetResolverQueryLogConfigAssociationResponse = {}));
var GetResolverQueryLogConfigPolicyRequest;
(function (GetResolverQueryLogConfigPolicyRequest) {
    /**
     * @internal
     */
    GetResolverQueryLogConfigPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverQueryLogConfigPolicyRequest = exports.GetResolverQueryLogConfigPolicyRequest || (exports.GetResolverQueryLogConfigPolicyRequest = {}));
var GetResolverQueryLogConfigPolicyResponse;
(function (GetResolverQueryLogConfigPolicyResponse) {
    /**
     * @internal
     */
    GetResolverQueryLogConfigPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverQueryLogConfigPolicyResponse = exports.GetResolverQueryLogConfigPolicyResponse || (exports.GetResolverQueryLogConfigPolicyResponse = {}));
var UnknownResourceException;
(function (UnknownResourceException) {
    /**
     * @internal
     */
    UnknownResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnknownResourceException = exports.UnknownResourceException || (exports.UnknownResourceException = {}));
var GetResolverRuleRequest;
(function (GetResolverRuleRequest) {
    /**
     * @internal
     */
    GetResolverRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverRuleRequest = exports.GetResolverRuleRequest || (exports.GetResolverRuleRequest = {}));
var GetResolverRuleResponse;
(function (GetResolverRuleResponse) {
    /**
     * @internal
     */
    GetResolverRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverRuleResponse = exports.GetResolverRuleResponse || (exports.GetResolverRuleResponse = {}));
var GetResolverRuleAssociationRequest;
(function (GetResolverRuleAssociationRequest) {
    /**
     * @internal
     */
    GetResolverRuleAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverRuleAssociationRequest = exports.GetResolverRuleAssociationRequest || (exports.GetResolverRuleAssociationRequest = {}));
var GetResolverRuleAssociationResponse;
(function (GetResolverRuleAssociationResponse) {
    /**
     * @internal
     */
    GetResolverRuleAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverRuleAssociationResponse = exports.GetResolverRuleAssociationResponse || (exports.GetResolverRuleAssociationResponse = {}));
var GetResolverRulePolicyRequest;
(function (GetResolverRulePolicyRequest) {
    /**
     * @internal
     */
    GetResolverRulePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverRulePolicyRequest = exports.GetResolverRulePolicyRequest || (exports.GetResolverRulePolicyRequest = {}));
var GetResolverRulePolicyResponse;
(function (GetResolverRulePolicyResponse) {
    /**
     * @internal
     */
    GetResolverRulePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResolverRulePolicyResponse = exports.GetResolverRulePolicyResponse || (exports.GetResolverRulePolicyResponse = {}));
var ImportFirewallDomainsRequest;
(function (ImportFirewallDomainsRequest) {
    /**
     * @internal
     */
    ImportFirewallDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportFirewallDomainsRequest = exports.ImportFirewallDomainsRequest || (exports.ImportFirewallDomainsRequest = {}));
var ImportFirewallDomainsResponse;
(function (ImportFirewallDomainsResponse) {
    /**
     * @internal
     */
    ImportFirewallDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportFirewallDomainsResponse = exports.ImportFirewallDomainsResponse || (exports.ImportFirewallDomainsResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidPolicyDocument;
(function (InvalidPolicyDocument) {
    /**
     * @internal
     */
    InvalidPolicyDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPolicyDocument = exports.InvalidPolicyDocument || (exports.InvalidPolicyDocument = {}));
var InvalidTagException;
(function (InvalidTagException) {
    /**
     * @internal
     */
    InvalidTagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var IpAddressStatus;
(function (IpAddressStatus) {
    IpAddressStatus["Attached"] = "ATTACHED";
    IpAddressStatus["Attaching"] = "ATTACHING";
    IpAddressStatus["Creating"] = "CREATING";
    IpAddressStatus["DeleteFailedFasExpired"] = "DELETE_FAILED_FAS_EXPIRED";
    IpAddressStatus["Deleting"] = "DELETING";
    IpAddressStatus["Detaching"] = "DETACHING";
    IpAddressStatus["FailedCreation"] = "FAILED_CREATION";
    IpAddressStatus["FailedResourceGone"] = "FAILED_RESOURCE_GONE";
    IpAddressStatus["RemapAttaching"] = "REMAP_ATTACHING";
    IpAddressStatus["RemapDetaching"] = "REMAP_DETACHING";
})(IpAddressStatus = exports.IpAddressStatus || (exports.IpAddressStatus = {}));
var IpAddressResponse;
(function (IpAddressResponse) {
    /**
     * @internal
     */
    IpAddressResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpAddressResponse = exports.IpAddressResponse || (exports.IpAddressResponse = {}));
var ListFirewallConfigsRequest;
(function (ListFirewallConfigsRequest) {
    /**
     * @internal
     */
    ListFirewallConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallConfigsRequest = exports.ListFirewallConfigsRequest || (exports.ListFirewallConfigsRequest = {}));
var ListFirewallConfigsResponse;
(function (ListFirewallConfigsResponse) {
    /**
     * @internal
     */
    ListFirewallConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallConfigsResponse = exports.ListFirewallConfigsResponse || (exports.ListFirewallConfigsResponse = {}));
var ListFirewallDomainListsRequest;
(function (ListFirewallDomainListsRequest) {
    /**
     * @internal
     */
    ListFirewallDomainListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallDomainListsRequest = exports.ListFirewallDomainListsRequest || (exports.ListFirewallDomainListsRequest = {}));
var ListFirewallDomainListsResponse;
(function (ListFirewallDomainListsResponse) {
    /**
     * @internal
     */
    ListFirewallDomainListsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallDomainListsResponse = exports.ListFirewallDomainListsResponse || (exports.ListFirewallDomainListsResponse = {}));
var ListFirewallDomainsRequest;
(function (ListFirewallDomainsRequest) {
    /**
     * @internal
     */
    ListFirewallDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallDomainsRequest = exports.ListFirewallDomainsRequest || (exports.ListFirewallDomainsRequest = {}));
var ListFirewallDomainsResponse;
(function (ListFirewallDomainsResponse) {
    /**
     * @internal
     */
    ListFirewallDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallDomainsResponse = exports.ListFirewallDomainsResponse || (exports.ListFirewallDomainsResponse = {}));
var ListFirewallRuleGroupAssociationsRequest;
(function (ListFirewallRuleGroupAssociationsRequest) {
    /**
     * @internal
     */
    ListFirewallRuleGroupAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallRuleGroupAssociationsRequest = exports.ListFirewallRuleGroupAssociationsRequest || (exports.ListFirewallRuleGroupAssociationsRequest = {}));
var ListFirewallRuleGroupAssociationsResponse;
(function (ListFirewallRuleGroupAssociationsResponse) {
    /**
     * @internal
     */
    ListFirewallRuleGroupAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallRuleGroupAssociationsResponse = exports.ListFirewallRuleGroupAssociationsResponse || (exports.ListFirewallRuleGroupAssociationsResponse = {}));
var ListFirewallRuleGroupsRequest;
(function (ListFirewallRuleGroupsRequest) {
    /**
     * @internal
     */
    ListFirewallRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallRuleGroupsRequest = exports.ListFirewallRuleGroupsRequest || (exports.ListFirewallRuleGroupsRequest = {}));
var ListFirewallRuleGroupsResponse;
(function (ListFirewallRuleGroupsResponse) {
    /**
     * @internal
     */
    ListFirewallRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallRuleGroupsResponse = exports.ListFirewallRuleGroupsResponse || (exports.ListFirewallRuleGroupsResponse = {}));
var ListFirewallRulesRequest;
(function (ListFirewallRulesRequest) {
    /**
     * @internal
     */
    ListFirewallRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallRulesRequest = exports.ListFirewallRulesRequest || (exports.ListFirewallRulesRequest = {}));
var ListFirewallRulesResponse;
(function (ListFirewallRulesResponse) {
    /**
     * @internal
     */
    ListFirewallRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFirewallRulesResponse = exports.ListFirewallRulesResponse || (exports.ListFirewallRulesResponse = {}));
var ListResolverDnssecConfigsRequest;
(function (ListResolverDnssecConfigsRequest) {
    /**
     * @internal
     */
    ListResolverDnssecConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverDnssecConfigsRequest = exports.ListResolverDnssecConfigsRequest || (exports.ListResolverDnssecConfigsRequest = {}));
var ListResolverDnssecConfigsResponse;
(function (ListResolverDnssecConfigsResponse) {
    /**
     * @internal
     */
    ListResolverDnssecConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverDnssecConfigsResponse = exports.ListResolverDnssecConfigsResponse || (exports.ListResolverDnssecConfigsResponse = {}));
var ListResolverEndpointIpAddressesRequest;
(function (ListResolverEndpointIpAddressesRequest) {
    /**
     * @internal
     */
    ListResolverEndpointIpAddressesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverEndpointIpAddressesRequest = exports.ListResolverEndpointIpAddressesRequest || (exports.ListResolverEndpointIpAddressesRequest = {}));
var ListResolverEndpointIpAddressesResponse;
(function (ListResolverEndpointIpAddressesResponse) {
    /**
     * @internal
     */
    ListResolverEndpointIpAddressesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverEndpointIpAddressesResponse = exports.ListResolverEndpointIpAddressesResponse || (exports.ListResolverEndpointIpAddressesResponse = {}));
var ListResolverEndpointsRequest;
(function (ListResolverEndpointsRequest) {
    /**
     * @internal
     */
    ListResolverEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverEndpointsRequest = exports.ListResolverEndpointsRequest || (exports.ListResolverEndpointsRequest = {}));
var ListResolverEndpointsResponse;
(function (ListResolverEndpointsResponse) {
    /**
     * @internal
     */
    ListResolverEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverEndpointsResponse = exports.ListResolverEndpointsResponse || (exports.ListResolverEndpointsResponse = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["Ascending"] = "ASCENDING";
    SortOrder["Descending"] = "DESCENDING";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListResolverQueryLogConfigAssociationsRequest;
(function (ListResolverQueryLogConfigAssociationsRequest) {
    /**
     * @internal
     */
    ListResolverQueryLogConfigAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverQueryLogConfigAssociationsRequest = exports.ListResolverQueryLogConfigAssociationsRequest || (exports.ListResolverQueryLogConfigAssociationsRequest = {}));
var ListResolverQueryLogConfigAssociationsResponse;
(function (ListResolverQueryLogConfigAssociationsResponse) {
    /**
     * @internal
     */
    ListResolverQueryLogConfigAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverQueryLogConfigAssociationsResponse = exports.ListResolverQueryLogConfigAssociationsResponse || (exports.ListResolverQueryLogConfigAssociationsResponse = {}));
var ListResolverQueryLogConfigsRequest;
(function (ListResolverQueryLogConfigsRequest) {
    /**
     * @internal
     */
    ListResolverQueryLogConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverQueryLogConfigsRequest = exports.ListResolverQueryLogConfigsRequest || (exports.ListResolverQueryLogConfigsRequest = {}));
var ListResolverQueryLogConfigsResponse;
(function (ListResolverQueryLogConfigsResponse) {
    /**
     * @internal
     */
    ListResolverQueryLogConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverQueryLogConfigsResponse = exports.ListResolverQueryLogConfigsResponse || (exports.ListResolverQueryLogConfigsResponse = {}));
var ListResolverRuleAssociationsRequest;
(function (ListResolverRuleAssociationsRequest) {
    /**
     * @internal
     */
    ListResolverRuleAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverRuleAssociationsRequest = exports.ListResolverRuleAssociationsRequest || (exports.ListResolverRuleAssociationsRequest = {}));
var ListResolverRuleAssociationsResponse;
(function (ListResolverRuleAssociationsResponse) {
    /**
     * @internal
     */
    ListResolverRuleAssociationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverRuleAssociationsResponse = exports.ListResolverRuleAssociationsResponse || (exports.ListResolverRuleAssociationsResponse = {}));
var ListResolverRulesRequest;
(function (ListResolverRulesRequest) {
    /**
     * @internal
     */
    ListResolverRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverRulesRequest = exports.ListResolverRulesRequest || (exports.ListResolverRulesRequest = {}));
var ListResolverRulesResponse;
(function (ListResolverRulesResponse) {
    /**
     * @internal
     */
    ListResolverRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResolverRulesResponse = exports.ListResolverRulesResponse || (exports.ListResolverRulesResponse = {}));
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
var PutFirewallRuleGroupPolicyRequest;
(function (PutFirewallRuleGroupPolicyRequest) {
    /**
     * @internal
     */
    PutFirewallRuleGroupPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFirewallRuleGroupPolicyRequest = exports.PutFirewallRuleGroupPolicyRequest || (exports.PutFirewallRuleGroupPolicyRequest = {}));
var PutFirewallRuleGroupPolicyResponse;
(function (PutFirewallRuleGroupPolicyResponse) {
    /**
     * @internal
     */
    PutFirewallRuleGroupPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFirewallRuleGroupPolicyResponse = exports.PutFirewallRuleGroupPolicyResponse || (exports.PutFirewallRuleGroupPolicyResponse = {}));
var PutResolverQueryLogConfigPolicyRequest;
(function (PutResolverQueryLogConfigPolicyRequest) {
    /**
     * @internal
     */
    PutResolverQueryLogConfigPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResolverQueryLogConfigPolicyRequest = exports.PutResolverQueryLogConfigPolicyRequest || (exports.PutResolverQueryLogConfigPolicyRequest = {}));
var PutResolverQueryLogConfigPolicyResponse;
(function (PutResolverQueryLogConfigPolicyResponse) {
    /**
     * @internal
     */
    PutResolverQueryLogConfigPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResolverQueryLogConfigPolicyResponse = exports.PutResolverQueryLogConfigPolicyResponse || (exports.PutResolverQueryLogConfigPolicyResponse = {}));
var PutResolverRulePolicyRequest;
(function (PutResolverRulePolicyRequest) {
    /**
     * @internal
     */
    PutResolverRulePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResolverRulePolicyRequest = exports.PutResolverRulePolicyRequest || (exports.PutResolverRulePolicyRequest = {}));
var PutResolverRulePolicyResponse;
(function (PutResolverRulePolicyResponse) {
    /**
     * @internal
     */
    PutResolverRulePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResolverRulePolicyResponse = exports.PutResolverRulePolicyResponse || (exports.PutResolverRulePolicyResponse = {}));
var ResolverRuleConfig;
(function (ResolverRuleConfig) {
    /**
     * @internal
     */
    ResolverRuleConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolverRuleConfig = exports.ResolverRuleConfig || (exports.ResolverRuleConfig = {}));
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
var UpdateFirewallConfigRequest;
(function (UpdateFirewallConfigRequest) {
    /**
     * @internal
     */
    UpdateFirewallConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallConfigRequest = exports.UpdateFirewallConfigRequest || (exports.UpdateFirewallConfigRequest = {}));
var UpdateFirewallConfigResponse;
(function (UpdateFirewallConfigResponse) {
    /**
     * @internal
     */
    UpdateFirewallConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallConfigResponse = exports.UpdateFirewallConfigResponse || (exports.UpdateFirewallConfigResponse = {}));
var UpdateFirewallDomainsRequest;
(function (UpdateFirewallDomainsRequest) {
    /**
     * @internal
     */
    UpdateFirewallDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallDomainsRequest = exports.UpdateFirewallDomainsRequest || (exports.UpdateFirewallDomainsRequest = {}));
var UpdateFirewallDomainsResponse;
(function (UpdateFirewallDomainsResponse) {
    /**
     * @internal
     */
    UpdateFirewallDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallDomainsResponse = exports.UpdateFirewallDomainsResponse || (exports.UpdateFirewallDomainsResponse = {}));
var UpdateFirewallRuleRequest;
(function (UpdateFirewallRuleRequest) {
    /**
     * @internal
     */
    UpdateFirewallRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallRuleRequest = exports.UpdateFirewallRuleRequest || (exports.UpdateFirewallRuleRequest = {}));
var UpdateFirewallRuleResponse;
(function (UpdateFirewallRuleResponse) {
    /**
     * @internal
     */
    UpdateFirewallRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallRuleResponse = exports.UpdateFirewallRuleResponse || (exports.UpdateFirewallRuleResponse = {}));
var UpdateFirewallRuleGroupAssociationRequest;
(function (UpdateFirewallRuleGroupAssociationRequest) {
    /**
     * @internal
     */
    UpdateFirewallRuleGroupAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallRuleGroupAssociationRequest = exports.UpdateFirewallRuleGroupAssociationRequest || (exports.UpdateFirewallRuleGroupAssociationRequest = {}));
var UpdateFirewallRuleGroupAssociationResponse;
(function (UpdateFirewallRuleGroupAssociationResponse) {
    /**
     * @internal
     */
    UpdateFirewallRuleGroupAssociationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFirewallRuleGroupAssociationResponse = exports.UpdateFirewallRuleGroupAssociationResponse || (exports.UpdateFirewallRuleGroupAssociationResponse = {}));
var Validation;
(function (Validation) {
    Validation["DISABLE"] = "DISABLE";
    Validation["ENABLE"] = "ENABLE";
})(Validation = exports.Validation || (exports.Validation = {}));
var UpdateResolverDnssecConfigRequest;
(function (UpdateResolverDnssecConfigRequest) {
    /**
     * @internal
     */
    UpdateResolverDnssecConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResolverDnssecConfigRequest = exports.UpdateResolverDnssecConfigRequest || (exports.UpdateResolverDnssecConfigRequest = {}));
var UpdateResolverDnssecConfigResponse;
(function (UpdateResolverDnssecConfigResponse) {
    /**
     * @internal
     */
    UpdateResolverDnssecConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResolverDnssecConfigResponse = exports.UpdateResolverDnssecConfigResponse || (exports.UpdateResolverDnssecConfigResponse = {}));
var UpdateResolverEndpointRequest;
(function (UpdateResolverEndpointRequest) {
    /**
     * @internal
     */
    UpdateResolverEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResolverEndpointRequest = exports.UpdateResolverEndpointRequest || (exports.UpdateResolverEndpointRequest = {}));
var UpdateResolverEndpointResponse;
(function (UpdateResolverEndpointResponse) {
    /**
     * @internal
     */
    UpdateResolverEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResolverEndpointResponse = exports.UpdateResolverEndpointResponse || (exports.UpdateResolverEndpointResponse = {}));
var UpdateResolverRuleRequest;
(function (UpdateResolverRuleRequest) {
    /**
     * @internal
     */
    UpdateResolverRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResolverRuleRequest = exports.UpdateResolverRuleRequest || (exports.UpdateResolverRuleRequest = {}));
var UpdateResolverRuleResponse;
(function (UpdateResolverRuleResponse) {
    /**
     * @internal
     */
    UpdateResolverRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResolverRuleResponse = exports.UpdateResolverRuleResponse || (exports.UpdateResolverRuleResponse = {}));
//# sourceMappingURL=models_0.js.map