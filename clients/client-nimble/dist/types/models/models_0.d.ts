import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>A collection of EULA acceptances.</p>
 */
export interface AcceptEulasRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The EULA ID.</p>
     */
    eulaIds?: string[];
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace AcceptEulasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptEulasRequest) => any;
}
export interface EulaAcceptance {
    /**
     * <p>The Unix epoch timestamp in seconds for when the EULA was accepted.</p>
     */
    acceptedAt?: Date;
    /**
     * <p>The ID of the person who accepted the EULA.</p>
     */
    acceptedBy?: string;
    /**
     * <p>The ID of the acceptee.</p>
     */
    accepteeId?: string;
    /**
     * <p>The EULA acceptance ID.</p>
     */
    eulaAcceptanceId?: string;
    /**
     * <p>The EULA ID.</p>
     */
    eulaId?: string;
}
export declare namespace EulaAcceptance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EulaAcceptance) => any;
}
export interface AcceptEulasResponse {
    /**
     * <p>A collection of EULA acceptances.</p>
     */
    eulaAcceptances?: EulaAcceptance[];
}
export declare namespace AcceptEulasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptEulasResponse) => any;
}
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    /**
     * <p>A more specific error code.</p>
     */
    code?: string;
    /**
     * <p>The exception context.</p>
     */
    context?: {
        [key: string]: string;
    };
    /**
     * <p>A human-readable description of the error.</p>
     */
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.</p>
 */
export interface ActiveDirectoryComputerAttribute {
    /**
     * <p>The name for the LDAP attribute.</p>
     */
    name?: string;
    /**
     * <p>The value for the LDAP attribute.</p>
     */
    value?: string;
}
export declare namespace ActiveDirectoryComputerAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActiveDirectoryComputerAttribute) => any;
}
/**
 * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.</p>
 */
export interface ActiveDirectoryConfiguration {
    /**
     * <p>A collection of custom attributes for an Active Directory computer.</p>
     */
    computerAttributes?: ActiveDirectoryComputerAttribute[];
    /**
     * <p>The directory ID of the AWS Directory Service for Microsoft AD to access using this studio component.</p>
     */
    directoryId?: string;
    /**
     * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory computer.</p>
     */
    organizationalUnitDistinguishedName?: string;
}
export declare namespace ActiveDirectoryConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ActiveDirectoryConfiguration) => any;
}
/**
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 */
export interface ComputeFarmConfiguration {
    /**
     * <p>The name of an Active Directory user that is used on ComputeFarm worker instances.</p>
     */
    activeDirectoryUser?: string;
    /**
     * <p>The endpoint of the ComputeFarm that is accessed by the studio component resource.</p>
     */
    endpoint?: string;
}
export declare namespace ComputeFarmConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ComputeFarmConfiguration) => any;
}
export declare enum StreamingClipboardMode {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export declare enum StreamingInstanceType {
    g4dn_12xlarge = "g4dn.12xlarge",
    g4dn_16xlarge = "g4dn.16xlarge",
    g4dn_2xlarge = "g4dn.2xlarge",
    g4dn_4xlarge = "g4dn.4xlarge",
    g4dn_8xlarge = "g4dn.8xlarge",
    g4dn_xlarge = "g4dn.xlarge"
}
export interface StreamConfigurationCreate {
    /**
     * <p>Enable or disable the use of the system clipboard to copy and paste between the streaming session and streaming client.</p>
     */
    clipboardMode: StreamingClipboardMode | string | undefined;
    /**
     * <p>The EC2 instance types that users can select from when launching a streaming session with this launch profile.</p>
     */
    ec2InstanceTypes: (StreamingInstanceType | string)[] | undefined;
    /**
     * <p>The length of time, in minutes, that a streaming session can run. After this point, Nimble Studio automatically terminates the session.</p>
     */
    maxSessionLengthInMinutes?: number;
    /**
     * <p>The streaming images that users can select from when launching a streaming session with this launch profile.</p>
     */
    streamingImageIds: string[] | undefined;
}
export declare namespace StreamConfigurationCreate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamConfigurationCreate) => any;
}
/**
 * <p>A collection of launch profiles.</p>
 */
export interface CreateLaunchProfileRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The description.</p>
     */
    description?: string;
    ec2SubnetIds: string[] | undefined;
    /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
     */
    launchProfileProtocolVersions: string[] | undefined;
    /**
     * <p>The name for the launch profile.</p>
     */
    name: string | undefined;
    /**
     * <p>A configuration for a streaming session.</p>
     */
    streamConfiguration: StreamConfigurationCreate | undefined;
    /**
     * <p>Unique identifiers for a collection of studio components that can be used with this launch profile.</p>
     */
    studioComponentIds: string[] | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateLaunchProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLaunchProfileRequest) => any;
}
export declare enum LaunchProfileState {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    DELETED = "DELETED",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    READY = "READY",
    UPDATE_FAILED = "UPDATE_FAILED",
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}
export declare enum LaunchProfileStatusCode {
    ENCRYPTION_KEY_ACCESS_DENIED = "ENCRYPTION_KEY_ACCESS_DENIED",
    ENCRYPTION_KEY_NOT_FOUND = "ENCRYPTION_KEY_NOT_FOUND",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    INVALID_SUBNETS_PROVIDED = "INVALID_SUBNETS_PROVIDED",
    LAUNCH_PROFILE_CREATED = "LAUNCH_PROFILE_CREATED",
    LAUNCH_PROFILE_CREATE_IN_PROGRESS = "LAUNCH_PROFILE_CREATE_IN_PROGRESS",
    LAUNCH_PROFILE_DELETED = "LAUNCH_PROFILE_DELETED",
    LAUNCH_PROFILE_DELETE_IN_PROGRESS = "LAUNCH_PROFILE_DELETE_IN_PROGRESS",
    LAUNCH_PROFILE_UPDATED = "LAUNCH_PROFILE_UPDATED",
    LAUNCH_PROFILE_UPDATE_IN_PROGRESS = "LAUNCH_PROFILE_UPDATE_IN_PROGRESS",
    LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED = "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED",
    STREAMING_IMAGE_NOT_FOUND = "STREAMING_IMAGE_NOT_FOUND",
    STREAMING_IMAGE_NOT_READY = "STREAMING_IMAGE_NOT_READY"
}
/**
 * <p>A configuration for a streaming session.</p>
 */
