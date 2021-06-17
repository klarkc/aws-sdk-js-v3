import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum __PeriodTriggersElement {
    ADS = "ADS"
}
/**
 * A MediaPackage VOD Asset resource.
 */
export interface AssetShallow {
    /**
     * The ARN of the Asset.
     */
    Arn?: string;
    /**
     * The time the Asset was initially submitted for Ingest.
     */
    CreatedAt?: string;
    /**
     * The unique identifier for the Asset.
     */
    Id?: string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId?: string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn?: string;
    /**
     * The IAM role ARN used to access the source S3 bucket.
     */
    SourceRoleArn?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace AssetShallow {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssetShallow) => any;
}
export declare enum ManifestLayout {
    COMPACT = "COMPACT",
    FULL = "FULL"
}
export declare enum Profile {
    HBBTV_1_5 = "HBBTV_1_5",
    NONE = "NONE"
}
export declare enum StreamOrder {
    ORIGINAL = "ORIGINAL",
    VIDEO_BITRATE_ASCENDING = "VIDEO_BITRATE_ASCENDING",
    VIDEO_BITRATE_DESCENDING = "VIDEO_BITRATE_DESCENDING"
}
/**
 * A StreamSelection configuration.
 */
export interface StreamSelection {
    /**
     * The maximum video bitrate (bps) to include in output.
     */
    MaxVideoBitsPerSecond?: number;
    /**
     * The minimum video bitrate (bps) to include in output.
     */
    MinVideoBitsPerSecond?: number;
    /**
     * A directive that determines the order of streams in the output.
     */
    StreamOrder?: StreamOrder | string;
}
export declare namespace StreamSelection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamSelection) => any;
}
/**
 * A DASH manifest configuration.
 */
export interface DashManifest {
    /**
     * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
     */
    ManifestLayout?: ManifestLayout | string;
    /**
     * An optional string to include in the name of the manifest.
     */
    ManifestName?: string;
    /**
     * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
     */
    MinBufferTimeSeconds?: number;
    /**
     * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
     */
    Profile?: Profile | string;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
}
export declare namespace DashManifest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DashManifest) => any;
}
/**
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 */
export interface EgressEndpoint {
    /**
     * The ID of the PackagingConfiguration being applied to the Asset.
     */
    PackagingConfigurationId?: string;
    /**
     * The URL of the parent manifest for the repackaged Asset.
     */
    Url?: string;
}
export declare namespace EgressEndpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EgressEndpoint) => any;
}
export declare enum AdMarkers {
    NONE = "NONE",
    PASSTHROUGH = "PASSTHROUGH",
    SCTE35_ENHANCED = "SCTE35_ENHANCED"
}
/**
 * An HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint.
     * "NONE" will omit all SCTE-35 ad markers from the output.
     * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
     * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
     * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
     * messages in the input source.
     */
    AdMarkers?: AdMarkers | string;
    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;
    /**
     * An optional string to include in the name of the manifest.
     */
    ManifestName?: string;
    /**
     * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
     * inserted into manifests. Additionally, when an interval is specified
     * ID3Timed Metadata messages will be generated every 5 seconds using the
     * ingest time of the content.
     * If the interval is not specified, or set to 0, then
     * no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
     * ID3Timed Metadata messages will be generated. Note that irrespective
     * of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
     * it will be passed through to HLS output.
     */
    ProgramDateTimeIntervalSeconds?: number;
    /**
     * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
     */
    RepeatExtXKey?: boolean;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
}
export declare namespace HlsManifest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsManifest) => any;
}
/**
 * A Microsoft Smooth Streaming (MSS) manifest configuration.
 */
export interface MssManifest {
    /**
     * An optional string to include in the name of the manifest.
     */
    ManifestName?: string;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
}
export declare namespace MssManifest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MssManifest) => any;
}
/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
    /**
     * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
     * MediaPackage will assume when accessing the key provider service.
     */
    RoleArn: string | undefined;
    /**
     * The system IDs to include in key requests.
     */
    SystemIds: string[] | undefined;
    /**
     * The URL of the external key provider service.
     */
    Url: string | undefined;
}
export declare namespace SpekeKeyProvider {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SpekeKeyProvider) => any;
}
/**
 * A CMAF encryption configuration.
 */
