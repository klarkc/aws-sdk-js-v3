"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = exports.ListTagsForDomainRequest = exports.ListOperationsResponse = exports.OperationSummary = exports.ListOperationsRequest = exports.ListDomainsResponse = exports.ListDomainsRequest = exports.GetOperationDetailResponse = exports.GetOperationDetailRequest = exports.GetDomainSuggestionsResponse = exports.GetDomainSuggestionsRequest = exports.GetDomainDetailResponse = exports.Nameserver = exports.GetDomainDetailRequest = exports.GetContactReachabilityStatusResponse = exports.ReachabilityStatus = exports.GetContactReachabilityStatusRequest = exports.EnableDomainTransferLockResponse = exports.EnableDomainTransferLockRequest = exports.EnableDomainAutoRenewResponse = exports.EnableDomainAutoRenewRequest = exports.DomainSummary = exports.DomainSuggestion = exports.TLDRulesViolation = exports.DuplicateRequest = exports.DisableDomainTransferLockResponse = exports.DisableDomainTransferLockRequest = exports.DisableDomainAutoRenewResponse = exports.DisableDomainAutoRenewRequest = exports.DeleteTagsForDomainResponse = exports.DeleteTagsForDomainRequest = exports.ContactDetail = exports.ExtraParam = exports.ExtraParamName = exports.CheckDomainTransferabilityResponse = exports.DomainTransferability = exports.Transferable = exports.CheckDomainTransferabilityRequest = exports.UnsupportedTLD = exports.CheckDomainAvailabilityResponse = exports.CheckDomainAvailabilityRequest = exports.CancelDomainTransferToAnotherAwsAccountResponse = exports.CancelDomainTransferToAnotherAwsAccountRequest = exports.BillingRecord = exports.OperationType = exports.OperationLimitExceeded = exports.InvalidInput = exports.DomainLimitExceeded = exports.AcceptDomainTransferFromAnotherAwsAccountResponse = exports.AcceptDomainTransferFromAnotherAwsAccountRequest = void 0;
exports.ViewBillingResponse = exports.ViewBillingRequest = exports.UpdateTagsForDomainResponse = exports.UpdateTagsForDomainRequest = exports.UpdateDomainNameserversResponse = exports.UpdateDomainNameserversRequest = exports.UpdateDomainContactPrivacyResponse = exports.UpdateDomainContactPrivacyRequest = exports.UpdateDomainContactResponse = exports.UpdateDomainContactRequest = exports.TransferDomainToAnotherAwsAccountResponse = exports.TransferDomainToAnotherAwsAccountRequest = exports.TransferDomainResponse = exports.TransferDomainRequest = exports.RetrieveDomainAuthCodeResponse = exports.RetrieveDomainAuthCodeRequest = exports.ResendContactReachabilityEmailResponse = exports.ResendContactReachabilityEmailRequest = exports.RenewDomainResponse = exports.RenewDomainRequest = exports.RejectDomainTransferFromAnotherAwsAccountResponse = exports.RejectDomainTransferFromAnotherAwsAccountRequest = exports.RegisterDomainResponse = exports.RegisterDomainRequest = exports.ListTagsForDomainResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptDomainTransferFromAnotherAwsAccountRequest;
(function (AcceptDomainTransferFromAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    AcceptDomainTransferFromAnotherAwsAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptDomainTransferFromAnotherAwsAccountRequest = exports.AcceptDomainTransferFromAnotherAwsAccountRequest || (exports.AcceptDomainTransferFromAnotherAwsAccountRequest = {}));
var AcceptDomainTransferFromAnotherAwsAccountResponse;
(function (AcceptDomainTransferFromAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    AcceptDomainTransferFromAnotherAwsAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptDomainTransferFromAnotherAwsAccountResponse = exports.AcceptDomainTransferFromAnotherAwsAccountResponse || (exports.AcceptDomainTransferFromAnotherAwsAccountResponse = {}));
var DomainLimitExceeded;
(function (DomainLimitExceeded) {
    /**
     * @internal
     */
    DomainLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainLimitExceeded = exports.DomainLimitExceeded || (exports.DomainLimitExceeded = {}));
var InvalidInput;
(function (InvalidInput) {
    /**
     * @internal
     */
    InvalidInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInput = exports.InvalidInput || (exports.InvalidInput = {}));
var OperationLimitExceeded;
(function (OperationLimitExceeded) {
    /**
     * @internal
     */
    OperationLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationLimitExceeded = exports.OperationLimitExceeded || (exports.OperationLimitExceeded = {}));
var OperationType;
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
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var BillingRecord;
(function (BillingRecord) {
    /**
     * @internal
     */
    BillingRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BillingRecord = exports.BillingRecord || (exports.BillingRecord = {}));
var CancelDomainTransferToAnotherAwsAccountRequest;
(function (CancelDomainTransferToAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    CancelDomainTransferToAnotherAwsAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDomainTransferToAnotherAwsAccountRequest = exports.CancelDomainTransferToAnotherAwsAccountRequest || (exports.CancelDomainTransferToAnotherAwsAccountRequest = {}));
var CancelDomainTransferToAnotherAwsAccountResponse;
(function (CancelDomainTransferToAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    CancelDomainTransferToAnotherAwsAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDomainTransferToAnotherAwsAccountResponse = exports.CancelDomainTransferToAnotherAwsAccountResponse || (exports.CancelDomainTransferToAnotherAwsAccountResponse = {}));
var CheckDomainAvailabilityRequest;
(function (CheckDomainAvailabilityRequest) {
    /**
     * @internal
     */
    CheckDomainAvailabilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckDomainAvailabilityRequest = exports.CheckDomainAvailabilityRequest || (exports.CheckDomainAvailabilityRequest = {}));
var CheckDomainAvailabilityResponse;
(function (CheckDomainAvailabilityResponse) {
    /**
     * @internal
     */
    CheckDomainAvailabilityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckDomainAvailabilityResponse = exports.CheckDomainAvailabilityResponse || (exports.CheckDomainAvailabilityResponse = {}));
var UnsupportedTLD;
(function (UnsupportedTLD) {
    /**
     * @internal
     */
    UnsupportedTLD.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedTLD = exports.UnsupportedTLD || (exports.UnsupportedTLD = {}));
var CheckDomainTransferabilityRequest;
(function (CheckDomainTransferabilityRequest) {
    /**
     * @internal
     */
    CheckDomainTransferabilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthCode && { AuthCode: smithy_client_1.SENSITIVE_STRING }),
    });
})(CheckDomainTransferabilityRequest = exports.CheckDomainTransferabilityRequest || (exports.CheckDomainTransferabilityRequest = {}));
var Transferable;
(function (Transferable) {
    Transferable["DONT_KNOW"] = "DONT_KNOW";
    Transferable["TRANSFERABLE"] = "TRANSFERABLE";
    Transferable["UNTRANSFERABLE"] = "UNTRANSFERABLE";
})(Transferable = exports.Transferable || (exports.Transferable = {}));
var DomainTransferability;
(function (DomainTransferability) {
    /**
     * @internal
     */
    DomainTransferability.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainTransferability = exports.DomainTransferability || (exports.DomainTransferability = {}));
var CheckDomainTransferabilityResponse;
(function (CheckDomainTransferabilityResponse) {
    /**
     * @internal
     */
    CheckDomainTransferabilityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckDomainTransferabilityResponse = exports.CheckDomainTransferabilityResponse || (exports.CheckDomainTransferabilityResponse = {}));
var ExtraParamName;
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
})(ExtraParamName = exports.ExtraParamName || (exports.ExtraParamName = {}));
var ExtraParam;
(function (ExtraParam) {
    /**
     * @internal
     */
    ExtraParam.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExtraParam = exports.ExtraParam || (exports.ExtraParam = {}));
var ContactDetail;
(function (ContactDetail) {
    /**
     * @internal
     */
    ContactDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactDetail = exports.ContactDetail || (exports.ContactDetail = {}));
var DeleteTagsForDomainRequest;
(function (DeleteTagsForDomainRequest) {
    /**
     * @internal
     */
    DeleteTagsForDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsForDomainRequest = exports.DeleteTagsForDomainRequest || (exports.DeleteTagsForDomainRequest = {}));
var DeleteTagsForDomainResponse;
(function (DeleteTagsForDomainResponse) {
    /**
     * @internal
     */
    DeleteTagsForDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTagsForDomainResponse = exports.DeleteTagsForDomainResponse || (exports.DeleteTagsForDomainResponse = {}));
var DisableDomainAutoRenewRequest;
(function (DisableDomainAutoRenewRequest) {
    /**
     * @internal
     */
    DisableDomainAutoRenewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableDomainAutoRenewRequest = exports.DisableDomainAutoRenewRequest || (exports.DisableDomainAutoRenewRequest = {}));
var DisableDomainAutoRenewResponse;
(function (DisableDomainAutoRenewResponse) {
    /**
     * @internal
     */
    DisableDomainAutoRenewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableDomainAutoRenewResponse = exports.DisableDomainAutoRenewResponse || (exports.DisableDomainAutoRenewResponse = {}));
var DisableDomainTransferLockRequest;
(function (DisableDomainTransferLockRequest) {
    /**
     * @internal
     */
    DisableDomainTransferLockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableDomainTransferLockRequest = exports.DisableDomainTransferLockRequest || (exports.DisableDomainTransferLockRequest = {}));
var DisableDomainTransferLockResponse;
(function (DisableDomainTransferLockResponse) {
    /**
     * @internal
     */
    DisableDomainTransferLockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableDomainTransferLockResponse = exports.DisableDomainTransferLockResponse || (exports.DisableDomainTransferLockResponse = {}));
var DuplicateRequest;
(function (DuplicateRequest) {
    /**
     * @internal
     */
    DuplicateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateRequest = exports.DuplicateRequest || (exports.DuplicateRequest = {}));
var TLDRulesViolation;
(function (TLDRulesViolation) {
    /**
     * @internal
     */
    TLDRulesViolation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TLDRulesViolation = exports.TLDRulesViolation || (exports.TLDRulesViolation = {}));
var DomainSuggestion;
(function (DomainSuggestion) {
    /**
     * @internal
     */
    DomainSuggestion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainSuggestion = exports.DomainSuggestion || (exports.DomainSuggestion = {}));
var DomainSummary;
(function (DomainSummary) {
    /**
     * @internal
     */
    DomainSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainSummary = exports.DomainSummary || (exports.DomainSummary = {}));
var EnableDomainAutoRenewRequest;
(function (EnableDomainAutoRenewRequest) {
    /**
     * @internal
     */
    EnableDomainAutoRenewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableDomainAutoRenewRequest = exports.EnableDomainAutoRenewRequest || (exports.EnableDomainAutoRenewRequest = {}));
var EnableDomainAutoRenewResponse;
(function (EnableDomainAutoRenewResponse) {
    /**
     * @internal
     */
    EnableDomainAutoRenewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableDomainAutoRenewResponse = exports.EnableDomainAutoRenewResponse || (exports.EnableDomainAutoRenewResponse = {}));
var EnableDomainTransferLockRequest;
(function (EnableDomainTransferLockRequest) {
    /**
     * @internal
     */
    EnableDomainTransferLockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableDomainTransferLockRequest = exports.EnableDomainTransferLockRequest || (exports.EnableDomainTransferLockRequest = {}));
var EnableDomainTransferLockResponse;
(function (EnableDomainTransferLockResponse) {
    /**
     * @internal
     */
    EnableDomainTransferLockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableDomainTransferLockResponse = exports.EnableDomainTransferLockResponse || (exports.EnableDomainTransferLockResponse = {}));
var GetContactReachabilityStatusRequest;
(function (GetContactReachabilityStatusRequest) {
    /**
     * @internal
     */
    GetContactReachabilityStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactReachabilityStatusRequest = exports.GetContactReachabilityStatusRequest || (exports.GetContactReachabilityStatusRequest = {}));
var ReachabilityStatus;
(function (ReachabilityStatus) {
    ReachabilityStatus["DONE"] = "DONE";
    ReachabilityStatus["EXPIRED"] = "EXPIRED";
    ReachabilityStatus["PENDING"] = "PENDING";
})(ReachabilityStatus = exports.ReachabilityStatus || (exports.ReachabilityStatus = {}));
var GetContactReachabilityStatusResponse;
(function (GetContactReachabilityStatusResponse) {
    /**
     * @internal
     */
    GetContactReachabilityStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactReachabilityStatusResponse = exports.GetContactReachabilityStatusResponse || (exports.GetContactReachabilityStatusResponse = {}));
var GetDomainDetailRequest;
(function (GetDomainDetailRequest) {
    /**
     * @internal
     */
    GetDomainDetailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainDetailRequest = exports.GetDomainDetailRequest || (exports.GetDomainDetailRequest = {}));
var Nameserver;
(function (Nameserver) {
    /**
     * @internal
     */
    Nameserver.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Nameserver = exports.Nameserver || (exports.Nameserver = {}));
var GetDomainDetailResponse;
(function (GetDomainDetailResponse) {
    /**
     * @internal
     */
    GetDomainDetailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AdminContact && { AdminContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RegistrantContact && { RegistrantContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TechContact && { TechContact: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDomainDetailResponse = exports.GetDomainDetailResponse || (exports.GetDomainDetailResponse = {}));
var GetDomainSuggestionsRequest;
(function (GetDomainSuggestionsRequest) {
    /**
     * @internal
     */
    GetDomainSuggestionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainSuggestionsRequest = exports.GetDomainSuggestionsRequest || (exports.GetDomainSuggestionsRequest = {}));
var GetDomainSuggestionsResponse;
(function (GetDomainSuggestionsResponse) {
    /**
     * @internal
     */
    GetDomainSuggestionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainSuggestionsResponse = exports.GetDomainSuggestionsResponse || (exports.GetDomainSuggestionsResponse = {}));
var GetOperationDetailRequest;
(function (GetOperationDetailRequest) {
    /**
     * @internal
     */
    GetOperationDetailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationDetailRequest = exports.GetOperationDetailRequest || (exports.GetOperationDetailRequest = {}));
var GetOperationDetailResponse;
(function (GetOperationDetailResponse) {
    /**
     * @internal
     */
    GetOperationDetailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationDetailResponse = exports.GetOperationDetailResponse || (exports.GetOperationDetailResponse = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var ListDomainsResponse;
(function (ListDomainsResponse) {
    /**
     * @internal
     */
    ListDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsResponse = exports.ListDomainsResponse || (exports.ListDomainsResponse = {}));
var ListOperationsRequest;
(function (ListOperationsRequest) {
    /**
     * @internal
     */
    ListOperationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOperationsRequest = exports.ListOperationsRequest || (exports.ListOperationsRequest = {}));
var OperationSummary;
(function (OperationSummary) {
    /**
     * @internal
     */
    OperationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationSummary = exports.OperationSummary || (exports.OperationSummary = {}));
var ListOperationsResponse;
(function (ListOperationsResponse) {
    /**
     * @internal
     */
    ListOperationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOperationsResponse = exports.ListOperationsResponse || (exports.ListOperationsResponse = {}));
var ListTagsForDomainRequest;
(function (ListTagsForDomainRequest) {
    /**
     * @internal
     */
    ListTagsForDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForDomainRequest = exports.ListTagsForDomainRequest || (exports.ListTagsForDomainRequest = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ListTagsForDomainResponse;
(function (ListTagsForDomainResponse) {
    /**
     * @internal
     */
    ListTagsForDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForDomainResponse = exports.ListTagsForDomainResponse || (exports.ListTagsForDomainResponse = {}));
var RegisterDomainRequest;
(function (RegisterDomainRequest) {
    /**
     * @internal
     */
    RegisterDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AdminContact && { AdminContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RegistrantContact && { RegistrantContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TechContact && { TechContact: smithy_client_1.SENSITIVE_STRING }),
    });
})(RegisterDomainRequest = exports.RegisterDomainRequest || (exports.RegisterDomainRequest = {}));
var RegisterDomainResponse;
(function (RegisterDomainResponse) {
    /**
     * @internal
     */
    RegisterDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDomainResponse = exports.RegisterDomainResponse || (exports.RegisterDomainResponse = {}));
var RejectDomainTransferFromAnotherAwsAccountRequest;
(function (RejectDomainTransferFromAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    RejectDomainTransferFromAnotherAwsAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectDomainTransferFromAnotherAwsAccountRequest = exports.RejectDomainTransferFromAnotherAwsAccountRequest || (exports.RejectDomainTransferFromAnotherAwsAccountRequest = {}));
var RejectDomainTransferFromAnotherAwsAccountResponse;
(function (RejectDomainTransferFromAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    RejectDomainTransferFromAnotherAwsAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectDomainTransferFromAnotherAwsAccountResponse = exports.RejectDomainTransferFromAnotherAwsAccountResponse || (exports.RejectDomainTransferFromAnotherAwsAccountResponse = {}));
var RenewDomainRequest;
(function (RenewDomainRequest) {
    /**
     * @internal
     */
    RenewDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenewDomainRequest = exports.RenewDomainRequest || (exports.RenewDomainRequest = {}));
var RenewDomainResponse;
(function (RenewDomainResponse) {
    /**
     * @internal
     */
    RenewDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenewDomainResponse = exports.RenewDomainResponse || (exports.RenewDomainResponse = {}));
var ResendContactReachabilityEmailRequest;
(function (ResendContactReachabilityEmailRequest) {
    /**
     * @internal
     */
    ResendContactReachabilityEmailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResendContactReachabilityEmailRequest = exports.ResendContactReachabilityEmailRequest || (exports.ResendContactReachabilityEmailRequest = {}));
var ResendContactReachabilityEmailResponse;
(function (ResendContactReachabilityEmailResponse) {
    /**
     * @internal
     */
    ResendContactReachabilityEmailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResendContactReachabilityEmailResponse = exports.ResendContactReachabilityEmailResponse || (exports.ResendContactReachabilityEmailResponse = {}));
var RetrieveDomainAuthCodeRequest;
(function (RetrieveDomainAuthCodeRequest) {
    /**
     * @internal
     */
    RetrieveDomainAuthCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetrieveDomainAuthCodeRequest = exports.RetrieveDomainAuthCodeRequest || (exports.RetrieveDomainAuthCodeRequest = {}));
var RetrieveDomainAuthCodeResponse;
(function (RetrieveDomainAuthCodeResponse) {
    /**
     * @internal
     */
    RetrieveDomainAuthCodeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthCode && { AuthCode: smithy_client_1.SENSITIVE_STRING }),
    });
})(RetrieveDomainAuthCodeResponse = exports.RetrieveDomainAuthCodeResponse || (exports.RetrieveDomainAuthCodeResponse = {}));
var TransferDomainRequest;
(function (TransferDomainRequest) {
    /**
     * @internal
     */
    TransferDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthCode && { AuthCode: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AdminContact && { AdminContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RegistrantContact && { RegistrantContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TechContact && { TechContact: smithy_client_1.SENSITIVE_STRING }),
    });
})(TransferDomainRequest = exports.TransferDomainRequest || (exports.TransferDomainRequest = {}));
var TransferDomainResponse;
(function (TransferDomainResponse) {
    /**
     * @internal
     */
    TransferDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferDomainResponse = exports.TransferDomainResponse || (exports.TransferDomainResponse = {}));
var TransferDomainToAnotherAwsAccountRequest;
(function (TransferDomainToAnotherAwsAccountRequest) {
    /**
     * @internal
     */
    TransferDomainToAnotherAwsAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferDomainToAnotherAwsAccountRequest = exports.TransferDomainToAnotherAwsAccountRequest || (exports.TransferDomainToAnotherAwsAccountRequest = {}));
var TransferDomainToAnotherAwsAccountResponse;
(function (TransferDomainToAnotherAwsAccountResponse) {
    /**
     * @internal
     */
    TransferDomainToAnotherAwsAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransferDomainToAnotherAwsAccountResponse = exports.TransferDomainToAnotherAwsAccountResponse || (exports.TransferDomainToAnotherAwsAccountResponse = {}));
var UpdateDomainContactRequest;
(function (UpdateDomainContactRequest) {
    /**
     * @internal
     */
    UpdateDomainContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AdminContact && { AdminContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.RegistrantContact && { RegistrantContact: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TechContact && { TechContact: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateDomainContactRequest = exports.UpdateDomainContactRequest || (exports.UpdateDomainContactRequest = {}));
var UpdateDomainContactResponse;
(function (UpdateDomainContactResponse) {
    /**
     * @internal
     */
    UpdateDomainContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainContactResponse = exports.UpdateDomainContactResponse || (exports.UpdateDomainContactResponse = {}));
var UpdateDomainContactPrivacyRequest;
(function (UpdateDomainContactPrivacyRequest) {
    /**
     * @internal
     */
    UpdateDomainContactPrivacyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainContactPrivacyRequest = exports.UpdateDomainContactPrivacyRequest || (exports.UpdateDomainContactPrivacyRequest = {}));
var UpdateDomainContactPrivacyResponse;
(function (UpdateDomainContactPrivacyResponse) {
    /**
     * @internal
     */
    UpdateDomainContactPrivacyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainContactPrivacyResponse = exports.UpdateDomainContactPrivacyResponse || (exports.UpdateDomainContactPrivacyResponse = {}));
var UpdateDomainNameserversRequest;
(function (UpdateDomainNameserversRequest) {
    /**
     * @internal
     */
    UpdateDomainNameserversRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainNameserversRequest = exports.UpdateDomainNameserversRequest || (exports.UpdateDomainNameserversRequest = {}));
var UpdateDomainNameserversResponse;
(function (UpdateDomainNameserversResponse) {
    /**
     * @internal
     */
    UpdateDomainNameserversResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainNameserversResponse = exports.UpdateDomainNameserversResponse || (exports.UpdateDomainNameserversResponse = {}));
var UpdateTagsForDomainRequest;
(function (UpdateTagsForDomainRequest) {
    /**
     * @internal
     */
    UpdateTagsForDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTagsForDomainRequest = exports.UpdateTagsForDomainRequest || (exports.UpdateTagsForDomainRequest = {}));
var UpdateTagsForDomainResponse;
(function (UpdateTagsForDomainResponse) {
    /**
     * @internal
     */
    UpdateTagsForDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTagsForDomainResponse = exports.UpdateTagsForDomainResponse || (exports.UpdateTagsForDomainResponse = {}));
var ViewBillingRequest;
(function (ViewBillingRequest) {
    /**
     * @internal
     */
    ViewBillingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViewBillingRequest = exports.ViewBillingRequest || (exports.ViewBillingRequest = {}));
var ViewBillingResponse;
(function (ViewBillingResponse) {
    /**
     * @internal
     */
    ViewBillingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ViewBillingResponse = exports.ViewBillingResponse || (exports.ViewBillingResponse = {}));
//# sourceMappingURL=models_0.js.map