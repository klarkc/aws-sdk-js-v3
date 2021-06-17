import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum __AdTriggersElement {
    BREAK = "BREAK",
    DISTRIBUTOR_ADVERTISEMENT = "DISTRIBUTOR_ADVERTISEMENT",
    DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY = "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
    DISTRIBUTOR_PLACEMENT_OPPORTUNITY = "DISTRIBUTOR_PLACEMENT_OPPORTUNITY",
    PROVIDER_ADVERTISEMENT = "PROVIDER_ADVERTISEMENT",
    PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY = "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY",
    PROVIDER_PLACEMENT_OPPORTUNITY = "PROVIDER_PLACEMENT_OPPORTUNITY",
    SPLICE_INSERT = "SPLICE_INSERT"
}
export declare enum __PeriodTriggersElement {
    ADS = "ADS"
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
 * An endpoint for ingesting source content for a Channel.
 */
export interface IngestEndpoint {
    /**
     * The system generated unique identifier for the IngestEndpoint
     */
    Id?: string;
    /**
     * The system generated password for ingest authentication.
     */
    Password?: string;
    /**
     * The ingest URL to which the source stream should be sent.
     */
    Url?: string;
    /**
     * The system generated username for ingest authentication.
     */
    Username?: string;
}
export declare namespace IngestEndpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IngestEndpoint) => any;
}
/**
 * An HTTP Live Streaming (HLS) ingest resource configuration.
 */
export interface HlsIngest {
    /**
     * A list of endpoints to which the source stream should be sent.
     */
    IngestEndpoints?: IngestEndpoint[];
}
export declare namespace HlsIngest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsIngest) => any;
}
/**
 * Configure ingress access logging.
 */
export interface IngressAccessLogs {
    /**
     * Customize the log group name.
     */
    LogGroupName?: string;
}
export declare namespace IngressAccessLogs {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IngressAccessLogs) => any;
}
/**
 * A Channel resource configuration.
 */
export interface Channel {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace Channel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Channel) => any;
}
/**
 * Configuration parameters for where in an S3 bucket to place the harvested content
 */
export interface S3Destination {
    /**
     * The name of an S3 bucket within which harvested content will be exported
     */
    BucketName: string | undefined;
    /**
     * The key in the specified S3 bucket where the harvested top-level manifest will be placed.
     */
    ManifestKey: string | undefined;
    /**
     * The IAM role used to write to the specified S3 bucket
     */
    RoleArn: string | undefined;
}
export declare namespace S3Destination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Destination) => any;
}
export declare enum Status {
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    SUCCEEDED = "SUCCEEDED"
}
/**
 * A HarvestJob resource configuration
 */
export interface HarvestJob {
    /**
     * The Amazon Resource Name (ARN) assigned to the HarvestJob.
     */
    Arn?: string;
    /**
     * The ID of the Channel that the HarvestJob will harvest from.
     */
    ChannelId?: string;
    /**
     * The time the HarvestJob was submitted
     */
    CreatedAt?: string;
    /**
     * The end of the time-window which will be harvested.
     */
    EndTime?: string;
    /**
     * The ID of the HarvestJob. The ID must be unique within the region
     * and it cannot be changed after the HarvestJob is submitted.
     */
    Id?: string;
    /**
     * The ID of the OriginEndpoint that the HarvestJob will harvest from.
     * This cannot be changed after the HarvestJob is submitted.
     */
    OriginEndpointId?: string;
    /**
     * Configuration parameters for where in an S3 bucket to place the harvested content
     */
    S3Destination?: S3Destination;
    /**
     * The start of the time-window which will be harvested.
     */
    StartTime?: string;
    /**
     * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
     * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
     * include an explanation of why the HarvestJob failed.
     */
    Status?: Status | string;
}
export declare namespace HarvestJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HarvestJob) => any;
}
export declare enum AdMarkers {
    DATERANGE = "DATERANGE",
    NONE = "NONE",
    PASSTHROUGH = "PASSTHROUGH",
    SCTE35_ENHANCED = "SCTE35_ENHANCED"
}
export declare enum PlaylistType {
    EVENT = "EVENT",
    NONE = "NONE",
    VOD = "VOD"
}
/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifest {
    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint.
     * "NONE" will omit all SCTE-35 ad markers from the output.
     * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
     * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
     * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
     * messages in the input source.
     * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
     * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
     * that is greater than 0.
     */
    AdMarkers?: AdMarkers | string;
    /**
     * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
     */
    Id: string | undefined;
    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;
    /**
     * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
     */
    ManifestName?: string;
    /**
     * The HTTP Live Streaming (HLS) playlist type.
     * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
     * entry will be included in the media playlist.
     */
    PlaylistType?: PlaylistType | string;
    /**
     * Time window (in seconds) contained in each parent manifest.
     */
    PlaylistWindowSeconds?: number;
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
     * The URL of the packaged OriginEndpoint for consumption.
     */
    Url?: string;
}
export declare namespace HlsManifest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsManifest) => any;
}
export declare enum AdsOnDeliveryRestrictions {
    BOTH = "BOTH",
    NONE = "NONE",
    RESTRICTED = "RESTRICTED",
    UNRESTRICTED = "UNRESTRICTED"
}
/**
 * A HTTP Live Streaming (HLS) manifest configuration.
 */