export interface CmafEncryption {
    /**
     * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
     */
    SpekeKeyProvider: SpekeKeyProvider | undefined;
}
export declare namespace CmafEncryption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CmafEncryption) => any;
}
/**
 * A CMAF packaging configuration.
 */
export interface CmafPackage {
    /**
     * A CMAF encryption configuration.
     */
    Encryption?: CmafEncryption;
    /**
     * A list of HLS manifest configurations.
     */
    HlsManifests: HlsManifest[] | undefined;
    /**
     * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
     */
    IncludeEncoderConfigurationInSegments?: boolean;
    /**
     * Duration (in seconds) of each fragment. Actual fragments will be
     * rounded to the nearest multiple of the source fragment duration.
     */
    SegmentDurationSeconds?: number;
}
export declare namespace CmafPackage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CmafPackage) => any;
}
/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
 */
export interface DashEncryption {
    /**
     * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
     */
    SpekeKeyProvider: SpekeKeyProvider | undefined;
}
export declare namespace DashEncryption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DashEncryption) => any;
}
export declare enum SegmentTemplateFormat {
    NUMBER_WITH_DURATION = "NUMBER_WITH_DURATION",
    NUMBER_WITH_TIMELINE = "NUMBER_WITH_TIMELINE",
    TIME_WITH_TIMELINE = "TIME_WITH_TIMELINE"
}
/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
    /**
     * A list of DASH manifest configurations.
     */
    DashManifests: DashManifest[] | undefined;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
     */
    Encryption?: DashEncryption;
    /**
     * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
     */
    IncludeEncoderConfigurationInSegments?: boolean;
    /**
     * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
     * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
     * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
     * the Asset contains SCTE-35 ad markers.
     */
    PeriodTriggers?: (__PeriodTriggersElement | string)[];
    /**
     * Duration (in seconds) of each segment. Actual segments will be
     * rounded to the nearest multiple of the source segment duration.
     */
    SegmentDurationSeconds?: number;
    /**
     * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
     */
    SegmentTemplateFormat?: SegmentTemplateFormat | string;
}
export declare namespace DashPackage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DashPackage) => any;
}
export declare enum EncryptionMethod {
    AES_128 = "AES_128",
    SAMPLE_AES = "SAMPLE_AES"
}
/**
 * An HTTP Live Streaming (HLS) encryption configuration.
 */
export interface HlsEncryption {
    /**
     * A constant initialization vector for encryption (optional).
     * When not specified the initialization vector will be periodically rotated.
     */
    ConstantInitializationVector?: string;
    /**
     * The encryption method to use.
     */
    EncryptionMethod?: EncryptionMethod | string;
    /**
     * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
     */
    SpekeKeyProvider: SpekeKeyProvider | undefined;
}
export declare namespace HlsEncryption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsEncryption) => any;
}
/**
 * An HTTP Live Streaming (HLS) packaging configuration.
 */
export interface HlsPackage {
    /**
     * An HTTP Live Streaming (HLS) encryption configuration.
     */
    Encryption?: HlsEncryption;
    /**
     * A list of HLS manifest configurations.
     */
    HlsManifests: HlsManifest[] | undefined;
    /**
     * Duration (in seconds) of each fragment. Actual fragments will be
     * rounded to the nearest multiple of the source fragment duration.
     */
    SegmentDurationSeconds?: number;
    /**
     * When enabled, audio streams will be placed in rendition groups in the output.
     */
    UseAudioRenditionGroup?: boolean;
}
export declare namespace HlsPackage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsPackage) => any;
}
/**
 * A Microsoft Smooth Streaming (MSS) encryption configuration.
 */
export interface MssEncryption {
    /**
     * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
     */
    SpekeKeyProvider: SpekeKeyProvider | undefined;
}
export declare namespace MssEncryption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MssEncryption) => any;
}
/**
 * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
 */
export interface MssPackage {
    /**
     * A Microsoft Smooth Streaming (MSS) encryption configuration.
     */
    Encryption?: MssEncryption;
    /**
     * A list of MSS manifest configurations.
     */
    MssManifests: MssManifest[] | undefined;
    /**
     * The duration (in seconds) of each segment.
     */
    SegmentDurationSeconds?: number;
}
export declare namespace MssPackage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MssPackage) => any;
}
/**
 * A MediaPackage VOD PackagingConfiguration resource.
 */
