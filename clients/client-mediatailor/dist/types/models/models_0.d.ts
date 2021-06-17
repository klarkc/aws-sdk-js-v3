import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum MessageType {
    SPLICE_INSERT = "SPLICE_INSERT"
}
/**
 * <p>Slate VOD source configuration.</p>
 */
export interface SlateSource {
    /**
     * <p>The name of the source location where the slate VOD source is stored.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>
     */
    VodSourceName?: string;
}
export declare namespace SlateSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SlateSource) => any;
}
/**
 * <p>Splice insert message configuration.</p>
 */
export interface SpliceInsertMessage {
    /**
     * <p>This is written to splice_insert.avail_num, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 0. Values must be between 0 and 256, inclusive.</p>
     */
    AvailNum?: number;
    /**
     * <p>This is written to splice_insert.avails_expected, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 0. Values must be between 0 and 256, inclusive.</p>
     */
    AvailsExpected?: number;
    /**
     * <p>This is written to splice_insert.splice_event_id, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 1.</p>
     */
    SpliceEventId?: number;
    /**
     * <p>This is written to splice_insert.unique_program_id, as defined in section 9.7.3.1 of the SCTE-35 specification. The default value is 0. Values must be between 0 and 256, inclusive.</p>
     */
    UniqueProgramId?: number;
}
export declare namespace SpliceInsertMessage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SpliceInsertMessage) => any;
}
/**
 * <p>Ad break configuration parameters.</p>
 */
export interface AdBreak {
    /**
     * <p>The SCTE-35 ad insertion type. Accepted value: SPLICE_INSERT.</p>
     */
    MessageType?: MessageType | string;
    /**
     * <p>How long (in milliseconds) after the beginning of the program that an ad starts. This value must fall within 100ms of a segment boundary, otherwise the ad break will be skipped.</p>
     */
    OffsetMillis?: number;
    /**
     * <p>Ad break slate configuration.</p>
     */
    Slate?: SlateSource;
    /**
     * <p>This defines the SCTE-35 splice_insert() message inserted around the ad. For information about using splice_insert(), see the SCTE-35 specficiaiton, section 9.7.3.1.</p>
     */
    SpliceInsertMessage?: SpliceInsertMessage;
}
export declare namespace AdBreak {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdBreak) => any;
}
/**
 * <p>Dash manifest configuration parameters.</p>
 */
export interface DashPlaylistSettings {
    /**
     * <p>The total duration (in seconds) of each manifest. Minimum value: 30 seconds. Maximum value: 3600 seconds.</p>
     */
    ManifestWindowSeconds?: number;
    /**
     * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: 2 seconds. Maximum value: 60 seconds.</p>
     */
    MinBufferTimeSeconds?: number;
    /**
     * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: 2 seconds. Maximum value: 60 seconds.</p>
     */
    MinUpdatePeriodSeconds?: number;
    /**
     * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: 2 seconds. Maximum value: 60 seconds.</p>
     */
    SuggestedPresentationDelaySeconds?: number;
}
export declare namespace DashPlaylistSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DashPlaylistSettings) => any;
}
/**
 * <p>HLS playlist configuration parameters.</p>
 */
export interface HlsPlaylistSettings {
    /**
     * <p>The total duration (in seconds) of each manifest. Minimum value: 30 seconds. Maximum value: 3600 seconds.</p>
     */
    ManifestWindowSeconds?: number;
}
export declare namespace HlsPlaylistSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsPlaylistSettings) => any;
}
/**
 * <p>This response includes only the "property" : "type" property.</p>
 */
export interface ResponseOutputItem {
    /**
     * <p>DASH manifest configuration settings.</p>
     */
    DashPlaylistSettings?: DashPlaylistSettings;
    /**
     * <p>HLS manifest configuration settings.</p>
     */
    HlsPlaylistSettings?: HlsPlaylistSettings;
    /**
     * <p>The name of the manifest for the channel that will appear in the channel output's playback URL.</p>
     */
    ManifestName: string | undefined;
    /**
     * <p>The URL used for playback by content players.</p>
     */
    PlaybackUrl: string | undefined;
    /**
     * <p>A string used to associate a package configuration source group with a channel output.</p>
     */
    SourceGroup: string | undefined;
}
export declare namespace ResponseOutputItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResponseOutputItem) => any;
}
/**
 * <p>The configuration parameters for a channel.</p>
 */