export interface HlsManifestCreateOrUpdateParameters {
    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint.
     * "NONE" will omit all SCTE-35 ad markers from the output.
     * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
     * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
     * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
     * messages in the input source.
     * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
     * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
     * that is greater than 0.
     */
    AdMarkers?: AdMarkers | string;
    /**
     * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
     * ad markers are output.  Specify multiple items to create ad markers for all of the included
     * message types.
     */
    AdTriggers?: (__AdTriggersElement | string)[];
    /**
     * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
     * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
     * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
     * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
     * messages of the types specified in AdTriggers that do not contain delivery restrictions will
     * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
     * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
     * and are always treated as ads if specified in AdTriggers.
     */
    AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;
    /**
     * The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
     */
    Id: string | undefined;
    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;
    /**
     * An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
     */
    ManifestName?: string;
    /**
     * The HTTP Live Streaming (HLS) playlist type.
     * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
     * entry will be included in the media playlist.
     */
    PlaylistType?: PlaylistType | string;
    /**
     * Time window (in seconds) contained in each parent manifest.
     */
    PlaylistWindowSeconds?: number;
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
}
export declare namespace HlsManifestCreateOrUpdateParameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsManifestCreateOrUpdateParameters) => any;
}
/**
 * CDN Authorization credentials
 */
