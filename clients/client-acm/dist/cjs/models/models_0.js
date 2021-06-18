"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsForCertificateRequest =
  exports.ListCertificatesResponse =
  exports.CertificateSummary =
  exports.ListCertificatesRequest =
  exports.Filters =
  exports.InvalidArgsException =
  exports.LimitExceededException =
  exports.ImportCertificateResponse =
  exports.ImportCertificateRequest =
  exports.GetCertificateResponse =
  exports.GetCertificateRequest =
  exports.GetAccountConfigurationResponse =
  exports.ExpiryEventsConfiguration =
  exports.RequestInProgressException =
  exports.ExportCertificateResponse =
  exports.ExportCertificateRequest =
  exports.DescribeCertificateResponse =
  exports.DescribeCertificateRequest =
  exports.ResourceInUseException =
  exports.DeleteCertificateRequest =
  exports.CertificateDetail =
  exports.CertificateType =
  exports.CertificateStatus =
  exports.RevocationReason =
  exports.RenewalSummary =
  exports.RenewalStatus =
  exports.RenewalEligibility =
  exports.CertificateOptions =
  exports.CertificateTransparencyLoggingPreference =
  exports.KeyUsage =
  exports.KeyUsageName =
  exports.KeyAlgorithm =
  exports.FailureReason =
  exports.ExtendedKeyUsage =
  exports.ExtendedKeyUsageName =
  exports.DomainValidation =
  exports.DomainStatus =
  exports.ValidationMethod =
  exports.ResourceRecord =
  exports.RecordType =
  exports.TooManyTagsException =
  exports.ThrottlingException =
  exports.TagPolicyException =
  exports.ResourceNotFoundException =
  exports.InvalidTagException =
  exports.InvalidParameterException =
  exports.InvalidArnException =
  exports.AddTagsToCertificateRequest =
  exports.Tag =
  exports.AccessDeniedException =
    void 0;
exports.UpdateCertificateOptionsRequest =
  exports.ResendValidationEmailRequest =
  exports.InvalidStateException =
  exports.RequestCertificateResponse =
  exports.RequestCertificateRequest =
  exports.DomainValidationOption =
  exports.InvalidDomainValidationOptionsException =
  exports.RenewCertificateRequest =
  exports.RemoveTagsFromCertificateRequest =
  exports.ValidationException =
  exports.PutAccountConfigurationRequest =
  exports.ConflictException =
  exports.ListTagsForCertificateResponse =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var AddTagsToCertificateRequest;
(function (AddTagsToCertificateRequest) {
  /**
   * @internal
   */
  AddTagsToCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AddTagsToCertificateRequest = exports.AddTagsToCertificateRequest || (exports.AddTagsToCertificateRequest = {})));
var InvalidArnException;
(function (InvalidArnException) {
  /**
   * @internal
   */
  InvalidArnException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {})));
var InvalidParameterException;
(function (InvalidParameterException) {
  /**
   * @internal
   */
  InvalidParameterException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {})));
var InvalidTagException;
(function (InvalidTagException) {
  /**
   * @internal
   */
  InvalidTagException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var TagPolicyException;
(function (TagPolicyException) {
  /**
   * @internal
   */
  TagPolicyException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {})));
var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {})));
var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {})));
var RecordType;
(function (RecordType) {
  RecordType["CNAME"] = "CNAME";
})((RecordType = exports.RecordType || (exports.RecordType = {})));
var ResourceRecord;
(function (ResourceRecord) {
  /**
   * @internal
   */
  ResourceRecord.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceRecord = exports.ResourceRecord || (exports.ResourceRecord = {})));
var ValidationMethod;
(function (ValidationMethod) {
  ValidationMethod["DNS"] = "DNS";
  ValidationMethod["EMAIL"] = "EMAIL";
})((ValidationMethod = exports.ValidationMethod || (exports.ValidationMethod = {})));
var DomainStatus;
(function (DomainStatus) {
  DomainStatus["FAILED"] = "FAILED";
  DomainStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  DomainStatus["SUCCESS"] = "SUCCESS";
})((DomainStatus = exports.DomainStatus || (exports.DomainStatus = {})));
var DomainValidation;
(function (DomainValidation) {
  /**
   * @internal
   */
  DomainValidation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainValidation = exports.DomainValidation || (exports.DomainValidation = {})));