export interface PackagingConfiguration {
    /**
     * The ARN of the PackagingConfiguration.
     */
    Arn?: string;
    /**
     * A CMAF packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace PackagingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackagingConfiguration) => any;
}
/**
 * CDN Authorization credentials
 */
export interface Authorization {
    /**
     * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
     */
    CdnIdentifierSecret: string | undefined;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
     */
    SecretsRoleArn: string | undefined;
}
export declare namespace Authorization {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Authorization) => any;
}
/**
 * Configure egress access logging.
 */
export interface EgressAccessLogs {
    /**
     * Customize the log group name.
     */
    LogGroupName?: string;
}
export declare namespace EgressAccessLogs {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EgressAccessLogs) => any;
}
/**
 * A MediaPackage VOD PackagingGroup resource.
 */
export interface PackagingGroup {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    DomainName?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace PackagingGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackagingGroup) => any;
}
/**
 * The option to configure log subscription.
 */
export interface ConfigureLogsRequest {
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of a MediaPackage VOD PackagingGroup resource.
     */
    Id: string | undefined;
}
export declare namespace ConfigureLogsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigureLogsRequest) => any;
}
export interface ConfigureLogsResponse {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    DomainName?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ConfigureLogsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigureLogsResponse) => any;
}
/**
 * The client is not authorized to access the requested resource.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
    name: "ForbiddenException";
    $fault: "client";
    Message?: string;
}
export declare namespace ForbiddenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ForbiddenException) => any;
}
/**
 * An unexpected error occurred.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
/**
 * The requested resource does not exist.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
/**
 * An unexpected error occurred.
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ServiceUnavailableException";
    $fault: "server";
    Message?: string;
}
export declare namespace ServiceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceUnavailableException) => any;
}
/**
 * The client has exceeded their resource or throttling limits.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
    name: "TooManyRequestsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyRequestsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyRequestsException) => any;
}
/**
 * The parameters sent in the request are not valid.
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
    name: "UnprocessableEntityException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnprocessableEntityException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnprocessableEntityException) => any;
}
/**
 * A new MediaPackage VOD Asset configuration.
 */
export interface CreateAssetRequest {
    /**
     * The unique identifier for the Asset.
     */
    Id: string | undefined;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId: string | undefined;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn: string | undefined;
    /**
     * The IAM role ARN used to access the source S3 bucket.
     */
    SourceRoleArn: string | undefined;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateAssetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAssetRequest) => any;
}
export interface CreateAssetResponse {
    /**
     * The ARN of the Asset.
     */
    Arn?: string;
    /**
     * The time the Asset was initially submitted for Ingest.
     */
    CreatedAt?: string;
    /**
     * The list of egress endpoints available for the Asset.
     */
    EgressEndpoints?: EgressEndpoint[];
    /**
     * The unique identifier for the Asset.
     */
    Id?: string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId?: string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn?: string;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    SourceRoleArn?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateAssetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAssetResponse) => any;
}
/**
 * A new MediaPackage VOD PackagingConfiguration resource configuration.
 */
