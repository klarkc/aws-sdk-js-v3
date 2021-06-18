"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDistributionsByWebACLIdResult =
  exports.ListDistributionsByWebACLIdRequest =
  exports.ListDistributionsByRealtimeLogConfigResult =
  exports.ListDistributionsByRealtimeLogConfigRequest =
  exports.ListDistributionsByOriginRequestPolicyIdResult =
  exports.ListDistributionsByOriginRequestPolicyIdRequest =
  exports.ListDistributionsByKeyGroupResult =
  exports.ListDistributionsByKeyGroupRequest =
  exports.ListDistributionsByCachePolicyIdResult =
  exports.DistributionIdList =
  exports.ListDistributionsByCachePolicyIdRequest =
  exports.ListDistributionsResult =
  exports.DistributionList =
  exports.DistributionSummary =
  exports.ListDistributionsRequest =
  exports.ListCloudFrontOriginAccessIdentitiesResult =
  exports.CloudFrontOriginAccessIdentityList =
  exports.CloudFrontOriginAccessIdentitySummary =
  exports.ListCloudFrontOriginAccessIdentitiesRequest =
  exports.ListCachePoliciesResult =
  exports.ListCachePoliciesRequest =
  exports.GetStreamingDistributionConfigResult =
  exports.GetStreamingDistributionConfigRequest =
  exports.GetStreamingDistributionResult =
  exports.GetStreamingDistributionRequest =
  exports.GetRealtimeLogConfigResult =
  exports.GetRealtimeLogConfigRequest =
  exports.GetPublicKeyConfigResult =
  exports.GetPublicKeyConfigRequest =
  exports.GetPublicKeyResult =
  exports.GetPublicKeyRequest =
  exports.GetOriginRequestPolicyConfigResult =
  exports.GetOriginRequestPolicyConfigRequest =
  exports.GetOriginRequestPolicyResult =
  exports.GetOriginRequestPolicyRequest =
  exports.GetMonitoringSubscriptionResult =
  exports.GetMonitoringSubscriptionRequest =
  exports.GetKeyGroupConfigResult =
  exports.GetKeyGroupConfigRequest =
  exports.GetKeyGroupResult =
  exports.GetKeyGroupRequest =
  exports.NoSuchInvalidation =
  exports.GetInvalidationResult =
  exports.GetInvalidationRequest =
  exports.GetFunctionResult =
  exports.GetFunctionRequest =
  exports.GetFieldLevelEncryptionProfileConfigResult =
  exports.GetFieldLevelEncryptionProfileConfigRequest =
  exports.GetFieldLevelEncryptionProfileResult =
  exports.GetFieldLevelEncryptionProfileRequest =
    void 0;
exports.UpdateCloudFrontOriginAccessIdentityResult =
  exports.UpdateCloudFrontOriginAccessIdentityRequest =
  exports.UpdateCachePolicyResult =
  exports.UpdateCachePolicyRequest =
  exports.IllegalUpdate =
  exports.UntagResourceRequest =
  exports.TagKeys =
  exports.TestFunctionResult =
  exports.TestResult =
  exports.TestFunctionRequest =
  exports.TestFunctionFailed =
  exports.TagResourceRequest =
  exports.PublishFunctionResult =
  exports.PublishFunctionRequest =
  exports.ListTagsForResourceResult =
  exports.ListTagsForResourceRequest =
  exports.ListStreamingDistributionsResult =
  exports.StreamingDistributionList =
  exports.StreamingDistributionSummary =
  exports.ListStreamingDistributionsRequest =
  exports.ListRealtimeLogConfigsResult =
  exports.RealtimeLogConfigs =
  exports.ListRealtimeLogConfigsRequest =
  exports.ListPublicKeysResult =
  exports.PublicKeyList =
  exports.PublicKeySummary =
  exports.ListPublicKeysRequest =
  exports.ListOriginRequestPoliciesResult =
  exports.OriginRequestPolicyList =
  exports.OriginRequestPolicySummary =
  exports.ListOriginRequestPoliciesRequest =
  exports.ListKeyGroupsResult =
  exports.KeyGroupList =
  exports.KeyGroupSummary =
  exports.ListKeyGroupsRequest =
  exports.ListInvalidationsResult =
  exports.InvalidationList =
  exports.InvalidationSummary =
  exports.ListInvalidationsRequest =
  exports.ListFunctionsResult =
  exports.FunctionList =
  exports.ListFunctionsRequest =
  exports.ListFieldLevelEncryptionProfilesResult =
  exports.FieldLevelEncryptionProfileList =
  exports.FieldLevelEncryptionProfileSummary =
  exports.ListFieldLevelEncryptionProfilesRequest =
  exports.ListFieldLevelEncryptionConfigsResult =
  exports.FieldLevelEncryptionList =
  exports.FieldLevelEncryptionSummary =
  exports.ListFieldLevelEncryptionConfigsRequest =
    void 0;
