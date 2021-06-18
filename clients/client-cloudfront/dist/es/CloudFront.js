import { __extends } from "tslib";
import { CloudFrontClient } from "./CloudFrontClient";
import { CreateCachePolicyCommand } from "./commands/CreateCachePolicyCommand";
import { CreateCloudFrontOriginAccessIdentityCommand } from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import { CreateDistributionCommand } from "./commands/CreateDistributionCommand";
import { CreateDistributionWithTagsCommand } from "./commands/CreateDistributionWithTagsCommand";
import { CreateFieldLevelEncryptionConfigCommand } from "./commands/CreateFieldLevelEncryptionConfigCommand";
import { CreateFieldLevelEncryptionProfileCommand } from "./commands/CreateFieldLevelEncryptionProfileCommand";
import { CreateFunctionCommand } from "./commands/CreateFunctionCommand";
import { CreateInvalidationCommand } from "./commands/CreateInvalidationCommand";
import { CreateKeyGroupCommand } from "./commands/CreateKeyGroupCommand";
import { CreateMonitoringSubscriptionCommand } from "./commands/CreateMonitoringSubscriptionCommand";
import { CreateOriginRequestPolicyCommand } from "./commands/CreateOriginRequestPolicyCommand";
import { CreatePublicKeyCommand } from "./commands/CreatePublicKeyCommand";
import { CreateRealtimeLogConfigCommand } from "./commands/CreateRealtimeLogConfigCommand";
import { CreateStreamingDistributionCommand } from "./commands/CreateStreamingDistributionCommand";
import { CreateStreamingDistributionWithTagsCommand } from "./commands/CreateStreamingDistributionWithTagsCommand";
import { DeleteCachePolicyCommand } from "./commands/DeleteCachePolicyCommand";
import { DeleteCloudFrontOriginAccessIdentityCommand } from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import { DeleteDistributionCommand } from "./commands/DeleteDistributionCommand";
import { DeleteFieldLevelEncryptionConfigCommand } from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import { DeleteFieldLevelEncryptionProfileCommand } from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import { DeleteFunctionCommand } from "./commands/DeleteFunctionCommand";
import { DeleteKeyGroupCommand } from "./commands/DeleteKeyGroupCommand";
import { DeleteMonitoringSubscriptionCommand } from "./commands/DeleteMonitoringSubscriptionCommand";
import { DeleteOriginRequestPolicyCommand } from "./commands/DeleteOriginRequestPolicyCommand";
import { DeletePublicKeyCommand } from "./commands/DeletePublicKeyCommand";
import { DeleteRealtimeLogConfigCommand } from "./commands/DeleteRealtimeLogConfigCommand";
import { DeleteStreamingDistributionCommand } from "./commands/DeleteStreamingDistributionCommand";
import { DescribeFunctionCommand } from "./commands/DescribeFunctionCommand";
import { GetCachePolicyCommand } from "./commands/GetCachePolicyCommand";
import { GetCachePolicyConfigCommand } from "./commands/GetCachePolicyConfigCommand";
import { GetCloudFrontOriginAccessIdentityCommand } from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import { GetCloudFrontOriginAccessIdentityConfigCommand } from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import { GetDistributionCommand } from "./commands/GetDistributionCommand";
import { GetDistributionConfigCommand } from "./commands/GetDistributionConfigCommand";
import { GetFieldLevelEncryptionCommand } from "./commands/GetFieldLevelEncryptionCommand";
import { GetFieldLevelEncryptionConfigCommand } from "./commands/GetFieldLevelEncryptionConfigCommand";
import { GetFieldLevelEncryptionProfileCommand } from "./commands/GetFieldLevelEncryptionProfileCommand";
import { GetFieldLevelEncryptionProfileConfigCommand } from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetFunctionCommand } from "./commands/GetFunctionCommand";
import { GetInvalidationCommand } from "./commands/GetInvalidationCommand";
import { GetKeyGroupCommand } from "./commands/GetKeyGroupCommand";
import { GetKeyGroupConfigCommand } from "./commands/GetKeyGroupConfigCommand";
import { GetMonitoringSubscriptionCommand } from "./commands/GetMonitoringSubscriptionCommand";
import { GetOriginRequestPolicyCommand } from "./commands/GetOriginRequestPolicyCommand";
import { GetOriginRequestPolicyConfigCommand } from "./commands/GetOriginRequestPolicyConfigCommand";
import { GetPublicKeyCommand } from "./commands/GetPublicKeyCommand";
import { GetPublicKeyConfigCommand } from "./commands/GetPublicKeyConfigCommand";
import { GetRealtimeLogConfigCommand } from "./commands/GetRealtimeLogConfigCommand";
import { GetStreamingDistributionCommand } from "./commands/GetStreamingDistributionCommand";
import { GetStreamingDistributionConfigCommand } from "./commands/GetStreamingDistributionConfigCommand";
import { ListCachePoliciesCommand } from "./commands/ListCachePoliciesCommand";
import { ListCloudFrontOriginAccessIdentitiesCommand } from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { ListDistributionsByCachePolicyIdCommand } from "./commands/ListDistributionsByCachePolicyIdCommand";
import { ListDistributionsByKeyGroupCommand } from "./commands/ListDistributionsByKeyGroupCommand";
import { ListDistributionsByOriginRequestPolicyIdCommand } from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import { ListDistributionsByRealtimeLogConfigCommand } from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import { ListDistributionsByWebACLIdCommand } from "./commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommand } from "./commands/ListDistributionsCommand";
import { ListFieldLevelEncryptionConfigsCommand } from "./commands/ListFieldLevelEncryptionConfigsCommand";
import { ListFieldLevelEncryptionProfilesCommand } from "./commands/ListFieldLevelEncryptionProfilesCommand";
import { ListFunctionsCommand } from "./commands/ListFunctionsCommand";
import { ListInvalidationsCommand } from "./commands/ListInvalidationsCommand";
import { ListKeyGroupsCommand } from "./commands/ListKeyGroupsCommand";
import { ListOriginRequestPoliciesCommand } from "./commands/ListOriginRequestPoliciesCommand";
import { ListPublicKeysCommand } from "./commands/ListPublicKeysCommand";
import { ListRealtimeLogConfigsCommand } from "./commands/ListRealtimeLogConfigsCommand";
import { ListStreamingDistributionsCommand } from "./commands/ListStreamingDistributionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PublishFunctionCommand } from "./commands/PublishFunctionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestFunctionCommand } from "./commands/TestFunctionCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateCachePolicyCommand } from "./commands/UpdateCachePolicyCommand";
import { UpdateCloudFrontOriginAccessIdentityCommand } from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import { UpdateDistributionCommand } from "./commands/UpdateDistributionCommand";
import { UpdateFieldLevelEncryptionConfigCommand } from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import { UpdateFieldLevelEncryptionProfileCommand } from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import { UpdateFunctionCommand } from "./commands/UpdateFunctionCommand";
import { UpdateKeyGroupCommand } from "./commands/UpdateKeyGroupCommand";
import { UpdateOriginRequestPolicyCommand } from "./commands/UpdateOriginRequestPolicyCommand";
import { UpdatePublicKeyCommand } from "./commands/UpdatePublicKeyCommand";
import { UpdateRealtimeLogConfigCommand } from "./commands/UpdateRealtimeLogConfigCommand";
import { UpdateStreamingDistributionCommand } from "./commands/UpdateStreamingDistributionCommand";
/**
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
var CloudFront = /** @class */ (function (_super) {
  __extends(CloudFront, _super);
  function CloudFront() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CloudFront.prototype.createCachePolicy = function (args, optionsOrCb, cb) {
    var command = new CreateCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createCloudFrontOriginAccessIdentity = function (args, optionsOrCb, cb) {
    var command = new CreateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createDistribution = function (args, optionsOrCb, cb) {
    var command = new CreateDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createDistributionWithTags = function (args, optionsOrCb, cb) {
    var command = new CreateDistributionWithTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createFieldLevelEncryptionConfig = function (args, optionsOrCb, cb) {
    var command = new CreateFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createFieldLevelEncryptionProfile = function (args, optionsOrCb, cb) {
    var command = new CreateFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createFunction = function (args, optionsOrCb, cb) {
    var command = new CreateFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createInvalidation = function (args, optionsOrCb, cb) {
    var command = new CreateInvalidationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createKeyGroup = function (args, optionsOrCb, cb) {
    var command = new CreateKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createMonitoringSubscription = function (args, optionsOrCb, cb) {
    var command = new CreateMonitoringSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createOriginRequestPolicy = function (args, optionsOrCb, cb) {
    var command = new CreateOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createPublicKey = function (args, optionsOrCb, cb) {
    var command = new CreatePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createRealtimeLogConfig = function (args, optionsOrCb, cb) {
    var command = new CreateRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createStreamingDistribution = function (args, optionsOrCb, cb) {
    var command = new CreateStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.createStreamingDistributionWithTags = function (args, optionsOrCb, cb) {
    var command = new CreateStreamingDistributionWithTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteCachePolicy = function (args, optionsOrCb, cb) {
    var command = new DeleteCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteCloudFrontOriginAccessIdentity = function (args, optionsOrCb, cb) {
    var command = new DeleteCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteDistribution = function (args, optionsOrCb, cb) {
    var command = new DeleteDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteFieldLevelEncryptionConfig = function (args, optionsOrCb, cb) {
    var command = new DeleteFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteFieldLevelEncryptionProfile = function (args, optionsOrCb, cb) {
    var command = new DeleteFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteFunction = function (args, optionsOrCb, cb) {
    var command = new DeleteFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteKeyGroup = function (args, optionsOrCb, cb) {
    var command = new DeleteKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteMonitoringSubscription = function (args, optionsOrCb, cb) {
    var command = new DeleteMonitoringSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteOriginRequestPolicy = function (args, optionsOrCb, cb) {
    var command = new DeleteOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deletePublicKey = function (args, optionsOrCb, cb) {
    var command = new DeletePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteRealtimeLogConfig = function (args, optionsOrCb, cb) {
    var command = new DeleteRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.deleteStreamingDistribution = function (args, optionsOrCb, cb) {
    var command = new DeleteStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.describeFunction = function (args, optionsOrCb, cb) {
    var command = new DescribeFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getCachePolicy = function (args, optionsOrCb, cb) {
    var command = new GetCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getCachePolicyConfig = function (args, optionsOrCb, cb) {
    var command = new GetCachePolicyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getCloudFrontOriginAccessIdentity = function (args, optionsOrCb, cb) {
    var command = new GetCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getCloudFrontOriginAccessIdentityConfig = function (args, optionsOrCb, cb) {
    var command = new GetCloudFrontOriginAccessIdentityConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getDistribution = function (args, optionsOrCb, cb) {
    var command = new GetDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getDistributionConfig = function (args, optionsOrCb, cb) {
    var command = new GetDistributionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getFieldLevelEncryption = function (args, optionsOrCb, cb) {
    var command = new GetFieldLevelEncryptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getFieldLevelEncryptionConfig = function (args, optionsOrCb, cb) {
    var command = new GetFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getFieldLevelEncryptionProfile = function (args, optionsOrCb, cb) {
    var command = new GetFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getFieldLevelEncryptionProfileConfig = function (args, optionsOrCb, cb) {
    var command = new GetFieldLevelEncryptionProfileConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getFunction = function (args, optionsOrCb, cb) {
    var command = new GetFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getInvalidation = function (args, optionsOrCb, cb) {
    var command = new GetInvalidationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getKeyGroup = function (args, optionsOrCb, cb) {
    var command = new GetKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getKeyGroupConfig = function (args, optionsOrCb, cb) {
    var command = new GetKeyGroupConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getMonitoringSubscription = function (args, optionsOrCb, cb) {
    var command = new GetMonitoringSubscriptionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getOriginRequestPolicy = function (args, optionsOrCb, cb) {
    var command = new GetOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getOriginRequestPolicyConfig = function (args, optionsOrCb, cb) {
    var command = new GetOriginRequestPolicyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getPublicKey = function (args, optionsOrCb, cb) {
    var command = new GetPublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getPublicKeyConfig = function (args, optionsOrCb, cb) {
    var command = new GetPublicKeyConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getRealtimeLogConfig = function (args, optionsOrCb, cb) {
    var command = new GetRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getStreamingDistribution = function (args, optionsOrCb, cb) {
    var command = new GetStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.getStreamingDistributionConfig = function (args, optionsOrCb, cb) {
    var command = new GetStreamingDistributionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listCachePolicies = function (args, optionsOrCb, cb) {
    var command = new ListCachePoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listCloudFrontOriginAccessIdentities = function (args, optionsOrCb, cb) {
    var command = new ListCloudFrontOriginAccessIdentitiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listDistributions = function (args, optionsOrCb, cb) {
    var command = new ListDistributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listDistributionsByCachePolicyId = function (args, optionsOrCb, cb) {
    var command = new ListDistributionsByCachePolicyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listDistributionsByKeyGroup = function (args, optionsOrCb, cb) {
    var command = new ListDistributionsByKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listDistributionsByOriginRequestPolicyId = function (args, optionsOrCb, cb) {
    var command = new ListDistributionsByOriginRequestPolicyIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listDistributionsByRealtimeLogConfig = function (args, optionsOrCb, cb) {
    var command = new ListDistributionsByRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listDistributionsByWebACLId = function (args, optionsOrCb, cb) {
    var command = new ListDistributionsByWebACLIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listFieldLevelEncryptionConfigs = function (args, optionsOrCb, cb) {
    var command = new ListFieldLevelEncryptionConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listFieldLevelEncryptionProfiles = function (args, optionsOrCb, cb) {
    var command = new ListFieldLevelEncryptionProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listFunctions = function (args, optionsOrCb, cb) {
    var command = new ListFunctionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listInvalidations = function (args, optionsOrCb, cb) {
    var command = new ListInvalidationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listKeyGroups = function (args, optionsOrCb, cb) {
    var command = new ListKeyGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listOriginRequestPolicies = function (args, optionsOrCb, cb) {
    var command = new ListOriginRequestPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listPublicKeys = function (args, optionsOrCb, cb) {
    var command = new ListPublicKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listRealtimeLogConfigs = function (args, optionsOrCb, cb) {
    var command = new ListRealtimeLogConfigsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listStreamingDistributions = function (args, optionsOrCb, cb) {
    var command = new ListStreamingDistributionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.publishFunction = function (args, optionsOrCb, cb) {
    var command = new PublishFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.testFunction = function (args, optionsOrCb, cb) {
    var command = new TestFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateCachePolicy = function (args, optionsOrCb, cb) {
    var command = new UpdateCachePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateCloudFrontOriginAccessIdentity = function (args, optionsOrCb, cb) {
    var command = new UpdateCloudFrontOriginAccessIdentityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateDistribution = function (args, optionsOrCb, cb) {
    var command = new UpdateDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateFieldLevelEncryptionConfig = function (args, optionsOrCb, cb) {
    var command = new UpdateFieldLevelEncryptionConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateFieldLevelEncryptionProfile = function (args, optionsOrCb, cb) {
    var command = new UpdateFieldLevelEncryptionProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateFunction = function (args, optionsOrCb, cb) {
    var command = new UpdateFunctionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateKeyGroup = function (args, optionsOrCb, cb) {
    var command = new UpdateKeyGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateOriginRequestPolicy = function (args, optionsOrCb, cb) {
    var command = new UpdateOriginRequestPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updatePublicKey = function (args, optionsOrCb, cb) {
    var command = new UpdatePublicKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateRealtimeLogConfig = function (args, optionsOrCb, cb) {
    var command = new UpdateRealtimeLogConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  CloudFront.prototype.updateStreamingDistribution = function (args, optionsOrCb, cb) {
    var command = new UpdateStreamingDistributionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return CloudFront;
})(CloudFrontClient);
export { CloudFront };
//# sourceMappingURL=CloudFront.js.map
