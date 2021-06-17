import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessControlAttributeValue;
(function (AccessControlAttributeValue) {
    /**
     * @internal
     */
    AccessControlAttributeValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessControlAttributeValue || (AccessControlAttributeValue = {}));
export var AccessControlAttribute;
(function (AccessControlAttribute) {
    /**
     * @internal
     */
    AccessControlAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessControlAttribute || (AccessControlAttribute = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var PrincipalType;
(function (PrincipalType) {
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["USER"] = "USER";
})(PrincipalType || (PrincipalType = {}));
export var AccountAssignment;
(function (AccountAssignment) {
    /**
     * @internal
     */
    AccountAssignment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountAssignment || (AccountAssignment = {}));
export var StatusValues;
(function (StatusValues) {
    StatusValues["FAILED"] = "FAILED";
    StatusValues["IN_PROGRESS"] = "IN_PROGRESS";
    StatusValues["SUCCEEDED"] = "SUCCEEDED";
})(StatusValues || (StatusValues = {}));
export var TargetType;
(function (TargetType) {
    TargetType["AWS_ACCOUNT"] = "AWS_ACCOUNT";
})(TargetType || (TargetType = {}));
export var AccountAssignmentOperationStatus;
(function (AccountAssignmentOperationStatus) {
    /**
     * @internal
     */
    AccountAssignmentOperationStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountAssignmentOperationStatus || (AccountAssignmentOperationStatus = {}));
export var AccountAssignmentOperationStatusMetadata;
(function (AccountAssignmentOperationStatusMetadata) {
    /**
     * @internal
     */
    AccountAssignmentOperationStatusMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountAssignmentOperationStatusMetadata || (AccountAssignmentOperationStatusMetadata = {}));
export var AttachedManagedPolicy;
(function (AttachedManagedPolicy) {
    /**
     * @internal
     */
    AttachedManagedPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachedManagedPolicy || (AttachedManagedPolicy = {}));
export var AttachManagedPolicyToPermissionSetRequest;
(function (AttachManagedPolicyToPermissionSetRequest) {
    /**
     * @internal
     */
    AttachManagedPolicyToPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachManagedPolicyToPermissionSetRequest || (AttachManagedPolicyToPermissionSetRequest = {}));
export var AttachManagedPolicyToPermissionSetResponse;
(function (AttachManagedPolicyToPermissionSetResponse) {
    /**
     * @internal
     */
    AttachManagedPolicyToPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachManagedPolicyToPermissionSetResponse || (AttachManagedPolicyToPermissionSetResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var CreateAccountAssignmentRequest;
(function (CreateAccountAssignmentRequest) {
    /**
     * @internal
     */
    CreateAccountAssignmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccountAssignmentRequest || (CreateAccountAssignmentRequest = {}));
export var CreateAccountAssignmentResponse;
(function (CreateAccountAssignmentResponse) {
    /**
     * @internal
     */
    CreateAccountAssignmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccountAssignmentResponse || (CreateAccountAssignmentResponse = {}));
export var InstanceAccessControlAttributeConfiguration;
(function (InstanceAccessControlAttributeConfiguration) {
    /**
     * @internal
     */
    InstanceAccessControlAttributeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAccessControlAttributeConfiguration || (InstanceAccessControlAttributeConfiguration = {}));
export var CreateInstanceAccessControlAttributeConfigurationRequest;
(function (CreateInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    CreateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceAccessControlAttributeConfigurationRequest || (CreateInstanceAccessControlAttributeConfigurationRequest = {}));
export var CreateInstanceAccessControlAttributeConfigurationResponse;
(function (CreateInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    CreateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceAccessControlAttributeConfigurationResponse || (CreateInstanceAccessControlAttributeConfigurationResponse = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreatePermissionSetRequest;
(function (CreatePermissionSetRequest) {
    /**
     * @internal
     */
    CreatePermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePermissionSetRequest || (CreatePermissionSetRequest = {}));
export var PermissionSet;
(function (PermissionSet) {
    /**
     * @internal
     */
    PermissionSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PermissionSet || (PermissionSet = {}));
export var CreatePermissionSetResponse;
(function (CreatePermissionSetResponse) {
    /**
     * @internal
     */
    CreatePermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePermissionSetResponse || (CreatePermissionSetResponse = {}));
export var DeleteAccountAssignmentRequest;
(function (DeleteAccountAssignmentRequest) {
    /**
     * @internal
     */
    DeleteAccountAssignmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountAssignmentRequest || (DeleteAccountAssignmentRequest = {}));
export var DeleteAccountAssignmentResponse;
(function (DeleteAccountAssignmentResponse) {
    /**
     * @internal
     */
    DeleteAccountAssignmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountAssignmentResponse || (DeleteAccountAssignmentResponse = {}));
export var DeleteInlinePolicyFromPermissionSetRequest;
(function (DeleteInlinePolicyFromPermissionSetRequest) {
    /**
     * @internal
     */
    DeleteInlinePolicyFromPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInlinePolicyFromPermissionSetRequest || (DeleteInlinePolicyFromPermissionSetRequest = {}));
export var DeleteInlinePolicyFromPermissionSetResponse;
(function (DeleteInlinePolicyFromPermissionSetResponse) {
    /**
     * @internal
     */
    DeleteInlinePolicyFromPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInlinePolicyFromPermissionSetResponse || (DeleteInlinePolicyFromPermissionSetResponse = {}));
export var DeleteInstanceAccessControlAttributeConfigurationRequest;
(function (DeleteInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    DeleteInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceAccessControlAttributeConfigurationRequest || (DeleteInstanceAccessControlAttributeConfigurationRequest = {}));
export var DeleteInstanceAccessControlAttributeConfigurationResponse;
(function (DeleteInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    DeleteInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceAccessControlAttributeConfigurationResponse || (DeleteInstanceAccessControlAttributeConfigurationResponse = {}));
export var DeletePermissionSetRequest;
(function (DeletePermissionSetRequest) {
    /**
     * @internal
     */
    DeletePermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePermissionSetRequest || (DeletePermissionSetRequest = {}));
export var DeletePermissionSetResponse;
(function (DeletePermissionSetResponse) {
    /**
     * @internal
     */
    DeletePermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePermissionSetResponse || (DeletePermissionSetResponse = {}));
export var DescribeAccountAssignmentCreationStatusRequest;
(function (DescribeAccountAssignmentCreationStatusRequest) {
    /**
     * @internal
     */
    DescribeAccountAssignmentCreationStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAssignmentCreationStatusRequest || (DescribeAccountAssignmentCreationStatusRequest = {}));
export var DescribeAccountAssignmentCreationStatusResponse;
(function (DescribeAccountAssignmentCreationStatusResponse) {
    /**
     * @internal
     */
    DescribeAccountAssignmentCreationStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAssignmentCreationStatusResponse || (DescribeAccountAssignmentCreationStatusResponse = {}));
export var DescribeAccountAssignmentDeletionStatusRequest;
(function (DescribeAccountAssignmentDeletionStatusRequest) {
    /**
     * @internal
     */
    DescribeAccountAssignmentDeletionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAssignmentDeletionStatusRequest || (DescribeAccountAssignmentDeletionStatusRequest = {}));
export var DescribeAccountAssignmentDeletionStatusResponse;
(function (DescribeAccountAssignmentDeletionStatusResponse) {
    /**
     * @internal
     */
    DescribeAccountAssignmentDeletionStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountAssignmentDeletionStatusResponse || (DescribeAccountAssignmentDeletionStatusResponse = {}));
export var DescribeInstanceAccessControlAttributeConfigurationRequest;
(function (DescribeInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    DescribeInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceAccessControlAttributeConfigurationRequest || (DescribeInstanceAccessControlAttributeConfigurationRequest = {}));
export var InstanceAccessControlAttributeConfigurationStatus;
(function (InstanceAccessControlAttributeConfigurationStatus) {
    InstanceAccessControlAttributeConfigurationStatus["CREATION_FAILED"] = "CREATION_FAILED";
    InstanceAccessControlAttributeConfigurationStatus["CREATION_IN_PROGRESS"] = "CREATION_IN_PROGRESS";
    InstanceAccessControlAttributeConfigurationStatus["ENABLED"] = "ENABLED";
})(InstanceAccessControlAttributeConfigurationStatus || (InstanceAccessControlAttributeConfigurationStatus = {}));
export var DescribeInstanceAccessControlAttributeConfigurationResponse;
(function (DescribeInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    DescribeInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceAccessControlAttributeConfigurationResponse || (DescribeInstanceAccessControlAttributeConfigurationResponse = {}));
export var DescribePermissionSetRequest;
(function (DescribePermissionSetRequest) {
    /**
     * @internal
     */
    DescribePermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePermissionSetRequest || (DescribePermissionSetRequest = {}));
export var DescribePermissionSetResponse;
(function (DescribePermissionSetResponse) {
    /**
     * @internal
     */
    DescribePermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePermissionSetResponse || (DescribePermissionSetResponse = {}));
export var DescribePermissionSetProvisioningStatusRequest;
(function (DescribePermissionSetProvisioningStatusRequest) {
    /**
     * @internal
     */
    DescribePermissionSetProvisioningStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePermissionSetProvisioningStatusRequest || (DescribePermissionSetProvisioningStatusRequest = {}));
export var PermissionSetProvisioningStatus;
(function (PermissionSetProvisioningStatus) {
    /**
     * @internal
     */
    PermissionSetProvisioningStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PermissionSetProvisioningStatus || (PermissionSetProvisioningStatus = {}));
export var DescribePermissionSetProvisioningStatusResponse;
(function (DescribePermissionSetProvisioningStatusResponse) {
    /**
     * @internal
     */
    DescribePermissionSetProvisioningStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePermissionSetProvisioningStatusResponse || (DescribePermissionSetProvisioningStatusResponse = {}));
export var DetachManagedPolicyFromPermissionSetRequest;
(function (DetachManagedPolicyFromPermissionSetRequest) {
    /**
     * @internal
     */
    DetachManagedPolicyFromPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachManagedPolicyFromPermissionSetRequest || (DetachManagedPolicyFromPermissionSetRequest = {}));
export var DetachManagedPolicyFromPermissionSetResponse;
(function (DetachManagedPolicyFromPermissionSetResponse) {
    /**
     * @internal
     */
    DetachManagedPolicyFromPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachManagedPolicyFromPermissionSetResponse || (DetachManagedPolicyFromPermissionSetResponse = {}));
export var GetInlinePolicyForPermissionSetRequest;
(function (GetInlinePolicyForPermissionSetRequest) {
    /**
     * @internal
     */
    GetInlinePolicyForPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInlinePolicyForPermissionSetRequest || (GetInlinePolicyForPermissionSetRequest = {}));
export var GetInlinePolicyForPermissionSetResponse;
(function (GetInlinePolicyForPermissionSetResponse) {
    /**
     * @internal
     */
    GetInlinePolicyForPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InlinePolicy && { InlinePolicy: SENSITIVE_STRING }))); };
})(GetInlinePolicyForPermissionSetResponse || (GetInlinePolicyForPermissionSetResponse = {}));
export var InstanceMetadata;
(function (InstanceMetadata) {
    /**
     * @internal
     */
    InstanceMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceMetadata || (InstanceMetadata = {}));
export var OperationStatusFilter;
(function (OperationStatusFilter) {
    /**
     * @internal
     */
    OperationStatusFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationStatusFilter || (OperationStatusFilter = {}));
export var ListAccountAssignmentCreationStatusRequest;
(function (ListAccountAssignmentCreationStatusRequest) {
    /**
     * @internal
     */
    ListAccountAssignmentCreationStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAssignmentCreationStatusRequest || (ListAccountAssignmentCreationStatusRequest = {}));
export var ListAccountAssignmentCreationStatusResponse;
(function (ListAccountAssignmentCreationStatusResponse) {
    /**
     * @internal
     */
    ListAccountAssignmentCreationStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAssignmentCreationStatusResponse || (ListAccountAssignmentCreationStatusResponse = {}));
export var ListAccountAssignmentDeletionStatusRequest;
(function (ListAccountAssignmentDeletionStatusRequest) {
    /**
     * @internal
     */
    ListAccountAssignmentDeletionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAssignmentDeletionStatusRequest || (ListAccountAssignmentDeletionStatusRequest = {}));
export var ListAccountAssignmentDeletionStatusResponse;
(function (ListAccountAssignmentDeletionStatusResponse) {
    /**
     * @internal
     */
    ListAccountAssignmentDeletionStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAssignmentDeletionStatusResponse || (ListAccountAssignmentDeletionStatusResponse = {}));
export var ListAccountAssignmentsRequest;
(function (ListAccountAssignmentsRequest) {
    /**
     * @internal
     */
    ListAccountAssignmentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAssignmentsRequest || (ListAccountAssignmentsRequest = {}));
export var ListAccountAssignmentsResponse;
(function (ListAccountAssignmentsResponse) {
    /**
     * @internal
     */
    ListAccountAssignmentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountAssignmentsResponse || (ListAccountAssignmentsResponse = {}));
export var ProvisioningStatus;
(function (ProvisioningStatus) {
    ProvisioningStatus["LATEST_PERMISSION_SET_NOT_PROVISIONED"] = "LATEST_PERMISSION_SET_NOT_PROVISIONED";
    ProvisioningStatus["LATEST_PERMISSION_SET_PROVISIONED"] = "LATEST_PERMISSION_SET_PROVISIONED";
})(ProvisioningStatus || (ProvisioningStatus = {}));
export var ListAccountsForProvisionedPermissionSetRequest;
(function (ListAccountsForProvisionedPermissionSetRequest) {
    /**
     * @internal
     */
    ListAccountsForProvisionedPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountsForProvisionedPermissionSetRequest || (ListAccountsForProvisionedPermissionSetRequest = {}));
export var ListAccountsForProvisionedPermissionSetResponse;
(function (ListAccountsForProvisionedPermissionSetResponse) {
    /**
     * @internal
     */
    ListAccountsForProvisionedPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountsForProvisionedPermissionSetResponse || (ListAccountsForProvisionedPermissionSetResponse = {}));
export var ListInstancesRequest;
(function (ListInstancesRequest) {
    /**
     * @internal
     */
    ListInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstancesRequest || (ListInstancesRequest = {}));
export var ListInstancesResponse;
(function (ListInstancesResponse) {
    /**
     * @internal
     */
    ListInstancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInstancesResponse || (ListInstancesResponse = {}));
export var ListManagedPoliciesInPermissionSetRequest;
(function (ListManagedPoliciesInPermissionSetRequest) {
    /**
     * @internal
     */
    ListManagedPoliciesInPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListManagedPoliciesInPermissionSetRequest || (ListManagedPoliciesInPermissionSetRequest = {}));
export var ListManagedPoliciesInPermissionSetResponse;
(function (ListManagedPoliciesInPermissionSetResponse) {
    /**
     * @internal
     */
    ListManagedPoliciesInPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListManagedPoliciesInPermissionSetResponse || (ListManagedPoliciesInPermissionSetResponse = {}));
export var ListPermissionSetProvisioningStatusRequest;
(function (ListPermissionSetProvisioningStatusRequest) {
    /**
     * @internal
     */
    ListPermissionSetProvisioningStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPermissionSetProvisioningStatusRequest || (ListPermissionSetProvisioningStatusRequest = {}));
export var PermissionSetProvisioningStatusMetadata;
(function (PermissionSetProvisioningStatusMetadata) {
    /**
     * @internal
     */
    PermissionSetProvisioningStatusMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PermissionSetProvisioningStatusMetadata || (PermissionSetProvisioningStatusMetadata = {}));
export var ListPermissionSetProvisioningStatusResponse;
(function (ListPermissionSetProvisioningStatusResponse) {
    /**
     * @internal
     */
    ListPermissionSetProvisioningStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPermissionSetProvisioningStatusResponse || (ListPermissionSetProvisioningStatusResponse = {}));
export var ListPermissionSetsRequest;
(function (ListPermissionSetsRequest) {
    /**
     * @internal
     */
    ListPermissionSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPermissionSetsRequest || (ListPermissionSetsRequest = {}));
export var ListPermissionSetsResponse;
(function (ListPermissionSetsResponse) {
    /**
     * @internal
     */
    ListPermissionSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPermissionSetsResponse || (ListPermissionSetsResponse = {}));
export var ListPermissionSetsProvisionedToAccountRequest;
(function (ListPermissionSetsProvisionedToAccountRequest) {
    /**
     * @internal
     */
    ListPermissionSetsProvisionedToAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPermissionSetsProvisionedToAccountRequest || (ListPermissionSetsProvisionedToAccountRequest = {}));
export var ListPermissionSetsProvisionedToAccountResponse;
(function (ListPermissionSetsProvisionedToAccountResponse) {
    /**
     * @internal
     */
    ListPermissionSetsProvisionedToAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPermissionSetsProvisionedToAccountResponse || (ListPermissionSetsProvisionedToAccountResponse = {}));
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
export var ProvisionTargetType;
(function (ProvisionTargetType) {
    ProvisionTargetType["ALL_PROVISIONED_ACCOUNTS"] = "ALL_PROVISIONED_ACCOUNTS";
    ProvisionTargetType["AWS_ACCOUNT"] = "AWS_ACCOUNT";
})(ProvisionTargetType || (ProvisionTargetType = {}));
export var ProvisionPermissionSetRequest;
(function (ProvisionPermissionSetRequest) {
    /**
     * @internal
     */
    ProvisionPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisionPermissionSetRequest || (ProvisionPermissionSetRequest = {}));
export var ProvisionPermissionSetResponse;
(function (ProvisionPermissionSetResponse) {
    /**
     * @internal
     */
    ProvisionPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvisionPermissionSetResponse || (ProvisionPermissionSetResponse = {}));
export var PutInlinePolicyToPermissionSetRequest;
(function (PutInlinePolicyToPermissionSetRequest) {
    /**
     * @internal
     */
    PutInlinePolicyToPermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InlinePolicy && { InlinePolicy: SENSITIVE_STRING }))); };
})(PutInlinePolicyToPermissionSetRequest || (PutInlinePolicyToPermissionSetRequest = {}));
export var PutInlinePolicyToPermissionSetResponse;
(function (PutInlinePolicyToPermissionSetResponse) {
    /**
     * @internal
     */
    PutInlinePolicyToPermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutInlinePolicyToPermissionSetResponse || (PutInlinePolicyToPermissionSetResponse = {}));
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
export var UpdateInstanceAccessControlAttributeConfigurationRequest;
(function (UpdateInstanceAccessControlAttributeConfigurationRequest) {
    /**
     * @internal
     */
    UpdateInstanceAccessControlAttributeConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInstanceAccessControlAttributeConfigurationRequest || (UpdateInstanceAccessControlAttributeConfigurationRequest = {}));
export var UpdateInstanceAccessControlAttributeConfigurationResponse;
(function (UpdateInstanceAccessControlAttributeConfigurationResponse) {
    /**
     * @internal
     */
    UpdateInstanceAccessControlAttributeConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInstanceAccessControlAttributeConfigurationResponse || (UpdateInstanceAccessControlAttributeConfigurationResponse = {}));
export var UpdatePermissionSetRequest;
(function (UpdatePermissionSetRequest) {
    /**
     * @internal
     */
    UpdatePermissionSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePermissionSetRequest || (UpdatePermissionSetRequest = {}));
export var UpdatePermissionSetResponse;
(function (UpdatePermissionSetResponse) {
    /**
     * @internal
     */
    UpdatePermissionSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePermissionSetResponse || (UpdatePermissionSetResponse = {}));
//# sourceMappingURL=models_0.js.map