var ExtendedKeyUsageName;
(function (ExtendedKeyUsageName) {
  ExtendedKeyUsageName["ANY"] = "ANY";
  ExtendedKeyUsageName["CODE_SIGNING"] = "CODE_SIGNING";
  ExtendedKeyUsageName["CUSTOM"] = "CUSTOM";
  ExtendedKeyUsageName["EMAIL_PROTECTION"] = "EMAIL_PROTECTION";
  ExtendedKeyUsageName["IPSEC_END_SYSTEM"] = "IPSEC_END_SYSTEM";
  ExtendedKeyUsageName["IPSEC_TUNNEL"] = "IPSEC_TUNNEL";
  ExtendedKeyUsageName["IPSEC_USER"] = "IPSEC_USER";
  ExtendedKeyUsageName["NONE"] = "NONE";
  ExtendedKeyUsageName["OCSP_SIGNING"] = "OCSP_SIGNING";
  ExtendedKeyUsageName["TIME_STAMPING"] = "TIME_STAMPING";
  ExtendedKeyUsageName["TLS_WEB_CLIENT_AUTHENTICATION"] = "TLS_WEB_CLIENT_AUTHENTICATION";
  ExtendedKeyUsageName["TLS_WEB_SERVER_AUTHENTICATION"] = "TLS_WEB_SERVER_AUTHENTICATION";
})((ExtendedKeyUsageName = exports.ExtendedKeyUsageName || (exports.ExtendedKeyUsageName = {})));
var ExtendedKeyUsage;
(function (ExtendedKeyUsage) {
  /**
   * @internal
   */
  ExtendedKeyUsage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExtendedKeyUsage = exports.ExtendedKeyUsage || (exports.ExtendedKeyUsage = {})));
var FailureReason;
(function (FailureReason) {
  FailureReason["ADDITIONAL_VERIFICATION_REQUIRED"] = "ADDITIONAL_VERIFICATION_REQUIRED";
  FailureReason["CAA_ERROR"] = "CAA_ERROR";
  FailureReason["DOMAIN_NOT_ALLOWED"] = "DOMAIN_NOT_ALLOWED";
  FailureReason["DOMAIN_VALIDATION_DENIED"] = "DOMAIN_VALIDATION_DENIED";
  FailureReason["INVALID_PUBLIC_DOMAIN"] = "INVALID_PUBLIC_DOMAIN";
  FailureReason["NO_AVAILABLE_CONTACTS"] = "NO_AVAILABLE_CONTACTS";
  FailureReason["OTHER"] = "OTHER";
  FailureReason["PCA_ACCESS_DENIED"] = "PCA_ACCESS_DENIED";
  FailureReason["PCA_INVALID_ARGS"] = "PCA_INVALID_ARGS";
  FailureReason["PCA_INVALID_ARN"] = "PCA_INVALID_ARN";
  FailureReason["PCA_INVALID_DURATION"] = "PCA_INVALID_DURATION";
  FailureReason["PCA_INVALID_STATE"] = "PCA_INVALID_STATE";
  FailureReason["PCA_LIMIT_EXCEEDED"] = "PCA_LIMIT_EXCEEDED";
  FailureReason["PCA_NAME_CONSTRAINTS_VALIDATION"] = "PCA_NAME_CONSTRAINTS_VALIDATION";
  FailureReason["PCA_REQUEST_FAILED"] = "PCA_REQUEST_FAILED";
  FailureReason["PCA_RESOURCE_NOT_FOUND"] = "PCA_RESOURCE_NOT_FOUND";
  FailureReason["SLR_NOT_FOUND"] = "SLR_NOT_FOUND";
})((FailureReason = exports.FailureReason || (exports.FailureReason = {})));
var KeyAlgorithm;
(function (KeyAlgorithm) {
  KeyAlgorithm["EC_prime256v1"] = "EC_prime256v1";
  KeyAlgorithm["EC_secp384r1"] = "EC_secp384r1";
  KeyAlgorithm["EC_secp521r1"] = "EC_secp521r1";
  KeyAlgorithm["RSA_1024"] = "RSA_1024";
  KeyAlgorithm["RSA_2048"] = "RSA_2048";
  KeyAlgorithm["RSA_4096"] = "RSA_4096";
})((KeyAlgorithm = exports.KeyAlgorithm || (exports.KeyAlgorithm = {})));
var KeyUsageName;
(function (KeyUsageName) {
  KeyUsageName["ANY"] = "ANY";
  KeyUsageName["CERTIFICATE_SIGNING"] = "CERTIFICATE_SIGNING";
  KeyUsageName["CRL_SIGNING"] = "CRL_SIGNING";
  KeyUsageName["CUSTOM"] = "CUSTOM";
  KeyUsageName["DATA_ENCIPHERMENT"] = "DATA_ENCIPHERMENT";
  KeyUsageName["DECIPHER_ONLY"] = "DECIPHER_ONLY";
  KeyUsageName["DIGITAL_SIGNATURE"] = "DIGITAL_SIGNATURE";
  KeyUsageName["ENCHIPER_ONLY"] = "ENCIPHER_ONLY";
  KeyUsageName["KEY_AGREEMENT"] = "KEY_AGREEMENT";
  KeyUsageName["KEY_ENCIPHERMENT"] = "KEY_ENCIPHERMENT";
  KeyUsageName["NON_REPUDATION"] = "NON_REPUDIATION";
})((KeyUsageName = exports.KeyUsageName || (exports.KeyUsageName = {})));
var KeyUsage;
(function (KeyUsage) {
  /**
   * @internal
   */
  KeyUsage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyUsage = exports.KeyUsage || (exports.KeyUsage = {})));