export interface Channel {
    /**
     * <p>The ARN of the channel.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The name of the channel.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>Returns the state whether the channel is running or not.</p>
     */
    ChannelState: string | undefined;
    /**
     * <p>The timestamp of when the channel was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The timestamp of when the channel was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The channel's output properties.</p>
     */
    Outputs: ResponseOutputItem[] | undefined;
    /**
     * <p>The type of playback mode for this channel. Possible values: ONCE or LOOP.</p>
     */
    PlaybackMode: string | undefined;
    /**
     * <p>The tags to assign to the channel.</p>
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
export declare enum Mode {
    BEHIND_LIVE_EDGE = "BEHIND_LIVE_EDGE",
    OFF = "OFF"
}
/**
 * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
 */
export interface AvailSuppression {
    /**
     * <p>Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to BEHIND_LIVE_EDGE, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window.</p>
     */
    Mode?: Mode | string;
    /**
     * <p>A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.</p>
     */
    Value?: string;
}
export declare namespace AvailSuppression {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AvailSuppression) => any;
}
/**
 * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
 */
export interface Bumper {
    /**
     * <p>The URL for the end bumper asset.</p>
     */
    EndUrl?: string;
    /**
     * <p>The URL for the start bumper asset.</p>
     */
    StartUrl?: string;
}
export declare namespace Bumper {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Bumper) => any;
}
/**
 * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
 */
export interface CdnConfiguration {
    /**
     * <p>A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.&amp;lt;region&gt;.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.</p>
     */
    AdSegmentUrlPrefix?: string;
    /**
     * <p>A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.</p>
     */
    ContentSegmentUrlPrefix?: string;
}
export declare namespace CdnConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CdnConfiguration) => any;
}
export declare enum OriginManifestType {
    MULTI_PERIOD = "MULTI_PERIOD",
    SINGLE_PERIOD = "SINGLE_PERIOD"
}
/**
 * <p>The configuration for DASH content.</p>
 */
export interface DashConfiguration {
    /**
     * <p>The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations.</p>
     */
    ManifestEndpointPrefix?: string;
    /**
     * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value.</p>
     */
    MpdLocation?: string;
    /**
     * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD.</p>
     */
    OriginManifestType?: OriginManifestType | string;
}
export declare namespace DashConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DashConfiguration) => any;
}
/**
 * <p>The configuration for HLS content.</p>
 */
export interface HlsConfiguration {
    /**
     * <p>The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.</p>
     */
    ManifestEndpointPrefix?: string;
}
export declare namespace HlsConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HlsConfiguration) => any;
}
/**
 * <p>The configuration for pre-roll ad insertion.</p>
 */
export interface LivePreRollConfiguration {
    /**
     * <p>The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
     */
    AdDecisionServerUrl?: string;
    /**
     * The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.
     */
    MaxDurationSeconds?: number;
}
export declare namespace LivePreRollConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LivePreRollConfiguration) => any;
}
/**
 * <p>For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.</p>
 */
export interface AdMarkerPassthrough {
    /**
     * <p>Enables ad marker passthrough for your configuration.</p>
     */
    Enabled?: boolean;
}
export declare namespace AdMarkerPassthrough {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdMarkerPassthrough) => any;
}
/**
 * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
 */
export interface ManifestProcessingRules {
    /**
     * <p>For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest.</p> <p>No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.</p>
     */
    AdMarkerPassthrough?: AdMarkerPassthrough;
}
export declare namespace ManifestProcessingRules {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ManifestProcessingRules) => any;
}
/**
 * <p>Creates a playback configuration. For information about MediaTailor configurations, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/configurations.html">Working with configurations in AWS Elemental MediaTailor</a>.</p>
 */
export interface PlaybackConfiguration {
    /**
     * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
     */
    AdDecisionServerUrl?: string;
    /**
     * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
     */
    AvailSuppression?: AvailSuppression;
    /**
     * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
     */
    Bumper?: Bumper;
    /**
     * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
     */
    ConfigurationAliases?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * <p>The configuration for a DASH source.</p>
     */
    DashConfiguration?: DashConfiguration;
    /**
     * <p>The configuration for HLS content.</p>
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * <p>The configuration for pre-roll ad insertion.</p>
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
     */
    ManifestProcessingRules?: ManifestProcessingRules;
    /**
     * <p>The identifier for the playback configuration.</p>
     */
    Name?: string;
    /**
     * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
     */
    PersonalizationThresholdSeconds?: number;
    /**
     * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
     */
    PlaybackConfigurationArn?: string;
    /**
     * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor.</p>
     */
    PlaybackEndpointPrefix?: string;
    /**
     * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
     */
    SessionInitializationEndpointPrefix?: string;
    /**
     * <p>The URL for a video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
     */
    SlateAdUrl?: string;
    /**
     * <p>The tags to assign to the playback configuration.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
     */
    TranscodeProfileName?: string;
    /**
     * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
     */
    VideoContentSourceUrl?: string;
}
export declare namespace PlaybackConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PlaybackConfiguration) => any;
}
/**
 * <p>The properties for a schedule.</p>
 */
