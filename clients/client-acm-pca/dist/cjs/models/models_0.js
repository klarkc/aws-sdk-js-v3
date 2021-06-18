"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCertificateResponse =
  exports.GetCertificateRequest =
  exports.DescribeCertificateAuthorityAuditReportResponse =
  exports.AuditReportStatus =
  exports.DescribeCertificateAuthorityAuditReportRequest =
  exports.DescribeCertificateAuthorityResponse =
  exports.CertificateAuthority =
  exports.CertificateAuthorityStatus =
  exports.FailureReason =
  exports.DescribeCertificateAuthorityRequest =
  exports.LockoutPreventedException =
  exports.DeletePolicyRequest =
  exports.DeletePermissionRequest =
  exports.DeleteCertificateAuthorityRequest =
  exports.ConcurrentModificationException =
  exports.PermissionAlreadyExistsException =
  exports.CreatePermissionRequest =
  exports.ActionType =
  exports.ResourceNotFoundException =
  exports.RequestInProgressException =
  exports.RequestFailedException =
  exports.InvalidStateException =
  exports.InvalidArnException =
  exports.CreateCertificateAuthorityAuditReportResponse =
  exports.CreateCertificateAuthorityAuditReportRequest =
  exports.AuditReportResponseFormat =
  exports.LimitExceededException =
  exports.InvalidTagException =
  exports.InvalidPolicyException =
  exports.InvalidArgsException =
  exports.CreateCertificateAuthorityResponse =
  exports.CreateCertificateAuthorityRequest =
  exports.Tag =
  exports.RevocationConfiguration =
  exports.CrlConfiguration =
  exports.S3ObjectAcl =
  exports.KeyStorageSecurityStandard =
  exports.CertificateAuthorityType =
  exports.CertificateAuthorityConfiguration =
  exports.SigningAlgorithm =
  exports.KeyAlgorithm =
  exports.CsrExtensions =
  exports.KeyUsage =
  exports.AccessDescription =
  exports.AccessMethod =
  exports.AccessMethodType =
  exports.GeneralName =
  exports.OtherName =
  exports.EdiPartyName =
  exports.ASN1Subject =
    void 0;
exports.UpdateCertificateAuthorityRequest =
  exports.UntagCertificateAuthorityRequest =
  exports.TooManyTagsException =
  exports.TagCertificateAuthorityRequest =
  exports.RevokeCertificateRequest =
  exports.RevocationReason =
  exports.RequestAlreadyProcessedException =
  exports.RestoreCertificateAuthorityRequest =
  exports.PutPolicyRequest =
  exports.ListTagsResponse =
  exports.ListTagsRequest =
  exports.ListPermissionsResponse =
  exports.Permission =
  exports.ListPermissionsRequest =
  exports.ListCertificateAuthoritiesResponse =
  exports.ListCertificateAuthoritiesRequest =
  exports.ResourceOwner =
  exports.InvalidNextTokenException =
  exports.MalformedCSRException =
  exports.IssueCertificateResponse =
  exports.IssueCertificateRequest =
  exports.Validity =
  exports.ValidityPeriodType =
  exports.ApiPassthrough =
  exports.Extensions =
  exports.ExtendedKeyUsage =
  exports.ExtendedKeyUsageType =
  exports.PolicyInformation =
  exports.PolicyQualifierInfo =
  exports.Qualifier =
  exports.PolicyQualifierId =
  exports.MalformedCertificateException =
  exports.InvalidRequestException =
  exports.ImportCertificateAuthorityCertificateRequest =
  exports.CertificateMismatchException =
  exports.GetPolicyResponse =
  exports.GetPolicyRequest =
  exports.GetCertificateAuthorityCsrResponse =
  exports.GetCertificateAuthorityCsrRequest =
  exports.GetCertificateAuthorityCertificateResponse =
  exports.GetCertificateAuthorityCertificateRequest =
    void 0;
