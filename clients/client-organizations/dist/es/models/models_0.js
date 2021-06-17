import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AcceptHandshakeRequest;
(function (AcceptHandshakeRequest) {
    /**
     * @internal
     */
    AcceptHandshakeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptHandshakeRequest || (AcceptHandshakeRequest = {}));
export var ActionType;
(function (ActionType) {
    ActionType["ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"] = "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE";
    ActionType["APPROVE_ALL_FEATURES"] = "APPROVE_ALL_FEATURES";
    ActionType["ENABLE_ALL_FEATURES"] = "ENABLE_ALL_FEATURES";
    ActionType["INVITE_ACCOUNT_TO_ORGANIZATION"] = "INVITE";
})(ActionType || (ActionType = {}));
export var HandshakePartyType;
(function (HandshakePartyType) {
    HandshakePartyType["ACCOUNT"] = "ACCOUNT";
    HandshakePartyType["EMAIL"] = "EMAIL";
    HandshakePartyType["ORGANIZATION"] = "ORGANIZATION";
})(HandshakePartyType || (HandshakePartyType = {}));
export var HandshakeParty;
(function (HandshakeParty) {
    /**
     * @internal
     */
    HandshakeParty.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Id && { Id: SENSITIVE_STRING }))); };
})(HandshakeParty || (HandshakeParty = {}));
export var HandshakeResourceType;
(function (HandshakeResourceType) {
    HandshakeResourceType["ACCOUNT"] = "ACCOUNT";
    HandshakeResourceType["EMAIL"] = "EMAIL";
    HandshakeResourceType["MASTER_EMAIL"] = "MASTER_EMAIL";
    HandshakeResourceType["MASTER_NAME"] = "MASTER_NAME";
    HandshakeResourceType["NOTES"] = "NOTES";
    HandshakeResourceType["ORGANIZATION"] = "ORGANIZATION";
    HandshakeResourceType["ORGANIZATION_FEATURE_SET"] = "ORGANIZATION_FEATURE_SET";
    HandshakeResourceType["PARENT_HANDSHAKE"] = "PARENT_HANDSHAKE";
})(HandshakeResourceType || (HandshakeResourceType = {}));
export var HandshakeState;
(function (HandshakeState) {
    HandshakeState["ACCEPTED"] = "ACCEPTED";
    HandshakeState["CANCELED"] = "CANCELED";
    HandshakeState["DECLINED"] = "DECLINED";
    HandshakeState["EXPIRED"] = "EXPIRED";
    HandshakeState["OPEN"] = "OPEN";
    HandshakeState["REQUESTED"] = "REQUESTED";
})(HandshakeState || (HandshakeState = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AccessDeniedForDependencyExceptionReason;
(function (AccessDeniedForDependencyExceptionReason) {
    AccessDeniedForDependencyExceptionReason["ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE"] = "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE";
})(AccessDeniedForDependencyExceptionReason || (AccessDeniedForDependencyExceptionReason = {}));
export var AccessDeniedForDependencyException;
(function (AccessDeniedForDependencyException) {
    /**
     * @internal
     */
    AccessDeniedForDependencyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedForDependencyException || (AccessDeniedForDependencyException = {}));
export var AWSOrganizationsNotInUseException;
(function (AWSOrganizationsNotInUseException) {
    /**
     * @internal
     */
    AWSOrganizationsNotInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AWSOrganizationsNotInUseException || (AWSOrganizationsNotInUseException = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var HandshakeAlreadyInStateException;
(function (HandshakeAlreadyInStateException) {
    /**
     * @internal
     */
    HandshakeAlreadyInStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HandshakeAlreadyInStateException || (HandshakeAlreadyInStateException = {}));
export var HandshakeConstraintViolationExceptionReason;
(function (HandshakeConstraintViolationExceptionReason) {
    HandshakeConstraintViolationExceptionReason["ACCOUNT_NUMBER_LIMIT_EXCEEDED"] = "ACCOUNT_NUMBER_LIMIT_EXCEEDED";
    HandshakeConstraintViolationExceptionReason["ALREADY_IN_AN_ORGANIZATION"] = "ALREADY_IN_AN_ORGANIZATION";
    HandshakeConstraintViolationExceptionReason["HANDSHAKE_RATE_LIMIT_EXCEEDED"] = "HANDSHAKE_RATE_LIMIT_EXCEEDED";
    HandshakeConstraintViolationExceptionReason["INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES"] = "INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_ALREADY_HAS_ALL_FEATURES"] = "ORGANIZATION_ALREADY_HAS_ALL_FEATURES";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD"] = "ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION"] = "ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED"] = "ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED";
    HandshakeConstraintViolationExceptionReason["PAYMENT_INSTRUMENT_REQUIRED"] = "PAYMENT_INSTRUMENT_REQUIRED";
})(HandshakeConstraintViolationExceptionReason || (HandshakeConstraintViolationExceptionReason = {}));
export var HandshakeConstraintViolationException;
(function (HandshakeConstraintViolationException) {
    /**
     * @internal
     */
    HandshakeConstraintViolationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HandshakeConstraintViolationException || (HandshakeConstraintViolationException = {}));
export var HandshakeNotFoundException;
(function (HandshakeNotFoundException) {
    /**
     * @internal
     */
    HandshakeNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HandshakeNotFoundException || (HandshakeNotFoundException = {}));
export var InvalidHandshakeTransitionException;
(function (InvalidHandshakeTransitionException) {
    /**
     * @internal
     */
    InvalidHandshakeTransitionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidHandshakeTransitionException || (InvalidHandshakeTransitionException = {}));
export var InvalidInputExceptionReason;
(function (InvalidInputExceptionReason) {
    InvalidInputExceptionReason["DUPLICATE_TAG_KEY"] = "DUPLICATE_TAG_KEY";
    InvalidInputExceptionReason["IMMUTABLE_POLICY"] = "IMMUTABLE_POLICY";
    InvalidInputExceptionReason["INPUT_REQUIRED"] = "INPUT_REQUIRED";
    InvalidInputExceptionReason["INVALID_EMAIL_ADDRESS_TARGET"] = "INVALID_EMAIL_ADDRESS_TARGET";
    InvalidInputExceptionReason["INVALID_ENUM"] = "INVALID_ENUM";
    InvalidInputExceptionReason["INVALID_ENUM_POLICY_TYPE"] = "INVALID_ENUM_POLICY_TYPE";
    InvalidInputExceptionReason["INVALID_FULL_NAME_TARGET"] = "INVALID_FULL_NAME_TARGET";
    InvalidInputExceptionReason["INVALID_LIST_MEMBER"] = "INVALID_LIST_MEMBER";
    InvalidInputExceptionReason["INVALID_PAGINATION_TOKEN"] = "INVALID_NEXT_TOKEN";
    InvalidInputExceptionReason["INVALID_PARTY_TYPE_TARGET"] = "INVALID_PARTY_TYPE_TARGET";
    InvalidInputExceptionReason["INVALID_PATTERN"] = "INVALID_PATTERN";
    InvalidInputExceptionReason["INVALID_PATTERN_TARGET_ID"] = "INVALID_PATTERN_TARGET_ID";
    InvalidInputExceptionReason["INVALID_ROLE_NAME"] = "INVALID_ROLE_NAME";
    InvalidInputExceptionReason["INVALID_SYNTAX_ORGANIZATION"] = "INVALID_SYNTAX_ORGANIZATION_ARN";
    InvalidInputExceptionReason["INVALID_SYNTAX_POLICY"] = "INVALID_SYNTAX_POLICY_ID";
    InvalidInputExceptionReason["INVALID_SYSTEM_TAGS_PARAMETER"] = "INVALID_SYSTEM_TAGS_PARAMETER";
    InvalidInputExceptionReason["MAX_FILTER_LIMIT_EXCEEDED"] = "MAX_LIMIT_EXCEEDED_FILTER";
    InvalidInputExceptionReason["MAX_LENGTH_EXCEEDED"] = "MAX_LENGTH_EXCEEDED";
    InvalidInputExceptionReason["MAX_VALUE_EXCEEDED"] = "MAX_VALUE_EXCEEDED";
    InvalidInputExceptionReason["MIN_LENGTH_EXCEEDED"] = "MIN_LENGTH_EXCEEDED";
    InvalidInputExceptionReason["MIN_VALUE_EXCEEDED"] = "MIN_VALUE_EXCEEDED";
    InvalidInputExceptionReason["MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS"] = "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS";
    InvalidInputExceptionReason["TARGET_NOT_SUPPORTED"] = "TARGET_NOT_SUPPORTED";
    InvalidInputExceptionReason["UNRECOGNIZED_SERVICE_PRINCIPAL"] = "UNRECOGNIZED_SERVICE_PRINCIPAL";
})(InvalidInputExceptionReason || (InvalidInputExceptionReason = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceException || (ServiceException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var AccountJoinedMethod;
(function (AccountJoinedMethod) {
    AccountJoinedMethod["CREATED"] = "CREATED";
    AccountJoinedMethod["INVITED"] = "INVITED";
})(AccountJoinedMethod || (AccountJoinedMethod = {}));
export var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["SUSPENDED"] = "SUSPENDED";
})(AccountStatus || (AccountStatus = {}));
export var Account;
(function (Account) {
    /**
     * @internal
     */
    Account.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Email && { Email: SENSITIVE_STRING })), (obj.Name && { Name: SENSITIVE_STRING }))); };
})(Account || (Account = {}));
export var AccountAlreadyRegisteredException;
(function (AccountAlreadyRegisteredException) {
    /**
     * @internal
     */
    AccountAlreadyRegisteredException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountAlreadyRegisteredException || (AccountAlreadyRegisteredException = {}));
export var AccountNotFoundException;
(function (AccountNotFoundException) {
    /**
     * @internal
     */
    AccountNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountNotFoundException || (AccountNotFoundException = {}));
export var AccountNotRegisteredException;
(function (AccountNotRegisteredException) {
    /**
     * @internal
     */
    AccountNotRegisteredException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountNotRegisteredException || (AccountNotRegisteredException = {}));
export var AccountOwnerNotVerifiedException;
(function (AccountOwnerNotVerifiedException) {
    /**
     * @internal
     */
    AccountOwnerNotVerifiedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountOwnerNotVerifiedException || (AccountOwnerNotVerifiedException = {}));
export var AlreadyInOrganizationException;
(function (AlreadyInOrganizationException) {
    /**
     * @internal
     */
    AlreadyInOrganizationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlreadyInOrganizationException || (AlreadyInOrganizationException = {}));
export var AttachPolicyRequest;
(function (AttachPolicyRequest) {
    /**
     * @internal
     */
    AttachPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachPolicyRequest || (AttachPolicyRequest = {}));
export var ConstraintViolationExceptionReason;
(function (ConstraintViolationExceptionReason) {
    ConstraintViolationExceptionReason["ACCOUNT_CANNOT_LEAVE_ORGANIZATION"] = "ACCOUNT_CANNOT_LEAVE_ORGANIZATION";
    ConstraintViolationExceptionReason["ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA"] = "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA";
    ConstraintViolationExceptionReason["ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION"] = "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION";
    ConstraintViolationExceptionReason["ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED"] = "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["ACCOUNT_NUMBER_LIMIT_EXCEEDED"] = "ACCOUNT_NUMBER_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR"] = "CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR";
    ConstraintViolationExceptionReason["CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG"] = "CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG";
    ConstraintViolationExceptionReason["CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION"] = "CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION";
    ConstraintViolationExceptionReason["DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE"] = "DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE";
    ConstraintViolationExceptionReason["EMAIL_VERIFICATION_CODE_EXPIRED"] = "EMAIL_VERIFICATION_CODE_EXPIRED";
    ConstraintViolationExceptionReason["HANDSHAKE_RATE_LIMIT_EXCEEDED"] = "HANDSHAKE_RATE_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE"] = "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE"] = "MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_MISSING_CONTACT_INFO"] = "MASTER_ACCOUNT_MISSING_CONTACT_INFO";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED"] = "MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"] = "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED";
    ConstraintViolationExceptionReason["MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED"] = "MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"] = "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MAX_TAG_LIMIT_EXCEEDED"] = "MAX_TAG_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"] = "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED";
    ConstraintViolationExceptionReason["MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"] = "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["ORGANIZATION_NOT_IN_ALL_FEATURES_MODE"] = "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE";
    ConstraintViolationExceptionReason["OU_DEPTH_LIMIT_EXCEEDED"] = "OU_DEPTH_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["OU_NUMBER_LIMIT_EXCEEDED"] = "OU_NUMBER_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["POLICY_CONTENT_LIMIT_EXCEEDED"] = "POLICY_CONTENT_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["POLICY_NUMBER_LIMIT_EXCEEDED"] = "POLICY_NUMBER_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["TAG_POLICY_VIOLATION"] = "TAG_POLICY_VIOLATION";
    ConstraintViolationExceptionReason["WAIT_PERIOD_ACTIVE"] = "WAIT_PERIOD_ACTIVE";
})(ConstraintViolationExceptionReason || (ConstraintViolationExceptionReason = {}));
export var ConstraintViolationException;
(function (ConstraintViolationException) {
    /**
     * @internal
     */
    ConstraintViolationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConstraintViolationException || (ConstraintViolationException = {}));
export var DuplicatePolicyAttachmentException;
(function (DuplicatePolicyAttachmentException) {
    /**
     * @internal
     */
    DuplicatePolicyAttachmentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicatePolicyAttachmentException || (DuplicatePolicyAttachmentException = {}));
export var PolicyChangesInProgressException;
(function (PolicyChangesInProgressException) {
    /**
     * @internal
     */
    PolicyChangesInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyChangesInProgressException || (PolicyChangesInProgressException = {}));
export var PolicyNotFoundException;
(function (PolicyNotFoundException) {
    /**
     * @internal
     */
    PolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyNotFoundException || (PolicyNotFoundException = {}));
export var PolicyTypeNotEnabledException;
(function (PolicyTypeNotEnabledException) {
    /**
     * @internal
     */
    PolicyTypeNotEnabledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyTypeNotEnabledException || (PolicyTypeNotEnabledException = {}));
export var TargetNotFoundException;
(function (TargetNotFoundException) {
    /**
     * @internal
     */
    TargetNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetNotFoundException || (TargetNotFoundException = {}));
export var UnsupportedAPIEndpointException;
(function (UnsupportedAPIEndpointException) {
    /**
     * @internal
     */
    UnsupportedAPIEndpointException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedAPIEndpointException || (UnsupportedAPIEndpointException = {}));
export var CancelHandshakeRequest;
(function (CancelHandshakeRequest) {
    /**
     * @internal
     */
    CancelHandshakeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelHandshakeRequest || (CancelHandshakeRequest = {}));
export var IAMUserAccessToBilling;
(function (IAMUserAccessToBilling) {
    IAMUserAccessToBilling["ALLOW"] = "ALLOW";
    IAMUserAccessToBilling["DENY"] = "DENY";
})(IAMUserAccessToBilling || (IAMUserAccessToBilling = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateAccountRequest;
(function (CreateAccountRequest) {
    /**
     * @internal
     */
    CreateAccountRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Email && { Email: SENSITIVE_STRING })), (obj.AccountName && { AccountName: SENSITIVE_STRING }))); };
})(CreateAccountRequest || (CreateAccountRequest = {}));
export var CreateAccountFailureReason;
(function (CreateAccountFailureReason) {
    CreateAccountFailureReason["ACCOUNT_LIMIT_EXCEEDED"] = "ACCOUNT_LIMIT_EXCEEDED";
    CreateAccountFailureReason["CONCURRENT_ACCOUNT_MODIFICATION"] = "CONCURRENT_ACCOUNT_MODIFICATION";
    CreateAccountFailureReason["EMAIL_ALREADY_EXISTS"] = "EMAIL_ALREADY_EXISTS";
    CreateAccountFailureReason["FAILED_BUSINESS_VALIDATION"] = "FAILED_BUSINESS_VALIDATION";
    CreateAccountFailureReason["GOVCLOUD_ACCOUNT_ALREADY_EXISTS"] = "GOVCLOUD_ACCOUNT_ALREADY_EXISTS";
    CreateAccountFailureReason["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    CreateAccountFailureReason["INVALID_ADDRESS"] = "INVALID_ADDRESS";
    CreateAccountFailureReason["INVALID_EMAIL"] = "INVALID_EMAIL";
    CreateAccountFailureReason["INVALID_IDENTITY_FOR_BUSINESS_VALIDATION"] = "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION";
    CreateAccountFailureReason["MISSING_BUSINESS_VALIDATION"] = "MISSING_BUSINESS_VALIDATION";
    CreateAccountFailureReason["MISSING_PAYMENT_INSTRUMENT"] = "MISSING_PAYMENT_INSTRUMENT";
    CreateAccountFailureReason["PENDING_BUSINESS_VALIDATIONv"] = "PENDING_BUSINESS_VALIDATION";
    CreateAccountFailureReason["UNKNOWN_BUSINESS_VALIDATION"] = "UNKNOWN_BUSINESS_VALIDATION";
})(CreateAccountFailureReason || (CreateAccountFailureReason = {}));
export var CreateAccountState;
(function (CreateAccountState) {
    CreateAccountState["FAILED"] = "FAILED";
    CreateAccountState["IN_PROGRESS"] = "IN_PROGRESS";
    CreateAccountState["SUCCEEDED"] = "SUCCEEDED";
})(CreateAccountState || (CreateAccountState = {}));
export var CreateAccountStatus;
(function (CreateAccountStatus) {
    /**
     * @internal
     */
    CreateAccountStatus.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AccountName && { AccountName: SENSITIVE_STRING }))); };
})(CreateAccountStatus || (CreateAccountStatus = {}));
export var CreateAccountResponse;
(function (CreateAccountResponse) {
    /**
     * @internal
     */
    CreateAccountResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CreateAccountStatus && {
        CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(obj.CreateAccountStatus),
    }))); };
})(CreateAccountResponse || (CreateAccountResponse = {}));
export var FinalizingOrganizationException;
(function (FinalizingOrganizationException) {
    /**
     * @internal
     */
    FinalizingOrganizationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FinalizingOrganizationException || (FinalizingOrganizationException = {}));
export var CreateGovCloudAccountRequest;
(function (CreateGovCloudAccountRequest) {
    /**
     * @internal
     */
    CreateGovCloudAccountRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Email && { Email: SENSITIVE_STRING })), (obj.AccountName && { AccountName: SENSITIVE_STRING }))); };
})(CreateGovCloudAccountRequest || (CreateGovCloudAccountRequest = {}));
export var CreateGovCloudAccountResponse;
(function (CreateGovCloudAccountResponse) {
    /**
     * @internal
     */
    CreateGovCloudAccountResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CreateAccountStatus && {
        CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(obj.CreateAccountStatus),
    }))); };
})(CreateGovCloudAccountResponse || (CreateGovCloudAccountResponse = {}));
export var OrganizationFeatureSet;
(function (OrganizationFeatureSet) {
    OrganizationFeatureSet["ALL"] = "ALL";
    OrganizationFeatureSet["CONSOLIDATED_BILLING"] = "CONSOLIDATED_BILLING";
})(OrganizationFeatureSet || (OrganizationFeatureSet = {}));
export var CreateOrganizationRequest;
(function (CreateOrganizationRequest) {
    /**
     * @internal
     */
    CreateOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOrganizationRequest || (CreateOrganizationRequest = {}));
export var PolicyTypeStatus;
(function (PolicyTypeStatus) {
    PolicyTypeStatus["ENABLED"] = "ENABLED";
    PolicyTypeStatus["PENDING_DISABLE"] = "PENDING_DISABLE";
    PolicyTypeStatus["PENDING_ENABLE"] = "PENDING_ENABLE";
})(PolicyTypeStatus || (PolicyTypeStatus = {}));
export var PolicyType;
(function (PolicyType) {
    PolicyType["AISERVICES_OPT_OUT_POLICY"] = "AISERVICES_OPT_OUT_POLICY";
    PolicyType["BACKUP_POLICY"] = "BACKUP_POLICY";
    PolicyType["SERVICE_CONTROL_POLICY"] = "SERVICE_CONTROL_POLICY";
    PolicyType["TAG_POLICY"] = "TAG_POLICY";
})(PolicyType || (PolicyType = {}));
export var PolicyTypeSummary;
(function (PolicyTypeSummary) {
    /**
     * @internal
     */
    PolicyTypeSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyTypeSummary || (PolicyTypeSummary = {}));
export var Organization;
(function (Organization) {
    /**
     * @internal
     */
    Organization.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MasterAccountEmail && { MasterAccountEmail: SENSITIVE_STRING }))); };
})(Organization || (Organization = {}));
export var CreateOrganizationResponse;
(function (CreateOrganizationResponse) {
    /**
     * @internal
     */
    CreateOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Organization && { Organization: Organization.filterSensitiveLog(obj.Organization) }))); };
})(CreateOrganizationResponse || (CreateOrganizationResponse = {}));
export var CreateOrganizationalUnitRequest;
(function (CreateOrganizationalUnitRequest) {
    /**
     * @internal
     */
    CreateOrganizationalUnitRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOrganizationalUnitRequest || (CreateOrganizationalUnitRequest = {}));
export var OrganizationalUnit;
(function (OrganizationalUnit) {
    /**
     * @internal
     */
    OrganizationalUnit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationalUnit || (OrganizationalUnit = {}));
export var CreateOrganizationalUnitResponse;
(function (CreateOrganizationalUnitResponse) {
    /**
     * @internal
     */
    CreateOrganizationalUnitResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOrganizationalUnitResponse || (CreateOrganizationalUnitResponse = {}));
export var DuplicateOrganizationalUnitException;
(function (DuplicateOrganizationalUnitException) {
    /**
     * @internal
     */
    DuplicateOrganizationalUnitException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateOrganizationalUnitException || (DuplicateOrganizationalUnitException = {}));
export var ParentNotFoundException;
(function (ParentNotFoundException) {
    /**
     * @internal
     */
    ParentNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParentNotFoundException || (ParentNotFoundException = {}));
export var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    /**
     * @internal
     */
    CreatePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyRequest || (CreatePolicyRequest = {}));
export var PolicySummary;
(function (PolicySummary) {
    /**
     * @internal
     */
    PolicySummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicySummary || (PolicySummary = {}));
export var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Policy || (Policy = {}));
export var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    /**
     * @internal
     */
    CreatePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePolicyResponse || (CreatePolicyResponse = {}));
export var DuplicatePolicyException;
(function (DuplicatePolicyException) {
    /**
     * @internal
     */
    DuplicatePolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicatePolicyException || (DuplicatePolicyException = {}));
export var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MalformedPolicyDocumentException || (MalformedPolicyDocumentException = {}));
export var PolicyTypeNotAvailableForOrganizationException;
(function (PolicyTypeNotAvailableForOrganizationException) {
    /**
     * @internal
     */
    PolicyTypeNotAvailableForOrganizationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyTypeNotAvailableForOrganizationException || (PolicyTypeNotAvailableForOrganizationException = {}));
export var DeclineHandshakeRequest;
(function (DeclineHandshakeRequest) {
    /**
     * @internal
     */
    DeclineHandshakeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeclineHandshakeRequest || (DeclineHandshakeRequest = {}));
export var OrganizationNotEmptyException;
(function (OrganizationNotEmptyException) {
    /**
     * @internal
     */
    OrganizationNotEmptyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationNotEmptyException || (OrganizationNotEmptyException = {}));
export var DeleteOrganizationalUnitRequest;
(function (DeleteOrganizationalUnitRequest) {
    /**
     * @internal
     */
    DeleteOrganizationalUnitRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOrganizationalUnitRequest || (DeleteOrganizationalUnitRequest = {}));
export var OrganizationalUnitNotEmptyException;
(function (OrganizationalUnitNotEmptyException) {
    /**
     * @internal
     */
    OrganizationalUnitNotEmptyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationalUnitNotEmptyException || (OrganizationalUnitNotEmptyException = {}));
export var OrganizationalUnitNotFoundException;
(function (OrganizationalUnitNotFoundException) {
    /**
     * @internal
     */
    OrganizationalUnitNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationalUnitNotFoundException || (OrganizationalUnitNotFoundException = {}));
export var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePolicyRequest || (DeletePolicyRequest = {}));
export var PolicyInUseException;
(function (PolicyInUseException) {
    /**
     * @internal
     */
    PolicyInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyInUseException || (PolicyInUseException = {}));
export var DeregisterDelegatedAdministratorRequest;
(function (DeregisterDelegatedAdministratorRequest) {
    /**
     * @internal
     */
    DeregisterDelegatedAdministratorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterDelegatedAdministratorRequest || (DeregisterDelegatedAdministratorRequest = {}));
export var DescribeAccountRequest;
(function (DescribeAccountRequest) {
    /**
     * @internal
     */
    DescribeAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccountRequest || (DescribeAccountRequest = {}));
export var DescribeAccountResponse;
(function (DescribeAccountResponse) {
    /**
     * @internal
     */
    DescribeAccountResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Account && { Account: Account.filterSensitiveLog(obj.Account) }))); };
})(DescribeAccountResponse || (DescribeAccountResponse = {}));
export var CreateAccountStatusNotFoundException;
(function (CreateAccountStatusNotFoundException) {
    /**
     * @internal
     */
    CreateAccountStatusNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccountStatusNotFoundException || (CreateAccountStatusNotFoundException = {}));
export var DescribeCreateAccountStatusRequest;
(function (DescribeCreateAccountStatusRequest) {
    /**
     * @internal
     */
    DescribeCreateAccountStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCreateAccountStatusRequest || (DescribeCreateAccountStatusRequest = {}));
export var DescribeCreateAccountStatusResponse;
(function (DescribeCreateAccountStatusResponse) {
    /**
     * @internal
     */
    DescribeCreateAccountStatusResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CreateAccountStatus && {
        CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(obj.CreateAccountStatus),
    }))); };
})(DescribeCreateAccountStatusResponse || (DescribeCreateAccountStatusResponse = {}));
export var EffectivePolicyType;
(function (EffectivePolicyType) {
    EffectivePolicyType["AISERVICES_OPT_OUT_POLICY"] = "AISERVICES_OPT_OUT_POLICY";
    EffectivePolicyType["BACKUP_POLICY"] = "BACKUP_POLICY";
    EffectivePolicyType["TAG_POLICY"] = "TAG_POLICY";
})(EffectivePolicyType || (EffectivePolicyType = {}));
export var DescribeEffectivePolicyRequest;
(function (DescribeEffectivePolicyRequest) {
    /**
     * @internal
     */
    DescribeEffectivePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEffectivePolicyRequest || (DescribeEffectivePolicyRequest = {}));
export var EffectivePolicy;
(function (EffectivePolicy) {
    /**
     * @internal
     */
    EffectivePolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EffectivePolicy || (EffectivePolicy = {}));
export var DescribeEffectivePolicyResponse;
(function (DescribeEffectivePolicyResponse) {
    /**
     * @internal
     */
    DescribeEffectivePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEffectivePolicyResponse || (DescribeEffectivePolicyResponse = {}));
export var EffectivePolicyNotFoundException;
(function (EffectivePolicyNotFoundException) {
    /**
     * @internal
     */
    EffectivePolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EffectivePolicyNotFoundException || (EffectivePolicyNotFoundException = {}));
export var DescribeHandshakeRequest;
(function (DescribeHandshakeRequest) {
    /**
     * @internal
     */
    DescribeHandshakeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHandshakeRequest || (DescribeHandshakeRequest = {}));
export var DescribeOrganizationResponse;
(function (DescribeOrganizationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Organization && { Organization: Organization.filterSensitiveLog(obj.Organization) }))); };
})(DescribeOrganizationResponse || (DescribeOrganizationResponse = {}));
export var DescribeOrganizationalUnitRequest;
(function (DescribeOrganizationalUnitRequest) {
    /**
     * @internal
     */
    DescribeOrganizationalUnitRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOrganizationalUnitRequest || (DescribeOrganizationalUnitRequest = {}));
export var DescribeOrganizationalUnitResponse;
(function (DescribeOrganizationalUnitResponse) {
    /**
     * @internal
     */
    DescribeOrganizationalUnitResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOrganizationalUnitResponse || (DescribeOrganizationalUnitResponse = {}));
export var DescribePolicyRequest;
(function (DescribePolicyRequest) {
    /**
     * @internal
     */
    DescribePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePolicyRequest || (DescribePolicyRequest = {}));
export var DescribePolicyResponse;
(function (DescribePolicyResponse) {
    /**
     * @internal
     */
    DescribePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePolicyResponse || (DescribePolicyResponse = {}));
export var DetachPolicyRequest;
(function (DetachPolicyRequest) {
    /**
     * @internal
     */
    DetachPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachPolicyRequest || (DetachPolicyRequest = {}));
export var PolicyNotAttachedException;
(function (PolicyNotAttachedException) {
    /**
     * @internal
     */
    PolicyNotAttachedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyNotAttachedException || (PolicyNotAttachedException = {}));
export var DisableAWSServiceAccessRequest;
(function (DisableAWSServiceAccessRequest) {
    /**
     * @internal
     */
    DisableAWSServiceAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableAWSServiceAccessRequest || (DisableAWSServiceAccessRequest = {}));
export var DisablePolicyTypeRequest;
(function (DisablePolicyTypeRequest) {
    /**
     * @internal
     */
    DisablePolicyTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisablePolicyTypeRequest || (DisablePolicyTypeRequest = {}));
export var Root;
(function (Root) {
    /**
     * @internal
     */
    Root.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Root || (Root = {}));
export var DisablePolicyTypeResponse;
(function (DisablePolicyTypeResponse) {
    /**
     * @internal
     */
    DisablePolicyTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisablePolicyTypeResponse || (DisablePolicyTypeResponse = {}));
export var RootNotFoundException;
(function (RootNotFoundException) {
    /**
     * @internal
     */
    RootNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RootNotFoundException || (RootNotFoundException = {}));
export var EnableAllFeaturesRequest;
(function (EnableAllFeaturesRequest) {
    /**
     * @internal
     */
    EnableAllFeaturesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableAllFeaturesRequest || (EnableAllFeaturesRequest = {}));
export var EnableAWSServiceAccessRequest;
(function (EnableAWSServiceAccessRequest) {
    /**
     * @internal
     */
    EnableAWSServiceAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableAWSServiceAccessRequest || (EnableAWSServiceAccessRequest = {}));
export var EnablePolicyTypeRequest;
(function (EnablePolicyTypeRequest) {
    /**
     * @internal
     */
    EnablePolicyTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnablePolicyTypeRequest || (EnablePolicyTypeRequest = {}));
export var EnablePolicyTypeResponse;
(function (EnablePolicyTypeResponse) {
    /**
     * @internal
     */
    EnablePolicyTypeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnablePolicyTypeResponse || (EnablePolicyTypeResponse = {}));
export var PolicyTypeAlreadyEnabledException;
(function (PolicyTypeAlreadyEnabledException) {
    /**
     * @internal
     */
    PolicyTypeAlreadyEnabledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyTypeAlreadyEnabledException || (PolicyTypeAlreadyEnabledException = {}));
export var DuplicateHandshakeException;
(function (DuplicateHandshakeException) {
    /**
     * @internal
     */
    DuplicateHandshakeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateHandshakeException || (DuplicateHandshakeException = {}));
export var InviteAccountToOrganizationRequest;
(function (InviteAccountToOrganizationRequest) {
    /**
     * @internal
     */
    InviteAccountToOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Target && { Target: HandshakeParty.filterSensitiveLog(obj.Target) })), (obj.Notes && { Notes: SENSITIVE_STRING }))); };
})(InviteAccountToOrganizationRequest || (InviteAccountToOrganizationRequest = {}));
export var MasterCannotLeaveOrganizationException;
(function (MasterCannotLeaveOrganizationException) {
    /**
     * @internal
     */
    MasterCannotLeaveOrganizationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MasterCannotLeaveOrganizationException || (MasterCannotLeaveOrganizationException = {}));
export var ListAccountsRequest;
(function (ListAccountsRequest) {
    /**
     * @internal
     */
    ListAccountsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountsRequest || (ListAccountsRequest = {}));
export var ListAccountsResponse;
(function (ListAccountsResponse) {
    /**
     * @internal
     */
    ListAccountsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Accounts && { Accounts: obj.Accounts.map(function (item) { return Account.filterSensitiveLog(item); }) }))); };
})(ListAccountsResponse || (ListAccountsResponse = {}));
export var ListAccountsForParentRequest;
(function (ListAccountsForParentRequest) {
    /**
     * @internal
     */
    ListAccountsForParentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountsForParentRequest || (ListAccountsForParentRequest = {}));
export var ListAccountsForParentResponse;
(function (ListAccountsForParentResponse) {
    /**
     * @internal
     */
    ListAccountsForParentResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Accounts && { Accounts: obj.Accounts.map(function (item) { return Account.filterSensitiveLog(item); }) }))); };
})(ListAccountsForParentResponse || (ListAccountsForParentResponse = {}));
export var ListAWSServiceAccessForOrganizationRequest;
(function (ListAWSServiceAccessForOrganizationRequest) {
    /**
     * @internal
     */
    ListAWSServiceAccessForOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAWSServiceAccessForOrganizationRequest || (ListAWSServiceAccessForOrganizationRequest = {}));
export var EnabledServicePrincipal;
(function (EnabledServicePrincipal) {
    /**
     * @internal
     */
    EnabledServicePrincipal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnabledServicePrincipal || (EnabledServicePrincipal = {}));
export var ListAWSServiceAccessForOrganizationResponse;
(function (ListAWSServiceAccessForOrganizationResponse) {
    /**
     * @internal
     */
    ListAWSServiceAccessForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAWSServiceAccessForOrganizationResponse || (ListAWSServiceAccessForOrganizationResponse = {}));
export var ChildType;
(function (ChildType) {
    ChildType["ACCOUNT"] = "ACCOUNT";
    ChildType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
})(ChildType || (ChildType = {}));
export var ListChildrenRequest;
(function (ListChildrenRequest) {
    /**
     * @internal
     */
    ListChildrenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListChildrenRequest || (ListChildrenRequest = {}));
export var Child;
(function (Child) {
    /**
     * @internal
     */
    Child.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Child || (Child = {}));
export var ListChildrenResponse;
(function (ListChildrenResponse) {
    /**
     * @internal
     */
    ListChildrenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListChildrenResponse || (ListChildrenResponse = {}));
export var ListCreateAccountStatusRequest;
(function (ListCreateAccountStatusRequest) {
    /**
     * @internal
     */
    ListCreateAccountStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCreateAccountStatusRequest || (ListCreateAccountStatusRequest = {}));
export var ListCreateAccountStatusResponse;
(function (ListCreateAccountStatusResponse) {
    /**
     * @internal
     */
    ListCreateAccountStatusResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.CreateAccountStatuses && {
        CreateAccountStatuses: obj.CreateAccountStatuses.map(function (item) { return CreateAccountStatus.filterSensitiveLog(item); }),
    }))); };
})(ListCreateAccountStatusResponse || (ListCreateAccountStatusResponse = {}));
export var ListDelegatedAdministratorsRequest;
(function (ListDelegatedAdministratorsRequest) {
    /**
     * @internal
     */
    ListDelegatedAdministratorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDelegatedAdministratorsRequest || (ListDelegatedAdministratorsRequest = {}));
export var DelegatedAdministrator;
(function (DelegatedAdministrator) {
    /**
     * @internal
     */
    DelegatedAdministrator.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Email && { Email: SENSITIVE_STRING })), (obj.Name && { Name: SENSITIVE_STRING }))); };
})(DelegatedAdministrator || (DelegatedAdministrator = {}));
export var ListDelegatedAdministratorsResponse;
(function (ListDelegatedAdministratorsResponse) {
    /**
     * @internal
     */
    ListDelegatedAdministratorsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DelegatedAdministrators && {
        DelegatedAdministrators: obj.DelegatedAdministrators.map(function (item) {
            return DelegatedAdministrator.filterSensitiveLog(item);
        }),
    }))); };
})(ListDelegatedAdministratorsResponse || (ListDelegatedAdministratorsResponse = {}));
export var ListDelegatedServicesForAccountRequest;
(function (ListDelegatedServicesForAccountRequest) {
    /**
     * @internal
     */
    ListDelegatedServicesForAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDelegatedServicesForAccountRequest || (ListDelegatedServicesForAccountRequest = {}));
export var DelegatedService;
(function (DelegatedService) {
    /**
     * @internal
     */
    DelegatedService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DelegatedService || (DelegatedService = {}));
export var ListDelegatedServicesForAccountResponse;
(function (ListDelegatedServicesForAccountResponse) {
    /**
     * @internal
     */
    ListDelegatedServicesForAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDelegatedServicesForAccountResponse || (ListDelegatedServicesForAccountResponse = {}));
export var HandshakeFilter;
(function (HandshakeFilter) {
    /**
     * @internal
     */
    HandshakeFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HandshakeFilter || (HandshakeFilter = {}));
export var ListHandshakesForAccountRequest;
(function (ListHandshakesForAccountRequest) {
    /**
     * @internal
     */
    ListHandshakesForAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListHandshakesForAccountRequest || (ListHandshakesForAccountRequest = {}));
export var ListHandshakesForOrganizationRequest;
(function (ListHandshakesForOrganizationRequest) {
    /**
     * @internal
     */
    ListHandshakesForOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListHandshakesForOrganizationRequest || (ListHandshakesForOrganizationRequest = {}));
export var ListOrganizationalUnitsForParentRequest;
(function (ListOrganizationalUnitsForParentRequest) {
    /**
     * @internal
     */
    ListOrganizationalUnitsForParentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOrganizationalUnitsForParentRequest || (ListOrganizationalUnitsForParentRequest = {}));
export var ListOrganizationalUnitsForParentResponse;
(function (ListOrganizationalUnitsForParentResponse) {
    /**
     * @internal
     */
    ListOrganizationalUnitsForParentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOrganizationalUnitsForParentResponse || (ListOrganizationalUnitsForParentResponse = {}));
export var ChildNotFoundException;
(function (ChildNotFoundException) {
    /**
     * @internal
     */
    ChildNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChildNotFoundException || (ChildNotFoundException = {}));
export var ListParentsRequest;
(function (ListParentsRequest) {
    /**
     * @internal
     */
    ListParentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListParentsRequest || (ListParentsRequest = {}));
export var ParentType;
(function (ParentType) {
    ParentType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    ParentType["ROOT"] = "ROOT";
})(ParentType || (ParentType = {}));
export var Parent;
(function (Parent) {
    /**
     * @internal
     */
    Parent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Parent || (Parent = {}));
export var ListParentsResponse;
(function (ListParentsResponse) {
    /**
     * @internal
     */
    ListParentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListParentsResponse || (ListParentsResponse = {}));
export var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesRequest || (ListPoliciesRequest = {}));
export var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesResponse || (ListPoliciesResponse = {}));
export var ListPoliciesForTargetRequest;
(function (ListPoliciesForTargetRequest) {
    /**
     * @internal
     */
    ListPoliciesForTargetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesForTargetRequest || (ListPoliciesForTargetRequest = {}));
export var ListPoliciesForTargetResponse;
(function (ListPoliciesForTargetResponse) {
    /**
     * @internal
     */
    ListPoliciesForTargetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPoliciesForTargetResponse || (ListPoliciesForTargetResponse = {}));
export var ListRootsRequest;
(function (ListRootsRequest) {
    /**
     * @internal
     */
    ListRootsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRootsRequest || (ListRootsRequest = {}));
export var ListRootsResponse;
(function (ListRootsResponse) {
    /**
     * @internal
     */
    ListRootsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRootsResponse || (ListRootsResponse = {}));
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
export var ListTargetsForPolicyRequest;
(function (ListTargetsForPolicyRequest) {
    /**
     * @internal
     */
    ListTargetsForPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTargetsForPolicyRequest || (ListTargetsForPolicyRequest = {}));
export var TargetType;
(function (TargetType) {
    TargetType["ACCOUNT"] = "ACCOUNT";
    TargetType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    TargetType["ROOT"] = "ROOT";
})(TargetType || (TargetType = {}));
export var PolicyTargetSummary;
(function (PolicyTargetSummary) {
    /**
     * @internal
     */
    PolicyTargetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyTargetSummary || (PolicyTargetSummary = {}));
export var ListTargetsForPolicyResponse;
(function (ListTargetsForPolicyResponse) {
    /**
     * @internal
     */
    ListTargetsForPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTargetsForPolicyResponse || (ListTargetsForPolicyResponse = {}));
export var DestinationParentNotFoundException;
(function (DestinationParentNotFoundException) {
    /**
     * @internal
     */
    DestinationParentNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationParentNotFoundException || (DestinationParentNotFoundException = {}));
export var DuplicateAccountException;
(function (DuplicateAccountException) {
    /**
     * @internal
     */
    DuplicateAccountException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateAccountException || (DuplicateAccountException = {}));
export var MoveAccountRequest;
(function (MoveAccountRequest) {
    /**
     * @internal
     */
    MoveAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MoveAccountRequest || (MoveAccountRequest = {}));
export var SourceParentNotFoundException;
(function (SourceParentNotFoundException) {
    /**
     * @internal
     */
    SourceParentNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceParentNotFoundException || (SourceParentNotFoundException = {}));
export var RegisterDelegatedAdministratorRequest;
(function (RegisterDelegatedAdministratorRequest) {
    /**
     * @internal
     */
    RegisterDelegatedAdministratorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterDelegatedAdministratorRequest || (RegisterDelegatedAdministratorRequest = {}));
export var RemoveAccountFromOrganizationRequest;
(function (RemoveAccountFromOrganizationRequest) {
    /**
     * @internal
     */
    RemoveAccountFromOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveAccountFromOrganizationRequest || (RemoveAccountFromOrganizationRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateOrganizationalUnitRequest;
(function (UpdateOrganizationalUnitRequest) {
    /**
     * @internal
     */
    UpdateOrganizationalUnitRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOrganizationalUnitRequest || (UpdateOrganizationalUnitRequest = {}));
export var UpdateOrganizationalUnitResponse;
(function (UpdateOrganizationalUnitResponse) {
    /**
     * @internal
     */
    UpdateOrganizationalUnitResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOrganizationalUnitResponse || (UpdateOrganizationalUnitResponse = {}));
export var UpdatePolicyRequest;
(function (UpdatePolicyRequest) {
    /**
     * @internal
     */
    UpdatePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePolicyRequest || (UpdatePolicyRequest = {}));
export var UpdatePolicyResponse;
(function (UpdatePolicyResponse) {
    /**
     * @internal
     */
    UpdatePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePolicyResponse || (UpdatePolicyResponse = {}));
export var HandshakeResource;
(function (HandshakeResource) {
    /**
     * @internal
     */
    HandshakeResource.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Value && { Value: SENSITIVE_STRING })), (obj.Resources && { Resources: obj.Resources.map(function (item) { return HandshakeResource.filterSensitiveLog(item); }) }))); };
})(HandshakeResource || (HandshakeResource = {}));
export var Handshake;
(function (Handshake) {
    /**
     * @internal
     */
    Handshake.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Parties && { Parties: obj.Parties.map(function (item) { return HandshakeParty.filterSensitiveLog(item); }) })), (obj.Resources && { Resources: obj.Resources.map(function (item) { return HandshakeResource.filterSensitiveLog(item); }) }))); };
})(Handshake || (Handshake = {}));
export var AcceptHandshakeResponse;
(function (AcceptHandshakeResponse) {
    /**
     * @internal
     */
    AcceptHandshakeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }))); };
})(AcceptHandshakeResponse || (AcceptHandshakeResponse = {}));
export var CancelHandshakeResponse;
(function (CancelHandshakeResponse) {
    /**
     * @internal
     */
    CancelHandshakeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }))); };
})(CancelHandshakeResponse || (CancelHandshakeResponse = {}));
export var DeclineHandshakeResponse;
(function (DeclineHandshakeResponse) {
    /**
     * @internal
     */
    DeclineHandshakeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }))); };
})(DeclineHandshakeResponse || (DeclineHandshakeResponse = {}));
export var DescribeHandshakeResponse;
(function (DescribeHandshakeResponse) {
    /**
     * @internal
     */
    DescribeHandshakeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }))); };
})(DescribeHandshakeResponse || (DescribeHandshakeResponse = {}));
export var EnableAllFeaturesResponse;
(function (EnableAllFeaturesResponse) {
    /**
     * @internal
     */
    EnableAllFeaturesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }))); };
})(EnableAllFeaturesResponse || (EnableAllFeaturesResponse = {}));
export var InviteAccountToOrganizationResponse;
(function (InviteAccountToOrganizationResponse) {
    /**
     * @internal
     */
    InviteAccountToOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }))); };
})(InviteAccountToOrganizationResponse || (InviteAccountToOrganizationResponse = {}));
export var ListHandshakesForAccountResponse;
(function (ListHandshakesForAccountResponse) {
    /**
     * @internal
     */
    ListHandshakesForAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListHandshakesForAccountResponse || (ListHandshakesForAccountResponse = {}));
export var ListHandshakesForOrganizationResponse;
(function (ListHandshakesForOrganizationResponse) {
    /**
     * @internal
     */
    ListHandshakesForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListHandshakesForOrganizationResponse || (ListHandshakesForOrganizationResponse = {}));
//# sourceMappingURL=models_0.js.map