"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingBody =
  exports.CreateCloudFrontOriginAccessIdentityResult =
  exports.CloudFrontOriginAccessIdentity =
  exports.CreateCloudFrontOriginAccessIdentityRequest =
  exports.CloudFrontOriginAccessIdentityConfig =
  exports.CloudFrontOriginAccessIdentityAlreadyExists =
  exports.TooManyQueryStringsInCachePolicy =
  exports.TooManyHeadersInCachePolicy =
  exports.TooManyCookiesInCachePolicy =
  exports.TooManyCachePolicies =
  exports.InvalidArgument =
  exports.InconsistentQuantities =
  exports.CreateCachePolicyResult =
  exports.CreateCachePolicyRequest =
  exports.CannotChangeImmutablePublicKeyFields =
  exports.CachePolicyList =
  exports.CachePolicySummary =
  exports.CachePolicyInUse =
  exports.CachePolicyAlreadyExists =
  exports.CachePolicy =
  exports.CachePolicyConfig =
  exports.ParametersInCacheKeyAndForwardedToOrigin =
  exports.CachePolicyQueryStringsConfig =
  exports.QueryStringNames =
  exports.CachePolicyHeadersConfig =
  exports.CachePolicyCookiesConfig =
  exports.CacheBehaviors =
  exports.CacheBehavior =
  exports.TrustedSigners =
  exports.TrustedKeyGroups =
  exports.LambdaFunctionAssociations =
  exports.LambdaFunctionAssociation =
  exports.FunctionAssociations =
  exports.FunctionAssociation =
  exports.ForwardedValues =
  exports.QueryStringCacheKeys =
  exports.Headers =
  exports.CookiePreference =
  exports.CookieNames =
  exports.BatchTooLarge =
  exports.AllowedMethods =
  exports.CachedMethods =
  exports.AliasICPRecordal =
  exports.Aliases =
  exports.ActiveTrustedSigners =
  exports.Signer =
  exports.ActiveTrustedKeyGroups =
  exports.KGKeyPairIds =
  exports.KeyPairIds =
  exports.AccessDenied =
    void 0;
exports.InvalidWebACLId =
  exports.InvalidViewerCertificate =
  exports.InvalidTTLOrder =
  exports.InvalidResponseCode =
  exports.InvalidRequiredProtocol =
  exports.InvalidRelativePath =
  exports.InvalidQueryStringParameters =
  exports.InvalidProtocolSettings =
  exports.InvalidOriginReadTimeout =
  exports.InvalidOriginKeepaliveTimeout =
  exports.InvalidOriginAccessIdentity =
  exports.InvalidOrigin =
  exports.InvalidMinimumProtocolVersion =
  exports.InvalidLocationCode =
  exports.InvalidLambdaFunctionAssociation =
  exports.InvalidHeadersForS3Origin =
  exports.InvalidGeoRestrictionParameter =
  exports.InvalidFunctionAssociation =
  exports.InvalidForwardCookies =
  exports.InvalidErrorCode =
  exports.InvalidDefaultRootObject =
  exports.IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior =
  exports.DistributionAlreadyExists =
  exports.CreateDistributionResult =
  exports.Distribution =
  exports.CreateDistributionRequest =
  exports.DistributionConfig =
  exports.ViewerCertificate =
  exports.Restrictions =
  exports.GeoRestriction =
  exports.Origins =
  exports.Origin =
  exports.S3OriginConfig =
  exports.OriginShield =
  exports.CustomOriginConfig =
  exports.OriginSslProtocols =
  exports.CustomHeaders =
  exports.OriginCustomHeader =
  exports.OriginGroups =
  exports.OriginGroup =
  exports.OriginGroupMembers =
  exports.OriginGroupMember =
  exports.OriginGroupFailoverCriteria =
  exports.StatusCodes =
  exports.LoggingConfig =
  exports.DefaultCacheBehavior =
  exports.CustomErrorResponses =
  exports.CustomErrorResponse =
  exports.CNAMEAlreadyExists =
  exports.TooManyCloudFrontOriginAccessIdentities =
    void 0;
exports.TooManyFieldLevelEncryptionContentTypeProfiles =
  exports.TooManyFieldLevelEncryptionConfigs =
  exports.QueryArgProfileEmpty =
  exports.NoSuchFieldLevelEncryptionProfile =
  exports.FieldLevelEncryptionConfigAlreadyExists =
  exports.CreateFieldLevelEncryptionConfigResult =
  exports.FieldLevelEncryption =
  exports.CreateFieldLevelEncryptionConfigRequest =
  exports.FieldLevelEncryptionConfig =
  exports.QueryArgProfileConfig =
  exports.QueryArgProfiles =
  exports.QueryArgProfile =
  exports.ContentTypeProfileConfig =
  exports.ContentTypeProfiles =
  exports.ContentTypeProfile =
  exports.InvalidTagging =
  exports.CreateDistributionWithTagsResult =
  exports.CreateDistributionWithTagsRequest =
  exports.DistributionConfigWithTags =
  exports.Tags =
  exports.Tag =
  exports.TrustedSignerDoesNotExist =
  exports.TrustedKeyGroupDoesNotExist =
  exports.TooManyTrustedSigners =
  exports.TooManyQueryStringParameters =
  exports.TooManyOrigins =
  exports.TooManyOriginGroupsPerDistribution =
  exports.TooManyOriginCustomHeaders =
  exports.TooManyLambdaFunctionAssociations =
  exports.TooManyKeyGroupsAssociatedToDistribution =
  exports.TooManyHeadersInForwardedValues =
  exports.TooManyFunctionAssociations =
  exports.TooManyDistributionsWithSingleFunctionARN =
  exports.TooManyDistributionsWithLambdaAssociations =
  exports.TooManyDistributionsWithFunctionAssociations =
  exports.TooManyDistributionsAssociatedToOriginRequestPolicy =
  exports.TooManyDistributionsAssociatedToKeyGroup =
  exports.TooManyDistributionsAssociatedToFieldLevelEncryptionConfig =
  exports.TooManyDistributionsAssociatedToCachePolicy =
  exports.TooManyDistributions =
  exports.TooManyDistributionCNAMEs =
  exports.TooManyCookieNamesInWhiteList =
  exports.TooManyCertificates =
  exports.TooManyCacheBehaviors =
  exports.RealtimeLogConfigOwnerMismatch =
  exports.NoSuchRealtimeLogConfig =
  exports.NoSuchOriginRequestPolicy =
  exports.NoSuchOrigin =
  exports.NoSuchFieldLevelEncryptionConfig =
  exports.NoSuchCachePolicy =
    void 0;
exports.OriginRequestPolicy =
  exports.CreateOriginRequestPolicyRequest =
  exports.OriginRequestPolicyConfig =
  exports.OriginRequestPolicyQueryStringsConfig =
  exports.OriginRequestPolicyHeadersConfig =
  exports.OriginRequestPolicyCookiesConfig =
  exports.UnsupportedOperation =
  exports.CreateMonitoringSubscriptionResult =
  exports.CreateMonitoringSubscriptionRequest =
  exports.MonitoringSubscription =
  exports.RealtimeMetricsSubscriptionConfig =
  exports.RealtimeMetricsSubscriptionStatus =
  exports.TooManyPublicKeysInKeyGroup =
  exports.TooManyKeyGroups =
  exports.KeyGroupAlreadyExists =
  exports.CreateKeyGroupResult =
  exports.KeyGroup =
  exports.CreateKeyGroupRequest =
  exports.KeyGroupConfig =
  exports.TooManyInvalidationsInProgress =
  exports.NoSuchDistribution =
  exports.CreateInvalidationResult =
  exports.Invalidation =
  exports.CreateInvalidationRequest =
  exports.InvalidationBatch =
  exports.Paths =
  exports.TooManyFunctions =
  exports.FunctionSizeLimitExceeded =
  exports.FunctionAlreadyExists =
  exports.CreateFunctionResult =
  exports.FunctionSummary =
  exports.FunctionMetadata =
  exports.FunctionStage =
  exports.CreateFunctionRequest =
  exports.FunctionConfig =
  exports.FunctionRuntime =
  exports.TooManyFieldLevelEncryptionProfiles =
  exports.TooManyFieldLevelEncryptionFieldPatterns =
  exports.TooManyFieldLevelEncryptionEncryptionEntities =
  exports.NoSuchPublicKey =
  exports.FieldLevelEncryptionProfileSizeExceeded =
  exports.FieldLevelEncryptionProfileAlreadyExists =
  exports.CreateFieldLevelEncryptionProfileResult =
  exports.FieldLevelEncryptionProfile =
  exports.CreateFieldLevelEncryptionProfileRequest =
  exports.FieldLevelEncryptionProfileConfig =
  exports.EncryptionEntities =
  exports.EncryptionEntity =
  exports.FieldPatterns =
  exports.TooManyFieldLevelEncryptionQueryArgProfiles =
    void 0;
exports.ResourceInUse =
  exports.NoSuchResource =
  exports.DeleteKeyGroupRequest =
  exports.NoSuchFunctionExists =
  exports.FunctionInUse =
  exports.DeleteFunctionRequest =
  exports.FieldLevelEncryptionProfileInUse =
  exports.DeleteFieldLevelEncryptionProfileRequest =
  exports.FieldLevelEncryptionConfigInUse =
  exports.DeleteFieldLevelEncryptionConfigRequest =
  exports.DistributionNotDisabled =
  exports.DeleteDistributionRequest =
  exports.NoSuchCloudFrontOriginAccessIdentity =
  exports.DeleteCloudFrontOriginAccessIdentityRequest =
  exports.CloudFrontOriginAccessIdentityInUse =
  exports.PreconditionFailed =
  exports.InvalidIfMatchVersion =
  exports.IllegalDelete =
  exports.DeleteCachePolicyRequest =
  exports.CreateStreamingDistributionWithTagsResult =
  exports.CreateStreamingDistributionWithTagsRequest =
  exports.StreamingDistributionConfigWithTags =
  exports.TooManyStreamingDistributions =
  exports.TooManyStreamingDistributionCNAMEs =
  exports.StreamingDistributionAlreadyExists =
  exports.CreateStreamingDistributionResult =
  exports.StreamingDistribution =
  exports.CreateStreamingDistributionRequest =
  exports.StreamingDistributionConfig =
  exports.S3Origin =
  exports.StreamingLoggingConfig =
  exports.TooManyRealtimeLogConfigs =
  exports.RealtimeLogConfigAlreadyExists =
  exports.CreateRealtimeLogConfigResult =
  exports.RealtimeLogConfig =
  exports.CreateRealtimeLogConfigRequest =
  exports.EndPoint =
  exports.KinesisStreamConfig =
  exports.TooManyPublicKeys =
  exports.PublicKeyAlreadyExists =
  exports.CreatePublicKeyResult =
  exports.PublicKey =
  exports.CreatePublicKeyRequest =
  exports.PublicKeyConfig =
  exports.TooManyQueryStringsInOriginRequestPolicy =
  exports.TooManyOriginRequestPolicies =
  exports.TooManyHeadersInOriginRequestPolicy =
  exports.TooManyCookiesInOriginRequestPolicy =
  exports.OriginRequestPolicyAlreadyExists =
  exports.CreateOriginRequestPolicyResult =
    void 0;