export interface StreamConfiguration {
    /**
     * <p>Enable or disable the use of the system clipboard to copy and paste between the streaming session and streaming client.</p>
     */
    clipboardMode?: StreamingClipboardMode | string;
    /**
     * <p>The EC2 instance types that users can select from when launching a streaming session with this launch profile.</p>
     */
    ec2InstanceTypes?: (StreamingInstanceType | string)[];
    /**
     * <p>The length of time, in minutes, that a streaming session can run. After this point, Nimble Studio automatically terminates the session.</p>
     */
    maxSessionLengthInMinutes?: number;
    /**
     * <p>The streaming images that users can select from when launching a streaming session with this launch profile.</p>
     */
    streamingImageIds?: string[];
}
export declare namespace StreamConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamConfiguration) => any;
}
export interface LaunchProfile {
    /**
     * <p>The ARN of the resource.</p>
     */
    arn?: string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The user ID of the user that created the launch profile.</p>
     */
    createdBy?: string;
    /**
     * <p>A human-readable description of the launch profile.</p>
     */
    description?: string;
    /**
     * <p>Unique identifiers for a collection of EC2 subnets.</p>
     */
    ec2SubnetIds?: string[];
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId?: string;
    /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
     */
    launchProfileProtocolVersions?: string[];
    /**
     * <p>A friendly name for the launch profile.</p>
     */
    name?: string;
    /**
     * <p>The current state.</p>
     */
    state?: LaunchProfileState | string;
    /**
     * <p>The status code.</p>
     */
    statusCode?: LaunchProfileStatusCode | string;
    /**
     * <p>The status message for the launch profile.</p>
     */
    statusMessage?: string;
    /**
     * <p>A configuration for a streaming session.</p>
     */
    streamConfiguration?: StreamConfiguration;
    /**
     * <p>Unique identifiers for a collection of studio components that can be used with this launch profile.</p>
     */
    studioComponentIds?: string[];
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
     */
    updatedAt?: Date;
    /**
     * <p>The user ID of the user that most recently updated the resource.</p>
     */
    updatedBy?: string;
}
export declare namespace LaunchProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchProfile) => any;
}
export interface CreateLaunchProfileResponse {
    /**
     * <p>The launch profile.</p>
     */
    launchProfile?: LaunchProfile;
}
export declare namespace CreateLaunchProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLaunchProfileResponse) => any;
}
/**
 * <p>A collection of streaming images.</p>
 */
export interface CreateStreamingImageRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>A human-readable description of the streaming image.</p>
     */
    description?: string;
    /**
     * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
     */
    ec2ImageId: string | undefined;
    /**
     * <p>A friendly name for a streaming image resource.</p>
     */
    name: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateStreamingImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStreamingImageRequest) => any;
}
export declare enum StreamingImageEncryptionConfigurationKeyType {
    CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY"
}
export interface StreamingImageEncryptionConfiguration {
    /**
     * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
     */
    keyArn?: string;
    /**
     * <p>The type of KMS key that is used to encrypt studio data.</p>
     */
    keyType: StreamingImageEncryptionConfigurationKeyType | string | undefined;
}
export declare namespace StreamingImageEncryptionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamingImageEncryptionConfiguration) => any;
}
export declare enum StreamingImageState {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    DELETED = "DELETED",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    READY = "READY",
    UPDATE_FAILED = "UPDATE_FAILED",
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}
export declare enum StreamingImageStatusCode {
    INTERNAL_ERROR = "INTERNAL_ERROR",
    STREAMING_IMAGE_CREATE_IN_PROGRESS = "STREAMING_IMAGE_CREATE_IN_PROGRESS",
    STREAMING_IMAGE_DELETED = "STREAMING_IMAGE_DELETED",
    STREAMING_IMAGE_DELETE_IN_PROGRESS = "STREAMING_IMAGE_DELETE_IN_PROGRESS",
    STREAMING_IMAGE_READY = "STREAMING_IMAGE_READY",
    STREAMING_IMAGE_UPDATE_IN_PROGRESS = "STREAMING_IMAGE_UPDATE_IN_PROGRESS"
}
export interface StreamingImage {
    /**
     * <p>The ARN of the resource.</p>
     */
    arn?: string;
    /**
     * <p>A human-readable description of the streaming image.</p>
     */
    description?: string;
    /**
     * <p>The ID of an EC2 machine image with which to create the streaming image.</p>
     */
    ec2ImageId?: string;
    /**
     * <p>The encryption configuration.</p>
     */
    encryptionConfiguration?: StreamingImageEncryptionConfiguration;
    /**
     * <p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>
     */
    eulaIds?: string[];
    /**
     * <p>A friendly name for a streaming image resource.</p>
     */
    name?: string;
    /**
     * <p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that are provided by Amazon Nimble Studio.</p>
     */
    owner?: string;
    /**
     * <p>The platform of the streaming image, either WINDOWS or LINUX.</p>
     */
    platform?: string;
    /**
     * <p>The current state.</p>
     */
    state?: StreamingImageState | string;
    /**
     * <p>The status code.</p>
     */
    statusCode?: StreamingImageStatusCode | string;
    /**
     * <p>The status message for the streaming image.</p>
     */
    statusMessage?: string;
    /**
     * <p>The ID of the streaming image.</p>
     */
    streamingImageId?: string;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace StreamingImage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamingImage) => any;
}
export interface CreateStreamingImageResponse {
    streamingImage?: StreamingImage;
}
export declare namespace CreateStreamingImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStreamingImageResponse) => any;
}
/**
 * <p>A collection of streaming sessions.</p>
 */