var CertificateTransparencyLoggingPreference;
(function (CertificateTransparencyLoggingPreference) {
  CertificateTransparencyLoggingPreference["DISABLED"] = "DISABLED";
  CertificateTransparencyLoggingPreference["ENABLED"] = "ENABLED";
})(
  (CertificateTransparencyLoggingPreference =
    exports.CertificateTransparencyLoggingPreference || (exports.CertificateTransparencyLoggingPreference = {}))
);
var CertificateOptions;
(function (CertificateOptions) {
  /**
   * @internal
   */
  CertificateOptions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CertificateOptions = exports.CertificateOptions || (exports.CertificateOptions = {})));
var RenewalEligibility;
(function (RenewalEligibility) {
  RenewalEligibility["ELIGIBLE"] = "ELIGIBLE";
  RenewalEligibility["INELIGIBLE"] = "INELIGIBLE";
})((RenewalEligibility = exports.RenewalEligibility || (exports.RenewalEligibility = {})));
var RenewalStatus;
(function (RenewalStatus) {
  RenewalStatus["FAILED"] = "FAILED";
  RenewalStatus["PENDING_AUTO_RENEWAL"] = "PENDING_AUTO_RENEWAL";
  RenewalStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  RenewalStatus["SUCCESS"] = "SUCCESS";
})((RenewalStatus = exports.RenewalStatus || (exports.RenewalStatus = {})));
var RenewalSummary;
(function (RenewalSummary) {
  /**
   * @internal
   */
  RenewalSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RenewalSummary = exports.RenewalSummary || (exports.RenewalSummary = {})));