exports.GetFieldLevelEncryptionConfigResult =
  exports.GetFieldLevelEncryptionConfigRequest =
  exports.GetFieldLevelEncryptionResult =
  exports.GetFieldLevelEncryptionRequest =
  exports.GetDistributionConfigResult =
  exports.GetDistributionConfigRequest =
  exports.GetDistributionResult =
  exports.GetDistributionRequest =
  exports.GetCloudFrontOriginAccessIdentityConfigResult =
  exports.GetCloudFrontOriginAccessIdentityConfigRequest =
  exports.GetCloudFrontOriginAccessIdentityResult =
  exports.GetCloudFrontOriginAccessIdentityRequest =
  exports.GetCachePolicyConfigResult =
  exports.GetCachePolicyConfigRequest =
  exports.GetCachePolicyResult =
  exports.GetCachePolicyRequest =
  exports.DescribeFunctionResult =
  exports.DescribeFunctionRequest =
  exports.StreamingDistributionNotDisabled =
  exports.NoSuchStreamingDistribution =
  exports.DeleteStreamingDistributionRequest =
  exports.RealtimeLogConfigInUse =
  exports.DeleteRealtimeLogConfigRequest =
  exports.PublicKeyInUse =
  exports.DeletePublicKeyRequest =
  exports.OriginRequestPolicyInUse =
  exports.DeleteOriginRequestPolicyRequest =
  exports.DeleteMonitoringSubscriptionResult =
  exports.DeleteMonitoringSubscriptionRequest =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDenied;
(function (AccessDenied) {
  /**
   * @internal
   */
  AccessDenied.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDenied = exports.AccessDenied || (exports.AccessDenied = {})));
var KeyPairIds;
(function (KeyPairIds) {
  /**
   * @internal
   */
  KeyPairIds.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyPairIds = exports.KeyPairIds || (exports.KeyPairIds = {})));
var KGKeyPairIds;
(function (KGKeyPairIds) {
  /**
   * @internal
   */
  KGKeyPairIds.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KGKeyPairIds = exports.KGKeyPairIds || (exports.KGKeyPairIds = {})));
var ActiveTrustedKeyGroups;
(function (ActiveTrustedKeyGroups) {
  /**
   * @internal
   */
  ActiveTrustedKeyGroups.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ActiveTrustedKeyGroups = exports.ActiveTrustedKeyGroups || (exports.ActiveTrustedKeyGroups = {})));
var Signer;
(function (Signer) {
  /**
   * @internal
   */
  Signer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Signer = exports.Signer || (exports.Signer = {})));
var ActiveTrustedSigners;
(function (ActiveTrustedSigners) {
  /**
   * @internal
   */
  ActiveTrustedSigners.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ActiveTrustedSigners = exports.ActiveTrustedSigners || (exports.ActiveTrustedSigners = {})));
var Aliases;
(function (Aliases) {
  /**
   * @internal
   */
  Aliases.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Aliases = exports.Aliases || (exports.Aliases = {})));
var AliasICPRecordal;
(function (AliasICPRecordal) {
  /**
   * @internal
   */
  AliasICPRecordal.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AliasICPRecordal = exports.AliasICPRecordal || (exports.AliasICPRecordal = {})));
var CachedMethods;
(function (CachedMethods) {
  /**
   * @internal
   */
  CachedMethods.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachedMethods = exports.CachedMethods || (exports.CachedMethods = {})));
var AllowedMethods;
(function (AllowedMethods) {
  /**
   * @internal
   */
  AllowedMethods.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AllowedMethods = exports.AllowedMethods || (exports.AllowedMethods = {})));
var BatchTooLarge;
(function (BatchTooLarge) {
  /**
   * @internal
   */
  BatchTooLarge.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchTooLarge = exports.BatchTooLarge || (exports.BatchTooLarge = {})));
var CookieNames;
(function (CookieNames) {
  /**
   * @internal
   */
  CookieNames.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CookieNames = exports.CookieNames || (exports.CookieNames = {})));
var CookiePreference;
(function (CookiePreference) {
  /**
   * @internal
   */
  CookiePreference.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CookiePreference = exports.CookiePreference || (exports.CookiePreference = {})));
var Headers;
(function (Headers) {
  /**
   * @internal
   */
  Headers.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Headers = exports.Headers || (exports.Headers = {})));
var QueryStringCacheKeys;
(function (QueryStringCacheKeys) {
  /**
   * @internal
   */
  QueryStringCacheKeys.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryStringCacheKeys = exports.QueryStringCacheKeys || (exports.QueryStringCacheKeys = {})));
var ForwardedValues;
(function (ForwardedValues) {
  /**
   * @internal
   */
  ForwardedValues.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ForwardedValues = exports.ForwardedValues || (exports.ForwardedValues = {})));
var FunctionAssociation;
(function (FunctionAssociation) {
  /**
   * @internal
   */
  FunctionAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionAssociation = exports.FunctionAssociation || (exports.FunctionAssociation = {})));
var FunctionAssociations;
(function (FunctionAssociations) {
  /**
   * @internal
   */
  FunctionAssociations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionAssociations = exports.FunctionAssociations || (exports.FunctionAssociations = {})));
var LambdaFunctionAssociation;
(function (LambdaFunctionAssociation) {
  /**
   * @internal
   */
  LambdaFunctionAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LambdaFunctionAssociation = exports.LambdaFunctionAssociation || (exports.LambdaFunctionAssociation = {})));
var LambdaFunctionAssociations;
(function (LambdaFunctionAssociations) {
  /**
   * @internal
   */
  LambdaFunctionAssociations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LambdaFunctionAssociations = exports.LambdaFunctionAssociations || (exports.LambdaFunctionAssociations = {})));
var TrustedKeyGroups;
(function (TrustedKeyGroups) {
  /**
   * @internal
   */
  TrustedKeyGroups.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrustedKeyGroups = exports.TrustedKeyGroups || (exports.TrustedKeyGroups = {})));
var TrustedSigners;
(function (TrustedSigners) {
  /**
   * @internal
   */
  TrustedSigners.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrustedSigners = exports.TrustedSigners || (exports.TrustedSigners = {})));
var CacheBehavior;
(function (CacheBehavior) {
  /**
   * @internal
   */
  CacheBehavior.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CacheBehavior = exports.CacheBehavior || (exports.CacheBehavior = {})));
var CacheBehaviors;
(function (CacheBehaviors) {
  /**
   * @internal
   */
  CacheBehaviors.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CacheBehaviors = exports.CacheBehaviors || (exports.CacheBehaviors = {})));
var CachePolicyCookiesConfig;
(function (CachePolicyCookiesConfig) {
  /**
   * @internal
   */
  CachePolicyCookiesConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicyCookiesConfig = exports.CachePolicyCookiesConfig || (exports.CachePolicyCookiesConfig = {})));
var CachePolicyHeadersConfig;
(function (CachePolicyHeadersConfig) {
  /**
   * @internal
   */
  CachePolicyHeadersConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicyHeadersConfig = exports.CachePolicyHeadersConfig || (exports.CachePolicyHeadersConfig = {})));
var QueryStringNames;
(function (QueryStringNames) {
  /**
   * @internal
   */
  QueryStringNames.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryStringNames = exports.QueryStringNames || (exports.QueryStringNames = {})));
var CachePolicyQueryStringsConfig;
(function (CachePolicyQueryStringsConfig) {
  /**
   * @internal
   */
  CachePolicyQueryStringsConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CachePolicyQueryStringsConfig =
    exports.CachePolicyQueryStringsConfig || (exports.CachePolicyQueryStringsConfig = {}))
);
var ParametersInCacheKeyAndForwardedToOrigin;
(function (ParametersInCacheKeyAndForwardedToOrigin) {
  /**
   * @internal
   */
  ParametersInCacheKeyAndForwardedToOrigin.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ParametersInCacheKeyAndForwardedToOrigin =
    exports.ParametersInCacheKeyAndForwardedToOrigin || (exports.ParametersInCacheKeyAndForwardedToOrigin = {}))
);
var CachePolicyConfig;
(function (CachePolicyConfig) {
  /**
   * @internal
   */
  CachePolicyConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicyConfig = exports.CachePolicyConfig || (exports.CachePolicyConfig = {})));
var CachePolicy;
(function (CachePolicy) {
  /**
   * @internal
   */
  CachePolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicy = exports.CachePolicy || (exports.CachePolicy = {})));
var CachePolicyAlreadyExists;
(function (CachePolicyAlreadyExists) {
  /**
   * @internal
   */
  CachePolicyAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicyAlreadyExists = exports.CachePolicyAlreadyExists || (exports.CachePolicyAlreadyExists = {})));
var CachePolicyInUse;
(function (CachePolicyInUse) {
  /**
   * @internal
   */
  CachePolicyInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicyInUse = exports.CachePolicyInUse || (exports.CachePolicyInUse = {})));
var CachePolicySummary;
(function (CachePolicySummary) {
  /**
   * @internal
   */
  CachePolicySummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicySummary = exports.CachePolicySummary || (exports.CachePolicySummary = {})));
var CachePolicyList;
(function (CachePolicyList) {
  /**
   * @internal
   */
  CachePolicyList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachePolicyList = exports.CachePolicyList || (exports.CachePolicyList = {})));
var CannotChangeImmutablePublicKeyFields;
(function (CannotChangeImmutablePublicKeyFields) {
  /**
   * @internal
   */
  CannotChangeImmutablePublicKeyFields.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CannotChangeImmutablePublicKeyFields =
    exports.CannotChangeImmutablePublicKeyFields || (exports.CannotChangeImmutablePublicKeyFields = {}))
);
var CreateCachePolicyRequest;
(function (CreateCachePolicyRequest) {
  /**
   * @internal
   */
  CreateCachePolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateCachePolicyRequest = exports.CreateCachePolicyRequest || (exports.CreateCachePolicyRequest = {})));
var CreateCachePolicyResult;
(function (CreateCachePolicyResult) {
  /**
   * @internal
   */
  CreateCachePolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateCachePolicyResult = exports.CreateCachePolicyResult || (exports.CreateCachePolicyResult = {})));
var InconsistentQuantities;
(function (InconsistentQuantities) {
  /**
   * @internal
   */
  InconsistentQuantities.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InconsistentQuantities = exports.InconsistentQuantities || (exports.InconsistentQuantities = {})));
var InvalidArgument;
(function (InvalidArgument) {
  /**
   * @internal
   */
  InvalidArgument.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidArgument = exports.InvalidArgument || (exports.InvalidArgument = {})));
var TooManyCachePolicies;
(function (TooManyCachePolicies) {
  /**
   * @internal
   */
  TooManyCachePolicies.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyCachePolicies = exports.TooManyCachePolicies || (exports.TooManyCachePolicies = {})));