export interface ScheduleEntry {
    /**
     * <p>The approximate duration of this program, in seconds.</p>
     */
    ApproximateDurationSeconds?: number;
    /**
     * <p>The approximate time that the program will start playing.</p>
     */
    ApproximateStartTime?: Date;
    /**
     * <p>The ARN of the program.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The name of the channel that uses this schedule.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The name of the program.</p>
     */
    ProgramName: string | undefined;
    /**
     * <p>The name of the source location.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The name of the VOD source.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace ScheduleEntry {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScheduleEntry) => any;
}
export declare enum AccessType {
    S3_SIGV4 = "S3_SIGV4"
}
/**
 * <p>Access configuration parameters.</p>
 */
export interface AccessConfiguration {
    /**
     * <p>The type of authentication used to access content from HttpConfiguration::BaseUrl on your source location. Accepted value: S3_SIGV4.</p> <p>S3_SIGV4 - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.</p> <p>Before you can use S3_SIGV4, you must meet these requirements:</p> <p>• You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.</p> <p>• The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.</p> <p>• The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.</p>
     */
    AccessType?: AccessType | string;
}
export declare namespace AccessConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessConfiguration) => any;
}
/**
 * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
 */
export interface DefaultSegmentDeliveryConfiguration {
    /**
     * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
     */
    BaseUrl?: string;
}
export declare namespace DefaultSegmentDeliveryConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultSegmentDeliveryConfiguration) => any;
}
/**
 * <p>The HTTP configuration for the source location.</p>
 */
export interface HttpConfiguration {
    /**
     * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
     */
    BaseUrl: string | undefined;
}
export declare namespace HttpConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HttpConfiguration) => any;
}
/**
 * <p>This response includes only the "type" : "object" property.</p>
 */
export interface SourceLocation {
    /**
     * <p>The access configuration for the source location.</p>
     */
    AccessConfiguration?: AccessConfiguration;
    /**
     * <p>The ARN of the SourceLocation.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The timestamp that indicates when the source location was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The default segment delivery configuration.</p>
     */
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    /**
     * <p>The HTTP configuration for the source location.</p>
     */
    HttpConfiguration: HttpConfiguration | undefined;
    /**
     * <p>The timestamp that indicates when the source location was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The tags assigned to the source location.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace SourceLocation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SourceLocation) => any;
}
export declare enum Type {
    DASH = "DASH",
    HLS = "HLS"
}
/**
 * <p>The HTTP package configuration properties for the requested VOD source.</p>
 */
export interface HttpPackageConfiguration {
    /**
     * <p>The relative path to the URL for this VOD source. This is combined with SourceLocation::HttpConfiguration::BaseUrl to form a valid URL.</p>
     */
    Path: string | undefined;
    /**
     * <p>The name of the source group. This has to match one of the Channel::Outputs::SourceGroup.</p>
     */
    SourceGroup: string | undefined;
    /**
     * <p>The streaming protocol for this package configuration. Supported values are HLS and DASH.</p>
     */
    Type: Type | string | undefined;
}
export declare namespace HttpPackageConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HttpPackageConfiguration) => any;
}
/**
 * <p>VOD source configuration parameters.</p>
 */
