"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFront = void 0;
const CloudFrontClient_1 = require("./CloudFrontClient");
const CreateCachePolicyCommand_1 = require("./commands/CreateCachePolicyCommand");
const CreateCloudFrontOriginAccessIdentityCommand_1 = require("./commands/CreateCloudFrontOriginAccessIdentityCommand");
const CreateDistributionCommand_1 = require("./commands/CreateDistributionCommand");
const CreateDistributionWithTagsCommand_1 = require("./commands/CreateDistributionWithTagsCommand");
const CreateFieldLevelEncryptionConfigCommand_1 = require("./commands/CreateFieldLevelEncryptionConfigCommand");
const CreateFieldLevelEncryptionProfileCommand_1 = require("./commands/CreateFieldLevelEncryptionProfileCommand");
const CreateFunctionCommand_1 = require("./commands/CreateFunctionCommand");
const CreateInvalidationCommand_1 = require("./commands/CreateInvalidationCommand");
const CreateKeyGroupCommand_1 = require("./commands/CreateKeyGroupCommand");
const CreateMonitoringSubscriptionCommand_1 = require("./commands/CreateMonitoringSubscriptionCommand");
const CreateOriginRequestPolicyCommand_1 = require("./commands/CreateOriginRequestPolicyCommand");
const CreatePublicKeyCommand_1 = require("./commands/CreatePublicKeyCommand");
const CreateRealtimeLogConfigCommand_1 = require("./commands/CreateRealtimeLogConfigCommand");
const CreateStreamingDistributionCommand_1 = require("./commands/CreateStreamingDistributionCommand");
const CreateStreamingDistributionWithTagsCommand_1 = require("./commands/CreateStreamingDistributionWithTagsCommand");
const DeleteCachePolicyCommand_1 = require("./commands/DeleteCachePolicyCommand");
const DeleteCloudFrontOriginAccessIdentityCommand_1 = require("./commands/DeleteCloudFrontOriginAccessIdentityCommand");
const DeleteDistributionCommand_1 = require("./commands/DeleteDistributionCommand");
const DeleteFieldLevelEncryptionConfigCommand_1 = require("./commands/DeleteFieldLevelEncryptionConfigCommand");
const DeleteFieldLevelEncryptionProfileCommand_1 = require("./commands/DeleteFieldLevelEncryptionProfileCommand");
const DeleteFunctionCommand_1 = require("./commands/DeleteFunctionCommand");
const DeleteKeyGroupCommand_1 = require("./commands/DeleteKeyGroupCommand");
const DeleteMonitoringSubscriptionCommand_1 = require("./commands/DeleteMonitoringSubscriptionCommand");
const DeleteOriginRequestPolicyCommand_1 = require("./commands/DeleteOriginRequestPolicyCommand");
const DeletePublicKeyCommand_1 = require("./commands/DeletePublicKeyCommand");
const DeleteRealtimeLogConfigCommand_1 = require("./commands/DeleteRealtimeLogConfigCommand");
const DeleteStreamingDistributionCommand_1 = require("./commands/DeleteStreamingDistributionCommand");
const DescribeFunctionCommand_1 = require("./commands/DescribeFunctionCommand");
const GetCachePolicyCommand_1 = require("./commands/GetCachePolicyCommand");
const GetCachePolicyConfigCommand_1 = require("./commands/GetCachePolicyConfigCommand");
const GetCloudFrontOriginAccessIdentityCommand_1 = require("./commands/GetCloudFrontOriginAccessIdentityCommand");
const GetCloudFrontOriginAccessIdentityConfigCommand_1 = require("./commands/GetCloudFrontOriginAccessIdentityConfigCommand");
const GetDistributionCommand_1 = require("./commands/GetDistributionCommand");
const GetDistributionConfigCommand_1 = require("./commands/GetDistributionConfigCommand");
const GetFieldLevelEncryptionCommand_1 = require("./commands/GetFieldLevelEncryptionCommand");
const GetFieldLevelEncryptionConfigCommand_1 = require("./commands/GetFieldLevelEncryptionConfigCommand");
const GetFieldLevelEncryptionProfileCommand_1 = require("./commands/GetFieldLevelEncryptionProfileCommand");
const GetFieldLevelEncryptionProfileConfigCommand_1 = require("./commands/GetFieldLevelEncryptionProfileConfigCommand");
const GetFunctionCommand_1 = require("./commands/GetFunctionCommand");
const GetInvalidationCommand_1 = require("./commands/GetInvalidationCommand");
const GetKeyGroupCommand_1 = require("./commands/GetKeyGroupCommand");
const GetKeyGroupConfigCommand_1 = require("./commands/GetKeyGroupConfigCommand");
const GetMonitoringSubscriptionCommand_1 = require("./commands/GetMonitoringSubscriptionCommand");
const GetOriginRequestPolicyCommand_1 = require("./commands/GetOriginRequestPolicyCommand");
const GetOriginRequestPolicyConfigCommand_1 = require("./commands/GetOriginRequestPolicyConfigCommand");
const GetPublicKeyCommand_1 = require("./commands/GetPublicKeyCommand");
const GetPublicKeyConfigCommand_1 = require("./commands/GetPublicKeyConfigCommand");
const GetRealtimeLogConfigCommand_1 = require("./commands/GetRealtimeLogConfigCommand");
const GetStreamingDistributionCommand_1 = require("./commands/GetStreamingDistributionCommand");
const GetStreamingDistributionConfigCommand_1 = require("./commands/GetStreamingDistributionConfigCommand");
const ListCachePoliciesCommand_1 = require("./commands/ListCachePoliciesCommand");
const ListCloudFrontOriginAccessIdentitiesCommand_1 = require("./commands/ListCloudFrontOriginAccessIdentitiesCommand");
const ListDistributionsByCachePolicyIdCommand_1 = require("./commands/ListDistributionsByCachePolicyIdCommand");
const ListDistributionsByKeyGroupCommand_1 = require("./commands/ListDistributionsByKeyGroupCommand");
const ListDistributionsByOriginRequestPolicyIdCommand_1 = require("./commands/ListDistributionsByOriginRequestPolicyIdCommand");
const ListDistributionsByRealtimeLogConfigCommand_1 = require("./commands/ListDistributionsByRealtimeLogConfigCommand");
const ListDistributionsByWebACLIdCommand_1 = require("./commands/ListDistributionsByWebACLIdCommand");
const ListDistributionsCommand_1 = require("./commands/ListDistributionsCommand");
const ListFieldLevelEncryptionConfigsCommand_1 = require("./commands/ListFieldLevelEncryptionConfigsCommand");
const ListFieldLevelEncryptionProfilesCommand_1 = require("./commands/ListFieldLevelEncryptionProfilesCommand");
const ListFunctionsCommand_1 = require("./commands/ListFunctionsCommand");
const ListInvalidationsCommand_1 = require("./commands/ListInvalidationsCommand");
const ListKeyGroupsCommand_1 = require("./commands/ListKeyGroupsCommand");
const ListOriginRequestPoliciesCommand_1 = require("./commands/ListOriginRequestPoliciesCommand");
const ListPublicKeysCommand_1 = require("./commands/ListPublicKeysCommand");
const ListRealtimeLogConfigsCommand_1 = require("./commands/ListRealtimeLogConfigsCommand");
const ListStreamingDistributionsCommand_1 = require("./commands/ListStreamingDistributionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PublishFunctionCommand_1 = require("./commands/PublishFunctionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestFunctionCommand_1 = require("./commands/TestFunctionCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateCachePolicyCommand_1 = require("./commands/UpdateCachePolicyCommand");
const UpdateCloudFrontOriginAccessIdentityCommand_1 = require("./commands/UpdateCloudFrontOriginAccessIdentityCommand");
const UpdateDistributionCommand_1 = require("./commands/UpdateDistributionCommand");
const UpdateFieldLevelEncryptionConfigCommand_1 = require("./commands/UpdateFieldLevelEncryptionConfigCommand");
const UpdateFieldLevelEncryptionProfileCommand_1 = require("./commands/UpdateFieldLevelEncryptionProfileCommand");
const UpdateFunctionCommand_1 = require("./commands/UpdateFunctionCommand");
const UpdateKeyGroupCommand_1 = require("./commands/UpdateKeyGroupCommand");
const UpdateOriginRequestPolicyCommand_1 = require("./commands/UpdateOriginRequestPolicyCommand");
const UpdatePublicKeyCommand_1 = require("./commands/UpdatePublicKeyCommand");
const UpdateRealtimeLogConfigCommand_1 = require("./commands/UpdateRealtimeLogConfigCommand");
const UpdateStreamingDistributionCommand_1 = require("./commands/UpdateStreamingDistributionCommand");
/**
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
class CloudFront extends CloudFrontClient_1.CloudFrontClient {
  createCachePolicy(args, optionsOrCb, cb) {
    const command = new CreateCachePolicyCommand_1.CreateCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
    const command = new CreateCloudFrontOriginAccessIdentityCommand_1.CreateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDistribution(args, optionsOrCb, cb) {
    const command = new CreateDistributionCommand_1.CreateDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDistributionWithTags(args, optionsOrCb, cb) {
    const command = new CreateDistributionWithTagsCommand_1.CreateDistributionWithTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
    const command = new CreateFieldLevelEncryptionConfigCommand_1.CreateFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
    const command = new CreateFieldLevelEncryptionProfileCommand_1.CreateFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createFunction(args, optionsOrCb, cb) {
    const command = new CreateFunctionCommand_1.CreateFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createInvalidation(args, optionsOrCb, cb) {
    const command = new CreateInvalidationCommand_1.CreateInvalidationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createKeyGroup(args, optionsOrCb, cb) {
    const command = new CreateKeyGroupCommand_1.CreateKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createMonitoringSubscription(args, optionsOrCb, cb) {
    const command = new CreateMonitoringSubscriptionCommand_1.CreateMonitoringSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createOriginRequestPolicy(args, optionsOrCb, cb) {
    const command = new CreateOriginRequestPolicyCommand_1.CreateOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createPublicKey(args, optionsOrCb, cb) {
    const command = new CreatePublicKeyCommand_1.CreatePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRealtimeLogConfig(args, optionsOrCb, cb) {
    const command = new CreateRealtimeLogConfigCommand_1.CreateRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createStreamingDistribution(args, optionsOrCb, cb) {
    const command = new CreateStreamingDistributionCommand_1.CreateStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createStreamingDistributionWithTags(args, optionsOrCb, cb) {
    const command = new CreateStreamingDistributionWithTagsCommand_1.CreateStreamingDistributionWithTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteCachePolicy(args, optionsOrCb, cb) {
    const command = new DeleteCachePolicyCommand_1.DeleteCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
    const command = new DeleteCloudFrontOriginAccessIdentityCommand_1.DeleteCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDistribution(args, optionsOrCb, cb) {
    const command = new DeleteDistributionCommand_1.DeleteDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
    const command = new DeleteFieldLevelEncryptionConfigCommand_1.DeleteFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
    const command = new DeleteFieldLevelEncryptionProfileCommand_1.DeleteFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteFunction(args, optionsOrCb, cb) {
    const command = new DeleteFunctionCommand_1.DeleteFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteKeyGroup(args, optionsOrCb, cb) {
    const command = new DeleteKeyGroupCommand_1.DeleteKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteMonitoringSubscription(args, optionsOrCb, cb) {
    const command = new DeleteMonitoringSubscriptionCommand_1.DeleteMonitoringSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteOriginRequestPolicy(args, optionsOrCb, cb) {
    const command = new DeleteOriginRequestPolicyCommand_1.DeleteOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deletePublicKey(args, optionsOrCb, cb) {
    const command = new DeletePublicKeyCommand_1.DeletePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRealtimeLogConfig(args, optionsOrCb, cb) {
    const command = new DeleteRealtimeLogConfigCommand_1.DeleteRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteStreamingDistribution(args, optionsOrCb, cb) {
    const command = new DeleteStreamingDistributionCommand_1.DeleteStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  describeFunction(args, optionsOrCb, cb) {
    const command = new DescribeFunctionCommand_1.DescribeFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getCachePolicy(args, optionsOrCb, cb) {
    const command = new GetCachePolicyCommand_1.GetCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getCachePolicyConfig(args, optionsOrCb, cb) {
    const command = new GetCachePolicyConfigCommand_1.GetCachePolicyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
    const command = new GetCloudFrontOriginAccessIdentityCommand_1.GetCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getCloudFrontOriginAccessIdentityConfig(args, optionsOrCb, cb) {
    const command = new GetCloudFrontOriginAccessIdentityConfigCommand_1.GetCloudFrontOriginAccessIdentityConfigCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDistribution(args, optionsOrCb, cb) {
    const command = new GetDistributionCommand_1.GetDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDistributionConfig(args, optionsOrCb, cb) {
    const command = new GetDistributionConfigCommand_1.GetDistributionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFieldLevelEncryption(args, optionsOrCb, cb) {
    const command = new GetFieldLevelEncryptionCommand_1.GetFieldLevelEncryptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
    const command = new GetFieldLevelEncryptionConfigCommand_1.GetFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
    const command = new GetFieldLevelEncryptionProfileCommand_1.GetFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFieldLevelEncryptionProfileConfig(args, optionsOrCb, cb) {
    const command = new GetFieldLevelEncryptionProfileConfigCommand_1.GetFieldLevelEncryptionProfileConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getFunction(args, optionsOrCb, cb) {
    const command = new GetFunctionCommand_1.GetFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getInvalidation(args, optionsOrCb, cb) {
    const command = new GetInvalidationCommand_1.GetInvalidationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getKeyGroup(args, optionsOrCb, cb) {
    const command = new GetKeyGroupCommand_1.GetKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getKeyGroupConfig(args, optionsOrCb, cb) {
    const command = new GetKeyGroupConfigCommand_1.GetKeyGroupConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getMonitoringSubscription(args, optionsOrCb, cb) {
    const command = new GetMonitoringSubscriptionCommand_1.GetMonitoringSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getOriginRequestPolicy(args, optionsOrCb, cb) {
    const command = new GetOriginRequestPolicyCommand_1.GetOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getOriginRequestPolicyConfig(args, optionsOrCb, cb) {
    const command = new GetOriginRequestPolicyConfigCommand_1.GetOriginRequestPolicyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getPublicKey(args, optionsOrCb, cb) {
    const command = new GetPublicKeyCommand_1.GetPublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getPublicKeyConfig(args, optionsOrCb, cb) {
    const command = new GetPublicKeyConfigCommand_1.GetPublicKeyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRealtimeLogConfig(args, optionsOrCb, cb) {
    const command = new GetRealtimeLogConfigCommand_1.GetRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getStreamingDistribution(args, optionsOrCb, cb) {
    const command = new GetStreamingDistributionCommand_1.GetStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getStreamingDistributionConfig(args, optionsOrCb, cb) {
    const command = new GetStreamingDistributionConfigCommand_1.GetStreamingDistributionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listCachePolicies(args, optionsOrCb, cb) {
    const command = new ListCachePoliciesCommand_1.ListCachePoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listCloudFrontOriginAccessIdentities(args, optionsOrCb, cb) {
    const command = new ListCloudFrontOriginAccessIdentitiesCommand_1.ListCloudFrontOriginAccessIdentitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDistributions(args, optionsOrCb, cb) {
    const command = new ListDistributionsCommand_1.ListDistributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDistributionsByCachePolicyId(args, optionsOrCb, cb) {
    const command = new ListDistributionsByCachePolicyIdCommand_1.ListDistributionsByCachePolicyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDistributionsByKeyGroup(args, optionsOrCb, cb) {
    const command = new ListDistributionsByKeyGroupCommand_1.ListDistributionsByKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDistributionsByOriginRequestPolicyId(args, optionsOrCb, cb) {
    const command =
      new ListDistributionsByOriginRequestPolicyIdCommand_1.ListDistributionsByOriginRequestPolicyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDistributionsByRealtimeLogConfig(args, optionsOrCb, cb) {
    const command = new ListDistributionsByRealtimeLogConfigCommand_1.ListDistributionsByRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDistributionsByWebACLId(args, optionsOrCb, cb) {
    const command = new ListDistributionsByWebACLIdCommand_1.ListDistributionsByWebACLIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listFieldLevelEncryptionConfigs(args, optionsOrCb, cb) {
    const command = new ListFieldLevelEncryptionConfigsCommand_1.ListFieldLevelEncryptionConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listFieldLevelEncryptionProfiles(args, optionsOrCb, cb) {
    const command = new ListFieldLevelEncryptionProfilesCommand_1.ListFieldLevelEncryptionProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listFunctions(args, optionsOrCb, cb) {
    const command = new ListFunctionsCommand_1.ListFunctionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listInvalidations(args, optionsOrCb, cb) {
    const command = new ListInvalidationsCommand_1.ListInvalidationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listKeyGroups(args, optionsOrCb, cb) {
    const command = new ListKeyGroupsCommand_1.ListKeyGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listOriginRequestPolicies(args, optionsOrCb, cb) {
    const command = new ListOriginRequestPoliciesCommand_1.ListOriginRequestPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPublicKeys(args, optionsOrCb, cb) {
    const command = new ListPublicKeysCommand_1.ListPublicKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listRealtimeLogConfigs(args, optionsOrCb, cb) {
    const command = new ListRealtimeLogConfigsCommand_1.ListRealtimeLogConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listStreamingDistributions(args, optionsOrCb, cb) {
    const command = new ListStreamingDistributionsCommand_1.ListStreamingDistributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  publishFunction(args, optionsOrCb, cb) {
    const command = new PublishFunctionCommand_1.PublishFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  testFunction(args, optionsOrCb, cb) {
    const command = new TestFunctionCommand_1.TestFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateCachePolicy(args, optionsOrCb, cb) {
    const command = new UpdateCachePolicyCommand_1.UpdateCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
    const command = new UpdateCloudFrontOriginAccessIdentityCommand_1.UpdateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDistribution(args, optionsOrCb, cb) {
    const command = new UpdateDistributionCommand_1.UpdateDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
    const command = new UpdateFieldLevelEncryptionConfigCommand_1.UpdateFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
    const command = new UpdateFieldLevelEncryptionProfileCommand_1.UpdateFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateFunction(args, optionsOrCb, cb) {
    const command = new UpdateFunctionCommand_1.UpdateFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateKeyGroup(args, optionsOrCb, cb) {
    const command = new UpdateKeyGroupCommand_1.UpdateKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateOriginRequestPolicy(args, optionsOrCb, cb) {
    const command = new UpdateOriginRequestPolicyCommand_1.UpdateOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updatePublicKey(args, optionsOrCb, cb) {
    const command = new UpdatePublicKeyCommand_1.UpdatePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRealtimeLogConfig(args, optionsOrCb, cb) {
    const command = new UpdateRealtimeLogConfigCommand_1.UpdateRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateStreamingDistribution(args, optionsOrCb, cb) {
    const command = new UpdateStreamingDistributionCommand_1.UpdateStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.CloudFront = CloudFront;
//# sourceMappingURL=CloudFront.js.map