var TooManyCookiesInCachePolicy;
(function (TooManyCookiesInCachePolicy) {
  /**
   * @internal
   */
  TooManyCookiesInCachePolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyCookiesInCachePolicy = exports.TooManyCookiesInCachePolicy || (exports.TooManyCookiesInCachePolicy = {})));
var TooManyHeadersInCachePolicy;
(function (TooManyHeadersInCachePolicy) {
  /**
   * @internal
   */
  TooManyHeadersInCachePolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyHeadersInCachePolicy = exports.TooManyHeadersInCachePolicy || (exports.TooManyHeadersInCachePolicy = {})));
var TooManyQueryStringsInCachePolicy;
(function (TooManyQueryStringsInCachePolicy) {
  /**
   * @internal
   */
  TooManyQueryStringsInCachePolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyQueryStringsInCachePolicy =
    exports.TooManyQueryStringsInCachePolicy || (exports.TooManyQueryStringsInCachePolicy = {}))
);
var CloudFrontOriginAccessIdentityAlreadyExists;
(function (CloudFrontOriginAccessIdentityAlreadyExists) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentityAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudFrontOriginAccessIdentityAlreadyExists =
    exports.CloudFrontOriginAccessIdentityAlreadyExists || (exports.CloudFrontOriginAccessIdentityAlreadyExists = {}))
);
var CloudFrontOriginAccessIdentityConfig;
(function (CloudFrontOriginAccessIdentityConfig) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentityConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudFrontOriginAccessIdentityConfig =
    exports.CloudFrontOriginAccessIdentityConfig || (exports.CloudFrontOriginAccessIdentityConfig = {}))
);
var CreateCloudFrontOriginAccessIdentityRequest;
(function (CreateCloudFrontOriginAccessIdentityRequest) {
  /**
   * @internal
   */
  CreateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateCloudFrontOriginAccessIdentityRequest =
    exports.CreateCloudFrontOriginAccessIdentityRequest || (exports.CreateCloudFrontOriginAccessIdentityRequest = {}))
);
var CloudFrontOriginAccessIdentity;
(function (CloudFrontOriginAccessIdentity) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudFrontOriginAccessIdentity =
    exports.CloudFrontOriginAccessIdentity || (exports.CloudFrontOriginAccessIdentity = {}))
);
var CreateCloudFrontOriginAccessIdentityResult;
(function (CreateCloudFrontOriginAccessIdentityResult) {
  /**
   * @internal
   */
  CreateCloudFrontOriginAccessIdentityResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateCloudFrontOriginAccessIdentityResult =
    exports.CreateCloudFrontOriginAccessIdentityResult || (exports.CreateCloudFrontOriginAccessIdentityResult = {}))
);
var MissingBody;
(function (MissingBody) {
  /**
   * @internal
   */
  MissingBody.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MissingBody = exports.MissingBody || (exports.MissingBody = {})));
var TooManyCloudFrontOriginAccessIdentities;
(function (TooManyCloudFrontOriginAccessIdentities) {
  /**
   * @internal
   */
  TooManyCloudFrontOriginAccessIdentities.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyCloudFrontOriginAccessIdentities =
    exports.TooManyCloudFrontOriginAccessIdentities || (exports.TooManyCloudFrontOriginAccessIdentities = {}))
);
var CNAMEAlreadyExists;
(function (CNAMEAlreadyExists) {
  /**
   * @internal
   */
  CNAMEAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CNAMEAlreadyExists = exports.CNAMEAlreadyExists || (exports.CNAMEAlreadyExists = {})));
var CustomErrorResponse;
(function (CustomErrorResponse) {
  /**
   * @internal
   */
  CustomErrorResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomErrorResponse = exports.CustomErrorResponse || (exports.CustomErrorResponse = {})));
var CustomErrorResponses;
(function (CustomErrorResponses) {
  /**
   * @internal
   */
  CustomErrorResponses.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomErrorResponses = exports.CustomErrorResponses || (exports.CustomErrorResponses = {})));
var DefaultCacheBehavior;
(function (DefaultCacheBehavior) {
  /**
   * @internal
   */
  DefaultCacheBehavior.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DefaultCacheBehavior = exports.DefaultCacheBehavior || (exports.DefaultCacheBehavior = {})));
var LoggingConfig;
(function (LoggingConfig) {
  /**
   * @internal
   */
  LoggingConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LoggingConfig = exports.LoggingConfig || (exports.LoggingConfig = {})));
var StatusCodes;
(function (StatusCodes) {
  /**
   * @internal
   */
  StatusCodes.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StatusCodes = exports.StatusCodes || (exports.StatusCodes = {})));
var OriginGroupFailoverCriteria;
(function (OriginGroupFailoverCriteria) {
  /**
   * @internal
   */
  OriginGroupFailoverCriteria.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginGroupFailoverCriteria = exports.OriginGroupFailoverCriteria || (exports.OriginGroupFailoverCriteria = {})));
var OriginGroupMember;
(function (OriginGroupMember) {
  /**
   * @internal
   */
  OriginGroupMember.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginGroupMember = exports.OriginGroupMember || (exports.OriginGroupMember = {})));
var OriginGroupMembers;
(function (OriginGroupMembers) {
  /**
   * @internal
   */
  OriginGroupMembers.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginGroupMembers = exports.OriginGroupMembers || (exports.OriginGroupMembers = {})));
var OriginGroup;
(function (OriginGroup) {
  /**
   * @internal
   */
  OriginGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginGroup = exports.OriginGroup || (exports.OriginGroup = {})));
var OriginGroups;
(function (OriginGroups) {
  /**
   * @internal
   */
  OriginGroups.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginGroups = exports.OriginGroups || (exports.OriginGroups = {})));
var OriginCustomHeader;
(function (OriginCustomHeader) {
  /**
   * @internal
   */
  OriginCustomHeader.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginCustomHeader = exports.OriginCustomHeader || (exports.OriginCustomHeader = {})));
var CustomHeaders;
(function (CustomHeaders) {
  /**
   * @internal
   */
  CustomHeaders.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomHeaders = exports.CustomHeaders || (exports.CustomHeaders = {})));
var OriginSslProtocols;
(function (OriginSslProtocols) {
  /**
   * @internal
   */
  OriginSslProtocols.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginSslProtocols = exports.OriginSslProtocols || (exports.OriginSslProtocols = {})));
var CustomOriginConfig;
(function (CustomOriginConfig) {
  /**
   * @internal
   */
  CustomOriginConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomOriginConfig = exports.CustomOriginConfig || (exports.CustomOriginConfig = {})));
var OriginShield;
(function (OriginShield) {
  /**
   * @internal
   */
  OriginShield.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginShield = exports.OriginShield || (exports.OriginShield = {})));
var S3OriginConfig;
(function (S3OriginConfig) {
  /**
   * @internal
   */
  S3OriginConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3OriginConfig = exports.S3OriginConfig || (exports.S3OriginConfig = {})));
var Origin;
(function (Origin) {
  /**
   * @internal
   */
  Origin.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Origin = exports.Origin || (exports.Origin = {})));
var Origins;
(function (Origins) {
  /**
   * @internal
   */
  Origins.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Origins = exports.Origins || (exports.Origins = {})));
var GeoRestriction;
(function (GeoRestriction) {
  /**
   * @internal
   */
  GeoRestriction.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GeoRestriction = exports.GeoRestriction || (exports.GeoRestriction = {})));
var Restrictions;
(function (Restrictions) {
  /**
   * @internal
   */
  Restrictions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Restrictions = exports.Restrictions || (exports.Restrictions = {})));
var ViewerCertificate;
(function (ViewerCertificate) {
  /**
   * @internal
   */
  ViewerCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ViewerCertificate = exports.ViewerCertificate || (exports.ViewerCertificate = {})));
var DistributionConfig;
(function (DistributionConfig) {
  /**
   * @internal
   */
  DistributionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Comment && { Comment: smithy_client_1.SENSITIVE_STRING }),
  });
})((DistributionConfig = exports.DistributionConfig || (exports.DistributionConfig = {})));
var CreateDistributionRequest;
(function (CreateDistributionRequest) {
  /**
   * @internal
   */
  CreateDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
})((CreateDistributionRequest = exports.CreateDistributionRequest || (exports.CreateDistributionRequest = {})));
var Distribution;
(function (Distribution) {
  /**
   * @internal
   */
  Distribution.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
})((Distribution = exports.Distribution || (exports.Distribution = {})));
var CreateDistributionResult;
(function (CreateDistributionResult) {
  /**
   * @internal
   */
  CreateDistributionResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
})((CreateDistributionResult = exports.CreateDistributionResult || (exports.CreateDistributionResult = {})));
var DistributionAlreadyExists;
(function (DistributionAlreadyExists) {
  /**
   * @internal
   */
  DistributionAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DistributionAlreadyExists = exports.DistributionAlreadyExists || (exports.DistributionAlreadyExists = {})));
var IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior;
(function (IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior) {
  /**
   * @internal
   */
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior =
    exports.IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior ||
    (exports.IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior = {}))
);
var InvalidDefaultRootObject;
(function (InvalidDefaultRootObject) {
  /**
   * @internal
   */
  InvalidDefaultRootObject.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidDefaultRootObject = exports.InvalidDefaultRootObject || (exports.InvalidDefaultRootObject = {})));
var InvalidErrorCode;
(function (InvalidErrorCode) {
  /**
   * @internal
   */
  InvalidErrorCode.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidErrorCode = exports.InvalidErrorCode || (exports.InvalidErrorCode = {})));
var InvalidForwardCookies;
(function (InvalidForwardCookies) {
  /**
   * @internal
   */
  InvalidForwardCookies.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidForwardCookies = exports.InvalidForwardCookies || (exports.InvalidForwardCookies = {})));
var InvalidFunctionAssociation;
(function (InvalidFunctionAssociation) {
  /**
   * @internal
   */
  InvalidFunctionAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidFunctionAssociation = exports.InvalidFunctionAssociation || (exports.InvalidFunctionAssociation = {})));
var InvalidGeoRestrictionParameter;
(function (InvalidGeoRestrictionParameter) {
  /**
   * @internal
   */
  InvalidGeoRestrictionParameter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidGeoRestrictionParameter =
    exports.InvalidGeoRestrictionParameter || (exports.InvalidGeoRestrictionParameter = {}))
);
var InvalidHeadersForS3Origin;
(function (InvalidHeadersForS3Origin) {
  /**
   * @internal
   */
  InvalidHeadersForS3Origin.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidHeadersForS3Origin = exports.InvalidHeadersForS3Origin || (exports.InvalidHeadersForS3Origin = {})));
var InvalidLambdaFunctionAssociation;
(function (InvalidLambdaFunctionAssociation) {
  /**
   * @internal
   */
  InvalidLambdaFunctionAssociation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidLambdaFunctionAssociation =
    exports.InvalidLambdaFunctionAssociation || (exports.InvalidLambdaFunctionAssociation = {}))
);
var InvalidLocationCode;
(function (InvalidLocationCode) {
  /**
   * @internal
   */
  InvalidLocationCode.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidLocationCode = exports.InvalidLocationCode || (exports.InvalidLocationCode = {})));