export interface CreateStreamingSessionRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The EC2 Instance type used for the streaming session.</p>
     */
    ec2InstanceType?: StreamingInstanceType | string;
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId?: string;
    /**
     * <p>The ID of the streaming image.</p>
     */
    streamingImageId?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateStreamingSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStreamingSessionRequest) => any;
}
export declare enum StreamingSessionState {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    DELETED = "DELETED",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    READY = "READY"
}
export declare enum StreamingSessionStatusCode {
    ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR = "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR",
    DECRYPT_STREAMING_IMAGE_ERROR = "DECRYPT_STREAMING_IMAGE_ERROR",
    INITIALIZATION_SCRIPT_ERROR = "INITIALIZATION_SCRIPT_ERROR",
    INSUFFICIENT_CAPACITY = "INSUFFICIENT_CAPACITY",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    NETWORK_CONNECTION_ERROR = "NETWORK_CONNECTION_ERROR",
    NETWORK_INTERFACE_ERROR = "NETWORK_INTERFACE_ERROR",
    STREAMING_SESSION_CREATE_IN_PROGRESS = "STREAMING_SESSION_CREATE_IN_PROGRESS",
    STREAMING_SESSION_DELETED = "STREAMING_SESSION_DELETED",
    STREAMING_SESSION_DELETE_IN_PROGRESS = "STREAMING_SESSION_DELETE_IN_PROGRESS",
    STREAMING_SESSION_READY = "STREAMING_SESSION_READY"
}
export interface StreamingSession {
    /**
     * <p>The ARN of the resource.</p>
     */
    arn?: string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The user ID of the user that created the streaming session.</p>
     */
    createdBy?: string;
    /**
     * <p>The EC2 Instance type used for the streaming session.</p>
     */
    ec2InstanceType?: string;
    /**
     * <p>The ID of the launch profile used to control access from the streaming session.</p>
     */
    launchProfileId?: string;
    /**
     * <p>The session ID.</p>
     */
    sessionId?: string;
    /**
     * <p>The current state.</p>
     */
    state?: StreamingSessionState | string;
    /**
     * <p>The status code.</p>
     */
    statusCode?: StreamingSessionStatusCode | string;
    /**
     * <p>The status message for the streaming session.</p>
     */
    statusMessage?: string;
    /**
     * <p>The ID of the streaming image.</p>
     */
    streamingImageId?: string;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The time the streaming session will automatically terminate if not terminated by the user.</p>
     */
    terminateAt?: Date;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
     */
    updatedAt?: Date;
    /**
     * <p>The user ID of the user that most recently updated the resource.</p>
     */
    updatedBy?: string;
}
export declare namespace StreamingSession {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamingSession) => any;
}
export interface CreateStreamingSessionResponse {
    /**
     * <p>The session.</p>
     */
    session?: StreamingSession;
}
export declare namespace CreateStreamingSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStreamingSessionResponse) => any;
}
/**
 * <p>A list collection streams.</p>
 */
export interface CreateStreamingSessionStreamRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The expiration time in seconds.</p>
     */
    expirationInSeconds?: number;
    /**
     * <p>The session ID.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace CreateStreamingSessionStreamRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStreamingSessionStreamRequest) => any;
}
export declare enum StreamingSessionStreamState {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    DELETED = "DELETED",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    READY = "READY"
}
export declare enum StreamingSessionStreamStatusCode {
    INTERNAL_ERROR = "INTERNAL_ERROR",
    NETWORK_CONNECTION_ERROR = "NETWORK_CONNECTION_ERROR",
    STREAM_CREATE_IN_PROGRESS = "STREAM_CREATE_IN_PROGRESS",
    STREAM_DELETED = "STREAM_DELETED",
    STREAM_DELETE_IN_PROGRESS = "STREAM_DELETE_IN_PROGRESS",
    STREAM_READY = "STREAM_READY"
}
export interface StreamingSessionStream {
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The user ID of the user that created the streaming session stream.</p>
     */
    createdBy?: string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource expires.</p>
     */
    expiresAt?: Date;
    /**
     * <p>The current state.</p>
     */
    state?: StreamingSessionStreamState | string;
    /**
     * <p>The streaming session stream status code.</p>
     */
    statusCode?: StreamingSessionStreamStatusCode | string;
    /**
     * <p>The stream ID.</p>
     */
    streamId?: string;
    /**
     * <p>The URL to connect to this stream using the DCV client.</p>
     */
    url?: string;
}
export declare namespace StreamingSessionStream {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamingSessionStream) => any;
}
export interface CreateStreamingSessionStreamResponse {
    /**
     * <p>The stream.</p>
     */
    stream?: StreamingSessionStream;
}
export declare namespace CreateStreamingSessionStreamResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStreamingSessionStreamResponse) => any;
}
export declare enum StudioEncryptionConfigurationKeyType {
    AWS_OWNED_KEY = "AWS_OWNED_KEY",
    CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY"
}
/**
 * <p>Configuration of the encryption method that is used for the studio.</p>
 */
export interface StudioEncryptionConfiguration {
    /**
     * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
     */
    keyArn?: string;
    /**
     * <p>The type of KMS key that is used to encrypt studio data.</p>
     */
    keyType: StudioEncryptionConfigurationKeyType | string | undefined;
}
export declare namespace StudioEncryptionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StudioEncryptionConfiguration) => any;
}
/**
 * <p>A collection of studio resources.</p>
 */