export interface VodSource {
    /**
     * <p>The ARN for the VOD source.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The timestamp that indicates when the VOD source was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The HTTP package configurations for the VOD source.</p>
     */
    HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;
    /**
     * <p>The timestamp that indicates when the VOD source was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location that the VOD source is associated with.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The tags assigned to the VOD source.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the VOD source.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace VodSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VodSource) => any;
}
/**
 * Invalid request parameters.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    Message?: string;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
export declare enum ChannelState {
    RUNNING = "RUNNING",
    STOPPED = "STOPPED"
}
/**
 * <p>The ouput configuration for this channel.</p>
 */
export interface RequestOutputItem {
    /**
     * <p>DASH manifest configuration parameters.</p>
     */
    DashPlaylistSettings?: DashPlaylistSettings;
    /**
     * <p>HLS playlist configuration parameters.</p>
     */
    HlsPlaylistSettings?: HlsPlaylistSettings;
    /**
     * <p>The name of the manifest for the channel. The name appears in the PlaybackUrl.</p>
     */
    ManifestName: string | undefined;
    /**
     * <p>A string used to match which HttpPackageConfiguration is used for each VodSource.</p>
     */
    SourceGroup: string | undefined;
}
export declare namespace RequestOutputItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RequestOutputItem) => any;
}
export declare enum PlaybackMode {
    LOOP = "LOOP"
}
export interface CreateChannelRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The channel's output properties.</p>
     */
    Outputs: RequestOutputItem[] | undefined;
    /**
     * <p>The type of playback mode for this channel. The only supported value is LOOP.</p>
     */
    PlaybackMode: PlaybackMode | string | undefined;
    /**
     * <p>The tags to assign to the channel.</p>
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
     * <p>The ARN of the channel.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the channel.</p>
     */
    ChannelName?: string;
    /**
     * <p>Indicates whether the channel is in a running state or not.</p>
     */
    ChannelState?: ChannelState | string;
    /**
     * <p>The timestamp of when the channel was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The timestamp of when the channel was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The channel's output properties.</p>
     */
    Outputs?: ResponseOutputItem[];
    /**
     * <p>The type of playback for this channel. The only supported value is LOOP.</p>
     */
    PlaybackMode?: string;
    /**
     * <p>The tags assigned to the channel.</p>
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
export declare enum RelativePosition {
    AFTER_PROGRAM = "AFTER_PROGRAM",
    BEFORE_PROGRAM = "BEFORE_PROGRAM"
}
/**
 * <p>Program transition configuration.</p>
 */
export interface Transition {
    /**
     * <p>The position where this program will be inserted relative to the RelativeProgram. Possible values are: AFTER_PROGRAM, and BEFORE_PROGRAM.</p>
     */
    RelativePosition: RelativePosition | string | undefined;
    /**
     * <p>The name of the program that this program will be inserted next to, as defined by RelativePosition.</p>
     */
    RelativeProgram?: string;
    /**
     * <p>When the program should be played. RELATIVE means that programs will be played back-to-back.</p>
     */
    Type: string | undefined;
}
export declare namespace Transition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Transition) => any;
}
/**
 * <p>Schedule configuration parameters. A channel must be stopped before changes can be made to the schedule.</p>
 */
export interface ScheduleConfiguration {
    /**
     * <p>Program transition configurations.</p>
     */
    Transition: Transition | undefined;
}
export declare namespace ScheduleConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScheduleConfiguration) => any;
}
export interface CreateProgramRequest {
    /**
     * <p>The ad break configuration settings.</p>
     */
    AdBreaks?: AdBreak[];
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The identifier for the program you are working on.</p>
     */
    ProgramName: string | undefined;
    /**
     * <p>The schedule configuration settings.</p>
     */
    ScheduleConfiguration: ScheduleConfiguration | undefined;
    /**
     * <p>The name of the source location.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The name that's used to refer to a VOD source.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace CreateProgramRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProgramRequest) => any;
}
export interface CreateProgramResponse {
    /**
     * <p>The ad break configuration settings.</p>
     */
    AdBreaks?: AdBreak[];
    /**
     * <p>The ARN of the program.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the channel that the program belongs to.</p>
     */
    ChannelName?: string;
    /**
     * <p>The timestamp of when the program was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The name of the program.</p>
     */
    ProgramName?: string;
    /**
     * <p>The source location name.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The name that's used to refer to a VOD source.</p>
     */
    VodSourceName?: string;
}
export declare namespace CreateProgramResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProgramResponse) => any;
}
export interface CreateSourceLocationRequest {
    /**
     * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
     */
    AccessConfiguration?: AccessConfiguration;
    /**
     * <p>The optional configuration for the server that serves segments.</p>
     */
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    /**
     * <p>The source's HTTP package configurations.</p>
     */
    HttpConfiguration: HttpConfiguration | undefined;
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The tags to assign to the source location.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateSourceLocationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSourceLocationRequest) => any;
}
export interface CreateSourceLocationResponse {
    /**
     * <p>The access configuration for the source location.</p>
     */
    AccessConfiguration?: AccessConfiguration;
    /**
     * <p>The ARN of the source location.</p>
     */
    Arn?: string;
    /**
     * <p>The timestamp that indicates when the source location was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The default segment delivery configuration settings.</p>
     */
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    /**
     * <p>The HTTP package configuration settings for the source location.</p>
     */
    HttpConfiguration?: HttpConfiguration;
    /**
     * <p>The timestamp that indicates when the source location was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The tags assigned to the source location.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateSourceLocationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSourceLocationResponse) => any;
}
export interface CreateVodSourceRequest {
    /**
     * <p>An array of HTTP package configuration parameters for this VOD source.</p>
     */
    HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The tags to assign to the VOD source.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The identifier for the VOD source you are working on.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace CreateVodSourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateVodSourceRequest) => any;
}
export interface CreateVodSourceResponse {
    /**
     * <p>The ARN of the VOD source.</p>
     */
    Arn?: string;
    /**
     * <p>The timestamp that indicates when the VOD source was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The HTTP package configurations.</p>
     */
    HttpPackageConfigurations?: HttpPackageConfiguration[];
    /**
     * <p>The ARN for the VOD source.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location associated with the VOD source.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The tags assigned to the VOD source.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the VOD source.</p>
     */
    VodSourceName?: string;
}
export declare namespace CreateVodSourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateVodSourceResponse) => any;
}
/**
 * <p>The configuration for DASH PUT operations.</p>
 */
