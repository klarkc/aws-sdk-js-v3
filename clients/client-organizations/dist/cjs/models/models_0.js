"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizationRequest = exports.OrganizationFeatureSet = exports.CreateGovCloudAccountResponse = exports.CreateGovCloudAccountRequest = exports.FinalizingOrganizationException = exports.CreateAccountResponse = exports.CreateAccountStatus = exports.CreateAccountState = exports.CreateAccountFailureReason = exports.CreateAccountRequest = exports.Tag = exports.IAMUserAccessToBilling = exports.CancelHandshakeRequest = exports.UnsupportedAPIEndpointException = exports.TargetNotFoundException = exports.PolicyTypeNotEnabledException = exports.PolicyNotFoundException = exports.PolicyChangesInProgressException = exports.DuplicatePolicyAttachmentException = exports.ConstraintViolationException = exports.ConstraintViolationExceptionReason = exports.AttachPolicyRequest = exports.AlreadyInOrganizationException = exports.AccountOwnerNotVerifiedException = exports.AccountNotRegisteredException = exports.AccountNotFoundException = exports.AccountAlreadyRegisteredException = exports.Account = exports.AccountStatus = exports.AccountJoinedMethod = exports.TooManyRequestsException = exports.ServiceException = exports.InvalidInputException = exports.InvalidInputExceptionReason = exports.InvalidHandshakeTransitionException = exports.HandshakeNotFoundException = exports.HandshakeConstraintViolationException = exports.HandshakeConstraintViolationExceptionReason = exports.HandshakeAlreadyInStateException = exports.ConcurrentModificationException = exports.AWSOrganizationsNotInUseException = exports.AccessDeniedForDependencyException = exports.AccessDeniedForDependencyExceptionReason = exports.AccessDeniedException = exports.HandshakeState = exports.HandshakeResourceType = exports.HandshakeParty = exports.HandshakePartyType = exports.ActionType = exports.AcceptHandshakeRequest = void 0;
exports.EnableAWSServiceAccessRequest = exports.EnableAllFeaturesRequest = exports.RootNotFoundException = exports.DisablePolicyTypeResponse = exports.Root = exports.DisablePolicyTypeRequest = exports.DisableAWSServiceAccessRequest = exports.PolicyNotAttachedException = exports.DetachPolicyRequest = exports.DescribePolicyResponse = exports.DescribePolicyRequest = exports.DescribeOrganizationalUnitResponse = exports.DescribeOrganizationalUnitRequest = exports.DescribeOrganizationResponse = exports.DescribeHandshakeRequest = exports.EffectivePolicyNotFoundException = exports.DescribeEffectivePolicyResponse = exports.EffectivePolicy = exports.DescribeEffectivePolicyRequest = exports.EffectivePolicyType = exports.DescribeCreateAccountStatusResponse = exports.DescribeCreateAccountStatusRequest = exports.CreateAccountStatusNotFoundException = exports.DescribeAccountResponse = exports.DescribeAccountRequest = exports.DeregisterDelegatedAdministratorRequest = exports.PolicyInUseException = exports.DeletePolicyRequest = exports.OrganizationalUnitNotFoundException = exports.OrganizationalUnitNotEmptyException = exports.DeleteOrganizationalUnitRequest = exports.OrganizationNotEmptyException = exports.DeclineHandshakeRequest = exports.PolicyTypeNotAvailableForOrganizationException = exports.MalformedPolicyDocumentException = exports.DuplicatePolicyException = exports.CreatePolicyResponse = exports.Policy = exports.PolicySummary = exports.CreatePolicyRequest = exports.ParentNotFoundException = exports.DuplicateOrganizationalUnitException = exports.CreateOrganizationalUnitResponse = exports.OrganizationalUnit = exports.CreateOrganizationalUnitRequest = exports.CreateOrganizationResponse = exports.Organization = exports.PolicyTypeSummary = exports.PolicyType = exports.PolicyTypeStatus = void 0;
exports.MoveAccountRequest = exports.DuplicateAccountException = exports.DestinationParentNotFoundException = exports.ListTargetsForPolicyResponse = exports.PolicyTargetSummary = exports.TargetType = exports.ListTargetsForPolicyRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListRootsResponse = exports.ListRootsRequest = exports.ListPoliciesForTargetResponse = exports.ListPoliciesForTargetRequest = exports.ListPoliciesResponse = exports.ListPoliciesRequest = exports.ListParentsResponse = exports.Parent = exports.ParentType = exports.ListParentsRequest = exports.ChildNotFoundException = exports.ListOrganizationalUnitsForParentResponse = exports.ListOrganizationalUnitsForParentRequest = exports.ListHandshakesForOrganizationRequest = exports.ListHandshakesForAccountRequest = exports.HandshakeFilter = exports.ListDelegatedServicesForAccountResponse = exports.DelegatedService = exports.ListDelegatedServicesForAccountRequest = exports.ListDelegatedAdministratorsResponse = exports.DelegatedAdministrator = exports.ListDelegatedAdministratorsRequest = exports.ListCreateAccountStatusResponse = exports.ListCreateAccountStatusRequest = exports.ListChildrenResponse = exports.Child = exports.ListChildrenRequest = exports.ChildType = exports.ListAWSServiceAccessForOrganizationResponse = exports.EnabledServicePrincipal = exports.ListAWSServiceAccessForOrganizationRequest = exports.ListAccountsForParentResponse = exports.ListAccountsForParentRequest = exports.ListAccountsResponse = exports.ListAccountsRequest = exports.MasterCannotLeaveOrganizationException = exports.InviteAccountToOrganizationRequest = exports.DuplicateHandshakeException = exports.PolicyTypeAlreadyEnabledException = exports.EnablePolicyTypeResponse = exports.EnablePolicyTypeRequest = void 0;
exports.ListHandshakesForOrganizationResponse = exports.ListHandshakesForAccountResponse = exports.InviteAccountToOrganizationResponse = exports.EnableAllFeaturesResponse = exports.DescribeHandshakeResponse = exports.DeclineHandshakeResponse = exports.CancelHandshakeResponse = exports.AcceptHandshakeResponse = exports.Handshake = exports.HandshakeResource = exports.UpdatePolicyResponse = exports.UpdatePolicyRequest = exports.UpdateOrganizationalUnitResponse = exports.UpdateOrganizationalUnitRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.RemoveAccountFromOrganizationRequest = exports.RegisterDelegatedAdministratorRequest = exports.SourceParentNotFoundException = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptHandshakeRequest;
(function (AcceptHandshakeRequest) {
    /**
     * @internal
     */
    AcceptHandshakeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptHandshakeRequest = exports.AcceptHandshakeRequest || (exports.AcceptHandshakeRequest = {}));
var ActionType;
(function (ActionType) {
    ActionType["ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"] = "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE";
    ActionType["APPROVE_ALL_FEATURES"] = "APPROVE_ALL_FEATURES";
    ActionType["ENABLE_ALL_FEATURES"] = "ENABLE_ALL_FEATURES";
    ActionType["INVITE_ACCOUNT_TO_ORGANIZATION"] = "INVITE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var HandshakePartyType;
(function (HandshakePartyType) {
    HandshakePartyType["ACCOUNT"] = "ACCOUNT";
    HandshakePartyType["EMAIL"] = "EMAIL";
    HandshakePartyType["ORGANIZATION"] = "ORGANIZATION";
})(HandshakePartyType = exports.HandshakePartyType || (exports.HandshakePartyType = {}));
var HandshakeParty;
(function (HandshakeParty) {
    /**
     * @internal
     */
    HandshakeParty.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Id && { Id: smithy_client_1.SENSITIVE_STRING }),
    });
})(HandshakeParty = exports.HandshakeParty || (exports.HandshakeParty = {}));
var HandshakeResourceType;
(function (HandshakeResourceType) {
    HandshakeResourceType["ACCOUNT"] = "ACCOUNT";
    HandshakeResourceType["EMAIL"] = "EMAIL";
    HandshakeResourceType["MASTER_EMAIL"] = "MASTER_EMAIL";
    HandshakeResourceType["MASTER_NAME"] = "MASTER_NAME";
    HandshakeResourceType["NOTES"] = "NOTES";
    HandshakeResourceType["ORGANIZATION"] = "ORGANIZATION";
    HandshakeResourceType["ORGANIZATION_FEATURE_SET"] = "ORGANIZATION_FEATURE_SET";
    HandshakeResourceType["PARENT_HANDSHAKE"] = "PARENT_HANDSHAKE";
})(HandshakeResourceType = exports.HandshakeResourceType || (exports.HandshakeResourceType = {}));
var HandshakeState;
(function (HandshakeState) {
    HandshakeState["ACCEPTED"] = "ACCEPTED";
    HandshakeState["CANCELED"] = "CANCELED";
    HandshakeState["DECLINED"] = "DECLINED";
    HandshakeState["EXPIRED"] = "EXPIRED";
    HandshakeState["OPEN"] = "OPEN";
    HandshakeState["REQUESTED"] = "REQUESTED";
})(HandshakeState = exports.HandshakeState || (exports.HandshakeState = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccessDeniedForDependencyExceptionReason;
(function (AccessDeniedForDependencyExceptionReason) {
    AccessDeniedForDependencyExceptionReason["ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE"] = "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE";
})(AccessDeniedForDependencyExceptionReason = exports.AccessDeniedForDependencyExceptionReason || (exports.AccessDeniedForDependencyExceptionReason = {}));
var AccessDeniedForDependencyException;
(function (AccessDeniedForDependencyException) {
    /**
     * @internal
     */
    AccessDeniedForDependencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedForDependencyException = exports.AccessDeniedForDependencyException || (exports.AccessDeniedForDependencyException = {}));
var AWSOrganizationsNotInUseException;
(function (AWSOrganizationsNotInUseException) {
    /**
     * @internal
     */
    AWSOrganizationsNotInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AWSOrganizationsNotInUseException = exports.AWSOrganizationsNotInUseException || (exports.AWSOrganizationsNotInUseException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var HandshakeAlreadyInStateException;
(function (HandshakeAlreadyInStateException) {
    /**
     * @internal
     */
    HandshakeAlreadyInStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HandshakeAlreadyInStateException = exports.HandshakeAlreadyInStateException || (exports.HandshakeAlreadyInStateException = {}));
var HandshakeConstraintViolationExceptionReason;
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
})(HandshakeConstraintViolationExceptionReason = exports.HandshakeConstraintViolationExceptionReason || (exports.HandshakeConstraintViolationExceptionReason = {}));
var HandshakeConstraintViolationException;
(function (HandshakeConstraintViolationException) {
    /**
     * @internal
     */
    HandshakeConstraintViolationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HandshakeConstraintViolationException = exports.HandshakeConstraintViolationException || (exports.HandshakeConstraintViolationException = {}));
var HandshakeNotFoundException;
(function (HandshakeNotFoundException) {
    /**
     * @internal
     */
    HandshakeNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HandshakeNotFoundException = exports.HandshakeNotFoundException || (exports.HandshakeNotFoundException = {}));
var InvalidHandshakeTransitionException;
(function (InvalidHandshakeTransitionException) {
    /**
     * @internal
     */
    InvalidHandshakeTransitionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidHandshakeTransitionException = exports.InvalidHandshakeTransitionException || (exports.InvalidHandshakeTransitionException = {}));
var InvalidInputExceptionReason;
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
})(InvalidInputExceptionReason = exports.InvalidInputExceptionReason || (exports.InvalidInputExceptionReason = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var AccountJoinedMethod;
(function (AccountJoinedMethod) {
    AccountJoinedMethod["CREATED"] = "CREATED";
    AccountJoinedMethod["INVITED"] = "INVITED";
})(AccountJoinedMethod = exports.AccountJoinedMethod || (exports.AccountJoinedMethod = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["SUSPENDED"] = "SUSPENDED";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
var Account;
(function (Account) {
    /**
     * @internal
     */
    Account.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Email && { Email: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    });
})(Account = exports.Account || (exports.Account = {}));
var AccountAlreadyRegisteredException;
(function (AccountAlreadyRegisteredException) {
    /**
     * @internal
     */
    AccountAlreadyRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountAlreadyRegisteredException = exports.AccountAlreadyRegisteredException || (exports.AccountAlreadyRegisteredException = {}));
var AccountNotFoundException;
(function (AccountNotFoundException) {
    /**
     * @internal
     */
    AccountNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountNotFoundException = exports.AccountNotFoundException || (exports.AccountNotFoundException = {}));
var AccountNotRegisteredException;
(function (AccountNotRegisteredException) {
    /**
     * @internal
     */
    AccountNotRegisteredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountNotRegisteredException = exports.AccountNotRegisteredException || (exports.AccountNotRegisteredException = {}));
var AccountOwnerNotVerifiedException;
(function (AccountOwnerNotVerifiedException) {
    /**
     * @internal
     */
    AccountOwnerNotVerifiedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountOwnerNotVerifiedException = exports.AccountOwnerNotVerifiedException || (exports.AccountOwnerNotVerifiedException = {}));
var AlreadyInOrganizationException;
(function (AlreadyInOrganizationException) {
    /**
     * @internal
     */
    AlreadyInOrganizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyInOrganizationException = exports.AlreadyInOrganizationException || (exports.AlreadyInOrganizationException = {}));
var AttachPolicyRequest;
(function (AttachPolicyRequest) {
    /**
     * @internal
     */
    AttachPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachPolicyRequest = exports.AttachPolicyRequest || (exports.AttachPolicyRequest = {}));
var ConstraintViolationExceptionReason;
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
})(ConstraintViolationExceptionReason = exports.ConstraintViolationExceptionReason || (exports.ConstraintViolationExceptionReason = {}));
var ConstraintViolationException;
(function (ConstraintViolationException) {
    /**
     * @internal
     */
    ConstraintViolationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConstraintViolationException = exports.ConstraintViolationException || (exports.ConstraintViolationException = {}));
var DuplicatePolicyAttachmentException;
(function (DuplicatePolicyAttachmentException) {
    /**
     * @internal
     */
    DuplicatePolicyAttachmentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicatePolicyAttachmentException = exports.DuplicatePolicyAttachmentException || (exports.DuplicatePolicyAttachmentException = {}));
var PolicyChangesInProgressException;
(function (PolicyChangesInProgressException) {
    /**
     * @internal
     */
    PolicyChangesInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyChangesInProgressException = exports.PolicyChangesInProgressException || (exports.PolicyChangesInProgressException = {}));
var PolicyNotFoundException;
(function (PolicyNotFoundException) {
    /**
     * @internal
     */
    PolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyNotFoundException = exports.PolicyNotFoundException || (exports.PolicyNotFoundException = {}));
var PolicyTypeNotEnabledException;
(function (PolicyTypeNotEnabledException) {
    /**
     * @internal
     */
    PolicyTypeNotEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyTypeNotEnabledException = exports.PolicyTypeNotEnabledException || (exports.PolicyTypeNotEnabledException = {}));
var TargetNotFoundException;
(function (TargetNotFoundException) {
    /**
     * @internal
     */
    TargetNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetNotFoundException = exports.TargetNotFoundException || (exports.TargetNotFoundException = {}));
var UnsupportedAPIEndpointException;
(function (UnsupportedAPIEndpointException) {
    /**
     * @internal
     */
    UnsupportedAPIEndpointException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedAPIEndpointException = exports.UnsupportedAPIEndpointException || (exports.UnsupportedAPIEndpointException = {}));
var CancelHandshakeRequest;
(function (CancelHandshakeRequest) {
    /**
     * @internal
     */
    CancelHandshakeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelHandshakeRequest = exports.CancelHandshakeRequest || (exports.CancelHandshakeRequest = {}));
var IAMUserAccessToBilling;
(function (IAMUserAccessToBilling) {
    IAMUserAccessToBilling["ALLOW"] = "ALLOW";
    IAMUserAccessToBilling["DENY"] = "DENY";
})(IAMUserAccessToBilling = exports.IAMUserAccessToBilling || (exports.IAMUserAccessToBilling = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAccountRequest;
(function (CreateAccountRequest) {
    /**
     * @internal
     */
    CreateAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Email && { Email: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AccountName && { AccountName: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateAccountRequest = exports.CreateAccountRequest || (exports.CreateAccountRequest = {}));
var CreateAccountFailureReason;
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
})(CreateAccountFailureReason = exports.CreateAccountFailureReason || (exports.CreateAccountFailureReason = {}));
var CreateAccountState;
(function (CreateAccountState) {
    CreateAccountState["FAILED"] = "FAILED";
    CreateAccountState["IN_PROGRESS"] = "IN_PROGRESS";
    CreateAccountState["SUCCEEDED"] = "SUCCEEDED";
})(CreateAccountState = exports.CreateAccountState || (exports.CreateAccountState = {}));
var CreateAccountStatus;
(function (CreateAccountStatus) {
    /**
     * @internal
     */
    CreateAccountStatus.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AccountName && { AccountName: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateAccountStatus = exports.CreateAccountStatus || (exports.CreateAccountStatus = {}));
var CreateAccountResponse;
(function (CreateAccountResponse) {
    /**
     * @internal
     */
    CreateAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CreateAccountStatus && {
            CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(obj.CreateAccountStatus),
        }),
    });
})(CreateAccountResponse = exports.CreateAccountResponse || (exports.CreateAccountResponse = {}));
var FinalizingOrganizationException;
(function (FinalizingOrganizationException) {
    /**
     * @internal
     */
    FinalizingOrganizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinalizingOrganizationException = exports.FinalizingOrganizationException || (exports.FinalizingOrganizationException = {}));
var CreateGovCloudAccountRequest;
(function (CreateGovCloudAccountRequest) {
    /**
     * @internal
     */
    CreateGovCloudAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Email && { Email: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AccountName && { AccountName: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateGovCloudAccountRequest = exports.CreateGovCloudAccountRequest || (exports.CreateGovCloudAccountRequest = {}));
var CreateGovCloudAccountResponse;
(function (CreateGovCloudAccountResponse) {
    /**
     * @internal
     */
    CreateGovCloudAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CreateAccountStatus && {
            CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(obj.CreateAccountStatus),
        }),
    });
})(CreateGovCloudAccountResponse = exports.CreateGovCloudAccountResponse || (exports.CreateGovCloudAccountResponse = {}));
var OrganizationFeatureSet;
(function (OrganizationFeatureSet) {
    OrganizationFeatureSet["ALL"] = "ALL";
    OrganizationFeatureSet["CONSOLIDATED_BILLING"] = "CONSOLIDATED_BILLING";
})(OrganizationFeatureSet = exports.OrganizationFeatureSet || (exports.OrganizationFeatureSet = {}));
var CreateOrganizationRequest;
(function (CreateOrganizationRequest) {
    /**
     * @internal
     */
    CreateOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOrganizationRequest = exports.CreateOrganizationRequest || (exports.CreateOrganizationRequest = {}));
var PolicyTypeStatus;
(function (PolicyTypeStatus) {
    PolicyTypeStatus["ENABLED"] = "ENABLED";
    PolicyTypeStatus["PENDING_DISABLE"] = "PENDING_DISABLE";
    PolicyTypeStatus["PENDING_ENABLE"] = "PENDING_ENABLE";
})(PolicyTypeStatus = exports.PolicyTypeStatus || (exports.PolicyTypeStatus = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["AISERVICES_OPT_OUT_POLICY"] = "AISERVICES_OPT_OUT_POLICY";
    PolicyType["BACKUP_POLICY"] = "BACKUP_POLICY";
    PolicyType["SERVICE_CONTROL_POLICY"] = "SERVICE_CONTROL_POLICY";
    PolicyType["TAG_POLICY"] = "TAG_POLICY";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var PolicyTypeSummary;
(function (PolicyTypeSummary) {
    /**
     * @internal
     */
    PolicyTypeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyTypeSummary = exports.PolicyTypeSummary || (exports.PolicyTypeSummary = {}));
var Organization;
(function (Organization) {
    /**
     * @internal
     */
    Organization.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MasterAccountEmail && { MasterAccountEmail: smithy_client_1.SENSITIVE_STRING }),
    });
})(Organization = exports.Organization || (exports.Organization = {}));
var CreateOrganizationResponse;
(function (CreateOrganizationResponse) {
    /**
     * @internal
     */
    CreateOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Organization && { Organization: Organization.filterSensitiveLog(obj.Organization) }),
    });
})(CreateOrganizationResponse = exports.CreateOrganizationResponse || (exports.CreateOrganizationResponse = {}));
var CreateOrganizationalUnitRequest;
(function (CreateOrganizationalUnitRequest) {
    /**
     * @internal
     */
    CreateOrganizationalUnitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOrganizationalUnitRequest = exports.CreateOrganizationalUnitRequest || (exports.CreateOrganizationalUnitRequest = {}));
var OrganizationalUnit;
(function (OrganizationalUnit) {
    /**
     * @internal
     */
    OrganizationalUnit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationalUnit = exports.OrganizationalUnit || (exports.OrganizationalUnit = {}));
var CreateOrganizationalUnitResponse;
(function (CreateOrganizationalUnitResponse) {
    /**
     * @internal
     */
    CreateOrganizationalUnitResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOrganizationalUnitResponse = exports.CreateOrganizationalUnitResponse || (exports.CreateOrganizationalUnitResponse = {}));
var DuplicateOrganizationalUnitException;
(function (DuplicateOrganizationalUnitException) {
    /**
     * @internal
     */
    DuplicateOrganizationalUnitException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateOrganizationalUnitException = exports.DuplicateOrganizationalUnitException || (exports.DuplicateOrganizationalUnitException = {}));
var ParentNotFoundException;
(function (ParentNotFoundException) {
    /**
     * @internal
     */
    ParentNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParentNotFoundException = exports.ParentNotFoundException || (exports.ParentNotFoundException = {}));
var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    /**
     * @internal
     */
    CreatePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyRequest = exports.CreatePolicyRequest || (exports.CreatePolicyRequest = {}));
var PolicySummary;
(function (PolicySummary) {
    /**
     * @internal
     */
    PolicySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicySummary = exports.PolicySummary || (exports.PolicySummary = {}));
var Policy;
(function (Policy) {
    /**
     * @internal
     */
    Policy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Policy = exports.Policy || (exports.Policy = {}));
var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    /**
     * @internal
     */
    CreatePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePolicyResponse = exports.CreatePolicyResponse || (exports.CreatePolicyResponse = {}));
var DuplicatePolicyException;
(function (DuplicatePolicyException) {
    /**
     * @internal
     */
    DuplicatePolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicatePolicyException = exports.DuplicatePolicyException || (exports.DuplicatePolicyException = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var PolicyTypeNotAvailableForOrganizationException;
(function (PolicyTypeNotAvailableForOrganizationException) {
    /**
     * @internal
     */
    PolicyTypeNotAvailableForOrganizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyTypeNotAvailableForOrganizationException = exports.PolicyTypeNotAvailableForOrganizationException || (exports.PolicyTypeNotAvailableForOrganizationException = {}));
var DeclineHandshakeRequest;
(function (DeclineHandshakeRequest) {
    /**
     * @internal
     */
    DeclineHandshakeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineHandshakeRequest = exports.DeclineHandshakeRequest || (exports.DeclineHandshakeRequest = {}));
var OrganizationNotEmptyException;
(function (OrganizationNotEmptyException) {
    /**
     * @internal
     */
    OrganizationNotEmptyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationNotEmptyException = exports.OrganizationNotEmptyException || (exports.OrganizationNotEmptyException = {}));
var DeleteOrganizationalUnitRequest;
(function (DeleteOrganizationalUnitRequest) {
    /**
     * @internal
     */
    DeleteOrganizationalUnitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOrganizationalUnitRequest = exports.DeleteOrganizationalUnitRequest || (exports.DeleteOrganizationalUnitRequest = {}));
var OrganizationalUnitNotEmptyException;
(function (OrganizationalUnitNotEmptyException) {
    /**
     * @internal
     */
    OrganizationalUnitNotEmptyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationalUnitNotEmptyException = exports.OrganizationalUnitNotEmptyException || (exports.OrganizationalUnitNotEmptyException = {}));
var OrganizationalUnitNotFoundException;
(function (OrganizationalUnitNotFoundException) {
    /**
     * @internal
     */
    OrganizationalUnitNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationalUnitNotFoundException = exports.OrganizationalUnitNotFoundException || (exports.OrganizationalUnitNotFoundException = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    /**
     * @internal
     */
    DeletePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var PolicyInUseException;
(function (PolicyInUseException) {
    /**
     * @internal
     */
    PolicyInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyInUseException = exports.PolicyInUseException || (exports.PolicyInUseException = {}));
var DeregisterDelegatedAdministratorRequest;
(function (DeregisterDelegatedAdministratorRequest) {
    /**
     * @internal
     */
    DeregisterDelegatedAdministratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterDelegatedAdministratorRequest = exports.DeregisterDelegatedAdministratorRequest || (exports.DeregisterDelegatedAdministratorRequest = {}));
var DescribeAccountRequest;
(function (DescribeAccountRequest) {
    /**
     * @internal
     */
    DescribeAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountRequest = exports.DescribeAccountRequest || (exports.DescribeAccountRequest = {}));
var DescribeAccountResponse;
(function (DescribeAccountResponse) {
    /**
     * @internal
     */
    DescribeAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Account && { Account: Account.filterSensitiveLog(obj.Account) }),
    });
})(DescribeAccountResponse = exports.DescribeAccountResponse || (exports.DescribeAccountResponse = {}));
var CreateAccountStatusNotFoundException;
(function (CreateAccountStatusNotFoundException) {
    /**
     * @internal
     */
    CreateAccountStatusNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccountStatusNotFoundException = exports.CreateAccountStatusNotFoundException || (exports.CreateAccountStatusNotFoundException = {}));
var DescribeCreateAccountStatusRequest;
(function (DescribeCreateAccountStatusRequest) {
    /**
     * @internal
     */
    DescribeCreateAccountStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCreateAccountStatusRequest = exports.DescribeCreateAccountStatusRequest || (exports.DescribeCreateAccountStatusRequest = {}));
var DescribeCreateAccountStatusResponse;
(function (DescribeCreateAccountStatusResponse) {
    /**
     * @internal
     */
    DescribeCreateAccountStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CreateAccountStatus && {
            CreateAccountStatus: CreateAccountStatus.filterSensitiveLog(obj.CreateAccountStatus),
        }),
    });
})(DescribeCreateAccountStatusResponse = exports.DescribeCreateAccountStatusResponse || (exports.DescribeCreateAccountStatusResponse = {}));
var EffectivePolicyType;
(function (EffectivePolicyType) {
    EffectivePolicyType["AISERVICES_OPT_OUT_POLICY"] = "AISERVICES_OPT_OUT_POLICY";
    EffectivePolicyType["BACKUP_POLICY"] = "BACKUP_POLICY";
    EffectivePolicyType["TAG_POLICY"] = "TAG_POLICY";
})(EffectivePolicyType = exports.EffectivePolicyType || (exports.EffectivePolicyType = {}));
var DescribeEffectivePolicyRequest;
(function (DescribeEffectivePolicyRequest) {
    /**
     * @internal
     */
    DescribeEffectivePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEffectivePolicyRequest = exports.DescribeEffectivePolicyRequest || (exports.DescribeEffectivePolicyRequest = {}));
var EffectivePolicy;
(function (EffectivePolicy) {
    /**
     * @internal
     */
    EffectivePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EffectivePolicy = exports.EffectivePolicy || (exports.EffectivePolicy = {}));
var DescribeEffectivePolicyResponse;
(function (DescribeEffectivePolicyResponse) {
    /**
     * @internal
     */
    DescribeEffectivePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEffectivePolicyResponse = exports.DescribeEffectivePolicyResponse || (exports.DescribeEffectivePolicyResponse = {}));
var EffectivePolicyNotFoundException;
(function (EffectivePolicyNotFoundException) {
    /**
     * @internal
     */
    EffectivePolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EffectivePolicyNotFoundException = exports.EffectivePolicyNotFoundException || (exports.EffectivePolicyNotFoundException = {}));
var DescribeHandshakeRequest;
(function (DescribeHandshakeRequest) {
    /**
     * @internal
     */
    DescribeHandshakeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHandshakeRequest = exports.DescribeHandshakeRequest || (exports.DescribeHandshakeRequest = {}));
var DescribeOrganizationResponse;
(function (DescribeOrganizationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Organization && { Organization: Organization.filterSensitiveLog(obj.Organization) }),
    });
})(DescribeOrganizationResponse = exports.DescribeOrganizationResponse || (exports.DescribeOrganizationResponse = {}));
var DescribeOrganizationalUnitRequest;
(function (DescribeOrganizationalUnitRequest) {
    /**
     * @internal
     */
    DescribeOrganizationalUnitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationalUnitRequest = exports.DescribeOrganizationalUnitRequest || (exports.DescribeOrganizationalUnitRequest = {}));
var DescribeOrganizationalUnitResponse;
(function (DescribeOrganizationalUnitResponse) {
    /**
     * @internal
     */
    DescribeOrganizationalUnitResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationalUnitResponse = exports.DescribeOrganizationalUnitResponse || (exports.DescribeOrganizationalUnitResponse = {}));
var DescribePolicyRequest;
(function (DescribePolicyRequest) {
    /**
     * @internal
     */
    DescribePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePolicyRequest = exports.DescribePolicyRequest || (exports.DescribePolicyRequest = {}));
var DescribePolicyResponse;
(function (DescribePolicyResponse) {
    /**
     * @internal
     */
    DescribePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePolicyResponse = exports.DescribePolicyResponse || (exports.DescribePolicyResponse = {}));
var DetachPolicyRequest;
(function (DetachPolicyRequest) {
    /**
     * @internal
     */
    DetachPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachPolicyRequest = exports.DetachPolicyRequest || (exports.DetachPolicyRequest = {}));
var PolicyNotAttachedException;
(function (PolicyNotAttachedException) {
    /**
     * @internal
     */
    PolicyNotAttachedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyNotAttachedException = exports.PolicyNotAttachedException || (exports.PolicyNotAttachedException = {}));
var DisableAWSServiceAccessRequest;
(function (DisableAWSServiceAccessRequest) {
    /**
     * @internal
     */
    DisableAWSServiceAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAWSServiceAccessRequest = exports.DisableAWSServiceAccessRequest || (exports.DisableAWSServiceAccessRequest = {}));
var DisablePolicyTypeRequest;
(function (DisablePolicyTypeRequest) {
    /**
     * @internal
     */
    DisablePolicyTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisablePolicyTypeRequest = exports.DisablePolicyTypeRequest || (exports.DisablePolicyTypeRequest = {}));
var Root;
(function (Root) {
    /**
     * @internal
     */
    Root.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Root = exports.Root || (exports.Root = {}));
var DisablePolicyTypeResponse;
(function (DisablePolicyTypeResponse) {
    /**
     * @internal
     */
    DisablePolicyTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisablePolicyTypeResponse = exports.DisablePolicyTypeResponse || (exports.DisablePolicyTypeResponse = {}));
var RootNotFoundException;
(function (RootNotFoundException) {
    /**
     * @internal
     */
    RootNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RootNotFoundException = exports.RootNotFoundException || (exports.RootNotFoundException = {}));
var EnableAllFeaturesRequest;
(function (EnableAllFeaturesRequest) {
    /**
     * @internal
     */
    EnableAllFeaturesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAllFeaturesRequest = exports.EnableAllFeaturesRequest || (exports.EnableAllFeaturesRequest = {}));
var EnableAWSServiceAccessRequest;
(function (EnableAWSServiceAccessRequest) {
    /**
     * @internal
     */
    EnableAWSServiceAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAWSServiceAccessRequest = exports.EnableAWSServiceAccessRequest || (exports.EnableAWSServiceAccessRequest = {}));
var EnablePolicyTypeRequest;
(function (EnablePolicyTypeRequest) {
    /**
     * @internal
     */
    EnablePolicyTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnablePolicyTypeRequest = exports.EnablePolicyTypeRequest || (exports.EnablePolicyTypeRequest = {}));
var EnablePolicyTypeResponse;
(function (EnablePolicyTypeResponse) {
    /**
     * @internal
     */
    EnablePolicyTypeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnablePolicyTypeResponse = exports.EnablePolicyTypeResponse || (exports.EnablePolicyTypeResponse = {}));
var PolicyTypeAlreadyEnabledException;
(function (PolicyTypeAlreadyEnabledException) {
    /**
     * @internal
     */
    PolicyTypeAlreadyEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyTypeAlreadyEnabledException = exports.PolicyTypeAlreadyEnabledException || (exports.PolicyTypeAlreadyEnabledException = {}));
var DuplicateHandshakeException;
(function (DuplicateHandshakeException) {
    /**
     * @internal
     */
    DuplicateHandshakeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateHandshakeException = exports.DuplicateHandshakeException || (exports.DuplicateHandshakeException = {}));
var InviteAccountToOrganizationRequest;
(function (InviteAccountToOrganizationRequest) {
    /**
     * @internal
     */
    InviteAccountToOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Target && { Target: HandshakeParty.filterSensitiveLog(obj.Target) }),
        ...(obj.Notes && { Notes: smithy_client_1.SENSITIVE_STRING }),
    });
})(InviteAccountToOrganizationRequest = exports.InviteAccountToOrganizationRequest || (exports.InviteAccountToOrganizationRequest = {}));
var MasterCannotLeaveOrganizationException;
(function (MasterCannotLeaveOrganizationException) {
    /**
     * @internal
     */
    MasterCannotLeaveOrganizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MasterCannotLeaveOrganizationException = exports.MasterCannotLeaveOrganizationException || (exports.MasterCannotLeaveOrganizationException = {}));
var ListAccountsRequest;
(function (ListAccountsRequest) {
    /**
     * @internal
     */
    ListAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountsRequest = exports.ListAccountsRequest || (exports.ListAccountsRequest = {}));
var ListAccountsResponse;
(function (ListAccountsResponse) {
    /**
     * @internal
     */
    ListAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Accounts && { Accounts: obj.Accounts.map((item) => Account.filterSensitiveLog(item)) }),
    });
})(ListAccountsResponse = exports.ListAccountsResponse || (exports.ListAccountsResponse = {}));
var ListAccountsForParentRequest;
(function (ListAccountsForParentRequest) {
    /**
     * @internal
     */
    ListAccountsForParentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountsForParentRequest = exports.ListAccountsForParentRequest || (exports.ListAccountsForParentRequest = {}));
var ListAccountsForParentResponse;
(function (ListAccountsForParentResponse) {
    /**
     * @internal
     */
    ListAccountsForParentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Accounts && { Accounts: obj.Accounts.map((item) => Account.filterSensitiveLog(item)) }),
    });
})(ListAccountsForParentResponse = exports.ListAccountsForParentResponse || (exports.ListAccountsForParentResponse = {}));
var ListAWSServiceAccessForOrganizationRequest;
(function (ListAWSServiceAccessForOrganizationRequest) {
    /**
     * @internal
     */
    ListAWSServiceAccessForOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAWSServiceAccessForOrganizationRequest = exports.ListAWSServiceAccessForOrganizationRequest || (exports.ListAWSServiceAccessForOrganizationRequest = {}));
var EnabledServicePrincipal;
(function (EnabledServicePrincipal) {
    /**
     * @internal
     */
    EnabledServicePrincipal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnabledServicePrincipal = exports.EnabledServicePrincipal || (exports.EnabledServicePrincipal = {}));
var ListAWSServiceAccessForOrganizationResponse;
(function (ListAWSServiceAccessForOrganizationResponse) {
    /**
     * @internal
     */
    ListAWSServiceAccessForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAWSServiceAccessForOrganizationResponse = exports.ListAWSServiceAccessForOrganizationResponse || (exports.ListAWSServiceAccessForOrganizationResponse = {}));
var ChildType;
(function (ChildType) {
    ChildType["ACCOUNT"] = "ACCOUNT";
    ChildType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
})(ChildType = exports.ChildType || (exports.ChildType = {}));
var ListChildrenRequest;
(function (ListChildrenRequest) {
    /**
     * @internal
     */
    ListChildrenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChildrenRequest = exports.ListChildrenRequest || (exports.ListChildrenRequest = {}));
var Child;
(function (Child) {
    /**
     * @internal
     */
    Child.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Child = exports.Child || (exports.Child = {}));
var ListChildrenResponse;
(function (ListChildrenResponse) {
    /**
     * @internal
     */
    ListChildrenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChildrenResponse = exports.ListChildrenResponse || (exports.ListChildrenResponse = {}));
var ListCreateAccountStatusRequest;
(function (ListCreateAccountStatusRequest) {
    /**
     * @internal
     */
    ListCreateAccountStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCreateAccountStatusRequest = exports.ListCreateAccountStatusRequest || (exports.ListCreateAccountStatusRequest = {}));
var ListCreateAccountStatusResponse;
(function (ListCreateAccountStatusResponse) {
    /**
     * @internal
     */
    ListCreateAccountStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CreateAccountStatuses && {
            CreateAccountStatuses: obj.CreateAccountStatuses.map((item) => CreateAccountStatus.filterSensitiveLog(item)),
        }),
    });
})(ListCreateAccountStatusResponse = exports.ListCreateAccountStatusResponse || (exports.ListCreateAccountStatusResponse = {}));
var ListDelegatedAdministratorsRequest;
(function (ListDelegatedAdministratorsRequest) {
    /**
     * @internal
     */
    ListDelegatedAdministratorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDelegatedAdministratorsRequest = exports.ListDelegatedAdministratorsRequest || (exports.ListDelegatedAdministratorsRequest = {}));
var DelegatedAdministrator;
(function (DelegatedAdministrator) {
    /**
     * @internal
     */
    DelegatedAdministrator.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Email && { Email: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Name && { Name: smithy_client_1.SENSITIVE_STRING }),
    });
})(DelegatedAdministrator = exports.DelegatedAdministrator || (exports.DelegatedAdministrator = {}));
var ListDelegatedAdministratorsResponse;
(function (ListDelegatedAdministratorsResponse) {
    /**
     * @internal
     */
    ListDelegatedAdministratorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DelegatedAdministrators && {
            DelegatedAdministrators: obj.DelegatedAdministrators.map((item) => DelegatedAdministrator.filterSensitiveLog(item)),
        }),
    });
})(ListDelegatedAdministratorsResponse = exports.ListDelegatedAdministratorsResponse || (exports.ListDelegatedAdministratorsResponse = {}));
var ListDelegatedServicesForAccountRequest;
(function (ListDelegatedServicesForAccountRequest) {
    /**
     * @internal
     */
    ListDelegatedServicesForAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDelegatedServicesForAccountRequest = exports.ListDelegatedServicesForAccountRequest || (exports.ListDelegatedServicesForAccountRequest = {}));
var DelegatedService;
(function (DelegatedService) {
    /**
     * @internal
     */
    DelegatedService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegatedService = exports.DelegatedService || (exports.DelegatedService = {}));
var ListDelegatedServicesForAccountResponse;
(function (ListDelegatedServicesForAccountResponse) {
    /**
     * @internal
     */
    ListDelegatedServicesForAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDelegatedServicesForAccountResponse = exports.ListDelegatedServicesForAccountResponse || (exports.ListDelegatedServicesForAccountResponse = {}));
var HandshakeFilter;
(function (HandshakeFilter) {
    /**
     * @internal
     */
    HandshakeFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HandshakeFilter = exports.HandshakeFilter || (exports.HandshakeFilter = {}));
var ListHandshakesForAccountRequest;
(function (ListHandshakesForAccountRequest) {
    /**
     * @internal
     */
    ListHandshakesForAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHandshakesForAccountRequest = exports.ListHandshakesForAccountRequest || (exports.ListHandshakesForAccountRequest = {}));
var ListHandshakesForOrganizationRequest;
(function (ListHandshakesForOrganizationRequest) {
    /**
     * @internal
     */
    ListHandshakesForOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHandshakesForOrganizationRequest = exports.ListHandshakesForOrganizationRequest || (exports.ListHandshakesForOrganizationRequest = {}));
var ListOrganizationalUnitsForParentRequest;
(function (ListOrganizationalUnitsForParentRequest) {
    /**
     * @internal
     */
    ListOrganizationalUnitsForParentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationalUnitsForParentRequest = exports.ListOrganizationalUnitsForParentRequest || (exports.ListOrganizationalUnitsForParentRequest = {}));
var ListOrganizationalUnitsForParentResponse;
(function (ListOrganizationalUnitsForParentResponse) {
    /**
     * @internal
     */
    ListOrganizationalUnitsForParentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationalUnitsForParentResponse = exports.ListOrganizationalUnitsForParentResponse || (exports.ListOrganizationalUnitsForParentResponse = {}));
var ChildNotFoundException;
(function (ChildNotFoundException) {
    /**
     * @internal
     */
    ChildNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildNotFoundException = exports.ChildNotFoundException || (exports.ChildNotFoundException = {}));
var ListParentsRequest;
(function (ListParentsRequest) {
    /**
     * @internal
     */
    ListParentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListParentsRequest = exports.ListParentsRequest || (exports.ListParentsRequest = {}));
var ParentType;
(function (ParentType) {
    ParentType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    ParentType["ROOT"] = "ROOT";
})(ParentType = exports.ParentType || (exports.ParentType = {}));
var Parent;
(function (Parent) {
    /**
     * @internal
     */
    Parent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parent = exports.Parent || (exports.Parent = {}));
var ListParentsResponse;
(function (ListParentsResponse) {
    /**
     * @internal
     */
    ListParentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListParentsResponse = exports.ListParentsResponse || (exports.ListParentsResponse = {}));
var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    /**
     * @internal
     */
    ListPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesRequest = exports.ListPoliciesRequest || (exports.ListPoliciesRequest = {}));
var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    /**
     * @internal
     */
    ListPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesResponse = exports.ListPoliciesResponse || (exports.ListPoliciesResponse = {}));
var ListPoliciesForTargetRequest;
(function (ListPoliciesForTargetRequest) {
    /**
     * @internal
     */
    ListPoliciesForTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesForTargetRequest = exports.ListPoliciesForTargetRequest || (exports.ListPoliciesForTargetRequest = {}));
var ListPoliciesForTargetResponse;
(function (ListPoliciesForTargetResponse) {
    /**
     * @internal
     */
    ListPoliciesForTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPoliciesForTargetResponse = exports.ListPoliciesForTargetResponse || (exports.ListPoliciesForTargetResponse = {}));
var ListRootsRequest;
(function (ListRootsRequest) {
    /**
     * @internal
     */
    ListRootsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRootsRequest = exports.ListRootsRequest || (exports.ListRootsRequest = {}));
var ListRootsResponse;
(function (ListRootsResponse) {
    /**
     * @internal
     */
    ListRootsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRootsResponse = exports.ListRootsResponse || (exports.ListRootsResponse = {}));
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
var ListTargetsForPolicyRequest;
(function (ListTargetsForPolicyRequest) {
    /**
     * @internal
     */
    ListTargetsForPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsForPolicyRequest = exports.ListTargetsForPolicyRequest || (exports.ListTargetsForPolicyRequest = {}));
var TargetType;
(function (TargetType) {
    TargetType["ACCOUNT"] = "ACCOUNT";
    TargetType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    TargetType["ROOT"] = "ROOT";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var PolicyTargetSummary;
(function (PolicyTargetSummary) {
    /**
     * @internal
     */
    PolicyTargetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyTargetSummary = exports.PolicyTargetSummary || (exports.PolicyTargetSummary = {}));
var ListTargetsForPolicyResponse;
(function (ListTargetsForPolicyResponse) {
    /**
     * @internal
     */
    ListTargetsForPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsForPolicyResponse = exports.ListTargetsForPolicyResponse || (exports.ListTargetsForPolicyResponse = {}));
var DestinationParentNotFoundException;
(function (DestinationParentNotFoundException) {
    /**
     * @internal
     */
    DestinationParentNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationParentNotFoundException = exports.DestinationParentNotFoundException || (exports.DestinationParentNotFoundException = {}));
var DuplicateAccountException;
(function (DuplicateAccountException) {
    /**
     * @internal
     */
    DuplicateAccountException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateAccountException = exports.DuplicateAccountException || (exports.DuplicateAccountException = {}));
var MoveAccountRequest;
(function (MoveAccountRequest) {
    /**
     * @internal
     */
    MoveAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MoveAccountRequest = exports.MoveAccountRequest || (exports.MoveAccountRequest = {}));
var SourceParentNotFoundException;
(function (SourceParentNotFoundException) {
    /**
     * @internal
     */
    SourceParentNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceParentNotFoundException = exports.SourceParentNotFoundException || (exports.SourceParentNotFoundException = {}));
var RegisterDelegatedAdministratorRequest;
(function (RegisterDelegatedAdministratorRequest) {
    /**
     * @internal
     */
    RegisterDelegatedAdministratorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDelegatedAdministratorRequest = exports.RegisterDelegatedAdministratorRequest || (exports.RegisterDelegatedAdministratorRequest = {}));
var RemoveAccountFromOrganizationRequest;
(function (RemoveAccountFromOrganizationRequest) {
    /**
     * @internal
     */
    RemoveAccountFromOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAccountFromOrganizationRequest = exports.RemoveAccountFromOrganizationRequest || (exports.RemoveAccountFromOrganizationRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateOrganizationalUnitRequest;
(function (UpdateOrganizationalUnitRequest) {
    /**
     * @internal
     */
    UpdateOrganizationalUnitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationalUnitRequest = exports.UpdateOrganizationalUnitRequest || (exports.UpdateOrganizationalUnitRequest = {}));
var UpdateOrganizationalUnitResponse;
(function (UpdateOrganizationalUnitResponse) {
    /**
     * @internal
     */
    UpdateOrganizationalUnitResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationalUnitResponse = exports.UpdateOrganizationalUnitResponse || (exports.UpdateOrganizationalUnitResponse = {}));
var UpdatePolicyRequest;
(function (UpdatePolicyRequest) {
    /**
     * @internal
     */
    UpdatePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePolicyRequest = exports.UpdatePolicyRequest || (exports.UpdatePolicyRequest = {}));
var UpdatePolicyResponse;
(function (UpdatePolicyResponse) {
    /**
     * @internal
     */
    UpdatePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePolicyResponse = exports.UpdatePolicyResponse || (exports.UpdatePolicyResponse = {}));
var HandshakeResource;
(function (HandshakeResource) {
    /**
     * @internal
     */
    HandshakeResource.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Resources && { Resources: obj.Resources.map((item) => HandshakeResource.filterSensitiveLog(item)) }),
    });
})(HandshakeResource = exports.HandshakeResource || (exports.HandshakeResource = {}));
var Handshake;
(function (Handshake) {
    /**
     * @internal
     */
    Handshake.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parties && { Parties: obj.Parties.map((item) => HandshakeParty.filterSensitiveLog(item)) }),
        ...(obj.Resources && { Resources: obj.Resources.map((item) => HandshakeResource.filterSensitiveLog(item)) }),
    });
})(Handshake = exports.Handshake || (exports.Handshake = {}));
var AcceptHandshakeResponse;
(function (AcceptHandshakeResponse) {
    /**
     * @internal
     */
    AcceptHandshakeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }),
    });
})(AcceptHandshakeResponse = exports.AcceptHandshakeResponse || (exports.AcceptHandshakeResponse = {}));
var CancelHandshakeResponse;
(function (CancelHandshakeResponse) {
    /**
     * @internal
     */
    CancelHandshakeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }),
    });
})(CancelHandshakeResponse = exports.CancelHandshakeResponse || (exports.CancelHandshakeResponse = {}));
var DeclineHandshakeResponse;
(function (DeclineHandshakeResponse) {
    /**
     * @internal
     */
    DeclineHandshakeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }),
    });
})(DeclineHandshakeResponse = exports.DeclineHandshakeResponse || (exports.DeclineHandshakeResponse = {}));
var DescribeHandshakeResponse;
(function (DescribeHandshakeResponse) {
    /**
     * @internal
     */
    DescribeHandshakeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }),
    });
})(DescribeHandshakeResponse = exports.DescribeHandshakeResponse || (exports.DescribeHandshakeResponse = {}));
var EnableAllFeaturesResponse;
(function (EnableAllFeaturesResponse) {
    /**
     * @internal
     */
    EnableAllFeaturesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }),
    });
})(EnableAllFeaturesResponse = exports.EnableAllFeaturesResponse || (exports.EnableAllFeaturesResponse = {}));
var InviteAccountToOrganizationResponse;
(function (InviteAccountToOrganizationResponse) {
    /**
     * @internal
     */
    InviteAccountToOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Handshake && { Handshake: Handshake.filterSensitiveLog(obj.Handshake) }),
    });
})(InviteAccountToOrganizationResponse = exports.InviteAccountToOrganizationResponse || (exports.InviteAccountToOrganizationResponse = {}));
var ListHandshakesForAccountResponse;
(function (ListHandshakesForAccountResponse) {
    /**
     * @internal
     */
    ListHandshakesForAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHandshakesForAccountResponse = exports.ListHandshakesForAccountResponse || (exports.ListHandshakesForAccountResponse = {}));
var ListHandshakesForOrganizationResponse;
(function (ListHandshakesForOrganizationResponse) {
    /**
     * @internal
     */
    ListHandshakesForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHandshakesForOrganizationResponse = exports.ListHandshakesForOrganizationResponse || (exports.ListHandshakesForOrganizationResponse = {}));
//# sourceMappingURL=models_0.js.map