exports.UpdateStreamingDistributionResult =
  exports.UpdateStreamingDistributionRequest =
  exports.UpdateRealtimeLogConfigResult =
  exports.UpdateRealtimeLogConfigRequest =
  exports.UpdatePublicKeyResult =
  exports.UpdatePublicKeyRequest =
  exports.UpdateOriginRequestPolicyResult =
  exports.UpdateOriginRequestPolicyRequest =
  exports.UpdateKeyGroupResult =
  exports.UpdateKeyGroupRequest =
  exports.UpdateFunctionResult =
  exports.UpdateFunctionRequest =
  exports.UpdateFieldLevelEncryptionProfileResult =
  exports.UpdateFieldLevelEncryptionProfileRequest =
  exports.UpdateFieldLevelEncryptionConfigResult =
  exports.UpdateFieldLevelEncryptionConfigRequest =
  exports.UpdateDistributionResult =
  exports.UpdateDistributionRequest =
    void 0;
const models_0_1 = require("./models_0");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var GetFieldLevelEncryptionProfileRequest;
(function (GetFieldLevelEncryptionProfileRequest) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionProfileRequest =
    exports.GetFieldLevelEncryptionProfileRequest || (exports.GetFieldLevelEncryptionProfileRequest = {}))
);
var GetFieldLevelEncryptionProfileResult;
(function (GetFieldLevelEncryptionProfileResult) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionProfileResult =
    exports.GetFieldLevelEncryptionProfileResult || (exports.GetFieldLevelEncryptionProfileResult = {}))
);
var GetFieldLevelEncryptionProfileConfigRequest;
(function (GetFieldLevelEncryptionProfileConfigRequest) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionProfileConfigRequest =
    exports.GetFieldLevelEncryptionProfileConfigRequest || (exports.GetFieldLevelEncryptionProfileConfigRequest = {}))
);
var GetFieldLevelEncryptionProfileConfigResult;
(function (GetFieldLevelEncryptionProfileConfigResult) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetFieldLevelEncryptionProfileConfigResult =
    exports.GetFieldLevelEncryptionProfileConfigResult || (exports.GetFieldLevelEncryptionProfileConfigResult = {}))
);
var GetFunctionRequest;
(function (GetFunctionRequest) {
  /**
   * @internal
   */
  GetFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFunctionRequest = exports.GetFunctionRequest || (exports.GetFunctionRequest = {})));
var GetFunctionResult;
(function (GetFunctionResult) {
  /**
   * @internal
   */
  GetFunctionResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FunctionCode && { FunctionCode: smithy_client_1.SENSITIVE_STRING }),
  });
})((GetFunctionResult = exports.GetFunctionResult || (exports.GetFunctionResult = {})));
var GetInvalidationRequest;
(function (GetInvalidationRequest) {
  /**
   * @internal
   */
  GetInvalidationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetInvalidationRequest = exports.GetInvalidationRequest || (exports.GetInvalidationRequest = {})));
var GetInvalidationResult;
(function (GetInvalidationResult) {
  /**
   * @internal
   */
  GetInvalidationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetInvalidationResult = exports.GetInvalidationResult || (exports.GetInvalidationResult = {})));
var NoSuchInvalidation;
(function (NoSuchInvalidation) {
  /**
   * @internal
   */
  NoSuchInvalidation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NoSuchInvalidation = exports.NoSuchInvalidation || (exports.NoSuchInvalidation = {})));
var GetKeyGroupRequest;
(function (GetKeyGroupRequest) {
  /**
   * @internal
   */
  GetKeyGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetKeyGroupRequest = exports.GetKeyGroupRequest || (exports.GetKeyGroupRequest = {})));
var GetKeyGroupResult;
(function (GetKeyGroupResult) {
  /**
   * @internal
   */
  GetKeyGroupResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetKeyGroupResult = exports.GetKeyGroupResult || (exports.GetKeyGroupResult = {})));
var GetKeyGroupConfigRequest;
(function (GetKeyGroupConfigRequest) {
  /**
   * @internal
   */
  GetKeyGroupConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetKeyGroupConfigRequest = exports.GetKeyGroupConfigRequest || (exports.GetKeyGroupConfigRequest = {})));
var GetKeyGroupConfigResult;
(function (GetKeyGroupConfigResult) {
  /**
   * @internal
   */
  GetKeyGroupConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetKeyGroupConfigResult = exports.GetKeyGroupConfigResult || (exports.GetKeyGroupConfigResult = {})));
