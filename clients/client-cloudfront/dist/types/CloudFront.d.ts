import { CloudFrontClient } from "./CloudFrontClient";
import { CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput } from "./commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "./commands/CreateDistributionCommand";
import {
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
} from "./commands/CreateDistributionWithTagsCommand";
import {
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import {
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import { CreateInvalidationCommandInput, CreateInvalidationCommandOutput } from "./commands/CreateInvalidationCommand";
import { CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput } from "./commands/CreateKeyGroupCommand";
import {
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
} from "./commands/CreateMonitoringSubscriptionCommand";
import {
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
} from "./commands/CreateOriginRequestPolicyCommand";
import { CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput } from "./commands/CreatePublicKeyCommand";
import {
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
} from "./commands/CreateRealtimeLogConfigCommand";
import {
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
} from "./commands/CreateStreamingDistributionCommand";
import {
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import { DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput } from "./commands/DeleteCachePolicyCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "./commands/DeleteDistributionCommand";
import {
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import { DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput } from "./commands/DeleteKeyGroupCommand";
import {
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
} from "./commands/DeleteMonitoringSubscriptionCommand";
import {
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
} from "./commands/DeleteOriginRequestPolicyCommand";
import { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "./commands/DeletePublicKeyCommand";
import {
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
} from "./commands/DeleteRealtimeLogConfigCommand";
import {
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
} from "./commands/DeleteStreamingDistributionCommand";
import { DescribeFunctionCommandInput, DescribeFunctionCommandOutput } from "./commands/DescribeFunctionCommand";
import { GetCachePolicyCommandInput, GetCachePolicyCommandOutput } from "./commands/GetCachePolicyCommand";
import {
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
} from "./commands/GetCachePolicyConfigCommand";
import {
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import { GetDistributionCommandInput, GetDistributionCommandOutput } from "./commands/GetDistributionCommand";
import {
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
} from "./commands/GetDistributionConfigCommand";
import {
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
} from "./commands/GetFieldLevelEncryptionCommand";
import {
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import {
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import {
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import { GetInvalidationCommandInput, GetInvalidationCommandOutput } from "./commands/GetInvalidationCommand";
import { GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "./commands/GetKeyGroupCommand";
import { GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput } from "./commands/GetKeyGroupConfigCommand";
import {
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
} from "./commands/GetMonitoringSubscriptionCommand";
import {
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
} from "./commands/GetOriginRequestPolicyCommand";
import {
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
} from "./commands/GetOriginRequestPolicyConfigCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand";
import { GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput } from "./commands/GetPublicKeyConfigCommand";
import {
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
} from "./commands/GetRealtimeLogConfigCommand";
import {
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput,
} from "./commands/GetStreamingDistributionCommand";
import {
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
} from "./commands/GetStreamingDistributionConfigCommand";
import { ListCachePoliciesCommandInput, ListCachePoliciesCommandOutput } from "./commands/ListCachePoliciesCommand";
import {
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
import {
  ListDistributionsByKeyGroupCommandInput,
  ListDistributionsByKeyGroupCommandOutput,
} from "./commands/ListDistributionsByKeyGroupCommand";
import {
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
} from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import {
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
} from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import {
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "./commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "./commands/ListDistributionsCommand";
import {
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import {
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import { ListInvalidationsCommandInput, ListInvalidationsCommandOutput } from "./commands/ListInvalidationsCommand";
import { ListKeyGroupsCommandInput, ListKeyGroupsCommandOutput } from "./commands/ListKeyGroupsCommand";
import {
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
} from "./commands/ListOriginRequestPoliciesCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import {
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
} from "./commands/ListRealtimeLogConfigsCommand";
import {
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "./commands/ListStreamingDistributionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PublishFunctionCommandInput, PublishFunctionCommandOutput } from "./commands/PublishFunctionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestFunctionCommandInput, TestFunctionCommandOutput } from "./commands/TestFunctionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput } from "./commands/UpdateCachePolicyCommand";
import {
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "./commands/UpdateDistributionCommand";
import {
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "./commands/UpdateFunctionCommand";
import { UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput } from "./commands/UpdateKeyGroupCommand";
import {
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
} from "./commands/UpdateOriginRequestPolicyCommand";
import { UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput } from "./commands/UpdatePublicKeyCommand";
import {
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
} from "./commands/UpdateRealtimeLogConfigCommand";
import {
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
} from "./commands/UpdateStreamingDistributionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export declare class CloudFront extends CloudFrontClient {
  /**
   * <p>Creates a cache policy.</p>
   * 		       <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it’s
   * 			attached to a cache behavior, the cache policy determines the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The values that CloudFront includes in the <i>cache key</i>. These values can
   * 					include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to
   * 					find an object in its cache that it can return to the viewer.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay
   * 					in the CloudFront cache.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>The headers, cookies, and query strings that are included in the cache key are automatically
   * 			included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t
   * 			find an object in its cache that matches the request’s cache key. If you want to send
   * 			values to the origin but <i>not</i> include them in the cache key, use
   * 			<code>OriginRequestPolicy</code>.</p>
   * 		       <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCachePolicyCommandOutput>;
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
   * 			use an origin access identity to require users to access your content using a CloudFront URL instead
   * 			of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput>;
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you
   * 			want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the
   * 			<code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p>
   * 		       <important>
   *             <p>When you update a distribution, there are more required fields than when you create a distribution.
   * 			When you update your distribution by using
   * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>,
   * 			follow the steps included
   * 			in the documentation to get the current configuration
   * 			and then make your updates. This helps to make sure that you include all of the required fields. To view a summary,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
   * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          </important>
   */
  createDistribution(
    args: CreateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionCommandOutput>;
  createDistribution(
    args: CreateDistributionCommandInput,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  createDistribution(
    args: CreateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  /**
   * <p>Create a new distribution with tags.</p>
   */
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionWithTagsCommandOutput>;
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  /**
   * <p>Create a new field-level encryption configuration.</p>
   */
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput>;
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  /**
   * <p>Create a field-level encryption profile.</p>
   */
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput>;
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  /**
   * <p>Creates a CloudFront function.</p>
   * 		       <p>To create a function, you provide the function code and some configuration information
   * 			about the function. The response contains an Amazon Resource Name (ARN) that uniquely
   * 			identifies the function.</p>
   * 		       <p>When you create a function, it’s in the <code>DEVELOPMENT</code> stage. In this stage, you
   * 			can test the function with <code>TestFunction</code>, and update it with
   * 			<code>UpdateFunction</code>.</p>
   * 		       <p>When you’re ready to use your function with a CloudFront distribution, use
   * 			<code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code>
   * 			stage to <code>LIVE</code>. When it’s live, you can attach the function to a
   * 			distribution’s cache behavior, using the function’s ARN.</p>
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(args: CreateFunctionCommandInput, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Create a new invalidation. </p>
   */
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvalidationCommandOutput>;
  createInvalidation(
    args: CreateInvalidationCommandInput,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  /**
   * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
   * 		       <p>To create a key group, you must specify at least one public key for the key group. After you
   * 			create a key group, you can reference it from one or more cache behaviors. When you
   * 			reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies
   * 			for all requests that match the cache behavior. The URLs or cookies must be signed with
   * 			a private key whose corresponding public key is in the key group. The signed URL or
   * 			cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyGroupCommandOutput>;
  createKeyGroup(args: CreateKeyGroupCommandInput, cb: (err: any, data?: CreateKeyGroupCommandOutput) => void): void;
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): void;
  /**
   * <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The
   * 			additional metrics incur an additional cost.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitoringSubscriptionCommandOutput>;
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;
  /**
   * <p>Creates an origin request policy.</p>
   * 		       <p>After you create an origin request policy, you can attach it to one or more cache behaviors.
   * 			When it’s attached to a cache behavior, the origin request policy determines the values
   * 			that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends
   * 			to the origin includes the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The request body and the URL path (without the domain name) from the viewer
   * 					request.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The headers that CloudFront automatically includes in every origin request, including
   * 					<code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or
   * 					the origin request policy. These can include items from the viewer request and,
   * 					in the case of headers, additional ones that are added by CloudFront.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>CloudFront sends a request when it can’t find a valid object in its cache that matches the
   * 			request. If you want to send values to the origin and also include them in the cache
   * 			key, use <code>CachePolicy</code>.</p>
   * 		       <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginRequestPolicyCommandOutput>;
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
   */
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicKeyCommandOutput>;
  createPublicKey(args: CreatePublicKeyCommandInput, cb: (err: any, data?: CreatePublicKeyCommandOutput) => void): void;
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;
  /**
   * <p>Creates a real-time log configuration.</p>
   * 		       <p>After you create a real-time log configuration, you can attach it to one or more cache
   * 			behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p>
   * 		       <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRealtimeLogConfigCommandOutput>;
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;
  /**
   * <p>This API is deprecated.
   *             Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020.
   *             For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.</p>
   */
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionCommandOutput>;
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  /**
   * <p>This API is deprecated.
   *             Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020.
   *             For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.</p>
   */
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput>;
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a cache policy.</p>
   * 		       <p>You cannot delete a cache policy if it’s attached to a cache behavior. First update your
   * 			distributions to remove the cache policy from all cache behaviors, then delete the cache
   * 			policy.</p>
   * 		       <p>To delete a cache policy, you must provide the policy’s identifier and version. To get these
   * 			values, you can use <code>ListCachePolicies</code> or
   * 			<code>GetCachePolicy</code>.</p>
   */
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCachePolicyCommandOutput>;
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;
  /**
   * <p>Delete an origin access identity. </p>
   */
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput>;
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  /**
   * <p>Delete a distribution. </p>
   */
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionCommandOutput>;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  /**
   * <p>Remove a field-level encryption configuration.</p>
   */
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput>;
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  /**
   * <p>Remove a field-level encryption profile.</p>
   */
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput>;
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a CloudFront function.</p>
   * 		       <p>You cannot delete a function if it’s associated with a cache behavior. First, update your
   * 			distributions to remove the function association from all cache behaviors, then delete
   * 			the function.</p>
   * 		       <p>To delete a function, you must provide the function’s name and version
   * 			(<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code>
   * 			and <code>DescribeFunction</code>.</p>
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(args: DeleteFunctionCommandInput, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a key group.</p>
   * 		       <p>You cannot delete a key group that is referenced in a cache behavior. First update
   * 			your distributions to remove the key group from all cache behaviors, then delete the key
   * 			group.</p>
   * 		       <p>To delete a key group, you must provide the key group’s identifier and version. To get
   * 			these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or
   * 			<code>GetKeyGroupConfig</code>.</p>
   */
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyGroupCommandOutput>;
  deleteKeyGroup(args: DeleteKeyGroupCommandInput, cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void): void;
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): void;
  /**
   * <p>Disables additional CloudWatch metrics for the specified CloudFront distribution.</p>
   */
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitoringSubscriptionCommandOutput>;
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an origin request policy.</p>
   * 		       <p>You cannot delete an origin request policy if it’s attached to any cache behaviors. First
   * 			update your distributions to remove the origin request policy from all cache behaviors,
   * 			then delete the origin request policy.</p>
   * 		       <p>To delete an origin request policy, you must provide the policy’s identifier and version. To
   * 			get the identifier, you can use <code>ListOriginRequestPolicies</code> or
   * 			<code>GetOriginRequestPolicy</code>.</p>
   */
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginRequestPolicyCommandOutput>;
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Remove a public key you previously added to CloudFront.</p>
   */
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicKeyCommandOutput>;
  deletePublicKey(args: DeletePublicKeyCommandInput, cb: (err: any, data?: DeletePublicKeyCommandOutput) => void): void;
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a real-time log configuration.</p>
   * 		       <p>You cannot delete a real-time log configuration if it’s attached to a cache behavior.
   * 			First update your distributions to remove the real-time log configuration from all cache
   * 			behaviors, then delete the real-time log configuration.</p>
   * 		       <p>To delete a real-time log configuration, you can provide the configuration’s name or its
   * 			Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
   * 			uses the name to identify the real-time log configuration to delete.</p>
   */
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRealtimeLogConfigCommandOutput>;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;
  /**
   * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
   * 			perform the following steps.</p>
   *
   * 		       <p>
   *             <b>To delete an RTMP distribution using the CloudFront
   * 			API</b>:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Disable the RTMP distribution.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current
   * 					configuration and the <code>Etag</code> header for the distribution. </p>
   * 			         </li>
   *             <li>
   * 				           <p>Update the XML document that was returned in the response to your <code>GET
   * 						Streaming Distribution Config</code> request to change the value of <code>Enabled</code>
   * 					to <code>false</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
   * 					configuration for your distribution. In the request body, include the XML document that
   * 					you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the
   * 					value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET
   * 						Streaming Distribution Config</code> request in Step 2.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Review the response to the <code>PUT Streaming Distribution Config</code> request
   * 					to confirm that the distribution was successfully disabled.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that
   * 					your changes have propagated. When propagation is complete, the value of
   * 						<code>Status</code> is <code>Deployed</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the
   * 					HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
   * 					returned when you submitted the <code>GET Streaming Distribution Config</code> request in
   * 					Step 2.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Review the response to your <code>DELETE Streaming Distribution</code> request to
   * 					confirm that the distribution was successfully deleted.</p>
   * 			         </li>
   *          </ol>
   * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingDistributionCommandOutput>;
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  /**
   * <p>Gets configuration information and metadata about a CloudFront function, but not the function’s
   * 			code. To get a function’s code, use <code>GetFunction</code>.</p>
   * 		       <p>To get configuration information and metadata about a function, you must provide the
   * 			function’s name and stage. To get these values, you can use
   * 			<code>ListFunctions</code>.</p>
   */
  describeFunction(
    args: DescribeFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFunctionCommandOutput>;
  describeFunction(
    args: DescribeFunctionCommandInput,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;
  describeFunction(
    args: DescribeFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Gets a cache policy, including the following metadata:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The policy’s identifier.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The date and time when the policy was last modified.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>To get a cache policy, you must provide the policy’s identifier. If the cache policy is
   * 			attached to a distribution’s cache behavior, you can get the policy’s identifier using
   * 			<code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is
   * 			not attached to a cache behavior, you can get the identifier using
   * 			<code>ListCachePolicies</code>.</p>
   */
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCachePolicyCommandOutput>;
  getCachePolicy(args: GetCachePolicyCommandInput, cb: (err: any, data?: GetCachePolicyCommandOutput) => void): void;
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): void;
  /**
   * <p>Gets a cache policy configuration.</p>
   * 		       <p>To get a cache policy configuration, you must provide the policy’s identifier. If the cache
   * 			policy is attached to a distribution’s cache behavior, you can get the policy’s
   * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
   * 			cache policy is not attached to a cache behavior, you can get the identifier using
   * 			<code>ListCachePolicies</code>.</p>
   */
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCachePolicyConfigCommandOutput>;
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;
  /**
   * <p>Get the information about an origin access identity. </p>
   */
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput>;
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  /**
   * <p>Get the configuration information about an origin access identity. </p>
   */
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;
  /**
   * <p>Get the information about a distribution.</p>
   */
  getDistribution(
    args: GetDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionCommandOutput>;
  getDistribution(args: GetDistributionCommandInput, cb: (err: any, data?: GetDistributionCommandOutput) => void): void;
  getDistribution(
    args: GetDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;
  /**
   * <p>Get the configuration information about a distribution. </p>
   */
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionConfigCommandOutput>;
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  /**
   * <p>Get the field-level encryption configuration information.</p>
   */
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionCommandOutput>;
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  /**
   * <p>Get the field-level encryption configuration information.</p>
   */
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput>;
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  /**
   * <p>Get the field-level encryption profile information.</p>
   */
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput>;
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  /**
   * <p>Get the field-level encryption profile configuration information.</p>
   */
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput>;
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;
  /**
   * <p>Gets the code of a CloudFront function. To get configuration information and metadata about
   * 			a function, use <code>DescribeFunction</code>.</p>
   * 		       <p>To get a function’s code, you must provide the function’s name and stage. To get these
   * 			values, you can use <code>ListFunctions</code>.</p>
   */
  getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Get the information about an invalidation. </p>
   */
  getInvalidation(
    args: GetInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvalidationCommandOutput>;
  getInvalidation(args: GetInvalidationCommandInput, cb: (err: any, data?: GetInvalidationCommandOutput) => void): void;
  getInvalidation(
    args: GetInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;
  /**
   * <p>Gets a key group, including the date and time when the key group was last modified.</p>
   * 		       <p>To get a key group, you must provide the key group’s identifier. If the key group is
   * 			referenced in a distribution’s cache behavior, you can get the key group’s identifier
   * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group
   * 			is not referenced in a cache behavior, you can get the identifier using
   * 			<code>ListKeyGroups</code>.</p>
   */
  getKeyGroup(args: GetKeyGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyGroupCommandOutput>;
  getKeyGroup(args: GetKeyGroupCommandInput, cb: (err: any, data?: GetKeyGroupCommandOutput) => void): void;
  getKeyGroup(
    args: GetKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyGroupCommandOutput) => void
  ): void;
  /**
   * <p>Gets a key group configuration.</p>
   * 		       <p>To get a key group configuration, you must provide the key group’s identifier. If the
   * 			key group is referenced in a distribution’s cache behavior, you can get the key group’s
   * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
   * 			key group is not referenced in a cache behavior, you can get the identifier using
   * 			<code>ListKeyGroups</code>.</p>
   */
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyGroupConfigCommandOutput>;
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about whether additional CloudWatch metrics are enabled for the specified
   * 			CloudFront distribution.</p>
   */
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMonitoringSubscriptionCommandOutput>;
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;
  /**
   * <p>Gets an origin request policy, including the following metadata:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The policy’s identifier.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The date and time when the policy was last modified.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>To get an origin request policy, you must provide the policy’s identifier. If the origin
   * 			request policy is attached to a distribution’s cache behavior, you can get the policy’s
   * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
   * 			origin request policy is not attached to a cache behavior, you can get the identifier
   * 			using <code>ListOriginRequestPolicies</code>.</p>
   */
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginRequestPolicyCommandOutput>;
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Gets an origin request policy configuration.</p>
   * 		       <p>To get an origin request policy configuration, you must provide the policy’s identifier. If
   * 			the origin request policy is attached to a distribution’s cache behavior, you can get
   * 			the policy’s identifier using <code>ListDistributions</code> or
   * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
   * 			behavior, you can get the identifier using
   * 			<code>ListOriginRequestPolicies</code>.</p>
   */
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginRequestPolicyConfigCommandOutput>;
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;
  /**
   * <p>Gets a public key.</p>
   */
  getPublicKey(args: GetPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicKeyCommandOutput>;
  getPublicKey(args: GetPublicKeyCommandInput, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;
  /**
   * <p>Gets a public key configuration.</p>
   */
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyConfigCommandOutput>;
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  /**
   * <p>Gets a real-time log configuration.</p>
   * 		       <p>To get a real-time log configuration, you can provide the configuration’s name or its Amazon
   * 			Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the
   * 			name to identify the real-time log configuration to get.</p>
   */
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRealtimeLogConfigCommandOutput>;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about a specified RTMP distribution, including the distribution configuration.</p>
   */
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionCommandOutput>;
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  /**
   * <p>Get the configuration information about a streaming distribution. </p>
   */
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionConfigCommandOutput>;
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of cache policies.</p>
   * 		       <p>You can optionally apply a filter to return only the managed policies created by AWS, or
   * 			only the custom policies created in your AWS account.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCachePoliciesCommandOutput>;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;
  /**
   * <p>Lists origin access identities.</p>
   */
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;
  /**
   * <p>List CloudFront distributions.</p>
   */
  listDistributions(
    args: ListDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsCommandOutput>;
  listDistributions(
    args: ListDistributionsCommandInput,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  listDistributions(
    args: ListDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that’s
   * 			associated with the specified cache policy.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput>;
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that references
   * 			the specified key group.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByKeyGroupCommandOutput>;
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that’s
   * 			associated with the specified origin request policy.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput>;
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of distributions that have a cache behavior that’s associated with the specified
   * 			real-time log configuration.</p>
   * 		       <p>You can specify the real-time log configuration by its name or its Amazon Resource Name
   * 			(ARN). You must provide at least one. If you provide both, CloudFront uses the name to
   * 			identify the real-time log configuration to list distributions for.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request. </p>
   */
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput>;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;
  /**
   * <p>List the distributions that are associated with a specified AWS WAF web ACL. </p>
   */
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByWebACLIdCommandOutput>;
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  /**
   * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
   */
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  /**
   * <p>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</p>
   */
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of all CloudFront functions in your AWS account.</p>
   * 		       <p>You can optionally apply a filter to return only the functions that are in the
   * 			specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listFunctions(args: ListFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsCommandOutput>;
  listFunctions(args: ListFunctionsCommandInput, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  /**
   * <p>Lists invalidation batches. </p>
   */
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvalidationsCommandOutput>;
  listInvalidations(
    args: ListInvalidationsCommandInput,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of key groups.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listKeyGroups(args: ListKeyGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListKeyGroupsCommandOutput>;
  listKeyGroups(args: ListKeyGroupsCommandInput, cb: (err: any, data?: ListKeyGroupsCommandOutput) => void): void;
  listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of origin request policies.</p>
   * 		       <p>You can optionally apply a filter to return only the managed policies created by AWS, or
   * 			only the custom policies created in your AWS account.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginRequestPoliciesCommandOutput>;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;
  /**
   * <p>List all public keys that have been added to CloudFront for this account.</p>
   */
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(args: ListPublicKeysCommandInput, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  /**
   * <p>Gets a list of real-time log configurations.</p>
   * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request. </p>
   */
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRealtimeLogConfigsCommandOutput>;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;
  /**
   * <p>List streaming distributions. </p>
   */
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingDistributionsCommandOutput>;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  /**
   * <p>List tags for a CloudFront resource.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code>
   * 			stage to <code>LIVE</code>. This automatically updates all cache behaviors that are
   * 			using this function to use the newly published copy in the <code>LIVE</code>
   * 			stage.</p>
   * 		       <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to
   * 			a distribution’s cache behavior, using the function’s Amazon Resource Name (ARN).</p>
   * 		       <p>To publish a function, you must provide the function’s name and version (<code>ETag</code>
   * 			value). To get these values, you can use <code>ListFunctions</code> and
   * 			<code>DescribeFunction</code>.</p>
   */
  publishFunction(
    args: PublishFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishFunctionCommandOutput>;
  publishFunction(args: PublishFunctionCommandInput, cb: (err: any, data?: PublishFunctionCommandOutput) => void): void;
  publishFunction(
    args: PublishFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Add tags to a CloudFront resource.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Tests a CloudFront function.</p>
   * 		       <p>To test a function, you provide an <i>event object</i> that represents an HTTP
   * 			request or response that your CloudFront distribution could receive in production. CloudFront runs
   * 			the function, passing it the event object that you provided, and returns the function’s
   * 			result (the modified event object) in the response. The response also contains function
   * 			logs and error messages, if any exist. For more information about testing functions, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>To test a function, you provide the function’s name and version (<code>ETag</code> value)
   * 			along with the event object. To get the function’s name and version, you can use
   * 			<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
   */
  testFunction(args: TestFunctionCommandInput, options?: __HttpHandlerOptions): Promise<TestFunctionCommandOutput>;
  testFunction(args: TestFunctionCommandInput, cb: (err: any, data?: TestFunctionCommandOutput) => void): void;
  testFunction(
    args: TestFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Remove tags from a CloudFront resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates a cache policy configuration.</p>
   * 		       <p>When you update a cache policy configuration, all the fields are updated with the
   * 			values provided in the request. You cannot update some fields independent of others. To
   * 			update a cache policy configuration:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Locally modify the fields in the cache policy configuration that you want to
   * 					update.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
   * 					configuration, including the fields that you modified and those that you
   * 					didn’t.</p>
   * 			         </li>
   *          </ol>
   */
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCachePolicyCommandOutput>;
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;
  /**
   * <p>Update an origin access identity. </p>
   */
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput>;
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  /**
   * <p>Updates the configuration for a web distribution. </p>
   * 		       <important>
   *             <p>When you update a distribution, there are more required fields than when you create a distribution.
   * 			When you update your distribution by using this API action, follow the steps here to get the current configuration
   * 			and then make your updates, to make sure that you include all of the required fields. To view a summary,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
   * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          </important>
   * 		       <p>The update process includes getting the current distribution configuration, updating the XML document that is
   * 			returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p>
   * 		       <p>For information about updating a distribution using the CloudFront console instead, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a
   * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *
   * 		       <p>
   *             <b>To update a web distribution using the CloudFront API</b>
   *          </p>
   * 		       <ol>
   *             <li>
   *                <p>Submit a
   * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html">GetDistributionConfig</a>
   * 				request to get the current configuration and an <code>Etag</code> header
   * 				for the distribution.</p>
   * 				           <note>
   *                   <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p>
   *                </note>
   * 			         </li>
   *             <li>
   *                <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include
   * 				your changes. </p>
   * 				           <important>
   * 					             <p>When you edit the XML file, be aware of the following:</p>
   * 					             <ul>
   *                      <li>
   *                         <p>You must strip out the ETag parameter that is returned.</p>
   *                      </li>
   *                      <li>
   *                         <p>Additional fields are required when you update a distribution. There may be fields included in the
   * 							XML file for features that you haven't configured for your distribution. This is expected and required to
   * 							successfully update the distribution.</p>
   *                      </li>
   *                      <li>
   *                         <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an
   * 							<code>IllegalUpdate</code> error. </p>
   *                      </li>
   *                      <li>
   *                         <p>The new configuration replaces the existing configuration; the values that you specify in an
   * 							<code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or
   * 							replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the
   * 							values that you want to appear in the updated distribution. In addition,
   * 							you must update the corresponding <code>Quantity</code> element.</p>
   *                      </li>
   *                   </ul>
   *                </important>
   * 			         </li>
   *             <li>
   *                <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p>
   * 				           <ul>
   *                   <li>
   *                      <p>In the request body, include the XML document that you updated in Step 2. The request body must include an
   * 						XML document with a <code>DistributionConfig</code> element.</p>
   *                   </li>
   *                   <li>
   *                      <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned
   * 						when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *             <li>
   *                <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was
   * 				successfully updated.</p>
   *             </li>
   *             <li>
   *                <p>Optional: Submit a
   * 				<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a>
   * 				request to confirm that your changes have propagated.
   * 				When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p>
   * 			         </li>
   *          </ol>
   */
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionCommandOutput>;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  /**
   * <p>Update a field-level encryption configuration. </p>
   */
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput>;
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  /**
   * <p>Update a field-level encryption profile. </p>
   */
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput>;
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  /**
   * <p>Updates a CloudFront function.</p>
   * 		       <p>You can update a function’s code or the comment that describes the function. You
   * 			cannot update a function’s name.</p>
   * 		       <p>To update a function, you provide the function’s name and version (<code>ETag</code> value)
   * 			along with the updated function code. To get the name and version, you can use
   * 			<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCommandOutput>;
  updateFunction(args: UpdateFunctionCommandInput, cb: (err: any, data?: UpdateFunctionCommandOutput) => void): void;
  updateFunction(
    args: UpdateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  /**
   * <p>Updates a key group.</p>
   * 		       <p>When you update a key group, all the fields are updated with the values provided in
   * 			the request. You cannot update some fields independent of others. To update a key
   * 			group:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Get the current key group with <code>GetKeyGroup</code> or
   * 					<code>GetKeyGroupConfig</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Locally modify the fields in the key group that you want to update. For
   * 					example, add or remove public key IDs.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
   * 					the fields that you modified and those that you didn’t.</p>
   * 			         </li>
   *          </ol>
   */
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeyGroupCommandOutput>;
  updateKeyGroup(args: UpdateKeyGroupCommandInput, cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void): void;
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): void;
  /**
   * <p>Updates an origin request policy configuration.</p>
   * 		       <p>When you update an origin request policy configuration, all the fields are updated
   * 			with the values provided in the request. You cannot update some fields independent of
   * 			others. To update an origin request policy configuration:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Locally modify the fields in the origin request policy configuration that you
   * 					want to update.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin
   * 					request policy configuration, including the fields that you modified and those
   * 					that you didn’t.</p>
   * 			         </li>
   *          </ol>
   */
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginRequestPolicyCommandOutput>;
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Update public key information. Note that the only value you can change is the comment.</p>
   */
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicKeyCommandOutput>;
  updatePublicKey(args: UpdatePublicKeyCommandInput, cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void): void;
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;
  /**
   * <p>Updates a real-time log configuration.</p>
   * 		       <p>When you update a real-time log configuration, all the parameters are updated with the
   * 			values provided in the request. You cannot update some parameters independent of others.
   * 			To update a real-time log configuration:</p>
   * 		       <ol>
   *             <li>
   * 				           <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
   * 					configuration.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Locally modify the parameters in the real-time log configuration that you want
   * 					to update.</p>
   * 			         </li>
   *             <li>
   * 				           <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
   * 					real-time log configuration, including the parameters that you modified and
   * 					those that you didn’t.</p>
   * 			         </li>
   *          </ol>
   * 		       <p>You cannot update a real-time log configuration’s <code>Name</code> or
   * 			<code>ARN</code>.</p>
   */
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRealtimeLogConfigCommandOutput>;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;
  /**
   * <p>Update a streaming distribution. </p>
   */
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamingDistributionCommandOutput>;
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
}