export interface CreateStudioRequest {
    /**
     * <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
     */
    adminRoleArn: string | undefined;
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>A friendly name for the studio.</p>
     */
    displayName: string | undefined;
    /**
     * <p>The studio encryption configuration.</p>
     */
    studioEncryptionConfiguration?: StudioEncryptionConfiguration;
    /**
     * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.</p>
     */
    studioName: string | undefined;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>
     */
    userRoleArn: string | undefined;
}
export declare namespace CreateStudioRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStudioRequest) => any;
}
export declare enum StudioState {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    DELETED = "DELETED",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    READY = "READY",
    UPDATE_FAILED = "UPDATE_FAILED",
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}
export declare enum StudioStatusCode {
    AWS_SSO_ACCESS_DENIED = "AWS_SSO_ACCESS_DENIED",
    AWS_SSO_CONFIGURATION_REPAIRED = "AWS_SSO_CONFIGURATION_REPAIRED",
    AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS = "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS",
    AWS_SSO_NOT_ENABLED = "AWS_SSO_NOT_ENABLED",
    ENCRYPTION_KEY_ACCESS_DENIED = "ENCRYPTION_KEY_ACCESS_DENIED",
    ENCRYPTION_KEY_NOT_FOUND = "ENCRYPTION_KEY_NOT_FOUND",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    ROLE_COULD_NOT_BE_ASSUMED = "ROLE_COULD_NOT_BE_ASSUMED",
    ROLE_NOT_OWNED_BY_STUDIO_OWNER = "ROLE_NOT_OWNED_BY_STUDIO_OWNER",
    STUDIO_CREATED = "STUDIO_CREATED",
    STUDIO_CREATE_IN_PROGRESS = "STUDIO_CREATE_IN_PROGRESS",
    STUDIO_DELETED = "STUDIO_DELETED",
    STUDIO_DELETE_IN_PROGRESS = "STUDIO_DELETE_IN_PROGRESS",
    STUDIO_UPDATED = "STUDIO_UPDATED",
    STUDIO_UPDATE_IN_PROGRESS = "STUDIO_UPDATE_IN_PROGRESS",
    STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED = "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED",
    STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED = "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED",
    STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED = "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED"
}
export interface Studio {
    /**
     * <p>The IAM role that studio admins assume when logging in to the Nimble Studio portal.</p>
     */
    adminRoleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.</p>
     */
    arn?: string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>A friendly name for the studio.</p>
     */
    displayName?: string;
    /**
     * <p>The AWS region where the studio resource is located.</p>
     */
    homeRegion?: string;
    /**
     * <p>The AWS SSO application client ID used to integrate with AWS SSO to enable AWS SSO users to log in to Nimble portal.</p>
     */
    ssoClientId?: string;
    /**
     * <p>The current state of the studio resource.</p>
     */
    state?: StudioState | string;
    /**
     * <p>Status codes that provide additional detail on the studio state.</p>
     */
    statusCode?: StudioStatusCode | string;
    /**
     * <p>Additional detail on the studio state.</p>
     */
    statusMessage?: string;
    /**
     * <p>Configuration of the encryption method that is used for the studio.</p>
     */
    studioEncryptionConfiguration?: StudioEncryptionConfiguration;
    /**
     * <p>The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.</p>
     */
    studioId?: string;
    /**
     * <p>The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.</p>
     */
    studioName?: string;
    /**
     * <p>The address of the web page for the studio.</p>
     */
    studioUrl?: string;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
     */
    updatedAt?: Date;
    /**
     * <p>The IAM role that studio users assume when logging in to the Nimble Studio portal.</p>
     */
    userRoleArn?: string;
}
export declare namespace Studio {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Studio) => any;
}
export interface CreateStudioResponse {
    /**
     * <p>Information about a studio.</p>
     */
    studio?: Studio;
}
export declare namespace CreateStudioResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStudioResponse) => any;
}
/**
 * <p>The configuration for a license service that is associated with a studio resource.</p>
 */
export interface LicenseServiceConfiguration {
    /**
     * <p>The endpoint of the license service that is accessed by the studio component resource.</p>
     */
    endpoint?: string;
}
export declare namespace LicenseServiceConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LicenseServiceConfiguration) => any;
}
/**
 * <p>The configuration for a shared file storage system that is associated with a studio resource.</p>
 */
export interface SharedFileSystemConfiguration {
    /**
     * <p>The endpoint of the shared file system that is accessed by the studio component resource.</p>
     */
    endpoint?: string;
    /**
     * <p>The unique identifier for a file system.</p>
     */
    fileSystemId?: string;
    /**
     * <p>The mount location for a shared file system on a Linux virtual workstation.</p>
     */
    linuxMountPoint?: string;
    /**
     * <p>The name of the file share.</p>
     */
    shareName?: string;
    /**
     * <p>The mount location for a shared file system on a Windows virtual workstation.</p>
     */
    windowsMountDrive?: string;
}
export declare namespace SharedFileSystemConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SharedFileSystemConfiguration) => any;
}
/**
 * <p>The configuration of the studio component, based on component type.</p>
 */
export interface StudioComponentConfiguration {
    /**
     * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.</p>
     */
    activeDirectoryConfiguration?: ActiveDirectoryConfiguration;
    /**
     * <p>The configuration for a render farm that is associated with a studio resource.</p>
     */
    computeFarmConfiguration?: ComputeFarmConfiguration;
    /**
     * <p>The configuration for a license service that is associated with a studio resource.</p>
     */
    licenseServiceConfiguration?: LicenseServiceConfiguration;
    /**
     * <p>The configuration for a shared file storage system that is associated with a studio resource.</p>
     */
    sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
}
export declare namespace StudioComponentConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StudioComponentConfiguration) => any;
}
export declare enum LaunchProfilePlatform {
    LINUX = "LINUX",
    WINDOWS = "WINDOWS"
}
export declare enum StudioComponentInitializationScriptRunContext {
    SYSTEM_INITIALIZATION = "SYSTEM_INITIALIZATION",
    USER_INITIALIZATION = "USER_INITIALIZATION"
}
/**
 * <p>Initialization scripts for studio components.</p>
 */
export interface StudioComponentInitializationScript {
    /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
     */
    launchProfileProtocolVersion?: string;
    /**
     * <p>The platform of the initialization script, either WINDOWS or LINUX.</p>
     */
    platform?: LaunchProfilePlatform | string;
    /**
     * <p>The method to use when running the initialization script.</p>
     */
    runContext?: StudioComponentInitializationScriptRunContext | string;
    /**
     * <p>The initialization script.</p>
     */
    script?: string;
}
export declare namespace StudioComponentInitializationScript {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StudioComponentInitializationScript) => any;
}
/**
 * <p>A parameter for a studio component script, in the form of a key:value pair.</p>
 */
export interface ScriptParameterKeyValue {
    /**
     * <p>A script parameter key.</p>
     */
    key?: string;
    /**
     * <p>A script parameter value.</p>
     */
    value?: string;
}
export declare namespace ScriptParameterKeyValue {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScriptParameterKeyValue) => any;
}
export declare enum StudioComponentSubtype {
    AMAZON_FSX_FOR_LUSTRE = "AMAZON_FSX_FOR_LUSTRE",
    AMAZON_FSX_FOR_WINDOWS = "AMAZON_FSX_FOR_WINDOWS",
    AWS_MANAGED_MICROSOFT_AD = "AWS_MANAGED_MICROSOFT_AD",
    CUSTOM = "CUSTOM"
}
export declare enum StudioComponentType {
    ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY",
    COMPUTE_FARM = "COMPUTE_FARM",
    CUSTOM = "CUSTOM",
    LICENSE_SERVICE = "LICENSE_SERVICE",
    SHARED_FILE_SYSTEM = "SHARED_FILE_SYSTEM"
}
/**
 * <p>The studio components.</p>
 */