var GetMonitoringSubscriptionRequest;
(function (GetMonitoringSubscriptionRequest) {
  /**
   * @internal
   */
  GetMonitoringSubscriptionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetMonitoringSubscriptionRequest =
    exports.GetMonitoringSubscriptionRequest || (exports.GetMonitoringSubscriptionRequest = {}))
);
var GetMonitoringSubscriptionResult;
(function (GetMonitoringSubscriptionResult) {
  /**
   * @internal
   */
  GetMonitoringSubscriptionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetMonitoringSubscriptionResult =
    exports.GetMonitoringSubscriptionResult || (exports.GetMonitoringSubscriptionResult = {}))
);
var GetOriginRequestPolicyRequest;
(function (GetOriginRequestPolicyRequest) {
  /**
   * @internal
   */
  GetOriginRequestPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetOriginRequestPolicyRequest =
    exports.GetOriginRequestPolicyRequest || (exports.GetOriginRequestPolicyRequest = {}))
);
var GetOriginRequestPolicyResult;
(function (GetOriginRequestPolicyResult) {
  /**
   * @internal
   */
  GetOriginRequestPolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetOriginRequestPolicyResult = exports.GetOriginRequestPolicyResult || (exports.GetOriginRequestPolicyResult = {}))
);
var GetOriginRequestPolicyConfigRequest;
(function (GetOriginRequestPolicyConfigRequest) {
  /**
   * @internal
   */
  GetOriginRequestPolicyConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetOriginRequestPolicyConfigRequest =
    exports.GetOriginRequestPolicyConfigRequest || (exports.GetOriginRequestPolicyConfigRequest = {}))
);
var GetOriginRequestPolicyConfigResult;
(function (GetOriginRequestPolicyConfigResult) {
  /**
   * @internal
   */
  GetOriginRequestPolicyConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetOriginRequestPolicyConfigResult =
    exports.GetOriginRequestPolicyConfigResult || (exports.GetOriginRequestPolicyConfigResult = {}))
);
var GetPublicKeyRequest;
(function (GetPublicKeyRequest) {
  /**
   * @internal
   */
  GetPublicKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPublicKeyRequest = exports.GetPublicKeyRequest || (exports.GetPublicKeyRequest = {})));
var GetPublicKeyResult;
(function (GetPublicKeyResult) {
  /**
   * @internal
   */
  GetPublicKeyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPublicKeyResult = exports.GetPublicKeyResult || (exports.GetPublicKeyResult = {})));
var GetPublicKeyConfigRequest;
(function (GetPublicKeyConfigRequest) {
  /**
   * @internal
   */
  GetPublicKeyConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPublicKeyConfigRequest = exports.GetPublicKeyConfigRequest || (exports.GetPublicKeyConfigRequest = {})));
var GetPublicKeyConfigResult;
(function (GetPublicKeyConfigResult) {
  /**
   * @internal
   */
  GetPublicKeyConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetPublicKeyConfigResult = exports.GetPublicKeyConfigResult || (exports.GetPublicKeyConfigResult = {})));
var GetRealtimeLogConfigRequest;
(function (GetRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  GetRealtimeLogConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRealtimeLogConfigRequest = exports.GetRealtimeLogConfigRequest || (exports.GetRealtimeLogConfigRequest = {})));
var GetRealtimeLogConfigResult;
(function (GetRealtimeLogConfigResult) {
  /**
   * @internal
   */
  GetRealtimeLogConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRealtimeLogConfigResult = exports.GetRealtimeLogConfigResult || (exports.GetRealtimeLogConfigResult = {})));
var GetStreamingDistributionRequest;
(function (GetStreamingDistributionRequest) {
  /**
   * @internal
   */
  GetStreamingDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetStreamingDistributionRequest =
    exports.GetStreamingDistributionRequest || (exports.GetStreamingDistributionRequest = {}))
);
var GetStreamingDistributionResult;
(function (GetStreamingDistributionResult) {
  /**
   * @internal
   */
  GetStreamingDistributionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetStreamingDistributionResult =
    exports.GetStreamingDistributionResult || (exports.GetStreamingDistributionResult = {}))
);
var GetStreamingDistributionConfigRequest;
(function (GetStreamingDistributionConfigRequest) {
  /**
   * @internal
   */
  GetStreamingDistributionConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetStreamingDistributionConfigRequest =
    exports.GetStreamingDistributionConfigRequest || (exports.GetStreamingDistributionConfigRequest = {}))
);
var GetStreamingDistributionConfigResult;
(function (GetStreamingDistributionConfigResult) {
  /**
   * @internal
   */
  GetStreamingDistributionConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetStreamingDistributionConfigResult =
    exports.GetStreamingDistributionConfigResult || (exports.GetStreamingDistributionConfigResult = {}))
);
var ListCachePoliciesRequest;
(function (ListCachePoliciesRequest) {
  /**
   * @internal
   */
  ListCachePoliciesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListCachePoliciesRequest = exports.ListCachePoliciesRequest || (exports.ListCachePoliciesRequest = {})));
