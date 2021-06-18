import { CloneBackendCommandInput, CloneBackendCommandOutput } from "./commands/CloneBackendCommand";
import { CreateBackendAPICommandInput, CreateBackendAPICommandOutput } from "./commands/CreateBackendAPICommand";
import { CreateBackendAuthCommandInput, CreateBackendAuthCommandOutput } from "./commands/CreateBackendAuthCommand";
import { CreateBackendCommandInput, CreateBackendCommandOutput } from "./commands/CreateBackendCommand";
import {
  CreateBackendConfigCommandInput,
  CreateBackendConfigCommandOutput,
} from "./commands/CreateBackendConfigCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { DeleteBackendAPICommandInput, DeleteBackendAPICommandOutput } from "./commands/DeleteBackendAPICommand";
import { DeleteBackendAuthCommandInput, DeleteBackendAuthCommandOutput } from "./commands/DeleteBackendAuthCommand";
import { DeleteBackendCommandInput, DeleteBackendCommandOutput } from "./commands/DeleteBackendCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import {
  GenerateBackendAPIModelsCommandInput,
  GenerateBackendAPIModelsCommandOutput,
} from "./commands/GenerateBackendAPIModelsCommand";
import { GetBackendAPICommandInput, GetBackendAPICommandOutput } from "./commands/GetBackendAPICommand";
import {
  GetBackendAPIModelsCommandInput,
  GetBackendAPIModelsCommandOutput,
} from "./commands/GetBackendAPIModelsCommand";
import { GetBackendAuthCommandInput, GetBackendAuthCommandOutput } from "./commands/GetBackendAuthCommand";
import { GetBackendCommandInput, GetBackendCommandOutput } from "./commands/GetBackendCommand";
import { GetBackendJobCommandInput, GetBackendJobCommandOutput } from "./commands/GetBackendJobCommand";
import { GetTokenCommandInput, GetTokenCommandOutput } from "./commands/GetTokenCommand";
import { ListBackendJobsCommandInput, ListBackendJobsCommandOutput } from "./commands/ListBackendJobsCommand";
import { RemoveAllBackendsCommandInput, RemoveAllBackendsCommandOutput } from "./commands/RemoveAllBackendsCommand";
import {
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
} from "./commands/RemoveBackendConfigCommand";
import { UpdateBackendAPICommandInput, UpdateBackendAPICommandOutput } from "./commands/UpdateBackendAPICommand";
import { UpdateBackendAuthCommandInput, UpdateBackendAuthCommandOutput } from "./commands/UpdateBackendAuthCommand";
import {
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
} from "./commands/UpdateBackendConfigCommand";
import { UpdateBackendJobCommandInput, UpdateBackendJobCommandOutput } from "./commands/UpdateBackendJobCommand";
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
  | CloneBackendCommandInput
  | CreateBackendAPICommandInput
  | CreateBackendAuthCommandInput
  | CreateBackendCommandInput
  | CreateBackendConfigCommandInput
  | CreateTokenCommandInput
  | DeleteBackendAPICommandInput
  | DeleteBackendAuthCommandInput
  | DeleteBackendCommandInput
  | DeleteTokenCommandInput
  | GenerateBackendAPIModelsCommandInput
  | GetBackendAPICommandInput
  | GetBackendAPIModelsCommandInput
  | GetBackendAuthCommandInput
  | GetBackendCommandInput
  | GetBackendJobCommandInput
  | GetTokenCommandInput
  | ListBackendJobsCommandInput
  | RemoveAllBackendsCommandInput
  | RemoveBackendConfigCommandInput
  | UpdateBackendAPICommandInput
  | UpdateBackendAuthCommandInput
  | UpdateBackendConfigCommandInput
  | UpdateBackendJobCommandInput;
export declare type ServiceOutputTypes =
  | CloneBackendCommandOutput
  | CreateBackendAPICommandOutput
  | CreateBackendAuthCommandOutput
  | CreateBackendCommandOutput
  | CreateBackendConfigCommandOutput
  | CreateTokenCommandOutput
  | DeleteBackendAPICommandOutput
  | DeleteBackendAuthCommandOutput
  | DeleteBackendCommandOutput
  | DeleteTokenCommandOutput
  | GenerateBackendAPIModelsCommandOutput
  | GetBackendAPICommandOutput
  | GetBackendAPIModelsCommandOutput
  | GetBackendAuthCommandOutput
  | GetBackendCommandOutput
  | GetBackendJobCommandOutput
  | GetTokenCommandOutput
  | ListBackendJobsCommandOutput
  | RemoveAllBackendsCommandOutput
  | RemoveBackendConfigCommandOutput
  | UpdateBackendAPICommandOutput
  | UpdateBackendAuthCommandOutput
  | UpdateBackendConfigCommandOutput
  | UpdateBackendJobCommandOutput;
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
declare type AmplifyBackendClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AmplifyBackendClient class constructor that set the region, credentials and other options.
 */
export interface AmplifyBackendClientConfig extends AmplifyBackendClientConfigType {}
declare type AmplifyBackendClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AmplifyBackendClient class. This is resolved and normalized from the {@link AmplifyBackendClientConfig | constructor configuration interface}.
 */
export interface AmplifyBackendClientResolvedConfig extends AmplifyBackendClientResolvedConfigType {}
/**
 * <p>AWS Amplify Admin API</p>
 */
export declare class AmplifyBackendClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AmplifyBackendClientResolvedConfig
> {
  /**
   * The resolved configuration of AmplifyBackendClient class. This is resolved and normalized from the {@link AmplifyBackendClientConfig | constructor configuration interface}.
   */
  readonly config: AmplifyBackendClientResolvedConfig;
  constructor(configuration: AmplifyBackendClientConfig);
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void;
}
export {};