var InvalidMinimumProtocolVersion;
(function (InvalidMinimumProtocolVersion) {
  /**
   * @internal
   */
  InvalidMinimumProtocolVersion.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidMinimumProtocolVersion =
    exports.InvalidMinimumProtocolVersion || (exports.InvalidMinimumProtocolVersion = {}))
);
var InvalidOrigin;
(function (InvalidOrigin) {
  /**
   * @internal
   */
  InvalidOrigin.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidOrigin = exports.InvalidOrigin || (exports.InvalidOrigin = {})));
var InvalidOriginAccessIdentity;
(function (InvalidOriginAccessIdentity) {
  /**
   * @internal
   */
  InvalidOriginAccessIdentity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidOriginAccessIdentity = exports.InvalidOriginAccessIdentity || (exports.InvalidOriginAccessIdentity = {})));
var InvalidOriginKeepaliveTimeout;
(function (InvalidOriginKeepaliveTimeout) {
  /**
   * @internal
   */
  InvalidOriginKeepaliveTimeout.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidOriginKeepaliveTimeout =
    exports.InvalidOriginKeepaliveTimeout || (exports.InvalidOriginKeepaliveTimeout = {}))
);
var InvalidOriginReadTimeout;
(function (InvalidOriginReadTimeout) {
  /**
   * @internal
   */
  InvalidOriginReadTimeout.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidOriginReadTimeout = exports.InvalidOriginReadTimeout || (exports.InvalidOriginReadTimeout = {})));
var InvalidProtocolSettings;
(function (InvalidProtocolSettings) {
  /**
   * @internal
   */
  InvalidProtocolSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidProtocolSettings = exports.InvalidProtocolSettings || (exports.InvalidProtocolSettings = {})));
var InvalidQueryStringParameters;
(function (InvalidQueryStringParameters) {
  /**
   * @internal
   */
  InvalidQueryStringParameters.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidQueryStringParameters = exports.InvalidQueryStringParameters || (exports.InvalidQueryStringParameters = {}))
);
var InvalidRelativePath;
(function (InvalidRelativePath) {
  /**
   * @internal
   */
  InvalidRelativePath.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRelativePath = exports.InvalidRelativePath || (exports.InvalidRelativePath = {})));
var InvalidRequiredProtocol;
(function (InvalidRequiredProtocol) {
  /**
   * @internal
   */
  InvalidRequiredProtocol.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidRequiredProtocol = exports.InvalidRequiredProtocol || (exports.InvalidRequiredProtocol = {})));
var InvalidResponseCode;
(function (InvalidResponseCode) {
  /**
   * @internal
   */
  InvalidResponseCode.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidResponseCode = exports.InvalidResponseCode || (exports.InvalidResponseCode = {})));
var InvalidTTLOrder;
(function (InvalidTTLOrder) {
  /**
   * @internal
   */
  InvalidTTLOrder.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidTTLOrder = exports.InvalidTTLOrder || (exports.InvalidTTLOrder = {})));
var InvalidViewerCertificate;
(function (InvalidViewerCertificate) {
  /**
   * @internal
   */
  InvalidViewerCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidViewerCertificate = exports.InvalidViewerCertificate || (exports.InvalidViewerCertificate = {})));
var InvalidWebACLId;
(function (InvalidWebACLId) {
  /**
   * @internal
   */
  InvalidWebACLId.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidWebACLId = exports.InvalidWebACLId || (exports.InvalidWebACLId = {})));
var NoSuchCachePolicy;
(function (NoSuchCachePolicy) {
  /**
   * @internal
   */
  NoSuchCachePolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchCachePolicy = exports.NoSuchCachePolicy || (exports.NoSuchCachePolicy = {})));