var ListCachePoliciesResult;
(function (ListCachePoliciesResult) {
  /**
   * @internal
   */
  ListCachePoliciesResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListCachePoliciesResult = exports.ListCachePoliciesResult || (exports.ListCachePoliciesResult = {})));
var ListCloudFrontOriginAccessIdentitiesRequest;
(function (ListCloudFrontOriginAccessIdentitiesRequest) {
  /**
   * @internal
   */
  ListCloudFrontOriginAccessIdentitiesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListCloudFrontOriginAccessIdentitiesRequest =
    exports.ListCloudFrontOriginAccessIdentitiesRequest || (exports.ListCloudFrontOriginAccessIdentitiesRequest = {}))
);
var CloudFrontOriginAccessIdentitySummary;
(function (CloudFrontOriginAccessIdentitySummary) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentitySummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudFrontOriginAccessIdentitySummary =
    exports.CloudFrontOriginAccessIdentitySummary || (exports.CloudFrontOriginAccessIdentitySummary = {}))
);
var CloudFrontOriginAccessIdentityList;
(function (CloudFrontOriginAccessIdentityList) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentityList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CloudFrontOriginAccessIdentityList =
    exports.CloudFrontOriginAccessIdentityList || (exports.CloudFrontOriginAccessIdentityList = {}))
);
var ListCloudFrontOriginAccessIdentitiesResult;
(function (ListCloudFrontOriginAccessIdentitiesResult) {
  /**
   * @internal
   */
  ListCloudFrontOriginAccessIdentitiesResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListCloudFrontOriginAccessIdentitiesResult =
    exports.ListCloudFrontOriginAccessIdentitiesResult || (exports.ListCloudFrontOriginAccessIdentitiesResult = {}))
);
var ListDistributionsRequest;
(function (ListDistributionsRequest) {
  /**
   * @internal
   */
  ListDistributionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDistributionsRequest = exports.ListDistributionsRequest || (exports.ListDistributionsRequest = {})));
var DistributionSummary;
(function (DistributionSummary) {
  /**
   * @internal
   */
  DistributionSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DistributionSummary = exports.DistributionSummary || (exports.DistributionSummary = {})));
var DistributionList;
(function (DistributionList) {
  /**
   * @internal
   */
  DistributionList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DistributionList = exports.DistributionList || (exports.DistributionList = {})));
var ListDistributionsResult;
(function (ListDistributionsResult) {
  /**
   * @internal
   */
  ListDistributionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDistributionsResult = exports.ListDistributionsResult || (exports.ListDistributionsResult = {})));
var ListDistributionsByCachePolicyIdRequest;
(function (ListDistributionsByCachePolicyIdRequest) {
  /**
   * @internal
   */
  ListDistributionsByCachePolicyIdRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByCachePolicyIdRequest =
    exports.ListDistributionsByCachePolicyIdRequest || (exports.ListDistributionsByCachePolicyIdRequest = {}))
);
var DistributionIdList;
(function (DistributionIdList) {
  /**
   * @internal
   */
  DistributionIdList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DistributionIdList = exports.DistributionIdList || (exports.DistributionIdList = {})));