export interface Authorization {
    /**
     * The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
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
export declare enum PresetSpeke20Audio {
    PRESET_AUDIO_1 = "PRESET-AUDIO-1"
}
export declare enum PresetSpeke20Video {
    PRESET_VIDEO_1 = "PRESET-VIDEO-1"
}
/**
 * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
 * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
 * To configure the encryption contract, specify which audio and video encryption presets to use.
 * Note the following considerations when using encryptionContractConfiguration:
 * encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
 * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
 */
export interface EncryptionContractConfiguration {
    /**
     * A collection of audio encryption presets.
     */
    PresetSpeke20Audio: PresetSpeke20Audio | string | undefined;
    /**
     * A collection of video encryption presets.
     */
    PresetSpeke20Video: PresetSpeke20Video | string | undefined;
}
export declare namespace EncryptionContractConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EncryptionContractConfiguration) => any;
}
/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface SpekeKeyProvider {
    /**
     * An Amazon Resource Name (ARN) of a Certificate Manager certificate
     * that MediaPackage will use for enforcing secure end-to-end data
     * transfer with the key provider service.
     */
    CertificateArn?: string;
    /**
     * Use encryptionContractConfiguration to configure one or more content encryption keys for your endpoints that use SPEKE 2.0.
     * The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream.
     * To configure the encryption contract, specify which audio and video encryption presets to use.
     * Note the following considerations when using encryptionContractConfiguration:
     * encryptionContractConfiguration can be used for DASH endpoints that use SPEKE 2.0. SPEKE 2.0 relies on the CPIX 2.3 specification.
     * You must disable key rotation for this endpoint by setting keyRotationIntervalSeconds to 0.
     */
    EncryptionContractConfiguration?: EncryptionContractConfiguration;
    /**
     * The resource ID to include in key requests.
     */
    ResourceId: string | undefined;
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
 * A Common Media Application Format (CMAF) encryption configuration.
 */
export interface CmafEncryption {
    /**
     * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
     */
    ConstantInitializationVector?: string;
    /**
     * Time (in seconds) between each encryption key rotation.
     */
    KeyRotationIntervalSeconds?: number;
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
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackage {
    /**
     * A Common Media Application Format (CMAF) encryption configuration.
     */
    Encryption?: CmafEncryption;
    /**
     * A list of HLS manifest configurations
     */
    HlsManifests?: HlsManifest[];
    /**
     * Duration (in seconds) of each segment. Actual segments will be
     * rounded to the nearest multiple of the source segment duration.
     */
    SegmentDurationSeconds?: number;
    /**
     * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
     */
    SegmentPrefix?: string;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
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
     * Time (in seconds) between each encryption key rotation.
     */
    KeyRotationIntervalSeconds?: number;
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
export declare enum ManifestLayout {
    COMPACT = "COMPACT",
    FULL = "FULL"
}
export declare enum Profile {
    HBBTV_1_5 = "HBBTV_1_5",
    NONE = "NONE"
}
export declare enum SegmentTemplateFormat {
    NUMBER_WITH_DURATION = "NUMBER_WITH_DURATION",
    NUMBER_WITH_TIMELINE = "NUMBER_WITH_TIMELINE",
    TIME_WITH_TIMELINE = "TIME_WITH_TIMELINE"
}
export declare enum UtcTiming {
    HTTP_HEAD = "HTTP-HEAD",
    HTTP_ISO = "HTTP-ISO",
    NONE = "NONE"
}
/**
 * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
 */
export interface DashPackage {
    /**
     * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
     * ad markers are output.  Specify multiple items to create ad markers for all of the included
     * message types.
     */
    AdTriggers?: (__AdTriggersElement | string)[];
    /**
     * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
     * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
     * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
     * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
     * messages of the types specified in AdTriggers that do not contain delivery restrictions will
     * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
     * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
     * and are always treated as ads if specified in AdTriggers.
     */
    AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
     */
    Encryption?: DashEncryption;
    /**
     * Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
     */
    ManifestLayout?: ManifestLayout | string;
    /**
     * Time window (in seconds) contained in each manifest.
     */
    ManifestWindowSeconds?: number;
    /**
     * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
     */
    MinBufferTimeSeconds?: number;
    /**
     * Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
     */
    MinUpdatePeriodSeconds?: number;
    /**
     * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH)
     * Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not
     * be partitioned into more than one period. If the list contains "ADS", new periods will be created where
     * the Channel source contains SCTE-35 ad markers.
     */
    PeriodTriggers?: (__PeriodTriggersElement | string)[];
    /**
     * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
     */
    Profile?: Profile | string;
    /**
     * Duration (in seconds) of each segment. Actual segments will be
     * rounded to the nearest multiple of the source segment duration.
     */
    SegmentDurationSeconds?: number;
    /**
     * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
     */
    SegmentTemplateFormat?: SegmentTemplateFormat | string;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
    /**
     * Duration (in seconds) to delay live content before presentation.
     */
    SuggestedPresentationDelaySeconds?: number;
    /**
     * Determines the type of UTCTiming included in the Media Presentation Description (MPD)
     */
    UtcTiming?: UtcTiming | string;
    /**
     * Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO or HTTP-HEAD
     */
    UtcTimingUri?: string;
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
     * Interval (in seconds) between each encryption key rotation.
     */
    KeyRotationIntervalSeconds?: number;
    /**
     * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
     */
    RepeatExtXKey?: boolean;
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
     * This setting controls how ad markers are included in the packaged OriginEndpoint.
     * "NONE" will omit all SCTE-35 ad markers from the output.
     * "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
     * markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
     * "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
     * messages in the input source.
     * "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events
     * in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value
     * that is greater than 0.
     */
    AdMarkers?: AdMarkers | string;
    /**
     * A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
     * ad markers are output.  Specify multiple items to create ad markers for all of the included
     * message types.
     */
    AdTriggers?: (__AdTriggersElement | string)[];
    /**
     * This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to
     * determine whether a message signals an ad.  Choosing "NONE" means no SCTE-35 messages become
     * ads.  Choosing "RESTRICTED" means SCTE-35 messages of the types specified in AdTriggers that
     * contain delivery restrictions will be treated as ads.  Choosing "UNRESTRICTED" means SCTE-35
     * messages of the types specified in AdTriggers that do not contain delivery restrictions will
     * be treated as ads.  Choosing "BOTH" means all SCTE-35 messages of the types specified in
     * AdTriggers will be treated as ads.  Note that Splice Insert messages do not have these flags
     * and are always treated as ads if specified in AdTriggers.
     */
    AdsOnDeliveryRestrictions?: AdsOnDeliveryRestrictions | string;
    /**
     * An HTTP Live Streaming (HLS) encryption configuration.
     */
    Encryption?: HlsEncryption;
    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: boolean;
    /**
     * The HTTP Live Streaming (HLS) playlist type.
     * When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE
     * entry will be included in the media playlist.
     */
    PlaylistType?: PlaylistType | string;
    /**
     * Time window (in seconds) contained in each parent manifest.
     */
    PlaylistWindowSeconds?: number;
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
     * Duration (in seconds) of each fragment. Actual fragments will be
     * rounded to the nearest multiple of the source fragment duration.
     */
    SegmentDurationSeconds?: number;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
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
 * A Microsoft Smooth Streaming (MSS) packaging configuration.
 */
export interface MssPackage {
    /**
     * A Microsoft Smooth Streaming (MSS) encryption configuration.
     */
    Encryption?: MssEncryption;
    /**
     * The time window (in seconds) contained in each manifest.
     */
    ManifestWindowSeconds?: number;
    /**
     * The duration (in seconds) of each segment.
     */
    SegmentDurationSeconds?: number;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
}
export declare namespace MssPackage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MssPackage) => any;
}
export declare enum Origination {
    ALLOW = "ALLOW",
    DENY = "DENY"
}
/**
 * An OriginEndpoint resource configuration.
 */
export interface OriginEndpoint {
    /**
     * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The ID of the Channel the OriginEndpoint is associated with.
     */
    ChannelId?: string;
    /**
     * A Common Media Application Format (CMAF) packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the OriginEndpoint.
     */
    Id?: string;
    /**
     * A short string appended to the end of the OriginEndpoint URL.
     */
    ManifestName?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) packaging configuration.
     */
    MssPackage?: MssPackage;
    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
     * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
     * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: Origination | string;
    /**
     * Maximum duration (seconds) of content to retain for startover playback.
     * If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * Amount of delay (seconds) to enforce on the playback of live content.
     * If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;
    /**
     * The URL of the packaged OriginEndpoint for consumption.
     */
    Url?: string;
    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];
}
export declare namespace OriginEndpoint {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OriginEndpoint) => any;
}
/**
 * A Common Media Application Format (CMAF) packaging configuration.
 */
