import { __assign } from "tslib";
import { Distribution, DistributionConfig } from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var GetFieldLevelEncryptionProfileRequest;
(function (GetFieldLevelEncryptionProfileRequest) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFieldLevelEncryptionProfileRequest || (GetFieldLevelEncryptionProfileRequest = {}));
export var GetFieldLevelEncryptionProfileResult;
(function (GetFieldLevelEncryptionProfileResult) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFieldLevelEncryptionProfileResult || (GetFieldLevelEncryptionProfileResult = {}));
export var GetFieldLevelEncryptionProfileConfigRequest;
(function (GetFieldLevelEncryptionProfileConfigRequest) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFieldLevelEncryptionProfileConfigRequest || (GetFieldLevelEncryptionProfileConfigRequest = {}));
export var GetFieldLevelEncryptionProfileConfigResult;
(function (GetFieldLevelEncryptionProfileConfigResult) {
  /**
   * @internal
   */
  GetFieldLevelEncryptionProfileConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFieldLevelEncryptionProfileConfigResult || (GetFieldLevelEncryptionProfileConfigResult = {}));
export var GetFunctionRequest;
(function (GetFunctionRequest) {
  /**
   * @internal
   */
  GetFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFunctionRequest || (GetFunctionRequest = {}));
export var GetFunctionResult;
(function (GetFunctionResult) {
  /**
   * @internal
   */
  GetFunctionResult.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.FunctionCode && { FunctionCode: SENSITIVE_STRING });
  };
})(GetFunctionResult || (GetFunctionResult = {}));
export var GetInvalidationRequest;
(function (GetInvalidationRequest) {
  /**
   * @internal
   */
  GetInvalidationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetInvalidationRequest || (GetInvalidationRequest = {}));
export var GetInvalidationResult;
(function (GetInvalidationResult) {
  /**
   * @internal
   */
  GetInvalidationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetInvalidationResult || (GetInvalidationResult = {}));
export var NoSuchInvalidation;
(function (NoSuchInvalidation) {
  /**
   * @internal
   */
  NoSuchInvalidation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NoSuchInvalidation || (NoSuchInvalidation = {}));
export var GetKeyGroupRequest;
(function (GetKeyGroupRequest) {
  /**
   * @internal
   */
  GetKeyGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetKeyGroupRequest || (GetKeyGroupRequest = {}));
export var GetKeyGroupResult;
(function (GetKeyGroupResult) {
  /**
   * @internal
   */
  GetKeyGroupResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetKeyGroupResult || (GetKeyGroupResult = {}));
export var GetKeyGroupConfigRequest;
(function (GetKeyGroupConfigRequest) {
  /**
   * @internal
   */
  GetKeyGroupConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetKeyGroupConfigRequest || (GetKeyGroupConfigRequest = {}));
export var GetKeyGroupConfigResult;
(function (GetKeyGroupConfigResult) {
  /**
   * @internal
   */
  GetKeyGroupConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetKeyGroupConfigResult || (GetKeyGroupConfigResult = {}));
export var GetMonitoringSubscriptionRequest;
(function (GetMonitoringSubscriptionRequest) {
  /**
   * @internal
   */
  GetMonitoringSubscriptionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetMonitoringSubscriptionRequest || (GetMonitoringSubscriptionRequest = {}));
export var GetMonitoringSubscriptionResult;
(function (GetMonitoringSubscriptionResult) {
  /**
   * @internal
   */
  GetMonitoringSubscriptionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetMonitoringSubscriptionResult || (GetMonitoringSubscriptionResult = {}));
export var GetOriginRequestPolicyRequest;
(function (GetOriginRequestPolicyRequest) {
  /**
   * @internal
   */
  GetOriginRequestPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetOriginRequestPolicyRequest || (GetOriginRequestPolicyRequest = {}));
export var GetOriginRequestPolicyResult;
(function (GetOriginRequestPolicyResult) {
  /**
   * @internal
   */
  GetOriginRequestPolicyResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetOriginRequestPolicyResult || (GetOriginRequestPolicyResult = {}));
export var GetOriginRequestPolicyConfigRequest;
(function (GetOriginRequestPolicyConfigRequest) {
  /**
   * @internal
   */
  GetOriginRequestPolicyConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetOriginRequestPolicyConfigRequest || (GetOriginRequestPolicyConfigRequest = {}));
export var GetOriginRequestPolicyConfigResult;
(function (GetOriginRequestPolicyConfigResult) {
  /**
   * @internal
   */
  GetOriginRequestPolicyConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetOriginRequestPolicyConfigResult || (GetOriginRequestPolicyConfigResult = {}));
export var GetPublicKeyRequest;
(function (GetPublicKeyRequest) {
  /**
   * @internal
   */
  GetPublicKeyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPublicKeyRequest || (GetPublicKeyRequest = {}));
export var GetPublicKeyResult;
(function (GetPublicKeyResult) {
  /**
   * @internal
   */
  GetPublicKeyResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPublicKeyResult || (GetPublicKeyResult = {}));
export var GetPublicKeyConfigRequest;
(function (GetPublicKeyConfigRequest) {
  /**
   * @internal
   */
  GetPublicKeyConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPublicKeyConfigRequest || (GetPublicKeyConfigRequest = {}));
export var GetPublicKeyConfigResult;
(function (GetPublicKeyConfigResult) {
  /**
   * @internal
   */
  GetPublicKeyConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetPublicKeyConfigResult || (GetPublicKeyConfigResult = {}));
export var GetRealtimeLogConfigRequest;
(function (GetRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  GetRealtimeLogConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRealtimeLogConfigRequest || (GetRealtimeLogConfigRequest = {}));
export var GetRealtimeLogConfigResult;
(function (GetRealtimeLogConfigResult) {
  /**
   * @internal
   */
  GetRealtimeLogConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRealtimeLogConfigResult || (GetRealtimeLogConfigResult = {}));
export var GetStreamingDistributionRequest;
(function (GetStreamingDistributionRequest) {
  /**
   * @internal
   */
  GetStreamingDistributionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStreamingDistributionRequest || (GetStreamingDistributionRequest = {}));
export var GetStreamingDistributionResult;
(function (GetStreamingDistributionResult) {
  /**
   * @internal
   */
  GetStreamingDistributionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStreamingDistributionResult || (GetStreamingDistributionResult = {}));
export var GetStreamingDistributionConfigRequest;
(function (GetStreamingDistributionConfigRequest) {
  /**
   * @internal
   */
  GetStreamingDistributionConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStreamingDistributionConfigRequest || (GetStreamingDistributionConfigRequest = {}));
export var GetStreamingDistributionConfigResult;
(function (GetStreamingDistributionConfigResult) {
  /**
   * @internal
   */
  GetStreamingDistributionConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStreamingDistributionConfigResult || (GetStreamingDistributionConfigResult = {}));
export var ListCachePoliciesRequest;
(function (ListCachePoliciesRequest) {
  /**
   * @internal
   */
  ListCachePoliciesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCachePoliciesRequest || (ListCachePoliciesRequest = {}));
export var ListCachePoliciesResult;
(function (ListCachePoliciesResult) {
  /**
   * @internal
   */
  ListCachePoliciesResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCachePoliciesResult || (ListCachePoliciesResult = {}));
export var ListCloudFrontOriginAccessIdentitiesRequest;
(function (ListCloudFrontOriginAccessIdentitiesRequest) {
  /**
   * @internal
   */
  ListCloudFrontOriginAccessIdentitiesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCloudFrontOriginAccessIdentitiesRequest || (ListCloudFrontOriginAccessIdentitiesRequest = {}));
export var CloudFrontOriginAccessIdentitySummary;
(function (CloudFrontOriginAccessIdentitySummary) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentitySummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudFrontOriginAccessIdentitySummary || (CloudFrontOriginAccessIdentitySummary = {}));
export var CloudFrontOriginAccessIdentityList;
(function (CloudFrontOriginAccessIdentityList) {
  /**
   * @internal
   */
  CloudFrontOriginAccessIdentityList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CloudFrontOriginAccessIdentityList || (CloudFrontOriginAccessIdentityList = {}));
export var ListCloudFrontOriginAccessIdentitiesResult;
(function (ListCloudFrontOriginAccessIdentitiesResult) {
  /**
   * @internal
   */
  ListCloudFrontOriginAccessIdentitiesResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListCloudFrontOriginAccessIdentitiesResult || (ListCloudFrontOriginAccessIdentitiesResult = {}));
export var ListDistributionsRequest;
(function (ListDistributionsRequest) {
  /**
   * @internal
   */
  ListDistributionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsRequest || (ListDistributionsRequest = {}));
export var DistributionSummary;
(function (DistributionSummary) {
  /**
   * @internal
   */
  DistributionSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DistributionSummary || (DistributionSummary = {}));
export var DistributionList;
(function (DistributionList) {
  /**
   * @internal
   */
  DistributionList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DistributionList || (DistributionList = {}));
export var ListDistributionsResult;
(function (ListDistributionsResult) {
  /**
   * @internal
   */
  ListDistributionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsResult || (ListDistributionsResult = {}));
export var ListDistributionsByCachePolicyIdRequest;
(function (ListDistributionsByCachePolicyIdRequest) {
  /**
   * @internal
   */
  ListDistributionsByCachePolicyIdRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByCachePolicyIdRequest || (ListDistributionsByCachePolicyIdRequest = {}));
export var DistributionIdList;
(function (DistributionIdList) {
  /**
   * @internal
   */
  DistributionIdList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DistributionIdList || (DistributionIdList = {}));
export var ListDistributionsByCachePolicyIdResult;
(function (ListDistributionsByCachePolicyIdResult) {
  /**
   * @internal
   */
  ListDistributionsByCachePolicyIdResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByCachePolicyIdResult || (ListDistributionsByCachePolicyIdResult = {}));
export var ListDistributionsByKeyGroupRequest;
(function (ListDistributionsByKeyGroupRequest) {
  /**
   * @internal
   */
  ListDistributionsByKeyGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByKeyGroupRequest || (ListDistributionsByKeyGroupRequest = {}));
export var ListDistributionsByKeyGroupResult;
(function (ListDistributionsByKeyGroupResult) {
  /**
   * @internal
   */
  ListDistributionsByKeyGroupResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByKeyGroupResult || (ListDistributionsByKeyGroupResult = {}));
export var ListDistributionsByOriginRequestPolicyIdRequest;
(function (ListDistributionsByOriginRequestPolicyIdRequest) {
  /**
   * @internal
   */
  ListDistributionsByOriginRequestPolicyIdRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByOriginRequestPolicyIdRequest || (ListDistributionsByOriginRequestPolicyIdRequest = {}));
export var ListDistributionsByOriginRequestPolicyIdResult;
(function (ListDistributionsByOriginRequestPolicyIdResult) {
  /**
   * @internal
   */
  ListDistributionsByOriginRequestPolicyIdResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByOriginRequestPolicyIdResult || (ListDistributionsByOriginRequestPolicyIdResult = {}));
export var ListDistributionsByRealtimeLogConfigRequest;
(function (ListDistributionsByRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  ListDistributionsByRealtimeLogConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByRealtimeLogConfigRequest || (ListDistributionsByRealtimeLogConfigRequest = {}));
export var ListDistributionsByRealtimeLogConfigResult;
(function (ListDistributionsByRealtimeLogConfigResult) {
  /**
   * @internal
   */
  ListDistributionsByRealtimeLogConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByRealtimeLogConfigResult || (ListDistributionsByRealtimeLogConfigResult = {}));
export var ListDistributionsByWebACLIdRequest;
(function (ListDistributionsByWebACLIdRequest) {
  /**
   * @internal
   */
  ListDistributionsByWebACLIdRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByWebACLIdRequest || (ListDistributionsByWebACLIdRequest = {}));
export var ListDistributionsByWebACLIdResult;
(function (ListDistributionsByWebACLIdResult) {
  /**
   * @internal
   */
  ListDistributionsByWebACLIdResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDistributionsByWebACLIdResult || (ListDistributionsByWebACLIdResult = {}));
export var ListFieldLevelEncryptionConfigsRequest;
(function (ListFieldLevelEncryptionConfigsRequest) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionConfigsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFieldLevelEncryptionConfigsRequest || (ListFieldLevelEncryptionConfigsRequest = {}));
export var FieldLevelEncryptionSummary;
(function (FieldLevelEncryptionSummary) {
  /**
   * @internal
   */
  FieldLevelEncryptionSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FieldLevelEncryptionSummary || (FieldLevelEncryptionSummary = {}));
export var FieldLevelEncryptionList;
(function (FieldLevelEncryptionList) {
  /**
   * @internal
   */
  FieldLevelEncryptionList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FieldLevelEncryptionList || (FieldLevelEncryptionList = {}));
export var ListFieldLevelEncryptionConfigsResult;
(function (ListFieldLevelEncryptionConfigsResult) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionConfigsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFieldLevelEncryptionConfigsResult || (ListFieldLevelEncryptionConfigsResult = {}));
export var ListFieldLevelEncryptionProfilesRequest;
(function (ListFieldLevelEncryptionProfilesRequest) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionProfilesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFieldLevelEncryptionProfilesRequest || (ListFieldLevelEncryptionProfilesRequest = {}));
export var FieldLevelEncryptionProfileSummary;
(function (FieldLevelEncryptionProfileSummary) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FieldLevelEncryptionProfileSummary || (FieldLevelEncryptionProfileSummary = {}));
export var FieldLevelEncryptionProfileList;
(function (FieldLevelEncryptionProfileList) {
  /**
   * @internal
   */
  FieldLevelEncryptionProfileList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FieldLevelEncryptionProfileList || (FieldLevelEncryptionProfileList = {}));
export var ListFieldLevelEncryptionProfilesResult;
(function (ListFieldLevelEncryptionProfilesResult) {
  /**
   * @internal
   */
  ListFieldLevelEncryptionProfilesResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFieldLevelEncryptionProfilesResult || (ListFieldLevelEncryptionProfilesResult = {}));
export var ListFunctionsRequest;
(function (ListFunctionsRequest) {
  /**
   * @internal
   */
  ListFunctionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFunctionsRequest || (ListFunctionsRequest = {}));
export var FunctionList;
(function (FunctionList) {
  /**
   * @internal
   */
  FunctionList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FunctionList || (FunctionList = {}));
export var ListFunctionsResult;
(function (ListFunctionsResult) {
  /**
   * @internal
   */
  ListFunctionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFunctionsResult || (ListFunctionsResult = {}));
export var ListInvalidationsRequest;
(function (ListInvalidationsRequest) {
  /**
   * @internal
   */
  ListInvalidationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListInvalidationsRequest || (ListInvalidationsRequest = {}));
export var InvalidationSummary;
(function (InvalidationSummary) {
  /**
   * @internal
   */
  InvalidationSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidationSummary || (InvalidationSummary = {}));
export var InvalidationList;
(function (InvalidationList) {
  /**
   * @internal
   */
  InvalidationList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidationList || (InvalidationList = {}));
export var ListInvalidationsResult;
(function (ListInvalidationsResult) {
  /**
   * @internal
   */
  ListInvalidationsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListInvalidationsResult || (ListInvalidationsResult = {}));
export var ListKeyGroupsRequest;
(function (ListKeyGroupsRequest) {
  /**
   * @internal
   */
  ListKeyGroupsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListKeyGroupsRequest || (ListKeyGroupsRequest = {}));
export var KeyGroupSummary;
(function (KeyGroupSummary) {
  /**
   * @internal
   */
  KeyGroupSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(KeyGroupSummary || (KeyGroupSummary = {}));
export var KeyGroupList;
(function (KeyGroupList) {
  /**
   * @internal
   */
  KeyGroupList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(KeyGroupList || (KeyGroupList = {}));
export var ListKeyGroupsResult;
(function (ListKeyGroupsResult) {
  /**
   * @internal
   */
  ListKeyGroupsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListKeyGroupsResult || (ListKeyGroupsResult = {}));
export var ListOriginRequestPoliciesRequest;
(function (ListOriginRequestPoliciesRequest) {
  /**
   * @internal
   */
  ListOriginRequestPoliciesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListOriginRequestPoliciesRequest || (ListOriginRequestPoliciesRequest = {}));
export var OriginRequestPolicySummary;
(function (OriginRequestPolicySummary) {
  /**
   * @internal
   */
  OriginRequestPolicySummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OriginRequestPolicySummary || (OriginRequestPolicySummary = {}));
export var OriginRequestPolicyList;
(function (OriginRequestPolicyList) {
  /**
   * @internal
   */
  OriginRequestPolicyList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OriginRequestPolicyList || (OriginRequestPolicyList = {}));
export var ListOriginRequestPoliciesResult;
(function (ListOriginRequestPoliciesResult) {
  /**
   * @internal
   */
  ListOriginRequestPoliciesResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListOriginRequestPoliciesResult || (ListOriginRequestPoliciesResult = {}));
export var ListPublicKeysRequest;
(function (ListPublicKeysRequest) {
  /**
   * @internal
   */
  ListPublicKeysRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPublicKeysRequest || (ListPublicKeysRequest = {}));
export var PublicKeySummary;
(function (PublicKeySummary) {
  /**
   * @internal
   */
  PublicKeySummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PublicKeySummary || (PublicKeySummary = {}));
export var PublicKeyList;
(function (PublicKeyList) {
  /**
   * @internal
   */
  PublicKeyList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PublicKeyList || (PublicKeyList = {}));
export var ListPublicKeysResult;
(function (ListPublicKeysResult) {
  /**
   * @internal
   */
  ListPublicKeysResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListPublicKeysResult || (ListPublicKeysResult = {}));
export var ListRealtimeLogConfigsRequest;
(function (ListRealtimeLogConfigsRequest) {
  /**
   * @internal
   */
  ListRealtimeLogConfigsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRealtimeLogConfigsRequest || (ListRealtimeLogConfigsRequest = {}));
export var RealtimeLogConfigs;
(function (RealtimeLogConfigs) {
  /**
   * @internal
   */
  RealtimeLogConfigs.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RealtimeLogConfigs || (RealtimeLogConfigs = {}));
export var ListRealtimeLogConfigsResult;
(function (ListRealtimeLogConfigsResult) {
  /**
   * @internal
   */
  ListRealtimeLogConfigsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListRealtimeLogConfigsResult || (ListRealtimeLogConfigsResult = {}));
export var ListStreamingDistributionsRequest;
(function (ListStreamingDistributionsRequest) {
  /**
   * @internal
   */
  ListStreamingDistributionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStreamingDistributionsRequest || (ListStreamingDistributionsRequest = {}));
export var StreamingDistributionSummary;
(function (StreamingDistributionSummary) {
  /**
   * @internal
   */
  StreamingDistributionSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StreamingDistributionSummary || (StreamingDistributionSummary = {}));
export var StreamingDistributionList;
(function (StreamingDistributionList) {
  /**
   * @internal
   */
  StreamingDistributionList.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StreamingDistributionList || (StreamingDistributionList = {}));
export var ListStreamingDistributionsResult;
(function (ListStreamingDistributionsResult) {
  /**
   * @internal
   */
  ListStreamingDistributionsResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStreamingDistributionsResult || (ListStreamingDistributionsResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
  /**
   * @internal
   */
  ListTagsForResourceResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResult || (ListTagsForResourceResult = {}));
export var PublishFunctionRequest;
(function (PublishFunctionRequest) {
  /**
   * @internal
   */
  PublishFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PublishFunctionRequest || (PublishFunctionRequest = {}));
export var PublishFunctionResult;
(function (PublishFunctionResult) {
  /**
   * @internal
   */
  PublishFunctionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PublishFunctionResult || (PublishFunctionResult = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TestFunctionFailed;
(function (TestFunctionFailed) {
  /**
   * @internal
   */
  TestFunctionFailed.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TestFunctionFailed || (TestFunctionFailed = {}));
export var TestFunctionRequest;
(function (TestFunctionRequest) {
  /**
   * @internal
   */
  TestFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.EventObject && { EventObject: SENSITIVE_STRING });
  };
})(TestFunctionRequest || (TestFunctionRequest = {}));
export var TestResult;
(function (TestResult) {
  /**
   * @internal
   */
  TestResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TestResult || (TestResult = {}));
export var TestFunctionResult;
(function (TestFunctionResult) {
  /**
   * @internal
   */
  TestFunctionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TestFunctionResult || (TestFunctionResult = {}));
export var TagKeys;
(function (TagKeys) {
  /**
   * @internal
   */
  TagKeys.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagKeys || (TagKeys = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var IllegalUpdate;
(function (IllegalUpdate) {
  /**
   * @internal
   */
  IllegalUpdate.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IllegalUpdate || (IllegalUpdate = {}));
export var UpdateCachePolicyRequest;
(function (UpdateCachePolicyRequest) {
  /**
   * @internal
   */
  UpdateCachePolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateCachePolicyRequest || (UpdateCachePolicyRequest = {}));
export var UpdateCachePolicyResult;
(function (UpdateCachePolicyResult) {
  /**
   * @internal
   */
  UpdateCachePolicyResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateCachePolicyResult || (UpdateCachePolicyResult = {}));
export var UpdateCloudFrontOriginAccessIdentityRequest;
(function (UpdateCloudFrontOriginAccessIdentityRequest) {
  /**
   * @internal
   */
  UpdateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateCloudFrontOriginAccessIdentityRequest || (UpdateCloudFrontOriginAccessIdentityRequest = {}));
export var UpdateCloudFrontOriginAccessIdentityResult;
(function (UpdateCloudFrontOriginAccessIdentityResult) {
  /**
   * @internal
   */
  UpdateCloudFrontOriginAccessIdentityResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateCloudFrontOriginAccessIdentityResult || (UpdateCloudFrontOriginAccessIdentityResult = {}));
export var UpdateDistributionRequest;
(function (UpdateDistributionRequest) {
  /**
   * @internal
   */
  UpdateDistributionRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.DistributionConfig && {
        DistributionConfig: DistributionConfig.filterSensitiveLog(obj.DistributionConfig),
      }
    );
  };
})(UpdateDistributionRequest || (UpdateDistributionRequest = {}));
export var UpdateDistributionResult;
(function (UpdateDistributionResult) {
  /**
   * @internal
   */
  UpdateDistributionResult.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Distribution && { Distribution: Distribution.filterSensitiveLog(obj.Distribution) }
    );
  };
})(UpdateDistributionResult || (UpdateDistributionResult = {}));
export var UpdateFieldLevelEncryptionConfigRequest;
(function (UpdateFieldLevelEncryptionConfigRequest) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFieldLevelEncryptionConfigRequest || (UpdateFieldLevelEncryptionConfigRequest = {}));
export var UpdateFieldLevelEncryptionConfigResult;
(function (UpdateFieldLevelEncryptionConfigResult) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFieldLevelEncryptionConfigResult || (UpdateFieldLevelEncryptionConfigResult = {}));
export var UpdateFieldLevelEncryptionProfileRequest;
(function (UpdateFieldLevelEncryptionProfileRequest) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionProfileRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFieldLevelEncryptionProfileRequest || (UpdateFieldLevelEncryptionProfileRequest = {}));
export var UpdateFieldLevelEncryptionProfileResult;
(function (UpdateFieldLevelEncryptionProfileResult) {
  /**
   * @internal
   */
  UpdateFieldLevelEncryptionProfileResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFieldLevelEncryptionProfileResult || (UpdateFieldLevelEncryptionProfileResult = {}));
export var UpdateFunctionRequest;
(function (UpdateFunctionRequest) {
  /**
   * @internal
   */
  UpdateFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.FunctionCode && { FunctionCode: SENSITIVE_STRING });
  };
})(UpdateFunctionRequest || (UpdateFunctionRequest = {}));
export var UpdateFunctionResult;
(function (UpdateFunctionResult) {
  /**
   * @internal
   */
  UpdateFunctionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFunctionResult || (UpdateFunctionResult = {}));
export var UpdateKeyGroupRequest;
(function (UpdateKeyGroupRequest) {
  /**
   * @internal
   */
  UpdateKeyGroupRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateKeyGroupRequest || (UpdateKeyGroupRequest = {}));
export var UpdateKeyGroupResult;
(function (UpdateKeyGroupResult) {
  /**
   * @internal
   */
  UpdateKeyGroupResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateKeyGroupResult || (UpdateKeyGroupResult = {}));
export var UpdateOriginRequestPolicyRequest;
(function (UpdateOriginRequestPolicyRequest) {
  /**
   * @internal
   */
  UpdateOriginRequestPolicyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateOriginRequestPolicyRequest || (UpdateOriginRequestPolicyRequest = {}));
export var UpdateOriginRequestPolicyResult;
(function (UpdateOriginRequestPolicyResult) {
  /**
   * @internal
   */
  UpdateOriginRequestPolicyResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateOriginRequestPolicyResult || (UpdateOriginRequestPolicyResult = {}));
export var UpdatePublicKeyRequest;
(function (UpdatePublicKeyRequest) {
  /**
   * @internal
   */
  UpdatePublicKeyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdatePublicKeyRequest || (UpdatePublicKeyRequest = {}));
export var UpdatePublicKeyResult;
(function (UpdatePublicKeyResult) {
  /**
   * @internal
   */
  UpdatePublicKeyResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdatePublicKeyResult || (UpdatePublicKeyResult = {}));
export var UpdateRealtimeLogConfigRequest;
(function (UpdateRealtimeLogConfigRequest) {
  /**
   * @internal
   */
  UpdateRealtimeLogConfigRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRealtimeLogConfigRequest || (UpdateRealtimeLogConfigRequest = {}));
export var UpdateRealtimeLogConfigResult;
(function (UpdateRealtimeLogConfigResult) {
  /**
   * @internal
   */
  UpdateRealtimeLogConfigResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRealtimeLogConfigResult || (UpdateRealtimeLogConfigResult = {}));
export var UpdateStreamingDistributionRequest;
(function (UpdateStreamingDistributionRequest) {
  /**
   * @internal
   */
  UpdateStreamingDistributionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStreamingDistributionRequest || (UpdateStreamingDistributionRequest = {}));
export var UpdateStreamingDistributionResult;
(function (UpdateStreamingDistributionResult) {
  /**
   * @internal
   */
  UpdateStreamingDistributionResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStreamingDistributionResult || (UpdateStreamingDistributionResult = {}));
//# sourceMappingURL=models_1.js.map