var ListDistributionsByCachePolicyIdResult;
(function (ListDistributionsByCachePolicyIdResult) {
  /**
   * @internal
   */
  ListDistributionsByCachePolicyIdResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByCachePolicyIdResult =
    exports.ListDistributionsByCachePolicyIdResult || (exports.ListDistributionsByCachePolicyIdResult = {}))
);
var ListDistributionsByKeyGroupRequest;
(function (ListDistributionsByKeyGroupRequest) {
  /**
   * @internal
   */
  ListDistributionsByKeyGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByKeyGroupRequest =
    exports.ListDistributionsByKeyGroupRequest || (exports.ListDistributionsByKeyGroupRequest = {}))
);
var ListDistributionsByKeyGroupResult;
(function (ListDistributionsByKeyGroupResult) {
  /**
   * @internal
   */
  ListDistributionsByKeyGroupResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByKeyGroupResult =
    exports.ListDistributionsByKeyGroupResult || (exports.ListDistributionsByKeyGroupResult = {}))
);
var ListDistributionsByOriginRequestPolicyIdRequest;
(function (ListDistributionsByOriginRequestPolicyIdRequest) {
  /**
   * @internal
   */
  ListDistributionsByOriginRequestPolicyIdRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByOriginRequestPolicyIdRequest =
    exports.ListDistributionsByOriginRequestPolicyIdRequest ||
    (exports.ListDistributionsByOriginRequestPolicyIdRequest = {}))
);
var ListDistributionsByOriginRequestPolicyIdResult;
(function (ListDistributionsByOriginRequestPolicyIdResult) {
  /**
   * @internal
   */
  ListDistributionsByOriginRequestPolicyIdResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByOriginRequestPolicyIdResult =
    exports.ListDistributionsByOriginRequestPolicyIdResult ||
    (exports.ListDistributionsByOriginRequestPolicyIdResult = {}))
);
var ListDistributionsByRealtimeLogConfigRequest;
(function (ListDistributionsByRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  ListDistributionsByRealtimeLogConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByRealtimeLogConfigRequest =
    exports.ListDistributionsByRealtimeLogConfigRequest || (exports.ListDistributionsByRealtimeLogConfigRequest = {}))
);
var ListDistributionsByRealtimeLogConfigResult;
(function (ListDistributionsByRealtimeLogConfigResult) {
  /**
   * @internal
   */
  ListDistributionsByRealtimeLogConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByRealtimeLogConfigResult =
    exports.ListDistributionsByRealtimeLogConfigResult || (exports.ListDistributionsByRealtimeLogConfigResult = {}))
);
var ListDistributionsByWebACLIdRequest;
(function (ListDistributionsByWebACLIdRequest) {
  /**
   * @internal
   */
  ListDistributionsByWebACLIdRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByWebACLIdRequest =
    exports.ListDistributionsByWebACLIdRequest || (exports.ListDistributionsByWebACLIdRequest = {}))
);
var ListDistributionsByWebACLIdResult;
(function (ListDistributionsByWebACLIdResult) {
  /**
   * @internal
   */
  ListDistributionsByWebACLIdResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListDistributionsByWebACLIdResult =
    exports.ListDistributionsByWebACLIdResult || (exports.ListDistributionsByWebACLIdResult = {}))
);
var ListFieldLevelEncryptionConfigsRequest;
(function (ListFieldLevelEncryptionConfigsRequest) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionConfigsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListFieldLevelEncryptionConfigsRequest =
    exports.ListFieldLevelEncryptionConfigsRequest || (exports.ListFieldLevelEncryptionConfigsRequest = {}))
);
var FieldLevelEncryptionSummary;
(function (FieldLevelEncryptionSummary) {
  /**
   * @internal
   */
  FieldLevelEncryptionSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldLevelEncryptionSummary = exports.FieldLevelEncryptionSummary || (exports.FieldLevelEncryptionSummary = {})));
var FieldLevelEncryptionList;
(function (FieldLevelEncryptionList) {
  /**
   * @internal
   */
  FieldLevelEncryptionList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FieldLevelEncryptionList = exports.FieldLevelEncryptionList || (exports.FieldLevelEncryptionList = {})));
var ListFieldLevelEncryptionConfigsResult;
(function (ListFieldLevelEncryptionConfigsResult) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionConfigsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListFieldLevelEncryptionConfigsResult =
    exports.ListFieldLevelEncryptionConfigsResult || (exports.ListFieldLevelEncryptionConfigsResult = {}))
);
var ListFieldLevelEncryptionProfilesRequest;
(function (ListFieldLevelEncryptionProfilesRequest) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionProfilesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListFieldLevelEncryptionProfilesRequest =
    exports.ListFieldLevelEncryptionProfilesRequest || (exports.ListFieldLevelEncryptionProfilesRequest = {}))
);
var FieldLevelEncryptionProfileSummary;
(function (FieldLevelEncryptionProfileSummary) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionProfileSummary =
    exports.FieldLevelEncryptionProfileSummary || (exports.FieldLevelEncryptionProfileSummary = {}))
);
var FieldLevelEncryptionProfileList;
(function (FieldLevelEncryptionProfileList) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FieldLevelEncryptionProfileList =
    exports.FieldLevelEncryptionProfileList || (exports.FieldLevelEncryptionProfileList = {}))
);
var ListFieldLevelEncryptionProfilesResult;
(function (ListFieldLevelEncryptionProfilesResult) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionProfilesResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListFieldLevelEncryptionProfilesResult =
    exports.ListFieldLevelEncryptionProfilesResult || (exports.ListFieldLevelEncryptionProfilesResult = {}))
);
var ListFunctionsRequest;
(function (ListFunctionsRequest) {
  /**
   * @internal
   */
  ListFunctionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFunctionsRequest = exports.ListFunctionsRequest || (exports.ListFunctionsRequest = {})));
var FunctionList;
(function (FunctionList) {
  /**
   * @internal
   */
  FunctionList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionList = exports.FunctionList || (exports.FunctionList = {})));
var ListFunctionsResult;
(function (ListFunctionsResult) {
  /**
   * @internal
   */
  ListFunctionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFunctionsResult = exports.ListFunctionsResult || (exports.ListFunctionsResult = {})));
var ListInvalidationsRequest;
(function (ListInvalidationsRequest) {
  /**
   * @internal
   */
  ListInvalidationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListInvalidationsRequest = exports.ListInvalidationsRequest || (exports.ListInvalidationsRequest = {})));