export interface CreatePackagingConfigurationRequest {
    /**
     * A CMAF packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id: string | undefined;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId: string | undefined;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreatePackagingConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePackagingConfigurationRequest) => any;
}
export interface CreatePackagingConfigurationResponse {
    /**
     * The ARN of the PackagingConfiguration.
     */
    Arn?: string;
    /**
     * A CMAF packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreatePackagingConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePackagingConfigurationResponse) => any;
}
/**
 * A new MediaPackage VOD PackagingGroup resource configuration.
 */
export interface CreatePackagingGroupRequest {
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the PackagingGroup.
     */
    Id: string | undefined;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreatePackagingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePackagingGroupRequest) => any;
}
export interface CreatePackagingGroupResponse {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    DomainName?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreatePackagingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePackagingGroupResponse) => any;
}
export interface DeleteAssetRequest {
    /**
     * The ID of the MediaPackage VOD Asset resource to delete.
     */
    Id: string | undefined;
}
export declare namespace DeleteAssetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAssetRequest) => any;
}
export interface DeleteAssetResponse {
}
export declare namespace DeleteAssetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAssetResponse) => any;
}
export interface DeletePackagingConfigurationRequest {
    /**
     * The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
     */
    Id: string | undefined;
}
export declare namespace DeletePackagingConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackagingConfigurationRequest) => any;
}
export interface DeletePackagingConfigurationResponse {
}
export declare namespace DeletePackagingConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackagingConfigurationResponse) => any;
}
export interface DeletePackagingGroupRequest {
    /**
     * The ID of the MediaPackage VOD PackagingGroup resource to delete.
     */
    Id: string | undefined;
}
export declare namespace DeletePackagingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackagingGroupRequest) => any;
}
export interface DeletePackagingGroupResponse {
}
export declare namespace DeletePackagingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackagingGroupResponse) => any;
}
export interface DescribeAssetRequest {
    /**
     * The ID of an MediaPackage VOD Asset resource.
     */
    Id: string | undefined;
}
export declare namespace DescribeAssetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAssetRequest) => any;
}
export interface DescribeAssetResponse {
    /**
     * The ARN of the Asset.
     */
    Arn?: string;
    /**
     * The time the Asset was initially submitted for Ingest.
     */
    CreatedAt?: string;
    /**
     * The list of egress endpoints available for the Asset.
     */
    EgressEndpoints?: EgressEndpoint[];
    /**
     * The unique identifier for the Asset.
     */
    Id?: string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId?: string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn?: string;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    SourceRoleArn?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeAssetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAssetResponse) => any;
}
export interface DescribePackagingConfigurationRequest {
    /**
     * The ID of a MediaPackage VOD PackagingConfiguration resource.
     */
    Id: string | undefined;
}
export declare namespace DescribePackagingConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagingConfigurationRequest) => any;
}
export interface DescribePackagingConfigurationResponse {
    /**
     * The ARN of the PackagingConfiguration.
     */
    Arn?: string;
    /**
     * A CMAF packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribePackagingConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagingConfigurationResponse) => any;
}
export interface DescribePackagingGroupRequest {
    /**
     * The ID of a MediaPackage VOD PackagingGroup resource.
     */
    Id: string | undefined;
}
export declare namespace DescribePackagingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagingGroupRequest) => any;
}
export interface DescribePackagingGroupResponse {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    DomainName?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribePackagingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagingGroupResponse) => any;
}
export interface ListAssetsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: number;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: string;
    /**
     * Returns Assets associated with the specified PackagingGroup.
     */
    PackagingGroupId?: string;
}
export declare namespace ListAssetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssetsRequest) => any;
}
export interface ListAssetsResponse {
    /**
     * A list of MediaPackage VOD Asset resources.
     */
    Assets?: AssetShallow[];
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: string;
}
export declare namespace ListAssetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAssetsResponse) => any;
}
export interface ListPackagingConfigurationsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: number;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: string;
    /**
     * Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
     */
    PackagingGroupId?: string;
}
export declare namespace ListPackagingConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagingConfigurationsRequest) => any;
}
export interface ListPackagingConfigurationsResponse {
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: string;
    /**
     * A list of MediaPackage VOD PackagingConfiguration resources.
     */
    PackagingConfigurations?: PackagingConfiguration[];
}
export declare namespace ListPackagingConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagingConfigurationsResponse) => any;
}
export interface ListPackagingGroupsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: number;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: string;
}
export declare namespace ListPackagingGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagingGroupsRequest) => any;
}
export interface ListPackagingGroupsResponse {
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: string;
    /**
     * A list of MediaPackage VOD PackagingGroup resources.
     */
    PackagingGroups?: PackagingGroup[];
}
export declare namespace ListPackagingGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagingGroupsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
     */
    ResourceArn: string | undefined;
    /**
     * A collection of tags associated with a resource
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource. You can get this from the response to any request to the resource.
     */
    ResourceArn: string | undefined;
    /**
     * A comma-separated list of the tag keys to remove from the resource.
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
/**
 * A MediaPackage VOD PackagingGroup resource configuration.
 */
export interface UpdatePackagingGroupRequest {
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The ID of a MediaPackage VOD PackagingGroup resource.
     */
    Id: string | undefined;
}
export declare namespace UpdatePackagingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePackagingGroupRequest) => any;
}
export interface UpdatePackagingGroupResponse {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     */
    DomainName?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: string;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace UpdatePackagingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePackagingGroupResponse) => any;
}