export interface CmafPackageCreateOrUpdateParameters {
    /**
     * A Common Media Application Format (CMAF) encryption configuration.
     */
    Encryption?: CmafEncryption;
    /**
     * A list of HLS manifest configurations
     */
    HlsManifests?: HlsManifestCreateOrUpdateParameters[];
    /**
     * Duration (in seconds) of each segment. Actual segments will be
     * rounded to the nearest multiple of the source segment duration.
     */
    SegmentDurationSeconds?: number;
    /**
     * An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
     */
    SegmentPrefix?: string;
    /**
     * A StreamSelection configuration.
     */
    StreamSelection?: StreamSelection;
}
export declare namespace CmafPackageCreateOrUpdateParameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CmafPackageCreateOrUpdateParameters) => any;
}
/**
 * the option to configure log subscription.
 */
export interface ConfigureLogsRequest {
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * The ID of the channel to log subscription.
     */
    Id: string | undefined;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
}
export declare namespace ConfigureLogsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigureLogsRequest) => any;
}
export interface ConfigureLogsResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
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
 * A new Channel configuration.
 */
export interface CreateChannelRequest {
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * The ID of the Channel. The ID must be unique within the region and it
     * cannot be changed after a Channel is created.
     */
    Id: string | undefined;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateChannelRequest) => any;
}
export interface CreateChannelResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateChannelResponse) => any;
}
/**
 * Configuration parameters used to create a new HarvestJob.
 */