var RevocationReason;
(function (RevocationReason) {
  RevocationReason["AFFILIATION_CHANGED"] = "AFFILIATION_CHANGED";
  RevocationReason["A_A_COMPROMISE"] = "A_A_COMPROMISE";
  RevocationReason["CA_COMPROMISE"] = "CA_COMPROMISE";
  RevocationReason["CERTIFICATE_HOLD"] = "CERTIFICATE_HOLD";
  RevocationReason["CESSATION_OF_OPERATION"] = "CESSATION_OF_OPERATION";
  RevocationReason["KEY_COMPROMISE"] = "KEY_COMPROMISE";
  RevocationReason["PRIVILEGE_WITHDRAWN"] = "PRIVILEGE_WITHDRAWN";
  RevocationReason["REMOVE_FROM_CRL"] = "REMOVE_FROM_CRL";
  RevocationReason["SUPERCEDED"] = "SUPERCEDED";
  RevocationReason["UNSPECIFIED"] = "UNSPECIFIED";
})((RevocationReason = exports.RevocationReason || (exports.RevocationReason = {})));
var CertificateStatus;
(function (CertificateStatus) {
  CertificateStatus["EXPIRED"] = "EXPIRED";
  CertificateStatus["FAILED"] = "FAILED";
  CertificateStatus["INACTIVE"] = "INACTIVE";
  CertificateStatus["ISSUED"] = "ISSUED";
  CertificateStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  CertificateStatus["REVOKED"] = "REVOKED";
  CertificateStatus["VALIDATION_TIMED_OUT"] = "VALIDATION_TIMED_OUT";
})((CertificateStatus = exports.CertificateStatus || (exports.CertificateStatus = {})));
var CertificateType;
(function (CertificateType) {
  CertificateType["AMAZON_ISSUED"] = "AMAZON_ISSUED";
  CertificateType["IMPORTED"] = "IMPORTED";
  CertificateType["PRIVATE"] = "PRIVATE";
})((CertificateType = exports.CertificateType || (exports.CertificateType = {})));
var CertificateDetail;
(function (CertificateDetail) {
  /**
   * @internal
   */
  CertificateDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CertificateDetail = exports.CertificateDetail || (exports.CertificateDetail = {})));
var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
  /**
   * @internal
   */
  DeleteCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteCertificateRequest = exports.DeleteCertificateRequest || (exports.DeleteCertificateRequest = {})));
var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {})));
var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
  /**
   * @internal
   */
  DescribeCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeCertificateRequest = exports.DescribeCertificateRequest || (exports.DescribeCertificateRequest = {})));
var DescribeCertificateResponse;
(function (DescribeCertificateResponse) {
  /**
   * @internal
   */
  DescribeCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeCertificateResponse = exports.DescribeCertificateResponse || (exports.DescribeCertificateResponse = {})));
var ExportCertificateRequest;
(function (ExportCertificateRequest) {
  /**
   * @internal
   */
  ExportCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Passphrase && { Passphrase: smithy_client_1.SENSITIVE_STRING }),
  });
})((ExportCertificateRequest = exports.ExportCertificateRequest || (exports.ExportCertificateRequest = {})));
var ExportCertificateResponse;
(function (ExportCertificateResponse) {
  /**
   * @internal
   */
  ExportCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: smithy_client_1.SENSITIVE_STRING }),
  });
})((ExportCertificateResponse = exports.ExportCertificateResponse || (exports.ExportCertificateResponse = {})));
var RequestInProgressException;
(function (RequestInProgressException) {
  /**
   * @internal
   */
  RequestInProgressException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestInProgressException = exports.RequestInProgressException || (exports.RequestInProgressException = {})));
var ExpiryEventsConfiguration;
(function (ExpiryEventsConfiguration) {
  /**
   * @internal
   */
  ExpiryEventsConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExpiryEventsConfiguration = exports.ExpiryEventsConfiguration || (exports.ExpiryEventsConfiguration = {})));
var GetAccountConfigurationResponse;
(function (GetAccountConfigurationResponse) {
  /**
   * @internal
   */
  GetAccountConfigurationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetAccountConfigurationResponse =
    exports.GetAccountConfigurationResponse || (exports.GetAccountConfigurationResponse = {}))
);
var GetCertificateRequest;
(function (GetCertificateRequest) {
  /**
   * @internal
   */
  GetCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetCertificateRequest = exports.GetCertificateRequest || (exports.GetCertificateRequest = {})));
var GetCertificateResponse;
(function (GetCertificateResponse) {
  /**
   * @internal
   */
  GetCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetCertificateResponse = exports.GetCertificateResponse || (exports.GetCertificateResponse = {})));