var NoSuchFieldLevelEncryptionConfig;
(function (NoSuchFieldLevelEncryptionConfig) {
  /**
   * @internal
   */
  NoSuchFieldLevelEncryptionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (NoSuchFieldLevelEncryptionConfig =
    exports.NoSuchFieldLevelEncryptionConfig || (exports.NoSuchFieldLevelEncryptionConfig = {}))
);
var NoSuchOrigin;
(function (NoSuchOrigin) {
  /**
   * @internal
   */
  NoSuchOrigin.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchOrigin = exports.NoSuchOrigin || (exports.NoSuchOrigin = {})));
var NoSuchOriginRequestPolicy;
(function (NoSuchOriginRequestPolicy) {
  /**
   * @internal
   */
  NoSuchOriginRequestPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchOriginRequestPolicy = exports.NoSuchOriginRequestPolicy || (exports.NoSuchOriginRequestPolicy = {})));
var NoSuchRealtimeLogConfig;
(function (NoSuchRealtimeLogConfig) {
  /**
   * @internal
   */
  NoSuchRealtimeLogConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchRealtimeLogConfig = exports.NoSuchRealtimeLogConfig || (exports.NoSuchRealtimeLogConfig = {})));
var RealtimeLogConfigOwnerMismatch;
(function (RealtimeLogConfigOwnerMismatch) {
  /**
   * @internal
   */
  RealtimeLogConfigOwnerMismatch.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RealtimeLogConfigOwnerMismatch =
    exports.RealtimeLogConfigOwnerMismatch || (exports.RealtimeLogConfigOwnerMismatch = {}))
);
var TooManyCacheBehaviors;
(function (TooManyCacheBehaviors) {
  /**
   * @internal
   */
  TooManyCacheBehaviors.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyCacheBehaviors = exports.TooManyCacheBehaviors || (exports.TooManyCacheBehaviors = {})));
var TooManyCertificates;
(function (TooManyCertificates) {
  /**
   * @internal
   */
  TooManyCertificates.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyCertificates = exports.TooManyCertificates || (exports.TooManyCertificates = {})));
var TooManyCookieNamesInWhiteList;
(function (TooManyCookieNamesInWhiteList) {
  /**
   * @internal
   */
  TooManyCookieNamesInWhiteList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyCookieNamesInWhiteList =
    exports.TooManyCookieNamesInWhiteList || (exports.TooManyCookieNamesInWhiteList = {}))
);
var TooManyDistributionCNAMEs;
(function (TooManyDistributionCNAMEs) {
  /**
   * @internal
   */
  TooManyDistributionCNAMEs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyDistributionCNAMEs = exports.TooManyDistributionCNAMEs || (exports.TooManyDistributionCNAMEs = {})));
var TooManyDistributions;
(function (TooManyDistributions) {
  /**
   * @internal
   */
  TooManyDistributions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyDistributions = exports.TooManyDistributions || (exports.TooManyDistributions = {})));
var TooManyDistributionsAssociatedToCachePolicy;
(function (TooManyDistributionsAssociatedToCachePolicy) {
  /**
   * @internal
   */
  TooManyDistributionsAssociatedToCachePolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsAssociatedToCachePolicy =
    exports.TooManyDistributionsAssociatedToCachePolicy || (exports.TooManyDistributionsAssociatedToCachePolicy = {}))
);
var TooManyDistributionsAssociatedToFieldLevelEncryptionConfig;
(function (TooManyDistributionsAssociatedToFieldLevelEncryptionConfig) {
  /**
   * @internal
   */
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsAssociatedToFieldLevelEncryptionConfig =
    exports.TooManyDistributionsAssociatedToFieldLevelEncryptionConfig ||
    (exports.TooManyDistributionsAssociatedToFieldLevelEncryptionConfig = {}))
);
var TooManyDistributionsAssociatedToKeyGroup;
(function (TooManyDistributionsAssociatedToKeyGroup) {
  /**
   * @internal
   */
  TooManyDistributionsAssociatedToKeyGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsAssociatedToKeyGroup =
    exports.TooManyDistributionsAssociatedToKeyGroup || (exports.TooManyDistributionsAssociatedToKeyGroup = {}))
);
var TooManyDistributionsAssociatedToOriginRequestPolicy;
(function (TooManyDistributionsAssociatedToOriginRequestPolicy) {
  /**
   * @internal
   */
  TooManyDistributionsAssociatedToOriginRequestPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsAssociatedToOriginRequestPolicy =
    exports.TooManyDistributionsAssociatedToOriginRequestPolicy ||
    (exports.TooManyDistributionsAssociatedToOriginRequestPolicy = {}))
);
var TooManyDistributionsWithFunctionAssociations;
(function (TooManyDistributionsWithFunctionAssociations) {
  /**
   * @internal
   */
  TooManyDistributionsWithFunctionAssociations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsWithFunctionAssociations =
    exports.TooManyDistributionsWithFunctionAssociations || (exports.TooManyDistributionsWithFunctionAssociations = {}))
);
var TooManyDistributionsWithLambdaAssociations;
(function (TooManyDistributionsWithLambdaAssociations) {
  /**
   * @internal
   */
  TooManyDistributionsWithLambdaAssociations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsWithLambdaAssociations =
    exports.TooManyDistributionsWithLambdaAssociations || (exports.TooManyDistributionsWithLambdaAssociations = {}))
);
var TooManyDistributionsWithSingleFunctionARN;
(function (TooManyDistributionsWithSingleFunctionARN) {
  /**
   * @internal
   */
  TooManyDistributionsWithSingleFunctionARN.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyDistributionsWithSingleFunctionARN =
    exports.TooManyDistributionsWithSingleFunctionARN || (exports.TooManyDistributionsWithSingleFunctionARN = {}))
);
var TooManyFunctionAssociations;
(function (TooManyFunctionAssociations) {
  /**
   * @internal
   */
  TooManyFunctionAssociations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyFunctionAssociations = exports.TooManyFunctionAssociations || (exports.TooManyFunctionAssociations = {})));
var TooManyHeadersInForwardedValues;
(function (TooManyHeadersInForwardedValues) {
  /**
   * @internal
   */
  TooManyHeadersInForwardedValues.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyHeadersInForwardedValues =
    exports.TooManyHeadersInForwardedValues || (exports.TooManyHeadersInForwardedValues = {}))
);
var TooManyKeyGroupsAssociatedToDistribution;
(function (TooManyKeyGroupsAssociatedToDistribution) {
  /**
   * @internal
   */
  TooManyKeyGroupsAssociatedToDistribution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyKeyGroupsAssociatedToDistribution =
    exports.TooManyKeyGroupsAssociatedToDistribution || (exports.TooManyKeyGroupsAssociatedToDistribution = {}))
);
var TooManyLambdaFunctionAssociations;
(function (TooManyLambdaFunctionAssociations) {
  /**
   * @internal
   */
  TooManyLambdaFunctionAssociations.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyLambdaFunctionAssociations =
    exports.TooManyLambdaFunctionAssociations || (exports.TooManyLambdaFunctionAssociations = {}))
);
var TooManyOriginCustomHeaders;
(function (TooManyOriginCustomHeaders) {
  /**
   * @internal
   */
  TooManyOriginCustomHeaders.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyOriginCustomHeaders = exports.TooManyOriginCustomHeaders || (exports.TooManyOriginCustomHeaders = {})));
var TooManyOriginGroupsPerDistribution;
(function (TooManyOriginGroupsPerDistribution) {
  /**
   * @internal
   */
  TooManyOriginGroupsPerDistribution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyOriginGroupsPerDistribution =
    exports.TooManyOriginGroupsPerDistribution || (exports.TooManyOriginGroupsPerDistribution = {}))
);
var TooManyOrigins;
(function (TooManyOrigins) {
  /**
   * @internal
   */
  TooManyOrigins.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyOrigins = exports.TooManyOrigins || (exports.TooManyOrigins = {})));
var TooManyQueryStringParameters;
(function (TooManyQueryStringParameters) {
  /**
   * @internal
   */
  TooManyQueryStringParameters.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyQueryStringParameters = exports.TooManyQueryStringParameters || (exports.TooManyQueryStringParameters = {}))
);
var TooManyTrustedSigners;
(function (TooManyTrustedSigners) {
  /**
   * @internal
   */
  TooManyTrustedSigners.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyTrustedSigners = exports.TooManyTrustedSigners || (exports.TooManyTrustedSigners = {})));
var TrustedKeyGroupDoesNotExist;
(function (TrustedKeyGroupDoesNotExist) {
  /**
   * @internal
   */
  TrustedKeyGroupDoesNotExist.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrustedKeyGroupDoesNotExist = exports.TrustedKeyGroupDoesNotExist || (exports.TrustedKeyGroupDoesNotExist = {})));
var TrustedSignerDoesNotExist;
(function (TrustedSignerDoesNotExist) {
  /**
   * @internal
   */
  TrustedSignerDoesNotExist.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TrustedSignerDoesNotExist = exports.TrustedSignerDoesNotExist || (exports.TrustedSignerDoesNotExist = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var Tags;
(function (Tags) {
  /**
   * @internal
   */
  Tags.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tags = exports.Tags || (exports.Tags = {})));
var DistributionConfigWithTags;
(function (DistributionConfigWithTags) {
  /**
   * @internal
   */
  DistributionConfigWithTags.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
})((DistributionConfigWithTags = exports.DistributionConfigWithTags || (exports.DistributionConfigWithTags = {})));
var CreateDistributionWithTagsRequest;
(function (CreateDistributionWithTagsRequest) {
  /**
   * @internal
   */
  CreateDistributionWithTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DistributionConfigWithTags && {
      DistributionConfigWithTags: DistributionConfigWithTags.filterSensitiveLog(obj.DistributionConfigWithTags),
    }),
  });
})(
  (CreateDistributionWithTagsRequest =
    exports.CreateDistributionWithTagsRequest || (exports.CreateDistributionWithTagsRequest = {}))
);
var CreateDistributionWithTagsResult;
(function (CreateDistributionWithTagsResult) {
  /**
   * @internal
   */
  CreateDistributionWithTagsResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
})(
  (CreateDistributionWithTagsResult =
    exports.CreateDistributionWithTagsResult || (exports.CreateDistributionWithTagsResult = {}))
);
var InvalidTagging;
(function (InvalidTagging) {
  /**
   * @internal
   */
  InvalidTagging.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidTagging = exports.InvalidTagging || (exports.InvalidTagging = {})));
var ContentTypeProfile;
(function (ContentTypeProfile) {
  /**
   * @internal
   */
  ContentTypeProfile.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContentTypeProfile = exports.ContentTypeProfile || (exports.ContentTypeProfile = {})));
var ContentTypeProfiles;
(function (ContentTypeProfiles) {
  /**
   * @internal
   */
  ContentTypeProfiles.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContentTypeProfiles = exports.ContentTypeProfiles || (exports.ContentTypeProfiles = {})));
var ContentTypeProfileConfig;
(function (ContentTypeProfileConfig) {
  /**
   * @internal
   */
  ContentTypeProfileConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContentTypeProfileConfig = exports.ContentTypeProfileConfig || (exports.ContentTypeProfileConfig = {})));
var QueryArgProfile;
(function (QueryArgProfile) {
  /**
   * @internal
   */
  QueryArgProfile.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryArgProfile = exports.QueryArgProfile || (exports.QueryArgProfile = {})));
var QueryArgProfiles;
(function (QueryArgProfiles) {
  /**
   * @internal
   */
  QueryArgProfiles.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryArgProfiles = exports.QueryArgProfiles || (exports.QueryArgProfiles = {})));
var QueryArgProfileConfig;
(function (QueryArgProfileConfig) {
  /**
   * @internal
   */
  QueryArgProfileConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryArgProfileConfig = exports.QueryArgProfileConfig || (exports.QueryArgProfileConfig = {})));
var FieldLevelEncryptionConfig;
(function (FieldLevelEncryptionConfig) {
  /**
   * @internal
   */
  FieldLevelEncryptionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldLevelEncryptionConfig = exports.FieldLevelEncryptionConfig || (exports.FieldLevelEncryptionConfig = {})));
var CreateFieldLevelEncryptionConfigRequest;
(function (CreateFieldLevelEncryptionConfigRequest) {
  /**
   * @internal
   */
  CreateFieldLevelEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateFieldLevelEncryptionConfigRequest =
    exports.CreateFieldLevelEncryptionConfigRequest || (exports.CreateFieldLevelEncryptionConfigRequest = {}))
);
var FieldLevelEncryption;
(function (FieldLevelEncryption) {
  /**
   * @internal
   */
  FieldLevelEncryption.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldLevelEncryption = exports.FieldLevelEncryption || (exports.FieldLevelEncryption = {})));
var CreateFieldLevelEncryptionConfigResult;
(function (CreateFieldLevelEncryptionConfigResult) {
  /**
   * @internal
   */
  CreateFieldLevelEncryptionConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateFieldLevelEncryptionConfigResult =
    exports.CreateFieldLevelEncryptionConfigResult || (exports.CreateFieldLevelEncryptionConfigResult = {}))
);
var FieldLevelEncryptionConfigAlreadyExists;
(function (FieldLevelEncryptionConfigAlreadyExists) {
  /**
   * @internal
   */
  FieldLevelEncryptionConfigAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionConfigAlreadyExists =
    exports.FieldLevelEncryptionConfigAlreadyExists || (exports.FieldLevelEncryptionConfigAlreadyExists = {}))
);
var NoSuchFieldLevelEncryptionProfile;
(function (NoSuchFieldLevelEncryptionProfile) {
  /**
   * @internal
   */
  NoSuchFieldLevelEncryptionProfile.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (NoSuchFieldLevelEncryptionProfile =
    exports.NoSuchFieldLevelEncryptionProfile || (exports.NoSuchFieldLevelEncryptionProfile = {}))
);
var QueryArgProfileEmpty;
(function (QueryArgProfileEmpty) {
  /**
   * @internal
   */
  QueryArgProfileEmpty.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QueryArgProfileEmpty = exports.QueryArgProfileEmpty || (exports.QueryArgProfileEmpty = {})));
var TooManyFieldLevelEncryptionConfigs;
(function (TooManyFieldLevelEncryptionConfigs) {
  /**
   * @internal
   */
  TooManyFieldLevelEncryptionConfigs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyFieldLevelEncryptionConfigs =
    exports.TooManyFieldLevelEncryptionConfigs || (exports.TooManyFieldLevelEncryptionConfigs = {}))
);
var TooManyFieldLevelEncryptionContentTypeProfiles;
(function (TooManyFieldLevelEncryptionContentTypeProfiles) {
  /**
   * @internal
   */
  TooManyFieldLevelEncryptionContentTypeProfiles.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyFieldLevelEncryptionContentTypeProfiles =
    exports.TooManyFieldLevelEncryptionContentTypeProfiles ||
    (exports.TooManyFieldLevelEncryptionContentTypeProfiles = {}))
);
var TooManyFieldLevelEncryptionQueryArgProfiles;
(function (TooManyFieldLevelEncryptionQueryArgProfiles) {
  /**
   * @internal
   */
  TooManyFieldLevelEncryptionQueryArgProfiles.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyFieldLevelEncryptionQueryArgProfiles =
    exports.TooManyFieldLevelEncryptionQueryArgProfiles || (exports.TooManyFieldLevelEncryptionQueryArgProfiles = {}))
);
var FieldPatterns;
(function (FieldPatterns) {
  /**
   * @internal
   */
  FieldPatterns.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldPatterns = exports.FieldPatterns || (exports.FieldPatterns = {})));
var EncryptionEntity;
(function (EncryptionEntity) {
  /**
   * @internal
   */
  EncryptionEntity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EncryptionEntity = exports.EncryptionEntity || (exports.EncryptionEntity = {})));
var EncryptionEntities;
(function (EncryptionEntities) {
  /**
   * @internal
   */
  EncryptionEntities.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EncryptionEntities = exports.EncryptionEntities || (exports.EncryptionEntities = {})));
var FieldLevelEncryptionProfileConfig;
(function (FieldLevelEncryptionProfileConfig) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionProfileConfig =
    exports.FieldLevelEncryptionProfileConfig || (exports.FieldLevelEncryptionProfileConfig = {}))
);
var CreateFieldLevelEncryptionProfileRequest;
(function (CreateFieldLevelEncryptionProfileRequest) {
  /**
   * @internal
   */
  CreateFieldLevelEncryptionProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateFieldLevelEncryptionProfileRequest =
    exports.CreateFieldLevelEncryptionProfileRequest || (exports.CreateFieldLevelEncryptionProfileRequest = {}))
);
var FieldLevelEncryptionProfile;
(function (FieldLevelEncryptionProfile) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfile.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldLevelEncryptionProfile = exports.FieldLevelEncryptionProfile || (exports.FieldLevelEncryptionProfile = {})));
var CreateFieldLevelEncryptionProfileResult;
(function (CreateFieldLevelEncryptionProfileResult) {
  /**
   * @internal
   */
  CreateFieldLevelEncryptionProfileResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateFieldLevelEncryptionProfileResult =
    exports.CreateFieldLevelEncryptionProfileResult || (exports.CreateFieldLevelEncryptionProfileResult = {}))
);
var FieldLevelEncryptionProfileAlreadyExists;
(function (FieldLevelEncryptionProfileAlreadyExists) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionProfileAlreadyExists =
    exports.FieldLevelEncryptionProfileAlreadyExists || (exports.FieldLevelEncryptionProfileAlreadyExists = {}))
);
var FieldLevelEncryptionProfileSizeExceeded;
(function (FieldLevelEncryptionProfileSizeExceeded) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileSizeExceeded.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionProfileSizeExceeded =
    exports.FieldLevelEncryptionProfileSizeExceeded || (exports.FieldLevelEncryptionProfileSizeExceeded = {}))
);
var NoSuchPublicKey;
(function (NoSuchPublicKey) {
  /**
   * @internal
   */
  NoSuchPublicKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchPublicKey = exports.NoSuchPublicKey || (exports.NoSuchPublicKey = {})));