var ASN1Subject;
(function (ASN1Subject) {
  /**
   * @internal
   */
  ASN1Subject.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ASN1Subject = exports.ASN1Subject || (exports.ASN1Subject = {})));
var EdiPartyName;
(function (EdiPartyName) {
  /**
   * @internal
   */
  EdiPartyName.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EdiPartyName = exports.EdiPartyName || (exports.EdiPartyName = {})));
var OtherName;
(function (OtherName) {
  /**
   * @internal
   */
  OtherName.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OtherName = exports.OtherName || (exports.OtherName = {})));
var GeneralName;
(function (GeneralName) {
  /**
   * @internal
   */
  GeneralName.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GeneralName = exports.GeneralName || (exports.GeneralName = {})));
var AccessMethodType;
(function (AccessMethodType) {
  AccessMethodType["CA_REPOSITORY"] = "CA_REPOSITORY";
  AccessMethodType["RESOURCE_PKI_MANIFEST"] = "RESOURCE_PKI_MANIFEST";
  AccessMethodType["RESOURCE_PKI_NOTIFY"] = "RESOURCE_PKI_NOTIFY";
})((AccessMethodType = exports.AccessMethodType || (exports.AccessMethodType = {})));
var AccessMethod;
(function (AccessMethod) {
  /**
   * @internal
   */
  AccessMethod.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessMethod = exports.AccessMethod || (exports.AccessMethod = {})));
var AccessDescription;
(function (AccessDescription) {
  /**
   * @internal
   */
  AccessDescription.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDescription = exports.AccessDescription || (exports.AccessDescription = {})));
var KeyUsage;
(function (KeyUsage) {
  /**
   * @internal
   */
  KeyUsage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyUsage = exports.KeyUsage || (exports.KeyUsage = {})));
var CsrExtensions;
(function (CsrExtensions) {
  /**
   * @internal
   */
  CsrExtensions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CsrExtensions = exports.CsrExtensions || (exports.CsrExtensions = {})));
var KeyAlgorithm;
(function (KeyAlgorithm) {
  KeyAlgorithm["EC_prime256v1"] = "EC_prime256v1";
  KeyAlgorithm["EC_secp384r1"] = "EC_secp384r1";
  KeyAlgorithm["RSA_2048"] = "RSA_2048";
  KeyAlgorithm["RSA_4096"] = "RSA_4096";
})((KeyAlgorithm = exports.KeyAlgorithm || (exports.KeyAlgorithm = {})));
var SigningAlgorithm;
(function (SigningAlgorithm) {
  SigningAlgorithm["SHA256WITHECDSA"] = "SHA256WITHECDSA";
  SigningAlgorithm["SHA256WITHRSA"] = "SHA256WITHRSA";
  SigningAlgorithm["SHA384WITHECDSA"] = "SHA384WITHECDSA";
  SigningAlgorithm["SHA384WITHRSA"] = "SHA384WITHRSA";
  SigningAlgorithm["SHA512WITHECDSA"] = "SHA512WITHECDSA";
  SigningAlgorithm["SHA512WITHRSA"] = "SHA512WITHRSA";
})((SigningAlgorithm = exports.SigningAlgorithm || (exports.SigningAlgorithm = {})));
var CertificateAuthorityConfiguration;
(function (CertificateAuthorityConfiguration) {
  /**
   * @internal
   */
  CertificateAuthorityConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CertificateAuthorityConfiguration =
    exports.CertificateAuthorityConfiguration || (exports.CertificateAuthorityConfiguration = {}))
);
var CertificateAuthorityType;
(function (CertificateAuthorityType) {
  CertificateAuthorityType["ROOT"] = "ROOT";
  CertificateAuthorityType["SUBORDINATE"] = "SUBORDINATE";
})((CertificateAuthorityType = exports.CertificateAuthorityType || (exports.CertificateAuthorityType = {})));
var KeyStorageSecurityStandard;
(function (KeyStorageSecurityStandard) {
  KeyStorageSecurityStandard["FIPS_140_2_LEVEL_2_OR_HIGHER"] = "FIPS_140_2_LEVEL_2_OR_HIGHER";
  KeyStorageSecurityStandard["FIPS_140_2_LEVEL_3_OR_HIGHER"] = "FIPS_140_2_LEVEL_3_OR_HIGHER";
})((KeyStorageSecurityStandard = exports.KeyStorageSecurityStandard || (exports.KeyStorageSecurityStandard = {})));
var S3ObjectAcl;
(function (S3ObjectAcl) {
  S3ObjectAcl["BUCKET_OWNER_FULL_CONTROL"] = "BUCKET_OWNER_FULL_CONTROL";
  S3ObjectAcl["PUBLIC_READ"] = "PUBLIC_READ";
})((S3ObjectAcl = exports.S3ObjectAcl || (exports.S3ObjectAcl = {})));
var CrlConfiguration;
(function (CrlConfiguration) {
  /**
   * @internal
   */
  CrlConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CrlConfiguration = exports.CrlConfiguration || (exports.CrlConfiguration = {})));
