import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
export var AddTagsToCertificateRequest;
(function (AddTagsToCertificateRequest) {
  /**
   * @internal
   */
  AddTagsToCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AddTagsToCertificateRequest || (AddTagsToCertificateRequest = {}));
export var InvalidArnException;
(function (InvalidArnException) {
  /**
   * @internal
   */
  InvalidArnException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidArnException || (InvalidArnException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
  /**
   * @internal
   */
  InvalidParameterException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidParameterException || (InvalidParameterException = {}));
export var InvalidTagException;
(function (InvalidTagException) {
  /**
   * @internal
   */
  InvalidTagException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidTagException || (InvalidTagException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var TagPolicyException;
(function (TagPolicyException) {
  /**
   * @internal
   */
  TagPolicyException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagPolicyException || (TagPolicyException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ThrottlingException || (ThrottlingException = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TooManyTagsException || (TooManyTagsException = {}));
export var RecordType;
(function (RecordType) {
  RecordType["CNAME"] = "CNAME";
})(RecordType || (RecordType = {}));
export var ResourceRecord;
(function (ResourceRecord) {
  /**
   * @internal
   */
  ResourceRecord.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceRecord || (ResourceRecord = {}));
export var ValidationMethod;
(function (ValidationMethod) {
  ValidationMethod["DNS"] = "DNS";
  ValidationMethod["EMAIL"] = "EMAIL";
})(ValidationMethod || (ValidationMethod = {}));
export var DomainStatus;
(function (DomainStatus) {
  DomainStatus["FAILED"] = "FAILED";
  DomainStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  DomainStatus["SUCCESS"] = "SUCCESS";
})(DomainStatus || (DomainStatus = {}));
export var DomainValidation;
(function (DomainValidation) {
  /**
   * @internal
   */
  DomainValidation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DomainValidation || (DomainValidation = {}));
export var ExtendedKeyUsageName;
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
})(ExtendedKeyUsageName || (ExtendedKeyUsageName = {}));
export var ExtendedKeyUsage;
(function (ExtendedKeyUsage) {
  /**
   * @internal
   */
  ExtendedKeyUsage.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExtendedKeyUsage || (ExtendedKeyUsage = {}));
export var FailureReason;
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
})(FailureReason || (FailureReason = {}));
export var KeyAlgorithm;
(function (KeyAlgorithm) {
  KeyAlgorithm["EC_prime256v1"] = "EC_prime256v1";
  KeyAlgorithm["EC_secp384r1"] = "EC_secp384r1";
  KeyAlgorithm["EC_secp521r1"] = "EC_secp521r1";
  KeyAlgorithm["RSA_1024"] = "RSA_1024";
  KeyAlgorithm["RSA_2048"] = "RSA_2048";
  KeyAlgorithm["RSA_4096"] = "RSA_4096";
})(KeyAlgorithm || (KeyAlgorithm = {}));
export var KeyUsageName;
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
})(KeyUsageName || (KeyUsageName = {}));
export var KeyUsage;
(function (KeyUsage) {
  /**
   * @internal
   */
  KeyUsage.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(KeyUsage || (KeyUsage = {}));
export var CertificateTransparencyLoggingPreference;
(function (CertificateTransparencyLoggingPreference) {
  CertificateTransparencyLoggingPreference["DISABLED"] = "DISABLED";
  CertificateTransparencyLoggingPreference["ENABLED"] = "ENABLED";
})(CertificateTransparencyLoggingPreference || (CertificateTransparencyLoggingPreference = {}));
export var CertificateOptions;
(function (CertificateOptions) {
  /**
   * @internal
   */
  CertificateOptions.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateOptions || (CertificateOptions = {}));
export var RenewalEligibility;
(function (RenewalEligibility) {
  RenewalEligibility["ELIGIBLE"] = "ELIGIBLE";
  RenewalEligibility["INELIGIBLE"] = "INELIGIBLE";
})(RenewalEligibility || (RenewalEligibility = {}));
export var RenewalStatus;
(function (RenewalStatus) {
  RenewalStatus["FAILED"] = "FAILED";
  RenewalStatus["PENDING_AUTO_RENEWAL"] = "PENDING_AUTO_RENEWAL";
  RenewalStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  RenewalStatus["SUCCESS"] = "SUCCESS";
})(RenewalStatus || (RenewalStatus = {}));
export var RenewalSummary;
(function (RenewalSummary) {
  /**
   * @internal
   */
  RenewalSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RenewalSummary || (RenewalSummary = {}));
export var RevocationReason;
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
})(RevocationReason || (RevocationReason = {}));
export var CertificateStatus;
(function (CertificateStatus) {
  CertificateStatus["EXPIRED"] = "EXPIRED";
  CertificateStatus["FAILED"] = "FAILED";
  CertificateStatus["INACTIVE"] = "INACTIVE";
  CertificateStatus["ISSUED"] = "ISSUED";
  CertificateStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
  CertificateStatus["REVOKED"] = "REVOKED";
  CertificateStatus["VALIDATION_TIMED_OUT"] = "VALIDATION_TIMED_OUT";
})(CertificateStatus || (CertificateStatus = {}));
export var CertificateType;
(function (CertificateType) {
  CertificateType["AMAZON_ISSUED"] = "AMAZON_ISSUED";
  CertificateType["IMPORTED"] = "IMPORTED";
  CertificateType["PRIVATE"] = "PRIVATE";
})(CertificateType || (CertificateType = {}));
export var CertificateDetail;
(function (CertificateDetail) {
  /**
   * @internal
   */
  CertificateDetail.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateDetail || (CertificateDetail = {}));
export var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
  /**
   * @internal
   */
  DeleteCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteCertificateRequest || (DeleteCertificateRequest = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceInUseException || (ResourceInUseException = {}));
export var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
  /**
   * @internal
   */
  DescribeCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCertificateRequest || (DescribeCertificateRequest = {}));
export var DescribeCertificateResponse;
(function (DescribeCertificateResponse) {
  /**
   * @internal
   */
  DescribeCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCertificateResponse || (DescribeCertificateResponse = {}));
export var ExportCertificateRequest;
(function (ExportCertificateRequest) {
  /**
   * @internal
   */
  ExportCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Passphrase && { Passphrase: SENSITIVE_STRING });
  };
})(ExportCertificateRequest || (ExportCertificateRequest = {}));
export var ExportCertificateResponse;
(function (ExportCertificateResponse) {
  /**
   * @internal
   */
  ExportCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.PrivateKey && { PrivateKey: SENSITIVE_STRING });
  };
})(ExportCertificateResponse || (ExportCertificateResponse = {}));
export var RequestInProgressException;
(function (RequestInProgressException) {
  /**
   * @internal
   */
  RequestInProgressException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestInProgressException || (RequestInProgressException = {}));
export var ExpiryEventsConfiguration;
(function (ExpiryEventsConfiguration) {
  /**
   * @internal
   */
  ExpiryEventsConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExpiryEventsConfiguration || (ExpiryEventsConfiguration = {}));
export var GetAccountConfigurationResponse;
(function (GetAccountConfigurationResponse) {
  /**
   * @internal
   */
  GetAccountConfigurationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAccountConfigurationResponse || (GetAccountConfigurationResponse = {}));
export var GetCertificateRequest;
(function (GetCertificateRequest) {
  /**
   * @internal
   */
  GetCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetCertificateRequest || (GetCertificateRequest = {}));
export var GetCertificateResponse;
(function (GetCertificateResponse) {
  /**
   * @internal
   */
  GetCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetCertificateResponse || (GetCertificateResponse = {}));
export var ImportCertificateRequest;
(function (ImportCertificateRequest) {
  /**
   * @internal
   */
  ImportCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.PrivateKey && { PrivateKey: SENSITIVE_STRING });
  };
})(ImportCertificateRequest || (ImportCertificateRequest = {}));
export var ImportCertificateResponse;
(function (ImportCertificateResponse) {
  /**
   * @internal
   */
  ImportCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImportCertificateResponse || (ImportCertificateResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var InvalidArgsException;
(function (InvalidArgsException) {
  /**
   * @internal
   */
  InvalidArgsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidArgsException || (InvalidArgsException = {}));
export var Filters;
(function (Filters) {
  /**
   * @internal
   */
  Filters.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Filters || (Filters = {}));
export var ListCertificatesRequest;
(function (ListCertificatesRequest) {
  /**
   * @internal
   */
  ListCertificatesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCertificatesRequest || (ListCertificatesRequest = {}));
export var CertificateSummary;
(function (CertificateSummary) {
  /**
   * @internal
   */
  CertificateSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateSummary || (CertificateSummary = {}));
export var ListCertificatesResponse;
(function (ListCertificatesResponse) {
  /**
   * @internal
   */
  ListCertificatesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCertificatesResponse || (ListCertificatesResponse = {}));
export var ListTagsForCertificateRequest;
(function (ListTagsForCertificateRequest) {
  /**
   * @internal
   */
  ListTagsForCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForCertificateRequest || (ListTagsForCertificateRequest = {}));
export var ListTagsForCertificateResponse;
(function (ListTagsForCertificateResponse) {
  /**
   * @internal
   */
  ListTagsForCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForCertificateResponse || (ListTagsForCertificateResponse = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var PutAccountConfigurationRequest;
(function (PutAccountConfigurationRequest) {
  /**
   * @internal
   */
  PutAccountConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutAccountConfigurationRequest || (PutAccountConfigurationRequest = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var RemoveTagsFromCertificateRequest;
(function (RemoveTagsFromCertificateRequest) {
  /**
   * @internal
   */
  RemoveTagsFromCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RemoveTagsFromCertificateRequest || (RemoveTagsFromCertificateRequest = {}));
export var RenewCertificateRequest;
(function (RenewCertificateRequest) {
  /**
   * @internal
   */
  RenewCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RenewCertificateRequest || (RenewCertificateRequest = {}));
export var InvalidDomainValidationOptionsException;
(function (InvalidDomainValidationOptionsException) {
  /**
   * @internal
   */
  InvalidDomainValidationOptionsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidDomainValidationOptionsException || (InvalidDomainValidationOptionsException = {}));
export var DomainValidationOption;
(function (DomainValidationOption) {
  /**
   * @internal
   */
  DomainValidationOption.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DomainValidationOption || (DomainValidationOption = {}));
export var RequestCertificateRequest;
(function (RequestCertificateRequest) {
  /**
   * @internal
   */
  RequestCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestCertificateRequest || (RequestCertificateRequest = {}));
export var RequestCertificateResponse;
(function (RequestCertificateResponse) {
  /**
   * @internal
   */
  RequestCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestCertificateResponse || (RequestCertificateResponse = {}));
export var InvalidStateException;
(function (InvalidStateException) {
  /**
   * @internal
   */
  InvalidStateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidStateException || (InvalidStateException = {}));
export var ResendValidationEmailRequest;
(function (ResendValidationEmailRequest) {
  /**
   * @internal
   */
  ResendValidationEmailRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResendValidationEmailRequest || (ResendValidationEmailRequest = {}));
export var UpdateCertificateOptionsRequest;
(function (UpdateCertificateOptionsRequest) {
  /**
   * @internal
   */
  UpdateCertificateOptionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateCertificateOptionsRequest || (UpdateCertificateOptionsRequest = {}));
//# sourceMappingURL=models_0.js.map