var ImportCertificateRequest;
(function (ImportCertificateRequest) {
  /**
   * @internal
   */
  ImportCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: smithy_client_1.SENSITIVE_STRING }),
  });
})((ImportCertificateRequest = exports.ImportCertificateRequest || (exports.ImportCertificateRequest = {})));
var ImportCertificateResponse;
(function (ImportCertificateResponse) {
  /**
   * @internal
   */
  ImportCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportCertificateResponse = exports.ImportCertificateResponse || (exports.ImportCertificateResponse = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var InvalidArgsException;
(function (InvalidArgsException) {
  /**
   * @internal
   */
  InvalidArgsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidArgsException = exports.InvalidArgsException || (exports.InvalidArgsException = {})));
var Filters;
(function (Filters) {
  /**
   * @internal
   */
  Filters.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Filters = exports.Filters || (exports.Filters = {})));
var ListCertificatesRequest;
(function (ListCertificatesRequest) {
  /**
   * @internal
   */
  ListCertificatesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListCertificatesRequest = exports.ListCertificatesRequest || (exports.ListCertificatesRequest = {})));
var CertificateSummary;
(function (CertificateSummary) {
  /**
   * @internal
   */
  CertificateSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CertificateSummary = exports.CertificateSummary || (exports.CertificateSummary = {})));
var ListCertificatesResponse;
(function (ListCertificatesResponse) {
  /**
   * @internal
   */
  ListCertificatesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListCertificatesResponse = exports.ListCertificatesResponse || (exports.ListCertificatesResponse = {})));
var ListTagsForCertificateRequest;
(function (ListTagsForCertificateRequest) {
  /**
   * @internal
   */
  ListTagsForCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListTagsForCertificateRequest =
    exports.ListTagsForCertificateRequest || (exports.ListTagsForCertificateRequest = {}))
);
var ListTagsForCertificateResponse;
(function (ListTagsForCertificateResponse) {
  /**
   * @internal
   */
  ListTagsForCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListTagsForCertificateResponse =
    exports.ListTagsForCertificateResponse || (exports.ListTagsForCertificateResponse = {}))
);
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var PutAccountConfigurationRequest;
(function (PutAccountConfigurationRequest) {
  /**
   * @internal
   */
  PutAccountConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutAccountConfigurationRequest =
    exports.PutAccountConfigurationRequest || (exports.PutAccountConfigurationRequest = {}))
);
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var RemoveTagsFromCertificateRequest;
(function (RemoveTagsFromCertificateRequest) {
  /**
   * @internal
   */
  RemoveTagsFromCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RemoveTagsFromCertificateRequest =
    exports.RemoveTagsFromCertificateRequest || (exports.RemoveTagsFromCertificateRequest = {}))
);
var RenewCertificateRequest;
(function (RenewCertificateRequest) {
  /**
   * @internal
   */
  RenewCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RenewCertificateRequest = exports.RenewCertificateRequest || (exports.RenewCertificateRequest = {})));
var InvalidDomainValidationOptionsException;
(function (InvalidDomainValidationOptionsException) {
  /**
   * @internal
   */
  InvalidDomainValidationOptionsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidDomainValidationOptionsException =
    exports.InvalidDomainValidationOptionsException || (exports.InvalidDomainValidationOptionsException = {}))
);
var DomainValidationOption;
(function (DomainValidationOption) {
  /**
   * @internal
   */
  DomainValidationOption.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainValidationOption = exports.DomainValidationOption || (exports.DomainValidationOption = {})));
var RequestCertificateRequest;
(function (RequestCertificateRequest) {
  /**
   * @internal
   */
  RequestCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestCertificateRequest = exports.RequestCertificateRequest || (exports.RequestCertificateRequest = {})));
var RequestCertificateResponse;
(function (RequestCertificateResponse) {
  /**
   * @internal
   */
  RequestCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestCertificateResponse = exports.RequestCertificateResponse || (exports.RequestCertificateResponse = {})));
var InvalidStateException;
(function (InvalidStateException) {
  /**
   * @internal
   */
  InvalidStateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {})));
var ResendValidationEmailRequest;
(function (ResendValidationEmailRequest) {
  /**
   * @internal
   */
  ResendValidationEmailRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ResendValidationEmailRequest = exports.ResendValidationEmailRequest || (exports.ResendValidationEmailRequest = {}))
);
var UpdateCertificateOptionsRequest;
(function (UpdateCertificateOptionsRequest) {
  /**
   * @internal
   */
  UpdateCertificateOptionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateCertificateOptionsRequest =
    exports.UpdateCertificateOptionsRequest || (exports.UpdateCertificateOptionsRequest = {}))
);
//# sourceMappingURL=models_0.js.map
