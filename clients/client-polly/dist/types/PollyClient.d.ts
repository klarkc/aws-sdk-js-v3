import { DeleteLexiconCommandInput, DeleteLexiconCommandOutput } from "./commands/DeleteLexiconCommand";
import { DescribeVoicesCommandInput, DescribeVoicesCommandOutput } from "./commands/DescribeVoicesCommand";
import { GetLexiconCommandInput, GetLexiconCommandOutput } from "./commands/GetLexiconCommand";
import { GetSpeechSynthesisTaskCommandInput, GetSpeechSynthesisTaskCommandOutput } from "./commands/GetSpeechSynthesisTaskCommand";
import { ListLexiconsCommandInput, ListLexiconsCommandOutput } from "./commands/ListLexiconsCommand";
import { ListSpeechSynthesisTasksCommandInput, ListSpeechSynthesisTasksCommandOutput } from "./commands/ListSpeechSynthesisTasksCommand";
import { PutLexiconCommandInput, PutLexiconCommandOutput } from "./commands/PutLexiconCommand";
import { StartSpeechSynthesisTaskCommandInput, StartSpeechSynthesisTaskCommandOutput } from "./commands/StartSpeechSynthesisTaskCommand";
import { SynthesizeSpeechCommandInput, SynthesizeSpeechCommandOutput } from "./commands/SynthesizeSpeechCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { Provider, RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@aws-sdk/types";
export declare type ServiceInputTypes = DeleteLexiconCommandInput | DescribeVoicesCommandInput | GetLexiconCommandInput | GetSpeechSynthesisTaskCommandInput | ListLexiconsCommandInput | ListSpeechSynthesisTasksCommandInput | PutLexiconCommandInput | StartSpeechSynthesisTaskCommandInput | SynthesizeSpeechCommandInput;
export declare type ServiceOutputTypes = DeleteLexiconCommandOutput | DescribeVoicesCommandOutput | GetLexiconCommandOutput | GetSpeechSynthesisTaskCommandOutput | ListLexiconsCommandOutput | ListSpeechSynthesisTasksCommandOutput | PutLexiconCommandOutput | StartSpeechSynthesisTaskCommandOutput | SynthesizeSpeechCommandOutput;
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
declare type PollyClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & UserAgentInputConfig;
/**
 * The configuration interface of PollyClient class constructor that set the region, credentials and other options.
 */
export interface PollyClientConfig extends PollyClientConfigType {
}
declare type PollyClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & UserAgentResolvedConfig;
/**
 * The resolved configuration interface of PollyClient class. This is resolved and normalized from the {@link PollyClientConfig | constructor configuration interface}.
 */
export interface PollyClientResolvedConfig extends PollyClientResolvedConfigType {
}
/**
 * <p>Amazon Polly is a web service that makes it easy to synthesize speech from
 *       text.</p>
 *          <p>The Amazon Polly service provides API operations for synthesizing high-quality speech
 *       from plain text and Speech Synthesis Markup Language (SSML), along with managing
 *       pronunciations lexicons that enable you to get the best results for your application
 *       domain.</p>
 */
export declare class PollyClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, PollyClientResolvedConfig> {
    /**
     * The resolved configuration of PollyClient class. This is resolved and normalized from the {@link PollyClientConfig | constructor configuration interface}.
     */
    readonly config: PollyClientResolvedConfig;
    constructor(configuration: PollyClientConfig);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
export {};