var InvalidationSummary;
(function (InvalidationSummary) {
  /**
   * @internal
   */
  InvalidationSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidationSummary = exports.InvalidationSummary || (exports.InvalidationSummary = {})));
var InvalidationList;
(function (InvalidationList) {
  /**
   * @internal
   */
  InvalidationList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidationList = exports.InvalidationList || (exports.InvalidationList = {})));
var ListInvalidationsResult;
(function (ListInvalidationsResult) {
  /**
   * @internal
   */
  ListInvalidationsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListInvalidationsResult = exports.ListInvalidationsResult || (exports.ListInvalidationsResult = {})));
var ListKeyGroupsRequest;
(function (ListKeyGroupsRequest) {
  /**
   * @internal
   */
  ListKeyGroupsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListKeyGroupsRequest = exports.ListKeyGroupsRequest || (exports.ListKeyGroupsRequest = {})));
var KeyGroupSummary;
(function (KeyGroupSummary) {
  /**
   * @internal
   */
  KeyGroupSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyGroupSummary = exports.KeyGroupSummary || (exports.KeyGroupSummary = {})));
var KeyGroupList;
(function (KeyGroupList) {
  /**
   * @internal
   */
  KeyGroupList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((KeyGroupList = exports.KeyGroupList || (exports.KeyGroupList = {})));
var ListKeyGroupsResult;
(function (ListKeyGroupsResult) {
  /**
   * @internal
   */
  ListKeyGroupsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListKeyGroupsResult = exports.ListKeyGroupsResult || (exports.ListKeyGroupsResult = {})));
var ListOriginRequestPoliciesRequest;
(function (ListOriginRequestPoliciesRequest) {
  /**
   * @internal
   */
  ListOriginRequestPoliciesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListOriginRequestPoliciesRequest =
    exports.ListOriginRequestPoliciesRequest || (exports.ListOriginRequestPoliciesRequest = {}))
);
var OriginRequestPolicySummary;
(function (OriginRequestPolicySummary) {
  /**
   * @internal
   */
  OriginRequestPolicySummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginRequestPolicySummary = exports.OriginRequestPolicySummary || (exports.OriginRequestPolicySummary = {})));
var OriginRequestPolicyList;
(function (OriginRequestPolicyList) {
  /**
   * @internal
   */
  OriginRequestPolicyList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OriginRequestPolicyList = exports.OriginRequestPolicyList || (exports.OriginRequestPolicyList = {})));
var ListOriginRequestPoliciesResult;
(function (ListOriginRequestPoliciesResult) {
  /**
   * @internal
   */
  ListOriginRequestPoliciesResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListOriginRequestPoliciesResult =
    exports.ListOriginRequestPoliciesResult || (exports.ListOriginRequestPoliciesResult = {}))
);
var ListPublicKeysRequest;
(function (ListPublicKeysRequest) {
  /**
   * @internal
   */
  ListPublicKeysRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListPublicKeysRequest = exports.ListPublicKeysRequest || (exports.ListPublicKeysRequest = {})));
var PublicKeySummary;
(function (PublicKeySummary) {
  /**
   * @internal
   */
  PublicKeySummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublicKeySummary = exports.PublicKeySummary || (exports.PublicKeySummary = {})));
var PublicKeyList;
(function (PublicKeyList) {
  /**
   * @internal
   */
  PublicKeyList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublicKeyList = exports.PublicKeyList || (exports.PublicKeyList = {})));
var ListPublicKeysResult;
(function (ListPublicKeysResult) {
  /**
   * @internal
   */
  ListPublicKeysResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListPublicKeysResult = exports.ListPublicKeysResult || (exports.ListPublicKeysResult = {})));
var ListRealtimeLogConfigsRequest;
(function (ListRealtimeLogConfigsRequest) {
  /**
   * @internal
   */
  ListRealtimeLogConfigsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListRealtimeLogConfigsRequest =
    exports.ListRealtimeLogConfigsRequest || (exports.ListRealtimeLogConfigsRequest = {}))
);
var RealtimeLogConfigs;
(function (RealtimeLogConfigs) {
  /**
   * @internal
   */
  RealtimeLogConfigs.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RealtimeLogConfigs = exports.RealtimeLogConfigs || (exports.RealtimeLogConfigs = {})));
var ListRealtimeLogConfigsResult;
(function (ListRealtimeLogConfigsResult) {
  /**
   * @internal
   */
  ListRealtimeLogConfigsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListRealtimeLogConfigsResult = exports.ListRealtimeLogConfigsResult || (exports.ListRealtimeLogConfigsResult = {}))
);
var ListStreamingDistributionsRequest;
(function (ListStreamingDistributionsRequest) {
  /**
   * @internal
   */
  ListStreamingDistributionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListStreamingDistributionsRequest =
    exports.ListStreamingDistributionsRequest || (exports.ListStreamingDistributionsRequest = {}))
);
var StreamingDistributionSummary;
(function (StreamingDistributionSummary) {
  /**
   * @internal
   */
  StreamingDistributionSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StreamingDistributionSummary = exports.StreamingDistributionSummary || (exports.StreamingDistributionSummary = {}))
);
var StreamingDistributionList;
(function (StreamingDistributionList) {
  /**
   * @internal
   */
  StreamingDistributionList.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StreamingDistributionList = exports.StreamingDistributionList || (exports.StreamingDistributionList = {})));
var ListStreamingDistributionsResult;
(function (ListStreamingDistributionsResult) {
  /**
   * @internal
   */
  ListStreamingDistributionsResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListStreamingDistributionsResult =
    exports.ListStreamingDistributionsResult || (exports.ListStreamingDistributionsResult = {}))
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
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
  /**
   * @internal
   */
  ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {})));