var RevocationConfiguration;
(function (RevocationConfiguration) {
  /**
   * @internal
   */
  RevocationConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RevocationConfiguration = exports.RevocationConfiguration || (exports.RevocationConfiguration = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateCertificateAuthorityRequest;
(function (CreateCertificateAuthorityRequest) {
  /**
   * @internal
   */
  CreateCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateCertificateAuthorityRequest =
    exports.CreateCertificateAuthorityRequest || (exports.CreateCertificateAuthorityRequest = {}))
);
var CreateCertificateAuthorityResponse;
(function (CreateCertificateAuthorityResponse) {
  /**
   * @internal
   */
  CreateCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateCertificateAuthorityResponse =
    exports.CreateCertificateAuthorityResponse || (exports.CreateCertificateAuthorityResponse = {}))
);
var InvalidArgsException;
(function (InvalidArgsException) {
  /**
   * @internal
   */
  InvalidArgsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidArgsException = exports.InvalidArgsException || (exports.InvalidArgsException = {})));
var InvalidPolicyException;
(function (InvalidPolicyException) {
  /**
   * @internal
   */
  InvalidPolicyException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidPolicyException = exports.InvalidPolicyException || (exports.InvalidPolicyException = {})));
var InvalidTagException;
(function (InvalidTagException) {
  /**
   * @internal
   */
  InvalidTagException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var AuditReportResponseFormat;
(function (AuditReportResponseFormat) {
  AuditReportResponseFormat["CSV"] = "CSV";
  AuditReportResponseFormat["JSON"] = "JSON";
})((AuditReportResponseFormat = exports.AuditReportResponseFormat || (exports.AuditReportResponseFormat = {})));
var CreateCertificateAuthorityAuditReportRequest;
(function (CreateCertificateAuthorityAuditReportRequest) {
  /**
   * @internal
   */
  CreateCertificateAuthorityAuditReportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateCertificateAuthorityAuditReportRequest =
    exports.CreateCertificateAuthorityAuditReportRequest || (exports.CreateCertificateAuthorityAuditReportRequest = {}))
);
var CreateCertificateAuthorityAuditReportResponse;
(function (CreateCertificateAuthorityAuditReportResponse) {
  /**
   * @internal
   */
  CreateCertificateAuthorityAuditReportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateCertificateAuthorityAuditReportResponse =
    exports.CreateCertificateAuthorityAuditReportResponse ||
    (exports.CreateCertificateAuthorityAuditReportResponse = {}))
);
var InvalidArnException;
(function (InvalidArnException) {
  /**
   * @internal
   */
  InvalidArnException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {})));
var InvalidStateException;
(function (InvalidStateException) {
  /**
   * @internal
   */
  InvalidStateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {})));
var RequestFailedException;
(function (RequestFailedException) {
  /**
   * @internal
   */
  RequestFailedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestFailedException = exports.RequestFailedException || (exports.RequestFailedException = {})));
var RequestInProgressException;
(function (RequestInProgressException) {
  /**
   * @internal
   */
  RequestInProgressException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestInProgressException = exports.RequestInProgressException || (exports.RequestInProgressException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var ActionType;
(function (ActionType) {
  ActionType["GetCertificate"] = "GetCertificate";
  ActionType["IssueCertificate"] = "IssueCertificate";
  ActionType["ListPermissions"] = "ListPermissions";
})((ActionType = exports.ActionType || (exports.ActionType = {})));
var CreatePermissionRequest;
(function (CreatePermissionRequest) {
  /**
   * @internal
   */
  CreatePermissionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreatePermissionRequest = exports.CreatePermissionRequest || (exports.CreatePermissionRequest = {})));
var PermissionAlreadyExistsException;
(function (PermissionAlreadyExistsException) {
  /**
   * @internal
   */
  PermissionAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PermissionAlreadyExistsException =
    exports.PermissionAlreadyExistsException || (exports.PermissionAlreadyExistsException = {}))
);
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ConcurrentModificationException =
    exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}))
);
var DeleteCertificateAuthorityRequest;
(function (DeleteCertificateAuthorityRequest) {
  /**
   * @internal
   */
  DeleteCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteCertificateAuthorityRequest =
    exports.DeleteCertificateAuthorityRequest || (exports.DeleteCertificateAuthorityRequest = {}))
);
var DeletePermissionRequest;
(function (DeletePermissionRequest) {
  /**
   * @internal
   */
  DeletePermissionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeletePermissionRequest = exports.DeletePermissionRequest || (exports.DeletePermissionRequest = {})));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
  /**
   * @internal
   */
  DeletePolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {})));
