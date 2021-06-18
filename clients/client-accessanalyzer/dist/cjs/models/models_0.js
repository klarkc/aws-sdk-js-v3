"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccessPreviewResponse =
  exports.CreateAccessPreviewRequest =
  exports.Configuration =
  exports.SqsQueueConfiguration =
  exports.SecretsManagerSecretConfiguration =
  exports.S3BucketConfiguration =
  exports.S3BucketAclGrantConfiguration =
  exports.AclPermission =
  exports.AclGrantee =
  exports.S3AccessPointConfiguration =
  exports.S3PublicAccessBlockConfiguration =
  exports.NetworkOriginConfiguration =
  exports.VpcConfiguration =
  exports.InternetConfiguration =
  exports.KmsKeyConfiguration =
  exports.KmsGrantConfiguration =
  exports.KmsGrantOperation =
  exports.KmsGrantConstraints =
  exports.IamRoleConfiguration =
  exports.CancelPolicyGenerationResponse =
  exports.CancelPolicyGenerationRequest =
  exports.ApplyArchiveRuleRequest =
  exports.ListAnalyzersResponse =
  exports.ListAnalyzersRequest =
  exports.GetAnalyzerResponse =
  exports.AnalyzerSummary =
  exports.StatusReason =
  exports.GetAnalyzerRequest =
  exports.DeleteAnalyzerRequest =
  exports.CreateAnalyzerResponse =
  exports.CreateAnalyzerRequest =
  exports.InlineArchiveRule =
  exports.UpdateArchiveRuleRequest =
  exports.ListArchiveRulesResponse =
  exports.ListArchiveRulesRequest =
  exports.GetArchiveRuleResponse =
  exports.ArchiveRuleSummary =
  exports.GetArchiveRuleRequest =
  exports.DeleteArchiveRuleRequest =
  exports.ValidationException =
  exports.ValidationExceptionReason =
  exports.ValidationExceptionField =
  exports.ThrottlingException =
  exports.ServiceQuotaExceededException =
  exports.ResourceNotFoundException =
  exports.InternalServerException =
  exports.CreateArchiveRuleRequest =
  exports.Criterion =
  exports.ConflictException =
  exports.AccessDeniedException =
    void 0;
exports.StartResourceScanRequest =
  exports.StartPolicyGenerationResponse =
  exports.StartPolicyGenerationRequest =
  exports.PolicyGenerationDetails =
  exports.CloudTrailDetails =
  exports.Trail =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListPolicyGenerationsResponse =
  exports.PolicyGeneration =
  exports.ListPolicyGenerationsRequest =
  exports.ListFindingsResponse =
  exports.FindingSummary =
  exports.ListFindingsRequest =
  exports.SortCriteria =
  exports.ListAnalyzedResourcesResponse =
  exports.AnalyzedResourceSummary =
  exports.ListAnalyzedResourcesRequest =
  exports.ListAccessPreviewsResponse =
  exports.AccessPreviewSummary =
  exports.ListAccessPreviewsRequest =
  exports.ListAccessPreviewFindingsResponse =
  exports.AccessPreviewFinding =
  exports.FindingChangeType =
  exports.ListAccessPreviewFindingsRequest =
  exports.GetGeneratedPolicyResponse =
  exports.JobDetails =
  exports.JobStatus =
  exports.JobError =
  exports.JobErrorCode =
  exports.GeneratedPolicyResult =
  exports.GeneratedPolicyProperties =
  exports.CloudTrailProperties =
  exports.TrailProperties =
  exports.GeneratedPolicy =
  exports.GetGeneratedPolicyRequest =
  exports.GetFindingResponse =
  exports.Finding =
  exports.FindingSource =
  exports.FindingSourceDetail =
  exports.GetFindingRequest =
  exports.GetAnalyzedResourceResponse =
  exports.AnalyzedResource =
  exports.GetAnalyzedResourceRequest =
  exports.GetAccessPreviewResponse =
  exports.AccessPreview =
  exports.AccessPreviewStatusReason =
  exports.AccessPreviewStatusReasonCode =
  exports.AccessPreviewStatus =
  exports.GetAccessPreviewRequest =
    void 0;
exports.ValidatePolicyResponse =
  exports.ValidatePolicyFinding =
  exports.Location =
  exports.Span =
  exports.Position =
  exports.PathElement =
  exports.Substring =
  exports.ValidatePolicyFindingType =
  exports.ValidatePolicyRequest =
  exports.PolicyType =
  exports.Locale =
  exports.UpdateFindingsRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var Criterion;
(function (Criterion) {
  /**
   * @internal
   */
  Criterion.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Criterion = exports.Criterion || (exports.Criterion = {})));