var PublishFunctionRequest;
(function (PublishFunctionRequest) {
  /**
   * @internal
   */
  PublishFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublishFunctionRequest = exports.PublishFunctionRequest || (exports.PublishFunctionRequest = {})));
var PublishFunctionResult;
(function (PublishFunctionResult) {
  /**
   * @internal
   */
  PublishFunctionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PublishFunctionResult = exports.PublishFunctionResult || (exports.PublishFunctionResult = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TestFunctionFailed;
(function (TestFunctionFailed) {
  /**
   * @internal
   */
  TestFunctionFailed.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TestFunctionFailed = exports.TestFunctionFailed || (exports.TestFunctionFailed = {})));
var TestFunctionRequest;
(function (TestFunctionRequest) {
  /**
   * @internal
   */
  TestFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventObject && { EventObject: smithy_client_1.SENSITIVE_STRING }),
  });
})((TestFunctionRequest = exports.TestFunctionRequest || (exports.TestFunctionRequest = {})));
var TestResult;
(function (TestResult) {
  /**
   * @internal
   */
  TestResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TestResult = exports.TestResult || (exports.TestResult = {})));
var TestFunctionResult;
(function (TestFunctionResult) {
  /**
   * @internal
   */
  TestFunctionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TestFunctionResult = exports.TestFunctionResult || (exports.TestFunctionResult = {})));
var TagKeys;
(function (TagKeys) {
  /**
   * @internal
   */
  TagKeys.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagKeys = exports.TagKeys || (exports.TagKeys = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var IllegalUpdate;
(function (IllegalUpdate) {
  /**
   * @internal
   */
  IllegalUpdate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IllegalUpdate = exports.IllegalUpdate || (exports.IllegalUpdate = {})));
var UpdateCachePolicyRequest;
(function (UpdateCachePolicyRequest) {
  /**
   * @internal
   */
  UpdateCachePolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateCachePolicyRequest = exports.UpdateCachePolicyRequest || (exports.UpdateCachePolicyRequest = {})));
var UpdateCachePolicyResult;
(function (UpdateCachePolicyResult) {
  /**
   * @internal
   */
  UpdateCachePolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateCachePolicyResult = exports.UpdateCachePolicyResult || (exports.UpdateCachePolicyResult = {})));
var UpdateCloudFrontOriginAccessIdentityRequest;
(function (UpdateCloudFrontOriginAccessIdentityRequest) {
  /**
   * @internal
   */
  UpdateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateCloudFrontOriginAccessIdentityRequest =
    exports.UpdateCloudFrontOriginAccessIdentityRequest || (exports.UpdateCloudFrontOriginAccessIdentityRequest = {}))
);
var UpdateCloudFrontOriginAccessIdentityResult;
(function (UpdateCloudFrontOriginAccessIdentityResult) {
  /**
   * @internal
   */
  UpdateCloudFrontOriginAccessIdentityResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateCloudFrontOriginAccessIdentityResult =
    exports.UpdateCloudFrontOriginAccessIdentityResult || (exports.UpdateCloudFrontOriginAccessIdentityResult = {}))
);
var UpdateDistributionRequest;
(function (UpdateDistributionRequest) {
  /**
   * @internal
   */
  UpdateDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DistributionConfig && {
      DistributionConfig: models_0_1.DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
    }),
  });
})((UpdateDistributionRequest = exports.UpdateDistributionRequest || (exports.UpdateDistributionRequest = {})));
var UpdateDistributionResult;
(function (UpdateDistributionResult) {
  /**
   * @internal
   */
  UpdateDistributionResult.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Distribution && { Distribution: models_0_1.Distribution.filterSensitiveLog(obj.Distribution) }),
  });
})((UpdateDistributionResult = exports.UpdateDistributionResult || (exports.UpdateDistributionResult = {})));
var UpdateFieldLevelEncryptionConfigRequest;
(function (UpdateFieldLevelEncryptionConfigRequest) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateFieldLevelEncryptionConfigRequest =
    exports.UpdateFieldLevelEncryptionConfigRequest || (exports.UpdateFieldLevelEncryptionConfigRequest = {}))
);
var UpdateFieldLevelEncryptionConfigResult;
(function (UpdateFieldLevelEncryptionConfigResult) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateFieldLevelEncryptionConfigResult =
    exports.UpdateFieldLevelEncryptionConfigResult || (exports.UpdateFieldLevelEncryptionConfigResult = {}))
);
var UpdateFieldLevelEncryptionProfileRequest;
(function (UpdateFieldLevelEncryptionProfileRequest) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionProfileRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateFieldLevelEncryptionProfileRequest =
    exports.UpdateFieldLevelEncryptionProfileRequest || (exports.UpdateFieldLevelEncryptionProfileRequest = {}))
);
var UpdateFieldLevelEncryptionProfileResult;
(function (UpdateFieldLevelEncryptionProfileResult) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionProfileResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateFieldLevelEncryptionProfileResult =
    exports.UpdateFieldLevelEncryptionProfileResult || (exports.UpdateFieldLevelEncryptionProfileResult = {}))
);
var UpdateFunctionRequest;
(function (UpdateFunctionRequest) {
  /**
   * @internal
   */
  UpdateFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.FunctionCode && { FunctionCode: smithy_client_1.SENSITIVE_STRING }),
  });
})((UpdateFunctionRequest = exports.UpdateFunctionRequest || (exports.UpdateFunctionRequest = {})));
var UpdateFunctionResult;
(function (UpdateFunctionResult) {
  /**
   * @internal
   */
  UpdateFunctionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFunctionResult = exports.UpdateFunctionResult || (exports.UpdateFunctionResult = {})));