var LockoutPreventedException;
(function (LockoutPreventedException) {
  /**
   * @internal
   */
  LockoutPreventedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LockoutPreventedException = exports.LockoutPreventedException || (exports.LockoutPreventedException = {})));
var DescribeCertificateAuthorityRequest;
(function (DescribeCertificateAuthorityRequest) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeCertificateAuthorityRequest =
    exports.DescribeCertificateAuthorityRequest || (exports.DescribeCertificateAuthorityRequest = {}))
);
var FailureReason;
(function (FailureReason) {
  FailureReason["OTHER"] = "OTHER";
  FailureReason["REQUEST_TIMED_OUT"] = "REQUEST_TIMED_OUT";
  FailureReason["UNSUPPORTED_ALGORITHM"] = "UNSUPPORTED_ALGORITHM";
})((FailureReason = exports.FailureReason || (exports.FailureReason = {})));
var CertificateAuthorityStatus;
(function (CertificateAuthorityStatus) {
  CertificateAuthorityStatus["ACTIVE"] = "ACTIVE";
  CertificateAuthorityStatus["CREATING"] = "CREATING";
  CertificateAuthorityStatus["DELETED"] = "DELETED";
  CertificateAuthorityStatus["DISABLED"] = "DISABLED";
  CertificateAuthorityStatus["EXPIRED"] = "EXPIRED";
  CertificateAuthorityStatus["FAILED"] = "FAILED";
  CertificateAuthorityStatus["PENDING_CERTIFICATE"] = "PENDING_CERTIFICATE";
})((CertificateAuthorityStatus = exports.CertificateAuthorityStatus || (exports.CertificateAuthorityStatus = {})));
var CertificateAuthority;
(function (CertificateAuthority) {
  /**
   * @internal
   */
  CertificateAuthority.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CertificateAuthority = exports.CertificateAuthority || (exports.CertificateAuthority = {})));