export interface CreateHarvestJobRequest {
    /**
     * The end of the time-window which will be harvested
     */
    EndTime: string | undefined;
    /**
     * The ID of the HarvestJob. The ID must be unique within the region
     * and it cannot be changed after the HarvestJob is submitted
     */
    Id: string | undefined;
    /**
     * The ID of the OriginEndpoint that the HarvestJob will harvest from.
     * This cannot be changed after the HarvestJob is submitted.
     */
    OriginEndpointId: string | undefined;
    /**
     * Configuration parameters for where in an S3 bucket to place the harvested content
     */
    S3Destination: S3Destination | undefined;
    /**
     * The start of the time-window which will be harvested
     */
    StartTime: string | undefined;
}
export declare namespace CreateHarvestJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateHarvestJobRequest) => any;
}
export interface CreateHarvestJobResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the HarvestJob.
     */
    Arn?: string;
    /**
     * The ID of the Channel that the HarvestJob will harvest from.
     */
    ChannelId?: string;
    /**
     * The time the HarvestJob was submitted
     */
    CreatedAt?: string;
    /**
     * The end of the time-window which will be harvested.
     */
    EndTime?: string;
    /**
     * The ID of the HarvestJob. The ID must be unique within the region
     * and it cannot be changed after the HarvestJob is submitted.
     */
    Id?: string;
    /**
     * The ID of the OriginEndpoint that the HarvestJob will harvest from.
     * This cannot be changed after the HarvestJob is submitted.
     */
    OriginEndpointId?: string;
    /**
     * Configuration parameters for where in an S3 bucket to place the harvested content
     */
    S3Destination?: S3Destination;
    /**
     * The start of the time-window which will be harvested.
     */
    StartTime?: string;
    /**
     * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
     * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
     * include an explanation of why the HarvestJob failed.
     */
    Status?: Status | string;
}
export declare namespace CreateHarvestJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateHarvestJobResponse) => any;
}
/**
 * Configuration parameters used to create a new OriginEndpoint.
 */
