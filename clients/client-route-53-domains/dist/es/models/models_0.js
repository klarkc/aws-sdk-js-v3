import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AcceptDomainTransferFromAnotherAwsAccountRequest;
(function (AcceptDomainTransferFromAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    AcceptDomainTransferFromAnotherAwsAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptDomainTransferFromAnotherAwsAccountRequest || (AcceptDomainTransferFromAnotherAwsAccountRequest = {}));
export var AcceptDomainTransferFromAnotherAwsAccountResponse;
(function (AcceptDomainTransferFromAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    AcceptDomainTransferFromAnotherAwsAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptDomainTransferFromAnotherAwsAccountResponse || (AcceptDomainTransferFromAnotherAwsAccountResponse = {}));
export var DomainLimitExceeded;
(function (DomainLimitExceeded) {
    /**
     * @internal
     */
    DomainLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainLimitExceeded || (DomainLimitExceeded = {}));
export var InvalidInput;
(function (InvalidInput) {
    /**
     * @internal
     */
    InvalidInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInput || (InvalidInput = {}));
export var OperationLimitExceeded;
(function (OperationLimitExceeded) {
    /**
     * @internal
     */
    OperationLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationLimitExceeded || (OperationLimitExceeded = {}));
export var OperationType;
(function (OperationType) {
    OperationType["ADD_DNSSEC"] = "ADD_DNSSEC";
    OperationType["CHANGE_DOMAIN_OWNER"] = "CHANGE_DOMAIN_OWNER";
    OperationType["CHANGE_PRIVACY_PROTECTION"] = "CHANGE_PRIVACY_PROTECTION";
    OperationType["DELETE_DOMAIN"] = "DELETE_DOMAIN";
    OperationType["DISABLE_AUTORENEW"] = "DISABLE_AUTORENEW";
    OperationType["DOMAIN_LOCK"] = "DOMAIN_LOCK";
    OperationType["ENABLE_AUTORENEW"] = "ENABLE_AUTORENEW";
    OperationType["EXPIRE_DOMAIN"] = "EXPIRE_DOMAIN";
    OperationType["INTERNAL_TRANSFER_IN_DOMAIN"] = "INTERNAL_TRANSFER_IN_DOMAIN";
    OperationType["INTERNAL_TRANSFER_OUT_DOMAIN"] = "INTERNAL_TRANSFER_OUT_DOMAIN";
    OperationType["PUSH_DOMAIN"] = "PUSH_DOMAIN";
    OperationType["REGISTER_DOMAIN"] = "REGISTER_DOMAIN";
    OperationType["REMOVE_DNSSEC"] = "REMOVE_DNSSEC";
    OperationType["RENEW_DOMAIN"] = "RENEW_DOMAIN";
    OperationType["TRANSFER_IN_DOMAIN"] = "TRANSFER_IN_DOMAIN";
    OperationType["TRANSFER_OUT_DOMAIN"] = "TRANSFER_OUT_DOMAIN";
    OperationType["UPDATE_DOMAIN_CONTACT"] = "UPDATE_DOMAIN_CONTACT";
    OperationType["UPDATE_NAMESERVER"] = "UPDATE_NAMESERVER";
})(OperationType || (OperationType = {}));
export var BillingRecord;
(function (BillingRecord) {
    /**
     * @internal
     */
    BillingRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BillingRecord || (BillingRecord = {}));
export var CancelDomainTransferToAnotherAwsAccountRequest;
(function (CancelDomainTransferToAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    CancelDomainTransferToAnotherAwsAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDomainTransferToAnotherAwsAccountRequest || (CancelDomainTransferToAnotherAwsAccountRequest = {}));
export var CancelDomainTransferToAnotherAwsAccountResponse;
(function (CancelDomainTransferToAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    CancelDomainTransferToAnotherAwsAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDomainTransferToAnotherAwsAccountResponse || (CancelDomainTransferToAnotherAwsAccountResponse = {}));
export var CheckDomainAvailabilityRequest;
(function (CheckDomainAvailabilityRequest) {
    /**
     * @internal
     */
    CheckDomainAvailabilityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckDomainAvailabilityRequest || (CheckDomainAvailabilityRequest = {}));
export var CheckDomainAvailabilityResponse;
(function (CheckDomainAvailabilityResponse) {
    /**
     * @internal
     */
    CheckDomainAvailabilityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckDomainAvailabilityResponse || (CheckDomainAvailabilityResponse = {}));
export var UnsupportedTLD;
(function (UnsupportedTLD) {
    /**
     * @internal
     */
    UnsupportedTLD.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedTLD || (UnsupportedTLD = {}));
export var CheckDomainTransferabilityRequest;
(function (CheckDomainTransferabilityRequest) {
    /**
     * @internal
     */
    CheckDomainTransferabilityRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthCode && { AuthCode: SENSITIVE_STRING }))); };
})(CheckDomainTransferabilityRequest || (CheckDomainTransferabilityRequest = {}));
export var Transferable;
(function (Transferable) {
    Transferable["DONT_KNOW"] = "DONT_KNOW";
    Transferable["TRANSFERABLE"] = "TRANSFERABLE";
    Transferable["UNTRANSFERABLE"] = "UNTRANSFERABLE";
})(Transferable || (Transferable = {}));
export var DomainTransferability;
(function (DomainTransferability) {
    /**
     * @internal
     */
    DomainTransferability.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainTransferability || (DomainTransferability = {}));
export var CheckDomainTransferabilityResponse;
(function (CheckDomainTransferabilityResponse) {
    /**
     * @internal
     */
    CheckDomainTransferabilityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckDomainTransferabilityResponse || (CheckDomainTransferabilityResponse = {}));
export var ExtraParamName;
(function (ExtraParamName) {
    ExtraParamName["AU_ID_NUMBER"] = "AU_ID_NUMBER";
    ExtraParamName["AU_ID_TYPE"] = "AU_ID_TYPE";
    ExtraParamName["BIRTH_CITY"] = "BIRTH_CITY";
    ExtraParamName["BIRTH_COUNTRY"] = "BIRTH_COUNTRY";
    ExtraParamName["BIRTH_DATE_IN_YYYY_MM_DD"] = "BIRTH_DATE_IN_YYYY_MM_DD";
    ExtraParamName["BIRTH_DEPARTMENT"] = "BIRTH_DEPARTMENT";
    ExtraParamName["BRAND_NUMBER"] = "BRAND_NUMBER";
    ExtraParamName["CA_BUSINESS_ENTITY_TYPE"] = "CA_BUSINESS_ENTITY_TYPE";
    ExtraParamName["CA_LEGAL_REPRESENTATIVE"] = "CA_LEGAL_REPRESENTATIVE";
    ExtraParamName["CA_LEGAL_REPRESENTATIVE_CAPACITY"] = "CA_LEGAL_REPRESENTATIVE_CAPACITY";
    ExtraParamName["CA_LEGAL_TYPE"] = "CA_LEGAL_TYPE";
    ExtraParamName["DOCUMENT_NUMBER"] = "DOCUMENT_NUMBER";
    ExtraParamName["DUNS_NUMBER"] = "DUNS_NUMBER";
    ExtraParamName["ES_IDENTIFICATION"] = "ES_IDENTIFICATION";
    ExtraParamName["ES_IDENTIFICATION_TYPE"] = "ES_IDENTIFICATION_TYPE";
    ExtraParamName["ES_LEGAL_FORM"] = "ES_LEGAL_FORM";
    ExtraParamName["FI_BUSINESS_NUMBER"] = "FI_BUSINESS_NUMBER";
    ExtraParamName["FI_NATIONALITY"] = "FI_NATIONALITY";
    ExtraParamName["FI_ORGANIZATION_TYPE"] = "FI_ORGANIZATION_TYPE";
    ExtraParamName["IT_NATIONALITY"] = "IT_NATIONALITY";
    ExtraParamName["IT_PIN"] = "IT_PIN";
    ExtraParamName["IT_REGISTRANT_ENTITY_TYPE"] = "IT_REGISTRANT_ENTITY_TYPE";
    ExtraParamName["ONWER_FI_ID_NUMBER"] = "FI_ID_NUMBER";
    ExtraParamName["RU_PASSPORT_DATA"] = "RU_PASSPORT_DATA";
    ExtraParamName["SE_ID_NUMBER"] = "SE_ID_NUMBER";
    ExtraParamName["SG_ID_NUMBER"] = "SG_ID_NUMBER";
    ExtraParamName["UK_COMPANY_NUMBER"] = "UK_COMPANY_NUMBER";
    ExtraParamName["UK_CONTACT_TYPE"] = "UK_CONTACT_TYPE";
    ExtraParamName["VAT_NUMBER"] = "VAT_NUMBER";
})(ExtraParamName || (ExtraParamName = {}));
export var ExtraParam;
(function (ExtraParam) {
    /**
     * @internal
     */
    ExtraParam.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExtraParam || (ExtraParam = {}));
export var ContactDetail;
(function (ContactDetail) {
    /**
     * @internal
     */
    ContactDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactDetail || (ContactDetail = {}));
export var DeleteTagsForDomainRequest;
(function (DeleteTagsForDomainRequest) {
    /**
     * @internal
     */
    DeleteTagsForDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsForDomainRequest || (DeleteTagsForDomainRequest = {}));
export var DeleteTagsForDomainResponse;
(function (DeleteTagsForDomainResponse) {
    /**
     * @internal
     */
    DeleteTagsForDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTagsForDomainResponse || (DeleteTagsForDomainResponse = {}));
export var DisableDomainAutoRenewRequest;
(function (DisableDomainAutoRenewRequest) {
    /**
     * @internal
     */
    DisableDomainAutoRenewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableDomainAutoRenewRequest || (DisableDomainAutoRenewRequest = {}));
export var DisableDomainAutoRenewResponse;
(function (DisableDomainAutoRenewResponse) {
    /**
     * @internal
     */
    DisableDomainAutoRenewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableDomainAutoRenewResponse || (DisableDomainAutoRenewResponse = {}));
export var DisableDomainTransferLockRequest;
(function (DisableDomainTransferLockRequest) {
    /**
     * @internal
     */
    DisableDomainTransferLockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableDomainTransferLockRequest || (DisableDomainTransferLockRequest = {}));
export var DisableDomainTransferLockResponse;
(function (DisableDomainTransferLockResponse) {
    /**
     * @internal
     */
    DisableDomainTransferLockResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableDomainTransferLockResponse || (DisableDomainTransferLockResponse = {}));
export var DuplicateRequest;
(function (DuplicateRequest) {
    /**
     * @internal
     */
    DuplicateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateRequest || (DuplicateRequest = {}));
export var TLDRulesViolation;
(function (TLDRulesViolation) {
    /**
     * @internal
     */
    TLDRulesViolation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TLDRulesViolation || (TLDRulesViolation = {}));
export var DomainSuggestion;
(function (DomainSuggestion) {
    /**
     * @internal
     */
    DomainSuggestion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainSuggestion || (DomainSuggestion = {}));
export var DomainSummary;
(function (DomainSummary) {
    /**
     * @internal
     */
    DomainSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainSummary || (DomainSummary = {}));
export var EnableDomainAutoRenewRequest;
(function (EnableDomainAutoRenewRequest) {
    /**
     * @internal
     */
    EnableDomainAutoRenewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableDomainAutoRenewRequest || (EnableDomainAutoRenewRequest = {}));
export var EnableDomainAutoRenewResponse;
(function (EnableDomainAutoRenewResponse) {
    /**
     * @internal
     */
    EnableDomainAutoRenewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableDomainAutoRenewResponse || (EnableDomainAutoRenewResponse = {}));
export var EnableDomainTransferLockRequest;
(function (EnableDomainTransferLockRequest) {
    /**
     * @internal
     */
    EnableDomainTransferLockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableDomainTransferLockRequest || (EnableDomainTransferLockRequest = {}));
export var EnableDomainTransferLockResponse;
(function (EnableDomainTransferLockResponse) {
    /**
     * @internal
     */
    EnableDomainTransferLockResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableDomainTransferLockResponse || (EnableDomainTransferLockResponse = {}));
export var GetContactReachabilityStatusRequest;
(function (GetContactReachabilityStatusRequest) {
    /**
     * @internal
     */
    GetContactReachabilityStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactReachabilityStatusRequest || (GetContactReachabilityStatusRequest = {}));
export var ReachabilityStatus;
(function (ReachabilityStatus) {
    ReachabilityStatus["DONE"] = "DONE";
    ReachabilityStatus["EXPIRED"] = "EXPIRED";
    ReachabilityStatus["PENDING"] = "PENDING";
})(ReachabilityStatus || (ReachabilityStatus = {}));
export var GetContactReachabilityStatusResponse;
(function (GetContactReachabilityStatusResponse) {
    /**
     * @internal
     */
    GetContactReachabilityStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactReachabilityStatusResponse || (GetContactReachabilityStatusResponse = {}));
export var GetDomainDetailRequest;
(function (GetDomainDetailRequest) {
    /**
     * @internal
     */
    GetDomainDetailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainDetailRequest || (GetDomainDetailRequest = {}));
export var Nameserver;
(function (Nameserver) {
    /**
     * @internal
     */
    Nameserver.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Nameserver || (Nameserver = {}));
export var GetDomainDetailResponse;
(function (GetDomainDetailResponse) {
    /**
     * @internal
     */
    GetDomainDetailResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.AdminContact && { AdminContact: SENSITIVE_STRING })), (obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING })), (obj.TechContact && { TechContact: SENSITIVE_STRING }))); };
})(GetDomainDetailResponse || (GetDomainDetailResponse = {}));
export var GetDomainSuggestionsRequest;
(function (GetDomainSuggestionsRequest) {
    /**
     * @internal
     */
    GetDomainSuggestionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainSuggestionsRequest || (GetDomainSuggestionsRequest = {}));
export var GetDomainSuggestionsResponse;
(function (GetDomainSuggestionsResponse) {
    /**
     * @internal
     */
    GetDomainSuggestionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainSuggestionsResponse || (GetDomainSuggestionsResponse = {}));
export var GetOperationDetailRequest;
(function (GetOperationDetailRequest) {
    /**
     * @internal
     */
    GetOperationDetailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationDetailRequest || (GetOperationDetailRequest = {}));
export var GetOperationDetailResponse;
(function (GetOperationDetailResponse) {
    /**
     * @internal
     */
    GetOperationDetailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationDetailResponse || (GetOperationDetailResponse = {}));
export var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsRequest || (ListDomainsRequest = {}));
export var ListDomainsResponse;
(function (ListDomainsResponse) {
    /**
     * @internal
     */
    ListDomainsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsResponse || (ListDomainsResponse = {}));
export var ListOperationsRequest;
(function (ListOperationsRequest) {
    /**
     * @internal
     */
    ListOperationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOperationsRequest || (ListOperationsRequest = {}));
export var OperationSummary;
(function (OperationSummary) {
    /**
     * @internal
     */
    OperationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationSummary || (OperationSummary = {}));
export var ListOperationsResponse;
(function (ListOperationsResponse) {
    /**
     * @internal
     */
    ListOperationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOperationsResponse || (ListOperationsResponse = {}));
export var ListTagsForDomainRequest;
(function (ListTagsForDomainRequest) {
    /**
     * @internal
     */
    ListTagsForDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForDomainRequest || (ListTagsForDomainRequest = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var ListTagsForDomainResponse;
(function (ListTagsForDomainResponse) {
    /**
     * @internal
     */
    ListTagsForDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForDomainResponse || (ListTagsForDomainResponse = {}));
export var RegisterDomainRequest;
(function (RegisterDomainRequest) {
    /**
     * @internal
     */
    RegisterDomainRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.AdminContact && { AdminContact: SENSITIVE_STRING })), (obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING })), (obj.TechContact && { TechContact: SENSITIVE_STRING }))); };
})(RegisterDomainRequest || (RegisterDomainRequest = {}));
export var RegisterDomainResponse;
(function (RegisterDomainResponse) {
    /**
     * @internal
     */
    RegisterDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterDomainResponse || (RegisterDomainResponse = {}));
export var RejectDomainTransferFromAnotherAwsAccountRequest;
(function (RejectDomainTransferFromAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    RejectDomainTransferFromAnotherAwsAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectDomainTransferFromAnotherAwsAccountRequest || (RejectDomainTransferFromAnotherAwsAccountRequest = {}));
export var RejectDomainTransferFromAnotherAwsAccountResponse;
(function (RejectDomainTransferFromAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    RejectDomainTransferFromAnotherAwsAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectDomainTransferFromAnotherAwsAccountResponse || (RejectDomainTransferFromAnotherAwsAccountResponse = {}));
export var RenewDomainRequest;
(function (RenewDomainRequest) {
    /**
     * @internal
     */
    RenewDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RenewDomainRequest || (RenewDomainRequest = {}));
export var RenewDomainResponse;
(function (RenewDomainResponse) {
    /**
     * @internal
     */
    RenewDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RenewDomainResponse || (RenewDomainResponse = {}));
export var ResendContactReachabilityEmailRequest;
(function (ResendContactReachabilityEmailRequest) {
    /**
     * @internal
     */
    ResendContactReachabilityEmailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResendContactReachabilityEmailRequest || (ResendContactReachabilityEmailRequest = {}));
export var ResendContactReachabilityEmailResponse;
(function (ResendContactReachabilityEmailResponse) {
    /**
     * @internal
     */
    ResendContactReachabilityEmailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResendContactReachabilityEmailResponse || (ResendContactReachabilityEmailResponse = {}));
export var RetrieveDomainAuthCodeRequest;
(function (RetrieveDomainAuthCodeRequest) {
    /**
     * @internal
     */
    RetrieveDomainAuthCodeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetrieveDomainAuthCodeRequest || (RetrieveDomainAuthCodeRequest = {}));
export var RetrieveDomainAuthCodeResponse;
(function (RetrieveDomainAuthCodeResponse) {
    /**
     * @internal
     */
    RetrieveDomainAuthCodeResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthCode && { AuthCode: SENSITIVE_STRING }))); };
})(RetrieveDomainAuthCodeResponse || (RetrieveDomainAuthCodeResponse = {}));
export var TransferDomainRequest;
(function (TransferDomainRequest) {
    /**
     * @internal
     */
    TransferDomainRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.AuthCode && { AuthCode: SENSITIVE_STRING })), (obj.AdminContact && { AdminContact: SENSITIVE_STRING })), (obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING })), (obj.TechContact && { TechContact: SENSITIVE_STRING }))); };
})(TransferDomainRequest || (TransferDomainRequest = {}));
export var TransferDomainResponse;
(function (TransferDomainResponse) {
    /**
     * @internal
     */
    TransferDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferDomainResponse || (TransferDomainResponse = {}));
export var TransferDomainToAnotherAwsAccountRequest;
(function (TransferDomainToAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    TransferDomainToAnotherAwsAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferDomainToAnotherAwsAccountRequest || (TransferDomainToAnotherAwsAccountRequest = {}));
export var TransferDomainToAnotherAwsAccountResponse;
(function (TransferDomainToAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    TransferDomainToAnotherAwsAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransferDomainToAnotherAwsAccountResponse || (TransferDomainToAnotherAwsAccountResponse = {}));
export var UpdateDomainContactRequest;
(function (UpdateDomainContactRequest) {
    /**
     * @internal
     */
    UpdateDomainContactRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.AdminContact && { AdminContact: SENSITIVE_STRING })), (obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING })), (obj.TechContact && { TechContact: SENSITIVE_STRING }))); };
})(UpdateDomainContactRequest || (UpdateDomainContactRequest = {}));
export var UpdateDomainContactResponse;
(function (UpdateDomainContactResponse) {
    /**
     * @internal
     */
    UpdateDomainContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainContactResponse || (UpdateDomainContactResponse = {}));
export var UpdateDomainContactPrivacyRequest;
(function (UpdateDomainContactPrivacyRequest) {
    /**
     * @internal
     */
    UpdateDomainContactPrivacyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainContactPrivacyRequest || (UpdateDomainContactPrivacyRequest = {}));
export var UpdateDomainContactPrivacyResponse;
(function (UpdateDomainContactPrivacyResponse) {
    /**
     * @internal
     */
    UpdateDomainContactPrivacyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainContactPrivacyResponse || (UpdateDomainContactPrivacyResponse = {}));
export var UpdateDomainNameserversRequest;
(function (UpdateDomainNameserversRequest) {
    /**
     * @internal
     */
    UpdateDomainNameserversRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainNameserversRequest || (UpdateDomainNameserversRequest = {}));
export var UpdateDomainNameserversResponse;
(function (UpdateDomainNameserversResponse) {
    /**
     * @internal
     */
    UpdateDomainNameserversResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainNameserversResponse || (UpdateDomainNameserversResponse = {}));
export var UpdateTagsForDomainRequest;
(function (UpdateTagsForDomainRequest) {
    /**
     * @internal
     */
    UpdateTagsForDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTagsForDomainRequest || (UpdateTagsForDomainRequest = {}));
export var UpdateTagsForDomainResponse;
(function (UpdateTagsForDomainResponse) {
    /**
     * @internal
     */
    UpdateTagsForDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTagsForDomainResponse || (UpdateTagsForDomainResponse = {}));
export var ViewBillingRequest;
(function (ViewBillingRequest) {
    /**
     * @internal
     */
    ViewBillingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ViewBillingRequest || (ViewBillingRequest = {}));
export var ViewBillingResponse;
(function (ViewBillingResponse) {
    /**
     * @internal
     */
    ViewBillingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ViewBillingResponse || (ViewBillingResponse = {}));
//# sourceMappingURL=models_0.js.map