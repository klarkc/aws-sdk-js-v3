import { StartMedicalStreamTranscriptionCommandInput, StartMedicalStreamTranscriptionCommandOutput } from "./commands/StartMedicalStreamTranscriptionCommand";
import { StartStreamTranscriptionCommandInput, StartStreamTranscriptionCommandOutput } from "./commands/StartStreamTranscriptionCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { EventStreamSerdeInputConfig, EventStreamSerdeResolvedConfig } from "@aws-sdk/eventstream-serde-config-resolver";
import { EventStreamInputConfig, EventStreamResolvedConfig } from "@aws-sdk/middleware-eventstream";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { WebSocketInputConfig, WebSocketResolvedConfig } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { Provider, RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, EventStreamPayloadHandlerProvider as __EventStreamPayloadHandlerProvider, EventStreamSerdeProvider as __EventStreamSerdeProvider, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@aws-sdk/types";
export declare type ServiceInputTypes = StartMedicalStreamTranscriptionCommandInput | StartStreamTranscriptionCommandInput;
export declare type ServiceOutputTypes = StartMedicalStreamTranscriptionCommandOutput | StartStreamTranscriptionCommandOutput;
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
     * The function that provides necessary utilities for handling request event stream.
     * @internal
     */
    eventStreamPayloadHandlerProvider?: __EventStreamPayloadHandlerProvider;
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
     * @internal
     */
    defaultUserAgentProvider?: Provider<__UserAgent>;
    /**
     * The function that provides necessary utilities for generating and parsing event stream
     */
    eventStreamSerdeProvider?: __EventStreamSerdeProvider;
}
declare type TranscribeStreamingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & EventStreamInputConfig & WebSocketInputConfig & UserAgentInputConfig & EventStreamSerdeInputConfig;
/**
 * The configuration interface of TranscribeStreamingClient class constructor that set the region, credentials and other options.
 */
export interface TranscribeStreamingClientConfig extends TranscribeStreamingClientConfigType {
}
declare type TranscribeStreamingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & EventStreamResolvedConfig & WebSocketResolvedConfig & UserAgentResolvedConfig & EventStreamSerdeResolvedConfig;
/**
 * The resolved configuration interface of TranscribeStreamingClient class. This is resolved and normalized from the {@link TranscribeStreamingClientConfig | constructor configuration interface}.
 */
export interface TranscribeStreamingClientResolvedConfig extends TranscribeStreamingClientResolvedConfigType {
}
/**
 * <p>Operations and objects for transcribing streaming speech to text.</p>
 */
export declare class TranscribeStreamingClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, TranscribeStreamingClientResolvedConfig> {
    /**
     * The resolved configuration of TranscribeStreamingClient class. This is resolved and normalized from the {@link TranscribeStreamingClientConfig | constructor configuration interface}.
     */
    readonly config: TranscribeStreamingClientResolvedConfig;
    constructor(configuration: TranscribeStreamingClientConfig);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
export {};
