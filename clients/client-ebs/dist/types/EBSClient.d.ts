import { CompleteSnapshotCommandInput, CompleteSnapshotCommandOutput } from "./commands/CompleteSnapshotCommand";
import { GetSnapshotBlockCommandInput, GetSnapshotBlockCommandOutput } from "./commands/GetSnapshotBlockCommand";
import { ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput } from "./commands/ListChangedBlocksCommand";
import { ListSnapshotBlocksCommandInput, ListSnapshotBlocksCommandOutput } from "./commands/ListSnapshotBlocksCommand";
import { PutSnapshotBlockCommandInput, PutSnapshotBlockCommandOutput } from "./commands/PutSnapshotBlockCommand";
import { StartSnapshotCommandInput, StartSnapshotCommandOutput } from "./commands/StartSnapshotCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { Provider, RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser, UserAgent as __UserAgent } from "@aws-sdk/types";
export declare type ServiceInputTypes = CompleteSnapshotCommandInput | GetSnapshotBlockCommandInput | ListChangedBlocksCommandInput | ListSnapshotBlocksCommandInput | PutSnapshotBlockCommandInput | StartSnapshotCommandInput;
export declare type ServiceOutputTypes = CompleteSnapshotCommandOutput | GetSnapshotBlockCommandOutput | ListChangedBlocksCommandOutput | ListSnapshotBlocksCommandOutput | PutSnapshotBlockCommandOutput | StartSnapshotCommandOutput;
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
declare type EBSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & UserAgentInputConfig;
/**
 * The configuration interface of EBSClient class constructor that set the region, credentials and other options.
 */
export interface EBSClientConfig extends EBSClientConfigType {
}
declare type EBSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & UserAgentResolvedConfig;
/**
 * The resolved configuration interface of EBSClient class. This is resolved and normalized from the {@link EBSClientConfig | constructor configuration interface}.
 */
export interface EBSClientResolvedConfig extends EBSClientResolvedConfigType {
}
/**
 * <p>You can use the Amazon Elastic Block Store (Amazon EBS) direct APIs to create EBS snapshots, write data directly to
 *     		your snapshots, read data on your snapshots, and identify the differences or changes between
 *     		two snapshots. If you’re an independent software vendor (ISV) who offers backup services for
 *     		Amazon EBS, the EBS direct APIs make it more efficient and cost-effective to track incremental changes on
 *     		your EBS volumes through snapshots. This can be done without having to create new volumes
 *     		from snapshots, and then use Amazon Elastic Compute Cloud (Amazon EC2) instances to compare the differences.</p>
 *
 *     	    <p>You can create incremental snapshots directly from data on-premises into EBS volumes and the
 *     		cloud to use for quick disaster recovery. With the ability to write and read snapshots, you can
 *     		write your on-premises data to an EBS snapshot during a disaster. Then after recovery, you can
 *     		restore it back to AWS or on-premises from the snapshot. You no longer need to build and
 *     		maintain complex mechanisms to copy data to and from Amazon EBS.</p>
 *
 *
 *         <p>This API reference provides detailed information about the actions, data types,
 *             parameters, and errors of the EBS direct APIs. For more information about the elements that
 *             make up the EBS direct APIs, and examples of how to use them effectively, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html">Accessing the Contents of an EBS Snapshot</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>. For more information about the supported AWS Regions, endpoints,
 *             and service quotas for the EBS direct APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/ebs-service.html">Amazon Elastic Block Store Endpoints and Quotas</a> in
 *             the <i>AWS General Reference</i>.</p>
 */
export declare class EBSClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, EBSClientResolvedConfig> {
    /**
     * The resolved configuration of EBSClient class. This is resolved and normalized from the {@link EBSClientConfig | constructor configuration interface}.
     */
    readonly config: EBSClientResolvedConfig;
    constructor(configuration: EBSClientConfig);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
export {};