var CreateArchiveRuleRequest;
(function (CreateArchiveRuleRequest) {
  /**
   * @internal
   */
  CreateArchiveRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateArchiveRuleRequest = exports.CreateArchiveRuleRequest || (exports.CreateArchiveRuleRequest = {})));
var InternalServerException;
(function (InternalServerException) {
  /**
   * @internal
   */
  InternalServerException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServerException = exports.InternalServerException || (exports.InternalServerException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceQuotaExceededException =
    exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}))
);
var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {})));
var ValidationExceptionField;
(function (ValidationExceptionField) {
  /**
   * @internal
   */
  ValidationExceptionField.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {})));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
  ValidationExceptionReason["CANNOT_PARSE"] = "cannotParse";
  ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "fieldValidationFailed";
  ValidationExceptionReason["OTHER"] = "other";
  ValidationExceptionReason["UNKNOWN_OPERATION"] = "unknownOperation";
})((ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var DeleteArchiveRuleRequest;
(function (DeleteArchiveRuleRequest) {
  /**
   * @internal
   */
  DeleteArchiveRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteArchiveRuleRequest = exports.DeleteArchiveRuleRequest || (exports.DeleteArchiveRuleRequest = {})));
var GetArchiveRuleRequest;
(function (GetArchiveRuleRequest) {
  /**
   * @internal
   */
  GetArchiveRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetArchiveRuleRequest = exports.GetArchiveRuleRequest || (exports.GetArchiveRuleRequest = {})));
var ArchiveRuleSummary;
(function (ArchiveRuleSummary) {
  /**
   * @internal
   */
  ArchiveRuleSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ArchiveRuleSummary = exports.ArchiveRuleSummary || (exports.ArchiveRuleSummary = {})));
var GetArchiveRuleResponse;
(function (GetArchiveRuleResponse) {
  /**
   * @internal
   */
  GetArchiveRuleResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetArchiveRuleResponse = exports.GetArchiveRuleResponse || (exports.GetArchiveRuleResponse = {})));
var ListArchiveRulesRequest;
(function (ListArchiveRulesRequest) {
  /**
   * @internal
   */
  ListArchiveRulesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListArchiveRulesRequest = exports.ListArchiveRulesRequest || (exports.ListArchiveRulesRequest = {})));
var ListArchiveRulesResponse;
(function (ListArchiveRulesResponse) {
  /**
   * @internal
   */
  ListArchiveRulesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListArchiveRulesResponse = exports.ListArchiveRulesResponse || (exports.ListArchiveRulesResponse = {})));
var UpdateArchiveRuleRequest;
(function (UpdateArchiveRuleRequest) {
  /**
   * @internal
   */
  UpdateArchiveRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateArchiveRuleRequest = exports.UpdateArchiveRuleRequest || (exports.UpdateArchiveRuleRequest = {})));
var InlineArchiveRule;
(function (InlineArchiveRule) {
  /**
   * @internal
   */
  InlineArchiveRule.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InlineArchiveRule = exports.InlineArchiveRule || (exports.InlineArchiveRule = {})));
var CreateAnalyzerRequest;
(function (CreateAnalyzerRequest) {
  /**
   * @internal
   */
  CreateAnalyzerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAnalyzerRequest = exports.CreateAnalyzerRequest || (exports.CreateAnalyzerRequest = {})));
var CreateAnalyzerResponse;
(function (CreateAnalyzerResponse) {
  /**
   * @internal
   */
  CreateAnalyzerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAnalyzerResponse = exports.CreateAnalyzerResponse || (exports.CreateAnalyzerResponse = {})));
var DeleteAnalyzerRequest;
(function (DeleteAnalyzerRequest) {
  /**
   * @internal
   */
  DeleteAnalyzerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAnalyzerRequest = exports.DeleteAnalyzerRequest || (exports.DeleteAnalyzerRequest = {})));
var GetAnalyzerRequest;
(function (GetAnalyzerRequest) {
  /**
   * @internal
   */
  GetAnalyzerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAnalyzerRequest = exports.GetAnalyzerRequest || (exports.GetAnalyzerRequest = {})));
var StatusReason;
(function (StatusReason) {
  /**
   * @internal
   */
  StatusReason.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StatusReason = exports.StatusReason || (exports.StatusReason = {})));
var AnalyzerSummary;
(function (AnalyzerSummary) {
  /**
   * @internal
   */
  AnalyzerSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AnalyzerSummary = exports.AnalyzerSummary || (exports.AnalyzerSummary = {})));
var GetAnalyzerResponse;
(function (GetAnalyzerResponse) {
  /**
   * @internal
   */
  GetAnalyzerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAnalyzerResponse = exports.GetAnalyzerResponse || (exports.GetAnalyzerResponse = {})));
var ListAnalyzersRequest;
(function (ListAnalyzersRequest) {
  /**
   * @internal
   */
  ListAnalyzersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAnalyzersRequest = exports.ListAnalyzersRequest || (exports.ListAnalyzersRequest = {})));
var ListAnalyzersResponse;
(function (ListAnalyzersResponse) {
  /**
   * @internal
   */
  ListAnalyzersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAnalyzersResponse = exports.ListAnalyzersResponse || (exports.ListAnalyzersResponse = {})));
var ApplyArchiveRuleRequest;
(function (ApplyArchiveRuleRequest) {
  /**
   * @internal
   */
  ApplyArchiveRuleRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApplyArchiveRuleRequest = exports.ApplyArchiveRuleRequest || (exports.ApplyArchiveRuleRequest = {})));
var CancelPolicyGenerationRequest;
(function (CancelPolicyGenerationRequest) {
  /**
   * @internal
   */
  CancelPolicyGenerationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CancelPolicyGenerationRequest =
    exports.CancelPolicyGenerationRequest || (exports.CancelPolicyGenerationRequest = {}))
);
var CancelPolicyGenerationResponse;
(function (CancelPolicyGenerationResponse) {
  /**
   * @internal
   */
  CancelPolicyGenerationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CancelPolicyGenerationResponse =
    exports.CancelPolicyGenerationResponse || (exports.CancelPolicyGenerationResponse = {}))
);
var IamRoleConfiguration;
(function (IamRoleConfiguration) {
  /**
   * @internal
   */
  IamRoleConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IamRoleConfiguration = exports.IamRoleConfiguration || (exports.IamRoleConfiguration = {})));
var KmsGrantConstraints;
(function (KmsGrantConstraints) {
  /**
   * @internal
   */
  KmsGrantConstraints.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KmsGrantConstraints = exports.KmsGrantConstraints || (exports.KmsGrantConstraints = {})));
var KmsGrantOperation;
(function (KmsGrantOperation) {
  KmsGrantOperation["CREATE_GRANT"] = "CreateGrant";
  KmsGrantOperation["DECRYPT"] = "Decrypt";
  KmsGrantOperation["DESCRIBE_KEY"] = "DescribeKey";
  KmsGrantOperation["ENCRYPT"] = "Encrypt";
  KmsGrantOperation["GENERATE_DATA_KEY"] = "GenerateDataKey";
  KmsGrantOperation["GENERATE_DATA_KEY_PAIR"] = "GenerateDataKeyPair";
  KmsGrantOperation["GENERATE_DATA_KEY_PAIR_WITHOUT_PLAINTEXT"] = "GenerateDataKeyPairWithoutPlaintext";
  KmsGrantOperation["GENERATE_DATA_KEY_WITHOUT_PLAINTEXT"] = "GenerateDataKeyWithoutPlaintext";
  KmsGrantOperation["GET_PUBLIC_KEY"] = "GetPublicKey";
  KmsGrantOperation["REENCRYPT_FROM"] = "ReEncryptFrom";
  KmsGrantOperation["REENCRYPT_TO"] = "ReEncryptTo";
  KmsGrantOperation["RETIRE_GRANT"] = "RetireGrant";
  KmsGrantOperation["SIGN"] = "Sign";
  KmsGrantOperation["VERIFY"] = "Verify";
})((KmsGrantOperation = exports.KmsGrantOperation || (exports.KmsGrantOperation = {})));
var KmsGrantConfiguration;
(function (KmsGrantConfiguration) {
  /**
   * @internal
   */
  KmsGrantConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KmsGrantConfiguration = exports.KmsGrantConfiguration || (exports.KmsGrantConfiguration = {})));
var KmsKeyConfiguration;
(function (KmsKeyConfiguration) {
  /**
   * @internal
   */
  KmsKeyConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KmsKeyConfiguration = exports.KmsKeyConfiguration || (exports.KmsKeyConfiguration = {})));
var InternetConfiguration;
(function (InternetConfiguration) {
  /**
   * @internal
   */
  InternetConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternetConfiguration = exports.InternetConfiguration || (exports.InternetConfiguration = {})));
var VpcConfiguration;
(function (VpcConfiguration) {
  /**
   * @internal
   */
  VpcConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VpcConfiguration = exports.VpcConfiguration || (exports.VpcConfiguration = {})));
var NetworkOriginConfiguration;
(function (NetworkOriginConfiguration) {
  NetworkOriginConfiguration.visit = (value, visitor) => {
    if (value.vpcConfiguration !== undefined) return visitor.vpcConfiguration(value.vpcConfiguration);
    if (value.internetConfiguration !== undefined) return visitor.internetConfiguration(value.internetConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  NetworkOriginConfiguration.filterSensitiveLog = (obj) => {
    if (obj.vpcConfiguration !== undefined)
      return { vpcConfiguration: VpcConfiguration.filterSensitiveLog(obj.vpcConfiguration) };
    if (obj.internetConfiguration !== undefined)
      return { internetConfiguration: InternetConfiguration.filterSensitiveLog(obj.internetConfiguration) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((NetworkOriginConfiguration = exports.NetworkOriginConfiguration || (exports.NetworkOriginConfiguration = {})));
var S3PublicAccessBlockConfiguration;
(function (S3PublicAccessBlockConfiguration) {
  /**
   * @internal
   */
  S3PublicAccessBlockConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (S3PublicAccessBlockConfiguration =
    exports.S3PublicAccessBlockConfiguration || (exports.S3PublicAccessBlockConfiguration = {}))
);
var S3AccessPointConfiguration;
(function (S3AccessPointConfiguration) {
  /**
   * @internal
   */
  S3AccessPointConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.networkOrigin && { networkOrigin: NetworkOriginConfiguration.filterSensitiveLog(obj.networkOrigin) }),
  });
})((S3AccessPointConfiguration = exports.S3AccessPointConfiguration || (exports.S3AccessPointConfiguration = {})));
var AclGrantee;
(function (AclGrantee) {
  AclGrantee.visit = (value, visitor) => {
    if (value.id !== undefined) return visitor.id(value.id);
    if (value.uri !== undefined) return visitor.uri(value.uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  AclGrantee.filterSensitiveLog = (obj) => {
    if (obj.id !== undefined) return { id: obj.id };
    if (obj.uri !== undefined) return { uri: obj.uri };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((AclGrantee = exports.AclGrantee || (exports.AclGrantee = {})));
var AclPermission;
(function (AclPermission) {
  AclPermission["FULL_CONTROL"] = "FULL_CONTROL";
  AclPermission["READ"] = "READ";
  AclPermission["READ_ACP"] = "READ_ACP";
  AclPermission["WRITE"] = "WRITE";
  AclPermission["WRITE_ACP"] = "WRITE_ACP";
})((AclPermission = exports.AclPermission || (exports.AclPermission = {})));
var S3BucketAclGrantConfiguration;
(function (S3BucketAclGrantConfiguration) {
  /**
   * @internal
   */
  S3BucketAclGrantConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.grantee && { grantee: AclGrantee.filterSensitiveLog(obj.grantee) }),
  });
})(
  (S3BucketAclGrantConfiguration =
    exports.S3BucketAclGrantConfiguration || (exports.S3BucketAclGrantConfiguration = {}))
);
var S3BucketConfiguration;
(function (S3BucketConfiguration) {
  /**
   * @internal
   */
  S3BucketConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.bucketAclGrants && {
      bucketAclGrants: obj.bucketAclGrants.map((item) => S3BucketAclGrantConfiguration.filterSensitiveLog(item)),
    }),
    ...(obj.accessPoints && {
      accessPoints: Object.entries(obj.accessPoints).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: S3AccessPointConfiguration.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
})((S3BucketConfiguration = exports.S3BucketConfiguration || (exports.S3BucketConfiguration = {})));
var SecretsManagerSecretConfiguration;
(function (SecretsManagerSecretConfiguration) {
  /**
   * @internal
   */
  SecretsManagerSecretConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (SecretsManagerSecretConfiguration =
    exports.SecretsManagerSecretConfiguration || (exports.SecretsManagerSecretConfiguration = {}))
);
var SqsQueueConfiguration;
(function (SqsQueueConfiguration) {
  /**
   * @internal
   */
  SqsQueueConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SqsQueueConfiguration = exports.SqsQueueConfiguration || (exports.SqsQueueConfiguration = {})));
var Configuration;
(function (Configuration) {
  Configuration.visit = (value, visitor) => {
    if (value.iamRole !== undefined) return visitor.iamRole(value.iamRole);
    if (value.kmsKey !== undefined) return visitor.kmsKey(value.kmsKey);
    if (value.secretsManagerSecret !== undefined) return visitor.secretsManagerSecret(value.secretsManagerSecret);
    if (value.s3Bucket !== undefined) return visitor.s3Bucket(value.s3Bucket);
    if (value.sqsQueue !== undefined) return visitor.sqsQueue(value.sqsQueue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  Configuration.filterSensitiveLog = (obj) => {
    if (obj.iamRole !== undefined) return { iamRole: IamRoleConfiguration.filterSensitiveLog(obj.iamRole) };
    if (obj.kmsKey !== undefined) return { kmsKey: KmsKeyConfiguration.filterSensitiveLog(obj.kmsKey) };
    if (obj.secretsManagerSecret !== undefined)
      return { secretsManagerSecret: SecretsManagerSecretConfiguration.filterSensitiveLog(obj.secretsManagerSecret) };
    if (obj.s3Bucket !== undefined) return { s3Bucket: S3BucketConfiguration.filterSensitiveLog(obj.s3Bucket) };
    if (obj.sqsQueue !== undefined) return { sqsQueue: SqsQueueConfiguration.filterSensitiveLog(obj.sqsQueue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((Configuration = exports.Configuration || (exports.Configuration = {})));
var CreateAccessPreviewRequest;
(function (CreateAccessPreviewRequest) {
  /**
   * @internal
   */
  CreateAccessPreviewRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.configurations && {
      configurations: Object.entries(obj.configurations).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: Configuration.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
})((CreateAccessPreviewRequest = exports.CreateAccessPreviewRequest || (exports.CreateAccessPreviewRequest = {})));
var CreateAccessPreviewResponse;
(function (CreateAccessPreviewResponse) {
  /**
   * @internal
   */
  CreateAccessPreviewResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAccessPreviewResponse = exports.CreateAccessPreviewResponse || (exports.CreateAccessPreviewResponse = {})));
var GetAccessPreviewRequest;
(function (GetAccessPreviewRequest) {
  /**
   * @internal
   */
  GetAccessPreviewRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccessPreviewRequest = exports.GetAccessPreviewRequest || (exports.GetAccessPreviewRequest = {})));
var AccessPreviewStatus;
(function (AccessPreviewStatus) {
  AccessPreviewStatus["COMPLETED"] = "COMPLETED";
  AccessPreviewStatus["CREATING"] = "CREATING";
  AccessPreviewStatus["FAILED"] = "FAILED";
})((AccessPreviewStatus = exports.AccessPreviewStatus || (exports.AccessPreviewStatus = {})));
var AccessPreviewStatusReasonCode;
(function (AccessPreviewStatusReasonCode) {
  AccessPreviewStatusReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
  AccessPreviewStatusReasonCode["INVALID_CONFIGURATION"] = "INVALID_CONFIGURATION";
})(
  (AccessPreviewStatusReasonCode =
    exports.AccessPreviewStatusReasonCode || (exports.AccessPreviewStatusReasonCode = {}))
);
var AccessPreviewStatusReason;
(function (AccessPreviewStatusReason) {
  /**
   * @internal
   */
  AccessPreviewStatusReason.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessPreviewStatusReason = exports.AccessPreviewStatusReason || (exports.AccessPreviewStatusReason = {})));
var AccessPreview;
(function (AccessPreview) {
  /**
   * @internal
   */
  AccessPreview.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.configurations && {
      configurations: Object.entries(obj.configurations).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: Configuration.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
})((AccessPreview = exports.AccessPreview || (exports.AccessPreview = {})));
var GetAccessPreviewResponse;
(function (GetAccessPreviewResponse) {
  /**
   * @internal
   */
  GetAccessPreviewResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessPreview && { accessPreview: AccessPreview.filterSensitiveLog(obj.accessPreview) }),
  });
})((GetAccessPreviewResponse = exports.GetAccessPreviewResponse || (exports.GetAccessPreviewResponse = {})));
var GetAnalyzedResourceRequest;
(function (GetAnalyzedResourceRequest) {
  /**
   * @internal
   */
  GetAnalyzedResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAnalyzedResourceRequest = exports.GetAnalyzedResourceRequest || (exports.GetAnalyzedResourceRequest = {})));
var AnalyzedResource;
(function (AnalyzedResource) {
  /**
   * @internal
   */
  AnalyzedResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AnalyzedResource = exports.AnalyzedResource || (exports.AnalyzedResource = {})));
var GetAnalyzedResourceResponse;
(function (GetAnalyzedResourceResponse) {
  /**
   * @internal
   */
  GetAnalyzedResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAnalyzedResourceResponse = exports.GetAnalyzedResourceResponse || (exports.GetAnalyzedResourceResponse = {})));
var GetFindingRequest;
(function (GetFindingRequest) {
  /**
   * @internal
   */
  GetFindingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFindingRequest = exports.GetFindingRequest || (exports.GetFindingRequest = {})));
var FindingSourceDetail;
(function (FindingSourceDetail) {
  /**
   * @internal
   */
  FindingSourceDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FindingSourceDetail = exports.FindingSourceDetail || (exports.FindingSourceDetail = {})));
var FindingSource;
(function (FindingSource) {
  /**
   * @internal
   */
  FindingSource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FindingSource = exports.FindingSource || (exports.FindingSource = {})));
var Finding;
(function (Finding) {
  /**
   * @internal
   */
  Finding.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Finding = exports.Finding || (exports.Finding = {})));
var GetFindingResponse;
(function (GetFindingResponse) {
  /**
   * @internal
   */
  GetFindingResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFindingResponse = exports.GetFindingResponse || (exports.GetFindingResponse = {})));
var GetGeneratedPolicyRequest;
(function (GetGeneratedPolicyRequest) {
  /**
   * @internal
   */
  GetGeneratedPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGeneratedPolicyRequest = exports.GetGeneratedPolicyRequest || (exports.GetGeneratedPolicyRequest = {})));
var GeneratedPolicy;
(function (GeneratedPolicy) {
  /**
   * @internal
   */
  GeneratedPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GeneratedPolicy = exports.GeneratedPolicy || (exports.GeneratedPolicy = {})));
var TrailProperties;
(function (TrailProperties) {
  /**
   * @internal
   */
  TrailProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrailProperties = exports.TrailProperties || (exports.TrailProperties = {})));
var CloudTrailProperties;
(function (CloudTrailProperties) {
  /**
   * @internal
   */
  CloudTrailProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CloudTrailProperties = exports.CloudTrailProperties || (exports.CloudTrailProperties = {})));
var GeneratedPolicyProperties;
(function (GeneratedPolicyProperties) {
  /**
   * @internal
   */
  GeneratedPolicyProperties.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GeneratedPolicyProperties = exports.GeneratedPolicyProperties || (exports.GeneratedPolicyProperties = {})));
var GeneratedPolicyResult;
(function (GeneratedPolicyResult) {
  /**
   * @internal
   */
  GeneratedPolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GeneratedPolicyResult = exports.GeneratedPolicyResult || (exports.GeneratedPolicyResult = {})));
var JobErrorCode;
(function (JobErrorCode) {
  JobErrorCode["AUTHORIZATION_ERROR"] = "AUTHORIZATION_ERROR";
  JobErrorCode["RESOURCE_NOT_FOUND_ERROR"] = "RESOURCE_NOT_FOUND_ERROR";
  JobErrorCode["SERVICE_ERROR"] = "SERVICE_ERROR";
  JobErrorCode["SERVICE_QUOTA_EXCEEDED_ERROR"] = "SERVICE_QUOTA_EXCEEDED_ERROR";
})((JobErrorCode = exports.JobErrorCode || (exports.JobErrorCode = {})));
var JobError;
(function (JobError) {
  /**
   * @internal
   */
  JobError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobError = exports.JobError || (exports.JobError = {})));
var JobStatus;
(function (JobStatus) {
  JobStatus["CANCELED"] = "CANCELED";
  JobStatus["FAILED"] = "FAILED";
  JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
  JobStatus["SUCCEEDED"] = "SUCCEEDED";
})((JobStatus = exports.JobStatus || (exports.JobStatus = {})));
var JobDetails;
(function (JobDetails) {
  /**
   * @internal
   */
  JobDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JobDetails = exports.JobDetails || (exports.JobDetails = {})));
var GetGeneratedPolicyResponse;
(function (GetGeneratedPolicyResponse) {
  /**
   * @internal
   */
  GetGeneratedPolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGeneratedPolicyResponse = exports.GetGeneratedPolicyResponse || (exports.GetGeneratedPolicyResponse = {})));
var ListAccessPreviewFindingsRequest;
(function (ListAccessPreviewFindingsRequest) {
  /**
   * @internal
   */
  ListAccessPreviewFindingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAccessPreviewFindingsRequest =
    exports.ListAccessPreviewFindingsRequest || (exports.ListAccessPreviewFindingsRequest = {}))
);
var FindingChangeType;
(function (FindingChangeType) {
  FindingChangeType["CHANGED"] = "CHANGED";
  FindingChangeType["NEW"] = "NEW";
  FindingChangeType["UNCHANGED"] = "UNCHANGED";
})((FindingChangeType = exports.FindingChangeType || (exports.FindingChangeType = {})));
var AccessPreviewFinding;
(function (AccessPreviewFinding) {
  /**
   * @internal
   */
  AccessPreviewFinding.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessPreviewFinding = exports.AccessPreviewFinding || (exports.AccessPreviewFinding = {})));
var ListAccessPreviewFindingsResponse;
(function (ListAccessPreviewFindingsResponse) {
  /**
   * @internal
   */
  ListAccessPreviewFindingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAccessPreviewFindingsResponse =
    exports.ListAccessPreviewFindingsResponse || (exports.ListAccessPreviewFindingsResponse = {}))
);
var ListAccessPreviewsRequest;
(function (ListAccessPreviewsRequest) {
  /**
   * @internal
   */
  ListAccessPreviewsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAccessPreviewsRequest = exports.ListAccessPreviewsRequest || (exports.ListAccessPreviewsRequest = {})));
var AccessPreviewSummary;
(function (AccessPreviewSummary) {
  /**
   * @internal
   */
  AccessPreviewSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessPreviewSummary = exports.AccessPreviewSummary || (exports.AccessPreviewSummary = {})));
var ListAccessPreviewsResponse;
(function (ListAccessPreviewsResponse) {
  /**
   * @internal
   */
  ListAccessPreviewsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListAccessPreviewsResponse = exports.ListAccessPreviewsResponse || (exports.ListAccessPreviewsResponse = {})));
var ListAnalyzedResourcesRequest;
(function (ListAnalyzedResourcesRequest) {
  /**
   * @internal
   */
  ListAnalyzedResourcesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAnalyzedResourcesRequest = exports.ListAnalyzedResourcesRequest || (exports.ListAnalyzedResourcesRequest = {}))
);
var AnalyzedResourceSummary;
(function (AnalyzedResourceSummary) {
  /**
   * @internal
   */
  AnalyzedResourceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AnalyzedResourceSummary = exports.AnalyzedResourceSummary || (exports.AnalyzedResourceSummary = {})));
var ListAnalyzedResourcesResponse;
(function (ListAnalyzedResourcesResponse) {
  /**
   * @internal
   */
  ListAnalyzedResourcesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListAnalyzedResourcesResponse =
    exports.ListAnalyzedResourcesResponse || (exports.ListAnalyzedResourcesResponse = {}))
);
var SortCriteria;
(function (SortCriteria) {
  /**
   * @internal
   */
  SortCriteria.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SortCriteria = exports.SortCriteria || (exports.SortCriteria = {})));
var ListFindingsRequest;
(function (ListFindingsRequest) {
  /**
   * @internal
   */
  ListFindingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFindingsRequest = exports.ListFindingsRequest || (exports.ListFindingsRequest = {})));
var FindingSummary;
(function (FindingSummary) {
  /**
   * @internal
   */
  FindingSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FindingSummary = exports.FindingSummary || (exports.FindingSummary = {})));
var ListFindingsResponse;
(function (ListFindingsResponse) {
  /**
   * @internal
   */
  ListFindingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFindingsResponse = exports.ListFindingsResponse || (exports.ListFindingsResponse = {})));
var ListPolicyGenerationsRequest;
(function (ListPolicyGenerationsRequest) {
  /**
   * @internal
   */
  ListPolicyGenerationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPolicyGenerationsRequest = exports.ListPolicyGenerationsRequest || (exports.ListPolicyGenerationsRequest = {}))
);
var PolicyGeneration;
(function (PolicyGeneration) {
  /**
   * @internal
   */
  PolicyGeneration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyGeneration = exports.PolicyGeneration || (exports.PolicyGeneration = {})));
var ListPolicyGenerationsResponse;
(function (ListPolicyGenerationsResponse) {
  /**
   * @internal
   */
  ListPolicyGenerationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListPolicyGenerationsResponse =
    exports.ListPolicyGenerationsResponse || (exports.ListPolicyGenerationsResponse = {}))
);
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var Trail;
(function (Trail) {
  /**
   * @internal
   */
  Trail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Trail = exports.Trail || (exports.Trail = {})));
var CloudTrailDetails;
(function (CloudTrailDetails) {
  /**
   * @internal
   */
  CloudTrailDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CloudTrailDetails = exports.CloudTrailDetails || (exports.CloudTrailDetails = {})));
var PolicyGenerationDetails;
(function (PolicyGenerationDetails) {
  /**
   * @internal
   */
  PolicyGenerationDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PolicyGenerationDetails = exports.PolicyGenerationDetails || (exports.PolicyGenerationDetails = {})));
var StartPolicyGenerationRequest;
(function (StartPolicyGenerationRequest) {
  /**
   * @internal
   */
  StartPolicyGenerationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartPolicyGenerationRequest = exports.StartPolicyGenerationRequest || (exports.StartPolicyGenerationRequest = {}))
);
var StartPolicyGenerationResponse;
(function (StartPolicyGenerationResponse) {
  /**
   * @internal
   */
  StartPolicyGenerationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartPolicyGenerationResponse =
    exports.StartPolicyGenerationResponse || (exports.StartPolicyGenerationResponse = {}))
);
var StartResourceScanRequest;
(function (StartResourceScanRequest) {
  /**
   * @internal
   */
  StartResourceScanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartResourceScanRequest = exports.StartResourceScanRequest || (exports.StartResourceScanRequest = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateFindingsRequest;
(function (UpdateFindingsRequest) {
  /**
   * @internal
   */
  UpdateFindingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFindingsRequest = exports.UpdateFindingsRequest || (exports.UpdateFindingsRequest = {})));
var Locale;
(function (Locale) {
  Locale["DE"] = "DE";
  Locale["EN"] = "EN";
  Locale["ES"] = "ES";
  Locale["FR"] = "FR";
  Locale["IT"] = "IT";
  Locale["JA"] = "JA";
  Locale["KO"] = "KO";
  Locale["PT_BR"] = "PT_BR";
  Locale["ZH_CN"] = "ZH_CN";
  Locale["ZH_TW"] = "ZH_TW";
})((Locale = exports.Locale || (exports.Locale = {})));
var PolicyType;
(function (PolicyType) {
  PolicyType["IDENTITY_POLICY"] = "IDENTITY_POLICY";
  PolicyType["RESOURCE_POLICY"] = "RESOURCE_POLICY";
  PolicyType["SERVICE_CONTROL_POLICY"] = "SERVICE_CONTROL_POLICY";
})((PolicyType = exports.PolicyType || (exports.PolicyType = {})));
var ValidatePolicyRequest;
(function (ValidatePolicyRequest) {
  /**
   * @internal
   */
  ValidatePolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidatePolicyRequest = exports.ValidatePolicyRequest || (exports.ValidatePolicyRequest = {})));
var ValidatePolicyFindingType;
(function (ValidatePolicyFindingType) {
  ValidatePolicyFindingType["ERROR"] = "ERROR";
  ValidatePolicyFindingType["SECURITY_WARNING"] = "SECURITY_WARNING";
  ValidatePolicyFindingType["SUGGESTION"] = "SUGGESTION";
  ValidatePolicyFindingType["WARNING"] = "WARNING";
})((ValidatePolicyFindingType = exports.ValidatePolicyFindingType || (exports.ValidatePolicyFindingType = {})));
var Substring;
(function (Substring) {
  /**
   * @internal
   */
  Substring.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Substring = exports.Substring || (exports.Substring = {})));
var PathElement;
(function (PathElement) {
  PathElement.visit = (value, visitor) => {
    if (value.index !== undefined) return visitor.index(value.index);
    if (value.key !== undefined) return visitor.key(value.key);
    if (value.substring !== undefined) return visitor.substring(value.substring);
    if (value.value !== undefined) return visitor.value(value.value);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
  /**
   * @internal
   */
  PathElement.filterSensitiveLog = (obj) => {
    if (obj.index !== undefined) return { index: obj.index };
    if (obj.key !== undefined) return { key: obj.key };
    if (obj.substring !== undefined) return { substring: Substring.filterSensitiveLog(obj.substring) };
    if (obj.value !== undefined) return { value: obj.value };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
})((PathElement = exports.PathElement || (exports.PathElement = {})));
var Position;
(function (Position) {
  /**
   * @internal
   */
  Position.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Position = exports.Position || (exports.Position = {})));
var Span;
(function (Span) {
  /**
   * @internal
   */
  Span.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Span = exports.Span || (exports.Span = {})));
var Location;
(function (Location) {
  /**
   * @internal
   */
  Location.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.path && { path: obj.path.map((item) => PathElement.filterSensitiveLog(item)) }),
  });
})((Location = exports.Location || (exports.Location = {})));
var ValidatePolicyFinding;
(function (ValidatePolicyFinding) {
  /**
   * @internal
   */
  ValidatePolicyFinding.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.locations && { locations: obj.locations.map((item) => Location.filterSensitiveLog(item)) }),
  });
})((ValidatePolicyFinding = exports.ValidatePolicyFinding || (exports.ValidatePolicyFinding = {})));
var ValidatePolicyResponse;
(function (ValidatePolicyResponse) {
  /**
   * @internal
   */
  ValidatePolicyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidatePolicyResponse = exports.ValidatePolicyResponse || (exports.ValidatePolicyResponse = {})));
//# sourceMappingURL=models_0.js.map