var TooManyFieldLevelEncryptionEncryptionEntities;
(function (TooManyFieldLevelEncryptionEncryptionEntities) {
  /**
   * @internal
   */
  TooManyFieldLevelEncryptionEncryptionEntities.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyFieldLevelEncryptionEncryptionEntities =
    exports.TooManyFieldLevelEncryptionEncryptionEntities ||
    (exports.TooManyFieldLevelEncryptionEncryptionEntities = {}))
);
var TooManyFieldLevelEncryptionFieldPatterns;
(function (TooManyFieldLevelEncryptionFieldPatterns) {
  /**
   * @internal
   */
  TooManyFieldLevelEncryptionFieldPatterns.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyFieldLevelEncryptionFieldPatterns =
    exports.TooManyFieldLevelEncryptionFieldPatterns || (exports.TooManyFieldLevelEncryptionFieldPatterns = {}))
);
var TooManyFieldLevelEncryptionProfiles;
(function (TooManyFieldLevelEncryptionProfiles) {
  /**
   * @internal
   */
  TooManyFieldLevelEncryptionProfiles.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyFieldLevelEncryptionProfiles =
    exports.TooManyFieldLevelEncryptionProfiles || (exports.TooManyFieldLevelEncryptionProfiles = {}))
);
var FunctionRuntime;
(function (FunctionRuntime) {
  FunctionRuntime["cloudfront_js_1_0"] = "cloudfront-js-1.0";
})((FunctionRuntime = exports.FunctionRuntime || (exports.FunctionRuntime = {})));
var FunctionConfig;
(function (FunctionConfig) {
  /**
   * @internal
   */
  FunctionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionConfig = exports.FunctionConfig || (exports.FunctionConfig = {})));
var CreateFunctionRequest;
(function (CreateFunctionRequest) {
  /**
   * @internal
   */
  CreateFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FunctionCode && { FunctionCode: smithy_client_1.SENSITIVE_STRING }),
  });
})((CreateFunctionRequest = exports.CreateFunctionRequest || (exports.CreateFunctionRequest = {})));
var FunctionStage;
(function (FunctionStage) {
  FunctionStage["DEVELOPMENT"] = "DEVELOPMENT";
  FunctionStage["LIVE"] = "LIVE";
})((FunctionStage = exports.FunctionStage || (exports.FunctionStage = {})));
var FunctionMetadata;
(function (FunctionMetadata) {
  /**
   * @internal
   */
  FunctionMetadata.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionMetadata = exports.FunctionMetadata || (exports.FunctionMetadata = {})));
var FunctionSummary;
(function (FunctionSummary) {
  /**
   * @internal
   */
  FunctionSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionSummary = exports.FunctionSummary || (exports.FunctionSummary = {})));
var CreateFunctionResult;
(function (CreateFunctionResult) {
  /**
   * @internal
   */
  CreateFunctionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFunctionResult = exports.CreateFunctionResult || (exports.CreateFunctionResult = {})));
var FunctionAlreadyExists;
(function (FunctionAlreadyExists) {
  /**
   * @internal
   */
  FunctionAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionAlreadyExists = exports.FunctionAlreadyExists || (exports.FunctionAlreadyExists = {})));
var FunctionSizeLimitExceeded;
(function (FunctionSizeLimitExceeded) {
  /**
   * @internal
   */
  FunctionSizeLimitExceeded.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionSizeLimitExceeded = exports.FunctionSizeLimitExceeded || (exports.FunctionSizeLimitExceeded = {})));
var TooManyFunctions;
(function (TooManyFunctions) {
  /**
   * @internal
   */
  TooManyFunctions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyFunctions = exports.TooManyFunctions || (exports.TooManyFunctions = {})));
var Paths;
(function (Paths) {
  /**
   * @internal
   */
  Paths.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Paths = exports.Paths || (exports.Paths = {})));
var InvalidationBatch;
(function (InvalidationBatch) {
  /**
   * @internal
   */
  InvalidationBatch.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidationBatch = exports.InvalidationBatch || (exports.InvalidationBatch = {})));
var CreateInvalidationRequest;
(function (CreateInvalidationRequest) {
  /**
   * @internal
   */
  CreateInvalidationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateInvalidationRequest = exports.CreateInvalidationRequest || (exports.CreateInvalidationRequest = {})));
var Invalidation;
(function (Invalidation) {
  /**
   * @internal
   */
  Invalidation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Invalidation = exports.Invalidation || (exports.Invalidation = {})));
var CreateInvalidationResult;
(function (CreateInvalidationResult) {
  /**
   * @internal
   */
  CreateInvalidationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateInvalidationResult = exports.CreateInvalidationResult || (exports.CreateInvalidationResult = {})));
var NoSuchDistribution;
(function (NoSuchDistribution) {
  /**
   * @internal
   */
  NoSuchDistribution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchDistribution = exports.NoSuchDistribution || (exports.NoSuchDistribution = {})));
var TooManyInvalidationsInProgress;
(function (TooManyInvalidationsInProgress) {
  /**
   * @internal
   */
  TooManyInvalidationsInProgress.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyInvalidationsInProgress =
    exports.TooManyInvalidationsInProgress || (exports.TooManyInvalidationsInProgress = {}))
);
var KeyGroupConfig;
(function (KeyGroupConfig) {
  /**
   * @internal
   */
  KeyGroupConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyGroupConfig = exports.KeyGroupConfig || (exports.KeyGroupConfig = {})));
var CreateKeyGroupRequest;
(function (CreateKeyGroupRequest) {
  /**
   * @internal
   */
  CreateKeyGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateKeyGroupRequest = exports.CreateKeyGroupRequest || (exports.CreateKeyGroupRequest = {})));
var KeyGroup;
(function (KeyGroup) {
  /**
   * @internal
   */
  KeyGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyGroup = exports.KeyGroup || (exports.KeyGroup = {})));
var CreateKeyGroupResult;
(function (CreateKeyGroupResult) {
  /**
   * @internal
   */
  CreateKeyGroupResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateKeyGroupResult = exports.CreateKeyGroupResult || (exports.CreateKeyGroupResult = {})));
var KeyGroupAlreadyExists;
(function (KeyGroupAlreadyExists) {
  /**
   * @internal
   */
  KeyGroupAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyGroupAlreadyExists = exports.KeyGroupAlreadyExists || (exports.KeyGroupAlreadyExists = {})));
var TooManyKeyGroups;
(function (TooManyKeyGroups) {
  /**
   * @internal
   */
  TooManyKeyGroups.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyKeyGroups = exports.TooManyKeyGroups || (exports.TooManyKeyGroups = {})));
var TooManyPublicKeysInKeyGroup;
(function (TooManyPublicKeysInKeyGroup) {
  /**
   * @internal
   */
  TooManyPublicKeysInKeyGroup.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyPublicKeysInKeyGroup = exports.TooManyPublicKeysInKeyGroup || (exports.TooManyPublicKeysInKeyGroup = {})));
var RealtimeMetricsSubscriptionStatus;
(function (RealtimeMetricsSubscriptionStatus) {
  RealtimeMetricsSubscriptionStatus["Disabled"] = "Disabled";
  RealtimeMetricsSubscriptionStatus["Enabled"] = "Enabled";
})(
  (RealtimeMetricsSubscriptionStatus =
    exports.RealtimeMetricsSubscriptionStatus || (exports.RealtimeMetricsSubscriptionStatus = {}))
);
var RealtimeMetricsSubscriptionConfig;
(function (RealtimeMetricsSubscriptionConfig) {
  /**
   * @internal
   */
  RealtimeMetricsSubscriptionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RealtimeMetricsSubscriptionConfig =
    exports.RealtimeMetricsSubscriptionConfig || (exports.RealtimeMetricsSubscriptionConfig = {}))
);
var MonitoringSubscription;
(function (MonitoringSubscription) {
  /**
   * @internal
   */
  MonitoringSubscription.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MonitoringSubscription = exports.MonitoringSubscription || (exports.MonitoringSubscription = {})));
var CreateMonitoringSubscriptionRequest;
(function (CreateMonitoringSubscriptionRequest) {
  /**
   * @internal
   */
  CreateMonitoringSubscriptionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateMonitoringSubscriptionRequest =
    exports.CreateMonitoringSubscriptionRequest || (exports.CreateMonitoringSubscriptionRequest = {}))
);
var CreateMonitoringSubscriptionResult;
(function (CreateMonitoringSubscriptionResult) {
  /**
   * @internal
   */
  CreateMonitoringSubscriptionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateMonitoringSubscriptionResult =
    exports.CreateMonitoringSubscriptionResult || (exports.CreateMonitoringSubscriptionResult = {}))
);
var UnsupportedOperation;
(function (UnsupportedOperation) {
  /**
   * @internal
   */
  UnsupportedOperation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnsupportedOperation = exports.UnsupportedOperation || (exports.UnsupportedOperation = {})));
var OriginRequestPolicyCookiesConfig;
(function (OriginRequestPolicyCookiesConfig) {
  /**
   * @internal
   */
  OriginRequestPolicyCookiesConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OriginRequestPolicyCookiesConfig =
    exports.OriginRequestPolicyCookiesConfig || (exports.OriginRequestPolicyCookiesConfig = {}))
);
var OriginRequestPolicyHeadersConfig;
(function (OriginRequestPolicyHeadersConfig) {
  /**
   * @internal
   */
  OriginRequestPolicyHeadersConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OriginRequestPolicyHeadersConfig =
    exports.OriginRequestPolicyHeadersConfig || (exports.OriginRequestPolicyHeadersConfig = {}))
);
var OriginRequestPolicyQueryStringsConfig;
(function (OriginRequestPolicyQueryStringsConfig) {
  /**
   * @internal
   */
  OriginRequestPolicyQueryStringsConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OriginRequestPolicyQueryStringsConfig =
    exports.OriginRequestPolicyQueryStringsConfig || (exports.OriginRequestPolicyQueryStringsConfig = {}))
);
var OriginRequestPolicyConfig;
(function (OriginRequestPolicyConfig) {
  /**
   * @internal
   */
  OriginRequestPolicyConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginRequestPolicyConfig = exports.OriginRequestPolicyConfig || (exports.OriginRequestPolicyConfig = {})));
var CreateOriginRequestPolicyRequest;
(function (CreateOriginRequestPolicyRequest) {
  /**
   * @internal
   */
  CreateOriginRequestPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateOriginRequestPolicyRequest =
    exports.CreateOriginRequestPolicyRequest || (exports.CreateOriginRequestPolicyRequest = {}))
);
var OriginRequestPolicy;
(function (OriginRequestPolicy) {
  /**
   * @internal
   */
  OriginRequestPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginRequestPolicy = exports.OriginRequestPolicy || (exports.OriginRequestPolicy = {})));