export interface CreateStudioComponentRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The configuration of the studio component, based on component type.</p>
     */
    configuration?: StudioComponentConfiguration;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The EC2 security groups that control access to the studio component.</p>
     */
    ec2SecurityGroupIds?: string[];
    /**
     * <p>Initialization scripts for studio components.</p>
     */
    initializationScripts?: StudioComponentInitializationScript[];
    /**
     * <p>The name for the studio component.</p>
     */
    name: string | undefined;
    /**
     * <p>Parameters for the studio component scripts.</p>
     */
    scriptParameters?: ScriptParameterKeyValue[];
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>The specific subtype of a studio component.</p>
     */
    subtype?: StudioComponentSubtype | string;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the studio component.</p>
     */
    type: StudioComponentType | string | undefined;
}
export declare namespace CreateStudioComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStudioComponentRequest) => any;
}
export declare enum StudioComponentState {
    CREATE_FAILED = "CREATE_FAILED",
    CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
    DELETED = "DELETED",
    DELETE_FAILED = "DELETE_FAILED",
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
    READY = "READY",
    UPDATE_FAILED = "UPDATE_FAILED",
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}
export declare enum StudioComponentStatusCode {
    ACTIVE_DIRECTORY_ALREADY_EXISTS = "ACTIVE_DIRECTORY_ALREADY_EXISTS",
    ENCRYPTION_KEY_ACCESS_DENIED = "ENCRYPTION_KEY_ACCESS_DENIED",
    ENCRYPTION_KEY_NOT_FOUND = "ENCRYPTION_KEY_NOT_FOUND",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    STUDIO_COMPONENT_CREATED = "STUDIO_COMPONENT_CREATED",
    STUDIO_COMPONENT_CREATE_IN_PROGRESS = "STUDIO_COMPONENT_CREATE_IN_PROGRESS",
    STUDIO_COMPONENT_DELETED = "STUDIO_COMPONENT_DELETED",
    STUDIO_COMPONENT_DELETE_IN_PROGRESS = "STUDIO_COMPONENT_DELETE_IN_PROGRESS",
    STUDIO_COMPONENT_UPDATED = "STUDIO_COMPONENT_UPDATED",
    STUDIO_COMPONENT_UPDATE_IN_PROGRESS = "STUDIO_COMPONENT_UPDATE_IN_PROGRESS"
}
/**
 * <p>A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.</p>
 */
export interface StudioComponent {
    /**
     * <p>The ARN of the resource.</p>
     */
    arn?: string;
    /**
     * <p>The configuration of the studio component, based on component type.</p>
     */
    configuration?: StudioComponentConfiguration;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The user ID of the user that created the studio component.</p>
     */
    createdBy?: string;
    /**
     * <p>A human-readable description for the studio component resource.</p>
     */
    description?: string;
    /**
     * <p>The EC2 security groups that control access to the studio component.</p>
     */
    ec2SecurityGroupIds?: string[];
    /**
     * <p>Initialization scripts for studio components.</p>
     */
    initializationScripts?: StudioComponentInitializationScript[];
    /**
     * <p>A friendly name for the studio component resource.</p>
     */
    name?: string;
    /**
     * <p>Parameters for the studio component scripts.</p>
     */
    scriptParameters?: ScriptParameterKeyValue[];
    /**
     * <p>The current state.</p>
     */
    state?: StudioComponentState | string;
    /**
     * <p>The status code.</p>
     */
    statusCode?: StudioComponentStatusCode | string;
    /**
     * <p>The status message for the studio component.</p>
     */
    statusMessage?: string;
    /**
     * <p>The unique identifier for a studio component resource.</p>
     */
    studioComponentId?: string;
    /**
     * <p>The specific subtype of a studio component.</p>
     */
    subtype?: StudioComponentSubtype | string;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of the studio component.</p>
     */
    type?: StudioComponentType | string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
     */
    updatedAt?: Date;
    /**
     * <p>The user ID of the user that most recently updated the resource.</p>
     */
    updatedBy?: string;
}
export declare namespace StudioComponent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StudioComponent) => any;
}
export interface CreateStudioComponentResponse {
    /**
     * <p>Information about the studio component.</p>
     */
    studioComponent?: StudioComponent;
}
export declare namespace CreateStudioComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateStudioComponentResponse) => any;
}
export interface DeleteLaunchProfileRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteLaunchProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLaunchProfileRequest) => any;
}
export interface DeleteLaunchProfileResponse {
    /**
     * <p>The launch profile.</p>
     */
    launchProfile?: LaunchProfile;
}
export declare namespace DeleteLaunchProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLaunchProfileResponse) => any;
}
export interface DeleteLaunchProfileMemberRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteLaunchProfileMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLaunchProfileMemberRequest) => any;
}
export interface DeleteLaunchProfileMemberResponse {
}
export declare namespace DeleteLaunchProfileMemberResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLaunchProfileMemberResponse) => any;
}
export interface DeleteStreamingImageRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The streaming image ID.</p>
     */
    streamingImageId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteStreamingImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStreamingImageRequest) => any;
}
export interface DeleteStreamingImageResponse {
    /**
     * <p>The streaming image.</p>
     */
    streamingImage?: StreamingImage;
}
export declare namespace DeleteStreamingImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStreamingImageResponse) => any;
}
export interface DeleteStreamingSessionRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The session ID.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteStreamingSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStreamingSessionRequest) => any;
}
export interface DeleteStreamingSessionResponse {
    /**
     * <p>The session.</p>
     */
    session?: StreamingSession;
}
export declare namespace DeleteStreamingSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStreamingSessionResponse) => any;
}
export interface DeleteStudioRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteStudioRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStudioRequest) => any;
}
export interface DeleteStudioResponse {
    /**
     * <p>Information about a studio.</p>
     */
    studio?: Studio;
}
export declare namespace DeleteStudioResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStudioResponse) => any;
}
export interface DeleteStudioComponentRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The studio component ID.</p>
     */
    studioComponentId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteStudioComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStudioComponentRequest) => any;
}
export interface DeleteStudioComponentResponse {
    /**
     * <p>Information about the studio component.</p>
     */
    studioComponent?: StudioComponent;
}
export declare namespace DeleteStudioComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStudioComponentResponse) => any;
}
export interface DeleteStudioMemberRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace DeleteStudioMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStudioMemberRequest) => any;
}
export interface DeleteStudioMemberResponse {
}
export declare namespace DeleteStudioMemberResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteStudioMemberResponse) => any;
}
/**
 * <p>Represents a EULA resource.</p>
 */
