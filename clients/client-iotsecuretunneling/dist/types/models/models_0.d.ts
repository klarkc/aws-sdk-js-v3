import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface CloseTunnelRequest {
    /**
     * <p>The ID of the tunnel to close.</p>
     */
    tunnelId: string | undefined;
    /**
     * <p>When set to true, AWS IoT Secure Tunneling deletes the tunnel data
     * 			immediately.</p>
     */
    delete?: boolean;
}
export declare namespace CloseTunnelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloseTunnelRequest) => any;
}
export interface CloseTunnelResponse {
}
export declare namespace CloseTunnelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloseTunnelResponse) => any;
}
/**
 * <p>Thrown when an operation is attempted on a resource that does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export declare enum ConnectionStatus {
    CONNECTED = "CONNECTED",
    DISCONNECTED = "DISCONNECTED"
}
/**
 * <p>The state of a connection.</p>
 */
export interface ConnectionState {
    /**
     * <p>The connection status of the tunnel. Valid values are <code>CONNECTED</code> and
     * 				<code>DISCONNECTED</code>.</p>
     */
    status?: ConnectionStatus | string;
    /**
     * <p>The last time the connection status was updated.</p>
     */
    lastUpdatedAt?: Date;
}
export declare namespace ConnectionState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionState) => any;
}
export interface DescribeTunnelRequest {
    /**
     * <p>The tunnel to describe.</p>
     */
    tunnelId: string | undefined;
}
export declare namespace DescribeTunnelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTunnelRequest) => any;
}
/**
 * <p>The destination configuration.</p>
 */
export interface DestinationConfig {
    /**
     * <p>The name of the IoT thing to which you want to connect.</p>
     */
    thingName?: string;
    /**
     * <p>A list of service names that identity the target application. The AWS IoT client running on the destination device reads
     * 			this value and uses it to look up a port or an IP address and a port. The AWS IoT client
     * 			instantiates the local proxy which uses this information to connect to the destination
     * 			application.</p>
     */
    services: string[] | undefined;
}
export declare namespace DestinationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DestinationConfig) => any;
}
export declare enum TunnelStatus {
    CLOSED = "CLOSED",
    OPEN = "OPEN"
}
/**
 * <p>An arbitary key/value pair used to add searchable metadata to secure tunnel
 * 			resources.</p>
 */
export interface Tag {
    /**
     * <p>The key of the tag.</p>
     */
    key: string | undefined;
    /**
     * <p>The value of the tag.</p>
     */
    value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>Tunnel timeout configuration.</p>
 */
export interface TimeoutConfig {
    /**
     * <p>The maximum amount of time (in minutes) a tunnel can remain open. If not specified,
     * 			maxLifetimeTimeoutMinutes defaults to 720 minutes. Valid values are from 1 minute to 12
     * 			hours (720 minutes) </p>
     */
    maxLifetimeTimeoutMinutes?: number;
}
export declare namespace TimeoutConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TimeoutConfig) => any;
}
/**
 * <p>A connection between a source computer and a destination device.</p>
 */
export interface Tunnel {
    /**
     * <p>A unique alpha-numeric ID that identifies a tunnel.</p>
     */
    tunnelId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of a tunnel. The tunnel ARN format is
     * 				<code>arn:aws:tunnel:<region>:<account-id>:tunnel/<tunnel-id></code>
     *          </p>
     */
    tunnelArn?: string;
    /**
     * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
     */
    status?: TunnelStatus | string;
    /**
     * <p>The connection state of the source application.</p>
     */
    sourceConnectionState?: ConnectionState;
    /**
     * <p>The connection state of the destination application.</p>
     */
    destinationConnectionState?: ConnectionState;
    /**
     * <p>A description of the tunnel.</p>
     */
    description?: string;
    /**
     * <p>The destination configuration that specifies the thing name of the destination
     * 			device and a service name that the local proxy uses to connect to the destination
     * 			application.</p>
     */
    destinationConfig?: DestinationConfig;
    /**
     * <p>Timeout configuration for the tunnel.</p>
     */
    timeoutConfig?: TimeoutConfig;
    /**
     * <p>A list of tag metadata associated with the secure tunnel.</p>
     */
    tags?: Tag[];
    /**
     * <p>The time when the tunnel was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The last time the tunnel was updated.</p>
     */
    lastUpdatedAt?: Date;
}
export declare namespace Tunnel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tunnel) => any;
}
export interface DescribeTunnelResponse {
    /**
     * <p>The tunnel being described.</p>
     */
    tunnel?: Tunnel;
}
export declare namespace DescribeTunnelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTunnelResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The resource ARN.</p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The tags for the specified resource.</p>
     */
    tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListTunnelsRequest {
    /**
     * <p>The name of the IoT thing associated with the destination device.</p>
     */
    thingName?: string;
    /**
     * <p>The maximum number of results to return at once.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTunnelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTunnelsRequest) => any;
}
/**
 * <p>Information about the tunnel.</p>
 */
export interface TunnelSummary {
    /**
     * <p>The unique alpha-numeric identifier for the tunnel.</p>
     */
    tunnelId?: string;
    /**
     * <p>The Amazon Resource Name of the tunnel. The tunnel ARN format is
     * 				<code>arn:aws:tunnel:<region>:<account-id>:tunnel/<tunnel-id></code>
     *          </p>
     */
    tunnelArn?: string;
    /**
     * <p>The status of a tunnel. Valid values are: Open and Closed.</p>
     */
    status?: TunnelStatus | string;
    /**
     * <p>A description of the tunnel.</p>
     */
    description?: string;
    /**
     * <p>The time the tunnel was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The time the tunnel was last updated.</p>
     */
    lastUpdatedAt?: Date;
}
export declare namespace TunnelSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TunnelSummary) => any;
}
export interface ListTunnelsResponse {
    /**
     * <p>A short description of the tunnels in an AWS account.</p>
     */
    tunnelSummaries?: TunnelSummary[];
    /**
     * <p>A token to used to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTunnelsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTunnelsResponse) => any;
}
/**
 * <p>Thrown when a tunnel limit is exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
export interface OpenTunnelRequest {
    /**
     * <p>A short text description of the tunnel. </p>
     */
    description?: string;
    /**
     * <p>A collection of tag metadata.</p>
     */
    tags?: Tag[];
    /**
     * <p>The destination configuration for the OpenTunnel request.</p>
     */
    destinationConfig?: DestinationConfig;
    /**
     * <p>Timeout configuration for a tunnel.</p>
     */
    timeoutConfig?: TimeoutConfig;
}
export declare namespace OpenTunnelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OpenTunnelRequest) => any;
}
export interface OpenTunnelResponse {
    /**
     * <p>A unique alpha-numeric tunnel ID.</p>
     */
    tunnelId?: string;
    /**
     * <p>The Amazon Resource Name for the tunnel. The tunnel ARN format is
     * 				<code>arn:aws:tunnel:<region>:<account-id>:tunnel/<tunnel-id></code>
     *          </p>
     */
    tunnelArn?: string;
    /**
     * <p>The access token the source local proxy uses to connect to AWS IoT Secure
     * 			Tunneling.</p>
     */
    sourceAccessToken?: string;
    /**
     * <p>The access token the destination local proxy uses to connect to AWS IoT Secure
     * 			Tunneling.</p>
     */
    destinationAccessToken?: string;
}
export declare namespace OpenTunnelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OpenTunnelResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The tags for the resource.</p>
     */
    tags: Tag[] | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The resource ARN.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>The keys of the tags to remove.</p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
