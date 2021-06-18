import { __assign } from "tslib";
export var ASN1Subject;
(function (ASN1Subject) {
  /**
   * @internal
   */
  ASN1Subject.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ASN1Subject || (ASN1Subject = {}));
export var EdiPartyName;
(function (EdiPartyName) {
  /**
   * @internal
   */
  EdiPartyName.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EdiPartyName || (EdiPartyName = {}));
export var OtherName;
(function (OtherName) {
  /**
   * @internal
   */
  OtherName.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OtherName || (OtherName = {}));
export var GeneralName;
(function (GeneralName) {
  /**
   * @internal
   */
  GeneralName.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GeneralName || (GeneralName = {}));
export var AccessMethodType;
(function (AccessMethodType) {
  AccessMethodType["CA_REPOSITORY"] = "CA_REPOSITORY";
  AccessMethodType["RESOURCE_PKI_MANIFEST"] = "RESOURCE_PKI_MANIFEST";
  AccessMethodType["RESOURCE_PKI_NOTIFY"] = "RESOURCE_PKI_NOTIFY";
})(AccessMethodType || (AccessMethodType = {}));
export var AccessMethod;
(function (AccessMethod) {
  /**
   * @internal
   */
  AccessMethod.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessMethod || (AccessMethod = {}));
export var AccessDescription;
(function (AccessDescription) {
  /**
   * @internal
   */
  AccessDescription.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDescription || (AccessDescription = {}));
export var KeyUsage;
(function (KeyUsage) {
  /**
   * @internal
   */
  KeyUsage.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(KeyUsage || (KeyUsage = {}));
export var CsrExtensions;
(function (CsrExtensions) {
  /**
   * @internal
   */
  CsrExtensions.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CsrExtensions || (CsrExtensions = {}));
export var KeyAlgorithm;
(function (KeyAlgorithm) {
  KeyAlgorithm["EC_prime256v1"] = "EC_prime256v1";
  KeyAlgorithm["EC_secp384r1"] = "EC_secp384r1";
  KeyAlgorithm["RSA_2048"] = "RSA_2048";
  KeyAlgorithm["RSA_4096"] = "RSA_4096";
})(KeyAlgorithm || (KeyAlgorithm = {}));
export var SigningAlgorithm;
(function (SigningAlgorithm) {
  SigningAlgorithm["SHA256WITHECDSA"] = "SHA256WITHECDSA";
  SigningAlgorithm["SHA256WITHRSA"] = "SHA256WITHRSA";
  SigningAlgorithm["SHA384WITHECDSA"] = "SHA384WITHECDSA";
  SigningAlgorithm["SHA384WITHRSA"] = "SHA384WITHRSA";
  SigningAlgorithm["SHA512WITHECDSA"] = "SHA512WITHECDSA";
  SigningAlgorithm["SHA512WITHRSA"] = "SHA512WITHRSA";
})(SigningAlgorithm || (SigningAlgorithm = {}));
export var CertificateAuthorityConfiguration;
(function (CertificateAuthorityConfiguration) {
  /**
   * @internal
   */
  CertificateAuthorityConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateAuthorityConfiguration || (CertificateAuthorityConfiguration = {}));
export var CertificateAuthorityType;
(function (CertificateAuthorityType) {
  CertificateAuthorityType["ROOT"] = "ROOT";
  CertificateAuthorityType["SUBORDINATE"] = "SUBORDINATE";
})(CertificateAuthorityType || (CertificateAuthorityType = {}));
export var KeyStorageSecurityStandard;
(function (KeyStorageSecurityStandard) {
  KeyStorageSecurityStandard["FIPS_140_2_LEVEL_2_OR_HIGHER"] = "FIPS_140_2_LEVEL_2_OR_HIGHER";
  KeyStorageSecurityStandard["FIPS_140_2_LEVEL_3_OR_HIGHER"] = "FIPS_140_2_LEVEL_3_OR_HIGHER";
})(KeyStorageSecurityStandard || (KeyStorageSecurityStandard = {}));
export var S3ObjectAcl;
(function (S3ObjectAcl) {
  S3ObjectAcl["BUCKET_OWNER_FULL_CONTROL"] = "BUCKET_OWNER_FULL_CONTROL";
  S3ObjectAcl["PUBLIC_READ"] = "PUBLIC_READ";
})(S3ObjectAcl || (S3ObjectAcl = {}));
export var CrlConfiguration;
(function (CrlConfiguration) {
  /**
   * @internal
   */
  CrlConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CrlConfiguration || (CrlConfiguration = {}));
export var RevocationConfiguration;
(function (RevocationConfiguration) {
  /**
   * @internal
   */
  RevocationConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RevocationConfiguration || (RevocationConfiguration = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
export var CreateCertificateAuthorityRequest;
(function (CreateCertificateAuthorityRequest) {
  /**
   * @internal
   */
  CreateCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateCertificateAuthorityRequest || (CreateCertificateAuthorityRequest = {}));
export var CreateCertificateAuthorityResponse;
(function (CreateCertificateAuthorityResponse) {
  /**
   * @internal
   */
  CreateCertificateAuthorityResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateCertificateAuthorityResponse || (CreateCertificateAuthorityResponse = {}));
export var InvalidArgsException;
(function (InvalidArgsException) {
  /**
   * @internal
   */
  InvalidArgsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidArgsException || (InvalidArgsException = {}));
export var InvalidPolicyException;
(function (InvalidPolicyException) {
  /**
   * @internal
   */
  InvalidPolicyException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidPolicyException || (InvalidPolicyException = {}));
export var InvalidTagException;
(function (InvalidTagException) {
  /**
   * @internal
   */
  InvalidTagException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidTagException || (InvalidTagException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var AuditReportResponseFormat;
(function (AuditReportResponseFormat) {
  AuditReportResponseFormat["CSV"] = "CSV";
  AuditReportResponseFormat["JSON"] = "JSON";
})(AuditReportResponseFormat || (AuditReportResponseFormat = {}));
export var CreateCertificateAuthorityAuditReportRequest;
(function (CreateCertificateAuthorityAuditReportRequest) {
  /**
   * @internal
   */
  CreateCertificateAuthorityAuditReportRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateCertificateAuthorityAuditReportRequest || (CreateCertificateAuthorityAuditReportRequest = {}));
export var CreateCertificateAuthorityAuditReportResponse;
(function (CreateCertificateAuthorityAuditReportResponse) {
  /**
   * @internal
   */
  CreateCertificateAuthorityAuditReportResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateCertificateAuthorityAuditReportResponse || (CreateCertificateAuthorityAuditReportResponse = {}));
export var InvalidArnException;
(function (InvalidArnException) {
  /**
   * @internal
   */
  InvalidArnException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidArnException || (InvalidArnException = {}));
export var InvalidStateException;
(function (InvalidStateException) {
  /**
   * @internal
   */
  InvalidStateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidStateException || (InvalidStateException = {}));
export var RequestFailedException;
(function (RequestFailedException) {
  /**
   * @internal
   */
  RequestFailedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestFailedException || (RequestFailedException = {}));
export var RequestInProgressException;
(function (RequestInProgressException) {
  /**
   * @internal
   */
  RequestInProgressException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestInProgressException || (RequestInProgressException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ActionType;
(function (ActionType) {
  ActionType["GetCertificate"] = "GetCertificate";
  ActionType["IssueCertificate"] = "IssueCertificate";
  ActionType["ListPermissions"] = "ListPermissions";
})(ActionType || (ActionType = {}));
export var CreatePermissionRequest;
(function (CreatePermissionRequest) {
  /**
   * @internal
   */
  CreatePermissionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreatePermissionRequest || (CreatePermissionRequest = {}));
export var PermissionAlreadyExistsException;
(function (PermissionAlreadyExistsException) {
  /**
   * @internal
   */
  PermissionAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PermissionAlreadyExistsException || (PermissionAlreadyExistsException = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var DeleteCertificateAuthorityRequest;
(function (DeleteCertificateAuthorityRequest) {
  /**
   * @internal
   */
  DeleteCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteCertificateAuthorityRequest || (DeleteCertificateAuthorityRequest = {}));
export var DeletePermissionRequest;
(function (DeletePermissionRequest) {
  /**
   * @internal
   */
  DeletePermissionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeletePermissionRequest || (DeletePermissionRequest = {}));
export var DeletePolicyRequest;
(function (DeletePolicyRequest) {
  /**
   * @internal
   */
  DeletePolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeletePolicyRequest || (DeletePolicyRequest = {}));
export var LockoutPreventedException;
(function (LockoutPreventedException) {
  /**
   * @internal
   */
  LockoutPreventedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LockoutPreventedException || (LockoutPreventedException = {}));
export var DescribeCertificateAuthorityRequest;
(function (DescribeCertificateAuthorityRequest) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCertificateAuthorityRequest || (DescribeCertificateAuthorityRequest = {}));
export var FailureReason;
(function (FailureReason) {
  FailureReason["OTHER"] = "OTHER";
  FailureReason["REQUEST_TIMED_OUT"] = "REQUEST_TIMED_OUT";
  FailureReason["UNSUPPORTED_ALGORITHM"] = "UNSUPPORTED_ALGORITHM";
})(FailureReason || (FailureReason = {}));
export var CertificateAuthorityStatus;
(function (CertificateAuthorityStatus) {
  CertificateAuthorityStatus["ACTIVE"] = "ACTIVE";
  CertificateAuthorityStatus["CREATING"] = "CREATING";
  CertificateAuthorityStatus["DELETED"] = "DELETED";
  CertificateAuthorityStatus["DISABLED"] = "DISABLED";
  CertificateAuthorityStatus["EXPIRED"] = "EXPIRED";
  CertificateAuthorityStatus["FAILED"] = "FAILED";
  CertificateAuthorityStatus["PENDING_CERTIFICATE"] = "PENDING_CERTIFICATE";
})(CertificateAuthorityStatus || (CertificateAuthorityStatus = {}));
export var CertificateAuthority;
(function (CertificateAuthority) {
  /**
   * @internal
   */
  CertificateAuthority.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateAuthority || (CertificateAuthority = {}));
export var DescribeCertificateAuthorityResponse;
(function (DescribeCertificateAuthorityResponse) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCertificateAuthorityResponse || (DescribeCertificateAuthorityResponse = {}));
export var DescribeCertificateAuthorityAuditReportRequest;
(function (DescribeCertificateAuthorityAuditReportRequest) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityAuditReportRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCertificateAuthorityAuditReportRequest || (DescribeCertificateAuthorityAuditReportRequest = {}));
export var AuditReportStatus;
(function (AuditReportStatus) {
  AuditReportStatus["CREATING"] = "CREATING";
  AuditReportStatus["FAILED"] = "FAILED";
  AuditReportStatus["SUCCESS"] = "SUCCESS";
})(AuditReportStatus || (AuditReportStatus = {}));
export var DescribeCertificateAuthorityAuditReportResponse;
(function (DescribeCertificateAuthorityAuditReportResponse) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityAuditReportResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeCertificateAuthorityAuditReportResponse || (DescribeCertificateAuthorityAuditReportResponse = {}));
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
export var GetCertificateAuthorityCertificateRequest;
(function (GetCertificateAuthorityCertificateRequest) {
  /**
   * @internal
   */
  GetCertificateAuthorityCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetCertificateAuthorityCertificateRequest || (GetCertificateAuthorityCertificateRequest = {}));
export var GetCertificateAuthorityCertificateResponse;
(function (GetCertificateAuthorityCertificateResponse) {
  /**
   * @internal
   */
  GetCertificateAuthorityCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetCertificateAuthorityCertificateResponse || (GetCertificateAuthorityCertificateResponse = {}));
export var GetCertificateAuthorityCsrRequest;
(function (GetCertificateAuthorityCsrRequest) {
  /**
   * @internal
   */
  GetCertificateAuthorityCsrRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetCertificateAuthorityCsrRequest || (GetCertificateAuthorityCsrRequest = {}));
export var GetCertificateAuthorityCsrResponse;
(function (GetCertificateAuthorityCsrResponse) {
  /**
   * @internal
   */
  GetCertificateAuthorityCsrResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetCertificateAuthorityCsrResponse || (GetCertificateAuthorityCsrResponse = {}));
export var GetPolicyRequest;
(function (GetPolicyRequest) {
  /**
   * @internal
   */
  GetPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPolicyRequest || (GetPolicyRequest = {}));
export var GetPolicyResponse;
(function (GetPolicyResponse) {
  /**
   * @internal
   */
  GetPolicyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPolicyResponse || (GetPolicyResponse = {}));
export var CertificateMismatchException;
(function (CertificateMismatchException) {
  /**
   * @internal
   */
  CertificateMismatchException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CertificateMismatchException || (CertificateMismatchException = {}));
export var ImportCertificateAuthorityCertificateRequest;
(function (ImportCertificateAuthorityCertificateRequest) {
  /**
   * @internal
   */
  ImportCertificateAuthorityCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImportCertificateAuthorityCertificateRequest || (ImportCertificateAuthorityCertificateRequest = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidRequestException || (InvalidRequestException = {}));
export var MalformedCertificateException;
(function (MalformedCertificateException) {
  /**
   * @internal
   */
  MalformedCertificateException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MalformedCertificateException || (MalformedCertificateException = {}));
export var PolicyQualifierId;
(function (PolicyQualifierId) {
  PolicyQualifierId["CPS"] = "CPS";
})(PolicyQualifierId || (PolicyQualifierId = {}));
export var Qualifier;
(function (Qualifier) {
  /**
   * @internal
   */
  Qualifier.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Qualifier || (Qualifier = {}));
export var PolicyQualifierInfo;
(function (PolicyQualifierInfo) {
  /**
   * @internal
   */
  PolicyQualifierInfo.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PolicyQualifierInfo || (PolicyQualifierInfo = {}));
export var PolicyInformation;
(function (PolicyInformation) {
  /**
   * @internal
   */
  PolicyInformation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PolicyInformation || (PolicyInformation = {}));
export var ExtendedKeyUsageType;
(function (ExtendedKeyUsageType) {
  ExtendedKeyUsageType["CERTIFICATE_TRANSPARENCY"] = "CERTIFICATE_TRANSPARENCY";
  ExtendedKeyUsageType["CLIENT_AUTH"] = "CLIENT_AUTH";
  ExtendedKeyUsageType["CODE_SIGNING"] = "CODE_SIGNING";
  ExtendedKeyUsageType["DOCUMENT_SIGNING"] = "DOCUMENT_SIGNING";
  ExtendedKeyUsageType["EMAIL_PROTECTION"] = "EMAIL_PROTECTION";
  ExtendedKeyUsageType["OCSP_SIGNING"] = "OCSP_SIGNING";
  ExtendedKeyUsageType["SERVER_AUTH"] = "SERVER_AUTH";
  ExtendedKeyUsageType["SMART_CARD_LOGIN"] = "SMART_CARD_LOGIN";
  ExtendedKeyUsageType["TIME_STAMPING"] = "TIME_STAMPING";
})(ExtendedKeyUsageType || (ExtendedKeyUsageType = {}));
export var ExtendedKeyUsage;
(function (ExtendedKeyUsage) {
  /**
   * @internal
   */
  ExtendedKeyUsage.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExtendedKeyUsage || (ExtendedKeyUsage = {}));
export var Extensions;
(function (Extensions) {
  /**
   * @internal
   */
  Extensions.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Extensions || (Extensions = {}));
export var ApiPassthrough;
(function (ApiPassthrough) {
  /**
   * @internal
   */
  ApiPassthrough.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiPassthrough || (ApiPassthrough = {}));
export var ValidityPeriodType;
(function (ValidityPeriodType) {
  ValidityPeriodType["ABSOLUTE"] = "ABSOLUTE";
  ValidityPeriodType["DAYS"] = "DAYS";
  ValidityPeriodType["END_DATE"] = "END_DATE";
  ValidityPeriodType["MONTHS"] = "MONTHS";
  ValidityPeriodType["YEARS"] = "YEARS";
})(ValidityPeriodType || (ValidityPeriodType = {}));
export var Validity;
(function (Validity) {
  /**
   * @internal
   */
  Validity.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Validity || (Validity = {}));
export var IssueCertificateRequest;
(function (IssueCertificateRequest) {
  /**
   * @internal
   */
  IssueCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IssueCertificateRequest || (IssueCertificateRequest = {}));
export var IssueCertificateResponse;
(function (IssueCertificateResponse) {
  /**
   * @internal
   */
  IssueCertificateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IssueCertificateResponse || (IssueCertificateResponse = {}));
export var MalformedCSRException;
(function (MalformedCSRException) {
  /**
   * @internal
   */
  MalformedCSRException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MalformedCSRException || (MalformedCSRException = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ResourceOwner;
(function (ResourceOwner) {
  ResourceOwner["OTHER_ACCOUNTS"] = "OTHER_ACCOUNTS";
  ResourceOwner["SELF"] = "SELF";
})(ResourceOwner || (ResourceOwner = {}));
export var ListCertificateAuthoritiesRequest;
(function (ListCertificateAuthoritiesRequest) {
  /**
   * @internal
   */
  ListCertificateAuthoritiesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCertificateAuthoritiesRequest || (ListCertificateAuthoritiesRequest = {}));
export var ListCertificateAuthoritiesResponse;
(function (ListCertificateAuthoritiesResponse) {
  /**
   * @internal
   */
  ListCertificateAuthoritiesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCertificateAuthoritiesResponse || (ListCertificateAuthoritiesResponse = {}));
export var ListPermissionsRequest;
(function (ListPermissionsRequest) {
  /**
   * @internal
   */
  ListPermissionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPermissionsRequest || (ListPermissionsRequest = {}));
export var Permission;
(function (Permission) {
  /**
   * @internal
   */
  Permission.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Permission || (Permission = {}));
export var ListPermissionsResponse;
(function (ListPermissionsResponse) {
  /**
   * @internal
   */
  ListPermissionsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPermissionsResponse || (ListPermissionsResponse = {}));
export var ListTagsRequest;
(function (ListTagsRequest) {
  /**
   * @internal
   */
  ListTagsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsRequest || (ListTagsRequest = {}));
export var ListTagsResponse;
(function (ListTagsResponse) {
  /**
   * @internal
   */
  ListTagsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsResponse || (ListTagsResponse = {}));
export var PutPolicyRequest;
(function (PutPolicyRequest) {
  /**
   * @internal
   */
  PutPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PutPolicyRequest || (PutPolicyRequest = {}));
export var RestoreCertificateAuthorityRequest;
(function (RestoreCertificateAuthorityRequest) {
  /**
   * @internal
   */
  RestoreCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RestoreCertificateAuthorityRequest || (RestoreCertificateAuthorityRequest = {}));
export var RequestAlreadyProcessedException;
(function (RequestAlreadyProcessedException) {
  /**
   * @internal
   */
  RequestAlreadyProcessedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RequestAlreadyProcessedException || (RequestAlreadyProcessedException = {}));
export var RevocationReason;
(function (RevocationReason) {
  RevocationReason["AFFILIATION_CHANGED"] = "AFFILIATION_CHANGED";
  RevocationReason["A_A_COMPROMISE"] = "A_A_COMPROMISE";
  RevocationReason["CERTIFICATE_AUTHORITY_COMPROMISE"] = "CERTIFICATE_AUTHORITY_COMPROMISE";
  RevocationReason["CESSATION_OF_OPERATION"] = "CESSATION_OF_OPERATION";
  RevocationReason["KEY_COMPROMISE"] = "KEY_COMPROMISE";
  RevocationReason["PRIVILEGE_WITHDRAWN"] = "PRIVILEGE_WITHDRAWN";
  RevocationReason["SUPERSEDED"] = "SUPERSEDED";
  RevocationReason["UNSPECIFIED"] = "UNSPECIFIED";
})(RevocationReason || (RevocationReason = {}));
export var RevokeCertificateRequest;
(function (RevokeCertificateRequest) {
  /**
   * @internal
   */
  RevokeCertificateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RevokeCertificateRequest || (RevokeCertificateRequest = {}));
export var TagCertificateAuthorityRequest;
(function (TagCertificateAuthorityRequest) {
  /**
   * @internal
   */
  TagCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagCertificateAuthorityRequest || (TagCertificateAuthorityRequest = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TooManyTagsException || (TooManyTagsException = {}));
export var UntagCertificateAuthorityRequest;
(function (UntagCertificateAuthorityRequest) {
  /**
   * @internal
   */
  UntagCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagCertificateAuthorityRequest || (UntagCertificateAuthorityRequest = {}));
export var UpdateCertificateAuthorityRequest;
(function (UpdateCertificateAuthorityRequest) {
  /**
   * @internal
   */
  UpdateCertificateAuthorityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateCertificateAuthorityRequest || (UpdateCertificateAuthorityRequest = {}));
//# sourceMappingURL=models_0.js.map