export interface Eula {
    /**
     * <p>The EULA content.</p>
     */
    content?: string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The EULA ID.</p>
     */
    eulaId?: string;
    /**
     * <p>The name for the EULA.</p>
     */
    name?: string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
     */
    updatedAt?: Date;
}
export declare namespace Eula {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Eula) => any;
}
export interface GetEulaRequest {
    /**
     * <p>The EULA ID.</p>
     */
    eulaId: string | undefined;
}
export declare namespace GetEulaRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEulaRequest) => any;
}
export interface GetEulaResponse {
    /**
     * <p>The EULA.</p>
     */
    eula?: Eula;
}
export declare namespace GetEulaResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEulaResponse) => any;
}
export interface GetLaunchProfileRequest {
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetLaunchProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileRequest) => any;
}
export interface GetLaunchProfileResponse {
    /**
     * <p>The launch profile.</p>
     */
    launchProfile?: LaunchProfile;
}
export declare namespace GetLaunchProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileResponse) => any;
}
export interface GetLaunchProfileDetailsRequest {
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetLaunchProfileDetailsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileDetailsRequest) => any;
}
/**
 * <p></p>
 */
export interface StudioComponentSummary {
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The user ID of the user that created the studio component.</p>
     */
    createdBy?: string;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The name for the studio component.</p>
     */
    name?: string;
    /**
     * <p>The unique identifier for a studio component resource.</p>
     */
    studioComponentId?: string;
    /**
     * <p>The specific subtype of a studio component.</p>
     */
    subtype?: StudioComponentSubtype | string;
    /**
     * <p>The type of the studio component.</p>
     */
    type?: StudioComponentType | string;
    /**
     * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
     */
    updatedAt?: Date;
    /**
     * <p>The user ID of the user that most recently updated the resource.</p>
     */
    updatedBy?: string;
}
export declare namespace StudioComponentSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StudioComponentSummary) => any;
}
export interface GetLaunchProfileDetailsResponse {
    /**
     * <p>The launch profile.</p>
     */
    launchProfile?: LaunchProfile;
    /**
     * <p>A collection of streaming images.</p>
     */
    streamingImages?: StreamingImage[];
    /**
     * <p>A collection of studio component summaries.</p>
     */
    studioComponentSummaries?: StudioComponentSummary[];
}
export declare namespace GetLaunchProfileDetailsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileDetailsResponse) => any;
}
export interface GetLaunchProfileInitializationRequest {
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>A collection of launch profile protocol versions.</p>
     */
    launchProfileProtocolVersions: string[] | undefined;
    /**
     * <p>The launch purpose.</p>
     */
    launchPurpose: string | undefined;
    /**
     * <p>The platform.</p>
     */
    platform: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetLaunchProfileInitializationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileInitializationRequest) => any;
}
export interface LaunchProfileInitializationActiveDirectory {
    /**
     * <p>A collection of custom attributes for an Active Directory computer.</p>
     */
    computerAttributes?: ActiveDirectoryComputerAttribute[];
    /**
     * <p>The directory ID of the AWS Directory Service for Microsoft AD to access using this launch profile.</p>
     */
    directoryId?: string;
    /**
     * <p>The directory name.</p>
     */
    directoryName?: string;
    /**
     * <p>The DNS IP address.</p>
     */
    dnsIpAddresses?: string[];
    /**
     * <p>The name for the organizational unit distinguished name.</p>
     */
    organizationalUnitDistinguishedName?: string;
    /**
     * <p>The unique identifier for a studio component resource.</p>
     */
    studioComponentId?: string;
    /**
     * <p>The name for the studio component.</p>
     */
    studioComponentName?: string;
}
export declare namespace LaunchProfileInitializationActiveDirectory {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchProfileInitializationActiveDirectory) => any;
}
export interface LaunchProfileInitializationScript {
    /**
     * <p>The initialization script.</p>
     */
    script?: string;
    /**
     * <p>The unique identifier for a studio component resource.</p>
     */
    studioComponentId?: string;
    /**
     * <p>The name for the studio component.</p>
     */
    studioComponentName?: string;
}
export declare namespace LaunchProfileInitializationScript {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchProfileInitializationScript) => any;
}
export interface LaunchProfileInitialization {
    /**
     * <p>A LaunchProfileInitializationActiveDirectory resource.</p>
     */
    activeDirectory?: LaunchProfileInitializationActiveDirectory;
    /**
     * <p>The EC2 security groups that control access to the studio component.</p>
     */
    ec2SecurityGroupIds?: string[];
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId?: string;
    /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
     */
    launchProfileProtocolVersion?: string;
    /**
     * <p>The launch purpose.</p>
     */
    launchPurpose?: string;
    /**
     * <p>The name for the launch profile.</p>
     */
    name?: string;
    /**
     * <p>The platform of the launch platform, either WINDOWS or LINUX.</p>
     */
    platform?: LaunchProfilePlatform | string;
    /**
     * <p>The system initializtion scripts.</p>
     */
    systemInitializationScripts?: LaunchProfileInitializationScript[];
    /**
     * <p>The user initializtion scripts.</p>
     */
    userInitializationScripts?: LaunchProfileInitializationScript[];
}
export declare namespace LaunchProfileInitialization {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchProfileInitialization) => any;
}
export interface GetLaunchProfileInitializationResponse {
    /**
     * <p>The launch profile initialization.</p>
     */
    launchProfileInitialization?: LaunchProfileInitialization;
}
export declare namespace GetLaunchProfileInitializationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileInitializationResponse) => any;
}
export interface GetLaunchProfileMemberRequest {
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetLaunchProfileMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileMemberRequest) => any;
}
export declare enum LaunchProfilePersona {
    USER = "USER"
}
export interface LaunchProfileMembership {
    /**
     * <p>The ID of the identity store.</p>
     */
    identityStoreId?: string;
    /**
     * <p>The persona.</p>
     */
    persona?: LaunchProfilePersona | string;
    /**
     * <p>The principal ID.</p>
     */
    principalId?: string;
}
export declare namespace LaunchProfileMembership {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchProfileMembership) => any;
}
export interface GetLaunchProfileMemberResponse {
    /**
     * <p>The member.</p>
     */
    member?: LaunchProfileMembership;
}
export declare namespace GetLaunchProfileMemberResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLaunchProfileMemberResponse) => any;
}
export interface GetStreamingImageRequest {
    /**
     * <p>The streaming image ID.</p>
     */
    streamingImageId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetStreamingImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStreamingImageRequest) => any;
}
export interface GetStreamingImageResponse {
    /**
     * <p>The streaming image.</p>
     */
    streamingImage?: StreamingImage;
}
export declare namespace GetStreamingImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStreamingImageResponse) => any;
}
export interface GetStreamingSessionRequest {
    /**
     * <p>The session ID.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetStreamingSessionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStreamingSessionRequest) => any;
}
export interface GetStreamingSessionResponse {
    /**
     * <p>The session.</p>
     */
    session?: StreamingSession;
}
export declare namespace GetStreamingSessionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStreamingSessionResponse) => any;
}
export interface GetStreamingSessionStreamRequest {
    /**
     * <p>The session ID.</p>
     */
    sessionId: string | undefined;
    /**
     * <p>The stream ID.</p>
     */
    streamId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetStreamingSessionStreamRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStreamingSessionStreamRequest) => any;
}
export interface GetStreamingSessionStreamResponse {
    /**
     * <p>The stream.</p>
     */
    stream?: StreamingSessionStream;
}
export declare namespace GetStreamingSessionStreamResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStreamingSessionStreamResponse) => any;
}
export interface GetStudioRequest {
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetStudioRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStudioRequest) => any;
}
export interface GetStudioResponse {
    /**
     * <p>Information about a studio.</p>
     */
    studio?: Studio;
}
export declare namespace GetStudioResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStudioResponse) => any;
}
export interface GetStudioComponentRequest {
    /**
     * <p>The studio component ID.</p>
     */
    studioComponentId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetStudioComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStudioComponentRequest) => any;
}
export interface GetStudioComponentResponse {
    /**
     * <p>Information about the studio component.</p>
     */
    studioComponent?: StudioComponent;
}
export declare namespace GetStudioComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStudioComponentResponse) => any;
}
export interface GetStudioMemberRequest {
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace GetStudioMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStudioMemberRequest) => any;
}
export declare enum StudioPersona {
    ADMINISTRATOR = "ADMINISTRATOR"
}
export interface StudioMembership {
    /**
     * <p>The ID of the identity store.</p>
     */
    identityStoreId?: string;
    /**
     * <p>The persona.</p>
     */
    persona?: StudioPersona | string;
    /**
     * <p>The principal ID.</p>
     */
    principalId?: string;
}
export declare namespace StudioMembership {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StudioMembership) => any;
}
export interface GetStudioMemberResponse {
    /**
     * <p>The member.</p>
     */
    member?: StudioMembership;
}
export declare namespace GetStudioMemberResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStudioMemberResponse) => any;
}
export interface ListEulaAcceptancesRequest {
    /**
     * <p>A collection of EULA IDs.</p>
     */
    eulaIds?: string[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace ListEulaAcceptancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEulaAcceptancesRequest) => any;
}
export interface ListEulaAcceptancesResponse {
    /**
     * <p>A collection of EULA acceptances.</p>
     */
    eulaAcceptances?: EulaAcceptance[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListEulaAcceptancesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEulaAcceptancesResponse) => any;
}
export interface ListEulasRequest {
    /**
     * <p>A collection of EULA IDs.</p>
     */
    eulaIds?: string[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListEulasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEulasRequest) => any;
}
export interface ListEulasResponse {
    /**
     * <p>A collection of EULA resources.</p>
     */
    eulas?: Eula[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListEulasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEulasResponse) => any;
}
export interface ListLaunchProfileMembersRequest {
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace ListLaunchProfileMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLaunchProfileMembersRequest) => any;
}
export interface ListLaunchProfileMembersResponse {
    /**
     * <p>A list of members.</p>
     */
    members?: LaunchProfileMembership[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListLaunchProfileMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLaunchProfileMembersResponse) => any;
}
export interface ListLaunchProfilesRequest {
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>The principal ID.</p>
     */
    principalId?: string;
    /**
     * <p>A list of states.</p>
     */
    states?: string[];
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace ListLaunchProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLaunchProfilesRequest) => any;
}
export interface ListLaunchProfilesResponse {
    /**
     * <p>A collection of launch profiles.</p>
     */
    launchProfiles?: LaunchProfile[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListLaunchProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLaunchProfilesResponse) => any;
}
export interface ListStreamingImagesRequest {
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>The owner.</p>
     */
    owner?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace ListStreamingImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStreamingImagesRequest) => any;
}
export interface ListStreamingImagesResponse {
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>A collection of streaming images.</p>
     */
    streamingImages?: StreamingImage[];
}
export declare namespace ListStreamingImagesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStreamingImagesResponse) => any;
}
export interface ListStreamingSessionsRequest {
    /**
     * <p>The user ID.</p>
     */
    createdBy?: string;
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>A collection of session IDs.</p>
     */
    sessionIds?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace ListStreamingSessionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStreamingSessionsRequest) => any;
}
export interface ListStreamingSessionsResponse {
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>A collection of streaming sessions.</p>
     */
    sessions?: StreamingSession[];
}
export declare namespace ListStreamingSessionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStreamingSessionsResponse) => any;
}
export interface ListStudioComponentsRequest {
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>A list of states.</p>
     */
    states?: string[];
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>The types.</p>
     */
    types?: string[];
}
export declare namespace ListStudioComponentsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStudioComponentsRequest) => any;
}
export interface ListStudioComponentsResponse {
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>A collection of studio components.</p>
     */
    studioComponents?: StudioComponent[];
}
export declare namespace ListStudioComponentsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStudioComponentsResponse) => any;
}
export interface ListStudioMembersRequest {
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace ListStudioMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStudioMembersRequest) => any;
}
export interface ListStudioMembersResponse {
    /**
     * <p>A list of members.</p>
     */
    members?: StudioMembership[];
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListStudioMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStudioMembersResponse) => any;
}
export interface ListStudiosRequest {
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
}
export declare namespace ListStudiosRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStudiosRequest) => any;
}
export interface ListStudiosResponse {
    /**
     * <p>The token for the next set of results, or null if there are no more results.</p>
     */
    nextToken?: string;
    /**
     * <p>A collection of studios.</p>
     */
    studios?: Studio[];
}
export declare namespace ListStudiosResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStudiosResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the target resource for tagging operations.</p>
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
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface NewLaunchProfileMember {
    /**
     * <p>The persona.</p>
     */
    persona: LaunchProfilePersona | string | undefined;
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
}
export declare namespace NewLaunchProfileMember {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NewLaunchProfileMember) => any;
}
export interface NewStudioMember {
    /**
     * <p>The persona.</p>
     */
    persona: StudioPersona | string | undefined;
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
}
export declare namespace NewStudioMember {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NewStudioMember) => any;
}
/**
 * <p>Information about a launch profile membership.</p>
 */
export interface PutLaunchProfileMembersRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The ID of the identity store.</p>
     */
    identityStoreId: string | undefined;
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>A list of members.</p>
     */
    members: NewLaunchProfileMember[] | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace PutLaunchProfileMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutLaunchProfileMembersRequest) => any;
}
export interface PutLaunchProfileMembersResponse {
}
export declare namespace PutLaunchProfileMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutLaunchProfileMembersResponse) => any;
}
/**
 * <p>A launch profile membership collection.</p>
 */
export interface PutStudioMembersRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The ID of the identity store.</p>
     */
    identityStoreId: string | undefined;
    /**
     * <p>A list of members.</p>
     */
    members: NewStudioMember[] | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace PutStudioMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutStudioMembersRequest) => any;
}
export interface PutStudioMembersResponse {
}
export declare namespace PutStudioMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutStudioMembersResponse) => any;
}
export interface StartStudioSSOConfigurationRepairRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace StartStudioSSOConfigurationRepairRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartStudioSSOConfigurationRepairRequest) => any;
}
export interface StartStudioSSOConfigurationRepairResponse {
    /**
     * <p>Information about a studio.</p>
     */
    studio?: Studio;
}
export declare namespace StartStudioSSOConfigurationRepairResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartStudioSSOConfigurationRepairResponse) => any;
}
/**
 * <p>The ARN for the role that manages access.</p>
 */