export interface CreateOriginEndpointRequest {
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The ID of the Channel that the OriginEndpoint will be associated with.
     * This cannot be changed after the OriginEndpoint is created.
     */
    ChannelId: string | undefined;
    /**
     * A Common Media Application Format (CMAF) packaging configuration.
     */
    CmafPackage?: CmafPackageCreateOrUpdateParameters;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the OriginEndpoint.  The ID must be unique within the region
     * and it cannot be changed after the OriginEndpoint is created.
     */
    Id: string | undefined;
    /**
     * A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
     */
    ManifestName?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) packaging configuration.
     */
    MssPackage?: MssPackage;
    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
     * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
     * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: Origination | string;
    /**
     * Maximum duration (seconds) of content to retain for startover playback.
     * If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * Amount of delay (seconds) to enforce on the playback of live content.
     * If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;
    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];
}
export declare namespace CreateOriginEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOriginEndpointRequest) => any;
}
export interface CreateOriginEndpointResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The ID of the Channel the OriginEndpoint is associated with.
     */
    ChannelId?: string;
    /**
     * A Common Media Application Format (CMAF) packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the OriginEndpoint.
     */
    Id?: string;
    /**
     * A short string appended to the end of the OriginEndpoint URL.
     */
    ManifestName?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) packaging configuration.
     */
    MssPackage?: MssPackage;
    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
     * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
     * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: Origination | string;
    /**
     * Maximum duration (seconds) of content to retain for startover playback.
     * If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * Amount of delay (seconds) to enforce on the playback of live content.
     * If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;
    /**
     * The URL of the packaged OriginEndpoint for consumption.
     */
    Url?: string;
    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];
}
export declare namespace CreateOriginEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOriginEndpointResponse) => any;
}
export interface DeleteChannelRequest {
    /**
     * The ID of the Channel to delete.
     */
    Id: string | undefined;
}
export declare namespace DeleteChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteChannelRequest) => any;
}
export interface DeleteChannelResponse {
}
export declare namespace DeleteChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteChannelResponse) => any;
}
export interface DeleteOriginEndpointRequest {
    /**
     * The ID of the OriginEndpoint to delete.
     */
    Id: string | undefined;
}
export declare namespace DeleteOriginEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOriginEndpointRequest) => any;
}
export interface DeleteOriginEndpointResponse {
}
export declare namespace DeleteOriginEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOriginEndpointResponse) => any;
}
export interface DescribeChannelRequest {
    /**
     * The ID of a Channel.
     */
    Id: string | undefined;
}
export declare namespace DescribeChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeChannelRequest) => any;
}
export interface DescribeChannelResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeChannelResponse) => any;
}
export interface DescribeHarvestJobRequest {
    /**
     * The ID of the HarvestJob.
     */
    Id: string | undefined;
}
export declare namespace DescribeHarvestJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHarvestJobRequest) => any;
}
export interface DescribeHarvestJobResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the HarvestJob.
     */
    Arn?: string;
    /**
     * The ID of the Channel that the HarvestJob will harvest from.
     */
    ChannelId?: string;
    /**
     * The time the HarvestJob was submitted
     */
    CreatedAt?: string;
    /**
     * The end of the time-window which will be harvested.
     */
    EndTime?: string;
    /**
     * The ID of the HarvestJob. The ID must be unique within the region
     * and it cannot be changed after the HarvestJob is submitted.
     */
    Id?: string;
    /**
     * The ID of the OriginEndpoint that the HarvestJob will harvest from.
     * This cannot be changed after the HarvestJob is submitted.
     */
    OriginEndpointId?: string;
    /**
     * Configuration parameters for where in an S3 bucket to place the harvested content
     */
    S3Destination?: S3Destination;
    /**
     * The start of the time-window which will be harvested.
     */
    StartTime?: string;
    /**
     * The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for
     * HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will
     * include an explanation of why the HarvestJob failed.
     */
    Status?: Status | string;
}
export declare namespace DescribeHarvestJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeHarvestJobResponse) => any;
}
export interface DescribeOriginEndpointRequest {
    /**
     * The ID of the OriginEndpoint.
     */
    Id: string | undefined;
}
export declare namespace DescribeOriginEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOriginEndpointRequest) => any;
}
export interface DescribeOriginEndpointResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The ID of the Channel the OriginEndpoint is associated with.
     */
    ChannelId?: string;
    /**
     * A Common Media Application Format (CMAF) packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the OriginEndpoint.
     */
    Id?: string;
    /**
     * A short string appended to the end of the OriginEndpoint URL.
     */
    ManifestName?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) packaging configuration.
     */
    MssPackage?: MssPackage;
    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
     * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
     * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: Origination | string;
    /**
     * Maximum duration (seconds) of content to retain for startover playback.
     * If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * Amount of delay (seconds) to enforce on the playback of live content.
     * If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;
    /**
     * The URL of the packaged OriginEndpoint for consumption.
     */
    Url?: string;
    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];
}
export declare namespace DescribeOriginEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOriginEndpointResponse) => any;
}
export interface ListChannelsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: number;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: string;
}
export declare namespace ListChannelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListChannelsRequest) => any;
}
export interface ListChannelsResponse {
    /**
     * A list of Channel records.
     */
    Channels?: Channel[];
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: string;
}
export declare namespace ListChannelsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListChannelsResponse) => any;
}
export interface ListHarvestJobsRequest {
    /**
     * When specified, the request will return only HarvestJobs associated with the given Channel ID.
     */
    IncludeChannelId?: string;
    /**
     * When specified, the request will return only HarvestJobs in the given status.
     */
    IncludeStatus?: string;
    /**
     * The upper bound on the number of records to return.
     */
    MaxResults?: number;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: string;
}
export declare namespace ListHarvestJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListHarvestJobsRequest) => any;
}
export interface ListHarvestJobsResponse {
    /**
     * A list of HarvestJob records.
     */
    HarvestJobs?: HarvestJob[];
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: string;
}
export declare namespace ListHarvestJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListHarvestJobsResponse) => any;
}
export interface ListOriginEndpointsRequest {
    /**
     * When specified, the request will return only OriginEndpoints associated with the given Channel ID.
     */
    ChannelId?: string;
    /**
     * The upper bound on the number of records to return.
     */
    MaxResults?: number;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: string;
}
export declare namespace ListOriginEndpointsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOriginEndpointsRequest) => any;
}
export interface ListOriginEndpointsResponse {
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: string;
    /**
     * A list of OriginEndpoint records.
     */
    OriginEndpoints?: OriginEndpoint[];
}
export declare namespace ListOriginEndpointsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOriginEndpointsResponse) => any;
}
export interface ListTagsForResourceRequest {
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
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
export interface RotateChannelCredentialsRequest {
    /**
     * The ID of the channel to update.
     */
    Id: string | undefined;
}
export declare namespace RotateChannelCredentialsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RotateChannelCredentialsRequest) => any;
}
export interface RotateChannelCredentialsResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace RotateChannelCredentialsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RotateChannelCredentialsResponse) => any;
}
export interface RotateIngestEndpointCredentialsRequest {
    /**
     * The ID of the channel the IngestEndpoint is on.
     */
    Id: string | undefined;
    /**
     * The id of the IngestEndpoint whose credentials should be rotated
     */
    IngestEndpointId: string | undefined;
}
export declare namespace RotateIngestEndpointCredentialsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RotateIngestEndpointCredentialsRequest) => any;
}
export interface RotateIngestEndpointCredentialsResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace RotateIngestEndpointCredentialsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RotateIngestEndpointCredentialsResponse) => any;
}
export interface TagResourceRequest {
    ResourceArn: string | undefined;
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
    ResourceArn: string | undefined;
    /**
     * The key(s) of tag to be deleted
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
 * Configuration parameters used to update the Channel.
 */
export interface UpdateChannelRequest {
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * The ID of the Channel to update.
     */
    Id: string | undefined;
}
export declare namespace UpdateChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateChannelRequest) => any;
}
export interface UpdateChannelResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     */
    Arn?: string;
    /**
     * A short text description of the Channel.
     */
    Description?: string;
    /**
     * Configure egress access logging.
     */
    EgressAccessLogs?: EgressAccessLogs;
    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngest;
    /**
     * The ID of the Channel.
     */
    Id?: string;
    /**
     * Configure ingress access logging.
     */
    IngressAccessLogs?: IngressAccessLogs;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace UpdateChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateChannelResponse) => any;
}
/**
 * Configuration parameters used to update an existing OriginEndpoint.
 */