var CreateOriginRequestPolicyResult;
(function (CreateOriginRequestPolicyResult) {
  /**
   * @internal
   */
  CreateOriginRequestPolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateOriginRequestPolicyResult =
    exports.CreateOriginRequestPolicyResult || (exports.CreateOriginRequestPolicyResult = {}))
);
var OriginRequestPolicyAlreadyExists;
(function (OriginRequestPolicyAlreadyExists) {
  /**
   * @internal
   */
  OriginRequestPolicyAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OriginRequestPolicyAlreadyExists =
    exports.OriginRequestPolicyAlreadyExists || (exports.OriginRequestPolicyAlreadyExists = {}))
);
var TooManyCookiesInOriginRequestPolicy;
(function (TooManyCookiesInOriginRequestPolicy) {
  /**
   * @internal
   */
  TooManyCookiesInOriginRequestPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyCookiesInOriginRequestPolicy =
    exports.TooManyCookiesInOriginRequestPolicy || (exports.TooManyCookiesInOriginRequestPolicy = {}))
);
var TooManyHeadersInOriginRequestPolicy;
(function (TooManyHeadersInOriginRequestPolicy) {
  /**
   * @internal
   */
  TooManyHeadersInOriginRequestPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyHeadersInOriginRequestPolicy =
    exports.TooManyHeadersInOriginRequestPolicy || (exports.TooManyHeadersInOriginRequestPolicy = {}))
);
var TooManyOriginRequestPolicies;
(function (TooManyOriginRequestPolicies) {
  /**
   * @internal
   */
  TooManyOriginRequestPolicies.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyOriginRequestPolicies = exports.TooManyOriginRequestPolicies || (exports.TooManyOriginRequestPolicies = {}))
);
var TooManyQueryStringsInOriginRequestPolicy;
(function (TooManyQueryStringsInOriginRequestPolicy) {
  /**
   * @internal
   */
  TooManyQueryStringsInOriginRequestPolicy.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyQueryStringsInOriginRequestPolicy =
    exports.TooManyQueryStringsInOriginRequestPolicy || (exports.TooManyQueryStringsInOriginRequestPolicy = {}))
);
var PublicKeyConfig;
(function (PublicKeyConfig) {
  /**
   * @internal
   */
  PublicKeyConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublicKeyConfig = exports.PublicKeyConfig || (exports.PublicKeyConfig = {})));
var CreatePublicKeyRequest;
(function (CreatePublicKeyRequest) {
  /**
   * @internal
   */
  CreatePublicKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreatePublicKeyRequest = exports.CreatePublicKeyRequest || (exports.CreatePublicKeyRequest = {})));
var PublicKey;
(function (PublicKey) {
  /**
   * @internal
   */
  PublicKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublicKey = exports.PublicKey || (exports.PublicKey = {})));
var CreatePublicKeyResult;
(function (CreatePublicKeyResult) {
  /**
   * @internal
   */
  CreatePublicKeyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreatePublicKeyResult = exports.CreatePublicKeyResult || (exports.CreatePublicKeyResult = {})));
var PublicKeyAlreadyExists;
(function (PublicKeyAlreadyExists) {
  /**
   * @internal
   */
  PublicKeyAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublicKeyAlreadyExists = exports.PublicKeyAlreadyExists || (exports.PublicKeyAlreadyExists = {})));
var TooManyPublicKeys;
(function (TooManyPublicKeys) {
  /**
   * @internal
   */
  TooManyPublicKeys.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyPublicKeys = exports.TooManyPublicKeys || (exports.TooManyPublicKeys = {})));
var KinesisStreamConfig;
(function (KinesisStreamConfig) {
  /**
   * @internal
   */
  KinesisStreamConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KinesisStreamConfig = exports.KinesisStreamConfig || (exports.KinesisStreamConfig = {})));
var EndPoint;
(function (EndPoint) {
  /**
   * @internal
   */
  EndPoint.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EndPoint = exports.EndPoint || (exports.EndPoint = {})));
var CreateRealtimeLogConfigRequest;
(function (CreateRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  CreateRealtimeLogConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateRealtimeLogConfigRequest =
    exports.CreateRealtimeLogConfigRequest || (exports.CreateRealtimeLogConfigRequest = {}))
);
var RealtimeLogConfig;
(function (RealtimeLogConfig) {
  /**
   * @internal
   */
  RealtimeLogConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RealtimeLogConfig = exports.RealtimeLogConfig || (exports.RealtimeLogConfig = {})));
var CreateRealtimeLogConfigResult;
(function (CreateRealtimeLogConfigResult) {
  /**
   * @internal
   */
  CreateRealtimeLogConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateRealtimeLogConfigResult =
    exports.CreateRealtimeLogConfigResult || (exports.CreateRealtimeLogConfigResult = {}))
);
var RealtimeLogConfigAlreadyExists;
(function (RealtimeLogConfigAlreadyExists) {
  /**
   * @internal
   */
  RealtimeLogConfigAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RealtimeLogConfigAlreadyExists =
    exports.RealtimeLogConfigAlreadyExists || (exports.RealtimeLogConfigAlreadyExists = {}))
);
var TooManyRealtimeLogConfigs;
(function (TooManyRealtimeLogConfigs) {
  /**
   * @internal
   */
  TooManyRealtimeLogConfigs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyRealtimeLogConfigs = exports.TooManyRealtimeLogConfigs || (exports.TooManyRealtimeLogConfigs = {})));
var StreamingLoggingConfig;
(function (StreamingLoggingConfig) {
  /**
   * @internal
   */
  StreamingLoggingConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StreamingLoggingConfig = exports.StreamingLoggingConfig || (exports.StreamingLoggingConfig = {})));