export interface TagResourceRequest {
    /**
     * <p>The ARN of the target resource for tagging operations.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
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
     * <p>The ARN of the target resource for tagging operations.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>An array of tag keys to delete.</p>
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
/**
 * <p>The launch profile ID.</p>
 */
export interface UpdateLaunchProfileRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
     */
    launchProfileProtocolVersions?: string[];
    /**
     * <p>The name for the launch profile.</p>
     */
    name?: string;
    /**
     * <p>A configuration for a streaming session.</p>
     */
    streamConfiguration?: StreamConfigurationCreate;
    /**
     * <p>Unique identifiers for a collection of studio components that can be used with this launch profile.</p>
     */
    studioComponentIds?: string[];
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace UpdateLaunchProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLaunchProfileRequest) => any;
}
export interface UpdateLaunchProfileResponse {
    /**
     * <p>The launch profile.</p>
     */
    launchProfile?: LaunchProfile;
}
export declare namespace UpdateLaunchProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLaunchProfileResponse) => any;
}
/**
 * <p>The principal ID.</p>
 */
export interface UpdateLaunchProfileMemberRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The launch profile ID.</p>
     */
    launchProfileId: string | undefined;
    /**
     * <p>The persona.</p>
     */
    persona: LaunchProfilePersona | string | undefined;
    /**
     * <p>The principal ID.</p>
     */
    principalId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace UpdateLaunchProfileMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLaunchProfileMemberRequest) => any;
}
export interface UpdateLaunchProfileMemberResponse {
    /**
     * <p>The member.</p>
     */
    member?: LaunchProfileMembership;
}
export declare namespace UpdateLaunchProfileMemberResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLaunchProfileMemberResponse) => any;
}
/**
 * <p>The streaming image ID.</p>
 */
export interface UpdateStreamingImageRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The name for the streaming image.</p>
     */
    name?: string;
    /**
     * <p>The streaming image ID.</p>
     */
    streamingImageId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
}
export declare namespace UpdateStreamingImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStreamingImageRequest) => any;
}
export interface UpdateStreamingImageResponse {
    /**
     * <p></p>
     */
    streamingImage?: StreamingImage;
}
export declare namespace UpdateStreamingImageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStreamingImageResponse) => any;
}
/**
 * <p>The studio ID.</p>
 */
export interface UpdateStudioRequest {
    /**
     * <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
     */
    adminRoleArn?: string;
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>A friendly name for the studio.</p>
     */
    displayName?: string;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>
     */
    userRoleArn?: string;
}
export declare namespace UpdateStudioRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStudioRequest) => any;
}
export interface UpdateStudioResponse {
    /**
     * <p>Information about a studio.</p>
     */
    studio?: Studio;
}
export declare namespace UpdateStudioResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStudioResponse) => any;
}
/**
 * <p>The studio component ID.</p>
 */
export interface UpdateStudioComponentRequest {
    /**
     * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
     */
    clientToken?: string;
    /**
     * <p>The configuration of the studio component, based on component type.</p>
     */
    configuration?: StudioComponentConfiguration;
    /**
     * <p>The description.</p>
     */
    description?: string;
    /**
     * <p>The EC2 security groups that control access to the studio component.</p>
     */
    ec2SecurityGroupIds?: string[];
    /**
     * <p>Initialization scripts for studio components.</p>
     */
    initializationScripts?: StudioComponentInitializationScript[];
    /**
     * <p>The name for the studio component.</p>
     */
    name?: string;
    /**
     * <p>Parameters for the studio component scripts.</p>
     */
    scriptParameters?: ScriptParameterKeyValue[];
    /**
     * <p>The studio component ID.</p>
     */
    studioComponentId: string | undefined;
    /**
     * <p>The studio ID.</p>
     */
    studioId: string | undefined;
    /**
     * <p>The specific subtype of a studio component.</p>
     */
    subtype?: StudioComponentSubtype | string;
    /**
     * <p>The type of the studio component.</p>
     */
    type?: StudioComponentType | string;
}
export declare namespace UpdateStudioComponentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStudioComponentRequest) => any;
}
export interface UpdateStudioComponentResponse {
    /**
     * <p>Information about the studio component.</p>
     */
    studioComponent?: StudioComponent;
}
export declare namespace UpdateStudioComponentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateStudioComponentResponse) => any;
}