var DescribeCertificateAuthorityResponse;
(function (DescribeCertificateAuthorityResponse) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeCertificateAuthorityResponse =
    exports.DescribeCertificateAuthorityResponse || (exports.DescribeCertificateAuthorityResponse = {}))
);
var DescribeCertificateAuthorityAuditReportRequest;
(function (DescribeCertificateAuthorityAuditReportRequest) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityAuditReportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeCertificateAuthorityAuditReportRequest =
    exports.DescribeCertificateAuthorityAuditReportRequest ||
    (exports.DescribeCertificateAuthorityAuditReportRequest = {}))
);
var AuditReportStatus;
(function (AuditReportStatus) {
  AuditReportStatus["CREATING"] = "CREATING";
  AuditReportStatus["FAILED"] = "FAILED";
  AuditReportStatus["SUCCESS"] = "SUCCESS";
})((AuditReportStatus = exports.AuditReportStatus || (exports.AuditReportStatus = {})));
var DescribeCertificateAuthorityAuditReportResponse;
(function (DescribeCertificateAuthorityAuditReportResponse) {
  /**
   * @internal
   */
  DescribeCertificateAuthorityAuditReportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeCertificateAuthorityAuditReportResponse =
    exports.DescribeCertificateAuthorityAuditReportResponse ||
    (exports.DescribeCertificateAuthorityAuditReportResponse = {}))
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
var GetCertificateAuthorityCertificateRequest;
(function (GetCertificateAuthorityCertificateRequest) {
  /**
   * @internal
   */
  GetCertificateAuthorityCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCertificateAuthorityCertificateRequest =
    exports.GetCertificateAuthorityCertificateRequest || (exports.GetCertificateAuthorityCertificateRequest = {}))
);
var GetCertificateAuthorityCertificateResponse;
(function (GetCertificateAuthorityCertificateResponse) {
  /**
   * @internal
   */
  GetCertificateAuthorityCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCertificateAuthorityCertificateResponse =
    exports.GetCertificateAuthorityCertificateResponse || (exports.GetCertificateAuthorityCertificateResponse = {}))
);
var GetCertificateAuthorityCsrRequest;
(function (GetCertificateAuthorityCsrRequest) {
  /**
   * @internal
   */
  GetCertificateAuthorityCsrRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCertificateAuthorityCsrRequest =
    exports.GetCertificateAuthorityCsrRequest || (exports.GetCertificateAuthorityCsrRequest = {}))
);
var GetCertificateAuthorityCsrResponse;
(function (GetCertificateAuthorityCsrResponse) {
  /**
   * @internal
   */
  GetCertificateAuthorityCsrResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCertificateAuthorityCsrResponse =
    exports.GetCertificateAuthorityCsrResponse || (exports.GetCertificateAuthorityCsrResponse = {}))
);
var GetPolicyRequest;
(function (GetPolicyRequest) {
  /**
   * @internal
   */
  GetPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {})));
var GetPolicyResponse;
(function (GetPolicyResponse) {
  /**
   * @internal
   */
  GetPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {})));
var CertificateMismatchException;
(function (CertificateMismatchException) {
  /**
   * @internal
   */
  CertificateMismatchException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CertificateMismatchException = exports.CertificateMismatchException || (exports.CertificateMismatchException = {}))
);
var ImportCertificateAuthorityCertificateRequest;
(function (ImportCertificateAuthorityCertificateRequest) {
  /**
   * @internal
   */
  ImportCertificateAuthorityCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ImportCertificateAuthorityCertificateRequest =
    exports.ImportCertificateAuthorityCertificateRequest || (exports.ImportCertificateAuthorityCertificateRequest = {}))
);
var InvalidRequestException;
(function (InvalidRequestException) {
  /**
   * @internal
   */
  InvalidRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {})));