export interface DashConfigurationForPut {
    /**
     * <p>The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value.</p>
     */
    MpdLocation?: string;
    /**
     * <p>The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD.</p>
     */
    OriginManifestType?: OriginManifestType | string;
}
export declare namespace DashConfigurationForPut {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DashConfigurationForPut) => any;
}
export interface DeleteChannelRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
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
export interface DeleteChannelPolicyRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
}
export declare namespace DeleteChannelPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteChannelPolicyRequest) => any;
}
export interface DeleteChannelPolicyResponse {
}
export declare namespace DeleteChannelPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteChannelPolicyResponse) => any;
}
export interface DeletePlaybackConfigurationRequest {
    /**
     * <p>The identifier for the playback configuration.</p>
     */
    Name: string | undefined;
}
export declare namespace DeletePlaybackConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlaybackConfigurationRequest) => any;
}
export interface DeletePlaybackConfigurationResponse {
}
export declare namespace DeletePlaybackConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePlaybackConfigurationResponse) => any;
}
export interface DeleteProgramRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The identifier for the program you are working on.</p>
     */
    ProgramName: string | undefined;
}
export declare namespace DeleteProgramRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProgramRequest) => any;
}
export interface DeleteProgramResponse {
}
export declare namespace DeleteProgramResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProgramResponse) => any;
}
export interface DeleteSourceLocationRequest {
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
}
export declare namespace DeleteSourceLocationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSourceLocationRequest) => any;
}
export interface DeleteSourceLocationResponse {
}
export declare namespace DeleteSourceLocationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSourceLocationResponse) => any;
}
export interface DeleteVodSourceRequest {
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The identifier for the VOD source you are working on.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace DeleteVodSourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVodSourceRequest) => any;
}
export interface DeleteVodSourceResponse {
}
export declare namespace DeleteVodSourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteVodSourceResponse) => any;
}
export interface DescribeChannelRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
}
export declare namespace DescribeChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeChannelRequest) => any;
}
export interface DescribeChannelResponse {
    /**
     * <p>The ARN of the channel.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the channel.</p>
     */
    ChannelName?: string;
    /**
     * <p>Indicates whether the channel is in a running state or not.</p>
     */
    ChannelState?: ChannelState | string;
    /**
     * <p>The timestamp of when the channel was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The timestamp of when the channel was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The channel's output properties.</p>
     */
    Outputs?: ResponseOutputItem[];
    /**
     * <p>The type of playback for this channel. The only supported value is LOOP.</p>
     */
    PlaybackMode?: string;
    /**
     * <p>The tags assigned to the channel.</p>
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
export interface DescribeProgramRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The identifier for the program you are working on.</p>
     */
    ProgramName: string | undefined;
}
export declare namespace DescribeProgramRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProgramRequest) => any;
}
export interface DescribeProgramResponse {
    /**
     * <p>The ad break configuration settings.</p>
     */
    AdBreaks?: AdBreak[];
    /**
     * <p>The ARN of the program.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the channel that the program belongs to.</p>
     */
    ChannelName?: string;
    /**
     * <p>The timestamp of when the program was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The name of the program.</p>
     */
    ProgramName?: string;
    /**
     * <p>The source location name.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The name that's used to refer to a VOD source.</p>
     */
    VodSourceName?: string;
}
export declare namespace DescribeProgramResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProgramResponse) => any;
}
export interface DescribeSourceLocationRequest {
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
}
export declare namespace DescribeSourceLocationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSourceLocationRequest) => any;
}
export interface DescribeSourceLocationResponse {
    /**
     * <p>The access configuration for the source location.</p>
     */
    AccessConfiguration?: AccessConfiguration;
    /**
     * <p>The ARN of the source location.</p>
     */
    Arn?: string;
    /**
     * <p>The timestamp that indicates when the source location was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The default segment delivery configuration settings.</p>
     */
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    /**
     * <p>The HTTP package configuration settings for the source location.</p>
     */
    HttpConfiguration?: HttpConfiguration;
    /**
     * <p>The timestamp that indicates when the source location was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The tags assigned to the source location.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeSourceLocationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSourceLocationResponse) => any;
}
export interface DescribeVodSourceRequest {
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The identifier for the VOD source you are working on.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace DescribeVodSourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeVodSourceRequest) => any;
}
export interface DescribeVodSourceResponse {
    /**
     * <p>The ARN of the VOD source.</p>
     */
    Arn?: string;
    /**
     * <p>The timestamp that indicates when the VOD source was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The HTTP package configurations.</p>
     */
    HttpPackageConfigurations?: HttpPackageConfiguration[];
    /**
     * <p>The ARN for the VOD source.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location associated with the VOD source.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The tags assigned to the VOD source.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the VOD source.</p>
     */
    VodSourceName?: string;
}
export declare namespace DescribeVodSourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeVodSourceResponse) => any;
}
export interface GetChannelPolicyRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
}
export declare namespace GetChannelPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetChannelPolicyRequest) => any;
}
export interface GetChannelPolicyResponse {
    /**
     * <p>The IAM policy for the channel.</p>
     */
    Policy?: string;
}
export declare namespace GetChannelPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetChannelPolicyResponse) => any;
}
export interface GetChannelScheduleRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The schedule duration in minutes. The maximum duration is 4320 minutes (three days).</p>
     */
    DurationMinutes?: string;
    /**
     * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetChannelScheduleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetChannelScheduleRequest) => any;
}
export interface GetChannelScheduleResponse {
    /**
     * <p>An array of schedule entries for the channel.</p>
     */
    Items?: ScheduleEntry[];
    /**
     * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace GetChannelScheduleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetChannelScheduleResponse) => any;
}
export interface GetPlaybackConfigurationRequest {
    /**
     * <p>The identifier for the playback configuration.</p>
     */
    Name: string | undefined;
}
export declare namespace GetPlaybackConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPlaybackConfigurationRequest) => any;
}
export interface GetPlaybackConfigurationResponse {
    /**
     * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
     */
    AdDecisionServerUrl?: string;
    /**
     * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
     */
    AvailSuppression?: AvailSuppression;
    /**
     * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
     */
    Bumper?: Bumper;
    /**
     * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
     */
    ConfigurationAliases?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * <p>The configuration for DASH content.</p>
     */
    DashConfiguration?: DashConfiguration;
    /**
     * <p>The configuration for HLS content.</p>
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * <p>The configuration for pre-roll ad insertion.</p>
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
     */
    ManifestProcessingRules?: ManifestProcessingRules;
    /**
     * <p>The identifier for the playback configuration.</p>
     */
    Name?: string;
    /**
     * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
     */
    PersonalizationThresholdSeconds?: number;
    /**
     * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
     */
    PlaybackConfigurationArn?: string;
    /**
     * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting.</p>
     */
    PlaybackEndpointPrefix?: string;
    /**
     * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
     */
    SessionInitializationEndpointPrefix?: string;
    /**
     * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
     */
    SlateAdUrl?: string;
    /**
     * <p>The tags assigned to the playback configuration.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
     */
    TranscodeProfileName?: string;
    /**
     * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
     */
    VideoContentSourceUrl?: string;
}
export declare namespace GetPlaybackConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPlaybackConfigurationResponse) => any;
}
export interface ListChannelsRequest {
    /**
     * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
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
     * <p>An array of channels that are associated with this account.</p>
     */
    Items?: Channel[];
    /**
     * <p>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListChannelsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListChannelsResponse) => any;
}
export interface ListPlaybackConfigurationsRequest {
    /**
     * <p>Maximum number of records to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListPlaybackConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlaybackConfigurationsRequest) => any;
}
export interface ListPlaybackConfigurationsResponse {
    /**
     * <p>Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored.</p>
     */
    Items?: PlaybackConfiguration[];
    /**
     * <p>Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListPlaybackConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPlaybackConfigurationsResponse) => any;
}
export interface ListSourceLocationsRequest {
    /**
     * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListSourceLocationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSourceLocationsRequest) => any;
}
export interface ListSourceLocationsResponse {
    /**
     * <p>An array of source locations.</p>
     */
    Items?: SourceLocation[];
    /**
     * <p>Pagination token from the list request. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListSourceLocationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSourceLocationsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request.</p>
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
     * <p>A comma-separated list of tag key:value pairs.</p>
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
export interface ListVodSourcesRequest {
    /**
     * <p>Upper bound on number of records to return. The maximum number of results is 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>Pagination token from the GET list request. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
}
export declare namespace ListVodSourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListVodSourcesRequest) => any;
}
export interface ListVodSourcesResponse {
    /**
     * <p>Lists the VOD sources.</p>
     */
    Items?: VodSource[];
    /**
     * <p>Pagination token from the list request. Use the token to fetch the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListVodSourcesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListVodSourcesResponse) => any;
}
export interface PutChannelPolicyRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>Adds an IAM role that determines the permissions of your channel.</p>
     */
    Policy: string | undefined;
}
export declare namespace PutChannelPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutChannelPolicyRequest) => any;
}
export interface PutChannelPolicyResponse {
}
export declare namespace PutChannelPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutChannelPolicyResponse) => any;
}
export interface PutPlaybackConfigurationRequest {
    /**
     * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
     */
    AdDecisionServerUrl?: string;
    /**
     * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
     */
    AvailSuppression?: AvailSuppression;
    /**
     * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
     */
    Bumper?: Bumper;
    /**
     * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
     */
    ConfigurationAliases?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * <p>The configuration for DASH content.</p>
     */
    DashConfiguration?: DashConfigurationForPut;
    /**
     * <p>The configuration for pre-roll ad insertion.</p>
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
     */
    ManifestProcessingRules?: ManifestProcessingRules;
    /**
     * <p>The identifier for the playback configuration.</p>
     */
    Name?: string;
    /**
     * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
     */
    PersonalizationThresholdSeconds?: number;
    /**
     * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
     */
    SlateAdUrl?: string;
    /**
     * <p>The tags to assign to the playback configuration.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
     */
    TranscodeProfileName?: string;
    /**
     * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
     */
    VideoContentSourceUrl?: string;
}
export declare namespace PutPlaybackConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutPlaybackConfigurationRequest) => any;
}
export interface PutPlaybackConfigurationResponse {
    /**
     * <p>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</p>
     */
    AdDecisionServerUrl?: string;
    /**
     * <p>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Suppression</a>.</p>
     */
    AvailSuppression?: AvailSuppression;
    /**
     * <p>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html">Bumpers</a>.</p>
     */
    Bumper?: Bumper;
    /**
     * <p>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</p>
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * <p>The player parameters and aliases used as dynamic variables during session initialization. For more information, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html">Domain Variables</a>.</p>
     */
    ConfigurationAliases?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * <p>The configuration for DASH content.</p>
     */
    DashConfiguration?: DashConfiguration;
    /**
     * <p>The configuration for HLS content.</p>
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * <p>The configuration for pre-roll ad insertion.</p>
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * <p>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</p>
     */
    ManifestProcessingRules?: ManifestProcessingRules;
    /**
     * <p>The identifier for the playback configuration.</p>
     */
    Name?: string;
    /**
     * <p>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to <i>ad replacement</i> in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html">Ad Behavior in AWS Elemental MediaTailor</a>.</p>
     */
    PersonalizationThresholdSeconds?: number;
    /**
     * <p>The Amazon Resource Name (ARN) for the playback configuration.</p>
     */
    PlaybackConfigurationArn?: string;
    /**
     * <p>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting.</p>
     */
    PlaybackEndpointPrefix?: string;
    /**
     * <p>The URL that the player uses to initialize a session that uses client-side reporting.</p>
     */
    SessionInitializationEndpointPrefix?: string;
    /**
     * <p>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</p>
     */
    SlateAdUrl?: string;
    /**
     * <p>The tags assigned to the playback configuration.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</p>
     */
    TranscodeProfileName?: string;
    /**
     * <p>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</p>
     */
    VideoContentSourceUrl?: string;
}
export declare namespace PutPlaybackConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutPlaybackConfigurationResponse) => any;
}
export interface StartChannelRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
}
export declare namespace StartChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartChannelRequest) => any;
}
export interface StartChannelResponse {
}
export declare namespace StartChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartChannelResponse) => any;
}
export interface StopChannelRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
}
export declare namespace StopChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopChannelRequest) => any;
}
export interface StopChannelResponse {
}
export declare namespace StopChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopChannelResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>A comma-separated list of tag key:value pairs.</p>
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
     * <p>The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>A comma-separated list of the tag keys to remove from the playback configuration.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateChannelRequest {
    /**
     * <p>The identifier for the channel you are working on.</p>
     */
    ChannelName: string | undefined;
    /**
     * <p>The channel's output properties.</p>
     */
    Outputs: RequestOutputItem[] | undefined;
}
export declare namespace UpdateChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateChannelRequest) => any;
}
export interface UpdateChannelResponse {
    /**
     * <p>The ARN of the channel.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the channel.</p>
     */
    ChannelName?: string;
    /**
     * <p>Indicates whether the channel is in a running state or not.</p>
     */
    ChannelState?: ChannelState | string;
    /**
     * <p>The timestamp of when the channel was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The timestamp of when the channel was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The channel's output properties.</p>
     */
    Outputs?: ResponseOutputItem[];
    /**
     * <p>The type of playback for this channel. The only supported value is LOOP.</p>
     */
    PlaybackMode?: string;
    /**
     * <p>The tags assigned to the channel.</p>
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
export interface UpdateSourceLocationRequest {
    /**
     * <p>Access configuration parameters. Configures the type of authentication used to access content from your source location.</p>
     */
    AccessConfiguration?: AccessConfiguration;
    /**
     * <p>The optional configuration for the host server that serves segments.</p>
     */
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    /**
     * <p>The HTTP configuration for the source location.</p>
     */
    HttpConfiguration: HttpConfiguration | undefined;
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
}
export declare namespace UpdateSourceLocationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSourceLocationRequest) => any;
}
export interface UpdateSourceLocationResponse {
    /**
     * <p>The access configuration for the source location.</p>
     */
    AccessConfiguration?: AccessConfiguration;
    /**
     * <p>The ARN of the source location.</p>
     */
    Arn?: string;
    /**
     * <p>The timestamp that indicates when the source location was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The default segment delivery configuration settings.</p>
     */
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    /**
     * <p>The HTTP package configuration settings for the source location.</p>
     */
    HttpConfiguration?: HttpConfiguration;
    /**
     * <p>The timestamp that indicates when the source location was last modified.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The tags assigned to the source location.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace UpdateSourceLocationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSourceLocationResponse) => any;
}
export interface UpdateVodSourceRequest {
    /**
     * <p>An array of HTTP package configurations for the VOD source on this account.</p>
     */
    HttpPackageConfigurations: HttpPackageConfiguration[] | undefined;
    /**
     * <p>The identifier for the source location you are working on.</p>
     */
    SourceLocationName: string | undefined;
    /**
     * <p>The identifier for the VOD source you are working on.</p>
     */
    VodSourceName: string | undefined;
}
export declare namespace UpdateVodSourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateVodSourceRequest) => any;
}
export interface UpdateVodSourceResponse {
    /**
     * <p>The ARN of the VOD source.</p>
     */
    Arn?: string;
    /**
     * <p>The timestamp that indicates when the VOD source was created.</p>
     */
    CreationTime?: Date;
    /**
     * <p>The HTTP package configurations.</p>
     */
    HttpPackageConfigurations?: HttpPackageConfiguration[];
    /**
     * <p>The ARN for the VOD source.</p>
     */
    LastModifiedTime?: Date;
    /**
     * <p>The name of the source location associated with the VOD source.</p>
     */
    SourceLocationName?: string;
    /**
     * <p>The tags assigned to the VOD source.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the VOD source.</p>
     */
    VodSourceName?: string;
}
export declare namespace UpdateVodSourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateVodSourceResponse) => any;
}