var S3Origin;
(function (S3Origin) {
  /**
   * @internal
   */
  S3Origin.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((S3Origin = exports.S3Origin || (exports.S3Origin = {})));
var StreamingDistributionConfig;
(function (StreamingDistributionConfig) {
  /**
   * @internal
   */
  StreamingDistributionConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StreamingDistributionConfig = exports.StreamingDistributionConfig || (exports.StreamingDistributionConfig = {})));
var CreateStreamingDistributionRequest;
(function (CreateStreamingDistributionRequest) {
  /**
   * @internal
   */
  CreateStreamingDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateStreamingDistributionRequest =
    exports.CreateStreamingDistributionRequest || (exports.CreateStreamingDistributionRequest = {}))
);
var StreamingDistribution;
(function (StreamingDistribution) {
  /**
   * @internal
   */
  StreamingDistribution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StreamingDistribution = exports.StreamingDistribution || (exports.StreamingDistribution = {})));
var CreateStreamingDistributionResult;
(function (CreateStreamingDistributionResult) {
  /**
   * @internal
   */
  CreateStreamingDistributionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateStreamingDistributionResult =
    exports.CreateStreamingDistributionResult || (exports.CreateStreamingDistributionResult = {}))
);
var StreamingDistributionAlreadyExists;
(function (StreamingDistributionAlreadyExists) {
  /**
   * @internal
   */
  StreamingDistributionAlreadyExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StreamingDistributionAlreadyExists =
    exports.StreamingDistributionAlreadyExists || (exports.StreamingDistributionAlreadyExists = {}))
);
var TooManyStreamingDistributionCNAMEs;
(function (TooManyStreamingDistributionCNAMEs) {
  /**
   * @internal
   */
  TooManyStreamingDistributionCNAMEs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyStreamingDistributionCNAMEs =
    exports.TooManyStreamingDistributionCNAMEs || (exports.TooManyStreamingDistributionCNAMEs = {}))
);
var TooManyStreamingDistributions;
(function (TooManyStreamingDistributions) {
  /**
   * @internal
   */
  TooManyStreamingDistributions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TooManyStreamingDistributions =
    exports.TooManyStreamingDistributions || (exports.TooManyStreamingDistributions = {}))
);
var StreamingDistributionConfigWithTags;
(function (StreamingDistributionConfigWithTags) {
  /**
   * @internal
   */
  StreamingDistributionConfigWithTags.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StreamingDistributionConfigWithTags =
    exports.StreamingDistributionConfigWithTags || (exports.StreamingDistributionConfigWithTags = {}))
);
var CreateStreamingDistributionWithTagsRequest;
(function (CreateStreamingDistributionWithTagsRequest) {
  /**
   * @internal
   */
  CreateStreamingDistributionWithTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateStreamingDistributionWithTagsRequest =
    exports.CreateStreamingDistributionWithTagsRequest || (exports.CreateStreamingDistributionWithTagsRequest = {}))
);
var CreateStreamingDistributionWithTagsResult;
(function (CreateStreamingDistributionWithTagsResult) {
  /**
   * @internal
   */
  CreateStreamingDistributionWithTagsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateStreamingDistributionWithTagsResult =
    exports.CreateStreamingDistributionWithTagsResult || (exports.CreateStreamingDistributionWithTagsResult = {}))
);
var DeleteCachePolicyRequest;
(function (DeleteCachePolicyRequest) {
  /**
   * @internal
   */
  DeleteCachePolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteCachePolicyRequest = exports.DeleteCachePolicyRequest || (exports.DeleteCachePolicyRequest = {})));
var IllegalDelete;
(function (IllegalDelete) {
  /**
   * @internal
   */
  IllegalDelete.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IllegalDelete = exports.IllegalDelete || (exports.IllegalDelete = {})));
var InvalidIfMatchVersion;
(function (InvalidIfMatchVersion) {
  /**
   * @internal
   */
  InvalidIfMatchVersion.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidIfMatchVersion = exports.InvalidIfMatchVersion || (exports.InvalidIfMatchVersion = {})));
var PreconditionFailed;
(function (PreconditionFailed) {
  /**
   * @internal
   */
  PreconditionFailed.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PreconditionFailed = exports.PreconditionFailed || (exports.PreconditionFailed = {})));
var CloudFrontOriginAccessIdentityInUse;
(function (CloudFrontOriginAccessIdentityInUse) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentityInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudFrontOriginAccessIdentityInUse =
    exports.CloudFrontOriginAccessIdentityInUse || (exports.CloudFrontOriginAccessIdentityInUse = {}))
);
var DeleteCloudFrontOriginAccessIdentityRequest;
(function (DeleteCloudFrontOriginAccessIdentityRequest) {
  /**
   * @internal
   */
  DeleteCloudFrontOriginAccessIdentityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteCloudFrontOriginAccessIdentityRequest =
    exports.DeleteCloudFrontOriginAccessIdentityRequest || (exports.DeleteCloudFrontOriginAccessIdentityRequest = {}))
);
var NoSuchCloudFrontOriginAccessIdentity;
(function (NoSuchCloudFrontOriginAccessIdentity) {
  /**
   * @internal
   */
  NoSuchCloudFrontOriginAccessIdentity.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (NoSuchCloudFrontOriginAccessIdentity =
    exports.NoSuchCloudFrontOriginAccessIdentity || (exports.NoSuchCloudFrontOriginAccessIdentity = {}))
);
var DeleteDistributionRequest;
(function (DeleteDistributionRequest) {
  /**
   * @internal
   */
  DeleteDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDistributionRequest = exports.DeleteDistributionRequest || (exports.DeleteDistributionRequest = {})));
var DistributionNotDisabled;
(function (DistributionNotDisabled) {
  /**
   * @internal
   */
  DistributionNotDisabled.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DistributionNotDisabled = exports.DistributionNotDisabled || (exports.DistributionNotDisabled = {})));
var DeleteFieldLevelEncryptionConfigRequest;
(function (DeleteFieldLevelEncryptionConfigRequest) {
  /**
   * @internal
   */
  DeleteFieldLevelEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteFieldLevelEncryptionConfigRequest =
    exports.DeleteFieldLevelEncryptionConfigRequest || (exports.DeleteFieldLevelEncryptionConfigRequest = {}))
);
var FieldLevelEncryptionConfigInUse;
(function (FieldLevelEncryptionConfigInUse) {
  /**
   * @internal
   */
  FieldLevelEncryptionConfigInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionConfigInUse =
    exports.FieldLevelEncryptionConfigInUse || (exports.FieldLevelEncryptionConfigInUse = {}))
);
var DeleteFieldLevelEncryptionProfileRequest;
(function (DeleteFieldLevelEncryptionProfileRequest) {
  /**
   * @internal
   */
  DeleteFieldLevelEncryptionProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteFieldLevelEncryptionProfileRequest =
    exports.DeleteFieldLevelEncryptionProfileRequest || (exports.DeleteFieldLevelEncryptionProfileRequest = {}))
);
var FieldLevelEncryptionProfileInUse;
(function (FieldLevelEncryptionProfileInUse) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionProfileInUse =
    exports.FieldLevelEncryptionProfileInUse || (exports.FieldLevelEncryptionProfileInUse = {}))
);
var DeleteFunctionRequest;
(function (DeleteFunctionRequest) {
  /**
   * @internal
   */
  DeleteFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFunctionRequest = exports.DeleteFunctionRequest || (exports.DeleteFunctionRequest = {})));
var FunctionInUse;
(function (FunctionInUse) {
  /**
   * @internal
   */
  FunctionInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionInUse = exports.FunctionInUse || (exports.FunctionInUse = {})));
var NoSuchFunctionExists;
(function (NoSuchFunctionExists) {
  /**
   * @internal
   */
  NoSuchFunctionExists.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchFunctionExists = exports.NoSuchFunctionExists || (exports.NoSuchFunctionExists = {})));
var DeleteKeyGroupRequest;
(function (DeleteKeyGroupRequest) {
  /**
   * @internal
   */
  DeleteKeyGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteKeyGroupRequest = exports.DeleteKeyGroupRequest || (exports.DeleteKeyGroupRequest = {})));
var NoSuchResource;
(function (NoSuchResource) {
  /**
   * @internal
   */
  NoSuchResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchResource = exports.NoSuchResource || (exports.NoSuchResource = {})));
var ResourceInUse;
(function (ResourceInUse) {
  /**
   * @internal
   */
  ResourceInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUse = exports.ResourceInUse || (exports.ResourceInUse = {})));
var DeleteMonitoringSubscriptionRequest;
(function (DeleteMonitoringSubscriptionRequest) {
  /**
   * @internal
   */
  DeleteMonitoringSubscriptionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteMonitoringSubscriptionRequest =
    exports.DeleteMonitoringSubscriptionRequest || (exports.DeleteMonitoringSubscriptionRequest = {}))
);
var DeleteMonitoringSubscriptionResult;
(function (DeleteMonitoringSubscriptionResult) {
  /**
   * @internal
   */
  DeleteMonitoringSubscriptionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteMonitoringSubscriptionResult =
    exports.DeleteMonitoringSubscriptionResult || (exports.DeleteMonitoringSubscriptionResult = {}))
);
var DeleteOriginRequestPolicyRequest;
(function (DeleteOriginRequestPolicyRequest) {
  /**
   * @internal
   */
  DeleteOriginRequestPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteOriginRequestPolicyRequest =
    exports.DeleteOriginRequestPolicyRequest || (exports.DeleteOriginRequestPolicyRequest = {}))
);
var OriginRequestPolicyInUse;
(function (OriginRequestPolicyInUse) {
  /**
   * @internal
   */
  OriginRequestPolicyInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginRequestPolicyInUse = exports.OriginRequestPolicyInUse || (exports.OriginRequestPolicyInUse = {})));
var DeletePublicKeyRequest;
(function (DeletePublicKeyRequest) {
  /**
   * @internal
   */
  DeletePublicKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeletePublicKeyRequest = exports.DeletePublicKeyRequest || (exports.DeletePublicKeyRequest = {})));
var PublicKeyInUse;
(function (PublicKeyInUse) {
  /**
   * @internal
   */
  PublicKeyInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublicKeyInUse = exports.PublicKeyInUse || (exports.PublicKeyInUse = {})));
var DeleteRealtimeLogConfigRequest;
(function (DeleteRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  DeleteRealtimeLogConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteRealtimeLogConfigRequest =
    exports.DeleteRealtimeLogConfigRequest || (exports.DeleteRealtimeLogConfigRequest = {}))
);
var RealtimeLogConfigInUse;
(function (RealtimeLogConfigInUse) {
  /**
   * @internal
   */
  RealtimeLogConfigInUse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RealtimeLogConfigInUse = exports.RealtimeLogConfigInUse || (exports.RealtimeLogConfigInUse = {})));
var DeleteStreamingDistributionRequest;
(function (DeleteStreamingDistributionRequest) {
  /**
   * @internal
   */
  DeleteStreamingDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteStreamingDistributionRequest =
    exports.DeleteStreamingDistributionRequest || (exports.DeleteStreamingDistributionRequest = {}))
);
var NoSuchStreamingDistribution;
(function (NoSuchStreamingDistribution) {
  /**
   * @internal
   */
  NoSuchStreamingDistribution.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchStreamingDistribution = exports.NoSuchStreamingDistribution || (exports.NoSuchStreamingDistribution = {})));
var StreamingDistributionNotDisabled;
(function (StreamingDistributionNotDisabled) {
  /**
   * @internal
   */
  StreamingDistributionNotDisabled.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StreamingDistributionNotDisabled =
    exports.StreamingDistributionNotDisabled || (exports.StreamingDistributionNotDisabled = {}))
);
var DescribeFunctionRequest;
(function (DescribeFunctionRequest) {
  /**
   * @internal
   */
  DescribeFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeFunctionRequest = exports.DescribeFunctionRequest || (exports.DescribeFunctionRequest = {})));
var DescribeFunctionResult;
(function (DescribeFunctionResult) {
  /**
   * @internal
   */
  DescribeFunctionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeFunctionResult = exports.DescribeFunctionResult || (exports.DescribeFunctionResult = {})));
var GetCachePolicyRequest;
(function (GetCachePolicyRequest) {
  /**
   * @internal
   */
  GetCachePolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetCachePolicyRequest = exports.GetCachePolicyRequest || (exports.GetCachePolicyRequest = {})));
var GetCachePolicyResult;
(function (GetCachePolicyResult) {
  /**
   * @internal
   */
  GetCachePolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetCachePolicyResult = exports.GetCachePolicyResult || (exports.GetCachePolicyResult = {})));
var GetCachePolicyConfigRequest;
(function (GetCachePolicyConfigRequest) {
  /**
   * @internal
   */
  GetCachePolicyConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetCachePolicyConfigRequest = exports.GetCachePolicyConfigRequest || (exports.GetCachePolicyConfigRequest = {})));
var GetCachePolicyConfigResult;
(function (GetCachePolicyConfigResult) {
  /**
   * @internal
   */
  GetCachePolicyConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetCachePolicyConfigResult = exports.GetCachePolicyConfigResult || (exports.GetCachePolicyConfigResult = {})));
var GetCloudFrontOriginAccessIdentityRequest;
(function (GetCloudFrontOriginAccessIdentityRequest) {
  /**
   * @internal
   */
  GetCloudFrontOriginAccessIdentityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCloudFrontOriginAccessIdentityRequest =
    exports.GetCloudFrontOriginAccessIdentityRequest || (exports.GetCloudFrontOriginAccessIdentityRequest = {}))
);
var GetCloudFrontOriginAccessIdentityResult;
(function (GetCloudFrontOriginAccessIdentityResult) {
  /**
   * @internal
   */
  GetCloudFrontOriginAccessIdentityResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCloudFrontOriginAccessIdentityResult =
    exports.GetCloudFrontOriginAccessIdentityResult || (exports.GetCloudFrontOriginAccessIdentityResult = {}))
);
var GetCloudFrontOriginAccessIdentityConfigRequest;
(function (GetCloudFrontOriginAccessIdentityConfigRequest) {
  /**
   * @internal
   */
  GetCloudFrontOriginAccessIdentityConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCloudFrontOriginAccessIdentityConfigRequest =
    exports.GetCloudFrontOriginAccessIdentityConfigRequest ||
    (exports.GetCloudFrontOriginAccessIdentityConfigRequest = {}))
);
var GetCloudFrontOriginAccessIdentityConfigResult;
(function (GetCloudFrontOriginAccessIdentityConfigResult) {
  /**
   * @internal
   */
  GetCloudFrontOriginAccessIdentityConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetCloudFrontOriginAccessIdentityConfigResult =
    exports.GetCloudFrontOriginAccessIdentityConfigResult ||
    (exports.GetCloudFrontOriginAccessIdentityConfigResult = {}))
);
var GetDistributionRequest;
(function (GetDistributionRequest) {
  /**
   * @internal
   */
  GetDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDistributionRequest = exports.GetDistributionRequest || (exports.GetDistributionRequest = {})));
var GetDistributionResult;
(function (GetDistributionResult) {
  /**
   * @internal
   */
  GetDistributionResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }),
  });
})((GetDistributionResult = exports.GetDistributionResult || (exports.GetDistributionResult = {})));
var GetDistributionConfigRequest;
(function (GetDistributionConfigRequest) {
  /**
   * @internal
   */
  GetDistributionConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetDistributionConfigRequest = exports.GetDistributionConfigRequest || (exports.GetDistributionConfigRequest = {}))
);
var GetDistributionConfigResult;
(function (GetDistributionConfigResult) {
  /**
   * @internal
   */
  GetDistributionConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
})((GetDistributionConfigResult = exports.GetDistributionConfigResult || (exports.GetDistributionConfigResult = {})));
var GetFieldLevelEncryptionRequest;
(function (GetFieldLevelEncryptionRequest) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionRequest =
    exports.GetFieldLevelEncryptionRequest || (exports.GetFieldLevelEncryptionRequest = {}))
);
var GetFieldLevelEncryptionResult;
(function (GetFieldLevelEncryptionResult) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionResult =
    exports.GetFieldLevelEncryptionResult || (exports.GetFieldLevelEncryptionResult = {}))
);
var GetFieldLevelEncryptionConfigRequest;
(function (GetFieldLevelEncryptionConfigRequest) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionConfigRequest =
    exports.GetFieldLevelEncryptionConfigRequest || (exports.GetFieldLevelEncryptionConfigRequest = {}))
);
var GetFieldLevelEncryptionConfigResult;
(function (GetFieldLevelEncryptionConfigResult) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionConfigResult =
    exports.GetFieldLevelEncryptionConfigResult || (exports.GetFieldLevelEncryptionConfigResult = {}))
);
//# sourceMappingURL=models_0.js.map