var MalformedCertificateException;
(function (MalformedCertificateException) {
  /**
   * @internal
   */
  MalformedCertificateException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (MalformedCertificateException =
    exports.MalformedCertificateException || (exports.MalformedCertificateException = {}))
);
var PolicyQualifierId;
(function (PolicyQualifierId) {
  PolicyQualifierId["CPS"] = "CPS";
})((PolicyQualifierId = exports.PolicyQualifierId || (exports.PolicyQualifierId = {})));
var Qualifier;
(function (Qualifier) {
  /**
   * @internal
   */
  Qualifier.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Qualifier = exports.Qualifier || (exports.Qualifier = {})));
var PolicyQualifierInfo;
(function (PolicyQualifierInfo) {
  /**
   * @internal
   */
  PolicyQualifierInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyQualifierInfo = exports.PolicyQualifierInfo || (exports.PolicyQualifierInfo = {})));
var PolicyInformation;
(function (PolicyInformation) {
  /**
   * @internal
   */
  PolicyInformation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyInformation = exports.PolicyInformation || (exports.PolicyInformation = {})));
var ExtendedKeyUsageType;
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
})((ExtendedKeyUsageType = exports.ExtendedKeyUsageType || (exports.ExtendedKeyUsageType = {})));
var ExtendedKeyUsage;
(function (ExtendedKeyUsage) {
  /**
   * @internal
   */
  ExtendedKeyUsage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExtendedKeyUsage = exports.ExtendedKeyUsage || (exports.ExtendedKeyUsage = {})));
var Extensions;
(function (Extensions) {
  /**
   * @internal
   */
  Extensions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Extensions = exports.Extensions || (exports.Extensions = {})));
var ApiPassthrough;
(function (ApiPassthrough) {
  /**
   * @internal
   */
  ApiPassthrough.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiPassthrough = exports.ApiPassthrough || (exports.ApiPassthrough = {})));
var ValidityPeriodType;
(function (ValidityPeriodType) {
  ValidityPeriodType["ABSOLUTE"] = "ABSOLUTE";
  ValidityPeriodType["DAYS"] = "DAYS";
  ValidityPeriodType["END_DATE"] = "END_DATE";
  ValidityPeriodType["MONTHS"] = "MONTHS";
  ValidityPeriodType["YEARS"] = "YEARS";
})((ValidityPeriodType = exports.ValidityPeriodType || (exports.ValidityPeriodType = {})));
var Validity;
(function (Validity) {
  /**
   * @internal
   */
  Validity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Validity = exports.Validity || (exports.Validity = {})));
var IssueCertificateRequest;
(function (IssueCertificateRequest) {
  /**
   * @internal
   */
  IssueCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IssueCertificateRequest = exports.IssueCertificateRequest || (exports.IssueCertificateRequest = {})));
var IssueCertificateResponse;
(function (IssueCertificateResponse) {
  /**
   * @internal
   */
  IssueCertificateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IssueCertificateResponse = exports.IssueCertificateResponse || (exports.IssueCertificateResponse = {})));
var MalformedCSRException;
(function (MalformedCSRException) {
  /**
   * @internal
   */
  MalformedCSRException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MalformedCSRException = exports.MalformedCSRException || (exports.MalformedCSRException = {})));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {})));
var ResourceOwner;
(function (ResourceOwner) {
  ResourceOwner["OTHER_ACCOUNTS"] = "OTHER_ACCOUNTS";
  ResourceOwner["SELF"] = "SELF";
})((ResourceOwner = exports.ResourceOwner || (exports.ResourceOwner = {})));
var ListCertificateAuthoritiesRequest;
(function (ListCertificateAuthoritiesRequest) {
  /**
   * @internal
   */
  ListCertificateAuthoritiesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListCertificateAuthoritiesRequest =
    exports.ListCertificateAuthoritiesRequest || (exports.ListCertificateAuthoritiesRequest = {}))
);
var ListCertificateAuthoritiesResponse;
(function (ListCertificateAuthoritiesResponse) {
  /**
   * @internal
   */
  ListCertificateAuthoritiesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListCertificateAuthoritiesResponse =
    exports.ListCertificateAuthoritiesResponse || (exports.ListCertificateAuthoritiesResponse = {}))
);
var ListPermissionsRequest;
(function (ListPermissionsRequest) {
  /**
   * @internal
   */
  ListPermissionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListPermissionsRequest = exports.ListPermissionsRequest || (exports.ListPermissionsRequest = {})));
