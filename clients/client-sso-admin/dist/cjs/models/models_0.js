"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInlinePolicyForPermissionSetRequest = exports.DetachManagedPolicyFromPermissionSetResponse = exports.DetachManagedPolicyFromPermissionSetRequest = exports.DescribePermissionSetProvisioningStatusResponse = exports.PermissionSetProvisioningStatus = exports.DescribePermissionSetProvisioningStatusRequest = exports.DescribePermissionSetResponse = exports.DescribePermissionSetRequest = exports.DescribeInstanceAccessControlAttributeConfigurationResponse = exports.InstanceAccessControlAttributeConfigurationStatus = exports.DescribeInstanceAccessControlAttributeConfigurationRequest = exports.DescribeAccountAssignmentDeletionStatusResponse = exports.DescribeAccountAssignmentDeletionStatusRequest = exports.DescribeAccountAssignmentCreationStatusResponse = exports.DescribeAccountAssignmentCreationStatusRequest = exports.DeletePermissionSetResponse = exports.DeletePermissionSetRequest = exports.DeleteInstanceAccessControlAttributeConfigurationResponse = exports.DeleteInstanceAccessControlAttributeConfigurationRequest = exports.DeleteInlinePolicyFromPermissionSetResponse = exports.DeleteInlinePolicyFromPermissionSetRequest = exports.DeleteAccountAssignmentResponse = exports.DeleteAccountAssignmentRequest = exports.CreatePermissionSetResponse = exports.PermissionSet = exports.CreatePermissionSetRequest = exports.Tag = exports.CreateInstanceAccessControlAttributeConfigurationResponse = exports.CreateInstanceAccessControlAttributeConfigurationRequest = exports.InstanceAccessControlAttributeConfiguration = exports.CreateAccountAssignmentResponse = exports.CreateAccountAssignmentRequest = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AttachManagedPolicyToPermissionSetResponse = exports.AttachManagedPolicyToPermissionSetRequest = exports.AttachedManagedPolicy = exports.AccountAssignmentOperationStatusMetadata = exports.AccountAssignmentOperationStatus = exports.TargetType = exports.StatusValues = exports.AccountAssignment = exports.PrincipalType = exports.AccessDeniedException = exports.AccessControlAttribute = exports.AccessControlAttributeValue = void 0;
exports.UpdatePermissionSetResponse = exports.UpdatePermissionSetRequest = exports.UpdateInstanceAccessControlAttributeConfigurationResponse = exports.UpdateInstanceAccessControlAttributeConfigurationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.PutInlinePolicyToPermissionSetResponse = exports.PutInlinePolicyToPermissionSetRequest = exports.ProvisionPermissionSetResponse = exports.ProvisionPermissionSetRequest = exports.ProvisionTargetType = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListPermissionSetsProvisionedToAccountResponse = exports.ListPermissionSetsProvisionedToAccountRequest = exports.ListPermissionSetsResponse = exports.ListPermissionSetsRequest = exports.ListPermissionSetProvisioningStatusResponse = exports.PermissionSetProvisioningStatusMetadata = exports.ListPermissionSetProvisioningStatusRequest = exports.ListManagedPoliciesInPermissionSetResponse = exports.ListManagedPoliciesInPermissionSetRequest = exports.ListInstancesResponse = exports.ListInstancesRequest = exports.ListAccountsForProvisionedPermissionSetResponse = exports.ListAccountsForProvisionedPermissionSetRequest = exports.ProvisioningStatus = exports.ListAccountAssignmentsResponse = exports.ListAccountAssignmentsRequest = exports.ListAccountAssignmentDeletionStatusResponse = exports.ListAccountAssignmentDeletionStatusRequest = exports.ListAccountAssignmentCreationStatusResponse = exports.ListAccountAssignmentCreationStatusRequest = exports.OperationStatusFilter = exports.InstanceMetadata = exports.GetInlinePolicyForPermissionSetResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessControlAttributeValue;
(function (AccessControlAttributeValue) {
    /**
     * @internal
     */
    AccessControlAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlAttributeValue = exports.AccessControlAttributeValue || (exports.AccessControlAttributeValue = {}));
var AccessControlAttribute;
(function (AccessControlAttribute) {
    /**
     * @internal
     */
    AccessControlAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlAttribute = exports.AccessControlAttribute || (exports.AccessControlAttribute = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["USER"] = "USER";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var AccountAssignment;
(function (AccountAssignment) {
    /**
     * @internal
     */
    AccountAssignment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAssignment = exports.AccountAssignment || (exports.AccountAssignment = {}));
var StatusValues;
(function (StatusValues) {
    StatusValues["FAILED"] = "FAILED";
    StatusValues["IN_PROGRESS"] = "IN_PROGRESS";
    StatusValues["SUCCEEDED"] = "SUCCEEDED";
})(StatusValues = exports.StatusValues || (exports.StatusValues = {}));
var TargetType;
(function (TargetType) {
    TargetType["AWS_ACCOUNT"] = "AWS_ACCOUNT";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var AccountAssignmentOperationStatus;
(function (AccountAssignmentOperationStatus) {
    /**
     * @internal
     */
    AccountAssignmentOperationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAssignmentOperationStatus = exports.AccountAssignmentOperationStatus || (exports.AccountAssignmentOperationStatus = {}));
var AccountAssignmentOperationStatusMetadata;
(function (AccountAssignmentOperationStatusMetadata) {
    /**
     * @internal
     */
    AccountAssignmentOperationStatusMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAssignmentOperationStatusMetadata = exports.AccountAssignmentOperationStatusMetadata || (exports.AccountAssignmentOperationStatusMetadata = {}));
var AttachedManagedPolicy;
(function (AttachedManagedPolicy) {
    /**
     * @internal
     */
    AttachedManagedPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachedManagedPolicy = exports.AttachedManagedPolicy || (exports.AttachedManagedPolicy = {}));
var AttachManagedPolicyToPermissionSetRequest;
(function (AttachManagedPolicyToPermissionSetRequest) {
    /**
     * @internal
     */
    AttachManagedPolicyToPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachManagedPolicyToPermissionSetRequest = exports.AttachManagedPolicyToPermissionSetRequest || (exports.AttachManagedPolicyToPermissionSetRequest = {}));
var AttachManagedPolicyToPermissionSetResponse;
(function (AttachManagedPolicyToPermissionSetResponse) {
    /**
     * @internal
     */
    AttachManagedPolicyToPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachManagedPolicyToPermissionSetResponse = exports.AttachManagedPolicyToPermissionSetResponse || (exports.AttachManagedPolicyToPermissionSetResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
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
var CreateAccountAssignmentRequest;
(function (CreateAccountAssignmentRequest) {
    /**
     * @internal
     */
    CreateAccountAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccountAssignmentRequest = exports.CreateAccountAssignmentRequest || (exports.CreateAccountAssignmentRequest = {}));
var CreateAccountAssignmentResponse;
(function (CreateAccountAssignmentResponse) {
    /**
     * @internal
     */
    CreateAccountAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccountAssignmentResponse = exports.CreateAccountAssignmentResponse || (exports.CreateAccountAssignmentResponse = {}));
var InstanceAccessControlAttributeConfiguration;
(function (InstanceAccessControlAttributeConfiguration) {
    /**
     * @internal
     */
    InstanceAccessControlAttributeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAccessControlAttributeConfiguration = exports.InstanceAccessControlAttributeConfiguration || (exports.InstanceAccessControlAttributeConfiguration = {}));
var CreateInstanceAccessControlAttributeConfigurationRequest;
(function (CreateInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    CreateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceAccessControlAttributeConfigurationRequest = exports.CreateInstanceAccessControlAttributeConfigurationRequest || (exports.CreateInstanceAccessControlAttributeConfigurationRequest = {}));
var CreateInstanceAccessControlAttributeConfigurationResponse;
(function (CreateInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    CreateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceAccessControlAttributeConfigurationResponse = exports.CreateInstanceAccessControlAttributeConfigurationResponse || (exports.CreateInstanceAccessControlAttributeConfigurationResponse = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreatePermissionSetRequest;
(function (CreatePermissionSetRequest) {
    /**
     * @internal
     */
    CreatePermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePermissionSetRequest = exports.CreatePermissionSetRequest || (exports.CreatePermissionSetRequest = {}));
var PermissionSet;
(function (PermissionSet) {
    /**
     * @internal
     */
    PermissionSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PermissionSet = exports.PermissionSet || (exports.PermissionSet = {}));
var CreatePermissionSetResponse;
(function (CreatePermissionSetResponse) {
    /**
     * @internal
     */
    CreatePermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePermissionSetResponse = exports.CreatePermissionSetResponse || (exports.CreatePermissionSetResponse = {}));
var DeleteAccountAssignmentRequest;
(function (DeleteAccountAssignmentRequest) {
    /**
     * @internal
     */
    DeleteAccountAssignmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountAssignmentRequest = exports.DeleteAccountAssignmentRequest || (exports.DeleteAccountAssignmentRequest = {}));
var DeleteAccountAssignmentResponse;
(function (DeleteAccountAssignmentResponse) {
    /**
     * @internal
     */
    DeleteAccountAssignmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountAssignmentResponse = exports.DeleteAccountAssignmentResponse || (exports.DeleteAccountAssignmentResponse = {}));
var DeleteInlinePolicyFromPermissionSetRequest;
(function (DeleteInlinePolicyFromPermissionSetRequest) {
    /**
     * @internal
     */
    DeleteInlinePolicyFromPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInlinePolicyFromPermissionSetRequest = exports.DeleteInlinePolicyFromPermissionSetRequest || (exports.DeleteInlinePolicyFromPermissionSetRequest = {}));
var DeleteInlinePolicyFromPermissionSetResponse;
(function (DeleteInlinePolicyFromPermissionSetResponse) {
    /**
     * @internal
     */
    DeleteInlinePolicyFromPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInlinePolicyFromPermissionSetResponse = exports.DeleteInlinePolicyFromPermissionSetResponse || (exports.DeleteInlinePolicyFromPermissionSetResponse = {}));
var DeleteInstanceAccessControlAttributeConfigurationRequest;
(function (DeleteInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    DeleteInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceAccessControlAttributeConfigurationRequest = exports.DeleteInstanceAccessControlAttributeConfigurationRequest || (exports.DeleteInstanceAccessControlAttributeConfigurationRequest = {}));
var DeleteInstanceAccessControlAttributeConfigurationResponse;
(function (DeleteInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    DeleteInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceAccessControlAttributeConfigurationResponse = exports.DeleteInstanceAccessControlAttributeConfigurationResponse || (exports.DeleteInstanceAccessControlAttributeConfigurationResponse = {}));
var DeletePermissionSetRequest;
(function (DeletePermissionSetRequest) {
    /**
     * @internal
     */
    DeletePermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePermissionSetRequest = exports.DeletePermissionSetRequest || (exports.DeletePermissionSetRequest = {}));
var DeletePermissionSetResponse;
(function (DeletePermissionSetResponse) {
    /**
     * @internal
     */
    DeletePermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePermissionSetResponse = exports.DeletePermissionSetResponse || (exports.DeletePermissionSetResponse = {}));
var DescribeAccountAssignmentCreationStatusRequest;
(function (DescribeAccountAssignmentCreationStatusRequest) {
    /**
     * @internal
     */
    DescribeAccountAssignmentCreationStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAssignmentCreationStatusRequest = exports.DescribeAccountAssignmentCreationStatusRequest || (exports.DescribeAccountAssignmentCreationStatusRequest = {}));
var DescribeAccountAssignmentCreationStatusResponse;
(function (DescribeAccountAssignmentCreationStatusResponse) {
    /**
     * @internal
     */
    DescribeAccountAssignmentCreationStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAssignmentCreationStatusResponse = exports.DescribeAccountAssignmentCreationStatusResponse || (exports.DescribeAccountAssignmentCreationStatusResponse = {}));
var DescribeAccountAssignmentDeletionStatusRequest;
(function (DescribeAccountAssignmentDeletionStatusRequest) {
    /**
     * @internal
     */
    DescribeAccountAssignmentDeletionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAssignmentDeletionStatusRequest = exports.DescribeAccountAssignmentDeletionStatusRequest || (exports.DescribeAccountAssignmentDeletionStatusRequest = {}));
var DescribeAccountAssignmentDeletionStatusResponse;
(function (DescribeAccountAssignmentDeletionStatusResponse) {
    /**
     * @internal
     */
    DescribeAccountAssignmentDeletionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountAssignmentDeletionStatusResponse = exports.DescribeAccountAssignmentDeletionStatusResponse || (exports.DescribeAccountAssignmentDeletionStatusResponse = {}));
var DescribeInstanceAccessControlAttributeConfigurationRequest;
(function (DescribeInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    DescribeInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAccessControlAttributeConfigurationRequest = exports.DescribeInstanceAccessControlAttributeConfigurationRequest || (exports.DescribeInstanceAccessControlAttributeConfigurationRequest = {}));
var InstanceAccessControlAttributeConfigurationStatus;
(function (InstanceAccessControlAttributeConfigurationStatus) {
    InstanceAccessControlAttributeConfigurationStatus["CREATION_FAILED"] = "CREATION_FAILED";
    InstanceAccessControlAttributeConfigurationStatus["CREATION_IN_PROGRESS"] = "CREATION_IN_PROGRESS";
    InstanceAccessControlAttributeConfigurationStatus["ENABLED"] = "ENABLED";
})(InstanceAccessControlAttributeConfigurationStatus = exports.InstanceAccessControlAttributeConfigurationStatus || (exports.InstanceAccessControlAttributeConfigurationStatus = {}));
var DescribeInstanceAccessControlAttributeConfigurationResponse;
(function (DescribeInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    DescribeInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAccessControlAttributeConfigurationResponse = exports.DescribeInstanceAccessControlAttributeConfigurationResponse || (exports.DescribeInstanceAccessControlAttributeConfigurationResponse = {}));
var DescribePermissionSetRequest;
(function (DescribePermissionSetRequest) {
    /**
     * @internal
     */
    DescribePermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePermissionSetRequest = exports.DescribePermissionSetRequest || (exports.DescribePermissionSetRequest = {}));
var DescribePermissionSetResponse;
(function (DescribePermissionSetResponse) {
    /**
     * @internal
     */
    DescribePermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePermissionSetResponse = exports.DescribePermissionSetResponse || (exports.DescribePermissionSetResponse = {}));
var DescribePermissionSetProvisioningStatusRequest;
(function (DescribePermissionSetProvisioningStatusRequest) {
    /**
     * @internal
     */
    DescribePermissionSetProvisioningStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePermissionSetProvisioningStatusRequest = exports.DescribePermissionSetProvisioningStatusRequest || (exports.DescribePermissionSetProvisioningStatusRequest = {}));
var PermissionSetProvisioningStatus;
(function (PermissionSetProvisioningStatus) {
    /**
     * @internal
     */
    PermissionSetProvisioningStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PermissionSetProvisioningStatus = exports.PermissionSetProvisioningStatus || (exports.PermissionSetProvisioningStatus = {}));
var DescribePermissionSetProvisioningStatusResponse;
(function (DescribePermissionSetProvisioningStatusResponse) {
    /**
     * @internal
     */
    DescribePermissionSetProvisioningStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePermissionSetProvisioningStatusResponse = exports.DescribePermissionSetProvisioningStatusResponse || (exports.DescribePermissionSetProvisioningStatusResponse = {}));
var DetachManagedPolicyFromPermissionSetRequest;
(function (DetachManagedPolicyFromPermissionSetRequest) {
    /**
     * @internal
     */
    DetachManagedPolicyFromPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachManagedPolicyFromPermissionSetRequest = exports.DetachManagedPolicyFromPermissionSetRequest || (exports.DetachManagedPolicyFromPermissionSetRequest = {}));
var DetachManagedPolicyFromPermissionSetResponse;
(function (DetachManagedPolicyFromPermissionSetResponse) {
    /**
     * @internal
     */
    DetachManagedPolicyFromPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachManagedPolicyFromPermissionSetResponse = exports.DetachManagedPolicyFromPermissionSetResponse || (exports.DetachManagedPolicyFromPermissionSetResponse = {}));
var GetInlinePolicyForPermissionSetRequest;
(function (GetInlinePolicyForPermissionSetRequest) {
    /**
     * @internal
     */
    GetInlinePolicyForPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInlinePolicyForPermissionSetRequest = exports.GetInlinePolicyForPermissionSetRequest || (exports.GetInlinePolicyForPermissionSetRequest = {}));
var GetInlinePolicyForPermissionSetResponse;
(function (GetInlinePolicyForPermissionSetResponse) {
    /**
     * @internal
     */
    GetInlinePolicyForPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InlinePolicy && { InlinePolicy: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetInlinePolicyForPermissionSetResponse = exports.GetInlinePolicyForPermissionSetResponse || (exports.GetInlinePolicyForPermissionSetResponse = {}));
var InstanceMetadata;
(function (InstanceMetadata) {
    /**
     * @internal
     */
    InstanceMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceMetadata = exports.InstanceMetadata || (exports.InstanceMetadata = {}));
var OperationStatusFilter;
(function (OperationStatusFilter) {
    /**
     * @internal
     */
    OperationStatusFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationStatusFilter = exports.OperationStatusFilter || (exports.OperationStatusFilter = {}));
var ListAccountAssignmentCreationStatusRequest;
(function (ListAccountAssignmentCreationStatusRequest) {
    /**
     * @internal
     */
    ListAccountAssignmentCreationStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAssignmentCreationStatusRequest = exports.ListAccountAssignmentCreationStatusRequest || (exports.ListAccountAssignmentCreationStatusRequest = {}));
var ListAccountAssignmentCreationStatusResponse;
(function (ListAccountAssignmentCreationStatusResponse) {
    /**
     * @internal
     */
    ListAccountAssignmentCreationStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAssignmentCreationStatusResponse = exports.ListAccountAssignmentCreationStatusResponse || (exports.ListAccountAssignmentCreationStatusResponse = {}));
var ListAccountAssignmentDeletionStatusRequest;
(function (ListAccountAssignmentDeletionStatusRequest) {
    /**
     * @internal
     */
    ListAccountAssignmentDeletionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAssignmentDeletionStatusRequest = exports.ListAccountAssignmentDeletionStatusRequest || (exports.ListAccountAssignmentDeletionStatusRequest = {}));
var ListAccountAssignmentDeletionStatusResponse;
(function (ListAccountAssignmentDeletionStatusResponse) {
    /**
     * @internal
     */
    ListAccountAssignmentDeletionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAssignmentDeletionStatusResponse = exports.ListAccountAssignmentDeletionStatusResponse || (exports.ListAccountAssignmentDeletionStatusResponse = {}));
var ListAccountAssignmentsRequest;
(function (ListAccountAssignmentsRequest) {
    /**
     * @internal
     */
    ListAccountAssignmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAssignmentsRequest = exports.ListAccountAssignmentsRequest || (exports.ListAccountAssignmentsRequest = {}));
var ListAccountAssignmentsResponse;
(function (ListAccountAssignmentsResponse) {
    /**
     * @internal
     */
    ListAccountAssignmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountAssignmentsResponse = exports.ListAccountAssignmentsResponse || (exports.ListAccountAssignmentsResponse = {}));
var ProvisioningStatus;
(function (ProvisioningStatus) {
    ProvisioningStatus["LATEST_PERMISSION_SET_NOT_PROVISIONED"] = "LATEST_PERMISSION_SET_NOT_PROVISIONED";
    ProvisioningStatus["LATEST_PERMISSION_SET_PROVISIONED"] = "LATEST_PERMISSION_SET_PROVISIONED";
})(ProvisioningStatus = exports.ProvisioningStatus || (exports.ProvisioningStatus = {}));
var ListAccountsForProvisionedPermissionSetRequest;
(function (ListAccountsForProvisionedPermissionSetRequest) {
    /**
     * @internal
     */
    ListAccountsForProvisionedPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountsForProvisionedPermissionSetRequest = exports.ListAccountsForProvisionedPermissionSetRequest || (exports.ListAccountsForProvisionedPermissionSetRequest = {}));
var ListAccountsForProvisionedPermissionSetResponse;
(function (ListAccountsForProvisionedPermissionSetResponse) {
    /**
     * @internal
     */
    ListAccountsForProvisionedPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountsForProvisionedPermissionSetResponse = exports.ListAccountsForProvisionedPermissionSetResponse || (exports.ListAccountsForProvisionedPermissionSetResponse = {}));
var ListInstancesRequest;
(function (ListInstancesRequest) {
    /**
     * @internal
     */
    ListInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesRequest = exports.ListInstancesRequest || (exports.ListInstancesRequest = {}));
var ListInstancesResponse;
(function (ListInstancesResponse) {
    /**
     * @internal
     */
    ListInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInstancesResponse = exports.ListInstancesResponse || (exports.ListInstancesResponse = {}));
var ListManagedPoliciesInPermissionSetRequest;
(function (ListManagedPoliciesInPermissionSetRequest) {
    /**
     * @internal
     */
    ListManagedPoliciesInPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListManagedPoliciesInPermissionSetRequest = exports.ListManagedPoliciesInPermissionSetRequest || (exports.ListManagedPoliciesInPermissionSetRequest = {}));
var ListManagedPoliciesInPermissionSetResponse;
(function (ListManagedPoliciesInPermissionSetResponse) {
    /**
     * @internal
     */
    ListManagedPoliciesInPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListManagedPoliciesInPermissionSetResponse = exports.ListManagedPoliciesInPermissionSetResponse || (exports.ListManagedPoliciesInPermissionSetResponse = {}));
var ListPermissionSetProvisioningStatusRequest;
(function (ListPermissionSetProvisioningStatusRequest) {
    /**
     * @internal
     */
    ListPermissionSetProvisioningStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionSetProvisioningStatusRequest = exports.ListPermissionSetProvisioningStatusRequest || (exports.ListPermissionSetProvisioningStatusRequest = {}));
var PermissionSetProvisioningStatusMetadata;
(function (PermissionSetProvisioningStatusMetadata) {
    /**
     * @internal
     */
    PermissionSetProvisioningStatusMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PermissionSetProvisioningStatusMetadata = exports.PermissionSetProvisioningStatusMetadata || (exports.PermissionSetProvisioningStatusMetadata = {}));
var ListPermissionSetProvisioningStatusResponse;
(function (ListPermissionSetProvisioningStatusResponse) {
    /**
     * @internal
     */
    ListPermissionSetProvisioningStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionSetProvisioningStatusResponse = exports.ListPermissionSetProvisioningStatusResponse || (exports.ListPermissionSetProvisioningStatusResponse = {}));
var ListPermissionSetsRequest;
(function (ListPermissionSetsRequest) {
    /**
     * @internal
     */
    ListPermissionSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionSetsRequest = exports.ListPermissionSetsRequest || (exports.ListPermissionSetsRequest = {}));
var ListPermissionSetsResponse;
(function (ListPermissionSetsResponse) {
    /**
     * @internal
     */
    ListPermissionSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionSetsResponse = exports.ListPermissionSetsResponse || (exports.ListPermissionSetsResponse = {}));
var ListPermissionSetsProvisionedToAccountRequest;
(function (ListPermissionSetsProvisionedToAccountRequest) {
    /**
     * @internal
     */
    ListPermissionSetsProvisionedToAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionSetsProvisionedToAccountRequest = exports.ListPermissionSetsProvisionedToAccountRequest || (exports.ListPermissionSetsProvisionedToAccountRequest = {}));
var ListPermissionSetsProvisionedToAccountResponse;
(function (ListPermissionSetsProvisionedToAccountResponse) {
    /**
     * @internal
     */
    ListPermissionSetsProvisionedToAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPermissionSetsProvisionedToAccountResponse = exports.ListPermissionSetsProvisionedToAccountResponse || (exports.ListPermissionSetsProvisionedToAccountResponse = {}));
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
var ProvisionTargetType;
(function (ProvisionTargetType) {
    ProvisionTargetType["ALL_PROVISIONED_ACCOUNTS"] = "ALL_PROVISIONED_ACCOUNTS";
    ProvisionTargetType["AWS_ACCOUNT"] = "AWS_ACCOUNT";
})(ProvisionTargetType = exports.ProvisionTargetType || (exports.ProvisionTargetType = {}));
var ProvisionPermissionSetRequest;
(function (ProvisionPermissionSetRequest) {
    /**
     * @internal
     */
    ProvisionPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionPermissionSetRequest = exports.ProvisionPermissionSetRequest || (exports.ProvisionPermissionSetRequest = {}));
var ProvisionPermissionSetResponse;
(function (ProvisionPermissionSetResponse) {
    /**
     * @internal
     */
    ProvisionPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionPermissionSetResponse = exports.ProvisionPermissionSetResponse || (exports.ProvisionPermissionSetResponse = {}));
var PutInlinePolicyToPermissionSetRequest;
(function (PutInlinePolicyToPermissionSetRequest) {
    /**
     * @internal
     */
    PutInlinePolicyToPermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InlinePolicy && { InlinePolicy: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutInlinePolicyToPermissionSetRequest = exports.PutInlinePolicyToPermissionSetRequest || (exports.PutInlinePolicyToPermissionSetRequest = {}));
var PutInlinePolicyToPermissionSetResponse;
(function (PutInlinePolicyToPermissionSetResponse) {
    /**
     * @internal
     */
    PutInlinePolicyToPermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInlinePolicyToPermissionSetResponse = exports.PutInlinePolicyToPermissionSetResponse || (exports.PutInlinePolicyToPermissionSetResponse = {}));
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
var UpdateInstanceAccessControlAttributeConfigurationRequest;
(function (UpdateInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    UpdateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceAccessControlAttributeConfigurationRequest = exports.UpdateInstanceAccessControlAttributeConfigurationRequest || (exports.UpdateInstanceAccessControlAttributeConfigurationRequest = {}));
var UpdateInstanceAccessControlAttributeConfigurationResponse;
(function (UpdateInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    UpdateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceAccessControlAttributeConfigurationResponse = exports.UpdateInstanceAccessControlAttributeConfigurationResponse || (exports.UpdateInstanceAccessControlAttributeConfigurationResponse = {}));
var UpdatePermissionSetRequest;
(function (UpdatePermissionSetRequest) {
    /**
     * @internal
     */
    UpdatePermissionSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePermissionSetRequest = exports.UpdatePermissionSetRequest || (exports.UpdatePermissionSetRequest = {}));
var UpdatePermissionSetResponse;
(function (UpdatePermissionSetResponse) {
    /**
     * @internal
     */
    UpdatePermissionSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePermissionSetResponse = exports.UpdatePermissionSetResponse || (exports.UpdatePermissionSetResponse = {}));
//# sourceMappingURL=models_0.js.map