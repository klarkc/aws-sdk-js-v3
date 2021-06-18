import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "./commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "./commands/CancelPolicyGenerationCommand";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "./commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "./commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "./commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "./commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "./commands/DeleteArchiveRuleCommand";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "./commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "./commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "./commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "./commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "./commands/GetFindingCommand";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "./commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "./commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "./commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "./commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "./commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "./commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "./commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "./commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "./commands/ValidatePolicyCommand";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
} from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
export declare type ServiceInputTypes =
  | ApplyArchiveRuleCommandInput
  | CancelPolicyGenerationCommandInput
  | CreateAccessPreviewCommandInput
  | CreateAnalyzerCommandInput
  | CreateArchiveRuleCommandInput
  | DeleteAnalyzerCommandInput
  | DeleteArchiveRuleCommandInput
  | GetAccessPreviewCommandInput
  | GetAnalyzedResourceCommandInput
  | GetAnalyzerCommandInput
  | GetArchiveRuleCommandInput
  | GetFindingCommandInput
  | GetGeneratedPolicyCommandInput
  | ListAccessPreviewFindingsCommandInput
  | ListAccessPreviewsCommandInput
  | ListAnalyzedResourcesCommandInput
  | ListAnalyzersCommandInput
  | ListArchiveRulesCommandInput
  | ListFindingsCommandInput
  | ListPolicyGenerationsCommandInput
  | ListTagsForResourceCommandInput
  | StartPolicyGenerationCommandInput
  | StartResourceScanCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateArchiveRuleCommandInput
  | UpdateFindingsCommandInput
  | ValidatePolicyCommandInput;
export declare type ServiceOutputTypes =
  | ApplyArchiveRuleCommandOutput
  | CancelPolicyGenerationCommandOutput
  | CreateAccessPreviewCommandOutput
  | CreateAnalyzerCommandOutput
  | CreateArchiveRuleCommandOutput
  | DeleteAnalyzerCommandOutput
  | DeleteArchiveRuleCommandOutput
  | GetAccessPreviewCommandOutput
  | GetAnalyzedResourceCommandOutput
  | GetAnalyzerCommandOutput
  | GetArchiveRuleCommandOutput
  | GetFindingCommandOutput
  | GetGeneratedPolicyCommandOutput
  | ListAccessPreviewFindingsCommandOutput
  | ListAccessPreviewsCommandOutput
  | ListAnalyzedResourcesCommandOutput
  | ListAnalyzersCommandOutput
  | ListArchiveRulesCommandOutput
  | ListFindingsCommandOutput
  | ListPolicyGenerationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartPolicyGenerationCommandOutput
  | StartResourceScanCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateArchiveRuleCommandOutput
  | UpdateFindingsCommandOutput
  | ValidatePolicyCommandOutput;
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;
  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;
  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;
  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;
  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;
  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;
  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;
  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;
  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;
  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;
  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;
  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;
  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;
  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;
  /**
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;
  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;
  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;
  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}
declare type AccessAnalyzerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AccessAnalyzerClient class constructor that set the region, credentials and other options.
 */
export interface AccessAnalyzerClientConfig extends AccessAnalyzerClientConfigType {}
declare type AccessAnalyzerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AccessAnalyzerClient class. This is resolved and normalized from the {@link AccessAnalyzerClientConfig | constructor configuration interface}.
 */
export interface AccessAnalyzerClientResolvedConfig extends AccessAnalyzerClientResolvedConfigType {}
/**
 * <p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify
 *          any policies that grant access to an external principal. It does this by using logic-based
 *          reasoning to analyze resource-based policies in your AWS environment. An external
 *          principal can be another AWS account, a root user, an IAM user or role, a federated
 *          user, an AWS service, or an anonymous user. You can also use Access Analyzer to preview and
 *          validate public and cross-account access to your resources before deploying permissions
 *          changes. This guide describes the AWS IAM Access Analyzer operations that you can call
 *          programmatically. For general information about Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
 *          <p>To start using Access Analyzer, you first need to create an analyzer.</p>
 */
export declare class AccessAnalyzerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AccessAnalyzerClientResolvedConfig
> {
  /**
   * The resolved configuration of AccessAnalyzerClient class. This is resolved and normalized from the {@link AccessAnalyzerClientConfig | constructor configuration interface}.
   */
  readonly config: AccessAnalyzerClientResolvedConfig;
  constructor(configuration: AccessAnalyzerClientConfig);
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void;
}
export {};