var Permission;
(function (Permission) {
  /**
   * @internal
   */
  Permission.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Permission = exports.Permission || (exports.Permission = {})));
var ListPermissionsResponse;
(function (ListPermissionsResponse) {
  /**
   * @internal
   */
  ListPermissionsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListPermissionsResponse = exports.ListPermissionsResponse || (exports.ListPermissionsResponse = {})));
var ListTagsRequest;
(function (ListTagsRequest) {
  /**
   * @internal
   */
  ListTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {})));
var ListTagsResponse;
(function (ListTagsResponse) {
  /**
   * @internal
   */
  ListTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {})));
var PutPolicyRequest;
(function (PutPolicyRequest) {
  /**
   * @internal
   */
  PutPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutPolicyRequest = exports.PutPolicyRequest || (exports.PutPolicyRequest = {})));
var RestoreCertificateAuthorityRequest;
(function (RestoreCertificateAuthorityRequest) {
  /**
   * @internal
   */
  RestoreCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RestoreCertificateAuthorityRequest =
    exports.RestoreCertificateAuthorityRequest || (exports.RestoreCertificateAuthorityRequest = {}))
);
var RequestAlreadyProcessedException;
(function (RequestAlreadyProcessedException) {
  /**
   * @internal
   */
  RequestAlreadyProcessedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RequestAlreadyProcessedException =
    exports.RequestAlreadyProcessedException || (exports.RequestAlreadyProcessedException = {}))
);
var RevocationReason;
(function (RevocationReason) {
  RevocationReason["AFFILIATION_CHANGED"] = "AFFILIATION_CHANGED";
  RevocationReason["A_A_COMPROMISE"] = "A_A_COMPROMISE";
  RevocationReason["CERTIFICATE_AUTHORITY_COMPROMISE"] = "CERTIFICATE_AUTHORITY_COMPROMISE";
  RevocationReason["CESSATION_OF_OPERATION"] = "CESSATION_OF_OPERATION";
  RevocationReason["KEY_COMPROMISE"] = "KEY_COMPROMISE";
  RevocationReason["PRIVILEGE_WITHDRAWN"] = "PRIVILEGE_WITHDRAWN";
  RevocationReason["SUPERSEDED"] = "SUPERSEDED";
  RevocationReason["UNSPECIFIED"] = "UNSPECIFIED";
})((RevocationReason = exports.RevocationReason || (exports.RevocationReason = {})));
var RevokeCertificateRequest;
(function (RevokeCertificateRequest) {
  /**
   * @internal
   */
  RevokeCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RevokeCertificateRequest = exports.RevokeCertificateRequest || (exports.RevokeCertificateRequest = {})));
var TagCertificateAuthorityRequest;
(function (TagCertificateAuthorityRequest) {
  /**
   * @internal
   */
  TagCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TagCertificateAuthorityRequest =
    exports.TagCertificateAuthorityRequest || (exports.TagCertificateAuthorityRequest = {}))
);
var TooManyTagsException;
(function (TooManyTagsException) {
  /**
   * @internal
   */
  TooManyTagsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {})));
var UntagCertificateAuthorityRequest;
(function (UntagCertificateAuthorityRequest) {
  /**
   * @internal
   */
  UntagCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UntagCertificateAuthorityRequest =
    exports.UntagCertificateAuthorityRequest || (exports.UntagCertificateAuthorityRequest = {}))
);
var UpdateCertificateAuthorityRequest;
(function (UpdateCertificateAuthorityRequest) {
  /**
   * @internal
   */
  UpdateCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateCertificateAuthorityRequest =
    exports.UpdateCertificateAuthorityRequest || (exports.UpdateCertificateAuthorityRequest = {}))
);
//# sourceMappingURL=models_0.js.map