export interface UpdateOriginEndpointRequest {
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * A Common Media Application Format (CMAF) packaging configuration.
     */
    CmafPackage?: CmafPackageCreateOrUpdateParameters;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the OriginEndpoint to update.
     */
    Id: string | undefined;
    /**
     * A short string that will be appended to the end of the Endpoint URL.
     */
    ManifestName?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) packaging configuration.
     */
    MssPackage?: MssPackage;
    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
     * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
     * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: Origination | string;
    /**
     * Maximum duration (in seconds) of content to retain for startover playback.
     * If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;
    /**
     * Amount of delay (in seconds) to enforce on the playback of live content.
     * If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;
    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];
}
export declare namespace UpdateOriginEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateOriginEndpointRequest) => any;
}
export interface UpdateOriginEndpointResponse {
    /**
     * The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
     */
    Arn?: string;
    /**
     * CDN Authorization credentials
     */
    Authorization?: Authorization;
    /**
     * The ID of the Channel the OriginEndpoint is associated with.
     */
    ChannelId?: string;
    /**
     * A Common Media Application Format (CMAF) packaging configuration.
     */
    CmafPackage?: CmafPackage;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    DashPackage?: DashPackage;
    /**
     * A short text description of the OriginEndpoint.
     */
    Description?: string;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    HlsPackage?: HlsPackage;
    /**
     * The ID of the OriginEndpoint.
     */
    Id?: string;
    /**
     * A short string appended to the end of the OriginEndpoint URL.
     */
    ManifestName?: string;
    /**
     * A Microsoft Smooth Streaming (MSS) packaging configuration.
     */
    MssPackage?: MssPackage;
    /**
     * Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
     * may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be
     * requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
     */
    Origination?: Origination | string;
    /**
     * Maximum duration (seconds) of content to retain for startover playback.
     * If not specified, startover playback will be disabled for the OriginEndpoint.
     */
    StartoverWindowSeconds?: number;
    /**
     * A collection of tags associated with a resource
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * Amount of delay (seconds) to enforce on the playback of live content.
     * If not specified, there will be no time delay in effect for the OriginEndpoint.
     */
    TimeDelaySeconds?: number;
    /**
     * The URL of the packaged OriginEndpoint for consumption.
     */
    Url?: string;
    /**
     * A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
     */
    Whitelist?: string[];
}
export declare namespace UpdateOriginEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateOriginEndpointResponse) => any;
}