var UpdateKeyGroupRequest;
(function (UpdateKeyGroupRequest) {
  /**
   * @internal
   */
  UpdateKeyGroupRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateKeyGroupRequest = exports.UpdateKeyGroupRequest || (exports.UpdateKeyGroupRequest = {})));
var UpdateKeyGroupResult;
(function (UpdateKeyGroupResult) {
  /**
   * @internal
   */
  UpdateKeyGroupResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateKeyGroupResult = exports.UpdateKeyGroupResult || (exports.UpdateKeyGroupResult = {})));
var UpdateOriginRequestPolicyRequest;
(function (UpdateOriginRequestPolicyRequest) {
  /**
   * @internal
   */
  UpdateOriginRequestPolicyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateOriginRequestPolicyRequest =
    exports.UpdateOriginRequestPolicyRequest || (exports.UpdateOriginRequestPolicyRequest = {}))
);
var UpdateOriginRequestPolicyResult;
(function (UpdateOriginRequestPolicyResult) {
  /**
   * @internal
   */
  UpdateOriginRequestPolicyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateOriginRequestPolicyResult =
    exports.UpdateOriginRequestPolicyResult || (exports.UpdateOriginRequestPolicyResult = {}))
);
var UpdatePublicKeyRequest;
(function (UpdatePublicKeyRequest) {
  /**
   * @internal
   */
  UpdatePublicKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdatePublicKeyRequest = exports.UpdatePublicKeyRequest || (exports.UpdatePublicKeyRequest = {})));
var UpdatePublicKeyResult;
(function (UpdatePublicKeyResult) {
  /**
   * @internal
   */
  UpdatePublicKeyResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdatePublicKeyResult = exports.UpdatePublicKeyResult || (exports.UpdatePublicKeyResult = {})));
var UpdateRealtimeLogConfigRequest;
(function (UpdateRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  UpdateRealtimeLogConfigRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateRealtimeLogConfigRequest =
    exports.UpdateRealtimeLogConfigRequest || (exports.UpdateRealtimeLogConfigRequest = {}))
);
var UpdateRealtimeLogConfigResult;
(function (UpdateRealtimeLogConfigResult) {
  /**
   * @internal
   */
  UpdateRealtimeLogConfigResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateRealtimeLogConfigResult =
    exports.UpdateRealtimeLogConfigResult || (exports.UpdateRealtimeLogConfigResult = {}))
);
var UpdateStreamingDistributionRequest;
(function (UpdateStreamingDistributionRequest) {
  /**
   * @internal
   */
  UpdateStreamingDistributionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateStreamingDistributionRequest =
    exports.UpdateStreamingDistributionRequest || (exports.UpdateStreamingDistributionRequest = {}))
);
var UpdateStreamingDistributionResult;
(function (UpdateStreamingDistributionResult) {
  /**
   * @internal
   */
  UpdateStreamingDistributionResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateStreamingDistributionResult =
    exports.UpdateStreamingDistributionResult || (exports.UpdateStreamingDistributionResult = {}))
);
//# sourceMappingURL=models_1.js.map
