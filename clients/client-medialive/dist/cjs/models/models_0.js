"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioTrackSelection = exports.AudioTrack = exports.AudioPidSelection = exports.AudioLanguageSelection = exports.AudioLanguageSelectionPolicy = exports.AudioDescription = exports.RemixSettings = exports.AudioDescriptionLanguageCodeControl = exports.AudioCodecSettings = exports.WavSettings = exports.WavCodingMode = exports.PassThroughSettings = exports.Mp2Settings = exports.Mp2CodingMode = exports.Eac3Settings = exports.Eac3SurroundMode = exports.Eac3SurroundExMode = exports.Eac3StereoDownmix = exports.Eac3PhaseControl = exports.Eac3PassthroughControl = exports.Eac3MetadataControl = exports.Eac3LfeFilter = exports.Eac3LfeControl = exports.Eac3DrcRf = exports.Eac3DrcLine = exports.Eac3DcFilter = exports.Eac3CodingMode = exports.Eac3BitstreamMode = exports.Eac3AttenuationControl = exports.Ac3Settings = exports.Ac3MetadataControl = exports.Ac3LfeFilter = exports.Ac3DrcProfile = exports.Ac3CodingMode = exports.Ac3BitstreamMode = exports.AacSettings = exports.AacVbrQuality = exports.AacSpec = exports.AacRawFormat = exports.AacRateControlMode = exports.AacProfile = exports.AacInputType = exports.AacCodingMode = exports.AudioDescriptionAudioTypeControl = exports.AudioType = exports.AudioNormalizationSettings = exports.AudioNormalizationAlgorithmControl = exports.AudioNormalizationAlgorithm = exports.AudioChannelMapping = exports.InputChannelLevel = void 0;
exports.ChannelEgressEndpoint = exports.CaptionSelector = exports.CaptionSelectorSettings = exports.TeletextSourceSettings = exports.CaptionRectangle = exports.Scte27SourceSettings = exports.Scte20SourceSettings = exports.Scte20Convert608To708 = exports.EmbeddedSourceSettings = exports.EmbeddedScte20Detection = exports.EmbeddedConvert608To708 = exports.DvbSubSourceSettings = exports.AribSourceSettings = exports.AncillarySourceSettings = exports.CaptionLanguageMapping = exports.CaptionDescription = exports.CaptionDestinationSettings = exports.WebvttDestinationSettings = exports.TtmlDestinationSettings = exports.TtmlDestinationStyleControl = exports.TeletextDestinationSettings = exports.SmpteTtDestinationSettings = exports.Scte27DestinationSettings = exports.Scte20PlusEmbeddedDestinationSettings = exports.RtmpCaptionInfoDestinationSettings = exports.EmbeddedPlusScte20DestinationSettings = exports.EmbeddedDestinationSettings = exports.EbuTtDDestinationSettings = exports.EbuTtDDestinationStyleControl = exports.EbuTtDFillLineGapControl = exports.DvbSubDestinationSettings = exports.DvbSubDestinationTeletextGridControl = exports.DvbSubDestinationShadowColor = exports.DvbSubDestinationOutlineColor = exports.DvbSubDestinationFontColor = exports.DvbSubDestinationBackgroundColor = exports.DvbSubDestinationAlignment = exports.BurnInDestinationSettings = exports.BurnInTeletextGridControl = exports.BurnInShadowColor = exports.BurnInOutlineColor = exports.BurnInFontColor = exports.InputLocation = exports.BurnInBackgroundColor = exports.BurnInAlignment = exports.AribDestinationSettings = exports.BatchSuccessfulResultModel = exports.BatchFailedResultModel = exports.AudioSelector = exports.AudioSelectorSettings = void 0;
exports.InputType = exports.InputState = exports.InputSource = exports.MediaConnectFlow = exports.InputSourceType = exports.InputDeviceSettings = exports.InputClass = exports.InputDestination = exports.InputDestinationVpc = exports.HlsAdMarkers = exports.ChannelSummary = exports.VpcOutputSettingsDescription = exports.ChannelState = exports.LogLevel = exports.InputSpecification = exports.InputResolution = exports.InputMaximumBitrate = exports.InputCodec = exports.InputAttachment = exports.InputSettings = exports.VideoSelector = exports.VideoSelectorSettings = exports.VideoSelectorProgramId = exports.VideoSelectorPid = exports.VideoSelectorColorSpaceUsage = exports.VideoSelectorColorSpaceSettings = exports.Hdr10Settings = exports.VideoSelectorColorSpace = exports.InputSourceEndBehavior = exports.Smpte2038DataPreference = exports.NetworkInputSettings = exports.NetworkInputServerValidation = exports.HlsInputSettings = exports.InputFilter = exports.InputDenoiseFilter = exports.InputDeblockFilter = exports.AutomaticInputFailoverSettings = exports.InputPreference = exports.FailoverCondition = exports.FailoverConditionSettings = exports.VideoBlackFailoverSettings = exports.InputLossFailoverSettings = exports.AudioSilenceFailoverSettings = exports.OutputDestination = exports.OutputDestinationSettings = exports.MultiplexProgramChannelDestinationSettings = exports.MediaPackageOutputDestinationSettings = exports.ChannelClass = exports.CdiInputSpecification = exports.CdiInputResolution = void 0;
exports.DvbSdtSettings = exports.DvbSdtOutputSdt = exports.DvbNitSettings = exports.M2tsCcDescriptor = exports.M2tsBufferModel = exports.M2tsAudioStreamType = exports.M2tsAudioBufferModel = exports.M2tsAribCaptionsPidControl = exports.M2tsArib = exports.M2tsAbsentInputAudioBehavior = exports.Offering = exports.ReservationResourceSpecification = exports.ReservationVideoQuality = exports.ReservationSpecialFeature = exports.ReservationResourceType = exports.ReservationResolution = exports.ReservationMaximumFramerate = exports.ReservationMaximumBitrate = exports.ReservationCodec = exports.OfferingType = exports.OfferingDurationUnits = exports.MultiplexSummary = exports.MultiplexState = exports.MultiplexSettingsSummary = exports.MultiplexProgramSummary = exports.MultiplexProgramPipelineDetail = exports.MultiplexOutputDestination = exports.MultiplexMediaConnectOutputDestinationSettings = exports.MediaConnectFlowRequest = exports.InputWhitelistRuleCidr = exports.InputSourceRequest = exports.InputSecurityGroup = exports.InputWhitelistRule = exports.InputSecurityGroupState = exports.InputDeviceSummary = exports.InputDeviceUhdSettings = exports.InputDeviceType = exports.InputDeviceNetworkSettings = exports.InputDeviceIpScheme = exports.InputDeviceHdSettings = exports.InputDeviceScanType = exports.InputDeviceState = exports.InputDeviceConfiguredInput = exports.InputDeviceActiveInput = exports.DeviceUpdateStatus = exports.DeviceSettingsSyncState = exports.InputDeviceConnectionState = exports.InputDeviceRequest = exports.InputDestinationRequest = exports.Input = void 0;
exports.ArchiveCdnSettings = exports.ArchiveS3Settings = exports.S3CannedAcl = exports.Output = exports.OutputSettings = exports.UdpOutputSettings = exports.FecOutputSettings = exports.FecOutputIncludeFec = exports.UdpContainerSettings = exports.RtmpOutputSettings = exports.RtmpOutputCertificateMode = exports.MultiplexOutputSettings = exports.OutputLocationRef = exports.MsSmoothOutputSettings = exports.MsSmoothH265PackagingType = exports.MediaPackageOutputSettings = exports.HlsOutputSettings = exports.HlsSettings = exports.StandardHlsSettings = exports.M3u8Settings = exports.M3u8TimedMetadataBehavior = exports.M3u8Scte35Behavior = exports.M3u8PcrControl = exports.M3u8NielsenId3Behavior = exports.FrameCaptureHlsSettings = exports.Fmp4HlsSettings = exports.Fmp4TimedMetadataBehavior = exports.Fmp4NielsenId3Behavior = exports.AudioOnlyHlsSettings = exports.AudioOnlyHlsSegmentType = exports.AudioOnlyHlsTrackType = exports.HlsH265PackagingType = exports.FrameCaptureOutputSettings = exports.ArchiveOutputSettings = exports.ArchiveContainerSettings = exports.RawSettings = exports.M2tsSettings = exports.M2tsTimedMetadataBehavior = exports.M2tsSegmentationStyle = exports.M2tsSegmentationMarkers = exports.M2tsScte35Control = exports.M2tsRateMode = exports.M2tsPcrControl = exports.M2tsNielsenId3Behavior = exports.M2tsKlv = exports.M2tsEsRateInPes = exports.M2tsEbpPlacement = exports.M2tsAudioInterval = exports.M2tsEbifControl = exports.DvbTdtSettings = void 0;
exports.MultiplexGroupSettings = exports.MsSmoothGroupSettings = exports.SmoothGroupTimestampOffsetMode = exports.SmoothGroupStreamManifestBehavior = exports.SmoothGroupSparseTrackType = exports.SmoothGroupSegmentationMode = exports.InputLossActionForMsSmoothOut = exports.SmoothGroupEventStopBehavior = exports.SmoothGroupEventIdMode = exports.SmoothGroupCertificateMode = exports.SmoothGroupAudioOnlyTimecodeControl = exports.MediaPackageGroupSettings = exports.HlsGroupSettings = exports.HlsTsFileMode = exports.HlsTimedMetadataId3Frame = exports.HlsStreamInfResolution = exports.HlsSegmentationMode = exports.HlsRedundantManifest = exports.HlsProgramDateTime = exports.HlsOutputSelection = exports.HlsMode = exports.HlsManifestDurationFormat = exports.HlsManifestCompression = exports.KeyProviderSettings = exports.StaticKeySettings = exports.HlsIvSource = exports.HlsIvInManifest = exports.InputLossActionForHlsOut = exports.HlsIncompleteSegmentBehavior = exports.IFrameOnlyPlaylistType = exports.HlsId3SegmentTaggingState = exports.HlsCdnSettings = exports.HlsWebdavSettings = exports.HlsWebdavHttpTransferMode = exports.HlsS3Settings = exports.HlsMediaStoreSettings = exports.HlsMediaStoreStorageClass = exports.HlsBasicPutSettings = exports.HlsAkamaiSettings = exports.HlsAkamaiHttpTransferMode = exports.HlsEncryptionType = exports.HlsDiscontinuityTags = exports.HlsDirectoryStructure = exports.HlsCodecSpecification = exports.HlsClientCache = exports.HlsCaptionLanguageSetting = exports.FrameCaptureGroupSettings = exports.FrameCaptureCdnSettings = exports.FrameCaptureS3Settings = exports.ArchiveGroupSettings = void 0;
var InputChannelLevel;
(function (InputChannelLevel) {
    /**
     * @internal
     */
    InputChannelLevel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputChannelLevel = exports.InputChannelLevel || (exports.InputChannelLevel = {}));
var AudioChannelMapping;
(function (AudioChannelMapping) {
    /**
     * @internal
     */
    AudioChannelMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioChannelMapping = exports.AudioChannelMapping || (exports.AudioChannelMapping = {}));
var AudioNormalizationAlgorithm;
(function (AudioNormalizationAlgorithm) {
    AudioNormalizationAlgorithm["ITU_1770_1"] = "ITU_1770_1";
    AudioNormalizationAlgorithm["ITU_1770_2"] = "ITU_1770_2";
})(AudioNormalizationAlgorithm = exports.AudioNormalizationAlgorithm || (exports.AudioNormalizationAlgorithm = {}));
var AudioNormalizationAlgorithmControl;
(function (AudioNormalizationAlgorithmControl) {
    AudioNormalizationAlgorithmControl["CORRECT_AUDIO"] = "CORRECT_AUDIO";
})(AudioNormalizationAlgorithmControl = exports.AudioNormalizationAlgorithmControl || (exports.AudioNormalizationAlgorithmControl = {}));
var AudioNormalizationSettings;
(function (AudioNormalizationSettings) {
    /**
     * @internal
     */
    AudioNormalizationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioNormalizationSettings = exports.AudioNormalizationSettings || (exports.AudioNormalizationSettings = {}));
var AudioType;
(function (AudioType) {
    AudioType["CLEAN_EFFECTS"] = "CLEAN_EFFECTS";
    AudioType["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    AudioType["UNDEFINED"] = "UNDEFINED";
    AudioType["VISUAL_IMPAIRED_COMMENTARY"] = "VISUAL_IMPAIRED_COMMENTARY";
})(AudioType = exports.AudioType || (exports.AudioType = {}));
var AudioDescriptionAudioTypeControl;
(function (AudioDescriptionAudioTypeControl) {
    AudioDescriptionAudioTypeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioDescriptionAudioTypeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioDescriptionAudioTypeControl = exports.AudioDescriptionAudioTypeControl || (exports.AudioDescriptionAudioTypeControl = {}));
var AacCodingMode;
(function (AacCodingMode) {
    AacCodingMode["AD_RECEIVER_MIX"] = "AD_RECEIVER_MIX";
    AacCodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    AacCodingMode["CODING_MODE_1_1"] = "CODING_MODE_1_1";
    AacCodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    AacCodingMode["CODING_MODE_5_1"] = "CODING_MODE_5_1";
})(AacCodingMode = exports.AacCodingMode || (exports.AacCodingMode = {}));
var AacInputType;
(function (AacInputType) {
    AacInputType["BROADCASTER_MIXED_AD"] = "BROADCASTER_MIXED_AD";
    AacInputType["NORMAL"] = "NORMAL";
})(AacInputType = exports.AacInputType || (exports.AacInputType = {}));
var AacProfile;
(function (AacProfile) {
    AacProfile["HEV1"] = "HEV1";
    AacProfile["HEV2"] = "HEV2";
    AacProfile["LC"] = "LC";
})(AacProfile = exports.AacProfile || (exports.AacProfile = {}));
var AacRateControlMode;
(function (AacRateControlMode) {
    AacRateControlMode["CBR"] = "CBR";
    AacRateControlMode["VBR"] = "VBR";
})(AacRateControlMode = exports.AacRateControlMode || (exports.AacRateControlMode = {}));
var AacRawFormat;
(function (AacRawFormat) {
    AacRawFormat["LATM_LOAS"] = "LATM_LOAS";
    AacRawFormat["NONE"] = "NONE";
})(AacRawFormat = exports.AacRawFormat || (exports.AacRawFormat = {}));
var AacSpec;
(function (AacSpec) {
    AacSpec["MPEG2"] = "MPEG2";
    AacSpec["MPEG4"] = "MPEG4";
})(AacSpec = exports.AacSpec || (exports.AacSpec = {}));
var AacVbrQuality;
(function (AacVbrQuality) {
    AacVbrQuality["HIGH"] = "HIGH";
    AacVbrQuality["LOW"] = "LOW";
    AacVbrQuality["MEDIUM_HIGH"] = "MEDIUM_HIGH";
    AacVbrQuality["MEDIUM_LOW"] = "MEDIUM_LOW";
})(AacVbrQuality = exports.AacVbrQuality || (exports.AacVbrQuality = {}));
var AacSettings;
(function (AacSettings) {
    /**
     * @internal
     */
    AacSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AacSettings = exports.AacSettings || (exports.AacSettings = {}));
var Ac3BitstreamMode;
(function (Ac3BitstreamMode) {
    Ac3BitstreamMode["COMMENTARY"] = "COMMENTARY";
    Ac3BitstreamMode["COMPLETE_MAIN"] = "COMPLETE_MAIN";
    Ac3BitstreamMode["DIALOGUE"] = "DIALOGUE";
    Ac3BitstreamMode["EMERGENCY"] = "EMERGENCY";
    Ac3BitstreamMode["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    Ac3BitstreamMode["MUSIC_AND_EFFECTS"] = "MUSIC_AND_EFFECTS";
    Ac3BitstreamMode["VISUALLY_IMPAIRED"] = "VISUALLY_IMPAIRED";
    Ac3BitstreamMode["VOICE_OVER"] = "VOICE_OVER";
})(Ac3BitstreamMode = exports.Ac3BitstreamMode || (exports.Ac3BitstreamMode = {}));
var Ac3CodingMode;
(function (Ac3CodingMode) {
    Ac3CodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    Ac3CodingMode["CODING_MODE_1_1"] = "CODING_MODE_1_1";
    Ac3CodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    Ac3CodingMode["CODING_MODE_3_2_LFE"] = "CODING_MODE_3_2_LFE";
})(Ac3CodingMode = exports.Ac3CodingMode || (exports.Ac3CodingMode = {}));
var Ac3DrcProfile;
(function (Ac3DrcProfile) {
    Ac3DrcProfile["FILM_STANDARD"] = "FILM_STANDARD";
    Ac3DrcProfile["NONE"] = "NONE";
})(Ac3DrcProfile = exports.Ac3DrcProfile || (exports.Ac3DrcProfile = {}));
var Ac3LfeFilter;
(function (Ac3LfeFilter) {
    Ac3LfeFilter["DISABLED"] = "DISABLED";
    Ac3LfeFilter["ENABLED"] = "ENABLED";
})(Ac3LfeFilter = exports.Ac3LfeFilter || (exports.Ac3LfeFilter = {}));
var Ac3MetadataControl;
(function (Ac3MetadataControl) {
    Ac3MetadataControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    Ac3MetadataControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(Ac3MetadataControl = exports.Ac3MetadataControl || (exports.Ac3MetadataControl = {}));
var Ac3Settings;
(function (Ac3Settings) {
    /**
     * @internal
     */
    Ac3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ac3Settings = exports.Ac3Settings || (exports.Ac3Settings = {}));
var Eac3AttenuationControl;
(function (Eac3AttenuationControl) {
    Eac3AttenuationControl["ATTENUATE_3_DB"] = "ATTENUATE_3_DB";
    Eac3AttenuationControl["NONE"] = "NONE";
})(Eac3AttenuationControl = exports.Eac3AttenuationControl || (exports.Eac3AttenuationControl = {}));
var Eac3BitstreamMode;
(function (Eac3BitstreamMode) {
    Eac3BitstreamMode["COMMENTARY"] = "COMMENTARY";
    Eac3BitstreamMode["COMPLETE_MAIN"] = "COMPLETE_MAIN";
    Eac3BitstreamMode["EMERGENCY"] = "EMERGENCY";
    Eac3BitstreamMode["HEARING_IMPAIRED"] = "HEARING_IMPAIRED";
    Eac3BitstreamMode["VISUALLY_IMPAIRED"] = "VISUALLY_IMPAIRED";
})(Eac3BitstreamMode = exports.Eac3BitstreamMode || (exports.Eac3BitstreamMode = {}));
var Eac3CodingMode;
(function (Eac3CodingMode) {
    Eac3CodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    Eac3CodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    Eac3CodingMode["CODING_MODE_3_2"] = "CODING_MODE_3_2";
})(Eac3CodingMode = exports.Eac3CodingMode || (exports.Eac3CodingMode = {}));
var Eac3DcFilter;
(function (Eac3DcFilter) {
    Eac3DcFilter["DISABLED"] = "DISABLED";
    Eac3DcFilter["ENABLED"] = "ENABLED";
})(Eac3DcFilter = exports.Eac3DcFilter || (exports.Eac3DcFilter = {}));
var Eac3DrcLine;
(function (Eac3DrcLine) {
    Eac3DrcLine["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DrcLine["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DrcLine["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DrcLine["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DrcLine["NONE"] = "NONE";
    Eac3DrcLine["SPEECH"] = "SPEECH";
})(Eac3DrcLine = exports.Eac3DrcLine || (exports.Eac3DrcLine = {}));
var Eac3DrcRf;
(function (Eac3DrcRf) {
    Eac3DrcRf["FILM_LIGHT"] = "FILM_LIGHT";
    Eac3DrcRf["FILM_STANDARD"] = "FILM_STANDARD";
    Eac3DrcRf["MUSIC_LIGHT"] = "MUSIC_LIGHT";
    Eac3DrcRf["MUSIC_STANDARD"] = "MUSIC_STANDARD";
    Eac3DrcRf["NONE"] = "NONE";
    Eac3DrcRf["SPEECH"] = "SPEECH";
})(Eac3DrcRf = exports.Eac3DrcRf || (exports.Eac3DrcRf = {}));
var Eac3LfeControl;
(function (Eac3LfeControl) {
    Eac3LfeControl["LFE"] = "LFE";
    Eac3LfeControl["NO_LFE"] = "NO_LFE";
})(Eac3LfeControl = exports.Eac3LfeControl || (exports.Eac3LfeControl = {}));
var Eac3LfeFilter;
(function (Eac3LfeFilter) {
    Eac3LfeFilter["DISABLED"] = "DISABLED";
    Eac3LfeFilter["ENABLED"] = "ENABLED";
})(Eac3LfeFilter = exports.Eac3LfeFilter || (exports.Eac3LfeFilter = {}));
var Eac3MetadataControl;
(function (Eac3MetadataControl) {
    Eac3MetadataControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    Eac3MetadataControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(Eac3MetadataControl = exports.Eac3MetadataControl || (exports.Eac3MetadataControl = {}));
var Eac3PassthroughControl;
(function (Eac3PassthroughControl) {
    Eac3PassthroughControl["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    Eac3PassthroughControl["WHEN_POSSIBLE"] = "WHEN_POSSIBLE";
})(Eac3PassthroughControl = exports.Eac3PassthroughControl || (exports.Eac3PassthroughControl = {}));
var Eac3PhaseControl;
(function (Eac3PhaseControl) {
    Eac3PhaseControl["NO_SHIFT"] = "NO_SHIFT";
    Eac3PhaseControl["SHIFT_90_DEGREES"] = "SHIFT_90_DEGREES";
})(Eac3PhaseControl = exports.Eac3PhaseControl || (exports.Eac3PhaseControl = {}));
var Eac3StereoDownmix;
(function (Eac3StereoDownmix) {
    Eac3StereoDownmix["DPL2"] = "DPL2";
    Eac3StereoDownmix["LO_RO"] = "LO_RO";
    Eac3StereoDownmix["LT_RT"] = "LT_RT";
    Eac3StereoDownmix["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3StereoDownmix = exports.Eac3StereoDownmix || (exports.Eac3StereoDownmix = {}));
var Eac3SurroundExMode;
(function (Eac3SurroundExMode) {
    Eac3SurroundExMode["DISABLED"] = "DISABLED";
    Eac3SurroundExMode["ENABLED"] = "ENABLED";
    Eac3SurroundExMode["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3SurroundExMode = exports.Eac3SurroundExMode || (exports.Eac3SurroundExMode = {}));
var Eac3SurroundMode;
(function (Eac3SurroundMode) {
    Eac3SurroundMode["DISABLED"] = "DISABLED";
    Eac3SurroundMode["ENABLED"] = "ENABLED";
    Eac3SurroundMode["NOT_INDICATED"] = "NOT_INDICATED";
})(Eac3SurroundMode = exports.Eac3SurroundMode || (exports.Eac3SurroundMode = {}));
var Eac3Settings;
(function (Eac3Settings) {
    /**
     * @internal
     */
    Eac3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Eac3Settings = exports.Eac3Settings || (exports.Eac3Settings = {}));
var Mp2CodingMode;
(function (Mp2CodingMode) {
    Mp2CodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    Mp2CodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
})(Mp2CodingMode = exports.Mp2CodingMode || (exports.Mp2CodingMode = {}));
var Mp2Settings;
(function (Mp2Settings) {
    /**
     * @internal
     */
    Mp2Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mp2Settings = exports.Mp2Settings || (exports.Mp2Settings = {}));
var PassThroughSettings;
(function (PassThroughSettings) {
    /**
     * @internal
     */
    PassThroughSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PassThroughSettings = exports.PassThroughSettings || (exports.PassThroughSettings = {}));
var WavCodingMode;
(function (WavCodingMode) {
    WavCodingMode["CODING_MODE_1_0"] = "CODING_MODE_1_0";
    WavCodingMode["CODING_MODE_2_0"] = "CODING_MODE_2_0";
    WavCodingMode["CODING_MODE_4_0"] = "CODING_MODE_4_0";
    WavCodingMode["CODING_MODE_8_0"] = "CODING_MODE_8_0";
})(WavCodingMode = exports.WavCodingMode || (exports.WavCodingMode = {}));
var WavSettings;
(function (WavSettings) {
    /**
     * @internal
     */
    WavSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WavSettings = exports.WavSettings || (exports.WavSettings = {}));
var AudioCodecSettings;
(function (AudioCodecSettings) {
    /**
     * @internal
     */
    AudioCodecSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioCodecSettings = exports.AudioCodecSettings || (exports.AudioCodecSettings = {}));
var AudioDescriptionLanguageCodeControl;
(function (AudioDescriptionLanguageCodeControl) {
    AudioDescriptionLanguageCodeControl["FOLLOW_INPUT"] = "FOLLOW_INPUT";
    AudioDescriptionLanguageCodeControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(AudioDescriptionLanguageCodeControl = exports.AudioDescriptionLanguageCodeControl || (exports.AudioDescriptionLanguageCodeControl = {}));
var RemixSettings;
(function (RemixSettings) {
    /**
     * @internal
     */
    RemixSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemixSettings = exports.RemixSettings || (exports.RemixSettings = {}));
var AudioDescription;
(function (AudioDescription) {
    /**
     * @internal
     */
    AudioDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioDescription = exports.AudioDescription || (exports.AudioDescription = {}));
var AudioLanguageSelectionPolicy;
(function (AudioLanguageSelectionPolicy) {
    AudioLanguageSelectionPolicy["LOOSE"] = "LOOSE";
    AudioLanguageSelectionPolicy["STRICT"] = "STRICT";
})(AudioLanguageSelectionPolicy = exports.AudioLanguageSelectionPolicy || (exports.AudioLanguageSelectionPolicy = {}));
var AudioLanguageSelection;
(function (AudioLanguageSelection) {
    /**
     * @internal
     */
    AudioLanguageSelection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioLanguageSelection = exports.AudioLanguageSelection || (exports.AudioLanguageSelection = {}));
var AudioPidSelection;
(function (AudioPidSelection) {
    /**
     * @internal
     */
    AudioPidSelection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioPidSelection = exports.AudioPidSelection || (exports.AudioPidSelection = {}));
var AudioTrack;
(function (AudioTrack) {
    /**
     * @internal
     */
    AudioTrack.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioTrack = exports.AudioTrack || (exports.AudioTrack = {}));
var AudioTrackSelection;
(function (AudioTrackSelection) {
    /**
     * @internal
     */
    AudioTrackSelection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioTrackSelection = exports.AudioTrackSelection || (exports.AudioTrackSelection = {}));
var AudioSelectorSettings;
(function (AudioSelectorSettings) {
    /**
     * @internal
     */
    AudioSelectorSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioSelectorSettings = exports.AudioSelectorSettings || (exports.AudioSelectorSettings = {}));
var AudioSelector;
(function (AudioSelector) {
    /**
     * @internal
     */
    AudioSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioSelector = exports.AudioSelector || (exports.AudioSelector = {}));
var BatchFailedResultModel;
(function (BatchFailedResultModel) {
    /**
     * @internal
     */
    BatchFailedResultModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchFailedResultModel = exports.BatchFailedResultModel || (exports.BatchFailedResultModel = {}));
var BatchSuccessfulResultModel;
(function (BatchSuccessfulResultModel) {
    /**
     * @internal
     */
    BatchSuccessfulResultModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchSuccessfulResultModel = exports.BatchSuccessfulResultModel || (exports.BatchSuccessfulResultModel = {}));
var AribDestinationSettings;
(function (AribDestinationSettings) {
    /**
     * @internal
     */
    AribDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AribDestinationSettings = exports.AribDestinationSettings || (exports.AribDestinationSettings = {}));
var BurnInAlignment;
(function (BurnInAlignment) {
    BurnInAlignment["CENTERED"] = "CENTERED";
    BurnInAlignment["LEFT"] = "LEFT";
    BurnInAlignment["SMART"] = "SMART";
})(BurnInAlignment = exports.BurnInAlignment || (exports.BurnInAlignment = {}));
var BurnInBackgroundColor;
(function (BurnInBackgroundColor) {
    BurnInBackgroundColor["BLACK"] = "BLACK";
    BurnInBackgroundColor["NONE"] = "NONE";
    BurnInBackgroundColor["WHITE"] = "WHITE";
})(BurnInBackgroundColor = exports.BurnInBackgroundColor || (exports.BurnInBackgroundColor = {}));
var InputLocation;
(function (InputLocation) {
    /**
     * @internal
     */
    InputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputLocation = exports.InputLocation || (exports.InputLocation = {}));
var BurnInFontColor;
(function (BurnInFontColor) {
    BurnInFontColor["BLACK"] = "BLACK";
    BurnInFontColor["BLUE"] = "BLUE";
    BurnInFontColor["GREEN"] = "GREEN";
    BurnInFontColor["RED"] = "RED";
    BurnInFontColor["WHITE"] = "WHITE";
    BurnInFontColor["YELLOW"] = "YELLOW";
})(BurnInFontColor = exports.BurnInFontColor || (exports.BurnInFontColor = {}));
var BurnInOutlineColor;
(function (BurnInOutlineColor) {
    BurnInOutlineColor["BLACK"] = "BLACK";
    BurnInOutlineColor["BLUE"] = "BLUE";
    BurnInOutlineColor["GREEN"] = "GREEN";
    BurnInOutlineColor["RED"] = "RED";
    BurnInOutlineColor["WHITE"] = "WHITE";
    BurnInOutlineColor["YELLOW"] = "YELLOW";
})(BurnInOutlineColor = exports.BurnInOutlineColor || (exports.BurnInOutlineColor = {}));
var BurnInShadowColor;
(function (BurnInShadowColor) {
    BurnInShadowColor["BLACK"] = "BLACK";
    BurnInShadowColor["NONE"] = "NONE";
    BurnInShadowColor["WHITE"] = "WHITE";
})(BurnInShadowColor = exports.BurnInShadowColor || (exports.BurnInShadowColor = {}));
var BurnInTeletextGridControl;
(function (BurnInTeletextGridControl) {
    BurnInTeletextGridControl["FIXED"] = "FIXED";
    BurnInTeletextGridControl["SCALED"] = "SCALED";
})(BurnInTeletextGridControl = exports.BurnInTeletextGridControl || (exports.BurnInTeletextGridControl = {}));
var BurnInDestinationSettings;
(function (BurnInDestinationSettings) {
    /**
     * @internal
     */
    BurnInDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BurnInDestinationSettings = exports.BurnInDestinationSettings || (exports.BurnInDestinationSettings = {}));
var DvbSubDestinationAlignment;
(function (DvbSubDestinationAlignment) {
    DvbSubDestinationAlignment["CENTERED"] = "CENTERED";
    DvbSubDestinationAlignment["LEFT"] = "LEFT";
    DvbSubDestinationAlignment["SMART"] = "SMART";
})(DvbSubDestinationAlignment = exports.DvbSubDestinationAlignment || (exports.DvbSubDestinationAlignment = {}));
var DvbSubDestinationBackgroundColor;
(function (DvbSubDestinationBackgroundColor) {
    DvbSubDestinationBackgroundColor["BLACK"] = "BLACK";
    DvbSubDestinationBackgroundColor["NONE"] = "NONE";
    DvbSubDestinationBackgroundColor["WHITE"] = "WHITE";
})(DvbSubDestinationBackgroundColor = exports.DvbSubDestinationBackgroundColor || (exports.DvbSubDestinationBackgroundColor = {}));
var DvbSubDestinationFontColor;
(function (DvbSubDestinationFontColor) {
    DvbSubDestinationFontColor["BLACK"] = "BLACK";
    DvbSubDestinationFontColor["BLUE"] = "BLUE";
    DvbSubDestinationFontColor["GREEN"] = "GREEN";
    DvbSubDestinationFontColor["RED"] = "RED";
    DvbSubDestinationFontColor["WHITE"] = "WHITE";
    DvbSubDestinationFontColor["YELLOW"] = "YELLOW";
})(DvbSubDestinationFontColor = exports.DvbSubDestinationFontColor || (exports.DvbSubDestinationFontColor = {}));
var DvbSubDestinationOutlineColor;
(function (DvbSubDestinationOutlineColor) {
    DvbSubDestinationOutlineColor["BLACK"] = "BLACK";
    DvbSubDestinationOutlineColor["BLUE"] = "BLUE";
    DvbSubDestinationOutlineColor["GREEN"] = "GREEN";
    DvbSubDestinationOutlineColor["RED"] = "RED";
    DvbSubDestinationOutlineColor["WHITE"] = "WHITE";
    DvbSubDestinationOutlineColor["YELLOW"] = "YELLOW";
})(DvbSubDestinationOutlineColor = exports.DvbSubDestinationOutlineColor || (exports.DvbSubDestinationOutlineColor = {}));
var DvbSubDestinationShadowColor;
(function (DvbSubDestinationShadowColor) {
    DvbSubDestinationShadowColor["BLACK"] = "BLACK";
    DvbSubDestinationShadowColor["NONE"] = "NONE";
    DvbSubDestinationShadowColor["WHITE"] = "WHITE";
})(DvbSubDestinationShadowColor = exports.DvbSubDestinationShadowColor || (exports.DvbSubDestinationShadowColor = {}));
var DvbSubDestinationTeletextGridControl;
(function (DvbSubDestinationTeletextGridControl) {
    DvbSubDestinationTeletextGridControl["FIXED"] = "FIXED";
    DvbSubDestinationTeletextGridControl["SCALED"] = "SCALED";
})(DvbSubDestinationTeletextGridControl = exports.DvbSubDestinationTeletextGridControl || (exports.DvbSubDestinationTeletextGridControl = {}));
var DvbSubDestinationSettings;
(function (DvbSubDestinationSettings) {
    /**
     * @internal
     */
    DvbSubDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbSubDestinationSettings = exports.DvbSubDestinationSettings || (exports.DvbSubDestinationSettings = {}));
var EbuTtDFillLineGapControl;
(function (EbuTtDFillLineGapControl) {
    EbuTtDFillLineGapControl["DISABLED"] = "DISABLED";
    EbuTtDFillLineGapControl["ENABLED"] = "ENABLED";
})(EbuTtDFillLineGapControl = exports.EbuTtDFillLineGapControl || (exports.EbuTtDFillLineGapControl = {}));
var EbuTtDDestinationStyleControl;
(function (EbuTtDDestinationStyleControl) {
    EbuTtDDestinationStyleControl["EXCLUDE"] = "EXCLUDE";
    EbuTtDDestinationStyleControl["INCLUDE"] = "INCLUDE";
})(EbuTtDDestinationStyleControl = exports.EbuTtDDestinationStyleControl || (exports.EbuTtDDestinationStyleControl = {}));
var EbuTtDDestinationSettings;
(function (EbuTtDDestinationSettings) {
    /**
     * @internal
     */
    EbuTtDDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbuTtDDestinationSettings = exports.EbuTtDDestinationSettings || (exports.EbuTtDDestinationSettings = {}));
var EmbeddedDestinationSettings;
(function (EmbeddedDestinationSettings) {
    /**
     * @internal
     */
    EmbeddedDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmbeddedDestinationSettings = exports.EmbeddedDestinationSettings || (exports.EmbeddedDestinationSettings = {}));
var EmbeddedPlusScte20DestinationSettings;
(function (EmbeddedPlusScte20DestinationSettings) {
    /**
     * @internal
     */
    EmbeddedPlusScte20DestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmbeddedPlusScte20DestinationSettings = exports.EmbeddedPlusScte20DestinationSettings || (exports.EmbeddedPlusScte20DestinationSettings = {}));
var RtmpCaptionInfoDestinationSettings;
(function (RtmpCaptionInfoDestinationSettings) {
    /**
     * @internal
     */
    RtmpCaptionInfoDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RtmpCaptionInfoDestinationSettings = exports.RtmpCaptionInfoDestinationSettings || (exports.RtmpCaptionInfoDestinationSettings = {}));
var Scte20PlusEmbeddedDestinationSettings;
(function (Scte20PlusEmbeddedDestinationSettings) {
    /**
     * @internal
     */
    Scte20PlusEmbeddedDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte20PlusEmbeddedDestinationSettings = exports.Scte20PlusEmbeddedDestinationSettings || (exports.Scte20PlusEmbeddedDestinationSettings = {}));
var Scte27DestinationSettings;
(function (Scte27DestinationSettings) {
    /**
     * @internal
     */
    Scte27DestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte27DestinationSettings = exports.Scte27DestinationSettings || (exports.Scte27DestinationSettings = {}));
var SmpteTtDestinationSettings;
(function (SmpteTtDestinationSettings) {
    /**
     * @internal
     */
    SmpteTtDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SmpteTtDestinationSettings = exports.SmpteTtDestinationSettings || (exports.SmpteTtDestinationSettings = {}));
var TeletextDestinationSettings;
(function (TeletextDestinationSettings) {
    /**
     * @internal
     */
    TeletextDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeletextDestinationSettings = exports.TeletextDestinationSettings || (exports.TeletextDestinationSettings = {}));
var TtmlDestinationStyleControl;
(function (TtmlDestinationStyleControl) {
    TtmlDestinationStyleControl["PASSTHROUGH"] = "PASSTHROUGH";
    TtmlDestinationStyleControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(TtmlDestinationStyleControl = exports.TtmlDestinationStyleControl || (exports.TtmlDestinationStyleControl = {}));
var TtmlDestinationSettings;
(function (TtmlDestinationSettings) {
    /**
     * @internal
     */
    TtmlDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TtmlDestinationSettings = exports.TtmlDestinationSettings || (exports.TtmlDestinationSettings = {}));
var WebvttDestinationSettings;
(function (WebvttDestinationSettings) {
    /**
     * @internal
     */
    WebvttDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebvttDestinationSettings = exports.WebvttDestinationSettings || (exports.WebvttDestinationSettings = {}));
var CaptionDestinationSettings;
(function (CaptionDestinationSettings) {
    /**
     * @internal
     */
    CaptionDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionDestinationSettings = exports.CaptionDestinationSettings || (exports.CaptionDestinationSettings = {}));
var CaptionDescription;
(function (CaptionDescription) {
    /**
     * @internal
     */
    CaptionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionDescription = exports.CaptionDescription || (exports.CaptionDescription = {}));
var CaptionLanguageMapping;
(function (CaptionLanguageMapping) {
    /**
     * @internal
     */
    CaptionLanguageMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionLanguageMapping = exports.CaptionLanguageMapping || (exports.CaptionLanguageMapping = {}));
var AncillarySourceSettings;
(function (AncillarySourceSettings) {
    /**
     * @internal
     */
    AncillarySourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AncillarySourceSettings = exports.AncillarySourceSettings || (exports.AncillarySourceSettings = {}));
var AribSourceSettings;
(function (AribSourceSettings) {
    /**
     * @internal
     */
    AribSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AribSourceSettings = exports.AribSourceSettings || (exports.AribSourceSettings = {}));
var DvbSubSourceSettings;
(function (DvbSubSourceSettings) {
    /**
     * @internal
     */
    DvbSubSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbSubSourceSettings = exports.DvbSubSourceSettings || (exports.DvbSubSourceSettings = {}));
var EmbeddedConvert608To708;
(function (EmbeddedConvert608To708) {
    EmbeddedConvert608To708["DISABLED"] = "DISABLED";
    EmbeddedConvert608To708["UPCONVERT"] = "UPCONVERT";
})(EmbeddedConvert608To708 = exports.EmbeddedConvert608To708 || (exports.EmbeddedConvert608To708 = {}));
var EmbeddedScte20Detection;
(function (EmbeddedScte20Detection) {
    EmbeddedScte20Detection["AUTO"] = "AUTO";
    EmbeddedScte20Detection["OFF"] = "OFF";
})(EmbeddedScte20Detection = exports.EmbeddedScte20Detection || (exports.EmbeddedScte20Detection = {}));
var EmbeddedSourceSettings;
(function (EmbeddedSourceSettings) {
    /**
     * @internal
     */
    EmbeddedSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmbeddedSourceSettings = exports.EmbeddedSourceSettings || (exports.EmbeddedSourceSettings = {}));
var Scte20Convert608To708;
(function (Scte20Convert608To708) {
    Scte20Convert608To708["DISABLED"] = "DISABLED";
    Scte20Convert608To708["UPCONVERT"] = "UPCONVERT";
})(Scte20Convert608To708 = exports.Scte20Convert608To708 || (exports.Scte20Convert608To708 = {}));
var Scte20SourceSettings;
(function (Scte20SourceSettings) {
    /**
     * @internal
     */
    Scte20SourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte20SourceSettings = exports.Scte20SourceSettings || (exports.Scte20SourceSettings = {}));
var Scte27SourceSettings;
(function (Scte27SourceSettings) {
    /**
     * @internal
     */
    Scte27SourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scte27SourceSettings = exports.Scte27SourceSettings || (exports.Scte27SourceSettings = {}));
var CaptionRectangle;
(function (CaptionRectangle) {
    /**
     * @internal
     */
    CaptionRectangle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionRectangle = exports.CaptionRectangle || (exports.CaptionRectangle = {}));
var TeletextSourceSettings;
(function (TeletextSourceSettings) {
    /**
     * @internal
     */
    TeletextSourceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeletextSourceSettings = exports.TeletextSourceSettings || (exports.TeletextSourceSettings = {}));
var CaptionSelectorSettings;
(function (CaptionSelectorSettings) {
    /**
     * @internal
     */
    CaptionSelectorSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionSelectorSettings = exports.CaptionSelectorSettings || (exports.CaptionSelectorSettings = {}));
var CaptionSelector;
(function (CaptionSelector) {
    /**
     * @internal
     */
    CaptionSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaptionSelector = exports.CaptionSelector || (exports.CaptionSelector = {}));
var ChannelEgressEndpoint;
(function (ChannelEgressEndpoint) {
    /**
     * @internal
     */
    ChannelEgressEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelEgressEndpoint = exports.ChannelEgressEndpoint || (exports.ChannelEgressEndpoint = {}));
var CdiInputResolution;
(function (CdiInputResolution) {
    CdiInputResolution["FHD"] = "FHD";
    CdiInputResolution["HD"] = "HD";
    CdiInputResolution["SD"] = "SD";
    CdiInputResolution["UHD"] = "UHD";
})(CdiInputResolution = exports.CdiInputResolution || (exports.CdiInputResolution = {}));
var CdiInputSpecification;
(function (CdiInputSpecification) {
    /**
     * @internal
     */
    CdiInputSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CdiInputSpecification = exports.CdiInputSpecification || (exports.CdiInputSpecification = {}));
var ChannelClass;
(function (ChannelClass) {
    ChannelClass["SINGLE_PIPELINE"] = "SINGLE_PIPELINE";
    ChannelClass["STANDARD"] = "STANDARD";
})(ChannelClass = exports.ChannelClass || (exports.ChannelClass = {}));
var MediaPackageOutputDestinationSettings;
(function (MediaPackageOutputDestinationSettings) {
    /**
     * @internal
     */
    MediaPackageOutputDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaPackageOutputDestinationSettings = exports.MediaPackageOutputDestinationSettings || (exports.MediaPackageOutputDestinationSettings = {}));
var MultiplexProgramChannelDestinationSettings;
(function (MultiplexProgramChannelDestinationSettings) {
    /**
     * @internal
     */
    MultiplexProgramChannelDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgramChannelDestinationSettings = exports.MultiplexProgramChannelDestinationSettings || (exports.MultiplexProgramChannelDestinationSettings = {}));
var OutputDestinationSettings;
(function (OutputDestinationSettings) {
    /**
     * @internal
     */
    OutputDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDestinationSettings = exports.OutputDestinationSettings || (exports.OutputDestinationSettings = {}));
var OutputDestination;
(function (OutputDestination) {
    /**
     * @internal
     */
    OutputDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputDestination = exports.OutputDestination || (exports.OutputDestination = {}));
var AudioSilenceFailoverSettings;
(function (AudioSilenceFailoverSettings) {
    /**
     * @internal
     */
    AudioSilenceFailoverSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioSilenceFailoverSettings = exports.AudioSilenceFailoverSettings || (exports.AudioSilenceFailoverSettings = {}));
var InputLossFailoverSettings;
(function (InputLossFailoverSettings) {
    /**
     * @internal
     */
    InputLossFailoverSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputLossFailoverSettings = exports.InputLossFailoverSettings || (exports.InputLossFailoverSettings = {}));
var VideoBlackFailoverSettings;
(function (VideoBlackFailoverSettings) {
    /**
     * @internal
     */
    VideoBlackFailoverSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoBlackFailoverSettings = exports.VideoBlackFailoverSettings || (exports.VideoBlackFailoverSettings = {}));
var FailoverConditionSettings;
(function (FailoverConditionSettings) {
    /**
     * @internal
     */
    FailoverConditionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverConditionSettings = exports.FailoverConditionSettings || (exports.FailoverConditionSettings = {}));
var FailoverCondition;
(function (FailoverCondition) {
    /**
     * @internal
     */
    FailoverCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailoverCondition = exports.FailoverCondition || (exports.FailoverCondition = {}));
var InputPreference;
(function (InputPreference) {
    InputPreference["EQUAL_INPUT_PREFERENCE"] = "EQUAL_INPUT_PREFERENCE";
    InputPreference["PRIMARY_INPUT_PREFERRED"] = "PRIMARY_INPUT_PREFERRED";
})(InputPreference = exports.InputPreference || (exports.InputPreference = {}));
var AutomaticInputFailoverSettings;
(function (AutomaticInputFailoverSettings) {
    /**
     * @internal
     */
    AutomaticInputFailoverSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomaticInputFailoverSettings = exports.AutomaticInputFailoverSettings || (exports.AutomaticInputFailoverSettings = {}));
var InputDeblockFilter;
(function (InputDeblockFilter) {
    InputDeblockFilter["DISABLED"] = "DISABLED";
    InputDeblockFilter["ENABLED"] = "ENABLED";
})(InputDeblockFilter = exports.InputDeblockFilter || (exports.InputDeblockFilter = {}));
var InputDenoiseFilter;
(function (InputDenoiseFilter) {
    InputDenoiseFilter["DISABLED"] = "DISABLED";
    InputDenoiseFilter["ENABLED"] = "ENABLED";
})(InputDenoiseFilter = exports.InputDenoiseFilter || (exports.InputDenoiseFilter = {}));
var InputFilter;
(function (InputFilter) {
    InputFilter["AUTO"] = "AUTO";
    InputFilter["DISABLED"] = "DISABLED";
    InputFilter["FORCED"] = "FORCED";
})(InputFilter = exports.InputFilter || (exports.InputFilter = {}));
var HlsInputSettings;
(function (HlsInputSettings) {
    /**
     * @internal
     */
    HlsInputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsInputSettings = exports.HlsInputSettings || (exports.HlsInputSettings = {}));
var NetworkInputServerValidation;
(function (NetworkInputServerValidation) {
    NetworkInputServerValidation["CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME"] = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME";
    NetworkInputServerValidation["CHECK_CRYPTOGRAPHY_ONLY"] = "CHECK_CRYPTOGRAPHY_ONLY";
})(NetworkInputServerValidation = exports.NetworkInputServerValidation || (exports.NetworkInputServerValidation = {}));
var NetworkInputSettings;
(function (NetworkInputSettings) {
    /**
     * @internal
     */
    NetworkInputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInputSettings = exports.NetworkInputSettings || (exports.NetworkInputSettings = {}));
var Smpte2038DataPreference;
(function (Smpte2038DataPreference) {
    Smpte2038DataPreference["IGNORE"] = "IGNORE";
    Smpte2038DataPreference["PREFER"] = "PREFER";
})(Smpte2038DataPreference = exports.Smpte2038DataPreference || (exports.Smpte2038DataPreference = {}));
var InputSourceEndBehavior;
(function (InputSourceEndBehavior) {
    InputSourceEndBehavior["CONTINUE"] = "CONTINUE";
    InputSourceEndBehavior["LOOP"] = "LOOP";
})(InputSourceEndBehavior = exports.InputSourceEndBehavior || (exports.InputSourceEndBehavior = {}));
var VideoSelectorColorSpace;
(function (VideoSelectorColorSpace) {
    VideoSelectorColorSpace["FOLLOW"] = "FOLLOW";
    VideoSelectorColorSpace["HDR10"] = "HDR10";
    VideoSelectorColorSpace["HLG_2020"] = "HLG_2020";
    VideoSelectorColorSpace["REC_601"] = "REC_601";
    VideoSelectorColorSpace["REC_709"] = "REC_709";
})(VideoSelectorColorSpace = exports.VideoSelectorColorSpace || (exports.VideoSelectorColorSpace = {}));
var Hdr10Settings;
(function (Hdr10Settings) {
    /**
     * @internal
     */
    Hdr10Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Hdr10Settings = exports.Hdr10Settings || (exports.Hdr10Settings = {}));
var VideoSelectorColorSpaceSettings;
(function (VideoSelectorColorSpaceSettings) {
    /**
     * @internal
     */
    VideoSelectorColorSpaceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoSelectorColorSpaceSettings = exports.VideoSelectorColorSpaceSettings || (exports.VideoSelectorColorSpaceSettings = {}));
var VideoSelectorColorSpaceUsage;
(function (VideoSelectorColorSpaceUsage) {
    VideoSelectorColorSpaceUsage["FALLBACK"] = "FALLBACK";
    VideoSelectorColorSpaceUsage["FORCE"] = "FORCE";
})(VideoSelectorColorSpaceUsage = exports.VideoSelectorColorSpaceUsage || (exports.VideoSelectorColorSpaceUsage = {}));
var VideoSelectorPid;
(function (VideoSelectorPid) {
    /**
     * @internal
     */
    VideoSelectorPid.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoSelectorPid = exports.VideoSelectorPid || (exports.VideoSelectorPid = {}));
var VideoSelectorProgramId;
(function (VideoSelectorProgramId) {
    /**
     * @internal
     */
    VideoSelectorProgramId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoSelectorProgramId = exports.VideoSelectorProgramId || (exports.VideoSelectorProgramId = {}));
var VideoSelectorSettings;
(function (VideoSelectorSettings) {
    /**
     * @internal
     */
    VideoSelectorSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoSelectorSettings = exports.VideoSelectorSettings || (exports.VideoSelectorSettings = {}));
var VideoSelector;
(function (VideoSelector) {
    /**
     * @internal
     */
    VideoSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VideoSelector = exports.VideoSelector || (exports.VideoSelector = {}));
var InputSettings;
(function (InputSettings) {
    /**
     * @internal
     */
    InputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSettings = exports.InputSettings || (exports.InputSettings = {}));
var InputAttachment;
(function (InputAttachment) {
    /**
     * @internal
     */
    InputAttachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputAttachment = exports.InputAttachment || (exports.InputAttachment = {}));
var InputCodec;
(function (InputCodec) {
    InputCodec["AVC"] = "AVC";
    InputCodec["HEVC"] = "HEVC";
    InputCodec["MPEG2"] = "MPEG2";
})(InputCodec = exports.InputCodec || (exports.InputCodec = {}));
var InputMaximumBitrate;
(function (InputMaximumBitrate) {
    InputMaximumBitrate["MAX_10_MBPS"] = "MAX_10_MBPS";
    InputMaximumBitrate["MAX_20_MBPS"] = "MAX_20_MBPS";
    InputMaximumBitrate["MAX_50_MBPS"] = "MAX_50_MBPS";
})(InputMaximumBitrate = exports.InputMaximumBitrate || (exports.InputMaximumBitrate = {}));
var InputResolution;
(function (InputResolution) {
    InputResolution["HD"] = "HD";
    InputResolution["SD"] = "SD";
    InputResolution["UHD"] = "UHD";
})(InputResolution = exports.InputResolution || (exports.InputResolution = {}));
var InputSpecification;
(function (InputSpecification) {
    /**
     * @internal
     */
    InputSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSpecification = exports.InputSpecification || (exports.InputSpecification = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["DISABLED"] = "DISABLED";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var ChannelState;
(function (ChannelState) {
    ChannelState["CREATE_FAILED"] = "CREATE_FAILED";
    ChannelState["CREATING"] = "CREATING";
    ChannelState["DELETED"] = "DELETED";
    ChannelState["DELETING"] = "DELETING";
    ChannelState["IDLE"] = "IDLE";
    ChannelState["RECOVERING"] = "RECOVERING";
    ChannelState["RUNNING"] = "RUNNING";
    ChannelState["STARTING"] = "STARTING";
    ChannelState["STOPPING"] = "STOPPING";
    ChannelState["UPDATE_FAILED"] = "UPDATE_FAILED";
    ChannelState["UPDATING"] = "UPDATING";
})(ChannelState = exports.ChannelState || (exports.ChannelState = {}));
var VpcOutputSettingsDescription;
(function (VpcOutputSettingsDescription) {
    /**
     * @internal
     */
    VpcOutputSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcOutputSettingsDescription = exports.VpcOutputSettingsDescription || (exports.VpcOutputSettingsDescription = {}));
var ChannelSummary;
(function (ChannelSummary) {
    /**
     * @internal
     */
    ChannelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelSummary = exports.ChannelSummary || (exports.ChannelSummary = {}));
var HlsAdMarkers;
(function (HlsAdMarkers) {
    HlsAdMarkers["ADOBE"] = "ADOBE";
    HlsAdMarkers["ELEMENTAL"] = "ELEMENTAL";
    HlsAdMarkers["ELEMENTAL_SCTE35"] = "ELEMENTAL_SCTE35";
})(HlsAdMarkers = exports.HlsAdMarkers || (exports.HlsAdMarkers = {}));
var InputDestinationVpc;
(function (InputDestinationVpc) {
    /**
     * @internal
     */
    InputDestinationVpc.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDestinationVpc = exports.InputDestinationVpc || (exports.InputDestinationVpc = {}));
var InputDestination;
(function (InputDestination) {
    /**
     * @internal
     */
    InputDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDestination = exports.InputDestination || (exports.InputDestination = {}));
var InputClass;
(function (InputClass) {
    InputClass["SINGLE_PIPELINE"] = "SINGLE_PIPELINE";
    InputClass["STANDARD"] = "STANDARD";
})(InputClass = exports.InputClass || (exports.InputClass = {}));
var InputDeviceSettings;
(function (InputDeviceSettings) {
    /**
     * @internal
     */
    InputDeviceSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceSettings = exports.InputDeviceSettings || (exports.InputDeviceSettings = {}));
var InputSourceType;
(function (InputSourceType) {
    InputSourceType["DYNAMIC"] = "DYNAMIC";
    InputSourceType["STATIC"] = "STATIC";
})(InputSourceType = exports.InputSourceType || (exports.InputSourceType = {}));
var MediaConnectFlow;
(function (MediaConnectFlow) {
    /**
     * @internal
     */
    MediaConnectFlow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaConnectFlow = exports.MediaConnectFlow || (exports.MediaConnectFlow = {}));
var InputSource;
(function (InputSource) {
    /**
     * @internal
     */
    InputSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSource = exports.InputSource || (exports.InputSource = {}));
var InputState;
(function (InputState) {
    InputState["ATTACHED"] = "ATTACHED";
    InputState["CREATING"] = "CREATING";
    InputState["DELETED"] = "DELETED";
    InputState["DELETING"] = "DELETING";
    InputState["DETACHED"] = "DETACHED";
})(InputState = exports.InputState || (exports.InputState = {}));
var InputType;
(function (InputType) {
    InputType["AWS_CDI"] = "AWS_CDI";
    InputType["INPUT_DEVICE"] = "INPUT_DEVICE";
    InputType["MEDIACONNECT"] = "MEDIACONNECT";
    InputType["MP4_FILE"] = "MP4_FILE";
    InputType["RTMP_PULL"] = "RTMP_PULL";
    InputType["RTMP_PUSH"] = "RTMP_PUSH";
    InputType["RTP_PUSH"] = "RTP_PUSH";
    InputType["UDP_PUSH"] = "UDP_PUSH";
    InputType["URL_PULL"] = "URL_PULL";
})(InputType = exports.InputType || (exports.InputType = {}));
var Input;
(function (Input) {
    /**
     * @internal
     */
    Input.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Input = exports.Input || (exports.Input = {}));
var InputDestinationRequest;
(function (InputDestinationRequest) {
    /**
     * @internal
     */
    InputDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDestinationRequest = exports.InputDestinationRequest || (exports.InputDestinationRequest = {}));
var InputDeviceRequest;
(function (InputDeviceRequest) {
    /**
     * @internal
     */
    InputDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceRequest = exports.InputDeviceRequest || (exports.InputDeviceRequest = {}));
var InputDeviceConnectionState;
(function (InputDeviceConnectionState) {
    InputDeviceConnectionState["CONNECTED"] = "CONNECTED";
    InputDeviceConnectionState["DISCONNECTED"] = "DISCONNECTED";
})(InputDeviceConnectionState = exports.InputDeviceConnectionState || (exports.InputDeviceConnectionState = {}));
var DeviceSettingsSyncState;
(function (DeviceSettingsSyncState) {
    DeviceSettingsSyncState["SYNCED"] = "SYNCED";
    DeviceSettingsSyncState["SYNCING"] = "SYNCING";
})(DeviceSettingsSyncState = exports.DeviceSettingsSyncState || (exports.DeviceSettingsSyncState = {}));
var DeviceUpdateStatus;
(function (DeviceUpdateStatus) {
    DeviceUpdateStatus["NOT_UP_TO_DATE"] = "NOT_UP_TO_DATE";
    DeviceUpdateStatus["UP_TO_DATE"] = "UP_TO_DATE";
})(DeviceUpdateStatus = exports.DeviceUpdateStatus || (exports.DeviceUpdateStatus = {}));
var InputDeviceActiveInput;
(function (InputDeviceActiveInput) {
    InputDeviceActiveInput["HDMI"] = "HDMI";
    InputDeviceActiveInput["SDI"] = "SDI";
})(InputDeviceActiveInput = exports.InputDeviceActiveInput || (exports.InputDeviceActiveInput = {}));
var InputDeviceConfiguredInput;
(function (InputDeviceConfiguredInput) {
    InputDeviceConfiguredInput["AUTO"] = "AUTO";
    InputDeviceConfiguredInput["HDMI"] = "HDMI";
    InputDeviceConfiguredInput["SDI"] = "SDI";
})(InputDeviceConfiguredInput = exports.InputDeviceConfiguredInput || (exports.InputDeviceConfiguredInput = {}));
var InputDeviceState;
(function (InputDeviceState) {
    InputDeviceState["IDLE"] = "IDLE";
    InputDeviceState["STREAMING"] = "STREAMING";
})(InputDeviceState = exports.InputDeviceState || (exports.InputDeviceState = {}));
var InputDeviceScanType;
(function (InputDeviceScanType) {
    InputDeviceScanType["INTERLACED"] = "INTERLACED";
    InputDeviceScanType["PROGRESSIVE"] = "PROGRESSIVE";
})(InputDeviceScanType = exports.InputDeviceScanType || (exports.InputDeviceScanType = {}));
var InputDeviceHdSettings;
(function (InputDeviceHdSettings) {
    /**
     * @internal
     */
    InputDeviceHdSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceHdSettings = exports.InputDeviceHdSettings || (exports.InputDeviceHdSettings = {}));
var InputDeviceIpScheme;
(function (InputDeviceIpScheme) {
    InputDeviceIpScheme["DHCP"] = "DHCP";
    InputDeviceIpScheme["STATIC"] = "STATIC";
})(InputDeviceIpScheme = exports.InputDeviceIpScheme || (exports.InputDeviceIpScheme = {}));
var InputDeviceNetworkSettings;
(function (InputDeviceNetworkSettings) {
    /**
     * @internal
     */
    InputDeviceNetworkSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceNetworkSettings = exports.InputDeviceNetworkSettings || (exports.InputDeviceNetworkSettings = {}));
var InputDeviceType;
(function (InputDeviceType) {
    InputDeviceType["HD"] = "HD";
})(InputDeviceType = exports.InputDeviceType || (exports.InputDeviceType = {}));
var InputDeviceUhdSettings;
(function (InputDeviceUhdSettings) {
    /**
     * @internal
     */
    InputDeviceUhdSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceUhdSettings = exports.InputDeviceUhdSettings || (exports.InputDeviceUhdSettings = {}));
var InputDeviceSummary;
(function (InputDeviceSummary) {
    /**
     * @internal
     */
    InputDeviceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDeviceSummary = exports.InputDeviceSummary || (exports.InputDeviceSummary = {}));
var InputSecurityGroupState;
(function (InputSecurityGroupState) {
    InputSecurityGroupState["DELETED"] = "DELETED";
    InputSecurityGroupState["IDLE"] = "IDLE";
    InputSecurityGroupState["IN_USE"] = "IN_USE";
    InputSecurityGroupState["UPDATING"] = "UPDATING";
})(InputSecurityGroupState = exports.InputSecurityGroupState || (exports.InputSecurityGroupState = {}));
var InputWhitelistRule;
(function (InputWhitelistRule) {
    /**
     * @internal
     */
    InputWhitelistRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputWhitelistRule = exports.InputWhitelistRule || (exports.InputWhitelistRule = {}));
var InputSecurityGroup;
(function (InputSecurityGroup) {
    /**
     * @internal
     */
    InputSecurityGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSecurityGroup = exports.InputSecurityGroup || (exports.InputSecurityGroup = {}));
var InputSourceRequest;
(function (InputSourceRequest) {
    /**
     * @internal
     */
    InputSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputSourceRequest = exports.InputSourceRequest || (exports.InputSourceRequest = {}));
var InputWhitelistRuleCidr;
(function (InputWhitelistRuleCidr) {
    /**
     * @internal
     */
    InputWhitelistRuleCidr.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputWhitelistRuleCidr = exports.InputWhitelistRuleCidr || (exports.InputWhitelistRuleCidr = {}));
var MediaConnectFlowRequest;
(function (MediaConnectFlowRequest) {
    /**
     * @internal
     */
    MediaConnectFlowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaConnectFlowRequest = exports.MediaConnectFlowRequest || (exports.MediaConnectFlowRequest = {}));
var MultiplexMediaConnectOutputDestinationSettings;
(function (MultiplexMediaConnectOutputDestinationSettings) {
    /**
     * @internal
     */
    MultiplexMediaConnectOutputDestinationSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexMediaConnectOutputDestinationSettings = exports.MultiplexMediaConnectOutputDestinationSettings || (exports.MultiplexMediaConnectOutputDestinationSettings = {}));
var MultiplexOutputDestination;
(function (MultiplexOutputDestination) {
    /**
     * @internal
     */
    MultiplexOutputDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexOutputDestination = exports.MultiplexOutputDestination || (exports.MultiplexOutputDestination = {}));
var MultiplexProgramPipelineDetail;
(function (MultiplexProgramPipelineDetail) {
    /**
     * @internal
     */
    MultiplexProgramPipelineDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgramPipelineDetail = exports.MultiplexProgramPipelineDetail || (exports.MultiplexProgramPipelineDetail = {}));
var MultiplexProgramSummary;
(function (MultiplexProgramSummary) {
    /**
     * @internal
     */
    MultiplexProgramSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexProgramSummary = exports.MultiplexProgramSummary || (exports.MultiplexProgramSummary = {}));
var MultiplexSettingsSummary;
(function (MultiplexSettingsSummary) {
    /**
     * @internal
     */
    MultiplexSettingsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexSettingsSummary = exports.MultiplexSettingsSummary || (exports.MultiplexSettingsSummary = {}));
var MultiplexState;
(function (MultiplexState) {
    MultiplexState["CREATE_FAILED"] = "CREATE_FAILED";
    MultiplexState["CREATING"] = "CREATING";
    MultiplexState["DELETED"] = "DELETED";
    MultiplexState["DELETING"] = "DELETING";
    MultiplexState["IDLE"] = "IDLE";
    MultiplexState["RECOVERING"] = "RECOVERING";
    MultiplexState["RUNNING"] = "RUNNING";
    MultiplexState["STARTING"] = "STARTING";
    MultiplexState["STOPPING"] = "STOPPING";
})(MultiplexState = exports.MultiplexState || (exports.MultiplexState = {}));
var MultiplexSummary;
(function (MultiplexSummary) {
    /**
     * @internal
     */
    MultiplexSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexSummary = exports.MultiplexSummary || (exports.MultiplexSummary = {}));
var OfferingDurationUnits;
(function (OfferingDurationUnits) {
    OfferingDurationUnits["MONTHS"] = "MONTHS";
})(OfferingDurationUnits = exports.OfferingDurationUnits || (exports.OfferingDurationUnits = {}));
var OfferingType;
(function (OfferingType) {
    OfferingType["NO_UPFRONT"] = "NO_UPFRONT";
})(OfferingType = exports.OfferingType || (exports.OfferingType = {}));
var ReservationCodec;
(function (ReservationCodec) {
    ReservationCodec["AUDIO"] = "AUDIO";
    ReservationCodec["AVC"] = "AVC";
    ReservationCodec["HEVC"] = "HEVC";
    ReservationCodec["LINK"] = "LINK";
    ReservationCodec["MPEG2"] = "MPEG2";
})(ReservationCodec = exports.ReservationCodec || (exports.ReservationCodec = {}));
var ReservationMaximumBitrate;
(function (ReservationMaximumBitrate) {
    ReservationMaximumBitrate["MAX_10_MBPS"] = "MAX_10_MBPS";
    ReservationMaximumBitrate["MAX_20_MBPS"] = "MAX_20_MBPS";
    ReservationMaximumBitrate["MAX_50_MBPS"] = "MAX_50_MBPS";
})(ReservationMaximumBitrate = exports.ReservationMaximumBitrate || (exports.ReservationMaximumBitrate = {}));
var ReservationMaximumFramerate;
(function (ReservationMaximumFramerate) {
    ReservationMaximumFramerate["MAX_30_FPS"] = "MAX_30_FPS";
    ReservationMaximumFramerate["MAX_60_FPS"] = "MAX_60_FPS";
})(ReservationMaximumFramerate = exports.ReservationMaximumFramerate || (exports.ReservationMaximumFramerate = {}));
var ReservationResolution;
(function (ReservationResolution) {
    ReservationResolution["FHD"] = "FHD";
    ReservationResolution["HD"] = "HD";
    ReservationResolution["SD"] = "SD";
    ReservationResolution["UHD"] = "UHD";
})(ReservationResolution = exports.ReservationResolution || (exports.ReservationResolution = {}));
var ReservationResourceType;
(function (ReservationResourceType) {
    ReservationResourceType["CHANNEL"] = "CHANNEL";
    ReservationResourceType["INPUT"] = "INPUT";
    ReservationResourceType["MULTIPLEX"] = "MULTIPLEX";
    ReservationResourceType["OUTPUT"] = "OUTPUT";
})(ReservationResourceType = exports.ReservationResourceType || (exports.ReservationResourceType = {}));
var ReservationSpecialFeature;
(function (ReservationSpecialFeature) {
    ReservationSpecialFeature["ADVANCED_AUDIO"] = "ADVANCED_AUDIO";
    ReservationSpecialFeature["AUDIO_NORMALIZATION"] = "AUDIO_NORMALIZATION";
})(ReservationSpecialFeature = exports.ReservationSpecialFeature || (exports.ReservationSpecialFeature = {}));
var ReservationVideoQuality;
(function (ReservationVideoQuality) {
    ReservationVideoQuality["ENHANCED"] = "ENHANCED";
    ReservationVideoQuality["PREMIUM"] = "PREMIUM";
    ReservationVideoQuality["STANDARD"] = "STANDARD";
})(ReservationVideoQuality = exports.ReservationVideoQuality || (exports.ReservationVideoQuality = {}));
var ReservationResourceSpecification;
(function (ReservationResourceSpecification) {
    /**
     * @internal
     */
    ReservationResourceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationResourceSpecification = exports.ReservationResourceSpecification || (exports.ReservationResourceSpecification = {}));
var Offering;
(function (Offering) {
    /**
     * @internal
     */
    Offering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Offering = exports.Offering || (exports.Offering = {}));
var M2tsAbsentInputAudioBehavior;
(function (M2tsAbsentInputAudioBehavior) {
    M2tsAbsentInputAudioBehavior["DROP"] = "DROP";
    M2tsAbsentInputAudioBehavior["ENCODE_SILENCE"] = "ENCODE_SILENCE";
})(M2tsAbsentInputAudioBehavior = exports.M2tsAbsentInputAudioBehavior || (exports.M2tsAbsentInputAudioBehavior = {}));
var M2tsArib;
(function (M2tsArib) {
    M2tsArib["DISABLED"] = "DISABLED";
    M2tsArib["ENABLED"] = "ENABLED";
})(M2tsArib = exports.M2tsArib || (exports.M2tsArib = {}));
var M2tsAribCaptionsPidControl;
(function (M2tsAribCaptionsPidControl) {
    M2tsAribCaptionsPidControl["AUTO"] = "AUTO";
    M2tsAribCaptionsPidControl["USE_CONFIGURED"] = "USE_CONFIGURED";
})(M2tsAribCaptionsPidControl = exports.M2tsAribCaptionsPidControl || (exports.M2tsAribCaptionsPidControl = {}));
var M2tsAudioBufferModel;
(function (M2tsAudioBufferModel) {
    M2tsAudioBufferModel["ATSC"] = "ATSC";
    M2tsAudioBufferModel["DVB"] = "DVB";
})(M2tsAudioBufferModel = exports.M2tsAudioBufferModel || (exports.M2tsAudioBufferModel = {}));
var M2tsAudioStreamType;
(function (M2tsAudioStreamType) {
    M2tsAudioStreamType["ATSC"] = "ATSC";
    M2tsAudioStreamType["DVB"] = "DVB";
})(M2tsAudioStreamType = exports.M2tsAudioStreamType || (exports.M2tsAudioStreamType = {}));
var M2tsBufferModel;
(function (M2tsBufferModel) {
    M2tsBufferModel["MULTIPLEX"] = "MULTIPLEX";
    M2tsBufferModel["NONE"] = "NONE";
})(M2tsBufferModel = exports.M2tsBufferModel || (exports.M2tsBufferModel = {}));
var M2tsCcDescriptor;
(function (M2tsCcDescriptor) {
    M2tsCcDescriptor["DISABLED"] = "DISABLED";
    M2tsCcDescriptor["ENABLED"] = "ENABLED";
})(M2tsCcDescriptor = exports.M2tsCcDescriptor || (exports.M2tsCcDescriptor = {}));
var DvbNitSettings;
(function (DvbNitSettings) {
    /**
     * @internal
     */
    DvbNitSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbNitSettings = exports.DvbNitSettings || (exports.DvbNitSettings = {}));
var DvbSdtOutputSdt;
(function (DvbSdtOutputSdt) {
    DvbSdtOutputSdt["SDT_FOLLOW"] = "SDT_FOLLOW";
    DvbSdtOutputSdt["SDT_FOLLOW_IF_PRESENT"] = "SDT_FOLLOW_IF_PRESENT";
    DvbSdtOutputSdt["SDT_MANUAL"] = "SDT_MANUAL";
    DvbSdtOutputSdt["SDT_NONE"] = "SDT_NONE";
})(DvbSdtOutputSdt = exports.DvbSdtOutputSdt || (exports.DvbSdtOutputSdt = {}));
var DvbSdtSettings;
(function (DvbSdtSettings) {
    /**
     * @internal
     */
    DvbSdtSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbSdtSettings = exports.DvbSdtSettings || (exports.DvbSdtSettings = {}));
var DvbTdtSettings;
(function (DvbTdtSettings) {
    /**
     * @internal
     */
    DvbTdtSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DvbTdtSettings = exports.DvbTdtSettings || (exports.DvbTdtSettings = {}));
var M2tsEbifControl;
(function (M2tsEbifControl) {
    M2tsEbifControl["NONE"] = "NONE";
    M2tsEbifControl["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsEbifControl = exports.M2tsEbifControl || (exports.M2tsEbifControl = {}));
var M2tsAudioInterval;
(function (M2tsAudioInterval) {
    M2tsAudioInterval["VIDEO_AND_FIXED_INTERVALS"] = "VIDEO_AND_FIXED_INTERVALS";
    M2tsAudioInterval["VIDEO_INTERVAL"] = "VIDEO_INTERVAL";
})(M2tsAudioInterval = exports.M2tsAudioInterval || (exports.M2tsAudioInterval = {}));
var M2tsEbpPlacement;
(function (M2tsEbpPlacement) {
    M2tsEbpPlacement["VIDEO_AND_AUDIO_PIDS"] = "VIDEO_AND_AUDIO_PIDS";
    M2tsEbpPlacement["VIDEO_PID"] = "VIDEO_PID";
})(M2tsEbpPlacement = exports.M2tsEbpPlacement || (exports.M2tsEbpPlacement = {}));
var M2tsEsRateInPes;
(function (M2tsEsRateInPes) {
    M2tsEsRateInPes["EXCLUDE"] = "EXCLUDE";
    M2tsEsRateInPes["INCLUDE"] = "INCLUDE";
})(M2tsEsRateInPes = exports.M2tsEsRateInPes || (exports.M2tsEsRateInPes = {}));
var M2tsKlv;
(function (M2tsKlv) {
    M2tsKlv["NONE"] = "NONE";
    M2tsKlv["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsKlv = exports.M2tsKlv || (exports.M2tsKlv = {}));
var M2tsNielsenId3Behavior;
(function (M2tsNielsenId3Behavior) {
    M2tsNielsenId3Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M2tsNielsenId3Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsNielsenId3Behavior = exports.M2tsNielsenId3Behavior || (exports.M2tsNielsenId3Behavior = {}));
var M2tsPcrControl;
(function (M2tsPcrControl) {
    M2tsPcrControl["CONFIGURED_PCR_PERIOD"] = "CONFIGURED_PCR_PERIOD";
    M2tsPcrControl["PCR_EVERY_PES_PACKET"] = "PCR_EVERY_PES_PACKET";
})(M2tsPcrControl = exports.M2tsPcrControl || (exports.M2tsPcrControl = {}));
var M2tsRateMode;
(function (M2tsRateMode) {
    M2tsRateMode["CBR"] = "CBR";
    M2tsRateMode["VBR"] = "VBR";
})(M2tsRateMode = exports.M2tsRateMode || (exports.M2tsRateMode = {}));
var M2tsScte35Control;
(function (M2tsScte35Control) {
    M2tsScte35Control["NONE"] = "NONE";
    M2tsScte35Control["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsScte35Control = exports.M2tsScte35Control || (exports.M2tsScte35Control = {}));
var M2tsSegmentationMarkers;
(function (M2tsSegmentationMarkers) {
    M2tsSegmentationMarkers["EBP"] = "EBP";
    M2tsSegmentationMarkers["EBP_LEGACY"] = "EBP_LEGACY";
    M2tsSegmentationMarkers["NONE"] = "NONE";
    M2tsSegmentationMarkers["PSI_SEGSTART"] = "PSI_SEGSTART";
    M2tsSegmentationMarkers["RAI_ADAPT"] = "RAI_ADAPT";
    M2tsSegmentationMarkers["RAI_SEGSTART"] = "RAI_SEGSTART";
})(M2tsSegmentationMarkers = exports.M2tsSegmentationMarkers || (exports.M2tsSegmentationMarkers = {}));
var M2tsSegmentationStyle;
(function (M2tsSegmentationStyle) {
    M2tsSegmentationStyle["MAINTAIN_CADENCE"] = "MAINTAIN_CADENCE";
    M2tsSegmentationStyle["RESET_CADENCE"] = "RESET_CADENCE";
})(M2tsSegmentationStyle = exports.M2tsSegmentationStyle || (exports.M2tsSegmentationStyle = {}));
var M2tsTimedMetadataBehavior;
(function (M2tsTimedMetadataBehavior) {
    M2tsTimedMetadataBehavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M2tsTimedMetadataBehavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M2tsTimedMetadataBehavior = exports.M2tsTimedMetadataBehavior || (exports.M2tsTimedMetadataBehavior = {}));
var M2tsSettings;
(function (M2tsSettings) {
    /**
     * @internal
     */
    M2tsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(M2tsSettings = exports.M2tsSettings || (exports.M2tsSettings = {}));
var RawSettings;
(function (RawSettings) {
    /**
     * @internal
     */
    RawSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RawSettings = exports.RawSettings || (exports.RawSettings = {}));
var ArchiveContainerSettings;
(function (ArchiveContainerSettings) {
    /**
     * @internal
     */
    ArchiveContainerSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveContainerSettings = exports.ArchiveContainerSettings || (exports.ArchiveContainerSettings = {}));
var ArchiveOutputSettings;
(function (ArchiveOutputSettings) {
    /**
     * @internal
     */
    ArchiveOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveOutputSettings = exports.ArchiveOutputSettings || (exports.ArchiveOutputSettings = {}));
var FrameCaptureOutputSettings;
(function (FrameCaptureOutputSettings) {
    /**
     * @internal
     */
    FrameCaptureOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureOutputSettings = exports.FrameCaptureOutputSettings || (exports.FrameCaptureOutputSettings = {}));
var HlsH265PackagingType;
(function (HlsH265PackagingType) {
    HlsH265PackagingType["HEV1"] = "HEV1";
    HlsH265PackagingType["HVC1"] = "HVC1";
})(HlsH265PackagingType = exports.HlsH265PackagingType || (exports.HlsH265PackagingType = {}));
var AudioOnlyHlsTrackType;
(function (AudioOnlyHlsTrackType) {
    AudioOnlyHlsTrackType["ALTERNATE_AUDIO_AUTO_SELECT"] = "ALTERNATE_AUDIO_AUTO_SELECT";
    AudioOnlyHlsTrackType["ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"] = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT";
    AudioOnlyHlsTrackType["ALTERNATE_AUDIO_NOT_AUTO_SELECT"] = "ALTERNATE_AUDIO_NOT_AUTO_SELECT";
    AudioOnlyHlsTrackType["AUDIO_ONLY_VARIANT_STREAM"] = "AUDIO_ONLY_VARIANT_STREAM";
})(AudioOnlyHlsTrackType = exports.AudioOnlyHlsTrackType || (exports.AudioOnlyHlsTrackType = {}));
var AudioOnlyHlsSegmentType;
(function (AudioOnlyHlsSegmentType) {
    AudioOnlyHlsSegmentType["AAC"] = "AAC";
    AudioOnlyHlsSegmentType["FMP4"] = "FMP4";
})(AudioOnlyHlsSegmentType = exports.AudioOnlyHlsSegmentType || (exports.AudioOnlyHlsSegmentType = {}));
var AudioOnlyHlsSettings;
(function (AudioOnlyHlsSettings) {
    /**
     * @internal
     */
    AudioOnlyHlsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AudioOnlyHlsSettings = exports.AudioOnlyHlsSettings || (exports.AudioOnlyHlsSettings = {}));
var Fmp4NielsenId3Behavior;
(function (Fmp4NielsenId3Behavior) {
    Fmp4NielsenId3Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    Fmp4NielsenId3Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(Fmp4NielsenId3Behavior = exports.Fmp4NielsenId3Behavior || (exports.Fmp4NielsenId3Behavior = {}));
var Fmp4TimedMetadataBehavior;
(function (Fmp4TimedMetadataBehavior) {
    Fmp4TimedMetadataBehavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    Fmp4TimedMetadataBehavior["PASSTHROUGH"] = "PASSTHROUGH";
})(Fmp4TimedMetadataBehavior = exports.Fmp4TimedMetadataBehavior || (exports.Fmp4TimedMetadataBehavior = {}));
var Fmp4HlsSettings;
(function (Fmp4HlsSettings) {
    /**
     * @internal
     */
    Fmp4HlsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Fmp4HlsSettings = exports.Fmp4HlsSettings || (exports.Fmp4HlsSettings = {}));
var FrameCaptureHlsSettings;
(function (FrameCaptureHlsSettings) {
    /**
     * @internal
     */
    FrameCaptureHlsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureHlsSettings = exports.FrameCaptureHlsSettings || (exports.FrameCaptureHlsSettings = {}));
var M3u8NielsenId3Behavior;
(function (M3u8NielsenId3Behavior) {
    M3u8NielsenId3Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M3u8NielsenId3Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8NielsenId3Behavior = exports.M3u8NielsenId3Behavior || (exports.M3u8NielsenId3Behavior = {}));
var M3u8PcrControl;
(function (M3u8PcrControl) {
    M3u8PcrControl["CONFIGURED_PCR_PERIOD"] = "CONFIGURED_PCR_PERIOD";
    M3u8PcrControl["PCR_EVERY_PES_PACKET"] = "PCR_EVERY_PES_PACKET";
})(M3u8PcrControl = exports.M3u8PcrControl || (exports.M3u8PcrControl = {}));
var M3u8Scte35Behavior;
(function (M3u8Scte35Behavior) {
    M3u8Scte35Behavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M3u8Scte35Behavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8Scte35Behavior = exports.M3u8Scte35Behavior || (exports.M3u8Scte35Behavior = {}));
var M3u8TimedMetadataBehavior;
(function (M3u8TimedMetadataBehavior) {
    M3u8TimedMetadataBehavior["NO_PASSTHROUGH"] = "NO_PASSTHROUGH";
    M3u8TimedMetadataBehavior["PASSTHROUGH"] = "PASSTHROUGH";
})(M3u8TimedMetadataBehavior = exports.M3u8TimedMetadataBehavior || (exports.M3u8TimedMetadataBehavior = {}));
var M3u8Settings;
(function (M3u8Settings) {
    /**
     * @internal
     */
    M3u8Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(M3u8Settings = exports.M3u8Settings || (exports.M3u8Settings = {}));
var StandardHlsSettings;
(function (StandardHlsSettings) {
    /**
     * @internal
     */
    StandardHlsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StandardHlsSettings = exports.StandardHlsSettings || (exports.StandardHlsSettings = {}));
var HlsSettings;
(function (HlsSettings) {
    /**
     * @internal
     */
    HlsSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsSettings = exports.HlsSettings || (exports.HlsSettings = {}));
var HlsOutputSettings;
(function (HlsOutputSettings) {
    /**
     * @internal
     */
    HlsOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsOutputSettings = exports.HlsOutputSettings || (exports.HlsOutputSettings = {}));
var MediaPackageOutputSettings;
(function (MediaPackageOutputSettings) {
    /**
     * @internal
     */
    MediaPackageOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaPackageOutputSettings = exports.MediaPackageOutputSettings || (exports.MediaPackageOutputSettings = {}));
var MsSmoothH265PackagingType;
(function (MsSmoothH265PackagingType) {
    MsSmoothH265PackagingType["HEV1"] = "HEV1";
    MsSmoothH265PackagingType["HVC1"] = "HVC1";
})(MsSmoothH265PackagingType = exports.MsSmoothH265PackagingType || (exports.MsSmoothH265PackagingType = {}));
var MsSmoothOutputSettings;
(function (MsSmoothOutputSettings) {
    /**
     * @internal
     */
    MsSmoothOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MsSmoothOutputSettings = exports.MsSmoothOutputSettings || (exports.MsSmoothOutputSettings = {}));
var OutputLocationRef;
(function (OutputLocationRef) {
    /**
     * @internal
     */
    OutputLocationRef.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputLocationRef = exports.OutputLocationRef || (exports.OutputLocationRef = {}));
var MultiplexOutputSettings;
(function (MultiplexOutputSettings) {
    /**
     * @internal
     */
    MultiplexOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexOutputSettings = exports.MultiplexOutputSettings || (exports.MultiplexOutputSettings = {}));
var RtmpOutputCertificateMode;
(function (RtmpOutputCertificateMode) {
    RtmpOutputCertificateMode["SELF_SIGNED"] = "SELF_SIGNED";
    RtmpOutputCertificateMode["VERIFY_AUTHENTICITY"] = "VERIFY_AUTHENTICITY";
})(RtmpOutputCertificateMode = exports.RtmpOutputCertificateMode || (exports.RtmpOutputCertificateMode = {}));
var RtmpOutputSettings;
(function (RtmpOutputSettings) {
    /**
     * @internal
     */
    RtmpOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RtmpOutputSettings = exports.RtmpOutputSettings || (exports.RtmpOutputSettings = {}));
var UdpContainerSettings;
(function (UdpContainerSettings) {
    /**
     * @internal
     */
    UdpContainerSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UdpContainerSettings = exports.UdpContainerSettings || (exports.UdpContainerSettings = {}));
var FecOutputIncludeFec;
(function (FecOutputIncludeFec) {
    FecOutputIncludeFec["COLUMN"] = "COLUMN";
    FecOutputIncludeFec["COLUMN_AND_ROW"] = "COLUMN_AND_ROW";
})(FecOutputIncludeFec = exports.FecOutputIncludeFec || (exports.FecOutputIncludeFec = {}));
var FecOutputSettings;
(function (FecOutputSettings) {
    /**
     * @internal
     */
    FecOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FecOutputSettings = exports.FecOutputSettings || (exports.FecOutputSettings = {}));
var UdpOutputSettings;
(function (UdpOutputSettings) {
    /**
     * @internal
     */
    UdpOutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UdpOutputSettings = exports.UdpOutputSettings || (exports.UdpOutputSettings = {}));
var OutputSettings;
(function (OutputSettings) {
    /**
     * @internal
     */
    OutputSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputSettings = exports.OutputSettings || (exports.OutputSettings = {}));
var Output;
(function (Output) {
    /**
     * @internal
     */
    Output.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Output = exports.Output || (exports.Output = {}));
var S3CannedAcl;
(function (S3CannedAcl) {
    S3CannedAcl["AUTHENTICATED_READ"] = "AUTHENTICATED_READ";
    S3CannedAcl["BUCKET_OWNER_FULL_CONTROL"] = "BUCKET_OWNER_FULL_CONTROL";
    S3CannedAcl["BUCKET_OWNER_READ"] = "BUCKET_OWNER_READ";
    S3CannedAcl["PUBLIC_READ"] = "PUBLIC_READ";
})(S3CannedAcl = exports.S3CannedAcl || (exports.S3CannedAcl = {}));
var ArchiveS3Settings;
(function (ArchiveS3Settings) {
    /**
     * @internal
     */
    ArchiveS3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveS3Settings = exports.ArchiveS3Settings || (exports.ArchiveS3Settings = {}));
var ArchiveCdnSettings;
(function (ArchiveCdnSettings) {
    /**
     * @internal
     */
    ArchiveCdnSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveCdnSettings = exports.ArchiveCdnSettings || (exports.ArchiveCdnSettings = {}));
var ArchiveGroupSettings;
(function (ArchiveGroupSettings) {
    /**
     * @internal
     */
    ArchiveGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchiveGroupSettings = exports.ArchiveGroupSettings || (exports.ArchiveGroupSettings = {}));
var FrameCaptureS3Settings;
(function (FrameCaptureS3Settings) {
    /**
     * @internal
     */
    FrameCaptureS3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureS3Settings = exports.FrameCaptureS3Settings || (exports.FrameCaptureS3Settings = {}));
var FrameCaptureCdnSettings;
(function (FrameCaptureCdnSettings) {
    /**
     * @internal
     */
    FrameCaptureCdnSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureCdnSettings = exports.FrameCaptureCdnSettings || (exports.FrameCaptureCdnSettings = {}));
var FrameCaptureGroupSettings;
(function (FrameCaptureGroupSettings) {
    /**
     * @internal
     */
    FrameCaptureGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FrameCaptureGroupSettings = exports.FrameCaptureGroupSettings || (exports.FrameCaptureGroupSettings = {}));
var HlsCaptionLanguageSetting;
(function (HlsCaptionLanguageSetting) {
    HlsCaptionLanguageSetting["INSERT"] = "INSERT";
    HlsCaptionLanguageSetting["NONE"] = "NONE";
    HlsCaptionLanguageSetting["OMIT"] = "OMIT";
})(HlsCaptionLanguageSetting = exports.HlsCaptionLanguageSetting || (exports.HlsCaptionLanguageSetting = {}));
var HlsClientCache;
(function (HlsClientCache) {
    HlsClientCache["DISABLED"] = "DISABLED";
    HlsClientCache["ENABLED"] = "ENABLED";
})(HlsClientCache = exports.HlsClientCache || (exports.HlsClientCache = {}));
var HlsCodecSpecification;
(function (HlsCodecSpecification) {
    HlsCodecSpecification["RFC_4281"] = "RFC_4281";
    HlsCodecSpecification["RFC_6381"] = "RFC_6381";
})(HlsCodecSpecification = exports.HlsCodecSpecification || (exports.HlsCodecSpecification = {}));
var HlsDirectoryStructure;
(function (HlsDirectoryStructure) {
    HlsDirectoryStructure["SINGLE_DIRECTORY"] = "SINGLE_DIRECTORY";
    HlsDirectoryStructure["SUBDIRECTORY_PER_STREAM"] = "SUBDIRECTORY_PER_STREAM";
})(HlsDirectoryStructure = exports.HlsDirectoryStructure || (exports.HlsDirectoryStructure = {}));
var HlsDiscontinuityTags;
(function (HlsDiscontinuityTags) {
    HlsDiscontinuityTags["INSERT"] = "INSERT";
    HlsDiscontinuityTags["NEVER_INSERT"] = "NEVER_INSERT";
})(HlsDiscontinuityTags = exports.HlsDiscontinuityTags || (exports.HlsDiscontinuityTags = {}));
var HlsEncryptionType;
(function (HlsEncryptionType) {
    HlsEncryptionType["AES128"] = "AES128";
    HlsEncryptionType["SAMPLE_AES"] = "SAMPLE_AES";
})(HlsEncryptionType = exports.HlsEncryptionType || (exports.HlsEncryptionType = {}));
var HlsAkamaiHttpTransferMode;
(function (HlsAkamaiHttpTransferMode) {
    HlsAkamaiHttpTransferMode["CHUNKED"] = "CHUNKED";
    HlsAkamaiHttpTransferMode["NON_CHUNKED"] = "NON_CHUNKED";
})(HlsAkamaiHttpTransferMode = exports.HlsAkamaiHttpTransferMode || (exports.HlsAkamaiHttpTransferMode = {}));
var HlsAkamaiSettings;
(function (HlsAkamaiSettings) {
    /**
     * @internal
     */
    HlsAkamaiSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsAkamaiSettings = exports.HlsAkamaiSettings || (exports.HlsAkamaiSettings = {}));
var HlsBasicPutSettings;
(function (HlsBasicPutSettings) {
    /**
     * @internal
     */
    HlsBasicPutSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsBasicPutSettings = exports.HlsBasicPutSettings || (exports.HlsBasicPutSettings = {}));
var HlsMediaStoreStorageClass;
(function (HlsMediaStoreStorageClass) {
    HlsMediaStoreStorageClass["TEMPORAL"] = "TEMPORAL";
})(HlsMediaStoreStorageClass = exports.HlsMediaStoreStorageClass || (exports.HlsMediaStoreStorageClass = {}));
var HlsMediaStoreSettings;
(function (HlsMediaStoreSettings) {
    /**
     * @internal
     */
    HlsMediaStoreSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsMediaStoreSettings = exports.HlsMediaStoreSettings || (exports.HlsMediaStoreSettings = {}));
var HlsS3Settings;
(function (HlsS3Settings) {
    /**
     * @internal
     */
    HlsS3Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsS3Settings = exports.HlsS3Settings || (exports.HlsS3Settings = {}));
var HlsWebdavHttpTransferMode;
(function (HlsWebdavHttpTransferMode) {
    HlsWebdavHttpTransferMode["CHUNKED"] = "CHUNKED";
    HlsWebdavHttpTransferMode["NON_CHUNKED"] = "NON_CHUNKED";
})(HlsWebdavHttpTransferMode = exports.HlsWebdavHttpTransferMode || (exports.HlsWebdavHttpTransferMode = {}));
var HlsWebdavSettings;
(function (HlsWebdavSettings) {
    /**
     * @internal
     */
    HlsWebdavSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsWebdavSettings = exports.HlsWebdavSettings || (exports.HlsWebdavSettings = {}));
var HlsCdnSettings;
(function (HlsCdnSettings) {
    /**
     * @internal
     */
    HlsCdnSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsCdnSettings = exports.HlsCdnSettings || (exports.HlsCdnSettings = {}));
var HlsId3SegmentTaggingState;
(function (HlsId3SegmentTaggingState) {
    HlsId3SegmentTaggingState["DISABLED"] = "DISABLED";
    HlsId3SegmentTaggingState["ENABLED"] = "ENABLED";
})(HlsId3SegmentTaggingState = exports.HlsId3SegmentTaggingState || (exports.HlsId3SegmentTaggingState = {}));
var IFrameOnlyPlaylistType;
(function (IFrameOnlyPlaylistType) {
    IFrameOnlyPlaylistType["DISABLED"] = "DISABLED";
    IFrameOnlyPlaylistType["STANDARD"] = "STANDARD";
})(IFrameOnlyPlaylistType = exports.IFrameOnlyPlaylistType || (exports.IFrameOnlyPlaylistType = {}));
var HlsIncompleteSegmentBehavior;
(function (HlsIncompleteSegmentBehavior) {
    HlsIncompleteSegmentBehavior["AUTO"] = "AUTO";
    HlsIncompleteSegmentBehavior["SUPPRESS"] = "SUPPRESS";
})(HlsIncompleteSegmentBehavior = exports.HlsIncompleteSegmentBehavior || (exports.HlsIncompleteSegmentBehavior = {}));
var InputLossActionForHlsOut;
(function (InputLossActionForHlsOut) {
    InputLossActionForHlsOut["EMIT_OUTPUT"] = "EMIT_OUTPUT";
    InputLossActionForHlsOut["PAUSE_OUTPUT"] = "PAUSE_OUTPUT";
})(InputLossActionForHlsOut = exports.InputLossActionForHlsOut || (exports.InputLossActionForHlsOut = {}));
var HlsIvInManifest;
(function (HlsIvInManifest) {
    HlsIvInManifest["EXCLUDE"] = "EXCLUDE";
    HlsIvInManifest["INCLUDE"] = "INCLUDE";
})(HlsIvInManifest = exports.HlsIvInManifest || (exports.HlsIvInManifest = {}));
var HlsIvSource;
(function (HlsIvSource) {
    HlsIvSource["EXPLICIT"] = "EXPLICIT";
    HlsIvSource["FOLLOWS_SEGMENT_NUMBER"] = "FOLLOWS_SEGMENT_NUMBER";
})(HlsIvSource = exports.HlsIvSource || (exports.HlsIvSource = {}));
var StaticKeySettings;
(function (StaticKeySettings) {
    /**
     * @internal
     */
    StaticKeySettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaticKeySettings = exports.StaticKeySettings || (exports.StaticKeySettings = {}));
var KeyProviderSettings;
(function (KeyProviderSettings) {
    /**
     * @internal
     */
    KeyProviderSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyProviderSettings = exports.KeyProviderSettings || (exports.KeyProviderSettings = {}));
var HlsManifestCompression;
(function (HlsManifestCompression) {
    HlsManifestCompression["GZIP"] = "GZIP";
    HlsManifestCompression["NONE"] = "NONE";
})(HlsManifestCompression = exports.HlsManifestCompression || (exports.HlsManifestCompression = {}));
var HlsManifestDurationFormat;
(function (HlsManifestDurationFormat) {
    HlsManifestDurationFormat["FLOATING_POINT"] = "FLOATING_POINT";
    HlsManifestDurationFormat["INTEGER"] = "INTEGER";
})(HlsManifestDurationFormat = exports.HlsManifestDurationFormat || (exports.HlsManifestDurationFormat = {}));
var HlsMode;
(function (HlsMode) {
    HlsMode["LIVE"] = "LIVE";
    HlsMode["VOD"] = "VOD";
})(HlsMode = exports.HlsMode || (exports.HlsMode = {}));
var HlsOutputSelection;
(function (HlsOutputSelection) {
    HlsOutputSelection["MANIFESTS_AND_SEGMENTS"] = "MANIFESTS_AND_SEGMENTS";
    HlsOutputSelection["SEGMENTS_ONLY"] = "SEGMENTS_ONLY";
    HlsOutputSelection["VARIANT_MANIFESTS_AND_SEGMENTS"] = "VARIANT_MANIFESTS_AND_SEGMENTS";
})(HlsOutputSelection = exports.HlsOutputSelection || (exports.HlsOutputSelection = {}));
var HlsProgramDateTime;
(function (HlsProgramDateTime) {
    HlsProgramDateTime["EXCLUDE"] = "EXCLUDE";
    HlsProgramDateTime["INCLUDE"] = "INCLUDE";
})(HlsProgramDateTime = exports.HlsProgramDateTime || (exports.HlsProgramDateTime = {}));
var HlsRedundantManifest;
(function (HlsRedundantManifest) {
    HlsRedundantManifest["DISABLED"] = "DISABLED";
    HlsRedundantManifest["ENABLED"] = "ENABLED";
})(HlsRedundantManifest = exports.HlsRedundantManifest || (exports.HlsRedundantManifest = {}));
var HlsSegmentationMode;
(function (HlsSegmentationMode) {
    HlsSegmentationMode["USE_INPUT_SEGMENTATION"] = "USE_INPUT_SEGMENTATION";
    HlsSegmentationMode["USE_SEGMENT_DURATION"] = "USE_SEGMENT_DURATION";
})(HlsSegmentationMode = exports.HlsSegmentationMode || (exports.HlsSegmentationMode = {}));
var HlsStreamInfResolution;
(function (HlsStreamInfResolution) {
    HlsStreamInfResolution["EXCLUDE"] = "EXCLUDE";
    HlsStreamInfResolution["INCLUDE"] = "INCLUDE";
})(HlsStreamInfResolution = exports.HlsStreamInfResolution || (exports.HlsStreamInfResolution = {}));
var HlsTimedMetadataId3Frame;
(function (HlsTimedMetadataId3Frame) {
    HlsTimedMetadataId3Frame["NONE"] = "NONE";
    HlsTimedMetadataId3Frame["PRIV"] = "PRIV";
    HlsTimedMetadataId3Frame["TDRL"] = "TDRL";
})(HlsTimedMetadataId3Frame = exports.HlsTimedMetadataId3Frame || (exports.HlsTimedMetadataId3Frame = {}));
var HlsTsFileMode;
(function (HlsTsFileMode) {
    HlsTsFileMode["SEGMENTED_FILES"] = "SEGMENTED_FILES";
    HlsTsFileMode["SINGLE_FILE"] = "SINGLE_FILE";
})(HlsTsFileMode = exports.HlsTsFileMode || (exports.HlsTsFileMode = {}));
var HlsGroupSettings;
(function (HlsGroupSettings) {
    /**
     * @internal
     */
    HlsGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HlsGroupSettings = exports.HlsGroupSettings || (exports.HlsGroupSettings = {}));
var MediaPackageGroupSettings;
(function (MediaPackageGroupSettings) {
    /**
     * @internal
     */
    MediaPackageGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MediaPackageGroupSettings = exports.MediaPackageGroupSettings || (exports.MediaPackageGroupSettings = {}));
var SmoothGroupAudioOnlyTimecodeControl;
(function (SmoothGroupAudioOnlyTimecodeControl) {
    SmoothGroupAudioOnlyTimecodeControl["PASSTHROUGH"] = "PASSTHROUGH";
    SmoothGroupAudioOnlyTimecodeControl["USE_CONFIGURED_CLOCK"] = "USE_CONFIGURED_CLOCK";
})(SmoothGroupAudioOnlyTimecodeControl = exports.SmoothGroupAudioOnlyTimecodeControl || (exports.SmoothGroupAudioOnlyTimecodeControl = {}));
var SmoothGroupCertificateMode;
(function (SmoothGroupCertificateMode) {
    SmoothGroupCertificateMode["SELF_SIGNED"] = "SELF_SIGNED";
    SmoothGroupCertificateMode["VERIFY_AUTHENTICITY"] = "VERIFY_AUTHENTICITY";
})(SmoothGroupCertificateMode = exports.SmoothGroupCertificateMode || (exports.SmoothGroupCertificateMode = {}));
var SmoothGroupEventIdMode;
(function (SmoothGroupEventIdMode) {
    SmoothGroupEventIdMode["NO_EVENT_ID"] = "NO_EVENT_ID";
    SmoothGroupEventIdMode["USE_CONFIGURED"] = "USE_CONFIGURED";
    SmoothGroupEventIdMode["USE_TIMESTAMP"] = "USE_TIMESTAMP";
})(SmoothGroupEventIdMode = exports.SmoothGroupEventIdMode || (exports.SmoothGroupEventIdMode = {}));
var SmoothGroupEventStopBehavior;
(function (SmoothGroupEventStopBehavior) {
    SmoothGroupEventStopBehavior["NONE"] = "NONE";
    SmoothGroupEventStopBehavior["SEND_EOS"] = "SEND_EOS";
})(SmoothGroupEventStopBehavior = exports.SmoothGroupEventStopBehavior || (exports.SmoothGroupEventStopBehavior = {}));
var InputLossActionForMsSmoothOut;
(function (InputLossActionForMsSmoothOut) {
    InputLossActionForMsSmoothOut["EMIT_OUTPUT"] = "EMIT_OUTPUT";
    InputLossActionForMsSmoothOut["PAUSE_OUTPUT"] = "PAUSE_OUTPUT";
})(InputLossActionForMsSmoothOut = exports.InputLossActionForMsSmoothOut || (exports.InputLossActionForMsSmoothOut = {}));
var SmoothGroupSegmentationMode;
(function (SmoothGroupSegmentationMode) {
    SmoothGroupSegmentationMode["USE_INPUT_SEGMENTATION"] = "USE_INPUT_SEGMENTATION";
    SmoothGroupSegmentationMode["USE_SEGMENT_DURATION"] = "USE_SEGMENT_DURATION";
})(SmoothGroupSegmentationMode = exports.SmoothGroupSegmentationMode || (exports.SmoothGroupSegmentationMode = {}));
var SmoothGroupSparseTrackType;
(function (SmoothGroupSparseTrackType) {
    SmoothGroupSparseTrackType["NONE"] = "NONE";
    SmoothGroupSparseTrackType["SCTE_35"] = "SCTE_35";
    SmoothGroupSparseTrackType["SCTE_35_WITHOUT_SEGMENTATION"] = "SCTE_35_WITHOUT_SEGMENTATION";
})(SmoothGroupSparseTrackType = exports.SmoothGroupSparseTrackType || (exports.SmoothGroupSparseTrackType = {}));
var SmoothGroupStreamManifestBehavior;
(function (SmoothGroupStreamManifestBehavior) {
    SmoothGroupStreamManifestBehavior["DO_NOT_SEND"] = "DO_NOT_SEND";
    SmoothGroupStreamManifestBehavior["SEND"] = "SEND";
})(SmoothGroupStreamManifestBehavior = exports.SmoothGroupStreamManifestBehavior || (exports.SmoothGroupStreamManifestBehavior = {}));
var SmoothGroupTimestampOffsetMode;
(function (SmoothGroupTimestampOffsetMode) {
    SmoothGroupTimestampOffsetMode["USE_CONFIGURED_OFFSET"] = "USE_CONFIGURED_OFFSET";
    SmoothGroupTimestampOffsetMode["USE_EVENT_START_DATE"] = "USE_EVENT_START_DATE";
})(SmoothGroupTimestampOffsetMode = exports.SmoothGroupTimestampOffsetMode || (exports.SmoothGroupTimestampOffsetMode = {}));
var MsSmoothGroupSettings;
(function (MsSmoothGroupSettings) {
    /**
     * @internal
     */
    MsSmoothGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MsSmoothGroupSettings = exports.MsSmoothGroupSettings || (exports.MsSmoothGroupSettings = {}));
var MultiplexGroupSettings;
(function (MultiplexGroupSettings) {
    /**
     * @internal
     */
    MultiplexGroupSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiplexGroupSettings = exports.MultiplexGroupSettings || (exports.MultiplexGroupSettings = {}));
//# sourceMappingURL=models_0.js.map